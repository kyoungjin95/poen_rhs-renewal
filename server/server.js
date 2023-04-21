const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const { MongoClient } = require('mongodb')
const morgan = require('morgan') //debug msg

const uri = 'mongodb://poen:poen4upoen4u@localhost:27017/poenDB';
const db_name = 'poenDB';
var db;
var 관리번호 = '';
var client;

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../www')));

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

server.listen(80, () => {
	console.log('listening on *:80');
	client = new MongoClient(uri);
});

io.on('connection', async function(socket) {
	console.log('a user connected');

	socket.on('distinct', async function(col, query, field_name) {
		const result_array = await distinct(col, query, field_name);
		socket.emit('distinct_result', result_array);
	});

	socket.on('insert', async function(col, doc) {
		const result = await insert(col, doc);
		socket.emit('insert_result', result);
	});

	socket.on('count', async function(col, query) {
		const cnt = await count(col, query);
		socket.emit('count_result', cnt);
	});

	socket.on('find', async function(col, query, options) {
		const result_array = await find(col, query, options);
		socket.emit('find_result', result_array);
	});

	socket.on('update', async function(col, filter, doc) {
		const result = await update(col, filter, doc);
		socket.emit('update_result', result);
	});

	socket.on('delete', async function(col, query) {
		const result_count = await deleteOne(col, query);
		socket.emit('delete_result', result_count);
	});

	socket.on('get_management_id', async function() {
		socket.emit('management_id', 관리번호);
	});

	socket.on('set_management_id', async function(data) {
		관리번호 = data;
		console.log('set 관리번호: ', data); 
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
