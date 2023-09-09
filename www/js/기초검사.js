async function 기초검사_시작() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	
	flag_기초검사 = false;

	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	alert_allow = false;

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
		_RO_no.value = find_array[0].RO_no;
		_VIN.value = find_array[0].VIN;
		_QRCode.value = find_array[0].랙번호;
		_주행거리.value = find_array[0].VIN;
		_차량번호.value = find_array[0].랙번호;
	}

	count(기초검사, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count_1: ', doc_count);
	if(doc_count >= 1) {
		find(기초검사, _management_id.value);
		await delay();
		
		_공정입고일.value = find_array[0].공정입고일;
		_육안검사_외부.value = find_array[0].육안검사_외부;
		_육안검사_외부_특이사항.value = find_array[0].육안검사_외부_특이사항;
		_육안검사_내부.value = find_array[0].육안검사_내부;
		_육안검사_내부_특이사항.value = find_array[0].육안검사_내부_특이사항;
		_기밀검사_냉각유로.value = find_array[0].기밀검사_냉각유로;
		_기밀검사_냉각유로_특이사항.value = find_array[0].기밀검사_냉각유로_특이사항;
		_절연검사P.value = find_array[0].절연검사_Plus;
		_절연검사N.value = find_array[0].절연검사_Minus;
		_절연검사HVP.value = find_array[0].절연검사_HVPlus;
		_절연검사HVN.value = find_array[0].절연검사_HVMinus;
		_통신검사_DTC코드1.value = find_array[0].통신검사_DTC코드1;
		_통신검사_DTC코드2.value = find_array[0].통신검사_DTC코드2;
		_통신검사_DTC코드3.value = find_array[0].통신검사_DTC코드3;
		if(find_array[0].통신검사_DTC코드4 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드4.value = find_array[0].통신검사_DTC코드4;
		}
               
                if(find_array[0].통신검사_DTC코드5 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드5.value = find_array[0].통신검사_DTC코드5;
		}

                if(find_array[0].통신검사_DTC코드6 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드6.value = find_array[0].통신검사_DTC코드6;
		}

                if(find_array[0].통신검사_DTC코드7 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드7.value = find_array[0].통신검사_DTC코드7;
		}

                if(find_array[0].통신검사_DTC코드8 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드8.value = find_array[0].통신검사_DTC코드8;
		}

                if(find_array[0].통신검사_DTC코드9 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드9.value = find_array[0].통신검사_DTC코드9;
		}

                if(find_array[0].통신검사_DTC코드10 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드10.value = find_array[0].통신검사_DTC코드10;
		}

		_통신검사_팩전압.value = find_array[0].통신검사_팩전압;
		_통신검사_셀전압편차.value = find_array[0].통신검사_셀전압편차;
		_통신검사_릴레이구동.value = find_array[0].통신검사_릴레이구동;
		_고장현상코드.value = find_array[0].고장현상코드;
		_고장현상명.value = find_array[0].고장현상명;
		_문제Cell_No.value = find_array[0].문제Cell_No;
		_문제BMA_No.value = find_array[0].문제BMA_No;
		_문제BMA_cnt.value = find_array[0].문제BMA_cnt;
		_공정완료일.value = find_array[0].공정완료일;
		_요청사항.value = find_array[0].요청사항;
		_비고.value = find_array[0].비고;
		_센터진단내용.value = find_array[0].센터진단내용;
		_검사자.value = find_array[0].검사자;

		find(BSA재제조, _management_id.value);
		await delay();
		_재제조번호.value = find_array[0].재제조번호;
	} else {
		_재제조번호.value = '';
		_공정입고일.value = '0000-00-00T00:00';
		_육안검사_외부.value = '';
		_육안검사_외부_특이사항.value = '';
		_육안검사_내부.value = '';
		_육안검사_내부_특이사항.value = '';
		_기밀검사_냉각유로.value = '';
		_기밀검사_냉각유로_특이사항.value = '';
		_절연검사P.value = '';
		_절연검사N.value = '';
		_통신검사_DTC코드1.value = '';
		_통신검사_DTC코드2.value = '';
		_통신검사_DTC코드3.value = '';
		_통신검사_팩전압.value = '';
		_통신검사_셀전압편차.value = '';
		_통신검사_릴레이구동.value = '';
		_고장현상코드.value = '';
		_고장현상명.value = '';
		_문제Cell_No.value = '';
		_문제BMA_No.value = '';
		_문제BMA_cnt.value = '';
		_공정완료일.value = '0000-00-00T00:00';
		_요청사항.value = '';
		_비고.value = '';
		_센터진단내용.value = '';
		_검사자.value = worker;
	}
}

