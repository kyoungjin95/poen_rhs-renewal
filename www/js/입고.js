async function 입고_시작() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	alert_allow = true;

	flag_입고 = false;
	
	_management_id.value =  관리번호;

	console.log('load: ', _management_id.value);
	if(_management_id.value.length == 0) return;
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count(입고, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(입고, _management_id.value);
		await delay();
		console.log('입고 data:', find_array);

		_입고일.value = find_array[0].입고일;
		_입고처.value = find_array[0].입고처;
		_구분.value = find_array[0].구분;
		_차종.value = find_array[0].차종;
		_품번.value = find_array[0].품번;
		_RO_no.value = find_array[0].RO_no;
		_VIN.value = find_array[0].VIN;
		_랙번호.value = find_array[0].랙번호;
		_QRCode.value = find_array[0].랙번호;
		_주행거리.value = find_array[0].VIN;
		_차량번호.value = find_array[0].랙번호;
	} else {
		_입고일.value = "0000-00-00T00:00";
		_입고처.value = '';
		_구분.value = '';
		_차종.value = '';
		_품번.value = '';
		_RO_no.value = '';
		_VIN.value = '';
		_랙번호.value = '';
		_QRCode.value = '';
		_주행거리.value = '';
		_차량번호.value = '';
	}
}

async function 입고_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	if(_RO_no.value.length != 17 && _RO_no.value.length != 0) {
		var cnt = (_RO_no.value.match(/-/g) || []).length;
		if((_RO_no.value.length - cnt) != 17) {
			alert('Ro 번호 자릴수가 다릅니다.(17)');
			return;
		}
	}

	if(_VIN.value.length != 17 && _VIN.value.length != 0) {
		var cnt = (_VIN.value.match(/-/g) || []).length;
		if((_VIN.value.length - cnt) != 17) {
			alert('VIN이 자릿수가 다릅니다.(17)');
			return;
		}
	}

	var doc = 입고_doc;
	doc.관리번호 = 관리번호;
	doc.입고일 = _입고일.value;
	doc.입고처 = _입고처.value;
	doc.구분 = _구분.value;
	doc.차종 = _차종.value;
	doc.품번 = _품번.value;
	doc.RO_no = _RO_no.value;
	doc.VIN  = _VIN.value;
	doc.랙번호 = _랙번호.value;
	doc.QRcode = _QRCode.value;
	doc.주행거리 = _주행거리.value;
	doc.차량번호  = _차량번호.value;
	
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
	
	이전페이지();
}

function _구분_콤보박스(e) {

	const value = e.value;

  	document.getElementById('_구분').value = value;
}
