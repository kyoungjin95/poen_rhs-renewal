async function 제조요청_save() {
	if(worker == '') return;
	while(_요청일 == undefined) {
		await sleep(DELAY);
	}
	if(_요청일.value.length == 0) return;
	console.log('save: ', _요청일.value);

	var doc = 제조요청_doc;
	doc.요청일 = _요청일.value;
	doc.메이커 = _메이커.value;
	doc.수량 = _수량.value;
	doc.완료일 = _완료일.value;
	
	update(제조요청, doc);
	await sleep(DELAY);
	
	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}
}

