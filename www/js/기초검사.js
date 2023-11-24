var 기초검사_DTC_count = 0;

async function 기초검사_시작(is재제조 = false) {
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	
	기초검사_list();

	flag_기초검사 = false;
	console.log('DTC count:', 기초검사_DTC_count);

	_기초검사_delete_all();
	기초검사_DTC_count = 0;

	//if(_management_id.value == '조회 버튼을 누르세요') _management_id.value =  관리번호;

	if(is재제조 == false) {
		if(_management_id.value.length == 0) return;
		console.log('load: ', _management_id.value);
		if(_management_id.value == '' | _management_id.value == 'none') return;
	} else {
		if(_재제조번호.value.length == 0) return;
	}
	
	
	if(is재제조 == false) {
		find(BSA재제조, _management_id.value);
		await delay();
		if(BSA재제조_v != null) {
			if(BSA재제조_v.재제조번호 != undefined) {
				_재제조번호.value = BSA재제조_v.재제조번호;
			}
		} else {
			_재제조번호.value = '';
		}
	} else {
		findOne_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value});
		await delay();
		if(BSA재제조_cnt != null) {
			_management_id.value = BSA재제조_v.관리번호;
		} else {
			_management_id.value = '찾지 못하였습니다';
			_구분.value = '';
			_차종.value = '';
			_품번.value = '';
		}
	}

	if(_management_id.value == '' | _management_id.value == 'none') return

	find(입고, _management_id.value);
	await delay();

	if(입고_v != null) {
		_구분.value = 입고_v.구분;
		_차종.value = 입고_v.차종;
		_품번.value = 입고_v.품번;
	} else {
		_구분.value = '';
		_차종.value = '';
		_품번.value = '';
	}

	find(기초검사, _management_id.value);
	await delay();
	if(기초검사_v != null) {
		_공정입고일.value = 기초검사_v.공정입고일;
		_RO_no.value = 기초검사_v.RO_no;
		_VIN.value = 기초검사_v.VIN;
		_QRCode.value = 기초검사_v.QRcode;
		_주행거리.value = 기초검사_v.주행거리;
		_차량번호.value = 기초검사_v.차량번호;
		_육안검사_외부.value = 기초검사_v.육안검사_외부;
		_육안검사_외부_특이사항.value = 기초검사_v.육안검사_외부_특이사항;
		_육안검사_내부.value = 기초검사_v.육안검사_내부;
		_육안검사_내부_특이사항.value = 기초검사_v.육안검사_내부_특이사항;
		_기밀검사_냉각유로.value = 기초검사_v.기밀검사_냉각유로;
		_기밀검사_냉각유로_특이사항.value = 기초검사_v.기밀검사_냉각유로_특이사항;
		_절연검사P.value = 기초검사_v.절연검사_Plus;
		_절연검사N.value = 기초검사_v.절연검사_Minus;
		_통신검사_DTC코드1.value = 기초검사_v.통신검사_DTC코드1;
		_통신검사_DTC코드2.value = 기초검사_v.통신검사_DTC코드2;
		_통신검사_DTC코드3.value = 기초검사_v.통신검사_DTC코드3;
		if(기초검사_v.통신검사_DTC코드4 != '') {
			_기초검사_add_DTC_Code();
			await sleep(1);
			_통신검사_DTC코드4.value = 기초검사_v.통신검사_DTC코드4;
		}
               
    if(기초검사_v.통신검사_DTC코드5 != '') {
			_기초검사_add_DTC_Code();
			await sleep(1);
			_통신검사_DTC코드5.value = 기초검사_v.통신검사_DTC코드5;
		}

    if(기초검사_v.통신검사_DTC코드6 != '') {
			_기초검사_add_DTC_Code();
			await sleep(1);
			_통신검사_DTC코드6.value = 기초검사_v.통신검사_DTC코드6;
		}

    if(기초검사_v.통신검사_DTC코드7 != '') {
			_기초검사_add_DTC_Code();
			await sleep(1);
			_통신검사_DTC코드7.value = 기초검사_v.통신검사_DTC코드7;
		}

    if(기초검사_v.통신검사_DTC코드8 != '') {
			_기초검사_add_DTC_Code();
			await sleep(1);
			_통신검사_DTC코드8.value = 기초검사_v.통신검사_DTC코드8;
		}

     if(기초검사_v.통신검사_DTC코드9 != '') {
			_기초검사_add_DTC_Code();
			await sleep(1);
			_통신검사_DTC코드9.value = 기초검사_v.통신검사_DTC코드9;
		}

    if(기초검사_v.통신검사_DTC코드10 != '') {
			_기초검사_add_DTC_Code();
			await sleep(1);
			_통신검사_DTC코드10.value = 기초검사_v.통신검사_DTC코드10;
		}

		_통신검사_팩전압.value = 기초검사_v.통신검사_팩전압;
		_통신검사_셀전압편차.value = 기초검사_v.통신검사_셀전압편차;
		_통신검사_릴레이구동.value = 기초검사_v.통신검사_릴레이구동;
		_BSA생산일자.value = 기초검사_v.BSA생산일자;
		_BMA_ROM_ID.value = 기초검사_v.BMA_ROM_ID;
		_고장현상코드.value = 기초검사_v.고장현상코드;
		_고장현상명.value = 기초검사_v.고장현상명;
		_문제Cell_No.value = 기초검사_v.문제Cell_No;
		_문제BMA_No.value = 기초검사_v.문제BMA_No;
		_문제BMA_cnt.value = 기초검사_v.문제BMA_cnt;
		_공정완료일.value = 기초검사_v.공정완료일;
		_요청사항.value = 기초검사_v.요청사항;
		_비고.value = 기초검사_v.비고;
		_센터진단내용.value = 기초검사_v.센터진단내용;
		_검사자.value = 기초검사_v.검사자;
	} else {
		_공정입고일.value = '0000-00-00T00:00';
		_RO_no.value = '';
		_VIN.value = '';
		_QRCode.value = '';
		_주행거리.value = '';
		_차량번호.value = '';
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
		_BSA생산일자.value = '';
		_BMA_ROM_ID.value = '';
		_고장현상코드.value = '';
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
	기초검사_시작(true);
}

