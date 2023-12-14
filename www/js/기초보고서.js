async function 기초보고서_시작() {
	loadPage("base/기초보고서.html");
	await sleep(1);

	if (level == '작업자' || level == '' || level == '관리자' || level == '부품관리자') _교체부품.style.display = 'block';
	else _교체부품.style.display = 'none';

	_management_id.value = 관리번호;

	count(기초보고서, { level: '작업자' });
	await delay();

	if (기초보고서_cnt > 0) {
		find_기초보고서(기초보고서, { level: '작업자' });
		await delay();

		if (기초보고서_v.기초보고서 == true) {
			_기초보고서.style.display = 'block';
			_cb기초보고서.checked = true;
		} else if (level != '작업자' && level != '') {
			_기초보고서.style.display = 'none';
		} else {
			_cb기초보고서.checked = false;
		}

		if (기초보고서_v.육안검사외부 == true) {
			_육안검사외부1.style.display = 'block';
			_cb육안검사외부.checked = true;
		} else if (level != '작업자' && level != '') {
			_육안검사외부1.style.display = 'none';
		} else {
			_cb육안검사외부.checked = false;
		}

		if (기초보고서_v.육안검사외부상세 == true) {
			_육안검사외부2.style.display = 'block';
			_cb육안검사외부상세.checked = true;
		} else if (level != '작업자' && level != '') {
			_육안검사외부2.style.display = 'none';
		} else {
			_cb육안검사외부상세.checked = false;
		}

		if (기초보고서_v.육안검사내부 == true) {
			_육안검사내부1.style.display = 'block';
			_cb육안검사내부.checked = true;
		} else if (level != '작업자' && level != '') {
			_육안검사내부1.style.display = 'none';
		} else {
			_cb육안검사내부.checked = false;
		}

		if (기초보고서_v.육안검사내부상세 == true) {
			_육안검사내부2.style.display = 'block';
			_cb육안검사내부상세.checked = true;
		} else if (level != '작업자' && level != '') {
			_육안검사내부2.style.display = 'none';
		} else {
			_cb육안검사내부상세.checked = false;
		}

		if (기초보고서_v.기밀검사 == true) {
			_기밀검사.style.display = 'block';
			_cb기밀검사.checked = true;
		} else if (level != '작업자' && level != '') {
			_기밀검사.style.display = 'none';
		} else {
			_cb기밀검사.checked = false;
		}
	}

	await 기초보고서_조회();
}

async function 기초보고서_apply() {
	_셀제조사사유.innerHTML = document.getElementById("_셀제조사사유_input").value;
	_생산일.innerHTML = document.getElementById("_생산일_input").value;
	_판매일.innerHTML = document.getElementById("_판매일_input").value;
	_수리일.innerHTML = document.getElementById("_수리일_input").value;
	_관리번호.innerHTML = _management_id.value.trim().toUpperCase();
	_필드현상.innerHTML = document.getElementById("_필드현상_input").value;
	_센터조치.innerHTML = document.getElementById("_센터조치_input").value;
	_결과.innerHTML = document.getElementById("_결과_input").value;
}

