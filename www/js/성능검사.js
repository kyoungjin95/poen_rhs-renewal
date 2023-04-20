async function 성능검사_managementID() {
	worker = localStorage.getItem('worker');
	관리번호 = localStorage.getItem('manage_id');
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count('성능검사', { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		관리번호 = _management_id.value;
		find(성능검사, _management_id.value);
		await delay();
		console.log(find_array);
        	_UPR_C조립.value = find_array[0].UPR_C조립; 
        	_기밀검사_케이스.value = find_array[0].기밀검사_케이스;
        	_기밀검사_냉각유로.value = find_array[0].기밀검사_냉각유로;
        	_절연검사P.value = find_array[0].절연검사_Plus;
        	_절연검사M.value = find_array[0].절연검사_Minus;
        	_토크검사_UPR_C.value = find_array[0].토크검사_UPR_C;
        	_토크검사_버스바.value = find_array[0].토크검사_버스바;
        	_통신검사_DTC코드.value = find_array[0].통신검사_DTC코드;
        	_통신검사_팩전압.value = find_array[0].통신검사_팩전압;
        	_통신검사_셀전압편차.value = find_array[0].통신검사_셀전압편차;
        	_통신검사_릴레이구동.value = find_array[0].통신검사_릴레이구동;
        	_완료일.value = find_array[0].통신검사_릴레이구동;
        	_검사자.value = find_array[0].검사자;
	} else {
		_UPR_C조립.value = '';
		_기밀검사_케이스.value = '';
		_기밀검사_냉각유로.value = '';
		_절연검사P.value = '';
		_절연검사M.value = '';
		_토크검사_UPR_C.value = '';
		_토크검사_버스바.value = '';
		_통신검사_DTC코드.value = '';
		_통신검사_팩전압.value = '';
		_통신검사_셀전압편차.value = ''; 
		_통신검사_릴레이구동.value = ''; 
		_완료일.value = '';
		_검사자.value = worker;
	}
}

async function 성능검사_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 성능검사_doc;
	doc.관리번호 = _management_id.value;
	doc.UPR_C조립 = _UPR_C조립.value;
	doc.기밀검사_케이스 = _기밀검사_케이스.value;
	doc.기밀검사_냉각유로 = _기밀검사_냉각유로.value;
	doc.절연검사_Plus = _절연검사P.value;
	doc.절연검사_Minus = _절연검사M.value;
	doc.토크검사_UPR_C = _토크검사_UPR_C.value;
	doc.토크검사_버스바 =_토크검사_버스바.value;
	doc.통신검사_DTC코드 =  _통신검사_DTC코드.value;
	doc.통신검사_팩전압 = _통신검사_팩전압.value;
	doc.통신검사_셀전압편차 = _통신검사_셀전압편차.value
	doc.통신검사_릴레이구동 = _통신검사_릴레이구동.value;
	doc.완료일 = _완료일.value;
	doc.검사자 = _검사자.value;

	console.log(doc);

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

	이전페이지();
}

function _토크검사_UPR_C_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_토크검사_UPR_C').value = value;
}

function _토크검사_버스바_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_토크검사_버스바').value = value;
}

function _통신검사_릴레이구동_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_통신검사_릴레이구동').value = value;
}