function 기초검사_save() {
	기초검사_SAVE();

	//이전페이지();
}

async function 기초검사_SAVE() {
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	if(_RO_no.value.length != 17 && _RO_no.value.length != 0) {
		var cnt = (_RO_no.value.match(/-/g) || []).length;
		if((_RO_no.value.length - cnt) != 17) {
			alert('Ro 번호 자릴수가 다릅니다.(17)');
			return;
		}
	}

	if(_RO_no.value.length == 0) {
		alert('RO 번호가 입력되지 않았습니다.');
	}

	if(_VIN.value.length != 17 && _VIN.value.length != 0) {
		var cnt = (_VIN.value.match(/-/g) || []).length;
		if((_VIN.value.length - cnt) != 17) {
			alert('VIN이 자릿수가 다릅니다.(17)');
			return;
		}
	}

	if(_VIN.value.length == 0) {
		alert('VIN 번호가 입력되지 않았습니다.');
	}

	var doc = JSON.parse(JSON.stringify(기초검사_doc));
        doc.관리번호 = _management_id.value.trim();
	doc.공정입고일 = _공정입고일.value;
	doc.RO_no = _RO_no.value;
	doc.VIN = _VIN.value;
	doc.QRcode = _QRCode.value;
	doc.주행거리 = _주행거리.value;
	doc.차량번호 = _차량번호.value; 
	doc.육안검사_외부 = _육안검사_외부.value;
	doc.육안검사_외부_특이사항 = _육안검사_외부_특이사항.value;
	doc.육안검사_내부 = _육안검사_내부.value;
	doc.육안검사_내부_특이사항 = _육안검사_내부_특이사항.value;
	doc.기밀검사_냉각유로 = _기밀검사_냉각유로.value;
	doc.기밀검사_냉각유로_특이사항 = _기밀검사_냉각유로_특이사항.value;
	doc.절연검사_Plus = _절연검사P.value;
	doc.절연검사_Minus = _절연검사N.value;
	doc.통신검사_DTC코드1 = _통신검사_DTC코드1.value;
	doc.통신검사_DTC코드2 = _통신검사_DTC코드2.value;
	doc.통신검사_DTC코드3 = _통신검사_DTC코드3.value;
	var oCurrentRow;
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 14;
	var code_no = rowIcnt - 21;
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
	doc.BSA생산일자 = _BSA생산일자.value;
	doc.BMA_ROM_ID = _BMA_ROM_ID.value;
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
	
	console.log('save data:', doc);
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

	find(BSA재제조, _management_id.value);
	await delay();

	if(BSA재제조_v == null) {
		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호 = _management_id.value.trim();
		_doc.기초검사투입일 = _공정입고일.value;
		_doc.기초검사 = _공정완료일.value;
		_doc.RO_no = _RO_no.value;

		update(BSA재제조, _doc);
		await delay();
	} else {
		var _doc = {
			관리번호 : _management_id.value,
			기초검사투입일 : _공정입고일.value,
			기초검사 : _공정완료일.value,
			RO_no : _RO_no.value
		}

		update(BSA재제조, _doc);
		await delay();
	}

	await 공정단계자동입력(_management_id.value);
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
	var rowIcnt = tb.rows.length - 16;
	var code_no = rowIcnt - 18;
	console.log('row count:', rowIcnt);
	console.log('code No:', code_no);
	if(rowIcnt > 31) return false;
	if(code_no > 10) return false;

	oCurrentRow = tb.insertRow(rowIcnt);
	var insert_string = "<td><label for=\"_통신검사_DTC코드\"" + code_no + "><b>통신검사 DTC코드 " + code_no + "</b></label></td><td><input type=\"text\" id=\"_통신검사_DTC코드" + code_no + "\" size=\"40\" required></td><td><button onClick=\"_기초검사_delete_row(" + rowIcnt + ");\">삭제</button></td>";
	console.log(insert_string);
	oCurrentRow.innerHTML = insert_string;
	기초검사_DTC_count++;
}

