async function 출하정보_시작() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	flag_출하 =  false;

	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

	_검사자.value = worker;

	if(차종 != '') {
		_A.style.display = 'none';
		_B.style.display = 'none';
		_C.style.display = 'none';
		_D.style.display = 'none';
		_E.style.display = 'none';

		switch(차종) {
			case 'DE':
			case 'OS':
			case 'SK3':
				_A.style.display = 'block';
				break;

			case 'PU':
			case 'HR':
				_B.style.display = 'block';
				break;

			case 'CV':
			case 'NE':
				_C.style.display = 'block';
				break;

			case 'LK':
				_D.style.display = 'block';
				break;

			case 'LM':
				_E.style.display = 'block';
				break;

			default:
				alert('차종 정보를 확인해주세요');
				break;
		}
	}

	find(BSA재제조, _management_id.value );
	await delay();

	console.log('=>>', find_array);
	_차종.value = find_array[0].차종;
	_품번.value = find_array[0].품번;
	_RO_no.value = find_array[0].RO_no;

	count(출하정보, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		console.log('관리번호:', 관리번호);

		
		find(출하정보, _management_id.value);
		await delay();
		console.log(find_array);

		_출하코드.value = find_array[0].출하코드;
		_납품처.value = find_array[0].납품처;
		_출하일.value = find_array[0].출하일;
		_검사일.value = find_array[0].검사일;
		_검토.value = find_array[0].검토;
		_승인.value = find_array[0].승인;
		_입고정보_작성확인.value = find_array[0].입고정보_작성확인;
		_재제조_이력문서_작성확인.value = find_array[0].재제조_이력문서_작성확인;
		_기초보고서_작성확인.value = find_array[0].기초보고서_작성확인;
		_완료보고서_작성확인.value = find_array[0].완료보고서_작성확인;
		_클린상태.value = find_array[0].클린상태;
		_팔레트_적정위치.value = find_array[0].팔레트_적정위치;
		포장랩상태.value = find_array[0].포장랩상태;
		_UPR_QR.value = find_array[0].UPR_QR;
		_LWR_QR.value = find_array[0].LWR_QR;
		_HKMC_스티커_URP.value = find_array[0].HKMC_스티커_URP;
		_냉각유로_커버1.value = find_array[0].냉각유로_커버1;
		_냉각유로_커버2.value = find_array[0].냉각유로_커버2;
		_A_HV.value = find_array[0].A_HV;
		_A_LV.value = find_array[0].A_LV; 
		_A_H_T.value = find_array[0].A_H_T; 
		_A_SPA.value = find_array[0].A_SPA; 
		_A_S_PLUG.value = find_array[0].A_S_PLUG; 
		_A_브라켓1.value = find_array[0].A_브라켓1;
		_A_브라켓2.value = find_array[0].A_브라켓2;
		_A_브라켓3.value = find_array[0].A_브라켓3; 
		_A_브라켓4.value = find_array[0].A_브라켓4; 
		_A_접지.value = find_array[0].A_접지; 
		_B_HV.value = find_array[0].B_HV; 
		_B_LV.value = find_array[0].B_LV; 
		_B_H_T.value = find_array[0].B_H_T; 
		_B_브라켓1.value = find_array[0].B_브라켓1; 
		_B_브라켓2.value = find_array[0].B_브라켓2; 
		_B_브라켓3.value = find_array[0].B_브라켓3;
		_B_접지.value = find_array[0].B_접지; 
		_C_HV1.value = find_array[0].C_HV1; 
		_C_HV2.value = find_array[0].C_HV2; 
		_C_LV.value = find_array[0].C_LV; 
		_C_H_T.value = find_array[0].C_H_T; 
		_C_브라켓55mm.value = find_array[0].C_브라켓55mm; 
		_C_브라켓35mm_1.value = find_array[0].C_브라켓35mm_1; 
		_C_브라켓35mm_2.value = find_array[0].C_브라켓35mm_2; 
		_C_브라켓35mm_3.value = find_array[0].C_브라켓35mm_3; 
		_C_브라켓35mm_4.value = find_array[0].C_브라켓35mm_4; 
		_C_브라켓35mm_5.value = find_array[0].C_브라켓35mm_5;
		_C_브라켓35mm_6.value = find_array[0].C_브라켓35mm_6; 
		_C_브라켓35mm_7.value = find_array[0].C_브라켓35mm_7; 
		_C_브라켓35mm_8.value = find_array[0].C_브라켓35mm_8; 
		_C_접지.value = find_array[0].C_접지; 
		_D_HV.value = find_array[0].D_HV; 
		_D_LV.value = find_array[0].D_LV; 
		_D_H_T.value = find_array[0].D_H_T; 
		_D_S_PLUG.value = find_array[0].D_S_PLUG; 
		_D_아이볼트1.value = find_array[0].D_아이볼트1; 
		_D_아이볼트2.value = find_array[0].D_아이볼트2;
		_D_아이볼트3.value = find_array[0].D_아이볼트3; 
		_D_아이볼트4.value = find_array[0].D_아이볼트4; 
		_D_접지1.value = find_array[0].D_접지1; 
		_D_접지2.value = find_array[0].D_접지2; 
		_E_HV.value = find_array[0].E_HV; 
		_E_LV.value = find_array[0].E_LV; 
		_E_아이볼트1.value = find_array[0].E_아이볼트1; 
		_E_아이볼트2.value = find_array[0].E_아이볼트2; 
		_E_아이볼트3.value = find_array[0].E_아이볼트3; 
		_E_아이볼트4.value = find_array[0].E_아이볼트4; 
		_E_접지.value = find_array[0].E_접지; 
		_용량평가.value = find_array[0].용량평가; 
		_용량평가_측정값.value = find_array[0].용량평가_측정값;
		_SOC60.value = find_array[0].SOC60; 
		_SOC60_팩전압.value = find_array[0].SOC60_팩전압;
		_SOC60_편차.value = find_array[0].SOC60_편차; 
		_DCIR.value = find_array[0].DCIR; 
		_DCIR_측정값.value = find_array[0].DCIR_측정값; 
		_릴레이동시구동.value = find_array[0].릴레이동시구동; 
		_케이스.value = find_array[0].케이스; 
		_케이스_측정값.value = find_array[0].케이스_측정값; 
		_냉각유로.value = find_array[0].냉각유로;
		_냉각유로_측정값.value = find_array[0].냉각유로_측정값;
		_접지Plus.value = find_array[0].접지Plus; 
		_접지Plus_측정값.value = find_array[0].접지Plus_측정값; 
		_접지Minus.value = find_array[0].접지Minus; 
		_접지Minus_측정값.value = find_array[0].접지Minus_측정값; 
		_DTC.value = find_array[0].DTC; 
		_DTC_현재.value = find_array[0].DTC_현재; 
		_DTC_과거.value = find_array[0].DTC_과거;
		_BSA전압.value = find_array[0].BSA전압; 
		_BSA전압_측정값.value = find_array[0].BSA전압_측정값; 
		_셀전압편차.value = find_array[0].셀전압편차; 
		_셀전압편차_측정값.value = find_array[0].셀전압편차_측정값;
		_BMS고장NO.value = find_array[0].BMS고장NO;
		_BMS융착NO.value = find_array[0].BMS융착NO;
		_절연저항.value = find_array[0].절연저항;
		_절연저항_측정값.value = find_array[0].절연저항_측정값; 
		_배터리온도.value = find_array[0].배터리온도;
		_배터리온도_최대.value = find_array[0].배터리온도_최대;
		_배터리온도_최소.value = find_array[0].배터리온도_최소;
		_SOH.value = find_array[0].SOH;
		_릴레이_강제구동.value = find_array[0].릴레이_강제구동;
		_커넥터_체결검사.value = find_array[0].커넥터_체결검사;
		_통신화면_캡쳐.value = find_array[0].통신화면_캡쳐;

		if(_출하코드.value = '') {
			count(EOL, { 관리번호 : _management_id.value });
			await delay();
			console.log('doc_count: ', doc_count);
			if(doc_count >= 1) {
				find(EOL, _management_id.value);
				await delay();

				_출하코드.value = find_array[0].QR;
			}
		}

		if(_차종.value == '' || _품번.value == '' || _RO_no.value == '') {
			count(입고, { 관리번호 : _management_id.value });
			await delay();
			console.log('doc_count: ', doc_count);
			if(doc_count >= 1) {
				find(입고, _management_id.value);
				await delay();
				console.log('입고 data:', find_array);

				_차종.value = find_array[0].차종;
				_품번.value = find_array[0].품번;
				_RO_no.value = find_array[0].RO_no;
			}
		}
	} else {
		_출하코드.value = '';
		_납품처.value = '';
		_출하일.value = '0000-00-00T00:00';
		_출하코드.value = '';
		_납품처.value = '';
		_납품처.value = '';
		_출하일.value = '0000-00-00T00:00';
		_검사일.value = '0000-00-00T00:00';
		_검토.value = '';
		_승인.value = '';
		_입고정보_작성확인.value = '';
		_재제조_이력문서_작성확인.value = '';
		_기초보고서_작성확인.value = '';
		_완료보고서_작성확인.value = '';
		_클린상태.value = '';
		_팔레트_적정위치.value = '';
		_포장랩상태.value = '';
		_UPR_QR.value = '';
		_LWR_QR.value = '';
		_HKMC_스티커_URP.value = '';
		_냉각유로_커버1.value = '';
		_냉각유로_커버2.value = '';
		_A_HV.value = '';
		_A_LV.value = '';
		_A_H_T.value = '';
		_A_SPA.value = '';
		_A_S_PLUG.value = '';
		_A_브라켓1.value = '';
		_A_브라켓2.value = '';
		_A_브라켓3.value = '';
		_A_브라켓4.value = '';
		_A_접지.value = '';
		_B_HV.value = '';
		_B_LV.value = '';
		_B_H_T.value = '';
		_B_브라켓1.value = '';
		_B_브라켓2.value = '';
		_B_브라켓3.value = '';
		_B_접지.value = '';
		_C_HV1.value = '';
		_C_HV2.value = '';
		_C_LV.value = '';
		_C_H_T.value = '';
		_C_브라켓55mm.value = '';
		_C_브라켓35mm_1.value = '';
		_C_브라켓35mm_2.value = ''; 
		_C_브라켓35mm_3.value = ''; 
		_C_브라켓35mm_4.value = ''; 
		_C_브라켓35mm_5.value = '';
		_C_브라켓35mm_6.value = ''; 
		_C_브라켓35mm_7.value = ''; 
		_C_브라켓35mm_8.value = ''; 
		_C_접지.value = ''; 
		_D_HV.value = ''; 
		_D_LV.value = ''; 
		_D_H_T.value = ''; 
		_D_S_PLUG.value = ''; 
		_D_아이볼트1.value = ''; 
		_D_아이볼트2.value = '';
		_D_아이볼트3.value = ''; 
		_D_아이볼트4.value = ''; 
		_D_접지1.value = ''; 
		_D_접지2.value = ''; 
		_E_HV.value = ''; 
		_E_LV.value = ''; 
		_E_아이볼트1.value = ''; 
		_E_아이볼트2.value = ''; 
		_E_아이볼트3.value = ''; 
		_E_아이볼트4.value = ''; 
		_E_접지.value = ''; 
		_용량평가.value = ''; 
		_용량평가_측정값.value = '';
		_SOC60.value = ''; 
		_SOC60_팩전압.value = '';
		_SOC60_편차.value = ''; 
		_DCIR.value = ''; 
		_DCIR_측정값.value = ''; 
		_릴레이동시구동.value = ''; 
		_케이스.value = ''; 
		_케이스_측정값.value = ''; 
		_냉각유로.value = '';
		_냉각유로_측정값.value = '';
		_접지Plus.value = ''; 
		_접지Plus_측정값.value = ''; 
		_접지Minus.value = ''; 
		_접지Minus_측정값.value = ''; 
		_DTC.value = ''; 
		_DTC_현재.value = ''; 
		_DTC_과거.value = '';
		_BSA전압.value = ''; 
		_BSA전압_측정값.value = ''; 
		_셀전압편차.value = ''; 
		_셀전압편차_측정값.value = '';
		_BMS고장NO.value = '';
		_BMS융착NO.value = '';
		_절연저항.value = '';
		_절연저항_측정값.value = ''; 
		_배터리온도.value = '';
		_배터리온도_최대.value = '';
		_배터리온도_최소.value = '';
		_SOH.value = '';
		_릴레이_강제구동.value = '';
		_커넥터_체결검사.value = '';
		_통신화면_캡쳐.value = '';
	}
}

