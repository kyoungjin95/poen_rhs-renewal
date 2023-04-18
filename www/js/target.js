async function 목표수량_시작() {
	if(worker == '') return;
	flag_목표수량 = false;
	while(_목표수량 == undefined) {
		await sleep(DELAY);
	}

	count('목표수량', { 목표수량 : _목표수량.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count > 0) {
		find_query(목표수량, { $extsts : true });
		await delay();
		console.log(find_array);
		_목표수량.value = find_array[0].목표수량;
		_주간목표수량.value = find_array[0].주간목표수량;
	} else {
		_목표수량.value = '';
		_주간목표수량.value = '';
	}
}

async function 목표수량_save() {
	if(worker == '') return;
	if(_목표수량.value.length == 0) return;

	var doc = 목표수량_doc;
	doc.목표수량 = _목표수량.value;
	doc.주간목표수량 = _주간목표수량.value;
	console.log(doc.목표수량);
	console.log(doc.주간목표수량);
	update(목표수량, doc);
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

function 이전페이지() {
	if(worker == '') return;
	loadPage('item-details.html');
}
