const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const { MongoClient } = require('mongodb')
const morgan = require('morgan') //debug msg
const logger = require('./winston');
const uri = 'mongodb://poen:poen4upoen4u@localhost:27017/poenDB';
const db_name = 'poenDB';
var db;
var 관리번호 = '';
var client;

app.use(morgan('dev'))
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

server.listen(80, () => {
	console.log('listening on *:80');
	client = new MongoClient(uri);
});

io.on('connection', async function(socket) {
	console.log('a user connected');

	socket.on('distinct', async function(worker, col, query, field_name) {
		const result_array = await distinct(col, query, field_name);
		socket.emit('distinct_result', result_array);
	});

	socket.on('insert', async function(worker, col, doc) {
		const result = await insert(col, doc);
		socket.emit('insert_result', result);
		logger.info('worker:'+ worker + ' insert col:' + col +'doc:'+ JSON.stringify(doc));
	});

	socket.on('count', async function(worker, col, query, check) {
		const cnt = await count(col, query);
		socket.emit('count_result', cnt, check);
		//logger.info('worker:'+ worker + ' count col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('find', async function(worker, col, query, options, check) {
		const result_array = await find(col, query, options);
		socket.emit('find_result', result_array, check);
		//logger.info('worker:'+ worker + ' find col:' + col +'query:'+ JSON.stringify(query));
	});

	socket.on('update', async function(worker, col, filter, doc) {
		const result = await update(col, filter, doc);
		socket.emit('update_result', result);
		logger.info('worker:'+ worker + ' update col:' + col + 'doc:' + JSON.stringify(doc));
	});

	socket.on('delete', async function(worker, col, query) {
		const result_count = await deleteOne(col, query);
		socket.emit('delete_result', result_count);
		logger.info('worker:'+ worker + ' delete col:' + col + 'query:'+ JSON.stringify(query));
	});
});

process.on('exit', function(code) {
	cconsole.log('Exit : ', code);
	client.close();
});

/**dd
 * update를 사용할것 for 중복방지
 */
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