async function 출하정보_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 출하정보_doc;
	doc.관리번호 = _management_id.value;
	doc.출하코드 = _출하코드.value;
	doc.납품처 = _납품처.value;
	doc.출하일 = _출하일.value;
	doc.검사일 = _검사일.value;
	doc.검토 = _검토.value;
	doc.승인 = _승인.value;
	doc.입고정보_작성확인 = _입고정보_작성확인.value;
	doc.재제조_이력문서_작성확인 = _재제조_이력문서_작성확인.value;
	doc.기초보고서_작성확인 = _기초보고서_작성확인.value;
	doc.완료보고서_작성확인 = _완료보고서_작성확인.value;
	doc.클린상태 = _클린상태.value; 
	doc.팔레트_적정위치 = _팔레트_적정위치.value; 
	doc.포장랩상태 = _포장랩상태.value;
	doc.UPR_QR = _UPR_QR.value; 
	doc.LWR_QR = _LWR_QR.value; 
	doc.HKMC_스티커_URP = _HKMC_스티커_URP.value; 
	doc.냉각유로_커버1 = _냉각유로_커버1.value; 
	doc.냉각유로_커버2 = _냉각유로_커버2.value; 
	doc.A_HV = _A_HV.value; 
	doc.A_LV = _A_LV.value; 
	doc.A_H_T = _A_H_T.value; 
	doc.A_SPA = _A_SPA.value; 
	doc.A_S_PLUG = _A_S_PLUG.value; 
	doc.A_브라켓1 = _A_브라켓1.value;
	doc.A_브라켓2 = _A_브라켓2.value;
	doc.A_브라켓3 = _A_브라켓3.value; 
	doc.A_브라켓4 = _A_브라켓4.value; 
	doc.A_접지 = _A_접지.value; 
	doc.B_HV = _B_HV.value; 
	doc.B_LV = _B_LV.value; 
	doc.B_H_T = _B_H_T.value; 
	doc.B_브라켓1 = _B_브라켓1.value; 
	doc.B_브라켓2 = _B_브라켓2.value; 
	doc.B_브라켓3 = _B_브라켓3.value;
	doc.B_접지 = _B_접지.value; 
	doc.C_HV1 = _C_HV1.value; 
	doc.C_HV2 = _C_HV2.value; 
	doc.C_LV = _C_LV.value; 
	doc.C_H_T = _C_H_T.value; 
	doc.C_브라켓55mm = _C_브라켓55mm.value; 
	doc.C_브라켓35mm_1 = _C_브라켓35mm_1.value; 
	doc.C_브라켓35mm_2 = _C_브라켓35mm_2.value; 
	doc.C_브라켓35mm_3 = _C_브라켓35mm_3.value; 
	doc.C_브라켓35mm_4 = _C_브라켓35mm_4.value; 
	doc.C_브라켓35mm_5 = _C_브라켓35mm_5.value;
	doc.C_브라켓35mm_6 = _C_브라켓35mm_6.value; 
	doc.C_브라켓35mm_7 = _C_브라켓35mm_7.value; 
	doc.C_브라켓35mm_8 = _C_브라켓35mm_8.value; 
	doc.C_접지 = _C_접지.value; 
	doc.D_HV = _D_HV.value; 
	doc.D_LV = _D_LV.value; 
	doc.D_H_T = _D_H_T.value; 
	doc.D_S_PLUG = _D_S_PLUG.value; 
	doc.D_아이볼트1 = _D_아이볼트1.value; 
	doc.D_아이볼트2 = _D_아이볼트2.value; 
	doc.D_아이볼트3 = _D_아이볼트3.value; 
	doc.D_아이볼트4 = _D_아이볼트4.value; 
	doc.D_접지1 = _D_접지1.value; 
	doc.D_접지2 = _D_접지2.value; 
	doc.E_HV = _E_HV.value; 
	doc.E_LV = _E_LV.value; 
	doc.E_아이볼트1 = _E_아이볼트1.value; 
	doc.E_아이볼트2 = _E_아이볼트2.value; 
	doc.E_아이볼트3 = _E_아이볼트3.value; 
	doc.E_아이볼트4 = _E_아이볼트4.value; 
	doc.E_접지 = _E_접지.value; 
	doc.용량평가 = _용량평가.value; 
	doc.용량평가_측정값 = _용량평가_측정값.value;
	doc.SOC60 = _SOC60.value; 
	doc.SOC60_팩전압 = _SOC60_팩전압.value;
	doc.SOC60_편차 = _SOC60_편차.value; 
	doc.DCIR = _DCIR.value; 
	doc.DCIR_측정값 = _DCIR_측정값.value; 
	doc.릴레이동시구동 = _릴레이동시구동.value; 
	doc.케이스 = _케이스.value; 
	doc.케이스_측정값 = _케이스_측정값.value; 
	doc.냉각유로 = _냉각유로.value;
	doc.냉각유로_측정값 = _냉각유로_측정값.value;
	doc.접지Plus = _접지Plus.value; 
	doc.접지Plus_측정값 = _접지Plus_측정값.value; 
	doc.접지Minus = _접지Minus.value; 
	doc.접지Minus_측정값 = _접지Minus_측정값.value; 
	doc.DTC = _DTC.value; 
	doc.DTC_현재 = _DTC_현재.value; 
	doc.DTC_과거 = _DTC_과거.value; 
	doc.BSA전압 = _BSA전압.value; 
	doc.BSA전압_측정값 = _BSA전압_측정값.value; 
	doc.셀전압편차 = _셀전압편차.value; 
	doc.셀전압편차_측정값 = _셀전압편차_측정값.value;
	doc.BMS고장NO = _BMS고장NO.value;
	doc.BMS융착NO = _BMS융착NO.value;
	doc.절연저항 = _절연저항.value;
	doc.절연저항_측정값 = _절연저항_측정값.value; 
	doc.배터리온도 = _배터리온도.value;
	doc.배터리온도_최대 = _배터리온도_최대.value;
	doc.배터리온도_최소 = _배터리온도_최소.value;
	doc.SOH = _SOH.value;
	doc.릴레이_강제구동 = _릴레이_강제구동.value;
	doc.커넥터_체결검사 = _커넥터_체결검사.value;
	doc.통신화면_캡쳐 = _통신화면_캡쳐.value;
	
	console.log(doc);
	update(출하정보, doc);
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

