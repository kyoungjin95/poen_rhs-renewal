function EOL_재제조번호_시작() {
	EOL_시작(true);
}

var EOL_DTC_count = 0;

async function EOL_시작(EOL_is재제조번호 = false) {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	flag_EOL = false;

	_eol_delete_all();
	EOL_DTC_count = 0;

	if(_management_id.value == '조회 버튼을 누르세요') _management_id.value =  관리번호;

	if(EOL_is재제조번호 == false) {
		if(_management_id.value.length == 0) return;
		console.log('load: ', _management_id.value);

		count(BSA재제조, { 관리번호 : _management_id.value });
		await delay();

		if(doc_count >= 1) {
			find(BSA재제조, _management_id.value);
			await delay();
			
			if(find_array[0].재제조번호 != undefined) _재제조번호.value = find_array[0].재제조번호;
		}
	} else {
		if(_재제조번호.value.length == 0) return;
		console.log('load: ', _재제조번호.value);
		
		count(BSA재제조, { 재제조번호 : _재제조번호.value });
		await delay();

		if(doc_count >= 1) {
			find_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value });
			await delay();
			
			_management_id.value = find_array[0].관리번호;
			count(EOL, { 관리번호 : find_array[0].관리번호 });
			await delay();
		} else {
			_management_id.value = '찾지 못하였습니다';;
			count(EOL, { 관리번호 : _management_id.value });
			await delay();
		}
	}
	console.log('doc_count: ', doc_count);
	if(doc_count > 0) {
		count(EOL, { 관리번호 : _management_id.value });
		await delay();

		if(doc_count > 0) {
			find(EOL, _management_id.value);
			await delay();

			console.log('EOL load data:', find_array);
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
				await sleep(10);
				_통신검사_DTC코드4.value = find_array[0].통신검사_DTC코드4;
			}

			if(find_array[0].통신검사_DTC코드5 != '') {
				_EOL_add_DTC_Code();
				await sleep(10);
				_통신검사_DTC코드5.value = find_array[0].통신검사_DTC코드5;
			}

			if(find_array[0].통신검사_DTC코드6 != '') {
				_EOL_add_DTC_Code();
				await sleep(10);
				_통신검사_DTC코드6.value = find_array[0].통신검사_DTC코드6;
			}

			if(find_array[0].통신검사_DTC코드7 != '') {
				_EOL_add_DTC_Code();
				await sleep(10);
				_통신검사_DTC코드7.value = find_array[0].통신검사_DTC코드7;
			}

			if(find_array[0].통신검사_DTC코드8 != '') {
				_EOL_add_DTC_Code();
				await sleep(10);
				_통신검사_DTC코드8.value = find_array[0].통신검사_DTC코드8;
			}

			if(find_array[0].통신검사_DTC코드9 != '') {
				_EOL_add_DTC_Code();
				await sleep(10);
				_통신검사_DTC코드9.value = find_array[0].통신검사_DTC코드9;
			}

			if(find_array[0].통신검사_DTC코드10 != '') {
				_EOL_add_DTC_Code();
				await sleep(10);
				_통신검사_DTC코드10.value = find_array[0].통신검사_DTC코드10;
			}

			_통신검사_팩전압.value = find_array[0].통신검사_팩전압;
			_통신검사_셀전압편차.value = find_array[0].통신검사_셀전압편차;
			_통신검사_릴레이구동.value = find_array[0].통신검사_릴레이구동;
			_공정완료일.value = find_array[0].공정완료일;
			_비고.value = find_array[0].비고;
			_QR.value = find_array[0].QR;
			_검사자.value = find_array[0].검사자;

			count(입고, { 관리번호 : _management_id.value });
			await delay();
			console.log('::doc_count: ', doc_count);
			if(doc_count >= 1) {
				find(입고, _management_id.value);
				await delay();
				console.log('입고 data:', find_array);

				_구분.value = find_array[0].구분;
				_차종.value = find_array[0].차종;
				_품번.value = find_array[0].품번;
			}
		}
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

async function EOL_SAVE() {
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
	var rowIcnt = tb.rows.length - 9;
	var code_no = rowIcnt - 14;
	console.log('rowIcnt:', rowIcnt, 'code_no:', code_no);

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
	await delay();

	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	var doc_ = {
		관리번호 : doc.관리번호,
		마지막충전일 : doc.공정완료일
	}

	console.log(doc_);
	update(BSA재제조, doc_);
}

