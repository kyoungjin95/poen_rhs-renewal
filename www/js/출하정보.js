async function 출하정보_managementID() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	_management_id.value =  관리번호;

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id.value == 'none') return;

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

	count(출하정보, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(출하정보, _management_id.value);
		await delay();
		
		_출하코드.value = find_array[0].출하코드;
		_납품처.value = find_array[0].납품처;
		_출하일.value = find_array[0].출하일;
	} else {
		_출하코드.value = '';
		_납품처.value = '';
		_출하일.value = '0000-00-00';
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
	doc.HKMC스티커_URP = _HKMC스티커_URP.value; 
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
	doc.D_5_PLUG = _D_5_PLUG.value; 
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
	doc.릴레이동시구동 = _릴레이동시구동.value; 
	doc.케이스 = _케이스.value; 
	doc.냉각유로 = _냉각유로.value;
	doc.접지Plus = _접지Plus.value; 
	doc.접지Minus = _접지Minus.value; 
	doc.DTC = _DTC.value; 
	doc.DTC_현재 = _DTC_현재.value; 
	doc.DTC_과거 = _DTC_과거.value; 
	doc.BSA전압 = _BSA전압.value; 
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
	doc.HKMC스티커_URP = _HKMC스티커_URP.value; 
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
	doc.D_5_PLUG = _D_5_PLUG.value; 
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
	doc.릴레이동시구동 = _릴레이동시구동.value; 
	doc.케이스 = _케이스.value; 
	doc.냉각유로 = _냉각유로.value;
	doc.접지Plus = _접지Plus.value; 
	doc.접지Minus = _접지Minus.value; 
	doc.DTC = _DTC.value;
	doc.DTC_현재 = _DTC_현재.value; 
	doc.DTC_과거 = _DTC_과거.value; 
	doc.BSA전압 = _BSA전압.value; 
	doc.셀전압편차 = _셀전압편차.value; 
	doc.셀전압편차_측정값 = _셀전압편차_측정값.value;
	doc.BMS고장NO = _BMS고장NO.value;
	doc.BMS융착NO = _BMS융착NO.value
	doc.절연저항 = _절연저항.value;
	doc.절연저항_측정값 = _절연저항_측정값.value; 
	doc.배터리온도 = _배터리온도.value;
	doc.배터리온도_최대 = _배터리온도_최대.value;
	doc.배터리온도_최소 = _배터리온도_최소.value;
	doc.SOH = _SOH.value;
	doc.릴레이_강제구동 = _릴레이_강제구동.value
	doc.커넥터_체결검사 = _커넥터_체결검사.value;
	doc.통신화면_캡쳐 = _통신화면_캡쳐.value;
	
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
}
