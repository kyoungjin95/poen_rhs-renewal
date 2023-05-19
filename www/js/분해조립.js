var 신품_docs = [];
var 고품_docs = [];
var BMU_count = 1;
var CMU_count = 1;
var PRA_count = 1;
var SPA_count = 1;
var LWR_C_count = 1;
var UPR_C_count = 1;
var PBE_count = 1;
var Gasket_count = 1;
var Relay_count = 1;
var HV_CNTR_count = 1;
var Heating_CNTR_count = 1;
var FuseBox_count = 1;
var LV_W_H_count = 1;
var HV_W_H_count = 1;
var 온도센서_count = 1;
var Busbars_count = 1;
var BMA_count = 1;

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
		_BMU1.value = find_array[0].BMU1;
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
                _BMU1.value = '';
                _BMU2.value = '';
                _BMU3.value = '';
                _BMU4.value = '';
                _BMU5.value = '';
                _BMU6.value = '';
                _BMU7.value = '';
                _BMU8.value = '';
                _BMU9.value = '';
                _BMU10.value = '';
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

	const tbody = document.querySelector('#tb tbody');
	tbody.addEventListener('click', function(e) {
		const cell = e.target.closest('td');
		if(!cell) return;
		const row = cell.parentElement;
		const rowIndex = row.rowIndex;
		const cellIndex = cell.cellIndex;
		console.log('row:', rowIndex);
		console.log('col:', cellIndex);
		if(rowIndex < 3 || cellIndex != 2) return;
		var str = row.children[0].innerText;
		console.log(str);

		if(str == 'BMU 1') _BMU_add();
		if(str == 'CMU 1') _CMU_add();
		if(str == 'PRA 1') _PRA_add();
		if(str == 'SPA 1') _SPA_add();
		if(str == 'BMU 1') _BMU_add();
		if(str == 'LWR Case 1') _LWR_C_add();
		if(str == 'UPR Case 1') _UPR_C_add();
		if(str == 'Relay 1') _Relay_add();
		if(str == 'HV CNTR 1') _HV_CNTR_add();
		if(str == 'Heating CNTR 1') _Heating_CNTR_add();
		if(str == 'FuseBox 1') _FuseBox_add();
		if(str == 'LV W/H 1') _LV_W_H_add();
		if(str == 'HV W/H 1') _HV_W_H_add();
		if(str == '온도센서 1') _온도센서_add();
		if(str == 'BMA 1') _BMA_add();

		var type = str.slice(0, -2);
		var no = str.slice(-2);
		console.log('type:', type, 'no:', no);
		if(no != 1) {
			_delete_row(rowIndex, no, type);
		}
	});
}

