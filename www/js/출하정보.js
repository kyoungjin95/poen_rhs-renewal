async function 출하정보_managementID() {
	worker = sessionStorage.getItem('worker');
	관리번호 = sessionStorage.getItem('manage_id');
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count('출하정보', { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		관리번호 = _management_id.value;
		find(출하정보, _management_id.value);
		await delay();
		console.log(find_array);
		_출하코드.value = find_array[0].출하코드;
		_납품처.value = find_array[0].납품처;
		_출하일.value = find_array[0].출하일;
	} else {
		_출하코드.value = '';
		_납품처.value = '';
		_출하일.value = '0000-00-00';
	}
}

async function 출하정보_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 출하정보_doc;
	doc.관리번호 = _management_id.value;
	doc.출하코드 = _출하코드.value;
	doc.납품처 = _납품처.value;
	doc.출하일 = _출하일.value;
	
	update(출하정보, doc);
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
