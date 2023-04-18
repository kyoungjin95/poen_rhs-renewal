async function 분해조립_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id == 'none') return;

	count('분해조립', { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		관리번호 = _management_id.value;
		find(분해조립, _management_id.value);
		await delay();
		console.log(find_array);
		_UPR_C.value = find_array[0].UPR_C;
		_PBE.value = find_array[0].PBE;
		_Gasket.value = find_array[0].Gasket;
		_Busbars.value = find_array[0].Busbars;
		_W_H.value = find_array[0].W_H;
		_SPA.value = find_array[0].SPA;
		_PRA.value = find_array[0].PRA;
		_FuseBox.value = find_array[0].FuseBox;
		_Relay.value = find_array[0].Relay;
		_CMU.value = find_array[0].CMU;
		_BMU.value = find_array[0].BMU;
		_BMA.value = find_array[0].BMA;
		_LWR_C.value = find_array[0].LWR_C;
		_ETC.value = find_array[0].ETC;
		_완료일.value = find_array[0].완료일;
		_작업자.value = find_array[0].작업자;
	} else {
		_UPR_C.value = '';
                _PBE.value = '';
                _Gasket.value = '';
                _Busbars.value = '';
                _W_H.value = '';
                _SPA.value = '';
                _PRA.value = '';
                _FuseBox.value = '';
                _Relay.value = '';
                _CMU.value = '';
                _BMU.value = '';
                _BMA.value = '';
                _LWR_C.value = '';
                _ETC.value = '';
		_완료일.value = '0000-00-00';
		_작업자.value = worker;
	}
}

async function 분해조립_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 분해조립_doc;
	doc.관리번호 = _management_id.value;
	doc.UPR_C = _UPR_C.value;
	doc.PBE = _PBE.value;
	doc.Gasket = _Gasket.value;
	doc.Busbars = _Busbars.value;
	doc.W_H = _W_H.value;
	doc.SPA = _SPA.value;
	doc.PRA = _PRA.value;
	doc.FuseBox = _FuseBox.value;
	doc.Relay = _Relay.value;
	doc.CMU =  _CMU.value;
	doc.BMU = _BMU.value;
	doc.BMA = _BMA.value;
	doc.LWR_C = _LWR_C.value;
	doc.ETC = _ETC.value;
	doc.완료일 = _완료일.value;
	doc.작업자 = _작업자.value;
	
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

	loadPage('item-details.html');
}

function _UPR_C_콤보박스(e) {

	const value = e.value;

  	document.getElementById('_UPR_C').value = value;
}

function _PBE_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_PBE').value = value;
}

function _Gasket_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_Gasket').value = value;
}

function _Busbars_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_Busbars').value = value;
}

function _W_H_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_W_H').value = value;
}

function _SPA_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_SPA').value = value;
}

function _PRA_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_PRA').value = value;
}

function _FuseBox_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_FuseBox').value = value;
}

function _Relay_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_Relay').value = value;
}

function _CMU_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_CMU').value = value;
}

function _BMU_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_BMU').value = value;
}

function _BMA_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_BMA').value = value;
}

function _LWR_C_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_LWR_C').value = value;
}

function 이전페이지() {
	if(worker == '') return;
	loadPage('item-details.html');
}
