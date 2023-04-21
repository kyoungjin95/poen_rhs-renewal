async function 기초검사_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count('기초검사', { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(기초검사, _management_id.value);
		await delay();
		
		_공정입고일.value = find_array[0].공정입고일;
		_육안검사_외부.value = find_array[0].육안검사_외부;
		_육안검사_외부_특이사항.value = find_array[0].육안검사_외부_특이사항;
		_육안검사_내부.value = find_array[0].육안검사_내부;
		_육안검사_내부_특이사항.value = find_array[0].육안검사_내부_특이사항;
		_기밀검사_케이스.value = find_array[0].기밀검사_케이스;
		_기밀검사_케이스_특이사항.value = find_array[0].기밀검사_케이스_특이사항;
		_기밀검사_냉각유로.value = find_array[0].기밀검사_냉각유로;
		_기밀검사_냉각유로_특이사항.value = find_array[0].기밀검사_냉각유로_특이사항;
		_절연검사P.value = find_array[0].절연검사_Plus;
		_절연검사N.value = find_array[0].절연검사_Minus;
		_토크검사_UPR_C.value = find_array[0].토크검사_UPR_C;
		_토크검사_버스바.value = find_array[0].토크검사_버스바;
		_통신검사_DTC코드1.value = find_array[0].통신검사_DTC코드1;
		_통신검사_DTC코드2.value = find_array[0].통신검사_DTC코드2;
		_통신검사_DTC코드3.value = find_array[0].통신검사_DTC코드3;
		_통신검사_DTC코드4.value = find_array[0].통신검사_DTC코드4;
		_통신검사_DTC코드5.value = find_array[0].통신검사_DTC코드5;
		_통신검사_DTC코드6.value = find_array[0].통신검사_DTC코드6;
		_통신검사_DTC코드7.value = find_array[0].통신검사_DTC코드7;
		_통신검사_DTC코드8.value = find_array[0].통신검사_DTC코드8;
		_통신검사_DTC코드9.value = find_array[0].통신검사_DTC코드9;
		_통신검사_DTC코드10.value = find_array[0].통신검사_DTC코드10;
		_통신검사_팩전압.value = find_array[0].통신검사_팩전압;
		_통신검사_셀전압편차.value = find_array[0].통신검사_셀전압편차;
		_통신검사_릴레이구동.value = find_array[0].통신검사_릴레이구동;
		_공정완료일.value = find_array[0].공정완료일;
		_검사자.value = find_array[0].검사자;
	} else {
		_공정입고일.value = '0000-00-00T00:00';
		_육안검사_외부.value = '';
		_육안검사_외부_특이사항.value = '';
		_육안검사_내부.value = '';
		_육안검사_내부_특이사항.value = '';
		_기밀검사_케이스.value = '';
		_기밀검사_케이스_특이사항.value = '';
		_기밀검사_냉각유로.value = '';
		_기밀검사_냉각유로_특이사항.value = '';
		_절연검사P.value = '';
		_절연검사N.value = '';
		_토크검사_UPR_C.value = '';
		_토크검사_버스바.value = '';
		_통신검사_DTC코드1.value = '';
		_통신검사_DTC코드2.value = '';
		_통신검사_DTC코드3.value = '';
		_통신검사_DTC코드4.value = '';
		_통신검사_DTC코드5.value = '';
		_통신검사_DTC코드6.value = '';
		_통신검사_DTC코드7.value = '';
		_통신검사_DTC코드8.value = '';
		_통신검사_DTC코드9.value = '';
		_통신검사_DTC코드10.value = '';
		_통신검사_팩전압.value = '';
		_통신검사_셀전압편차.value = '';
		_통신검사_릴레이구동.value = '';
		_공정완료일.value = '0000-00-00T00:00';
		_검사자.value = '';
	}
}

async function 기초검사_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 기초검사_doc;
        doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.육안검사_외부 = _육안검사_외부.value;
	doc.육안검사_외부_특이사항 = _육안검사_외부_특이사항.value;
	doc.육안검사_내부 = _육안검사_내부.value;
	doc.육안검사_내부_특이사항 = _육안검사_내부_특이사항.value;
	doc.기밀검사_케이스 = _기밀검사_케이스.value;
	doc.기밀검사_케이스_특이사항 = _기밀검사_케이스_특이사항.value;
	doc.기밀검사_냉각유로 = _기밀검사_냉각유로.value;
	doc.기밀검사_냉각유로_특이사항 = _기밀검사_냉각유로_특이사항.value;
	doc.절연검사_Plus = _절연검사P.value;
	doc.절연검사_Minus = _절연검사N.value;
	doc.토크검사_UPR_C = _토크검사_UPR_C.value;
	doc.토크검사_버스바 = _토크검사_버스바.value;
	doc.통신검사_DTC코드1 = _통신검사_DTC코드1.value;
	doc.통신검사_DTC코드2 = _통신검사_DTC코드2.value;
	doc.통신검사_DTC코드3 = _통신검사_DTC코드3.value;
	doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
	doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
	doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
	doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
	doc.통신검사_DTC코드8 = _통신검사_DTC코드8.value;
	doc.통신검사_DTC코드9 = _통신검사_DTC코드9.value;
	doc.통신검사_DTC코드10 = _통신검사_DTC코드10.value;
	doc.통신검사_팩전압 = _통신검사_팩전압.value;
	doc.통신검사_셀전압편차 = _통신검사_셀전압편차.value;
	doc.통신검사_릴레이구동 = _통신검사_릴레이구동.value;
	doc.공정완료일 = _공정완료일.value;
	doc.검사자 = _검사자.value;
	
	update(기초검사, doc);
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

function _육안검사외부_콤보박스(e) {

	const value = e.value;

  	document.getElementById('_육안검사_외부').value = value;
}

function _육안검사외부특이사항_콤보박스(e) {

	const value = e.value;

  	document.getElementById('_육안검사_외부_특이사항').value = value;
}

function _육안검사내부_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_육안검사_내부').value = value;
}

function _육안검사내부특이사항_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_육안검사_내부_특이사항').value = value;
}

function _기밀검사케이스특이사항_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_기밀검사_케이스_특이사항').value = value;
}

function _기밀검사냉각유로특이사항_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_기밀검사_냉각유로_특이사항').value = value;
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
