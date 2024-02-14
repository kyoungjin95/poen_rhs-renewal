const luxon = require('luxon');
const http = require('http');
const mongo = require('mongodb');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const HTMLtoDOCX = require('./node_modules/html-to-docx/dist/html-to-docx.umd');
const process = require('process');
const server = http.createServer(app);
const io = require('socket.io')(server, { maxHttpBufferSize : 1e+7, pingTimeout : 5000, pingInterval: 10000 });
const { MongoClient } = require('mongodb')
const morgan = require('morgan') //debug msg
const logger = require('./winston');
const ps = require('ps-node');
const multer = require('multer');
const ration = require('ration.js');
const uri = 'mongodb://poen:poen4upoen4u@localhost:27017/poenDB';
const db_name = 'poenDB';
var no = 1;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'excel/tmp');
  },
  filename: function (req, file, cb) {
    if(no > 6) no = 1;
    console.log('file No:', no);
    cb(null, file.fieldname + no + '.csv');
    no++;
  }
});

const upload = multer({ storage: storage});

const rations = {
  maxRequestsPerTimeFrame: 600,
  timeFrameInSeconds: 30,
  removeRecordsAfter: (1000 * 60 * 5),
  dropConnections: false
};
ration.setRations(rations);
app.use(ration.startRations);

var db;
var 관리번호 = '';
var client;
var _lastest_제제조번호 = '';
var _old_year = '2023';

app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, '../')));
app.use('/base', express.static(path.join(__dirname, '../www')));
app.use('/excel', express.static(path.join(__dirname, './excel')));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/index.html'));
});

app.get('/apk', (req, res) => {
	res.sendFile(path.join(__dirname, '../app/poen_rhs.apk'));
});

app.get('/manual', (req, res) => {
	res.sendFile(path.join(__dirname, '../doc/RHMS_Manual.pdf'));
});

app.get('/qr_label', (req, res) => {
	res.sendFile(path.join(__dirname, '../doc/qr_label.docx'));
});

app.get('/tesseract', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/tesseract_ocr.html'));
});

app.get('/agreement', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/agreement.html'));
});

app.get('/confirm_doc', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/거래확인서.html'));
});

app.get('/confirm_doc_search', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/거래확인서조회.html'));
});

app.get('/agreement_doc', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/제공동의서.html'));
});

app.get('/agreement_doc_search', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/제공동의서조회.html'));
});

app.post('/upload_excel', upload.array('excel', 6), (req, res, next) => {
	console.log('upload excel OK');
	res.send(200);
});

client = new MongoClient(uri);

server.listen(80, () => {
	console.log('listening on *:80');
});

