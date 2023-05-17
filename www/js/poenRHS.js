const DELAY = 30;
const 계정 = '계정';
const BSA재제조 = 'BSA재제조';
const 입고 = '입고';
const 세척 = '세척';
const 기초검사 = '기초검사';
const 성능검사 = '성능검사';
const EOL = 'EOL';
const 출하정보 = '출하정보';
const 분해조립 = '분해조립';
const 신품정보 = '신품정보';
const 고품정보 = '고품정보';
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
var 관리번호 = '';
var 교체부품상세No = '교체부품상세1';
var worker = '';
var level = '';

const 계정_doc = {
	id: '', 
	passwd: '', 
	level: ''
};

const BSA재제조_doc = {
	관리번호: '', 
	재제조번호: '',
	차종: '', 
	품번: '', 
	RO_no: '', 
	공정단계: '', 
	적재No: '', 
	입고: '', 
	제조투입: '', 
	세척: '', 
	기초검사: '', 
	분해조립: '', 
	성능검사: '', 
	EOL: '', 
	출하: '', 
	소재지: '',
	마지막충전일: ''
};

const 입고_doc = {
	관리번호: '', 
	입고일 : '',
	입고처 : '',
	차종: '', 
	품번: '', 
	RO_no: '', 
	VIN: '',
	랙번호: ''
};

const 세척_doc = {
	관리번호: '', 
	공정입고일: '',
	공정완료일: '',
	기밀검사_케이스: '',
	기밀검사_케이스_특이사항: '',
	특이사항: ''
};

const 기초검사_doc = {
	관리번호: '',
	공정입고일: '',
	육안검사_외부: '',
	육안검사_외부_특이사항: '',
	육안검사_내부: '',
	육안검사_내부_특이사항: '',
	기밀검사_냉각유로: '',
	기밀검사_냉각유로_특이사항: '',
	절연검사_Plus: '',
	절연검사_Minus: '',
	통신검사_DTC코드1: '',
	통신검사_DTC코드2: '',
	통신검사_DTC코드3: '',
	통신검사_DTC코드4: '',
	통신검사_DTC코드5: '',
	통신검사_DTC코드6: '',
	통신검사_DTC코드7: '',
	통신검사_DTC코드8: '',
	통신검사_DTC코드9: '',
	통신검사_DTC코드10: '',
	통신검사_팩전압: '',
	통신검사_셀전압편차: '',
	통신검사_릴레이구동: '',
	공정완료일: '',
	요청사항: '',
	비고: '',
	센터진단내용: '',
	검사자: ''
};

const 분해조립_doc = {
	관리번호: '',
	공정입고일: '',
	UPR_C: '',
	PBE: '',
	Gasket: '',
	Busbars: '',
	LV_W_H: '',
	HV_W_H: '',
	SPA: '',
	PRA: '',
	FuseBox: '',
	Relay: '',
	CMU: '',
	BMU: '',
	BMA: '',
	LWR_C: '',
	온도센서: '',
	HV_CNTR: '',
	Heating_CNTR: '',
	ETC: '',
	공정완료일: '',
	작업자: ''
};

const 성능검사_doc = {
	관리번호: '',
	공정입고일: '',
	용량평가: '',
	SOC60Percent: '',
	DCIR: '',
	공정완료일: '',
	비고: '',
	검사자: ''
};

const EOL_doc = {
	관리번호: '',
	공정입고일: '',
	UPR_C조립: '',
	기밀검사_케이스: '',
	기밀검사_냉각유로: '',
	절연검사_Plus: '',
	절연검사_Minus: '',
	통신검사_DTC코드1: '',
	통신검사_DTC코드2: '',
	통신검사_DTC코드3: '',
	통신검사_DTC코드4: '',
	통신검사_DTC코드5: '',
	통신검사_DTC코드6: '',
	통신검사_DTC코드7: '',
	통신검사_DTC코드8: '',
	통신검사_DTC코드9: '',
	통신검사_DTC코드10: '',
	통신검사_팩전압: '',
	통신검사_셀전압편차: '',
	통신검사_릴레이구동: '',
	공정완료일: '',
	비고: '',
	QR: '',
	검사자: ''
};