function EOL_save() {
	EOL_SAVE();

	//이전페이지();
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
	var rowIcnt = tb.rows.length - 10;
	var code_no = rowIcnt - 12;
	console.log('rosw count:', rowIcnt);
	if(rowIcnt > 22) return false;
	oCurrentRow = tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_통신검사_DTC코드\"" + code_no + "><b>통신검사 DTC코드 " + code_no + "</b></label></td><td><input type=\"text\" id=\"_통신검사_DTC코드" + code_no + "\" size=\"40\" required></td><td><button onClick=\"_eol_delete_row(" + rowIcnt + ");\">삭제</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
	EOL_DTC_count++;
} 

function _eol_delete_row(index) {
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 11;
	console.log('index:', index, 'rowIcnt:', rowIcnt);
	if(index == rowIcnt) tb.deleteRow(index);
	EOL_DTC_count--;
}

function _eol_delete_all() {
	var tb = document.getElementById('tb');

	while(EOL_DTC_count > 0) {
		var rowIcnt = tb.rows.length - 11;
		tb.deleteRow(rowIcnt);
		EOL_DTC_count--;
	}
}

async function EOL_QR_Label() {
	let hyundai_logo;
	convertImageToBase64('base/img/hyundai.jpg', async function(logo) {
		hyundai_logo = logo;
	});

	let qrcode;
	let pumbeon1 = '';
	let pumbeon2 = ''; 
	let sn = '';
	let html_string = '';

	let QR1 = document.getElementById('QR1');
	let QR2 = document.getElementById('QR2');

	QR1.style.display = 'block'
	QR2.style.display = 'block'

	find(BSA재제조, 관리번호);
	await delay();

	sn = find_array[0].재제조번호;

	qrcode = new QRCode(document.getElementById('_QR_Code'), {
		width: 100,
		height: 100,
	});

	var 배터리팩_제조번호 = prompt('배터리팩 제조번호를 입력하세요');
	console.log(배터리팩_제조번호 + ' '+ find_array[0].재제조번호);
	qrcode.makeCode(배터리팩_제조번호 + ' '+ find_array[0].재제조번호);
	let qrcode_base64 = qrcode._oDrawing._elCanvas.toDataURL("image/png");
	console.log(qrcode_base64);

	document.getElementById('_QR_Label').innerHTML = '<html><head></head><body style="color:black"><div class=\'HHB\' align=\'left\' width=\'264\'><h5>배터리 시스템 어셈블리</h5></div><div class=\'HHB\'><h6>(Battery System Assembly)</h6></div><div><br/></div><div class=\'HHB\' align=\'left\'><h5>R' + find_array[0].품번 + '</h5></div><div align=\'center\' width=\'264\'><img src=\'' + qrcode_base64 + '\'></center></div><div><br/></div><div class=\'HHM\' align=\'center\'><h5>' + find_array[0].재제조번호  + '</h5></div><div align=\'right\'><img src=\'' + hyundai_logo  + '\'></div></body></html>';

	html2canvas(document.getElementById('_QR_Label'), { width : 264, height : 302 }).then(canvas => {
		html_string = '<html><head></head><body><img src=' + canvas.toDataURL('image/png') + '\'></body></html>';

		make_qr_label(html_string);
	});	
}

function saveAs(uri, filename) { 
	var link = document.createElement('a'); 
	if (typeof link.download === 'string') { 
		link.href = uri; 
		link.download = filename; 
		document.body.appendChild(link); 
		link.click(); 
		document.body.removeChild(link); 
	} else { 
		window.open(uri); 
	} 
};

function convertImageToBase64(imgUrl, callback) {
	const image = new Image();
	image.crossOrigin='anonymous';
	image.onload = () => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		canvas.height = image.naturalHeight;
		canvas.width = image.naturalWidth;
		ctx.drawImage(image, 0, 0);
		const dataUrl = canvas.toDataURL();
		callback && callback(dataUrl)
	}
	image.src = imgUrl;
}

function EOL_카메라시작() {
	EOL_SAVE();

	EOL_사진촬영(_management_id.value);
}