function _입고정보_작성확인_콤보박스(e) {
	const value = e.value;

	document.getElementById('_입고정보_작성확인').value = value;
}

function _재제조_이력문서_작성확인_콤보박스(e) {
	const value = e.value;

	document.getElementById('_재제조_이력문서_작성확인').value = value;
}

function _기초보고서_작성확인_콤보박스(e) {
	const value = e.value;

	document.getElementById('_기초보고서_작성확인').value = value;
}

function _완료보고서_작성확인_콤보박스(e) {
	const value = e.value;

	document.getElementById('_완료보고서_작성확인').value = value;

}

function _클린상태_콤보박스(e) {
	const value = e.value;

	document.getElementById('_클린상태').value = value;
}

function _팔레트_적정위치_콤보박스(e) {
	const value = e.value;

	document.getElementById('_팔레트_적정위치').value = value;
}

function _포장랩상태_콤보박스(e) {
	const value = e.value;

	document.getElementById('_포장랩상태').value = value;
}

function _UPR_QR_콤보박스(e) {
	const value = e.value;

	document.getElementById('_UPR_QR').value = value;
}

function _LWR_QR_콤보박스(e) {
	const value = e.value;

	document.getElementById('_LWR_QR').value = value;
}

function _HKMC_스티커_URP_콤보박스(e) {
	const value = e.value;

	document.getElementById('_HKMC_스티커_URP').value = value;
}

