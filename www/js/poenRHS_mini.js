const DELAY = 20; 
const DELAY_SYS = 1000; 
const 거래확인서 = '거래확인서';

const 거래확인서_doc = {
	date : '',
	금액 : '',
	성명 : '',
	생년월일 : '',
	주소 : '',
	전화번호 : '',
	email : '',
	서명 : '',
	제조사 : '',
	제조년도 : '',
	누적거리 : '',
	차량번호 : '',
	차대번호 : '',
	상호 : '',
	주소 : '',
	전화번호 : '',
	year : '',
	month : '',
	day : ''
};

const 거래확인서_ = {
	_id : 0,
	date : 1,
	금액 : 1,
	성명 : 1,
	생년월일 : 1,
	주소 : 1,
	전화번호 : 1,
	email : 1,
	서명 : 1,
	제조사 : 1,
	제조년도 : 1,
	누적거리 : 1,
	차량번호 : 1,
	차대번호 : 1,
	상호 : 1,
	주소 : 1,
	전화번호 : 1,
	year : 1,
	month : 1,
	day : 1
};

var doc_count = 0;
var update_count = 0;
var insert_count = 0;
var delete_count = 0;
var insert_id = '';
var find_array = [];
var arregation_array = [];
var flag_arrivedMSG = false;
var check = 0;
var str = '';

const socket = io();
socket.on('connect', function() {
	console.log('connected');
});

socket.on('insert_result', async function(id) {
	//console.log('insert id: ', id);
	insert_id = id;
	flag_arrivedMSG = true;
	await sleep(DELAY);
});

socket.on('count_result', async function(count, rcv_check) {
	//console.log('count: ', count);
  	doc_count = 0;
	if(rcv_check != check) return;
	doc_count = JSON.parse(JSON.stringify(count));
	//doc_count = count;

	flag_arrivedMSG = true;
	await sleep(DELAY);
});

socket.on('find_result', async function(result, rcv_check) {
	//console.log('finded result array: ', result);
	//console.log('recv count:', rcv_check, 'check:', check);
	find_array = [];
	if(rcv_check != check) return;

	find_array = JSON.parse(JSON.stringify(result));
  
	flag_arrivedMSG = true;
	await sleep(DELAY);
});

socket.on('update_result', async function(result) {
	flag_arrivedMSG = true;
	update_count = 0;
	insert_count = 0;
	if(result == null) return;
	//console.log('update result count: ', result.modifiedCount);
	//console.log('insert result count: ', result.upsertedCount);
	update_count = result.modifiedCount;
	insert_count = result.upsertedCount;

	await sleep(DELAY);
});

socket.on('delete_result', async function(count) {
	console.log('delete result count: ', count);
	delete_count = count;
	flag_arrivedMSG = true;
	await sleep(DELAY);
});

socket.on('disconnect', function() {
	console.log('disconnect');
});

async function count(col, query) {
	if(socket == undefined) return
	await sleep(DELAY);
	flag_arrivedMSG = false;
	doc_count = 0;
	while(flag_arrivedMSG == false) {
		check++;
		if(check > 10000) check = 0;
		socket.emit('count', level, col, query, check);
		await sleep(DELAY_SYS * 2);
	}
}

async function insert(col, doc) {
	if(socket == undefined) return;
	await sleep(DELAY);
	flag_arrivedMSG = false;
	socket.emit('insert', worker, col, doc);
}

async function insertMany(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('insertMany', worker, col, doc);
}

async function update_거래확인서(col, doc) {
	if(socket == undefined) return;
	await sleep(DELAY);
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { level: doc.date }, {$set: doc});
		await sleep(DELAY_SYS * 2);
	}
}

async function deleteOne(col, date) {
	if(socket == undefined) return;
	await sleep(DELAY);
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { date: date});
		await sleep(DELAY_SYS * 2);
	}
}

async function find_거래확인서(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	while(flag_arrivedMSG == false) {
		socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 거래확인서_ }, check);
		await sleep(DELAY_SYS * 10);
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

async function delay() {
	await sleep(DELAY);

	while(flag_arrivedMSG == false) {
		await sleep(1);
	}
	await sleep(DELAY * 10);
	return true;
}