function _기초검사_delete_row(index) {
	var tb = document.getElementById('tb');
	var rowIcnt = tb.rows.length - 17;

	console.log('index:', index, 'rowIcnt:', rowIcnt);
	if(index == rowIcnt) tb.deleteRow(index);
}

function _기초검사_delete_all() {
	while(기초검사_DTC_count > 0) {
		var tb = document.getElementById('tb');
		var rowIcnt = tb.rows.length - 15;

		tb.deleteRow(rowIcnt);
		기초검사_DTC_count--;
	}
}

async function 기초검사_카메라시작() {
	기초검사_SAVE();

	기초검사_사진촬영(_management_id.value);
}

async function 기초검사_list() {
	 findOne_BSA재제조(BSA재제조, { 공정단계 : { $ne : '출하' }, 세척 : { $ne : '' }, 기초검사 : { $eq : '' }, 분해조립 : { $eq : '' }, 성능검사 : { $eq : '' }, EOL : { $eq : '' } ,  소재지 : { $nin : ['공정대기', '품질대기'] }, 완전분해 : { $eq : ''}, 폐기 : { $eq : '' }, 출하 : { $eq : '' }, 구분 : { $nin: ['일반기타', '보증기타']} });
	await delay();

	if(BSA재제조_v != null) {
		find_BSA재제조(BSA재제조, { 공정단계 : { $ne : '출하' }, 세척 : { $ne : '' }, 기초검사 : { $eq : '' }, 분해조립 : { $eq : '' }, 성능검사 : { $eq : '' }, EOL : { $eq : '' } ,  소재지 : { $nin : ['공정대기', '품질대기'] }, 완전분해 : { $eq : ''}, 폐기 : { $eq : '' }, 출하 : { $eq : '' }, 구분 : { $nin: ['일반기타', '보증기타']} });
		await delay();
	}

	var table = new Tabulator("#grid_list", {
		layout: "resizableColumnFit",
		data: BSA재제조_v,
		height: "700px",

		columns: [
			{ title: "ID", field: "_id", sorter: "string", width: "180" },
			{ title: "관리번호", field: "관리번호", sorter: "string", width: "180" },
			{
				title: "재제조번호",
				field: "재제조번호",
				sorter: "string",
				width: "180",
			},
			{ title: "구분", field: "구분", sorter: "string", width: "180" },
			{ title: "차종", field: "차종", sorter: "string", width: "180" },
			{ title: "품번", field: "품번", sorter: "string", width: "180" },
			{ title: "RO_no", field: "RO_no", sorter: "string", width: "180" },
			{ title: "공정단계", field: "공정단계", sorter: "string", width: "180" },
			{ title: "소재지", field: "소재지", sorter: "string", width: "180" },
			{
				title: "적재No",
				field: "적재No",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "입고",
				field: "입고",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "제조투입",
				field: "제조투입",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "세척투입일",
				field: "세척투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "세척",
				field: "세척",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "기초검사투입일",
				field: "기초검사투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "기초검사",
				field: "기초검사",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "분해조립투입일",
				field: "분해조립투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "분해조립",
				field: "분해조립",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "성능검사투입일",
				field: "성능검사투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "성능검사",
				field: "성능검사",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "EOL투입일",
				field: "EOL투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "EOL",
				field: "EOL",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{ title: "출하검사", field: "출하검사", sorter: "string", width: "180" },
			{ title: "납품처", field: "납품처", sorter: "string", width: "180" },
			{ title: "출하", field: "출하", sorter: "string", width: "180" },
			{ title: "반품입고", field: "반품입고", sorter: "string", width: "180" },
			{ title: "재출하", field: "재출하", sorter: "string", width: "180" },
			{ title: "완전분해", field: "완전분해", sorter: "string", width: "180" },
			{
				title: "완전분해사유",
				field: "완전분해사유",
				sorter: "string",
				width: "180",
			},
			{ title: "폐기", field: "폐기", sorter: "string", width: "180" },
			{ title: "폐기사유", field: "폐기사유", sorter: "string", width: "180" },
			{
				title: "마지막충전일",
				field: "마지막충전일",
				sorter: "string",
				width: "180",
			},
			{ title: "출하예약", field: "출하예약", sorter: "string", width: "180" },
			{ title: "렉번호", field: "렉번호", sorter: "string", width: "180" },
		],
	});
	
	table.on("rowClick", async function (e, row) {
		console.log("selected 관리번호: ", row.getData().관리번호);

		_management_id.value = row.getData().관리번호;
	});
}
