var 입고_data;
var 세척_date;
var 기초_data;
var 성능_data;
var EOL_data;
var EOL_pic_data;
var flag_입고정보 = false;

async function 완료보고서_시작() {
	while (_management_id == undefined) {
		await sleep(1);
	}
	flag_완료보고서 = false;

	await 완료보고서_조회();
}

async function 완료보고서_조회(is재제조번호 = false) {
	if (is재제조번호 == true) {
		findOne_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
		await delay();

		if (BSA재제조_v != null) {
			관리번호 = BSA재제조_v.관리번호;
		}
	}

	find(입고, 관리번호);
	await delay();

	입고_data = JSON.parse(JSON.stringify(입고_v));

	find(세척, 관리번호);
	await delay();

	세척_data = JSON.parse(JSON.stringify(세척_v));
	await delay();

	find(기초검사, 관리번호);
	await delay();

	기초_data = JSON.parse(JSON.stringify(기초검사_v));

	find(성능검사, 관리번호);
	await delay();

	성능_data = JSON.parse(JSON.stringify(성능검사_v));

	find(EOL, 관리번호);
	await delay();

	EOL_data = JSON.parse(JSON.stringify(EOL_v));

	find(EOL_pic, 관리번호);
	await delay();

	EOL_pic_data = JSON.parse(JSON.stringify(EOL_pic_v));

	find(부품정보_list, 관리번호);
	await delay();

	if(부품정보_list_v != null) {
		flag_입고정보 = true;
	}
	
	find(완료보고서, 관리번호);
	await delay();

	_img1.src = 완료보고서_v.pic1;
	_img2.src = 완료보고서_v.pic2;

	if (입고_data != null) {
		_RONo.innerHTML = 입고_data.RONo;
		_입고일.innerHTML = 입고_data.입고일;
		_차종.innerHTML = 입고_data.차종;

		switch (입고_data.차종) {
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
			case "PU_EV":
				showTable("_HR_PU_EV");
				break;

			case "LK_EV":
				showTable("_LK_EV");
				break;

			case "LM_EV":
			case "NE_EV":
				showTable("_LM_NE_EV");
				break;

			case "OS_EV":
				showTable("_OS_EV");
				break;

			case "SK3_EV":
				showTable("_SK3_EV");
				break;

			default:
				showTable("_CS_EV");
				alert("차종을 확인해 주세요");
		}
	} else {
		_RONo.innerHTML = "";
		_입고일.innerHTML = "";
	}

	if (기초_data != null) {
		_VINNo.innerHTML = 기초_data.VIN;
		_RONo.innerHTML = 기초_data.RO_no;
		_주행거리.innerHTML = 기초_data.주행거리;
		_차량번호.innerHTML = 기초_data.차량번호;
		_생산일.innerHTML = 기초_data.BSA생산일자;
		_판매일.innerHTML = 기초_data.BSA판매일자;
		_수리일.innerHTML = 기초_data.BSA수리일자;
		_작성자.innerHTML = worker;
	}

	if(EOL_data != null) {
		_부품현황.innerHTML = EOL_data.교체부품명;
		_이슈입력.innerHTML = EOL_data.공정흐름_이슈;
		_작성일.innerHTML = EOL_data.공정완료일;
		_결과.innerHTML = EOL_data.용량평가값;

		switch (입고_data.차종) {
			case "CS_EV":
				_CS_외부점검.innerHTML = EOL_data.육안검사_외부;
				_CS_외부점검사유innerHTML = '';
				_CS_내부점검.innerHTML = EOL_data.육안검사_내부;
				_CS_내부점검사유.innerHTML = '';
				_CS_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_CS_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_CS_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_CS_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_CS_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_CS_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_CS_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_CS_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_CS_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_CS_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_CS_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_CS_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_CS_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_CS_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_CS_고장코드.innerHTML = EOL_data.고장코드유무;
				//_CS_고장코드사유.innerHTML;
				_CS_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_CS_입고정보사유.innerHTML;
				_CS_재제조이력.innerHTML = 'OK';
				//_CS_재제조이력사유.innerHTML;
				_CS_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefined) ? 'OK' : 'NG';
				_CS_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _CS_커버류확인.innerHTML = '커버 장착 확인';
				else _CS_커버류확인.innerHTML = '커버 비장착';
				_CS_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _CS_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _CS_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_CS_ICCU.innerHTML = EOL_data.ICCU;
				//_CS_ICCU값.innerHTML;
				break;

			case "CV_EV":
				_CV_외부점검.innerHTML = EOL_data.육안검사_외부;
				_CV_외부점검사유innerHTML = '';
				_CV_내부점검.innerHTML = EOL_data.육안검사_내부;
				_CV_내부점검사유.innerHTML = '';
				_CV_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_CV_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_CV_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_CV_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_CV_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_CV_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_CV_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_CV_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_CV_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_CV_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_CV_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_CV_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_CV_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_CV_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_CV_고장코드.innerHTML = EOL_data.고장코드유무;
				//_CV_고장코드사유.innerHTML;
				_CV_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_CV_입고정보사유.innerHTML;
				_CV_재제조이력.innerHTML = 'OK';
				//_CV_재제조이력사유.innerHTML;
				_CV_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_CV_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _CV_커버류확인.innerHTML = '커버 장착 확인';
				else _CV_커버류확인.innerHTML = '커버 비장착';
				_CV_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _CV_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _CV_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_CV_ICCU.innerHTML = EOL_data.ICCU;
				//_CV_ICCU값.innerHTML;
				break;

			case "DE_EV":
				_DE_외부점검.innerHTML = EOL_data.육안검사_외부;
				_DE_외부점검사유innerHTML = '';
				_DE_내부점검.innerHTML = EOL_data.육안검사_내부;
				_DE_내부점검사유.innerHTML = '';
				_DE_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_DE_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_DE_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_DE_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_DE_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_DE_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_DE_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_DE_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_DE_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_DE_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_DE_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_DE_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_DE_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_DE_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_DE_고장코드.innerHTML = EOL_data.고장코드유무;
				//_DE_고장코드사유.innerHTML;
				_DE_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_DE_입고정보사유.innerHTML;
				_DE_재제조이력.innerHTML = 'OK';
				//_DE_재제조이력사유.innerHTML;
				_DE_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_DE_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _DE_커버류확인.innerHTML = '커버 장착 확인';
				else _DE_커버류확인.innerHTML = '커버 비장착';
				_DE_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _DE_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _DE_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_DE_ICCU.innerHTML = EOL_data.ICCU;
				//_DE_ICCU값.innerHTML;
				break;

			case "HR_EV":
				_HR_외부점검.innerHTML = EOL_data.육안검사_외부;
				_HR_외부점검사유innerHTML = '';
				_HR_내부점검.innerHTML = EOL_data.육안검사_내부;
				_HR_내부점검사유.innerHTML = '';
				_HR_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_HR_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_HR_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_HR_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_HR_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_HR_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_HR_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_HR_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_HR_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_HR_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_HR_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_HR_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_HR_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_HR_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_HR_고장코드.innerHTML = EOL_data.고장코드유무;
				//_HR_고장코드사유.innerHTML;
				_HR_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_HR_입고정보사유.innerHTML;
				_HR_재제조이력.innerHTML = 'OK';
				//_HR_재제조이력사유.innerHTML;
				_HR_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_HR_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _HR_커버류확인.innerHTML = '커버 장착 확인';
				else _HR_커버류확인.innerHTML = '커버 비장착';
				_HR_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _HR_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _HR_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_HR_ICCU.innerHTML = EOL_data.ICCU;
				//_HR_ICCU값.innerHTML;
				break;

			case "PU_EV":
				_PU_외부점검.innerHTML = EOL_data.육안검사_외부;
				_PU_외부점검사유innerHTML = '';
				_PU_내부점검.innerHTML = EOL_data.육안검사_내부;
				_PU_내부점검사유.innerHTML = '';
				_PU_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_PU_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_PU_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_PU_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_PU_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_PU_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_PU_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_PU_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_PU_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_PU_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_PU_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_PU_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_PU_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_PU_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_PU_고장코드.innerHTML = EOL_data.고장코드유무;
				//_PU_고장코드사유.innerHTML;
				_PU_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_PU_입고정보사유.innerHTML;
				_PU_재제조이력.innerHTML = 'OK';
				//_PU_재제조이력사유.innerHTML;
				_PU_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_PU_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _PU_커버류확인.innerHTML = '커버 장착 확인';
				else _PU_커버류확인.innerHTML = '커버 비장착';
				_PU_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _PU_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _PU_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_PU_ICCU.innerHTML = EOL_data.ICCU;
				//_PU_ICCU값.innerHTML;
				break;

			case "LK_EV":
				_LK_FC_외부점검.innerHTML = EOL_data.육안검사_외부;
				_LK_FC_외부점검사유innerHTML = '';
				_LK_FC_내부점검.innerHTML = EOL_data.육안검사_내부;
				_LK_FC_내부점검사유.innerHTML = '';
				_LK_FC_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_LK_FC_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_LK_FC_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_LK_FC_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_LK_FC_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_LK_FC_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_LK_FC_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_LK_FC_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_LK_FC_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_LK_FC_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_LK_FC_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_LK_FC_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_LK_FC_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_LK_FC_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_LK_FC_고장코드.innerHTML = EOL_data.고장코드유무;
				//_LK_FC_고장코드사유.innerHTML;
				_LK_FC_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_LK_FC_입고정보사유.innerHTML;
				_LK_FC_재제조이력.innerHTML = 'OK';
				//_LK_FC_재제조이력사유.innerHTML;
				_LK_FC_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_LK_FC_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _LK_FC_커버류확인.innerHTML = '커버 장착 확인';
				else _LK_FC_커버류확인.innerHTML = '커버 비장착';
				_LK_FC_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _LK_FC_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _LK_FC_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_LK_FC_ICCU.innerHTML = EOL_data.ICCU;
				//_LK_FC_ICCU값.innerHTML;
				break;

			case "LM_EV":
				_LM_외부점검.innerHTML = EOL_data.육안검사_외부;
				_LM_외부점검사유innerHTML = '';
				_LM_내부점검.innerHTML = EOL_data.육안검사_내부;
				_LM_내부점검사유.innerHTML = '';
				_LM_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_LM_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_LM_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_LM_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_LM_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_LM_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_LM_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_LM_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_LM_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_LM_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_LM_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_LM_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_LM_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_LM_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_LM_고장코드.innerHTML = EOL_data.고장코드유무;
				//_LM_고장코드사유.innerHTML;
				_LM_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_LM_입고정보사유.innerHTML;
				_LM_재제조이력.innerHTML = 'OK';
				//_LM_재제조이력사유.innerHTML;
				_LM_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_LM_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _LM_커버류확인.innerHTML = '커버 장착 확인';
				else _LM_커버류확인.innerHTML = '커버 비장착';
				_LM_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _LM_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _LM_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_LM_ICCU.innerHTML = EOL_data.ICCU;
				//_LM_ICCU값.innerHTML;
				break;

			case "NE_EV":
				_NE_외부점검.innerHTML = EOL_data.육안검사_외부;
				_NE_외부점검사유innerHTML = '';
				_NE_내부점검.innerHTML = EOL_data.육안검사_내부;
				_NE_내부점검사유.innerHTML = '';
				_NE_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_NE_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_NE_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_NE_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_NE_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_NE_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_NE_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_NE_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_NE_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_NE_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_NE_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_NE_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_NE_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_NE_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_NE_고장코드.innerHTML = EOL_data.고장코드유무;
				//_NE_고장코드사유.innerHTML;
				_NE_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_NE_입고정보사유.innerHTML;
				_NE_재제조이력.innerHTML = 'OK';
				//_NE_재제조이력사유.innerHTML;
				_NE_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_NE_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _NE_커버류확인.innerHTML = '커버 장착 확인';
				else _NE_커버류확인.innerHTML = '커버 비장착';
				_NE_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _NE_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _NE_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_NE_ICCU.innerHTML = EOL_data.ICCU;
				//_NE_ICCU값.innerHTML;
				break;

			case "OS_EV":
				console.log(EOL_data);
				_OS_외부점검.innerHTML = EOL_data.육안검사_외부;
				_OS_외부점검사유innerHTML = '';
				_OS_내부점검.innerHTML = EOL_data.육안검사_내부;
				_OS_내부점검사유.innerHTML = '';
				_OS_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_OS_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_OS_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_OS_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_OS_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_OS_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_OS_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_OS_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_OS_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_OS_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_OS_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_OS_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_OS_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_OS_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_OS_고장코드.innerHTML = EOL_data.고장코드유무;
				//_OS_고장코드사유.innerHTML;
				_OS_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_OS_입고정보사유.innerHTML;
				_OS_재제조이력.innerHTML = 'OK';
				//_OS_재제조이력사유.innerHTML;
				_OS_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefined) ? 'OK' : 'NG';
				_OS_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _OS_커버류확인.innerHTML = '커버 장착 확인';
				else _OS_커버류확인.innerHTML = '커버 비장착';
				_OS_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _OS_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _OS_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				//_OS_ICCU.innerHTML = EOL_data.ICCU;
				//_OS_ICCU값.innerHTML;
				break;

			case "SK3_EV":
				_SK3_외부점검.innerHTML = EOL_data.육안검사_외부;
				_SK3_외부점검사유innerHTML = '';
				_SK3_내부점검.innerHTML = EOL_data.육안검사_내부;
				_SK3_내부점검사유.innerHTML = '';
				_SK3_케이스.innerHTML = EOL_data.기밀검사_케이스;
				_SK3_케이스감압량.innerHTML = EOL_data.기밀검사_케이스_특이사항;
				_SK3_냉각유로.innerHTML = EOL_data.기밀검사_냉각유로;
				_SK3_냉각유로감압량.innerHTML = EOL_data.기밀검사_냉각유로_특이사항;
				_SK3_PRA_P.innerHTML = EOL_data.절연검사_Plus;
				_SK3_PRA_P값.innerHTML = EOL_data.절연검사_Plus_특이사항;
				_SK3_PRA_N.innerHTML = EOL_data.절연검사_Minus;
				_SK3_PRA_N값.innerHTML = EOL_data.절연검사_Minus_특이사항;
				_SK3_팩전압.innerHTML = EOL_data.통신검사_팩전압;
				_SK3_팩전압값.innerHTML = EOL_data.통신검사_팩전압_특이사항;
				_SK3_셀전압편차.innerHTML = EOL_data.통신검사_셀전압편차;
				_SK3_셀전압편차값.innerHTML = EOL_data.통신검사_셀전압편차_특이사항;
				_SK3_릴레이제어.innerHTML = EOL_data.통신검사_릴레이구동;
				_SK3_릴레이제어사유.innerHTML = EOL_data.통신검사_릴레이구동사유;
				_SK3_고장코드.innerHTML = EOL_data.고장코드유무;
				//_SK3_고장코드사유.innerHTML;
				_SK3_입고정보.innerHTML = flag_입고정보 ? 'OK' : 'NG';
				//_SK3_입고정보사유.innerHTML;
				_SK3_재제조이력.innerHTML = 'OK';
				//_SK3_재제조이력사유.innerHTML;
				_SK3_출하QR.innerHTML = (EOL_data.QR != '' && EOL_data.QR != undefiend) ? 'OK' : 'NG';
				_SK3_커버류.innerHTML = EOL_data.커버류;
				if(EOL_data.커버류 == 'OK') _SK3_커버류확인.innerHTML = '커버 장착 확인';
				else _SK3_커버류확인.innerHTML = '커버 비장착';
				_SK3_브라켓정보.innerHTML = EOL_data.브라켓;
				if(EOL_data.브라켓 == 'OK') _SK3_브라켓값.innerHTML = '재고 부족 시 영업팀과 협의 요망';
				else _SK3_브라켓값.innerHTML = '재고 부족 영업팀과 협의 요망';
				_SK3_ICCU.innerHTML = EOL_data.ICCU;
				//_SK3_ICCU값.innerHTML;
				break;

			default:
				alert("차종을 확인해 주세요");
		}
	}

	_top_pic.src = EOL_pic_data.pic1;
	_front_pic.src = EOL_pic_data.pic2;
	_left_pic.src = EOL_pic_data.pic3;
	_bottom_pic.src = EOL_pic_data.pic4;
	_rear_pic.src = EOL_pic_data.pic5;
	_right_pic.src = EOL_pic_data.pic6;
	_allImg.src = EOL_pic_data.pic7;
	_BMU.src = EOL_pic_data.pic8;
	_CMU.src = EOL_pic_data.pic9;
	_PRA.src = EOL_pic_data.pic10;
	_측정사진1.src = EOL_pic_data.pic11;
	_측정값사진1.src = EOL_pic_data.pic12;
	_측정사진2.src = EOL_pic_data.pic13;
	_측정값사진2.src = EOL_pic_data.pic14;
	_절연측정사진1.src = EOL_pic_data.pic15;
	_절연측정값사진1.src = EOL_pic_data.pic16;
	_절연측정사진2.src = EOL_pic_data.pic17;
	_절연측정값사진2.src = EOL_pic_data.pic18;
	_CAN현재.src = EOL_pic_data.pic21;
	_CAN과거.src = EOL_pic_data.pic22;
	_CAN진단.src = EOL_pic_data.pic23;
	_PDS진단1.src = EOL_pic_data.pic24;
	_PDS진단2.src = EOL_pic_data.pic25;
	_EOL항목검사사진.src = EOL_pic_data.pic24;
	_CELL전압검사사진.src = EOL_pic_data.pic25;

	_img1.ondblclick = function (evt) {
		_img1.src = "";
	};
	_img1.ondrop = function (evt) {
		var files = evt.dataTransfer?.files;
		if (files.length > 0) {
			console.log("drag & drop");
			resize_pic(files[0], _img1);
		}
		evt.preventDefault();
	};

	_img2.ondblclick = function (evt) {
		_img2.src = "";
	};
	_img2.ondrop = function (evt) {
		var files = evt.dataTransfer?.files;
		if (files.length > 0) {
			console.log("drag & drop");
			resize_pic(files[0], _img2);
		}
		evt.preventDefault();
	};

	_img1.ondragover = function (evt) {
		evt.preventDefault();
		console.log("dragover!");
	};

	_img2.ondragover = function (evt) {
		evt.preventDefault();
	};

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