const 고품정보_doc = {
	관리번호: '',
	품명: '',
	번호: '',
	QR: '',
	폐기여부: '',
	사용여부: '',
	사용_관리번호: ''
}

const 신품정보_doc = {
	바코드: '',
	품명: '',
	QR: '',
	구입처: '',
	금액: '',
	사용여부: '',
	사용_관리번호: ''
}

const 출하정보_doc = {
	관리번호: '',
	출하일: '',
	출하코드: '',
	납품처: '',
	//재제조QR : '',
	검사일: '',
        검토: '',
        승인: '',
        입고정보_작성확인: '',
        재제조_이력문서_작성확인: '',
        기초보고서_작성확인: '',
        완료보고서_작성확인: '',
        클린상태: '', 
        팔레트_적정위치: '',
        포장랩상태: '',
        UPR_QR: '',
        LWR_QR: '',
        HKMC_스티커_URP: '',
        냉각유로_커버1: '',
        냉각유로_커버2: '',
	종합평가: '',
        용량평가: '',
        용량평가_측정값: '',
        SOC60: '',
        SOC60_팩전압: '',
        SOC60_편차: '',
        DCIR: '',
        DCIR_측정값: '',
        릴레이동시구동: '',
        케이스: '',
        케이스_측정값: '',
        냉각유로: '',
        냉각유로_측정값: '',
        접지Plus: '',
        접지Plus_측정값: '',
        접지Minus: '',
        접지Minus_측정값: '',
        DTC: '',
        DTC_현재: '',
        DTC_과거: '',
        BSA전압: '',
        BSA전압_측정값: '',
        셀전압편차: '',
        셀전압편차_측정값: '',
        BMS고장NO: '',
        BMS융착NO: '',
        절연저항: '',
        절연저항_측정값: '',
        배터리온도: '',
        배터리온도_최대: '',
        배터리온도_최소:'',
        SOH: '',
        릴레이_강제구동: '',
        커넥터_체결검사: '',
        통신화면_캡쳐: ''
};

const 특이사항_doc = {
	관리번호: '',
	특이사항: ''
};

const 교체부품상세_doc = {
	관리번호: '',
	공정입고일: '',
	ORIGIN_관리번호: '',
	교체전_품명: '',
	교체전_품번: '',
	교체전_QR: '',
	교체후_신품_고품: '',
	교체후_고품식별: '',
	교체후_품번: '',
	교체후_QR: '',
	교체사유: ''
};

const 계정_ = {
	_id : 0,
	id: 1, 
	passwd: 1, 
	level: 1
};

const BSA재제조_ = {
	_id : 0,
	관리번호: 1, 
	재제조번호: 1,
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
	마지막충전일: 1,
};

const 입고_ = {
	_id : 0,
	관리번호: 1, 
	입고일 : 1,
	입고처 : 1,
	차종: 1, 
	품번: 1, 
	RO_no: 1, 
	VIN: 1,
	랙번호: 1
};

const 세척_ = {
	_id : 0,
	관리번호: 1, 
	공정입고일: 1,
	공정완료일: 1,
	기밀검사_케이스: 1,
	기밀검사_케이스_특이사항: 1,
	특이사항: 1
};

const 기초검사_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	육안검사_외부: 1,
	육안검사_외부_특이사항: 1,
	육안검사_내부: 1,
	육안검사_내부_특이사항: 1,
	기밀검사_냉각유로: 1,
	기밀검사_냉각유로_특이사항: 1,
	절연검사_Plus: 1,
	절연검사_Minus: 1,
	통신검사_DTC코드1: 1,
	통신검사_DTC코드2: 1,
	통신검사_DTC코드3: 1,
	통신검사_DTC코드4: 1,
	통신검사_DTC코드5: 1,
	통신검사_DTC코드6: 1,
	통신검사_DTC코드7: 1,
	통신검사_DTC코드8: 1,
	통신검사_DTC코드9: 1,
	통신검사_DTC코드10: 1,
	통신검사_팩전압: 1,
	통신검사_셀전압편차: 1,
	통신검사_릴레이구동: 1,
	공정완료일: 1,
	요청사항: 1,
	비고: 1,
	센터진단내용: 1,
	검사자: 1
};

