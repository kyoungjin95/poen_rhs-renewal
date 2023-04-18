async function EOL_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;
	_검사자.value = worker;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count('EOL', { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		관리번호 = _management_id.value;
		find(EOL, _management_id.value);
		await delay();
		console.log(find_array);
		_용량평가.value = find_array[0].용량평가;
		_SOC60Percent.value = find_array[0].SOC60Percent;
		_DCIR.value = find_array[0].DCIR;
		_완료일.value = find_array[0].완료일;
		_검사자.value = find_array[0].검사자;
	} else {
		_용량평가.value = '';
		_SOC60Percent.value = '';
		_DCIR.value = '';
		_완료일.value = '0000-00-00';
		_검사자.value = worker;
	}
}

async function EOL_save() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = EOL_doc;
	doc.관리번호 = _management_id.value;
	doc.용량평가 = _용량평가.value;
	doc.SOC60Percent = _SOC60Percent.value;
	doc.DCIR = _DCIR.value;
	doc.완료일 = _완료일.value;
	doc.검사자 = _검사자.value;
	
	update(EOL, doc);
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

function 이전페이지() {
	loadPage('item-details.html');
}
