const DELAY = 20; 
const DELAY_SYS = 1; 
const 거래확인서 = '거래확인서';
const worker = '고객';
const level = '영업팀';

const 거래확인서_doc = {
	날짜ID : '',
	금액 : '',
	성명 : '',
	서명성명 : '',
	생년월일 : '',
	고객_주소 : '',
	고객_전화번호 : '',
	email : '',
	서명 : '',
	제조사 : '',
	제조년도 : '',
	누적거리 : '',
	차량번호 : '',
	차대번호 : '',
	상호 : '',
	수리처_주소 : '',
	수리처_전화번호 : '',
	year : '',
	month : '',
	day : ''
};

const 거래확인서_ = {
	_id : 0,
	날짜ID : 1,
	금액 : 1,
	성명 : 1,
	서명성명 : 1,
	생년월일 : 1,
	고객_주소 : 1,
	고객_전화번호 : 1,
	email : 1,
	서명 : 1,
	제조사 : 1,
	제조년도 : 1,
	누적거리 : 1,
	차량번호 : 1,
	차대번호 : 1,
	상호 : 1,
	수리처_주소 : 1,
	수리처_전화번호 : 1,
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
	insert_id = id;
	flag_arrivedMSG = true;
	await sleep(DELAY);
});

socket.on('count_result', async function(count, rcv_check) {
  	doc_count = 0;
	if(rcv_check != check) return;
	doc_count = JSON.parse(JSON.stringify(count));

	flag_arrivedMSG = true;
	await sleep(DELAY);
});

socket.on('find_result', async function(result, rcv_check) {
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
		if(check > 10) check = 0;
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
		console.log('worker :', worker);
		console.log('doc :', doc);


		socket.emit('update', worker, col, { 날짜ID: doc.날짜ID }, {$set: doc});
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
	if(check > 10) check = 0;

	while(flag_arrivedMSG == false) {
		console.log(worker, col, query, 거래확인서, check);
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