const 분해조립_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	UPR_C: 1,
	PBE: 1,
	Gasket: 1,
	Busbars: 1,
	LV_W_H: 1,
	HV_W_H: 1,
	SPA: 1,
	PRA: 1,
	FuseBox: 1,
	Relay: 1,
	CMU: 1,
	BMU: 1,
	BMA: 1,
	LWR_C: 1,
	온도센서 : 1,
	HV_CNTR: 1,
	Heating_CNTR: 1,
	ETC: 1,
	공정완료일: 1,
	작업자: 1
};

const EOL_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	UPR_C조립: 1,
	기밀검사_케이스: 1,
	기밀검사_케이스_특이사항: 1,
	기밀검사_냉각유로: 1,
	기밀검사_냉각유로_특이사항: 1,
	절연검사_Plus: 1,
	절연검사_Minus: 1,
	토크검사_UPR_C: 1,
	토크검사_버스바: 1,
	통신검사_DTC코드1: 1,
	통신검사_DTC코드2: 1,
	통신검사_DTC코드3: 1,
	통신검사_DTC코드4: 1,
	통신검사_DTC코드5: 1,
	통신검사_DTC코드6: 1,
	통신검사_DTC코드7: 1,
	통신검사_DTC코드8: 1,
	통신검사_DTC코드9: 1,
	통신검사_DTC코드10: 1,
	통신검사_팩전압: 1,
	통신검사_셀전압편차: 1,
	통신검사_릴레이구동: 1,
	공정완료일: 1,
	비고: 1,
	QR: 1,
	검사자: 1
};

const 성능검사_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	용량평가: 1,
	SOC60Percent: 1,
	DCIR: 1,
	공정완료일: 1,
	비고: 1,
	검사자: 1
};

const 고품정보_ = {
	_id : 0,
	관리번호: 1,
	품명: 1,
	번호: 1,
	QR: 1,
	폐기여부: 1,
	사용여부: 1,
	사용_관리번호: 1
}

const 신품정보_ = {
	_id: 0,
	바코드: 1,
	품명: 1,
	QR: 1,
	구입처: 1,
	금액: 1,
	사용여부: 1,
	사용_관리번호: 1,
}

const 출하정보_ = {
	_id : 0,
	관리번호: 1,
	출하일: 1,
	출하코드: 1,
	납품처: 1,
	//재제조QR : 1,
	검사일: 1,
        검토: 1,
        승인: 1,
        입고정보_작성확인: 1,
        재제조_이력문서_작성확인: 1,
        기초보고서_작성확인: 1,
        완료보고서_작성확인: 1,
        클린상태: 1, 
        팔레트_적정위치: 1,
        포장랩상태: 1,
        UPR_QR: 1,
        LWR_QR: 1,
        HKMC_스티커_URP: 1,
        냉각유로_커버1: 1,
        냉각유로_커버2: 1,
	종합평가: 1,
        용량평가: 1,
        용량평가_측정값: 1,
        SOC60: 1,
        SOC60_팩전압: 1,
        SOC60_편차: 1,
        DCIR: 1,
        DCIR_측정값: 1,
        릴레이동시구동: 1,
        케이스: 1,
        케이스_측정값: 1,
        냉각유로: 1,
        냉각유로_측정값: 1,
        접지Plus: 1,
        접지Plus_측정값: 1,
        접지Minus: 1,
        접지Minus_측정값: 1,
        DTC: 1,
        DTC_현재: 1,
        DTC_과거: 1,
        BSA전압: 1,
        BSA전압_측정값: 1,
        셀전압편차: 1,
        셀전압편차_측정값: 1,
        BMS고장NO: 1,
        BMS융착NO: 1,
        절연저항: 1,
        절연저항_측정값: 1,
        배터리온도: 1,
        배터리온도_최대: 1,
        배터리온도_최소: 1,
        SOH: 1,
        릴레이_강제구동: 1,
        커넥터_체결검사: 1,
        통신화면_캡쳐: 1
};

