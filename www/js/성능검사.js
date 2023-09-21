async function 성능검사_시작(is재제조 = false) {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	flag_성능검사 = false;

	if(_management_id.value == '조회 버튼을 누르세요') _management_id.value =  관리번호;
	_검사자.value = worker;

	if(is재제조 == false) {
		if(_management_id.value.length == 0) return;
		console.log('load: ', _management_id.value);
		
		count(BSA재제조, { 관리번호 : _management_id.value });
		await delay();
		
		if(doc_count >= 1) {
			find(BSA재제조, _management_id.value);
			await delay();

			_재제조번호.value = find_array[0].재제조번호;
		}
	} else {
		if(_재제조번호.value.length == 0) return;

		count(BSA재제조, { 재제조번호 : _재제조번호.value });
		await delay();

		if(doc_count >= 1) {
			find_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value });
			await delay();

			_management_id.value = find_array[0].관리번호;
		} else {
			_management_id.value = '찾지 못하였습니다';
		}
	}

	count(입고, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(입고, _management_id.value);
		await delay();
		console.log('입고 data:', find_array);

		_구분.value = find_array[0].구분;
		_차종.value = find_array[0].차종;
		_품번.value = find_array[0].품번;
	} else {
		_구분.value = '';
		_차종.value = '';
		_품번.value = '';
	}

	count(성능검사, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(성능검사, _management_id.value);
		await delay();
		
		_공정입고일.value = find_array[0].공정입고일;
		_용량평가.value = find_array[0].용량평가;
		_SOC60Percent.value = find_array[0].SOC60Percent;
		_DCIR.value = find_array[0].DCIR;
		_DCIR_Charge.value    = find_array[0].DCIR_Charge;
		_DCIR_Discharge.value =	find_array[0].DCIR_Discharge;
		_공정완료일.value = find_array[0].공정완료일;
		_검사자.value = find_array[0].검사자;
	} else {
		_공정입고일.value = '0000-00-00T00:00'
		_용량평가.value = '';
		_SOC60Percent.value = '';
		_DCIR.value = '';
		_DCIR_Charge.value    = '';
		_DCIR_Discharge.value =	'';
		_공정완료일.value = '0000-00-00T00:00';
		_검사자.value = worker;
	}
}

async function 성능검사_save() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 성능검사_doc;
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.용량평가 = _용량평가.value;
	doc.SOC60Percent = _SOC60Percent.value;
	doc.DCIR = _DCIR.value;
	doc.DCIR_Charge = _DCIR_Charge.value;
	doc.DCIR_Discharge = _DCIR_Discharge.value;
	doc.공정완료일 = _공정완료일.value;
	doc.검사자 = _검사자.value;
	
	update(성능검사, doc);
	await sleep(DELAY);
	
	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	//이전페이지();
}