async function 기초검사_재제조번호_시작() {
	if(worker == '') return;
	while(_재제조번호 == undefined) {
		await sleep(DELAY);
	}

	if(_재제조번호.value.length == 0) return;
	console.log('load: ', _재제조번호.value);
	if(_재제조번호.value == '' | _재제조번호.value == 'none') return;

	count(BSA재제조, { 재제조번호 : _재제조번호.value.trim() });
	await delay();
	if(doc_count == 0) {
		return;
	}

	find_query(BSA재제조, { 재제조번호 : _재제조번호.value.trim() });
	await delay();

	count(기초검사, { 관리번호 : find_array[0].관리번호 });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count > 0) {
		find(기초검사, find_array[0].관리번호);
		await delay();
		
		_management_id.value = find_array[0].관리번호;
		_공정입고일.value = find_array[0].공정입고일;
		_육안검사_외부.value = find_array[0].육안검사_외부;
		_육안검사_외부_특이사항.value = find_array[0].육안검사_외부_특이사항;
		_육안검사_내부.value = find_array[0].육안검사_내부;
		_육안검사_내부_특이사항.value = find_array[0].육안검사_내부_특이사항;
		_기밀검사_냉각유로.value = find_array[0].기밀검사_냉각유로;
		_기밀검사_냉각유로_특이사항.value = find_array[0].기밀검사_냉각유로_특이사항;
		_절연검사P.value = find_array[0].절연검사_Plus;
		_절연검사N.value = find_array[0].절연검사_Minus;
		_절연검사HVP.value = find_array[0].절연검사_HVPlus;
		_절연검사HVN.value = find_array[0].절연검사_HVMinus;
		_통신검사_DTC코드1.value = find_array[0].통신검사_DTC코드1;
		_통신검사_DTC코드2.value = find_array[0].통신검사_DTC코드2;
		_통신검사_DTC코드3.value = find_array[0].통신검사_DTC코드3;
		if(find_array[0].통신검사_DTC코드4 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드4.value = find_array[0].통신검사_DTC코드4;
		}
               
                if(find_array[0].통신검사_DTC코드5 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드5.value = find_array[0].통신검사_DTC코드5;
		}

                if(find_array[0].통신검사_DTC코드6 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드6.value = find_array[0].통신검사_DTC코드6;
		}

                if(find_array[0].통신검사_DTC코드7 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드7.value = find_array[0].통신검사_DTC코드7;
		}

                if(find_array[0].통신검사_DTC코드8 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드8.value = find_array[0].통신검사_DTC코드8;
		}

                if(find_array[0].통신검사_DTC코드9 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드9.value = find_array[0].통신검사_DTC코드9;
		}

                if(find_array[0].통신검사_DTC코드10 != '') {
			_기초검사_add_DTC_Code();
			await sleep(10);
			_통신검사_DTC코드10.value = find_array[0].통신검사_DTC코드10;
		}

		_통신검사_팩전압.value = find_array[0].통신검사_팩전압;
		_통신검사_셀전압편차.value = find_array[0].통신검사_셀전압편차;
		_통신검사_릴레이구동.value = find_array[0].통신검사_릴레이구동;
		_고장현상코드.value = find_array[0].고장현상코드;
		_고장현상명.value = find_array[0].고장현상명;
		_문제Cell_No.value = find_array[0].문제Cell_No;
		_문제BMA_No.value = find_array[0].문제BMA_No;
		_문제BMA_cnt.value = find_array[0].문제BMA_cnt;
		_공정완료일.value = find_array[0].공정완료일;
		_요청사항.value = find_array[0].요청사항;
		_비고.value = find_array[0].비고;
		_센터진단내용.value = find_array[0].센터진단내용;
		_검사자.value = find_array[0].검사자;
	} else {
		_management_id.value = '';
		_공정입고일.value = '0000-00-00T00:00';
		_육안검사_외부.value = '';
		_육안검사_외부_특이사항.value = '';
		_육안검사_내부.value = '';
		_육안검사_내부_특이사항.value = '';
		_기밀검사_냉각유로.value = '';
		_기밀검사_냉각유로_특이사항.value = '';
		_절연검사P.value = '';
		_절연검사N.value = '';
		_통신검사_DTC코드1.value = '';
		_통신검사_DTC코드2.value = '';
		_통신검사_DTC코드3.value = '';
		_통신검사_팩전압.value = '';
		_통신검사_셀전압편차.value = '';
		_통신검사_릴레이구동.value = '';
		_고장현상코드.value = '';
		_고장현상명.value = '';
		_문제Cell_No.value = '';
		_문제BMA_No.value = '';
		_문제BMA_cnt.value = '';
		_공정완료일.value = '0000-00-00T00:00';
		_요청사항.value = '';
		_비고.value = '';
		_센터진단내용.value = '';
		_검사자.value = worker;
	}
}
function 기초검사_save() {
	기초검사_SAVE();

	이전페이지();
}

