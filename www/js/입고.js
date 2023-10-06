async function 입고_시작() {
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	const _입고기타 = document.getElementById('_입고_기타');
	const _입고일반 = document.getElementById('_입고_일반');

	if(level != '관리자') {
		_입고일반.style.display = 'block';
		_입고기타.style.display = 'none';
	} else {
		_입고일반.style.display = 'none';
		_입고기타.style.display = 'block';
	}

	flag_입고 = false;
	
	if(_management_id.value.trim() == '조회 버튼을 누르세요') _management_id.value =  관리번호;
	console.log('load: ', _management_id.value);
	if(_management_id.value.length == 0) return;
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count(입고, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count > 0) {
		find(입고, _management_id.value);
		await delay();
		console.log('입고 data:', find_array);

		_입고일.value = find_array[0].입고일;
		_입고처.value = find_array[0].입고처;
		_구분.value = find_array[0].구분;
		_차종.value = find_array[0].차종;
		_품번.value = find_array[0].품번;
	} else {
		_입고일.value = "0000-00-00T00:00";
		_입고처.value = '';
		_구분.value = '';
		_차종.value = '';
		_품번.value = '';
	}
}

async function 입고_save() {
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 입고_doc;
	doc.관리번호 = _management_id.value;
	doc.입고일 = _입고일.value;
	doc.입고처 = _입고처.value;
	doc.구분 = _구분.value;
	doc.차종 = _차종.value;
	doc.품번 = _품번.value;
	
	update(입고, doc);
	await delay();

	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	count(성능검사, { 관리번호 : _관리번호 });
	await delay();

	if(doc_count > 0) {
		find(성능검사, _관리번호);
		await delay();

		if(find_array[0].공정완료일 != '') {
			공정단계 = 'EOL';
		}
	}

	count(BSA재제조, { 관리번호 : _management_id.value });
	await delay();

	if(doc_count == 0) {
		var _doc = BSA재제조_doc;
		_doc.관리번호 = _management_id.value;
		_doc.입고 = _입고일.value;

		update(BSA재제조, _doc);
		await delay();
	} else {
		var _doc = {
			관리번호 : _management_id.value,
			입고 : _입고일.value,
		}

		update(BSA재제조, _doc);
		await delay();
	}
	
	공정단계자동입력(_management_id.value);
	//이전페이지();
}

function _구분_콤보박스(e) {

	const value = e.value;

  	document.getElementById('_구분').value = value;
}
