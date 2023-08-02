async function 세척_시작() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	flag_세척 = false;
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count(세척, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(세척, _management_id.value);
		await delay();
		
		_공정입고일.value = find_array[0].공정입고일;
		_공정완료일.value = find_array[0].공정완료일;
		_기밀검사_케이스.value = find_array[0].기밀검사_케이스;
		_기밀검사_케이스_특이사항.value = find_array[0].기밀검사_케이스_특이사항;
		_특이사항.value = find_array[0].특이사항
	} else {
		_공정입고일.value = '0000-00-00T00:00';
		_공정완료일.value = '0000-00-00T00:00';
		_기밀검사_케이스.value = '';
		_기밀검사_케이스_특이사항.value = '';
		_특이사항.value = '';
	}
}

async function 세척_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 세척_doc;
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.공정완료일 = _공정완료일.value;
	doc.기밀검사_케이스 = _기밀검사_케이스.value;
	doc.기밀검사_케이스_특이사항 = _기밀검사_케이스_특이사항.value;
	doc.특이사항 = _특이사항.value;
	
	update(세척, doc);
	await delay();
	
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

function _기밀검사_케이스_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_기밀검사_케이스').value = value;
}
