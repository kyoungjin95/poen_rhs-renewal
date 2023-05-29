async function EOL_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		//await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	count(EOL, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(EOL, _management_id.value);
		await delay();
		
        	_공정입고일.value = find_array[0].공정입고일; 
        	_UPR_C조립.value = find_array[0].UPR_C조립; 
        	_기밀검사_케이스.value = find_array[0].기밀검사_케이스;
        	_기밀검사_케이스_특이사항.value = find_array[0].기밀검사_케이스_특이사항;
        	_기밀검사_냉각유로.value = find_array[0].기밀검사_냉각유로;
        	_기밀검사_냉각유로_특이사항.value = find_array[0].기밀검사_냉각유로_특이사항;
        	_절연검사P.value = find_array[0].절연검사_Plus;
        	_절연검사M.value = find_array[0].절연검사_Minus;
        	_통신검사_DTC코드1.value = find_array[0].통신검사_DTC코드1;
        	_통신검사_DTC코드2.value = find_array[0].통신검사_DTC코드2;
        	_통신검사_DTC코드3.value = find_array[0].통신검사_DTC코드3;
		if(find_array[0].통신검사_DTC코드4 != '') {
			_EOL_add_DTC_Code();
			//await sleep(10);
			_통신검사_DTC코드4.value = find_array[0].통신검사_DTC코드4;
		}

                if(find_array[0].통신검사_DTC코드5 != '') {
			_EOL_add_DTC_Code();
			//await sleep(10);
			_통신검사_DTC코드5.value = find_array[0].통신검사_DTC코드5;
		}

                if(find_array[0].통신검사_DTC코드6 != '') {
			_EOL_add_DTC_Code();
			//await sleep(10);
			_통신검사_DTC코드6.value = find_array[0].통신검사_DTC코드6;
		}

                if(find_array[0].통신검사_DTC코드7 != '') {
			_EOL_add_DTC_Code();
			//await sleep(10);
			_통신검사_DTC코드7.value = find_array[0].통신검사_DTC코드7;
		}

                if(find_array[0].통신검사_DTC코드8 != '') {
			_EOL_add_DTC_Code();
			//await sleep(10);
			_통신검사_DTC코드8.value = find_array[0].통신검사_DTC코드8;
		}

                if(find_array[0].통신검사_DTC코드9 != '') {
			_EOL_add_DTC_Code();
			//await sleep(10);
			_통신검사_DTC코드9.value = find_array[0].통신검사_DTC코드9;
		}

                if(find_array[0].통신검사_DTC코드10 != '') {
			_EOL_add_DTC_Code();
			//await sleep(10);
			_통신검사_DTC코드10.value = find_array[0].통신검사_DTC코드10;
		}

		_통신검사_팩전압.value = find_array[0].통신검사_팩전압;
        	_통신검사_셀전압편차.value = find_array[0].통신검사_셀전압편차;
        	_통신검사_릴레이구동.value = find_array[0].통신검사_릴레이구동;
        	_공정완료일.value = find_array[0].공정완료일;
        	_비고.value = find_array[0].비고;
        	_QR.value = find_array[0].QR;
        	_검사자.value = find_array[0].검사자;
	} else {
		_공정입고일.value = '';
		_UPR_C조립.value = '';
		_기밀검사_케이스.value = '';
		_기밀검사_케이스_특이사항.value = '';
		_기밀검사_냉각유로.value = '';
		_기밀검사_냉각유로_특이사항.value = '';
		_절연검사P.value = '';
		_절연검사M.value = '';
		_통신검사_DTC코드1.value = '';
		_통신검사_DTC코드2.value = '';
		_통신검사_DTC코드3.value = '';
		_통신검사_팩전압.value = '';
		_통신검사_셀전압편차.value = ''; 
		_통신검사_릴레이구동.value = ''; 
		_공정완료일.value = '';
		_비고.value = '';
		_QR.value = '';
		_검사자.value = worker;
	}
}

async function EOL_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = EOL_doc;
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	doc.UPR_C조립 = _UPR_C조립.value;
	doc.기밀검사_케이스 = _기밀검사_케이스.value;
	doc.기밀검사_케이스_특이사항 = _기밀검사_케이스_특이사항.value;
	doc.기밀검사_냉각유로 = _기밀검사_냉각유로.value;
	doc.기밀검사_냉각유로_특이사항 = _기밀검사_냉각유로_특이사항.value;
	doc.절연검사_Plus = _절연검사P.value;
	doc.절연검사_Minus = _절연검사M.value;
	doc.통신검사_DTC코드1 =  _통신검사_DTC코드1.value;
	doc.통신검사_DTC코드2 =  _통신검사_DTC코드2.value;
	doc.통신검사_DTC코드3 =  _통신검사_DTC코드3.value;
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 8;
	var code_no = rowIcnt - 9;
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
	doc.통신검사_셀전압편차 = _통신검사_셀전압편차.value
	doc.통신검사_릴레이구동 = _통신검사_릴레이구동.value;
	doc.공정완료일 = _공정완료일.value;
	doc.비고 = _비고.value;
	doc.QR = _QR.value;
	doc.검사자 = _검사자.value;

	console.log(doc);

	update(EOL, doc);
	//await sleep(DELAY);
	
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

function _기밀검사_케이스_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_기밀검사_케이스').value = value;
}

function _기밀검사_냉각유로_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_기밀검사_냉각유로').value = value;
}

function _통신검사_릴레이구동_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_통신검사_릴레이구동').value = value;
}

function _EOL_add_DTC_Code() {
	var oCurrentRow;
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 8;
	var code_no = rowIcnt - 8;
	console.log('rosw count:', rowIcnt);
	if(rowIcnt > 18) return false;
	oCurrentRow = tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_통신검사_DTC코드\"" + code_no + "><b>통신검사 DTC코드 " + code_no + "</b></label></td><td><input type=\"text\" id=\"_통신검사_DTC코드" + code_no + "\" size=\"40\" required></td><td><button onClick=\"_eol_delete_row(" + rowIcnt + ");\">삭제</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
} 

function _eol_delete_row(index) {
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 9;

	if(index == rowIcnt) tb.deleteRow(index);
}

