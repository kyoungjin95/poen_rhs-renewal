const DELAY = 20;
var flag_arrivedMSG = false;
const 계정 = '계정';
const 목표수량 = '목ㅍ표수량';
const BSA재제조 = 'BSA재제조';
const 기초검사 = '기초검사';
const 성능검사 = '성능검사';
const EOL = 'EOL';
const 출하정보 = '출하정보';
const 분해조립 = '분해조립';
const 특이사항 = '특이사항';
const 교체부품상세1 = '교체부품상세1';
const 교체부품상세2 = '교체부품상세2';
const 교체부품상세3 = '교체부품상세3';
const 교체부품상세4 = '교체부품상세4';
const 교체부품상세5 = '교체부품상세5';
const 교체부품상세6 = '교체부품상세6';
const 교체부품상세7 = '교체부품상세7';
const 교체부품상세8 = '교체부품상세8';
const 교체부품상세9 = '교체부품상세9';
const 교체부품상세10 = '교체부품상세10';
var 관리번호 = 'none';
var 교체부품상세No = '교체부품상세1';
var worker = '';

const 계정_doc = {
	id: 'none', 
	passwd: 'none', 
};

const 목표수량_doc = {
	목표수량: 'none',
	주간목표수량: 'none', 
};

const BSA재제조_doc = {
	관리번호: 'none', 
	차종: 'none', 
	품번: 'none', 
	RO_no: 'none', 
	공정단계: 'none', 
	적재No: 'none', 
	입고: 'none', 
	제조투입: 'none', 
	세척: 'none', 
	기초검사: 'none', 
	분해조립: 'none', 
	성능검사: 'none', 
	EOL: 'none', 
	출하: 'none', 
	소재지: 'none',
};

const 기초검사_doc = {
	관리번호: 'none',
	육안검사_외부: 'none',
	육안검사_내부: 'none',
	기밀검사_케이스: 'none',
	기밀검사_냉각유로: 'none',
	절연검사_Plus: 'none',
	절연검사_Minus: 'none',
	토크검사_UPR_C: 'none',
	토크검사_버스바: 'none',
	통신검사_DTC코드: 'none',
	통신검사_팩전압: 'none',
	통신검사_셀전압편차: 'none',
	통신검사_릴레이구동: 'none',
	완료일: 'none',
	검사자: 'none'
};

const 성능검사_doc = {
	관리번호: 'none',
	UPR_C조립: 'none',
	기밀검사_케이스: 'none',
	기밀검사_냉각유로: 'none',
	절연검사_Plus: 'none',
	절연검사_Minus: 'none',
	토크검사_UPR_C: 'none',
	토크검사_버스바: 'none',
	통신검사_DTC코드: 'none',
	통신검사_팩전압: 'none',
	통신검사_셀전압편차: 'none',
	통신검사_릴레이구동: 'none',
	완료일: 'none',
	검사자: 'none'
};

const EOL_doc = {
	관리번호: 'none',
	용량평가: 'none',
	SOC60Percent: 'none',
	DCIR: 'none',
	완료일: 'none',
	검사자: 'none'
};

const 출하정보_doc = {
	관리번호: 'none',
	출하일: 'none',
	출하코드: 'none',
	납품처: 'none'
};

const 분해조립_doc = {
	관리번호: 'none',
	UPR_C: 'none',
	PBE: 'none',
	Gasket: 'none',
	Busbars: 'none',
	W_H: 'none',
	SPA: 'none',
	PRA: 'none',
	FuseBox: 'none',
	Relay: 'none',
	CMU: 'none',
	BMU: 'none',
	BMA: 'none',
	LWR_C: 'none',
	ETC: 'none',
	완료일: 'none',
	작업자: 'none'
};

const 특이사항_doc = {
	관리번호: 'none',
	특이사항: 'none'
};

const 교체부품상세_doc = {
	관리번호: 'none',
	ORIGIN_관리번호: 'none',
	교체전_품명: 'none',
	교체전_품번: 'none',
	교체전_QR: 'none',
	교체후_신품_고품: 'none',
	교체후_고품식별: 'none',
	교체후_품번: 'none',
	교체후_QR: 'none',
	교체사유: 'none'
};

const 계정_ = {
	id: 1, 
	passwd: 1, 
};

const 목표수량_ = {
	목표수량: 1,
	주간목표수량: 1,
};

const BSA재제조_ = {
	_id : 0,
	관리번호: 1, 
	차종: 1, 
	품번: 1, 
	RO_no: 1, 
	공정단계: 1, 
	적재No: 1, 
	입고: 1, 
	제조투입: 1, 
	세척: 1, 
	기초검사: 1, 
	분해조립: 1, 
	성능검사: 1, 
	EOL: 1, 
	출하: 1, 
	소재지: 1,
};

const 기초검사_ = {
	_id : 0,
	관리번호: 1,
	육안검사_외부: 1,
	육안검사_내부: 1,
	기밀검사_케이스: 1,
	기밀검사_냉각유로: 1,
	절연검사_Plus: 1,
	절연검사_Minus: 1,
	토크검사_UPR_C: 1,
	토크검사_버스바: 1,
	통신검사_DTC코드: 1,
	통신검사_팩전압: 1,
	통신검사_셀전압편차: 1,
	통신검사_릴레이구동: 1,
	완료일: 1,
	검사자: 1
};

