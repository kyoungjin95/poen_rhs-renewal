var tabledata = [];
async function 고품정보등록_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count(고품정보, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(고품정보, _management_id.value);
		await delay();
		tabledata = find_array;
		console.log('고품정보 : ', find_array);
	} else {
		_품명.value = '';
                _번호.value = '';
                _QR.value = '';
                _폐기여부.value = '';
	}

	var table_고품정보 = new Tabulator("#grid_고품정보", {
		layout: "resizableColumnFit",
		height:1500,
		data:tabledata, 
		autoColumns:true,
	});
}

async function 고품정보_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 고품정보_doc;
	doc.관리번호 = _management_id.value;
	doc.품명 = _품명.value;
	doc.번호 = _번호.value;
	doc.QR = _QR.value;
	doc.폐기여부 = _폐기여부.value;

	update_고품정보(고품정보, doc);
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

function _품명_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_품명').value = value;
}

function _번호_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_번호').value = value;
}

function _폐기여부_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_폐기여부').value = value;
}

