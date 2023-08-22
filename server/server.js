const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const process = require('process');
const server = http.createServer(app);
const io = require('socket.io')(server, { maxHttpBufferSize : 1e+9 });
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
	res.sendFile(path.join(__dirname, '../doc/Poen_RHS_Manual.xlsx'));
});

app.get('/all_data', (req, res) => {
	res.sendFile(path.join(__dirname, '../doc/all_data.csv'));
});
server.listen(80, () => {
	console.log('listening on *:80');
	client = new MongoClient(uri);
});

io.on('connection', async function(socket) {
	var account = {
		login : false,
		level : ''
	}

	console.log('a user connected');
	
	socket.on('aggregate', async function(level) {
		if(account.login == false) return;
		account.level = level;
		console.log('level:', account.level);
		await socket.emit('aggregate_result', 'start');

		var file = path.join(__dirname, '../doc/all_data.csv');
		var line = excel_header_line();
		await fs.writeFile(file, line, function (err) {
			if (err) throw err;
		});

		await write_data(file, account.level);

		socket.emit('aggregate_result', 'complete');
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
		logger.info('worker:'+ worker + ' insert col:' + col +'doc:'+ JSON.stringify(doc));
	});

	socket.on('count', async function(level, col, query, check) {
		if(account.login == false && col != '계정') return;
		const cnt = await count(col, query);
		socket.emit('count_result', cnt, check);
		//logger.info('worker:'+ worker + ' count col:' + col +'query:'+ JSON.stringify(query));
		if(account.login == false && col == '계정' && cnt > 0) {
			account.login = true;
		} else if(account.login == true && col == '계정' && cnt < 1){
			account.login = false;
		}
	});

	socket.on('find', async function(worker, col, query, options, check) {
		if(account.login == false) return;

		const result_array = await find(col, query, options);
		socket.emit('find_result', result_array, check);
		//logger.info('worker:'+ worker + ' find col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('update', async function(worker, col, filter, doc) {
		if(account.login == false && col != '계정') return;

		const result = await update(col, filter, doc);
		socket.emit('update_result', result);
		logger.info('worker:'+ worker + ' update col:' + col + 'doc:' + JSON.stringify(doc));
	});

	socket.on('delete', async function(worker, col, query) {
		if(account.login == false) return;

		const result_count = await deleteOne(col, query);
		socket.emit('delete_result', result_count);
		logger.info('worker:'+ worker + ' delete col:' + col + 'query:'+ JSON.stringify(query));
	});

	process.on('exit', function(code) {
		console.log('Exit : ', code);
		client.close();
	});
});


setInterval(function() {
	var flag_autobackup_db = false;
	ps.lookup({ command: 'bash' }, (err, resultList) => {
		if (err) {
			console.log('Error getting list:', err);
		} else {
			resultList.forEach((process) => {
				console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
				if(process.arguments == './auto_backup_db.sh') {
					console.log('auto backup db is running');
					flag_autobackup_db = true;
					return;
				} else {
					io.sockets.emit('auto_backup_db_status', false);
				}
			});
			if(flag_autobackup_db == true) {
				io.sockets.emit('auto_backup_db_status', true);
			} else {
				io.sockets.emit('auto_backup_db_status', false);
			}
		}
	});
}, 10000);

/**
 * update를 사용할것 for 중복방지
 */