function _냉각유로_커버1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_냉각유로_커버1').value = value;
}

function _냉각유로_커버2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_냉각유로_커버2').value = value;
}

function _A_HV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_HV').value = value;
}

function _A_LV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_LV').value = value;
}

function _A_H_T_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_H_T').value = value;
}

function _A_SPA_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_SPA').value = value;
}

function _A_S_PLUG_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_S_PLUG').value = value;
}

function _A_브라켓1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_브라켓1').value = value;
}

function _A_브라켓2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_브라켓2').value = value;
}

function _A_브라켓3_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_브라켓3').value = value;
}

function _A_브라켓4_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_브라켓4').value = value;
}

function _A_접지_콤보박스(e) {
	const value = e.value;

	document.getElementById('_A_접지').value = value;
}

function _B_HV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_B_HV').value = value;
}

function _B_LV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_B_LV').value = value;
}

function _B_H_T_콤보박스(e) {
	const value = e.value;

	document.getElementById('_B_H_T').value = value;
}

function _B_브라켓1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_B_브라켓1').value = value;
}

function _B_브라켓2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_B_브라켓2').value = value;
}

function _B_브라켓3_콤보박스(e) {
	const value = e.value;

	document.getElementById('_B_브라켓3').value = value;
}

function _B_접지_콤보박스(e) {
	const value = e.value;

	document.getElementById('_B_접지').value = value;
}