const 성능검사_ = {
	_id : 0,
	관리번호: 1,
	UPR_C조립: 1,
	기밀검사_케이스: 1,
	기밀검사_냉각유로: 1,
	절연검사_Plus: 1,
	절연검사_Minus: 1,
	토크검사_UPR_C: 1,
	토크검사_버스바: 1,
	통신검사_DTC코드: 1,
	통신검사_팩전압: 1,
	통신검사_셀전압편차: 1,
	통신검사_릴레이구동: 1,
	완료일: 1,
	검사자: 1
};

const EOL_ = {
	_id : 0,
	관리번호: 1,
	용량평가: 1,
	SOC60Percent: 1,
	DCIR: 1,
	완료일: 1,
	검사자: 1
};

const 출하정보_ = {
	_id : 0,
	관리번호: 1,
	출하일: 1,
	출하코드: 1,
	납품처: 1
};

const 분해조립_ = {
	_id : 0,
	관리번호: 1,
	UPR_C: 1,
	PBE: 1,
	Gasket: 1,
	Busbars: 1,
	W_H: 1,
	SPA: 1,
	PRA: 1,
	FuseBox: 1,
	Relay: 1,
	CMU: 1,
	BMU: 1,
	BMA: 1,
	LWR_C: 1,
	ETC: 1,
	완료일: 1,
	작업자: 1
};

const 특이사항_ = {
	_id : 0,
	관리번호: 1,
	특이사항: 1
};

const 교체부품상세_ = {
	_id : 0,
	관리번호: 1,
	ORIGIN_관리번호 : 1,
	교체전_품명: 1,
	교체전_품번: 1,
	교체전_QR: 1,
	교체후_신품_고품: 1,
	교체후_고품식별: 1,
	교체후_품번: 1,
	교체후_QR: 1,
	교체사유: 1
};

var doc_count = 0;
var update_count = 0;
var insert_count = 0;
var delete_count = 0;
var insert_id = '';
var find_array = [];

const socket = io();
socket.on('connect', function() {
	console.log('connected');
});

socket.on('distinct_result', function(result) {
	console.log('distincted result array: ', result);
	find_array = result;
	flag_arrivedMSG = true;
});

socket.on('insert_result', function(id) {
	console.log('insert id: ', id);
	insert_id = id;
	flag_arrivedMSG = true;
});

socket.on('count_result', function(count) {
	console.log('count: ', count);
	doc_count = count;
	flag_arrivedMSG = true;
});

socket.on('find_result', function(result) {
	console.log('finded result array: ', result);
	find_array = result;
	flag_arrivedMSG = true;
});

socket.on('update_result', function(result) {
	flag_arrivedMSG = true;
	update_count = 0;
	insert_count = 0;
	if(result == null) return;
	console.log('update result count: ', result.modifiedCount);
	console.log('insert result count: ', result.upsertedCount);
	update_count = result.modifiedCount;
	insert_count = result.upsertedCount;
});

socket.on('delete_result', function(count) {
	console.log('delete result count: ', count);
	delete_count = count;
	flag_arrivedMSG = true;
});

socket.on('management_id', function(mid) {
	관리번호 = mid;
	flag_arrivedMSG = true;
});

socket.on('disconnect', function() {
	console.log('disconnect');
});

async function distinct(col, query, field_name) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('distinct', col, query, field_name);
		await sleep(DELAY);
	}
}

async function count(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('count', col, query);
		await sleep(DELAY);
	}
}

async function insert(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('insert', col, doc);
		await sleep(DELAY);
	}
}

async function update_계정(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', col, { id: doc.id }, {$set: doc});
		await sleep(DELAY);
	}
}

async function update(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', col, { 관리번호: doc.관리번호 }, {$set: doc});
		await sleep(DELAY);
	}
}

async function deleteOne(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', col, { 관리번호: management_id});
		await sleep(DELAY);
	}
}

async function delete_계정(_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', 계정, { id: _id});
		await sleep(DELAY);
	}
}

async function set_management_id(mid) {
	socket.emit('set_management_id', mid);
}

async function get_management_id(mid) {
	flag_arrivedMSG = true;
	socket.emit('get_management_id');
}

async function find(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	switch(col) {
		case 'BSA재제조' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: BSA재제조_});
				await sleep(DELAY);
			}
			break;

		case '기초검사' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 기초검사_});
				await sleep(DELAY);
			}
			break;

		case '성능검사' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 성능검사_});
				await sleep(DELAY);
			}
			break;

		case 'EOL' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: EOL_});
				await sleep(DELAY);
			}
			break;

		case '출하정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 출하정보_});
				await sleep(DELAY);
			}
			break;

		case '분해조립' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_});
				await sleep(DELAY);
			}
			break;

		case '특이사항' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 특이사항_});
				await sleep(DELAY);
			}
			break;
		
		case '교체부품상세1' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세2' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세3' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세4' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세5' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세6' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세7' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세8' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세9' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세10' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		default: 
			console.log('collection name is not match');
	}

}

function find_계정(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	socket.emit('find', col, query, { sort: { kind: 1}, projection: 계정_ });
}

function find_query(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	socket.emit('find', col, query, { sort: { kind: 1}, projection: BSA재제조_ });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function delay() {
	while(flag_arrivedMSG == false) {
		await sleep(DELAY);
	}
	return true;
}