io.on('connection', async function(socket) {
	var client_ip = socket.request.connection.remoteAddress; 

	console.log('connected ip', client_ip);

	socket.on('file_list', async function(list) {
		console.log('file list');
		
		const result = file_list(list);
		
		socket.emit('file_list_result', result);
		logger.info('file list:'+ JSON.stringify(list));
	});

	socket.on('insert', async function(worker, col, doc) {
		console.log('request insert');

		const result = await insert(col, doc);
		socket.emit('insert_result', result);
		logger.info('worker:'+ worker + ' insert col:' + col +'doc:'+ JSON.stringify(doc));
	});

	socket.on('insertMany', async function(worker, col, doc) {
		console.log('request insertMany');

		const result = await insertMany(col, doc);
		socket.emit('insert_result', result);
		logger.info('worker:'+ worker + ' insert col:' + col +'doc:'+ JSON.stringify(doc));
	});

	socket.on('count', async function(level, col, query, check, option = '') {
		console.log('request count');
		console.log(col, query, client_ip);
		const cnt = await count(col, query);
		socket.emit('count_result', col, cnt, check, option);
		//logger.info('worker:'+ worker + ' count col:' + col +'query:'+ JSON.stringify(query));
		//
	});

	socket.on('find', async function(worker, col, query, options, check) {
		console.log('request find');
		const result_array = await find(col, query, options);
		socket.emit('find_result', col, result_array, check);
		////logger.info('worker:'+ worker + ' find col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('findOne', async function(worker, col, query, options, check) {
		console.log('request findOne');
		const result_array = await findOne(col, query, options);
		socket.emit('find_result', col, result_array, check);

		////logger.info('worker:'+ worker + ' find col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('update', async function(worker, col, filter, doc) {
		console.log('request update');
		logger.info('client ip:' + client_ip + ' worker:'+ worker + ' update col:' + col + 'doc:' + JSON.stringify(doc));

		const result = await update(col, filter, doc);
		socket.emit('update_result', result);
	});

	socket.on('delete', async function(worker, col, query) {
		console.log('request delete');
		logger.info('worker:'+ worker + ' delete col:' + col + 'query:'+ JSON.stringify(query));
		const result_count = await deleteOne(col, query);
		socket.emit('delete_result', result_count);
	});

	socket.on('count_agree', async function(level, col, query, check, option = '') {
		console.log('request count agree');
		if(col != '제공동의서' && col != '거래확인서') return;
		const cnt = await count(col, query);
		socket.emit('count_result', col, cnt, check, option);
		//logger.info('worker:'+ worker + ' count col:' + col +'query:'+ JSON.stringify(query));
		//
	});

	socket.on('find_agree', async function(worker, col, query, options, check) {
		console.log('request find agree');
		if(col != '제공동의서' && col != '거래확인서') return;
		const result_array = await find(col, query, options);
		socket.emit('find_result', col, result_array, check);
		////logger.info('worker:'+ worker + ' find col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('findOne_agree', async function(worker, col, query, options, check) {
		console.log('request findone agree');
		if(col != '제공동의서' && col != '거래확인서') return;
		const result_array = await findOne(col, query, options);
		socket.emit('find_result', col, result_array, check);
		////logger.info('worker:'+ worker + ' find col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('update_agree', async function(worker, col, filter, doc) {
		console.log('request update agree');
		if(col != '제공동의서' && col != '거래확인서') return;
		logger.info('worker:'+ worker + ' update col:' + col + 'doc:' + JSON.stringify(doc));

		const result = await update(col, filter, doc);
		socket.emit('update_result', result);
	});

	socket.on('delete_agree', async function(worker, col, query) {
		console.log('request delete agree');
		if(col != '제공동의서' && col != '거래확인서') return;
		logger.info('worker:'+ worker + ' delete col:' + col + 'query:'+ JSON.stringify(query));
		const result_count = await deleteOne(col, query);
		socket.emit('delete_result', result_count);
	});

	socket.on('delete_by_id', async function(worker, col, id) {
		console.log('request delete by id');
		logger.info('worker:'+ worker + ' delete col:' + col);
		console.log('delete:', id);
		const result_count = await deleteOneById(col, id);
		socket.emit('delete_result', result_count);
	});

	socket.on('drop', async function(worker, col) {
		console.log('request drop:', col);
		logger.info('worker:'+ worker + ' drop col:' + col);
		const result = await drop(col);
		socket.emit('drop_result', result);
	});

	process.on('exit', function(code) {
		console.log('Exit : ', code);
		client.close();
	});
});

var flag_autobackup_db = false;

setInterval(function() {
	ps.lookup({ command: 'bash' }, (err, resultList) => {
		if (err) {
			console.log('Error getting list:', err);
		} else {
			resultList.forEach((process) => {			
				if(process.arguments == './auto_backup_db.sh') {
					flag_autobackup_db = true;
				} else {
					flag_autobackup_db = false;
				}
			});

			if(flag_autobackup_db == true) {
				io.sockets.emit('auto_backup_db_status', true);
			} else if(flag_autobackup_db == false) {
				io.sockets.emit('auto_backup_db_status', false);
			}
		}
	});
}, 10000);

async function distinct(col, query, field_name) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result_array = await collection.distinct(field_name, query);
		console.log('db: ', db_name, 'collection: ', col, 'query: ', query, 'field name: ', field_name, 'result_array: ', result_array);

		return result_array;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return null;
	} finally {
	}
}

async function insert(col, doc) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result = await collection.insertOne(doc);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);

		return result.insertedId;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return null;
	} finally {
	}
}

async function insertMany(col, doc) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result = await collection.insertMany(doc);
		//console.log(`A document was inserted with the _id: ${result.insertedId}`);

		return result.insertedId;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return null;
	} finally {
	}
}

async function count(col, query) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const cnt = await collection.countDocuments(query);
		//console.log('db: ', db_name, 'collection: ', col, 'count: ', cnt, 'by :', query);
		return cnt;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return 0;
	} finally {
	}
}

/**
 * const options = {
 * 	sort: { kind: 1 },
 * 	projection: { _id: 0, title: 1, content: 1, kind: 1, imbd: 1},
 * }
 */