function _C_HV1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_HV1').value = value;
}

function _C_HV2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_HV2').value = value;
}

function _C_LV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_LV').value = value;
}

function _C_H_T_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_H_T').value = value;
}

function _C_브라켓55mm_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓55mm').value = value;
}

function _C_브라켓35mm_1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_1').value = value;
}

function _C_브라켓35mm_2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_2').value = value;
}

function _C_브라켓35mm_3_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_3').value = value;
}

function _C_브라켓35mm_4_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_4').value = value;
}

function _C_브라켓35mm_5_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_5').value = value;
}

function _C_브라켓35mm_6_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_6').value = value;
}

function _C_브라켓35mm_7_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_7').value = value;
}

function _C_브라켓35mm_8_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_브라켓35mm_8').value = value;
}

function _C_접지_콤보박스(e) {
	const value = e.value;

	document.getElementById('_C_접지').value = value;
}

function _D_HV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_HV').value = value;
}

function _D_LV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_LV').value = value;
}

function _D_H_T_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_H_T').value = value;
}

function _D_S_PLUG_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_S_PLUG').value = value;
}

function _D_아이볼트1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_아이볼트1').value = value;
}

function _D_아이볼트2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_아이볼트2').value = value;
}

function _D_아이볼트3_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_아이볼트3').value = value;
}