async function 분해조립_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 분해조립_doc;
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.BMU1 = _BMU1.value;
	doc.BMU2 = _BMU2.value;
	doc.BMU3 = _BMU3.value;
	doc.BMU4 = _BMU4.value;
	doc.BMU5 = _BMU5.value;
	doc.BMU6 = _BMU6.value;
	doc.BMU7 = _BMU7.value;
	doc.BMU8 = _BMU8.value;
	doc.BMU9 = _BMU9.value;
	doc.BMU10 = _BMU10.value;
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
	
	console.log(신품_docs);
	신품_docs.forEach(async function(doc) {
		update_신품정보(신품정보, doc);
		await sleep(DELAY);

		console.log(update_count);
		console.log(insert_count);
	});

	console.log(고품_docs);
	고품_docs.forEach(async function(doc) {
		update_고품정보(고품정보, doc);
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
		
		var doc = JSON.parse(JSON.stringify(신품정보_doc));
		doc.바코드 = find_array[0].바코드;
		doc.품명 = find_array[0].품명;
		doc.QR = find_array[0].QR;
		doc.구입처 = find_array[0].구입처;
		doc.금액 = find_array[0].금액;
		doc.사용여부 = '사용';
		doc.사용_관리번호 = _management_id.value;
		신품_docs.push(doc);
		console.log(신품_docs);
		
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
		find_고품정보(고품정보, { QR: QR });
		await delay();
		console.log('고품정보:', find_array);

		var doc = JSON.parse(JSON.stringify(고품정보_doc));
		doc.관리번호 = find_array[0].관리번호;
		doc.품명 = find_array[0].품명;
		doc.번호 = find_array[0].번호;
		doc.QR = find_array[0].QR;
		doc.폐기여부 = find_array[0].폐기여부;
		doc.사용여부 = '사용';
		doc.사용_관리번호 = _management_id.value;
		고품_docs.push(doc);
		console.log(고품_docs);

		find(BSA재제조, find_array[0].관리번호);
		await delay();
		console.log(find_array);

		var str = 'QR:' + QR + ', 관리번호:' + find_array[0].관리번호 + ', 재제조번호:' + find_array[0].재제조번호;
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

function _BMU_add() {
	BMU_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + (BMU_count - 1);
	var code_no = BMU_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_BMU" + code_no + "\"><b>BMU " + code_no + "</b></label></td><td><input type=\"text\" id=\"_BMU" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_BMU" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><center><button>-</button></center></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
}

function _CMU_add() {
	CMU_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + BMU_count + (CMU_count - 1);
	var code_no = CMU_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_CMU" + code_no + "\"><b>CMU " + code_no + "</b></label></td><td><input type=\"text\" id=\"_CMU" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_CMU" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _PRA_add() {
	PRA_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + BMU_count + CMU_count + (PRA_count - 1);
	var code_no = PRA_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_PRA" + code_no + "\"><b>PRA " + code_no + "</b></label></td><td><input type=\"text\" id=\"_PRA" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_PRA" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _SPA_add() {
	SPA_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + BMU_count + CMU_count + PRA_count + (SPA_count - 1);
	var code_no = SPA_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_SPA" + code_no + "\"><b>SPA " + code_no + "</b></label></td><td><input type=\"text\" id=\"_SPA" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_SPA" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _LWR_C_add() {
	LWR_C_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + BMU_count + CMU_count + PRA_count + SPA_count + (LWR_C_count - 1);
	var code_no = LWR_C_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_LWR_C" + code_no + "\"><b>LWR Case " + code_no + "</b></label></td><td><input type=\"text\" id=\"_LWR_C" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_LWR_C" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _UPR_C_add() {
	UPR_C_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + (UPR_C_count - 1);
	var code_no = UPR_C_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_UPR_C" + code_no + "\"><b>UPR Case " + code_no + "</b></label></td><td><input type=\"text\" id=\"_UPR_C" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_UPR_C" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _Relay_add() {
	Relay_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + (Relay_count - 1);
	var code_no = Relay_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_Relay" + code_no + "\"><b>Relay " + code_no + "</b></label></td><td><input type=\"text\" id=\"_Relay" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_Relay" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _HV_CNTR_add() {
	HV_CNTR_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + Relay_count + (HV_CNTR_count - 1);
	var code_no = HV_CNTR_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_HV_CNTR" + code_no + "\"><b>HV_CNTR " + code_no + "</b></label></td><td><input type=\"text\" id=\"_HV_CNTR" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_HV_CNTR" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _Heating_CNTR_add() {
	Heating_CNTR_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + Relay_count + HV_CNTR_count + (Heating_CNTR_count - 1);
	var code_no = Heating_CNTR_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_Heating_CNTR" + code_no + "\"><b>Heating_CNTR " + code_no + "</b></label></td><td><input type=\"text\" id=\"_Heating_CNTR" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_Heating_CNTR" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _FuseBox_add() {
	FuseBox_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + Relay_count + HV_CNTR_count + Heating_CNTR_count + (FuseBox_count - 1);
	var code_no = FuseBox_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_FuseBox" + code_no + "\"><b>FuseBox " + code_no + "</b></label></td><td><input type=\"text\" id=\"_FuseBox" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_FuseBox" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _LV_W_H_add() {
	LV_W_H_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + Relay_count + HV_CNTR_count + Heating_CNTR_count + FuseBox_count + (LV_W_H_count - 1);
	var code_no = LV_W_H_count;;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_LV_W_H" + code_no + "\"><b>LV W/H " + code_no + "</b></label></td><td><input type=\"text\" id=\"_LV_W_H" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_LV_W_H" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _HV_W_H_add() {
	HV_W_H_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + Relay_count + HV_CNTR_count + Heating_CNTR_count + FuseBox_count + LV_W_H_count + (HV_W_H_count - 1);
	var code_no = HV_W_H_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_HV_W_H" + code_no + "\"><b>HV W/H " + code_no + "</b></label></td><td><input type=\"text\" id=\"_HV_W_H" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_HV_W_H" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _온도센서_add() {
	온도센서_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + Relay_count + HV_CNTR_count + Heating_CNTR_count + FuseBox_count + LV_W_H_count + HV_W_H_count + (온도센서_count - 1);
	var code_no = 온도센서_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_온도센서" + code_no + "\"><b>온도센서 " + code_no + "</b></label></td><td><input type=\"text\" id=\"_온도센서" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_온도센서" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _BMA_add() {
	BMA_count++;
	const _tb = document.getElementById('tb');
	var oCurrentRow;
	var rowIcnt = 2 + 2 + 1 + BMU_count + CMU_count + PRA_count + SPA_count + LWR_C_count + UPR_C_count + Relay_count + HV_CNTR_count + Heating_CNTR_count + FuseBox_count + LV_W_H_count + HV_W_H_count + 온도센서_count + (BMA_count - 1);
	var code_no = BMA_count;
	console.log('rosw count:', rowIcnt);
	if(code_no > 10) return false;
	oCurrentRow = _tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_BMA" + code_no + "\"><b>BMA " + code_no + "</b></label></td><td><input type=\"text\" id=\"_BMA" + code_no + "\" size=\"100\" required><select name=\"language\" onchange=\"_BMA" + code_no + "_콤보박스(this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><button>-</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _delete_row(index, no, type) {
	const _tb = document.getElementById('tb');
	if(type == 'BMU' && no == BMU_count) {
		_tb.deleteRow(index);
		BMA_count--;
	}

	if(type == 'CMU' && no == CMU_count) {
		_tb.deleteRow(index);
		CMU_count--;
	}

	if(type == 'PRA' && no == PRA_count) {
		_tb.deleteRow(index);
		PRA_count--;
	}

	if(type == 'SPA' && no == SPA_count) {
		_tb.deleteRow(index);
		SPA_count--;
	}

	if(type == 'LWR Case' && no == LWR_C_count) {
		_tb.deleteRow(index);
		LWR_C_count--;
	}

	if(type == 'UPR Case' && no == UPR_C_count) {
		_tb.deleteRow(index);
		UPR_C_count--;
	}

	if(type == 'PBE' && no == PBE_count) {
		_tb.deleteRow(index);
		PBE_count--;
	}

	if(type == 'Gasket' && no == Gasket_count) {
		_tb.deleteRow(index);
		Gasket_count--;
	}

	if(type == 'Relay' && no == Relay_count) {
		_tb.deleteRow(index);
		Relay_count--;
	}

	if(type == 'HV_CNTR' && no == HV_CNTR_count) {
		_tb.deleteRow(index);
		HV_CNTR_count--;
	}

	if(type == 'Heating_CNTR' && no == Heating_CNTR_count) {
		_tb.deleteRow(index);
		Heating_CNTR_count--;
	}

	if(type == 'FuseBox' && no == FuseBox_count) {
		_tb.deleteRow(index);
		FuseBox_count--;
	}

	if(type == 'LV W/H' && no == LV_W_H_count) {
		_tb.deleteRow(index);
		Heating_CNTR_count--;
	}

	if(type == 'HV W/H' && no == HV_W_H_count) {
		_tb.deleteRow(index);
		Heating_CNTR_count--;
	}

	if(type == '온도센서' && no == 온도센서_count) {
		_tb.deleteRow(index);
		온도센서_count--;
	}

	if(type == 'BMA' && no == BMA_count) {
		_tb.deleteRow(index);
		BMA_count--;
	}
}