async function find(col, query, options) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const cursor = await collection.find(query, options);
		const result_array = await cursor.toArray();
		//console.log('finded (', col, ':', query, ') :', result_array);
		return result_array;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return null;
	} finally {
	}
}

async function findOne(col, query, options) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result = await collection.findOne(query, options);
		//console.log('finded (', col, ':', query, ') :', result_array);
		return result;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return null;
	} finally {
	}
}

async function drop(col) {
	try {
		const database = client.db(db_name);
		const collection = await database.collection(col);
		const result = await collection.drop(function(err, result) {
			if(err) throw err;
			if(result) console.log(col, "Collection successfully dropped");
		});
		return result;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return null;
	} finally {
	}
}

async function update(col, filter, updateDoc) {
	try {
		const options = { upsert: true };
		const database = client.db(db_name);
		const collection = await database.collection(col);
		const result = await collection.updateOne(filter, updateDoc, options);
		console.log(`Updated ${result.modifiedCount} documents`);
		console.log(`Inserted ${result.upsertedCount} documents`);
		console.log(updateDoc);
		return result;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return null;
	} finally {
	}
}

async function deleteOneById(col, id) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const o_id = new mongo.ObjectId(id);
		const result = await collection.deleteOne({ '_id' : o_id });
		console.log(`Delete ${result.deletedCount} documents`);
		return result.deletedCount;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return 0;
	} finally {
	}
}

async function deleteOne(col, query) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result = await collection.deleteOne(query);
		console.log(`Delete ${result.deletedCount} documents`);
		console.log(query);
		return result.deletedCount;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return 0;
	} finally {
	}
}

function file_list(list) {
	no = 1;
	try {
		console.log(list);
		if(list.관리번호 != '') {
			var dir = 'excel/' + list.관리번호;

			if(!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		}  else {
			return false;
		}
		
		var n = 1;
		if(list.f1 != '') {
			var old_path = 'excel/tmp/excel' + n + '.csv';
			var new_path = 'excel/' + list.관리번호 + '/excel1.csv';
			fs.rename(old_path, new_path, function(err) {
				if(err) throw err;
				console.log('successfully rename');
			});
			n++;
		} 
			
		if(list.f2 != '') {
			var old_path = 'excel/tmp/excel' + n + '.csv';
			var new_path = 'excel/' + list.관리번호 + '/excel2.csv';
			fs.rename(old_path, new_path, function(err) {
				if(err) throw err;
				console.log('successfully rename');
			});
			n++;
		}

		if(list.f3 != '') {
			var old_path = 'excel/tmp/excel' + n + '.csv';
			var new_path = 'excel/' + list.관리번호 + '/excel3.csv';
			fs.rename(old_path, new_path, function(err) {
				if(err) throw err;
				console.log('successfully rename');
			});
			n++;
		}

		if(list.f4 != '') {
			var old_path = 'excel/tmp/excel' + n + '.csv';
			var new_path = 'excel/' + list.관리번호 + '/excel4.csv';
			fs.rename(old_path, new_path, function(err) {
				if(err) throw err;
				console.log('successfully rename');
			});
			n++
		}

		if(list.f5 != '') {
			var old_path = 'excel/tmp/excel' + n + '.csv';
			var new_path = 'excel/' + list.관리번호 + '/excel5.csv';
			fs.rename(old_path, new_path, function(err) {
				if(err) throw err;
				console.log('successfully rename');
			});
			n++;
		}

		if(list.f6 != '') {
			var old_path = 'excel/tmp/excel' + n + '.csv';
			var new_path = 'excel/' + list.관리번호 + '/excel6.csv';
			fs.rename(old_path, new_path, function(err) {
				if(err) throw err;
				console.log('successfully rename');
			});
		}
		return true;
	} catch(err) {
		return false;
	} finally {
	}

}

function csvFileToJSON(path) {
	const file_csv = fs.readFileSync(path);
	const string_csv = file_csv.toString();
	return csvToJSON(string_csv);
}

function csvToJSON(csv_string){
    const rows = csv_string.split("\r\n");
    const jsonArray = [];
    const header = rows[0].split(",");

    for(let i = 1; i < rows.length; i++){
        let obj = {};
        let row = rows[i].split(",");

        for(let j=0; j < header.length; j++){
            obj[header[j]] = row[j];
        }
  
        jsonArray.push(obj);
  
    }
    
    return JSON.stringify(jsonArray);
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