async function 완료보고서_save() {
	var doc = {
		관리번호 : 관리번호,
		pic1 : _img1.src,
		pic2 : _img2.src,
	}

	update(완료보고서, doc);
	await delay();

	console.log(update_count);
	console.log(insert_count);

	if (update_count > 0) {
		alert("업데이트 되었습니다");
	}

	if (insert_count > 0) {
		alert("저장 되었습니다");
	}
}

async function 완료보고서_save_pdf(type = 0) {
	var _date = new Date();
	var file_name = "완료보고서" + _date + ".pdf";
	var _width = 4200;
	var _height = 2200;

	if (type == 0) type = document.getElementById("_완료보고서");

	if (type == "육외") {
		type = document.getElementById("_육안검사외부1");
		file_name = "완료보고서_육안검사외부" + _date + ".pdf";
		_width = 4200;
		_height = 2100;
	}

	if (type == "육외상") {
		type = document.getElementById("_육안검사외부2");
		file_name = "완료보고서_육안검사외부_상세" + _date + ".pdf";
		_width = 4200;
		_height = 2100;
	}

	if (type == "육내") {
		type = document.getElementById("_육안검사내부1");
		file_name = "완료보고서_육안검사내부" + _date + ".pdf";
		_width = 4200;
		_height = 2700;
	}

	if (type == "육내상") {
		type = document.getElementById("_육안검사내부2");
		file_name = "완료보고서_육안검사내부_상세" + _date + ".pdf";
		_width = 4200;
		_height = 2100;
	}

	if (type == "기밀") {
		type = document.getElementById("_기밀검사");
		file_name = "완료보고서_기밀검사" + _date + ".pdf";
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
