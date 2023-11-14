const http = require('http');
const mongo = require('mongodb');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const HTMLtoDOCX = require('./node_modules/html-to-docx/dist/html-to-docx.umd');
const process = require('process');
const server = http.createServer(app);
const io = require('socket.io')(server, { maxHttpBufferSize : 1e+7, pingTimeout : 36000000 });
const { MongoClient } = require('mongodb')
const morgan = require('morgan') //debug msg
const logger = require('./winston');
const ps = require('ps-node');
const uri = 'mongodb://poen:poen4upoen4u@localhost:27017/poenDB';
const db_name = 'poenDB';
var db;
var 관리번호 = '';
var client;

const 계정_ = {
	_id : 0,
	id: 1, 
	passwd: 1, 
	level: 1
};

app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, '../')));
app.use('/base', express.static(path.join(__dirname, '../www')));

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

app.get('/confirm_doc', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/거래확인서.html'));
});

app.get('/confirm_doc_search', (req, res) => {
	res.sendFile(path.join(__dirname, '../www/거래확인서조회.html'));
});

client = new MongoClient(uri);

server.listen(80, () => {
	console.log('listening on *:80');
});

io.on('connection', async function(socket) {
	var account = {
		login : false,
		level : ''
	}

	console.log('a user connected');

	socket.on('qr_label', async function(html_string) {
		const fileBuffer = await HTMLtoDOCX(html_string, null, {
			pageSize: { width: '7cm', height: '8cm' },
			margins: { top: '0.0cm' , bottom: '0.0cm', right: '0.0cm', left: '0.0cm' },
			pageNumber: false,
			table: { row : { cantSplit : true } },
		});

		var file = path.join(__dirname, '../doc/qr_label.docx');
		fs.writeFile(file, fileBuffer, (error) => {
			if (error) {
				console.log('Docx file creation failed');
				return;
			}
			console.log('Docx file created successfully');
		});
		socket.emit('qr_lebel_result', 'complete');
	});

	socket.on('distinct', async function(worker, col, query, field_name) {
		if(account.login == false) return;

		const result_array = await distinct(col, query, field_name);
		socket.emit('distinct_result', result_array);
	});

	socket.on('insert', async function(worker, col, doc) {
		if(account.login == false) return;

		const result = await insert(col, doc);
		socket.emit('insert_result', result);
		//logger.info('worker:'+ worker + ' insert col:' + col +'doc:'+ JSON.stringify(doc));
	});

	socket.on('insertMany', async function(worker, col, doc) {
		if(account.login == false) return;

		const result = await insertMany(col, doc);
		socket.emit('insert_result', result);
		//logger.info('worker:'+ worker + ' insert col:' + col +'doc:'+ JSON.stringify(doc));
	});

	socket.on('count', async function(level, col, query, check) {
		if(account.login == false && col != '계정' && col != '거래확인서') return;
		const cnt = await count(col, query);
		socket.emit('count_result', cnt, check);
		////logger.info('worker:'+ worker + ' count col:' + col +'query:'+ JSON.stringify(query));
		//
		if(account.login == false && col == '계정' && cnt > 0) {
			account.login = true;
		} else if(account.login == true && col == '계정' && cnt < 1){
			account.login = false;
		}
	});

	socket.on('find', async function(worker, col, query, options, check) {
		if(account.login == false && col != '거래확인서') return;
		await sleep(10);
		const result_array = await find(col, query, options);
		socket.emit('find_result', result_array, check);
		////logger.info('worker:'+ worker + ' find col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('update', async function(worker, col, filter, doc) {
		if(account.login == false && col != '계정' && col != '거래확인서') return;
		logger.info('worker:'+ worker + ' update col:' + col + 'doc:' + JSON.stringify(doc));

		const result = await update(col, filter, doc);
		socket.emit('update_result', result);
	});

	socket.on('delete', async function(worker, col, query) {
		if(account.login == false) return;
		logger.info('worker:'+ worker + ' delete col:' + col + 'query:'+ JSON.stringify(query));
		const result_count = await deleteOne(col, query);
		socket.emit('delete_result', result_count);
	});

	socket.on('delete_by_id', async function(worker, col, id) {
		if(account.login == false) return;
		logger.info('worker:'+ worker + ' delete col:' + col + 'query:'+ JSON.stringify(query));
		console.log('delete:', id);
		const result_count = await deleteOneById(col, id);
		socket.emit('delete_result', result_count);
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
				console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
				
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

/**
 *  filter = { title: "Random Harvest" };
 *  const updateDoc = {
      $set: {
	plot: `A harvest of random numbers, such as: ${Math.random()}`
      },
    };
    */
async function update(col, filter, updateDoc) {
	try {
		const options = { upsert: true };
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result = await collection.updateOne(filter, updateDoc, options);
		console.log(`Updated ${result.modifiedCount} documents`);
		console.log(`Inserted ${result.upsertedCount} documents`);
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
		return result.deletedCount;
	} catch(err) {
		console.error(err);
		logger.info(err);
		return 0;
	} finally {
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