const 특이사항_ = {
	_id : 0,
	관리번호: 1,
	특이사항: 1
};

const 교체부품상세_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	ORIGIN_관리번호 : 1,
	교체전_품명: 1,
	교체전_품번: 1,
	교체전_QR: 1,
	교체후_신품_고품: 1,
	교체후_고품식별: 1,
	교체후_품번: 1,
	교체후_QR: 1,
	교체사유: 1,
	공정완료일: 1
};

var doc_count = 0;
var update_count = 0;
var insert_count = 0;
var delete_count = 0;
var insert_id = '';
var find_array = [];
var flag_arrivedMSG = false;

const socket = io();
socket.on('connect', function() {
	console.log('connected');
});

socket.on('distinct_result', function(result) {
	//console.log('distincted result array: ', result);
	find_array = result;
	flag_arrivedMSG = true;
});

socket.on('insert_result', function(id) {
	//console.log('insert id: ', id);
	insert_id = id;
	flag_arrivedMSG = true;
});

socket.on('count_result', function(count) {
	//console.log('count: ', count);
	doc_count = count;
	flag_arrivedMSG = true;
});

socket.on('find_result', function(result) {
	//console.log('finded result array: ', result);
	find_array = result;
	flag_arrivedMSG = true;
});

socket.on('update_result', function(result) {
	flag_arrivedMSG = true;
	update_count = 0;
	insert_count = 0;
	if(result == null) return;
	//console.log('update result count: ', result.modifiedCount);
	//console.log('insert result count: ', result.upsertedCount);
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
		socket.emit('distinct', worker, col, query, field_name);
		await sleep(DELAY);
	}
}

async function count(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('count', worker, col, query);
		await sleep(DELAY);
	}
}

async function insert(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('insert', worker, col, doc);
		await sleep(DELAY);
	}
}

async function update_계정(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { id: doc.id }, {$set: doc});
		await sleep(DELAY);
	}
}

async function update(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { 관리번호: doc.관리번호 }, {$set: doc});
		await sleep(DELAY);
	}
}

async function update_신품정보(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { 바코드: doc.바코드 }, {$set: doc});
		await sleep(DELAY);
	}
}

async function update_고품정보(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { QR: doc.QR }, {$set: doc});
		await sleep(DELAY);
	}
}

async function deleteOne(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { 관리번호: management_id});
		await sleep(DELAY);
	}
}

async function deleteOne_신품정보(col, 바코드) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { 바코드: 바코드});
		await sleep(DELAY);
	}
}

async function deleteOne_고품정보(col, QR) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { QR: QR});
		await sleep(DELAY);
	}
}

async function delete_계정(_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, 계정, { id: _id});
		await sleep(DELAY);
	}
}

async function find(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	switch(col) {
		case 'BSA재제조' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: BSA재제조_});
				await sleep(DELAY);
			}
			break;

		case '입고' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 입고_});
				await sleep(DELAY);
			}
			break;

		case '세척' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 세척_});
				await sleep(DELAY);
			}
			break;

		case '기초검사' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 기초검사_});
				await sleep(DELAY);
			}
			break;

		case '성능검사' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 성능검사_});
				await sleep(DELAY);
			}
			break;

		case 'EOL' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: EOL_});
				await sleep(DELAY);
			}
			break;

		case '출하정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 출하정보_});
				await sleep(DELAY);
			}
			break;

		case '분해조립' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_});
				await sleep(DELAY);
			}
			break;

		case '고품정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 고품정보_});
				await sleep(DELAY);
			}
			break;

		case '신품정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 바코드: management_id}, { sort: { kind: 1}, projection: 신품정보_});
				await sleep(DELAY);
			}
			break;

		case '특이사항' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 특이사항_});
				await sleep(DELAY);
			}
			break;
		
		case '교체부품상세1' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세2' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세3' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세4' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세5' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세6' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세7' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세8' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세9' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
				await sleep(DELAY);
			}
			break;

		case '교체부품상세10' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_});
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

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 계정_ });
}

function find_신품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 신품정보_ });
}

function find_고품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 고품정보_ });
}

function find_query(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: BSA재제조_ });
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