async function 기초보고서_조회(is재제조번호 = false) {
	if (is재제조번호 == true) {
		count(BSA재제조, { 재제조번호: _재제조번호.value });
		await delay();

		if (BSA재제조_cnt > 0) {
			find_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
			await delay();

			_management_id.value = BSA재제조_v.관리번호;
		}
	}

	count(입고, { 관리번호: _management_id.value });
	await delay();

	if (입고_cnt > 0) {
		_입고정보.innerHTML = "OK";
		find(입고, _management_id.value);
		await delay();

		_차종.innerHTML = 입고_v.차종;

		switch (입고_v.차종) {
			case "CS_EV":
				showTable("_CS_EV");
				break;

			case "CV_EV":
				showTable("_CV_EV");
				break;

			case "DE_EV":
				showTable("_DE_EV");
				break;

			case "HR_EV":
				showTable("_HR_EV");
				break;

			case "LK_EV":
				showTable("_LK_EV");
				break;

			case "LM_EV":
				showTable("_LM_EV");
				break;

			case "NE_EV":
				showTable("_NE_EV");
				break;

			case "OS_EV":
			case "SK3_EV":
				showTable("_OS_SK3_EV");
				break;

			case "PU_EV":
				showTable("_PU_EV");
				break;

			default:
				showTable("_CS_EV");
				alert("차종을 확인해 주세요");
		}

		function showTable(tableId) {
			// 모든 테이블을 숨김
			const tables = document.querySelectorAll(".tableAll");
			for (let i = 0; i < tables.length; i++) {
				tables[i].style.display = "none";
			}
			// 선택된 테이블만 표시
			document.getElementById(tableId).style.display = "table";
		}

		_입고일.innerHTML = 입고_v.입고일;
	} else {
		_입고정보.innerHTML = "NG";
		_입고일.innerHTML = "";
	}

	count(기초검사, { 관리번호: _management_id.value });
	await delay();

	if (기초검사_cnt > 0) {
		find(기초검사, _management_id.value);
		await delay();

		var _VIN = document.getElementById("_VINNo");
		_VIN.innerHTML = 기초검사_v.VIN == undefined ? "" : 기초검사_v.VIN;
		var _RO = document.getElementById("_RONo");
		_RO.innerHTML = 기초검사_v.RO_no == undefined ? "" : 기초검사_v.RO_no;
		_주행거리.innerHTML = 기초검사_v.주행거리 == undefined ? "" : 기초검사_v.주행거리;
		_차량번호.innerHTML = 기초검사_v.차량번호 == undefined ? "" : 기초검사_v.차량번호;

		_관리번호.value = _management_id.value.trim().toUpperCase();

		_작성자.innerHTML = worker;

		_외부점검.innerHTML =
			기초검사_v.육안검사_외부 == undefined
				? ""
				: 기초검사_v.육안검사_외부;

		_외부점검사유.innerHTML =
			기초검사_v.육안검사_외부_특이사항 == undefined
				? ""
				: 기초검사_v.육안검사_외부_특이사항;

		_내부점검.innerHTML =
			기초검사_v.육안검사_내부 == undefined
				? ""
				: 기초검사_v.육안검사_내부;

		_내부점검사유.innerHTML =
			기초검사_v.육안검사_내부_특이사항 == undefined
				? ""
				: 기초검사_v.육안검사_내부_특이사항;

		_PRA_P값.innerHTML =
			기초검사_v.절연검사_Plus == undefined
				? ""
				: 기초검사_v.절연검사_Plus;

		_PRA_N값.innerHTML =
			기초검사_v.절연검사_Minus == undefined
				? ""
				: 기초검사_v.절연검사_Minus;

		_HV커넥터_P값.innerHTML =
			기초검사_v.절연검사_Plus == undefined
				? ""
				: 기초검사_v.절연검사_Plus;

		_HV커넥터_N값.innerHTML =
			기초검사_v.절연검사_Minus == undefined
				? ""
				: 기초검사_v.절연검사_Minus;

		_HV_P값.innerHTML =
			기초검사_v.절연검사_Plus == undefined
				? ""
				: 기초검사_v.절연검사_Plus;

		_HV_N값.innerHTML =
			기초검사_v.절연검사_Minus == undefined
				? ""
				: 기초검사_v.절연검사_Minus;

		_고장코드.innerHTML = 기초검사_v.고장현상코드 == undefined ? "NG" : "OK";

		_고장코드사유.innerHTML =
			기초검사_v.고장현상명 == undefined ? "" : 기초검사_v.고장현상명;

		_센터진단.innerHTML =
			기초검사_v.센터진단내용 == undefined ? "" : 기초검사_v.센터진단내용;
		_재제조이력.innerHTML = "OK";
	} else {
		_재제조이력.innerHTML = "NG";
	}

	count(EOL, { 관리번호: _management_id.value });
	await delay();

	if (EOL_cnt > 0) {
		find(EOL, _management_id.value);
		await delay();

		_케이스.innerHTML =
			EOL_v.기밀검사_케이스 == undefined
				? ""
				: EOL_v.기밀검사_케이스;
		_케이스감압량.innerHTML =
			EOL_v.기밀검사_케이스_특이사항 == undefined
				? ""
				: EOL_v.기밀검사_케이스_특이사항;
		_냉각유로.innerHTML =
			EOL_v.기밀검사_냉각유로 == undefined
				? ""
				: EOL_v.기밀검사_냉각유로;
		_냉각유로감압량.innerHTML =
			EOL_v.기밀검사_냉각유로_특이사항 == undefined
				? ""
				: EOL_v.기밀검사_냉각유로_특이사항;
	} else {
		_케이스.innerHTML = "";
		_케이스감압량.innerHTML = "";
		_냉각유로.innerHTML = "";
		_냉각유로감압량.innerHTML = "";
	}

	count(입고_pic, { 관리번호: _management_id.value });
	await delay();

	if (입고_pic_cnt > 0) {
		find(입고_pic, _management_id.value);
		await delay();

		_top_pic.src = "data:image/;base64," + 입고_pic_v.pic1;
		_front_pic.src = "data:image/;base64," + 입고_pic_v.pic2;
		_left_pic.src = "data:image/;base64," + 입고_pic_v.pic3;
		_bottom_pic.src = "data:image/;base64," + 입고_pic_v.pic4;
		_rear_pic.src = "data:image/;base64," + 입고_pic_v.pic5;
		_right_pic.src = "data:image/;base64," + 입고_pic_v.pic6;
		_이상부위_외부1.src = "data:image/;base64," + 입고_pic_v.pic7;
		_이상부위_외부2.src = "data:image/;base64," + 입고_pic_v.pic8;
		_이상부위_외부3.src = "data:image/;base64," + 입고_pic_v.pic9;
		_이상부위_외부4.src = "data:image/;base64," + 입고_pic_v.pic10;

		_allImg.src = "data:image/;base64," + 입고_pic_v.pic2;
		_BMU.src = "data:image/;base64," + 입고_pic_v.pic3;
		_CMU.src = "data:image/;base64," + 입고_pic_v.pic4;
		_PRA.src = "data:image/;base64," + 입고_pic_v.pic5;
		_이상부위_내부1.src = "data:image/;base64," + 입고_pic_v.pic6;
		_이상부위_내부2.src = "data:image/;base64," + 입고_pic_v.pic7;
		_이상부위_내부3.src = "data:image/;base64," + 입고_pic_v.pic8;
		_이상부위_내부4.src = "data:image/;base64," + 입고_pic_v.pic9;

		_측정사진1.src = "data:image/;base64," + 입고_pic_v.pic1;
		_측정사진2.src = "data:image/;base64," + 입고_pic_v.pic2;
		_측정값사진1.src = "data:image/;base64," + 입고_pic_v.pic3;
		_측정값사진2.src = "data:image/;base64," + 입고_pic_v.pic4;

		_입고사진.src = "data:image/;base64," + 입고_pic_v.pic1;
		_BSA_QR.src = "data:image/;base64," + 입고_pic_v.pic2;
	}

	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();

	_작성일.innerHTML = now.substr(0, 10);

	count(출하정보, { 관리번호: _management_id.value });
	await delay();

	if (출하정보_cnt > 0) {
		find(출하정보, _management_id.value);
		await delay();

		_팩전압.innerHTML =
			출하정보_v.배터리팩전압 == undefined ? "" : 출하정보_v.배터리팩전압;

		_팩전압값.innerHTML =
			출하정보_v.배터리팩_측정값 == undefined
				? ""
				: 출하정보_v.배터리팩_측정값;

		_셀전압편차.innerHTML =
			출하정보_v.셀전압편차 == undefined ? "" : 출하정보_v.셀전압편차;

		_셀전압편차값.innerHTML =
			출하정보_v.셀전압편차_측정값 == undefined
				? ""
				: 출하정보_v.셀전압편차_측정값;

		_릴레이제어.innerHTML =
			출하정보_v.릴레이_강제구동 == undefined
				? ""
				: 출하정보_v.릴레이_강제구동;
	}
}

