async function 세척_시작(is재제조 = false) {
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	flag_세척 = false;
	if(_management_id.value == '조회 버튼을 누르세요') _management_id.value =  관리번호;

	if(is재제조 == false) {
		if(_management_id.value.length == 0) return;
		console.log('load: ', _management_id.value);
	} else {
		if(_재제조번호.value.length == 0) return;
	}

	if(is재제조 == false) {
		count(BSA재제조, {관리번호 : _management_id.value });
		await delay();
		if(BSA재제조_cnt > 0) {
			find(BSA재제조, _management_id.value);
			await delay();

			_재제조번호.value = BSA재제조_v.재제조번호;
		} else {
			_재제조번호.value = '';
		}
	} else {
		count(BSA재제조, { 재제조번호 : _재제조번호.value });
		await delay();

		if(BSA재제조_cnt > 0) {
			find_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value });
			await delay();

			_management_id.value = BSA재제조_v.관리번호;
		} else {
			_management_id.value = '찾지 못하였습니다';
		}
	}

	count(입고, { 관리번호 : _management_id.value });
	await delay();

	if(입고_cnt > 0) {
		find(입고, _management_id.value);
		await delay();

		_구분.value = 입고_v.구분;
		_차종.value = 입고_v.차종;
		_품번.value = 입고_v.품번;
	} else {
		_구분.value = '';
		_차종.value = '';
		_품번.value = '';
	}

	count(세척, { 관리번호 : _management_id.value });
	await delay();

	if(세척_cnt > 0) {
		find(세척, _management_id.value);
		await delay();
		_공정입고일.value = 세척_v.공정입고일;
		_공정완료일.value = 세척_v.공정완료일;
		_어퍼케이스재사용가능.value = 세척_v.어퍼케이스재사용가능;
		_기밀검사_케이스.value = 세척_v.기밀검사_케이스;
		_기밀검사_케이스_특이사항.value = 세척_v.기밀검사_케이스_특이사항;
		_특이사항.value = 세척_v.특이사항
	} else {
		_공정입고일.value = '0000-00-00T00:00';
		_공정완료일.value = '0000-00-00T00:00';
		_어퍼케이스재사용가능.value = '';
		_기밀검사_케이스.value = '';
		_기밀검사_케이스_특이사항.value = '';
		_특이사항.value = '';
	}
}

async function 세척_save() {
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 세척_doc;
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.공정완료일 = _공정완료일.value;
	doc.어퍼케이스재사용가능 = _어퍼케이스재사용가능.value;
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

	count(BSA재제조, { 관리번호 : _management_id.value });
	await delay();

	if(BSA재제조_cnt == 0) {
		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호 = _management_id.value;
		_doc.세척투입일 = _공정입고일.value;
		_doc.세척 = _공정완료일.value;

		update(BSA재제조, _doc);
		await delay();
	} else {
		var _doc = {
			관리번호 : _management_id.value,
			세척투입일 : _공정입고일.value,
			세척 : _공정완료일.value,
		}

		update(BSA재제조, _doc);
		await delay();
	}

	await 공정단계자동입력(_management_id.value);
	//이전페이지();
}

function _어퍼케이스재사용가능_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_어퍼케이스재사용가능').value = value;
}

function _기밀검사_케이스_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_기밀검사_케이스').value = value;
}

async function 세척_카메라시작() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = JSON.parse(JSON.stringify(세척_doc));
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.공정완료일 = _공정완료일.value;
	doc.어퍼케이스재사용가능 = _어퍼케이스재사용가능.value;
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

	세척_사진촬영(doc.관리번호);
}