function _D_아이볼트4_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_아이볼트4').value = value;
}

function _D_접지1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_접지1').value = value;
}

function _D_접지2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_D_접지2').value = value;
}

function _E_HV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_E_HV').value = value;
}

function _E_LV_콤보박스(e) {
	const value = e.value;

	document.getElementById('_E_LV').value = value;
}

function _E_아이볼트1_콤보박스(e) {
	const value = e.value;

	document.getElementById('_E_아이볼트1').value = value;
}

function _E_아이볼트2_콤보박스(e) {
	const value = e.value;

	document.getElementById('_E_아이볼트2').value = value;
}

function _E_아이볼트3_콤보박스(e) {
	const value = e.value;

	document.getElementById('_E_아이볼트3').value = value;
}

function _E_아이볼트4_콤보박스(e) {
	const value = e.value;

	document.getElementById('_E_아이볼트4').value = value;
}

function _E_접지_콤보박스(e) {
	const value = e.value;

	document.getElementById('_E_접지').value = value;
}

function _용량평가_콤보박스(e) {
	const value = e.value;

	document.getElementById('_용량평가').value = value;
}

function _SOC60_콤보박스(e) {
	const value = e.value;

	document.getElementById('_SOC60').value = value;
}

function _DCIR_콤보박스(e) {
	const value = e.value;

	document.getElementById('_DCIR').value = value;
}

function _릴레이동시구동_콤보박스(e) {
	const value = e.value;

	document.getElementById('_릴레이동시구동').value = value;
}

function _케이스_콤보박스(e) {
	const value = e.value;

	document.getElementById('_케이스').value = value;
}

function _냉각유로_콤보박스(e) {
	const value = e.value;

	document.getElementById('_냉각유로').value = value;
}

function _접지Plus_콤보박스(e) {
	const value = e.value;

	document.getElementById('_접지Plus').value = value;
}

function _접지Minus_콤보박스(e) {
	const value = e.value;

	document.getElementById('_접지Minus').value = value;
}

function _DTC_콤보박스(e) {
	const value = e.value;

	document.getElementById('_DTC').value = value;
}

function _BSA전압_콤보박스(e) {
	const value = e.value;

	document.getElementById('_BSA전압').value = value;
}

function _셀전압편차_콤보박스(e) {
	const value = e.value;

	document.getElementById('_셀전압편차').value = value;
}

function _BMS고장NO_콤보박스(e) {
	const value = e.value;

	document.getElementById('_BMS고장NO').value = value;
}

function _BMS융착NO_콤보박스(e) {
	const value = e.value;

	document.getElementById('_BMS융착NO').value = value;
}

function _절연저항_콤보박스(e) {
	const value = e.value;

	document.getElementById('_절연저항').value = value;
}

function _배터리온도_콤보박스(e) {
	const value = e.value;

	document.getElementById('_배터리온도').value = value;
}

function _SOH_콤보박스(e) {
	const value = e.value;

	document.getElementById('_SOH').value = value;
}

function _릴레이_강제구동_콤보박스(e) {
	const value = e.value;

	document.getElementById('_릴레이_강제구동').value = value;
}

function _커넥터_체결검사_콤보박스(e) {
	const value = e.value;

	document.getElementById('_커넥터_체결검사').value = value;
}

function _통신화면_캡쳐_콤보박스(e) {
	const value = e.value;

	document.getElementById('_통신화면_캡쳐').value = value;
}
