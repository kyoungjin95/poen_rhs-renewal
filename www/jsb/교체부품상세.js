async function 교체부품상세_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	 const _label = document.getElementById('_title_no');
	_label.innerHTML = '<h2><b>' + 교체부품상세No + '</b></h2>';

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count(교체부품상세No, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세No, _management_id.value);
		await delay();
		
		_ORIGIN_관리번호.value = find_array[0].ORIGIN_관리번호;
		_교체전_품명.value = find_array[0].교체전_품명;
		_교체전_품번.value = find_array[0].교체전_품번;
		_교체전_QR.value = find_array[0].교체전_QR;
		_교체후_신품_고품.value = find_array[0].교체후_신품_고품;
		_교체후_고품식별.value = find_array[0].교체후_고품식별;
		_교체후_품번.value = find_array[0].교체후_품번;
		_교체후_QR.value = find_array[0].교체후_QR;
		_교체사유.value = find_array[0].교체사유;
	} else {
		_ORIGIN_관리번호.value = '';
		_교체전_품명.value = '';
		_교체전_품번.value = '';
		_교체전_QR.value = '';
		_교체후_신품_고품.value = '';
		_교체후_고품식별.value = '';
		_교체후_품번.value = '';
		_교체후_QR.value = '';
		_교체사유.value = '';
	}
}

async function 교체부품상세_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 교체부품상세_doc;
	doc.관리번호 = _management_id.value;
	doc.ORIGIN_관리번호 = _ORIGIN_관리번호.value;
	doc.교체전_품명 = _교체전_품명.value;
	doc.교체전_품번 = _교체전_품번.value;
	doc.교체전_QR = _교체전_QR.value;
	doc.교체후_신품_고품 = _교체후_신품_고품.value;
	doc.교체후_고품식별 = _교체후_고품식별.value;
	doc.교체후_품번 = _교체후_품번.value;
	doc.교체후_QR = _교체후_QR.value;
	doc.교체사유= _교체사유.value;
	
	update(교체부품상세No, doc);
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
