var docs = [];
async function 분해조립_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id == 'none') return;

	count(분해조립, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(분해조립, _management_id.value);
		await delay();
		
		_공정입고일.value = find_array[0].공정입고일;
		_BMU.value = find_array[0].BMU;
		_CMU.value = find_array[0].CMU;
		_PRA.value = find_array[0].PRA;
		_SPA.value = find_array[0].SPA;
		_LWR_C.value = find_array[0].LWR_C;
		_UPR_C.value = find_array[0].UPR_C;
		_HV_CNTR.value = find_array[0].HV_CNTR;
		_Heating_CNTR.value = find_array[0].Heating_CNTR;
		_FuseBox.value = find_array[0].FuseBox;
		_LV_W_H.value = find_array[0].LV_W_H;
		_HV_W_H.value = find_array[0].HV_W_H;
		_PBE.value = find_array[0].PBE;
		_Gasket.value = find_array[0].Gasket;
		_Relay.value = find_array[0].Relay;
		_온도센서.value = find_array[0].온도센서;
		_Busbars.value = find_array[0].Busbars;
		_BMA.value = find_array[0].BMA;
		_ETC.value = find_array[0].ETC;
		_공정완료일.value = find_array[0].공정완료일;
		_작업자.value = find_array[0].작업자;
	} else {
		_공정입고일.value = '0000-00-00T00:00';
                _BMU.value = '';
                _CMU.value = '';
                _PRA.value = '';
                _SPA.value = '';
                _LWR_C.value = '';
		_UPR_C.value = '';
                _HV_CNTR.value = '';
                _Heating_CNTR.value = '';
                _FuseBox.value = '';
                _LV_W_H.value = '';
                _HV_W_H.value = '';
                _PBE.value = '';
                _Gasket.value = '';
                _Relay.value = '';
                _온도센서.value = '';
                _Busbars.value = '';
                _BMA.value = '';
                _ETC.value = '';
		_공정완료일.value = '0000-00-00T00:00';
		_작업자.value = worker;
	}
}

async function 분해조립_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 분해조립_doc;
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.BMU = _BMU.value;
	doc.CMU = _CMU.value;
	doc.PRA = _PRA.value;
	doc.SPA = _SPA.value;
	doc.UPR_C = _UPR_C.value;
	doc.LWR_C = _LWR_C.value;
	doc.HV_CNTR = _HV_CNTR.value;
	doc.Heating_CNTR = _Heating_CNTR.value;
	doc.FuseBox = _FuseBox.value;
	doc.LV_W_H = _LV_W_H.value;
	doc.HV_W_H = _HV_W_H.value;
	doc.PBE = _PBE.value;
	doc.Gasket = _Gasket.value;
	doc.Relay = _Relay.value;
	doc.온도센서 = _온도센서.value;
	doc.Busbars = _Busbars.value;
	doc.BMA = _BMA.value;
	doc.ETC = _ETC.value;
	doc.공정완료일 = _공정완료일.value;
	doc.작업자 = _작업자.value;
	
	console.log(docs);
	docs.forEach(async function(doc) {
		update_신품정보(신품정보, doc);
		await sleep(DELAY);

		console.log(update_count);
		console.log(insert_count);
	});

	update(분해조립, doc);
	await sleep(DELAY);
	

	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	
	이전페이지();
}

async function request_신품QR() {
	var QR = prompt('QR을 입력하세요');
	count(신품정보, { QR: QR });
	await delay();	
	console.log('신품정보 doc_count: ', doc_count);
	if(doc_count > 0) {
		find_신품정보(신품정보, { QR: QR });
		await delay();
		console.log(find_array);
		
		var doc = JSON.parse(JSON.stringify(신품정보_doc);
		doc.바코드 = find_array[0].바코드;
		doc.품명 = find_array[0].품명;
		doc.QR = find_array[0].QR;
		doc.구입처 = find_array[0].구입처;
		doc.금액 = find_array[0].금액;
		doc.사용여부 = '사용';
		doc.사용_관리번호 = _management_id.value;
		docs.push(doc);
		console.log(docs);
		
		var str = 'QR:' + QR + ', 바코드:' + find_array[0].바코드;
		console.log(str);
		return str;
	}

	return 'none';
}

async function request_고품QR() {
	var QR = prompt('QR을 입력하세요');
	count(고품정보, { QR: QR });
	await delay();	
	console.log('고품정보 doc_count: ', doc_count);
	if(doc_count > 0) {
		find_query(고품정보, { QR: QR });
		await delay();
		console.log(find_array);

		find(BSA재제조, find_array[0].관리번호);
		await delay();
		console.log(find_array);
		
		var str = '관리번호:' + find_array[0].관리번호 + ', 재제조번호:' + find_array[0].재제조번호;
		console.log(str);
		return str;
	}

	return 'none';
}

async function _BMU_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}

  	document.getElementById('_BMU').value = value;
}

async function _CMU_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_CMU').value = value;
}

async function _PRA_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_PRA').value = value;
}

async function _SPA_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_SPA').value = value;
}

async function _UPR_C_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호들 = await request_고품QR();
		value = value + '(' + 관련번호들 + ')';
	}
  	document.getElementById('_UPR_C').value = value;
}

async function _LWR_C_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_LWR_C').value = value;
}

async function _HV_CNTR_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_HV_CNTR').value = value;
}

async function _Heating_CNTR_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_Heating_CNTR').value = value;
}

async function _FuseBox_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_FuseBox').value = value;
}

async function _LV_W_H_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_LV_W_H').value = value;
}

async function _HV_W_H_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_HV_W_H').value = value;
}

async function _온도센서_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_온도센서').value = value;
}

async function _PBE_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_PBE').value = value;
}

async function _Gasket_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_Gasket').value = value;
}

async function _Busbars_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_Busbars').value = value;
}

async function _Relay_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_Relay').value = value;
}

async function _BMA_콤보박스(e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
  	document.getElementById('_BMA').value = value;
}