async function 기초검사_SAVE() {
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
	doc.기밀검사_냉각유로 = _기밀검사_냉각유로.value;
	doc.기밀검사_냉각유로_특이사항 = _기밀검사_냉각유로_특이사항.value;
	doc.절연검사_Plus = _절연검사P.value;
	doc.절연검사_Minus = _절연검사N.value;
	doc.절연검사_HVPlus = _절연검사HVP.value
	doc.절연검사_HVMinus = _절연검사HVN.value;
	doc.통신검사_DTC코드1 = _통신검사_DTC코드1.value;
	doc.통신검사_DTC코드2 = _통신검사_DTC코드2.value;
	doc.통신검사_DTC코드3 = _통신검사_DTC코드3.value;
	var oCurrentRow;
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 14;
	var code_no = rowIcnt - 16;
	console.log('save rowIcnt:', rowIcnt);
	console.log('save code_no:', code_no);

	if(code_no == 10) {
		doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
		doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
		doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
		doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
		doc.통신검사_DTC코드8 = _통신검사_DTC코드8.value;
		doc.통신검사_DTC코드9 = _통신검사_DTC코드9.value;
		doc.통신검사_DTC코드10 = _통신검사_DTC코드10.value;
	} else if(code_no == 9) {
		doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
		doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
		doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
		doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
		doc.통신검사_DTC코드8 = _통신검사_DTC코드8.value;
		doc.통신검사_DTC코드9 = _통신검사_DTC코드9.value;
		doc.통신검사_DTC코드10 = '';
	} else if(code_no == 8) {
		doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
		doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
		doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
		doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
		doc.통신검사_DTC코드8 = _통신검사_DTC코드8.value;
		doc.통신검사_DTC코드9 = '';
		doc.통신검사_DTC코드10 = '';
	} else if(code_no == 7) {
		doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
		doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
		doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
		doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
		doc.통신검사_DTC코드8 = '';;
		doc.통신검사_DTC코드9 = '';
		doc.통신검사_DTC코드10 = '';
	} else if(code_no == 6) {
		doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
		doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
		doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
		doc.통신검사_DTC코드7 = '';
		doc.통신검사_DTC코드8 = '';
		doc.통신검사_DTC코드9 = '';
		doc.통신검사_DTC코드10 = '';
	} else if(code_no == 5) {
		doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
		doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
		doc.통신검사_DTC코드6 = '';
		doc.통신검사_DTC코드7 = '';
		doc.통신검사_DTC코드8 = '';
		doc.통신검사_DTC코드9 = '';
		doc.통신검사_DTC코드10 = '';
	} else if(code_no == 4) {
		doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
		doc.통신검사_DTC코드5 = '';
		doc.통신검사_DTC코드6 = '';
		doc.통신검사_DTC코드7 = '';
		doc.통신검사_DTC코드8 = '';
		doc.통신검사_DTC코드9 = '';
		doc.통신검사_DTC코드10 = '';
	}

	doc.통신검사_팩전압 = _통신검사_팩전압.value;
	doc.통신검사_셀전압편차 = _통신검사_셀전압편차.value;
	doc.통신검사_릴레이구동 = _통신검사_릴레이구동.value;
	doc.고장현상코드 = _고장현상코드.value;
	doc.고장현상명 = _고장현상명.value;
	doc.문제Cell_No = _문제Cell_No.value;
	doc.문제BMA_No = _문제BMA_No.value;
	doc.문제BMA_cnt = _문제BMA_cnt.value; 
	doc.공정완료일 = _공정완료일.value;
	doc.요청사항 = _요청사항.value;
	doc.비고 = _비고.value;
	doc.센터진단내용 = _센터진단내용.value;
	doc.검사자 = _검사자.value;
	
	update(기초검사, doc);
	await delay();
	
	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}
}

function _육안검사외부_콤보박스(e) {

	const value = e.value;

  	document.getElementById('_육안검사_외부').value = value;
}

function _육안검사내부_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_육안검사_내부').value = value;
}

function _기밀검사_냉각유로_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_기밀검사_냉각유로').value = value;
}

function _통신검사_릴레이구동_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_통신검사_릴레이구동').value = value;
}

function _기초검사_add_DTC_Code() {
	var oCurrentRow;
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 14;
	var code_no = rowIcnt - 15;
	console.log('row count:', rowIcnt);
	console.log('code No:', code_no);
	if(rowIcnt > 25) return false;
	if(code_no > 10) return false;

	oCurrentRow = tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_통신검사_DTC코드\"" + code_no + "><b>통신검사 DTC코드 " + code_no + "</b></label></td><td><input type=\"text\" id=\"_통신검사_DTC코드" + code_no + "\" size=\"40\" required></td><td><button onClick=\"_기초검사_delete_row(" + rowIcnt + ");\">삭제</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
}

function _기초검사_delete_row(index) {
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 15;

	console.log('index:', index, 'rowIcnt:', rowIcnt);
	if(index == rowIcnt) tb.deleteRow(index);
}

async function 기초검사_카메라시작() {
	기초검사_SAVE();

	기초검사_사진촬영(_management_id.value);
}
