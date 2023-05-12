var m_id = '';
var tabledata = [];
async function 신품정보등록_조회() {
	if(worker == '') return;
	while(_바코드 == undefined) {
		await sleep(DELAY);
	}

	if(_바코드.value.length == 0) return;
	console.log('load: ', _바코드.value);
	if(_바코드.value == '' | _바코드.value == 'none') return;

	count(신품정보, { 바코드 : _바코드.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_신품정보(신품정보, { 바코드 : _바코드.value });
		await delay();
		console.log('신품정보 : ', find_array);

		_품명.value = find_array[0].품명;
                _QR.value = find_array[0].QR;
                _구입처.value = find_array[0].구입처;
		_금액.value = find_array[0].금액;
                _사용여부.value = find_array[0].사용여부;
                _사용_관리번호.value = find_array[0].사용_관리번호;
	} else {
		_품명.value = '';
                _QR.value = '';
                _구입처.value = '';
		_금액.value = '';
                _사용여부.value = '';
                _사용_관리번호.value = '';
	}

	find_신품정보(신품정보, { 바코드 : { $exists: true }});
	await delay();
	tabledata = find_array;

	var table_신품정보 = new Tabulator("#grid_신품정보", {
		layout: "resizableColumnFit",
		height:200,
		data:tabledata, 
		//autoColumns:true,
	});

}

async function 신품정보_save() {
	if(worker == '') return;
	if(_바코드.value.length == 0) return;
	console.log('save: ', _바코드.value);

	var doc = 신품정보_doc;
	doc.바코드 = _바코드.value;
	doc.품명 = _품명.value;
	doc.QR = _QR.value;
	doc.구입처 = _구입처.value;
	doc.금액 = _금액.value;
	doc.사용여부 = _사용여부.value;
	doc.사용_관리번호 = _사용_관리번호.value;

	update_신품정보(신품정보, doc);
	await sleep(DELAY);
	
	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	신품정보등록_조회();
}

function _품명_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_품명').value = value;
}

function _사용여부_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_사용여부').value = value;
}