async function 기초보고서_save(type = 0) {
	var _date = new Date();
	var file_name = "기초보고서_" + _date + ".pdf";
	var _width = 4200;
	var _height = 2200;

	var doc = JSON.parse(JSON.stringify(기초보고서_doc));
	doc.level = '작업자';
	doc.기초보고서 = _cb기초보고서.checked;
	doc.육안검사외부 = _cb육안검사외부.checked;
	doc.육안검사외부상세 = _cb육안검사외부상세.checked;
	doc.육안검사내부 = _cb육안검사내부.checked;
	doc.육안검사내부상세 = _cb육안검사내부상세.checked;
	doc.기밀검사 = _cb기밀검사.checked;

	update_보고서(기초보고서, doc);
	await delay();

	if (type == 0) type = document.getElementById("_기초보고서");

	if (type == "육외") {
		type = document.getElementById("_육안검사외부1");
		file_name = "기초보고서_육안검사외부" + _date + ".pdf";
		_width = 4200;
		_height = 2100;
	}

	if (type == "육외상") {
		type = document.getElementById("_육안검사외부2");
		file_name = "기초보고서_육안검사외부_상세" + _date + ".pdf";
		_width = 4200;
		_height = 2100;
	}

	if (type == "육내") {
		type = document.getElementById("_육안검사내부1");
		file_name = "기초보고서_육안검사내부" + _date + ".pdf";
		_width = 4200;
		_height = 2700;
	}

	if (type == "육내상") {
		type = document.getElementById("_육안검사내부2");
		file_name = "기초보고서_육안검사내부_상세" + _date + ".pdf";
		_width = 4200;
		_height = 2100;
	}

	if (type == "기밀") {
		type = document.getElementById("_기밀검사");
		file_name = "기초보고서_기밀검사" + _date + ".pdf";
		_width = 4200;
		_height = 2000;
	}

	html2canvas(type, {
		width: (_width * window.innerWidth) / 1920,
		height: (_height * window.innerHeight) / 1080,
	}).then((canvas) => {
		var data = canvas.toDataURL();
		var canvas = document.getElementById("_canvas");
		var ctx = canvas.getContext("2d");
		var img = new Image();
		img.src = data;
		img.onload = function () {
			ctx.drawImage(img, 1920, 1080);
		};

		canvas.width = _width / 10;
		canvas.height = _height / 10;

		var docDefinition = {
			content: [
				{
					image: data,
					width: 1920,
					height: 1080,
				},
			],
			pageSize: "A4",
			pageOrientation: "landscape",
		};
		pdfMake.createPdf(docDefinition).download(file_name);
	});
	console.log("file name:", file_name);
}