async function aggregate() {
	try {
		const database = client.db(db_name);
		const collection = database.collection('BSA재제조');
		const result_array = await collection.aggregate([
			{$lookup: {from: "입고", localField: "관리번호", foreignField: "관리번호", as: "입고",},},
			{$lookup: {from: "세척", localField: "관리번호", foreignField: "관리번호", as: "세척",},},
			{$lookup: {from: "기초검사", localField: "관리번호", foreignField: "관리번호", as: "기초검사",},},
			{$lookup: {from: "성능검사", localField: "관리번호", foreignField: "관리번호", as: "성능검사",},},
			{$lookup: {from: "EOL", localField: "관리번호", foreignField: "관리번호", as: "EOL",},},
			{$lookup: {from: "출하정보", localField: "관리번호", foreignField: "관리번호", as: "출하정보",},},
			{$lookup: {from: "분해조립", localField: "관리번호", foreignField: "관리번호", as: "분해조립",},},
			{$lookup: {from: "특이사항", localField: "관리번호", foreignField: "관리번호", as: "특이사항",},},
			{$lookup: {from: "교체부품상세1", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세1",},},
			{$lookup: {from: "교체부품상세2", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세2",},},
			{$lookup: {from: "교체부품상세3", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세3",},},
			{$lookup: {from: "교체부품상세4", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세4",},},
			{$lookup: {from: "교체부품상세5", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세5",},},
			{$lookup: {from: "교체부품상세6", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세6",},},
			{$lookup: {from: "교체부품상세7", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세7",},},
			{$lookup: {from: "교체부품상세8", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세8",},},
			{$lookup: {from: "교체부품상세9", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세9",},},
			{$lookup: {from: "교체부품상세10", localField: "관리번호", foreignField: "관리번호", as: "교체부품상세10",},},
		]);
		//console.log('db: ', db_name, 'collection: ', col, 'query: ', query, 'result_array: ', result_array);

		return result_array;
	} catch(err) {
		console.error(err);
	} finally {
	}
}

async function distinct(col, query, field_name) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result_array = await collection.distinct(field_name, query);
		console.log('db: ', db_name, 'collection: ', col, 'query: ', query, 'field name: ', field_name, 'result_array: ', result_array);

		return result_array;
	} catch(err) {
		console.error(err);
	} finally {
	}
}

async function insert(col, doc) {
	try {
		const client = new MongoClient(uri);
		const database = client.db(db_name);
		const collection = database.collection(col);
		const result = await collection.insertOne(doc);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);

		return result.insertedId;
	} catch(err) {
		console.error(err);
	} finally {
	}
}

async function count(col, query) {
	try {
		const database = client.db(db_name);
		const collection = database.collection(col);
		const cnt = await collection.countDocuments(query);
		console.log('db: ', db_name, 'collection: ', col, 'count: ', cnt, 'by :', query);
		return cnt;
	} catch(err) {
		console.error(err);
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
		console.log('finded (', col, ':', query, ') :', result_array);
		return result_array;
	} catch(err) {
		console.error(err);
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
		console.log.error(err);
	} finally {
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

async function write_data(file, level) { 
	console.log('level:', level);
	const result_array = await aggregate();

	for await (const doc of result_array) {
		if(level == 'hyundai') {
			switch(doc.차종) {
				case 'DE' :
				case 'DE_EV' :
				case 'DEPBV' :
				case 'DEPBV-EV' :
				case 'CV' :
				case 'CV_EV' :
				case 'MV' :
				case 'MV_EV' :
				case 'PU':
				case 'PU_EV' :
				case 'SG2' :
				case 'SG2-EV' :
				case 'TAM' :
				case 'TAM_EV' :
				case 'PS' :
				case 'PS_EV' :
				case 'SK3' :
				case 'SK3_EV' :
					continue;
			}
		}

		if(level == 'kia') {
			switch(doc.차종) {
				case 'OS' :
				case 'OS_EV' :
				case 'NE' :
				case 'NE_EV' :
				case 'HR' :
				case 'HR_EV' :
				case 'LK' : 
				case 'LK_EV' : 
				case 'LM' :
				case 'LM_EV' :
				case 'LKFC' :
				case 'LKFC_EV' :
				case 'CS' :
				case 'CS-EV' :
				case 'CS_EV' :
				case 'SX2' :
				case 'SX2_EV' :
				case 'AE' :
				case 'AE_EV' :
				case 'CE' :
				case 'CE_EV' :
				case 'ME' :
				case 'ME_EV' :
				case 'FE' :
				case 'FE_EV' :
				case 'RG3' :
				case 'RG3-EV' :
				case 'JW' :
				case 'JW_EV' :
				case 'JK' :
				case 'JK_EV' :
				case 'JX' :
				case 'JX_EV' :
					continue;
			}
		}
		if((level == 'kia' || level == 'hyundai') && String(doc.차종).trim() == '' || doc.차종 == undefined) continue;
		var line = "\uFEFF";
		line += doc.관리번호;
		line += ',';
		line += doc.재제조번호;
		line += ',';
		line += doc.차종;
		line += ',';
		line += doc.품번;
		line += ',';
		line += doc.RO_no;
		line += ',';
		line += doc.공정단계;
		line += ',';
		line += doc.적재No;
		line += ',';
		try {
			line += await (new Date(doc.입고)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.제조투입)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.세척투입일)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.세척)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.기초검사투입일)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.기초검사)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.분해조립투입일)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.분해조립)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.성능검사투입일)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.성능검사)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.EOL투입일)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.EOL)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.출하)).toISOString();
		} catch (e){
		}
		line += ',';
		line += doc.소재지;
		line += ',';
		try {
			line += await (new Date(doc.마지막충전일)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.반품입고)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.재출하)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.완전분해)).toISOString();
		} catch (e){
		}
		line += ',';
		try {
			line += await (new Date(doc.폐기)).toISOString();
		} catch (e){
		}
		line += ',';
		if(doc.입고.length != 0) {
			try {
				line += await (new Date(doc.입고[0]['입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.입고[0]['입고처'];
			line += ',';
			line += doc.입고[0]['차종'];
			line += ',';
			line += doc.입고[0]['품번'];
			line += ',';
			line += doc.입고[0]['RO_no'];
			line += ',';
			line += doc.입고[0]['VIN'];
			line += ',';
			line += doc.입고[0]['랙번호'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.세척.length != 0) {
			try {
				line += await (new Date(doc.세척[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			try {
				line += await (new Date(doc.세척[0]['공정완료일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.세척[0]['기밀검사_케이스'];
			line += ',';
			line += doc.세척[0]['기밀검사_케이스_특이사항'];
			line += ',';
			line += doc.세척[0]['특이사항'];

		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.기초검사.length != 0) {
			try {
				line += await (new Date(doc.기초검사[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.기초검사[0]['육안검사_외부'];
			line += ',';
			line += doc.기초검사[0]['육안검사외부_특이사항'];
			line += ',';
			line += doc.기초검사[0]['육안검사_내부'];
			line += ',';
			line += doc.기초검사[0]['육안검사_내부_특이사항'];
			line += ',';
			line += doc.기초검사[0]['기밀검사_냉각유로'];
			line += ',';
			line += doc.기초검사[0]['기밀검사_냉각유로_특이사항'];
			line += ',';
			line += doc.기초검사[0]['절연검사_Plus'];
			line += ',';
			line += doc.기초검사[0]['절연검사_Minus'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드1'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드2'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드3'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드4'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드5'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드6'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드7'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드8'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드9'];
			line += ',';
			line += doc.기초검사[0]['통신검사_DTC코드10'];
			line += ',';
			line += doc.기초검사[0]['통신검사_팩전업'];
			line += ',';
			line += doc.기초검사[0]['통신검사_셀전압편차'];
			line += ',';
			line += doc.기초검사[0]['통신검사_릴레이구동'];
			line += ',';
			line += doc.기초검사[0]['고장현상코드'];
			line += ',';
			line += doc.기초검사[0]['고장현상명'];
			line += ',';
			line += doc.기초검사[0]['문제Cell_No'];
			line += ',';
			line += doc.기초검사[0]['문제BMA_No'];
			line += ',';
			line += doc.기초검사[0]['문제BMA_cnt'];
			line += ',';
			line += doc.기초검사[0]['센터진단내용'];
			line += ',';
			line += doc.기초검사[0]['검사자'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.분해조립.length != 0) {
			try {
				line += await (new Date(doc.분해조립[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.분해조립[0]['BMU1'];
			line += ',';
			line += doc.분해조립[0]['BMU2'];
			line += ',';
			line += doc.분해조립[0]['BMU3'];
			line += ',';
			line += doc.분해조립[0]['BMU4'];
			line += ',';
			line += doc.분해조립[0]['BMU5'];
			line += ',';
			line += doc.분해조립[0]['BMU6'];
			line += ',';
			line += doc.분해조립[0]['BMU7'];
			line += ',';
			line += doc.분해조립[0]['BMU8'];
			line += ',';
			line += doc.분해조립[0]['BMU9'];
			line += ',';
			line += doc.분해조립[0]['BMU10'];
			line += ',';
			line += doc.분해조립[0]['CMU1'];
			line += ',';
			line += doc.분해조립[0]['CMU2'];
			line += ',';
			line += doc.분해조립[0]['CMU3'];
			line += ',';
			line += doc.분해조립[0]['CMU4'];
			line += ',';
			line += doc.분해조립[0]['CMU5'];
			line += ',';
			line += doc.분해조립[0]['CMU6'];
			line += ',';
			line += doc.분해조립[0]['CMU7'];
			line += ',';
			line += doc.분해조립[0]['CMU8'];
			line += ',';
			line += doc.분해조립[0]['CMU9'];
			line += ',';
			line += doc.분해조립[0]['CMU10'];
			line += ',';
			line += doc.분해조립[0]['PRA1'];
			line += ',';
			line += doc.분해조립[0]['PRA2'];
			line += ',';
			line += doc.분해조립[0]['PRA3'];
			line += ',';
			line += doc.분해조립[0]['PRA4'];
			line += ',';
			line += doc.분해조립[0]['PRA5'];
			line += ',';
			line += doc.분해조립[0]['PRA6'];
			line += ',';
			line += doc.분해조립[0]['PRA7'];
			line += ',';
			line += doc.분해조립[0]['PRA8'];
			line += ',';
			line += doc.분해조립[0]['PRA9'];
			line += ',';
			line += doc.분해조립[0]['PRA10'];
			line += ',';
			line += doc.분해조립[0]['SPA1'];
			line += ',';
			line += doc.분해조립[0]['SPA2'];
			line += ',';
			line += doc.분해조립[0]['SPA3'];
			line += ',';
			line += doc.분해조립[0]['SPA4'];
			line += ',';
			line += doc.분해조립[0]['SPA5'];
			line += ',';
			line += doc.분해조립[0]['SPA6'];
			line += ',';
			line += doc.분해조립[0]['SPA7'];
			line += ',';
			line += doc.분해조립[0]['SPA8'];
			line += ',';
			line += doc.분해조립[0]['SPA9'];
			line += ',';
			line += doc.분해조립[0]['SPA10'];
			line += ',';
			line += doc.분해조립[0]['LWR_C1'];
			line += ',';
			line += doc.분해조립[0]['LWR_C2'];
			line += ',';
			line += doc.분해조립[0]['LWR_C3'];
			line += ',';
			line += doc.분해조립[0]['LWR_C4'];
			line += ',';
			line += doc.분해조립[0]['LWR_C5'];
			line += ',';
			line += doc.분해조립[0]['LWR_C6'];
			line += ',';
			line += doc.분해조립[0]['LWR_C7'];
			line += ',';
			line += doc.분해조립[0]['LWR_C8'];
			line += ',';
			line += doc.분해조립[0]['LWR_C9'];
			line += ',';
			line += doc.분해조립[0]['LWR_C10'];
			line += ',';
			line += doc.분해조립[0]['UPR_C1'];
			line += ',';
			line += doc.분해조립[0]['UPR_C2'];
			line += ',';
			line += doc.분해조립[0]['UPR_C3'];
			line += ',';
			line += doc.분해조립[0]['UPR_C4'];
			line += ',';
			line += doc.분해조립[0]['UPR_C5'];
			line += ',';
			line += doc.분해조립[0]['UPR_C6'];
			line += ',';
			line += doc.분해조립[0]['UPR_C7'];
			line += ',';
			line += doc.분해조립[0]['UPR_C8'];
			line += ',';
			line += doc.분해조립[0]['UPR_C9'];
			line += ',';
			line += doc.분해조립[0]['UPR_C10'];
			line += ',';
			line += doc.분해조립[0]['PBE']
			line += ',';
			line += doc.분해조립[0]['Gasket'];
			line += ',';
			line += doc.분해조립[0]['Relay1'];
			line += ',';
			line += doc.분해조립[0]['Relay2'];
			line += ',';
			line += doc.분해조립[0]['Relay3'];
			line += ',';
			line += doc.분해조립[0]['Relay4'];
			line += ',';
			line += doc.분해조립[0]['Relay5'];
			line += ',';
			line += doc.분해조립[0]['Relay6'];
			line += ',';
			line += doc.분해조립[0]['Relay7'];
			line += ',';
			line += doc.분해조립[0]['Relay8'];
			line += ',';
			line += doc.분해조립[0]['Relay9'];
			line += ',';
			line += doc.분해조립[0]['Relay10'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR1'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR2'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR3'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR4'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR5'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR6'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR7'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR8'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR9'];
			line += ',';
			line += doc.분해조립[0]['HV_CNTR10'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR1'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR2'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR3'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR4'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR5'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR6'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR7'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR8'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR9'];
			line += ',';
			line += doc.분해조립[0]['Heating_CNTR10'];
			line += ',';
			line += doc.분해조립[0]['FuseBox1'];
			line += ',';
			line += doc.분해조립[0]['FuseBox2'];
			line += ',';
			line += doc.분해조립[0]['FuseBox3'];
			line += ',';
			line += doc.분해조립[0]['FuseBox4'];
			line += ',';
			line += doc.분해조립[0]['FuseBox5'];
			line += ',';
			line += doc.분해조립[0]['FuseBox6'];
			line += ',';
			line += doc.분해조립[0]['FuseBox7'];
			line += ',';
			line += doc.분해조립[0]['FuseBox8'];
			line += ',';
			line += doc.분해조립[0]['FuseBox9'];
			line += ',';
			line += doc.분해조립[0]['FuseBox10'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H1'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H2'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H3'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H4'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H5'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H6'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H7'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H8'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H9'];
			line += ',';
			line += doc.분해조립[0]['LV_W_H10'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H1'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H2'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H3'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H4'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H5'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H6'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H7'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H8'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H9'];
			line += ',';
			line += doc.분해조립[0]['HV_W_H10'];
			line += ',';
			line += doc.분해조립[0]['온도센서1'];
			line += ',';
			line += doc.분해조립[0]['온도센서2'];
			line += ',';
			line += doc.분해조립[0]['온도센서3'];
			line += ',';
			line += doc.분해조립[0]['온도센서4'];
			line += ',';
			line += doc.분해조립[0]['온도센서5'];
			line += ',';
			line += doc.분해조립[0]['온도센서6'];
			line += ',';
			line += doc.분해조립[0]['온도센서7'];
			line += ',';
			line += doc.분해조립[0]['온도센서8'];
			line += ',';
			line += doc.분해조립[0]['온도센서9'];
			line += ',';
			line += doc.분해조립[0]['온도센서10'];
			line += ',';
			line += doc.분해조립[0]['Busbars'];
			line += ',';
			line += doc.분해조립[0]['BMA1'];
			line += ',';
			line += doc.분해조립[0]['BMA2'];
			line += ',';
			line += doc.분해조립[0]['BMA3'];
			line += ',';
			line += doc.분해조립[0]['BMA4'];
			line += ',';
			line += doc.분해조립[0]['BMA5'];
			line += ',';
			line += doc.분해조립[0]['BMA6'];
			line += ',';
			line += doc.분해조립[0]['BMA7'];
			line += ',';
			line += doc.분해조립[0]['BMA8'];
			line += ',';
			line += doc.분해조립[0]['BMA9'];
			line += ',';
			line += doc.분해조립[0]['BMA10'];
			line += ',';
			line += doc.분해조립[0]['ETC'];
			line += ',';
			try {
				line += await (new Date(doc.분해조립[0]['공정완료일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.분해조립[0]['작업자'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.성능검사.length != 0) {
			try {
				line += await (new Date(doc.성능검사[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.성능검사[0]['용량평가'];
			line += ',';
			line += doc.성능검사[0]['SOC60Percent'];
			line += ',';
			line += doc.성능검사[0]['DCIR'];
			line += ',';
			line += doc.성능검사[0]['DCIR_Charge'];
			line += ',';
			line += doc.성능검사[0]['DCIR_Discharge'];
			line += ',';
			line += doc.성능검사[0]['절연저항_HVP'];
			line += ',';
			line += doc.성능검사[0]['절연저항_HVN'];
			line += ',';
			try {
				line += await (new Date(doc.성능검사[0]['공정완료일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.성능검사[0]['비고'];
			line += ',';
			line += doc.성능검사[0]['검사자'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.EOL.length != 0) {
			try {
				line += await (new Date(doc.EOL[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.EOL[0]['UPR_C조립'];
			line += ',';
			line += doc.EOL[0]['기밀검사_케이스'];
			line += ',';
			line += doc.EOL[0]['기밀검사_냉각유로'];
			line += ',';
			line += doc.EOL[0]['절연검사_Plus'];
			line += ',';
			line += doc.EOL[0]['절연검사_Minus'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드1'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드2'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드3'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드4'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드5'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드6'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드7'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드8'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드9'];
			line += ',';
			line += doc.EOL[0]['통신검사_DTC코드10'];
			line += ',';
			line += doc.EOL[0]['통신검사_팩전압'];
			line += ',';
			line += doc.EOL[0]['통신검사_셀전압편차'];
			line += ',';
			line += doc.EOL[0]['통신검사_릴레이구동'];
			line += ',';
			line += doc.EOL[0]['공정완료일'];
			try {
				line += await (new Date(doc.EOL[0]['공정완료일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.EOL[0]['비고'];
			line += ',';
			line += doc.EOL[0]['QR'];
			line += ',';
			line += doc.EOL[0]['검사자'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.출하정보.length != 0) {
			try {
				line += await (new Date(doc.출하정보[0]['출하일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.출하정보[0]['출하코드'];
			line += ',';
			line += doc.출하정보[0]['납품처'];;
			line += ',';
			try {
				line += await (new Date(doc.출하정보[0]['검사일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.출하정보[0]['검토'];
			line += ',';
			line += doc.출하정보[0]['승인'];
			line += ',';
			line += doc.출하정보[0]['입고정보_작성확인'];
			line += ',';
			line += doc.출하정보[0]['재제조_이력문서_작성확인'];
			line += ',';
			line += doc.출하정보[0]['기초보고서_작성확인'];
			line += ',';
			line += doc.출하정보[0]['완료보고서_작성확인'];;
			line += ',';
			line += doc.출하정보[0]['클린상태'];
			line += ',';
			line += doc.출하정보[0]['팔레트_적정위치'];
			line += ',';
			line += doc.출하정보[0]['포장랩상태'];
			line += ',';
			line += doc.출하정보[0]['UPR_QR'];
			line += ',';
			line += doc.출하정보[0]['LWR_QR'];
			line += ',';
			line += doc.출하정보[0]['HKMC_스티커_URP'];
			line += ',';
			line += doc.출하정보[0]['냉각유로_커버1'];
			line += ',';
			line += doc.출하정보[0]['냉각유로_커버2'];
			line += ',';
			line += doc.출하정보[0]['종합평가'];
			line += ',';
			line += doc.출하정보[0]['용량평가'];
			line += ',';
			line += doc.출하정보[0]['용량평가_측정값'];
			line += ',';
			line += doc.출하정보[0]['SOC60'];
			line += ',';
			line += doc.출하정보[0]['SOC60_팩전압'];
			line += ',';
			line += doc.출하정보[0]['SOC60_편차'];
			line += ',';
			line += doc.출하정보[0]['DCIR'];
			line += ',';
			line += doc.출하정보[0]['DCIR_측정값'];
			line += ',';
			line += doc.출하정보[0]['릴레이동시구동'];
			line += ',';
			line += doc.출하정보[0]['케이스'];
			line += ',';
			line += doc.출하정보[0]['케이스_측정값'];
			line += ',';
			line += doc.출하정보[0]['냉각유로'];
			line += ',';
			line += doc.출하정보[0]['냉각유로_측정값'];
			line += ',';
			line += doc.출하정보[0]['접지Plus'];
			line += ',';
			line += doc.출하정보[0]['접지Plus_측정값'];
			line += ',';
			line += doc.출하정보[0]['접지Minus'];
			line += ',';
			line += doc.출하정보[0]['접지Minus_측정값'];
			line += ',';
			line += doc.출하정보[0]['DTC'];
			line += ',';
			line += doc.출하정보[0]['DTC_현재'];
			line += ',';
			line += doc.출하정보[0]['DTC_과거'];
			line += ',';
			line += doc.출하정보[0]['BSA전압'];
			line += ',';
			line += doc.출하정보[0]['BSA전압_측정값'];
			line += ',';
			line += doc.출하정보[0]['셀전압편차'];
			line += ',';
			line += doc.출하정보[0]['셀전압편차_측정값'];
			line += ',';
			line += doc.출하정보[0]['BMS고장NO'];
			line += ',';
			line += doc.출하정보[0]['BMS융착NO'];
			line += ',';
			line += doc.출하정보[0]['절연저항'];
			line += ',';
			line += doc.출하정보[0]['절연저항_측정값'];
			line += ',';
			line += doc.출하정보[0]['배터리온도'];
			line += ',';
			line += doc.출하정보[0]['배터리온도_최대'];
			line += ',';
			line += doc.출하정보[0]['배터리온도_최소'];
			line += ',';
			line += doc.출하정보[0]['SOH'];
			line += ',';
			line += doc.출하정보[0]['릴레이_강제구동'];
			line += ',';
			line += doc.출하정보[0]['커넥터_체결검사'];
			line += ',';
			line += doc.출하정보[0]['통신화면_캡쳐'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.특이사항.length != 0) {
			line += doc.특이사항[0]['특이사항'];
		} else {
		}
		line += ',';
		if(doc.교체부품상세1.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세1[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세1[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세1[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세1[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세1[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세1[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세1[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세1[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세1[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세1[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세2.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세2[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세2[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세2[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세2[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세2[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세2[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세2[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세2[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세2[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세2[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세3.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세3[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세3[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세3[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세3[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세3[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세3[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세3[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세3[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세3[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세3[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세4.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세4[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세4[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세4[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세4[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세4[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세4[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세4[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세4[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세4[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세4[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세5.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세5[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세5[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세5[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세5[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세5[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세5[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세5[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세5[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세5[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세5[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세6.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세6[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세6[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세6[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세6[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세6[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세6[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세6[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세6[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세6[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세6[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세7.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세7[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세7[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세7[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세7[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세7[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세7[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세7[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세7[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세7[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세7[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세8.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세8[0]['공정입고일'])).toISOString();
			} catch (e){
			}
			line += ',';
			line += doc.교체부품상세8[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세8[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세8[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세8[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세8[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세8[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세8[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세8[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세8[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세9.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세9[0]['공정입고일'])).toISOString();
			} catch (e){
			
			}
			line += ',';
			line += doc.교체부품상세9[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세9[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세9[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세9[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세9[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세9[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세9[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세9[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세9[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += ',';
		if(doc.교체부품상세10.length != 0) {
			try {
				line += await (new Date(doc.교체부품상세10[0]['공정입고일'])).toISOString();
			} catch (e){
			
			}

			line += ',';
			line += doc.교체부품상세10[0]['ORIGIN_관리번호'];
			line += ',';
			line += doc.교체부품상세10[0]['교체전_품명'];
			line += ',';
			line += doc.교체부품상세10[0]['교체전_품번'];
			line += ',';
			line += doc.교체부품상세10[0]['교체전_QR'];
			line += ',';
			line += doc.교체부품상세10[0]['교체후_신품_고품'];
			line += ',';
			line += doc.교체부품상세10[0]['교체후_고품식별'];
			line += ',';
			line += doc.교체부품상세10[0]['교체후_품번'];
			line += ',';
			line += doc.교체부품상세10[0]['교체후_QR'];
			line += ',';
			line += doc.교체부품상세10[0]['교체사유'];
		} else {
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
			line += ',';
		}
		line += '\n';
		line = await line.replaceAll('undefined', '');
		line = await line.replaceAll('Invalid Date', '');

		await fs.appendFile(file, line, function (err) {
			if (err) throw err;
		});

		sleep(10)
	}
}

function excel_header_line() {
	var line = "\uFEFF";
	line += '관리번호';
	line += ',';
	line += '재제조번호';
	line += ',';
	line += '차종';
	line += ',';
	line += '품번';
	line += ',';
	line += 'RO_no';
	line += ',';
	line += '공정단계';
	line += ',';
	line += '적재No';
	line += ',';
	line += '입고';
	line += ',';
	line += '제조투입';
	line += ',';
	line += '세척투입일';
	line += ',';
	line += '세척';
	line += ',';
	line += '기초검사투입일';
	line += ',';
	line += '기초검사';
	line += ',';
	line += '분해조립투입일';
	line += ',';
	line += '분해조립';
	line += ',';
	line += '성능검사투입일';
	line += ',';
	line += '성능검사';
	line += ',';
	line += 'EOL투입일';
	line += ',';
	line += 'EOL';
	line += ',';
	line += '출하';
	line += ',';
	line += '소재지';
	line += ',';
	line += '마지막충전일';
	line += ',';
	line += '반품입고';
	line += ',';
	line += '재출하';
	line += ',';
	line += '완전분해';
	line += ',';
	line += '폐기';
	line += ',';
	line += '입고.입고일';
	line += ',';
	line += '입고.입고처';
	line += ',';
	line += '입고.차종';
	line += ',';
	line += '입고.품번';
	line += ',';
	line += 'RO_no';
	line += ',';
	line += 'VIN';
	line += ',';
	line += '랙번호';
	line += ',';
	line += '세척.공정입고일';
	line += ',';
	line += '세척.공정완료일';
	line += ',';
	line += '세척.기밀검사_케이스';
	line += ',';
	line += '세척.기밀검사_케이스_특이사항',
	line += ',';
	line += '세척.특이사항';
	line += ',';
	line += '기초검사.공정입고일';
	line += ',';
	line += '기초검사.육안검사_외부';
	line += ',';
	line += '기초검사.육안검사외부_특이사항';
	line += ',';
	line += '기초검사.육안검사_내부';
	line += ',';
	line += '기초검사.육안검사_내부_특이사항';
	line += ',';
	line += '기초검사.기밀검사_냉각유로';
	line += ',';
	line += '기초검사.기밀검사_냉각유로_특이사항';
	line += ',';
	line += '기초검사.절연검사_Plus';
	line += ',';
	line += '기초검사.절연검사_Minus';
	line += ',';
	line += '기초검사.통신검사_DTC코드1';
	line += ',';
	line += '기초검사.통신검사_DTC코드2';
	line += ',';
	line += '기초검사.통신검사_DTC코드3';
	line += ',';
	line += '기초검사.통신검사_DTC코드4';
	line += ',';
	line += '기초검사.통신검사_DTC코드5';
	line += ',';
	line += '기초검사.통신검사_DTC코드6';
	line += ',';
	line += '기초검사.통신검사_DTC코드7';
	line += ',';
	line += '기초검사.통신검사_DTC코드8';
	line += ',';
	line += '기초검사.통신검사_DTC코드9';
	line += ',';
	line += '기초검사.통신검사_DTC코드10';
	line += ',';
	line += '기초검사.통신검사_팩전업';
	line += ',';
	line += '기초검사.통신검사_셀전압편차';
	line += ',';
	line += '기초검사.통신검사_릴레이구동';
	line += ',';
	line += '기초검사.비고';
	line += ',';
	line += '기초검사.센터진단내용';
	line += ',';
	line += '기초검사.검사자';
	line += ',';
	line += '분해조립.공정입고일';
	line += ',';
	line += '분해조립.BMU1';
	line += ',';
	line += '분해조립.BMU2';
	line += ',';
	line += '분해조립.BMU3';
	line += ',';
	line += '분해조립.BMU4';
	line += ',';
	line += '분해조립.BMU5';
	line += ',';
	line += '분해조립.BMU6';
	line += ',';
	line += '분해조립.BMU7';
	line += ',';
	line += '분해조립.BMU8';
	line += ',';
	line += '분해조립.BMU9';
	line += ',';
	line += '분해조립.BMU10';
	line += ',';
	line += '분해조립.CMU1';
	line += ',';
	line += '분해조립.CMU2';
	line += ',';
	line += '분해조립.CMU3';
	line += ',';
	line += '분해조립.CMU4';
	line += ',';
	line += '분해조립.CMU5';
	line += ',';
	line += '분해조립.CMU6';
	line += ',';
	line += '분해조립.CMU7';
	line += ',';
	line += '분해조립.CMU8';
	line += ',';
	line += '분해조립.CMU9';
	line += ',';
	line += '분해조립.CMU10';
	line += ',';
	line += '분해조립.PRA1';
	line += ',';
	line += '분해조립.PRA2';
	line += ',';
	line += '분해조립.PRA3';
	line += ',';
	line += '분해조립.PRA4';
	line += ',';
	line += '분해조립.PRA5';
	line += ',';
	line += '분해조립.PRA6';
	line += ',';
	line += '분해조립.PRA7';
	line += ',';
	line += '분해조립.PRA8';
	line += ',';
	line += '분해조립.PRA9';
	line += ',';
	line += '분해조립.PRA10';
	line += ',';
	line += '분해조립.SPA1';
	line += ',';
	line += '분해조립.SPA2';
	line += ',';
	line += '분해조립.SPA3';
	line += ',';
	line += '분해조립.SPA4';
	line += ',';
	line += '분해조립.SPA5';
	line += ',';
	line += '분해조립.SPA6';
	line += ',';
	line += '분해조립.SPA7';
	line += ',';
	line += '분해조립.SPA8';
	line += ',';
	line += '분해조립.SPA9';
	line += ',';
	line += '분해조립.SPA10';
	line += ',';
	line += '분해조립.LWR_C1';
	line += ',';
	line += '분해조립.LWR_C2';
	line += ',';
	line += '분해조립.LWR_C3';
	line += ',';
	line += '분해조립.LWR_C4';
	line += ',';
	line += '분해조립.LWR_C5';
	line += ',';
	line += '분해조립.LWR_C6';
	line += ',';
	line += '분해조립.LWR_C7';
	line += ',';
	line += '분해조립.LWR_C8';
	line += ',';
	line += '분해조립.LWR_C9';
	line += ',';
	line += '분해조립.LWR_C10';
	line += ',';
	line += '분해조립.UPR_C1';
	line += ',';
	line += '분해조립.UPR_C2';
	line += ',';
	line += '분해조립.UPR_C3';
	line += ',';
	line += '분해조립.UPR_C4';
	line += ',';
	line += '분해조립.UPR_C5';
	line += ',';
	line += '분해조립.UPR_C6';
	line += ',';
	line += '분해조립.UPR_C7';
	line += ',';
	line += '분해조립.UPR_C8';
	line += ',';
	line += '분해조립.UPR_C9';
	line += ',';
	line += '분해조립.UPR_C10';
	line += ',';
	line += '분해조립.PBE';
	line += ',';
	line += '분해조립.Gasket';
	line += ',';
	line += '분해조립.Relay1';
	line += ',';
	line += '분해조립.Relay2';
	line += ',';
	line += '분해조립.Relay3';
	line += ',';
	line += '분해조립.Relay4';
	line += ',';
	line += '분해조립.Relay5';
	line += ',';
	line += '분해조립.Relay6';
	line += ',';
	line += '분해조립.Relay7';
	line += ',';
	line += '분해조립.Relay8';
	line += ',';
	line += '분해조립.Relay9';
	line += ',';
	line += '분해조립.Relay10';
	line += ',';
	line += '분해조립.HV_CNTR1';
	line += ',';
	line += '분해조립.HV_CNTR2';
	line += ',';
	line += '분해조립.HV_CNTR3';
	line += ',';
	line += '분해조립.HV_CNTR4';
	line += ',';
	line += '분해조립.HV_CNTR5';
	line += ',';
	line += '분해조립.HV_CNTR6';
	line += ',';
	line += '분해조립.HV_CNTR7';
	line += ',';
	line += '분해조립.HV_CNTR8';
	line += ',';
	line += '분해조립.HV_CNTR9';
	line += ',';
	line += '분해조립.HV_CNTR10';
	line += ',';
	line += '분해조립.Heating_CNTR1';
	line += ',';
	line += '분해조립.Heating_CNTR2';
	line += ',';
	line += '분해조립.Heating_CNTR3';
	line += ',';
	line += '분해조립.Heating_CNTR4';
	line += ',';
	line += '분해조립.Heating_CNTR5';
	line += ',';
	line += '분해조립.Heating_CNTR6';
	line += ',';
	line += '분해조립.Heating_CNTR7';
	line += ',';
	line += '분해조립.Heating_CNTR8';
	line += ',';
	line += '분해조립.Heating_CNTR9';
	line += ',';
	line += '분해조립.Heating_CNTR10';
	line += ',';
	line += '분해조립.FuseBox1';
	line += ',';
	line += '분해조립.FuseBox2';
	line += ',';
	line += '분해조립.FuseBox3';
	line += ',';
	line += '분해조립.FuseBox4';
	line += ',';
	line += '분해조립.FuseBox5';
	line += ',';
	line += '분해조립.FuseBox6';
	line += ',';
	line += '분해조립.FuseBox7';
	line += ',';
	line += '분해조립.FuseBox8';
	line += ',';
	line += '분해조립.FuseBox9';
	line += ',';
	line += '분해조립.FuseBox10';
	line += ',';
	line += '분해조립.LV_W_H1';
	line += ',';
	line += '분해조립.LV_W_H2';
	line += ',';
	line += '분해조립.LV_W_H3';
	line += ',';
	line += '분해조립.LV_W_H4';
	line += ',';
	line += '분해조립.LV_W_H5';
	line += ',';
	line += '분해조립.LV_W_H6';
	line += ',';
	line += '분해조립.LV_W_H7';
	line += ',';
	line += '분해조립.LV_W_H8';
	line += ',';
	line += '분해조립.LV_W_H9';
	line += ',';
	line += '분해조립.LV_W_H10';
	line += ',';
	line += '분해조립.HV_W_H1';
	line += ',';
	line += '분해조립.HV_W_H2';
	line += ',';
	line += '분해조립.HV_W_H3';
	line += ',';
	line += '분해조립.HV_W_H4';
	line += ',';
	line += '분해조립.HV_W_H5';
	line += ',';
	line += '분해조립.HV_W_H6';
	line += ',';
	line += '분해조립.HV_W_H7';
	line += ',';
	line += '분해조립.HV_W_H8';
	line += ',';
	line += '분해조립.HV_W_H9';
	line += ',';
	line += '분해조립.HV_W_H10';
	line += ',';
	line += '분해조립.온도센서1';
	line += ',';
	line += '분해조립.온도센서2';
	line += ',';
	line += '분해조립.온도센서3';
	line += ',';
	line += '분해조립.온도센서4';
	line += ',';
	line += '분해조립.온도센서5';
	line += ',';
	line += '분해조립.온도센서6';
	line += ',';
	line += '분해조립.온도센서7';
	line += ',';
	line += '분해조립.온도센서8';
	line += ',';
	line += '분해조립.온도센서9';
	line += ',';
	line += '분해조립.온도센서10';
	line += ',';
	line += '분해조립.Busbars';
	line += ',';
	line += '분해조립.BMA1';
	line += ',';
	line += '분해조립.BMA2';
	line += ',';
	line += '분해조립.BMA3';
	line += ',';
	line += '분해조립.BMA4';
	line += ',';
	line += '분해조립.BMA5';
	line += ',';
	line += '분해조립.BMA6';
	line += ',';
	line += '분해조립.BMA7';
	line += ',';
	line += '분해조립.BMA8';
	line += ',';
	line += '분해조립.BMA9';
	line += ',';
	line += '분해조립.BMA10';
	line += ',';
	line += '분해조립.ETC';
	line += ',';
	line += '분해조립.공정완료일';
	line += ',';
	line += '분해조립.작업자';
	line += ',';
	line += '성능검사.공정입고일';
	line += ',';
	line += '성능검사.용량평가';
	line += ',';
	line += '성능검사.SOC60Percent';
	line += ',';
	line += '성능검사.DCIR';
	line += ',';
	line += '성능검사.공정완료일';
	line += ',';
	line += '성능검사.비고';
	line += ',';
	line += '성능검사.검사자';
	line += ',';
	line += 'EOL.공정입고일';
	line += ',';
	line += 'EOL.UPR_C조립';
	line += ',';
	line += 'EOL.기밀검사_케이스';
	line += ',';
	line += 'EOL.기밀검사_냉각유로';
	line += ',';
	line += 'EOL.절연검사_Plus';
	line += ',';
	line += 'EOL.절연검사_Minus';
	line += ',';
	line += 'EOL.통신검사_DTC코드1';
	line += ',';
	line += 'EOL.통신검사_DTC코드2';
	line += ',';
	line += 'EOL.통신검사_DTC코드3';
	line += ',';
	line += 'EOL.통신검사_DTC코드4';
	line += ',';
	line += 'EOL.통신검사_DTC코드5';
	line += ',';
	line += 'EOL.통신검사_DTC코드6';
	line += ',';
	line += 'EOL.통신검사_DTC코드7';
	line += ',';
	line += 'EOL.통신검사_DTC코드8'
	line += ',';
	line += 'EOL.통신검사_DTC코드9';
	line += ',';
	line += 'EOL.통신검사_DTC코드10';
	line += ',';
	line += 'EOL.통신검사_팩전압';
	line += ',';
	line += 'EOL.통신검사_셀전압편차';
	line += ',';
	line += 'EOL.통신검사_릴레이구동';
	line += ',';
	line += 'EOL.공정완료일';
	line += ',';
	line += 'EOL.비고';
	line += ',';
	line += 'EOL.QR';
	line += ',';
	line += 'EOL.검사자';
	line += ',';
	line += '출하정보.출하일';
	line += ',';
	line += '출하정보.출하코드';
	line += ',';
	line += '출하정보.납품처';
	line += ',';
	line += '출하정보.검사일';
	line += ',';
	line += '출하정보.검토';
	line += ',';
	line += '출하정보.승인';
	line += ',';
	line += '출하정보.입고정보_작성확인';
	line += ',';
	line += '출하정보.재제조_이력문서_작성확인';
	line += ',';
	line += '출하정보.기초보고서_작성확인';
	line += ',';
	line += '출하정보.완료보고서_작성확인';
	line += ',';
	line += '출하정보.클린상태';
	line += ',';
	line += '출하정보.팔레트_적정위치';
	line += ',';
	line += '출하정보.포장랩상태';
	line += ',';
	line += '출하정보.UPR_QR';
	line += ',';
	line += '출하정보.LWR_QR';
	line += ',';
	line += '출하정보.HKMC_스티커_URP';
	line += ',';
	line += '출하정보.냉각유로_커버1';
	line += ',';
	line += '출하정보.냉각유로_커버2';
	line += ',';
	line += '출하정보.종합평가';
	line += ',';
	line += '출하정보.용량평가';
	line += ',';
	line += '출하정보.용량평가_측정값';
	line += ',';
	line += '출하정보.SOC60';
	line += ',';
	line += '출하정보.SOC60_팩전압';
	line += ',';
	line += '출하정보.SOC60_편차';
	line += ',';
	line += '출하정보.DCIR';
	line += ',';
	line += '출하정보.DCIR_측정값';
	line += ',';
	line += '출하정보.릴레이동시구동';
	line += ',';
	line += '출하정보.케이스';
	line += ',';
	line += '출하정보.케이스_측정값';
	line += ',';
	line += '출하정보.냉각유로';
	line += ',';
	line += '출하정보.냉각유로_측정값';
	line += ',';
	line += '출하정보.접지Plus';
	line += ',';
	line += '출하정보.접지Plus_측정값';
	line += ',';
	line += '출하정보.접지Minus';
	line += ',';
	line += '출하정보.접지Minus_측정값';
	line += ',';
	line += '출하정보.DTC';
	line += ',';
	line += '출하정보.DTC_현재';
	line += ',';
	line += '출하정보.DTC_과거';
	line += ',';
	line += '출하정보.BSA전압';
	line += ',';
	line += '출하정보.BSA전압_측정값';
	line += ',';
	line += '출하정보.셀전압편차';
	line += ',';
	line += '출하정보.셀전압편차_측정값';
	line += ',';
	line += '출하정보.BMS고장NO';
	line += ',';
	line += '출하정보.BMS융착NO';
	line += ',';
	line += '출하정보.절연저항';
	line += ',';
	line += '출하정보.절연저항_측정값';
	line += ',';
	line += '출하정보.배터리온도';
	line += ',';
	line += '출하정보.배터리온도_최대';
	line += ',';
	line += '출하정보.배터리온도_최소';
	line += ',';
	line += '출하정보.SOH';
	line += ',';
	line += '출하정보.릴레이_강제구동';
	line += ',';
	line += '출하정보.커넥터_체결검사';
	line += ',';
	line += '출하정보.통신화면_캡쳐';
	line += ',';
	line += '특이사항.특이사항';
	line += ',';
	line += '교체부품상세1.공정입고일';
	line += ',';
	line += '교체부품상세1.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세1.교체전_품명';
	line += ',';
	line += '교체부품상세1.교체전_품번';
	line += ',';
	line += '교체부품상세1.교체전_QR';
	line += ',';
	line += '교체부품상세1.교체후_신품_고품';
	line += ',';
	line += '교체부품상세1.교체후_고품식별';
	line += ',';
	line += '교체부품상세1.교체후_품번';
	line += ',';
	line += '교체부품상세1.교체후_QR';
	line += ',';
	line += '교체부품상세1.교체사유';
	line += ',';
	line += '교체부품상세2.공정입고일';
	line += ',';
	line += '교체부품상세2.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세2.교체전_품명';
	line += ',';
	line += '교체부품상세2.교체전_품번';
	line += ',';
	line += '교체부품상세2.교체전_QR';
	line += ',';
	line += '교체부품상세2.교체후_신품_고품';
	line += ',';
	line += '교체부품상세2.교체후_고품식별';
	line += ',';
	line += '교체부품상세2.교체후_품번';
	line += ',';
	line += '교체부품상세2.교체후_QR';
	line += ',';
	line += '교체부품상세2.교체사유';
	line += ',';
	line += '교체부품상세3.공정입고일';
	line += ',';
	line += '교체부품상세3.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세3.교체전_품명';
	line += ',';
	line += '교체부품상세3.교체전_품번';
	line += ',';
	line += '교체부품상세3.교체전_QR';
	line += ',';
	line += '교체부품상세3.교체후_신품_고품';
	line += ',';
	line += '교체부품상세3.교체후_고품식별';
	line += ',';
	line += '교체부품상세3.교체후_품번';
	line += ',';
	line += '교체부품상세3.교체후_QR';
	line += ',';
	line += '교체부품상세3.교체사유';
	line += ',';
	line += '교체부품상세4.공정입고일';
	line += ',';
	line += '교체부품상세4.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세4.교체전_품명';
	line += ',';
	line += '교체부품상세4.교체전_품번';
	line += ',';
	line += '교체부품상세4.교체전_QR';
	line += ',';
	line += '교체부품상세4.교체후_신품_고품';
	line += ',';
	line += '교체부품상세4.교체후_고품식별';
	line += ',';
	line += '교체부품상세4.교체후_품번';
	line += ',';
	line += '교체부품상세4.교체후_QR';
	line += ',';
	line += '교체부품상세4.교체사유';
	line += ',';
	line += '교체부품상세5.공정입고일';
	line += ',';
	line += '교체부품상세5.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세5.교체전_품명';
	line += ',';
	line += '교체부품상세5.교체전_품번';
	line += ',';
	line += '교체부품상세5.교체전_QR';
	line += ',';
	line += '교체부품상세5.교체후_신품_고품';
	line += ',';
	line += '교체부품상세5.교체후_고품식별';
	line += ',';
	line += '교체부품상세5.교체후_품번';
	line += ',';
	line += '교체부품상세5.교체후_QR';
	line += ',';
	line += '교체부품상세5.교체사유';
	line += ',';
	line += '교체부품상세6.공정입고일';
	line += ',';
	line += '교체부품상세6.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세6.교체전_품명';
	line += ',';
	line += '교체부품상세6.교체전_품번';
	line += ',';
	line += '교체부품상세6.교체전_QR';
	line += ',';
	line += '교체부품상세6.교체후_신품_고품';
	line += ',';
	line += '교체부품상세6.교체후_고품식별';
	line += ',';
	line += '교체부품상세6.교체후_품번';
	line += ',';
	line += '교체부품상세6.교체후_QR';
	line += ',';
	line += '교체부품상세6.교체사유';
	line += ',';
	line += '교체부품상세7.공정입고일';
	line += ',';
	line += '교체부품상세7.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세7.교체전_품명';
	line += ',';
	line += '교체부품상세7.교체전_품번';
	line += ',';
	line += '교체부품상세7.교체전_QR';
	line += ',';
	line += '교체부품상세7.교체후_신품_고품';
	line += ',';
	line += '교체부품상세7.교체후_고품식별';
	line += ',';
	line += '교체부품상세7.교체후_품번';
	line += ',';
	line += '교체부품상세7.교체후_QR';
	line += ',';
	line += '교체부품상세7.교체사유';
	line += ',';
	line += '교체부품상세8.공정입고일';
	line += ',';
	line += '교체부품상세8.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세8.교체전_품명';
	line += ',';
	line += '교체부품상세8.교체전_품번';
	line += ',';
	line += '교체부품상세8.교체전_QR';
	line += ',';
	line += '교체부품상세8.교체후_신품_고품';
	line += ',';
	line += '교체부품상세8.교체후_고품식별';
	line += ',';
	line += '교체부품상세8.교체후_품번';
	line += ',';
	line += '교체부품상세8.교체후_QR';
	line += ',';
	line += '교체부품상세8.교체사유';
	line += ',';
	line += '교체부품상세9.공정입고일';
	line += ',';
	line += '교체부품상세9.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세9.교체전_품명';
	line += ',';
	line += '교체부품상세9.교체전_품번';
	line += ',';
	line += '교체부품상세9.교체전_QR';
	line += ',';
	line += '교체부품상세9.교체후_신품_고품';
	line += ',';
	line += '교체부품상세9.교체후_고품식별';
	line += ',';
	line += '교체부품상세9.교체후_품번';
	line += ',';
	line += '교체부품상세9.교체후_QR';
	line += ',';
	line += '교체부품상세9.교체사유';
	line += ',';
	line += '교체부품상세10.공정입고일';
	line += ',';
	line += '교체부품상세10.ORIGIN_관리번호';
	line += ',';
	line += '교체부품상세10.교체전_품명';
	line += ',';
	line += '교체부품상세10.교체전_품번';
	line += ',';
	line += '교체부품상세10.교체전_QR';
	line += ',';
	line += '교체부품상세10.교체후_신품_고품';
	line += ',';;
	line += '교체부품상세10.교체후_고품식별';
	line += ',';;
	line += '교체부품상세10.교체후_품번';
	line += ',';;
	line += '교체부품상세10.교체후_QR';
	line += ',';;
	line += '교체부품상세10.교체사유';
	line += '\n';

	return line;
}
