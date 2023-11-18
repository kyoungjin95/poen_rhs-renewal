let 브라켓 = '';
let S_PLUG = '';
let 접지 = '';

async function 출하정보_시작(is재제조 = false) {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	flag_출하 =  false;

	if(_management_id.value == '조회 버튼을 누르세요') _management_id.value =  관리번호;

	if(_management_id.value.length == 0 && _재제조번호.value.length == 0) return;

	_검사자.value = worker;

	if(is재제조 == false) {
		count(BSA재제조, { 관리번호 : _management_id.value });
		await delay();

		if(BSA재제조_cnt > 0) {
			find(BSA재제조, _management_id.value );
			await delay();
		
			_재제조번호.value = BSA재제조_v.재제조번호;
		}
	} else {
		count(BSA재제조, { 재제조번호 : _재제조번호.value });
		await delay();

		if(BSA재제조_cnt > 0) {
			find_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
			await delay();

			_management_id.value = BSA재제조_v.관리번호;
		} else {
			_management_id.value = '찾지 못하였습니다';
		}
	}

	count(입고, { 관리번호 : _management_id.value });
	await delay();

	if(입고_cnt > 0) {
		find(입고, _management_id.value);
		await delay();

		_차종.value = 입고_v.차종;
		_품번.value = 입고_v.품번;
		_RO_no.value = 입고_v.RO_no;
	} else {
		_차종.value = '';
		_품번.value = '';
		_RO_no.value = '';
	}

	if(_차종.value == '') {
		_차종.value = prompt('차종을 입력하세요.(예: LK_EV)');
	}

	let 브라켓_text = document.getElementById('_브라켓');
	let s_plug_show = document.getElementById('_S_PLUG');
	let s_plug_show_비고 = document.getElementById('_S_PLUG_비고');
	s_plug_show.disabled = false;
	s_plug_show_비고.disabled = false;

	switch(_차종.value) {
		case 'DE':
		case 'DE_EV':
		case 'OS':
		case 'OS_EV':
		case 'SK3':
		case 'SK3_EV':
			브라켓_text.innerHTML = '브라켓 4개';
			break;

		case 'PU':
		case 'PU_EV':
		case 'HR':
		case 'HR_EV':
			브라켓_text.innerHTML = '브라켓 3개';
			s_plug_show.disabled = true;
			s_plug_show_비고.disabled = true;
			break;

		case 'CV':
		case 'CV_EV':
		case 'NE':
		case 'NE_EV':
			브라켓_text.innerHTML = '브라켓 9개( 55mm : 1개, 35mm : 8개 )';
			s_plug_show.disabled = true;
			s_plug_show_비고.disabled = true;
			break;

		case 'LK':
		case 'LK_EV':
			브라켓_text.innerHTML = '아이볼트 4개';
			break;

		case 'LM':
		case 'LM_EV':
			브라켓_text.innerHTML = '아이볼트 4개';
			s_plug_show.disabled = true;
			s_plug_show_비고.disabled = true;
			break;

		case 'CS':
		case 'CS_EV':
			브라켓_text.innerHTML = 'M1,S2/브라켓 4개/S1/브라켓 1개';
			s_plug_show.disabled = true;
			s_plug_show_비고.disabled = true;

			break;
		default:
			alert('차종 정보를 확인해주세요');
			break;
	} 

	count(출하정보, { 관리번호 : _management_id.value });
	await delay();
	if(출하정보_cnt > 0) {
		console.log('관리번호:', 관리번호);

		find(출하정보, _management_id.value);
		await delay();

		_management_id.value = 출하정보_v.관리번호;
		//_출하일.value = 출하정보_v.출하일;
		_출하코드.value = 출하정보_v.출하코드;
		//_납품처.value = 출하정보_v.납품처;
		_검사일.value = 출하정보_v.검사일;
		if(_검사자.value == '') _검사자.value = 출하정보_v.검사자;
		_기초보고서_작성확인.value = 출하정보_v.기초보고서_작성확인;
		_완료보고서_작성확인.value = 출하정보_v.완료보고서_작성확인;
		_클린상태.value =  출하정보_v.클린상태;
		_팔레트_적정위치.value = 출하정보_v.팔레트_적정위치;
		_포장랩상태.value = 출하정보_v.포장랩상태;
		_UPR_QR.value = 출하정보_v.UPR_QR;
		_LWR_QR.value = 출하정보_v.LWR_QR;
		_HKMC_스티커_URP.value = 출하정보_v.HKMC_스티커_URP;
		_냉각유로_커버.value = 출하정보_v.냉각유로_커버;
		//_브라켓.value = 출하정보_v.브라켓;
		_브라켓_비고 .value = 출하정보_v.브라켓_비고;
		//_S_PLUG .value = 출하정보_v.S_PLUG;
		_S_PLUG_비고 .value = 출하정보_v.S_PLUG_비고;
		//_접지 .value = 출하정보_v.접지;
		_접지_비고 .value = 출하정보_v.접지_비고
		_DTC.value = 출하정보_v.DTC;
		_DTC_현재.value = 출하정보_v.DTC_현재;
		_DTC_과거.value = 출하정보_v.DTC_과거;
		_배터리충전상태.value = 출하정보_v.배터리충전상태;
		_배터리충전상태_측정값.value = 출하정보_v.배터리충전상태_측정값;
		_BMS고장NO.value = 출하정보_v.BMS고장NO;
		_BMS융착NO.value = 출하정보_v.BMS융착NO;
		_배터리팩전압.value = 출하정보_v.배터리팩전압;
		_배터리팩_측정값.value = 출하정보_v.배터리팩_측정값;
		_배터리모듈온도.value = 출하정보_v.배터리모듈온도;
		_배터리모듈온도_최대.value = 출하정보_v.배터리모듈온도_최대;
		_배터리모듈온도_최소:1, 출하정보_v.배터리모듈온도_최소;
		_배터리셀전압.value = 출하정보_v.배터리셀전압;
		_배터리셀전압_최대.value = 출하정보_v.배터리셀전압_최대;
		_배터리셀전압_최소.value = 출하정보_v.배터리셀전압_최소;
		_셀전압편차.value = 출하정보_v.셀전압편차;
		_셀전압편차_측정값.value = 출하정보_v.셀전압편차_측정값;
		_절연저항.value = 출하정보_v.절연저항;
		_절연저항_측정값.value = 출하정보_v.절연저항_측정값;
		_SOH.value = 출하정보_v.SOH;
		_릴레이_강제구동.value = 출하정보_v.릴레이_강제구동;
		_커넥터_체결검사.value = 출하정보_v.커넥터_체결검사;
		
		브라켓 = 출하정보_v.브라켓;
		S_PLUG = 출하정보_v.S_PLUG;
		접지 = 출하정보_v.접지;
		
		if(String(_출하코드.value).trim() == '') {
			count(EOL, { 관리번호 : _management_id.value });
			await delay();
			if(EOL_cnt > 0) {
				find(EOL, _management_id.value);
				await delay();

				_출하코드.value = EOL_v.QR;
			}
		}

		if(브라켓 == 'OK') {
			_bracket.options[1].selected = true;
		} else if(브라켓 == 'NG') {
			_bracket.options[2].selected = true;
		} else {
			_bracket.options.selected = true;
		}

		if(S_PLUG == 'OK') {
			_S_PLUG.options[1].selected = true;
		} else if(S_PLUG == 'NG') {
			_S_PLUG.options[2].selected = true;
		} else {
			_S_PLUG.options.selected = true;
		}

		if(접지 == 'OK') {
			_접지.options[1].selected = true;
		} else if(접지 == 'NG') {
			_접지.options[2].selected = true;
		} else {
			_접지.options.selected = true;
		}
	} else {
		if(is재제조 == false) {
			_management_id = document.getElementById('_management_id');
		} else {
			_재제조번호 = document.getElementById('_재제조번호');
		}
		_출하코드.value = '';
		//_출하일.value = '0000-00-00T00:00:00';
		//_납품처.value = '';
		_검사일.value = '0000-00-00T00:00:00';
		//_검사자.value = '';
		_기초보고서_작성확인.value = '';
		_완료보고서_작성확인.value = '';
		_클린상태.value = '';
		_팔레트_적정위치.value = '';
		_포장랩상태.value = '';
		_UPR_QR.value = '';
		_LWR_QR.value = '';
		_HKMC_스티커_URP.value = '';
		_냉각유로_커버.value = '';
		_브라켓_비고.value = '';
		_S_PLUG_비고.value = '';
		_접지_비고.value = '';
		_DTC.value = '';
		_DTC_현재.value = '';
		_DTC_과거.value = '';
		_배터리충전상태.value = '';
		_배터리충전상태_측정값.value = '';
		_BMS고장NO.value = '';
		_BMS융착NO.value = '';
		_배터리팩전압.value = '';
		_배터리팩_측정값.value = '';
		_배터리모듈온도.value = '';
		_배터리모듈온도_최대.value = '';
		_배터리모듈온도_최소.value = '';
		_배터리셀전압.value = '';
		_배터리셀전압_최대.value = '';
		_배터리셀전압_최소.value = '';
		_셀전압편차.value = '';
		_셀전압편차_측정값.value = '';
		_절연저항.value = '';
		_절연저항_측정값.value = '';
		_SOH.value = '';
		_릴레이_강제구동.value = '';
		_커넥터_체결검사.value = '';

		_bracket.options.selected = true;
		_S_PLUG.options.selected = true;
		_접지.options.selected = true;
	}
}

async function 출하정보_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	count(BSA재제조, { 관리번호 : _management_id.value });
	await delay();

	if(BSA재제조_cnt == 0) {
		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호 = _management_id.value;
		_doc.출하검사 = _검사일.value.substr(0, 16);

		update(BSA재제조, _doc);
		await delay();
	} else {
		var _doc = {
			관리번호 : _management_id.value,
			출하검사 : _검사일.value.substr(0, 16)
		}
		update(BSA재제조, _doc);
		await delay();
	}

	await 공정단계자동입력(_management_id.value);

	console.log(update_count);
	console.log(insert_count);

	var doc = JSON.parse(JSON.stringify(출하정보_doc));
	
	doc.관리번호 = _management_id.value;
	//doc.출하일 = _출하일.value;
	doc.출하코드 = _출하코드.value;
	//doc.납품처 = _납품처.value;
	doc.검사일 = _검사일.value;
	doc.검사자 = _검사자.value;
	doc.기초보고서_작성확인 = _기초보고서_작성확인.value;
        doc.완료보고서_작성확인 = _완료보고서_작성확인.value;
        doc.클린상태 =  _클린상태.value;
        doc.팔레트_적정위치 = _팔레트_적정위치.value;
        doc.포장랩상태 = _포장랩상태.value;
        doc.UPR_QR = _UPR_QR.value;
        doc.LWR_QR = _LWR_QR.value;
        doc.HKMC_스티커_URP = _HKMC_스티커_URP.value;
        doc.냉각유로_커버 = _냉각유로_커버.value;
	doc.브라켓 = 브라켓;
	doc.브라켓_비고 = _브라켓_비고.value;
	doc.S_PLUG = S_PLUG;
	doc.S_PLUG_비고  = _S_PLUG_비고.value;
	doc.접지 = 접지;
	doc.접지_비고 = _접지_비고.value;
        doc.DTC = _DTC.value;
        doc.DTC_현재 = _DTC_현재.value;
        doc.DTC_과거 = _DTC_과거.value;
	doc.배터리충전상태 = _배터리충전상태.value;
	doc.배터리충전상태_측정값 = _배터리충전상태_측정값.value;
        doc.BMS고장NO = _BMS고장NO.value;
        doc.BMS융착NO = _BMS융착NO.value;
	doc.배터리팩전압 = _배터리팩전압.value;
	doc.배터리팩_측정값 = _배터리팩_측정값.value; 
        doc.배터리모듈온도 = _배터리모듈온도.value; 
        doc.배터리모듈온도_최대 = _배터리모듈온도_최대.value;
        doc.배터리모듈온도_최소 = _배터리모듈온도_최소.value;
	doc.배터리셀전압 = _배터리셀전압.value;
	doc.배터리셀전압_최대 = _배터리셀전압_최대.value;
	doc.배터리셀전압_최소 = _배터리셀전압_최소.value;
        doc.셀전압편차 = _셀전압편차.value;
        doc.셀전압편차_측정값 = _셀전압편차_측정값.value;
        doc.절연저항 = _절연저항.value;
        doc.절연저항_측정값 = _절연저항_측정값.value;
        doc.SOH = _SOH.value;
        doc.릴레이_강제구동 = _릴레이_강제구동.value; 
        doc.커넥터_체결검사 = _커넥터_체결검사.value;

	update(출하정보, doc);
	await delay();

	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	//이전페이지();
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

function _냉각유로_커버_콤보박스(e) {
	const value = e.value;

	document.getElementById('_냉각유로_커버').value = value;
}

function _브라켓_콤보박스(e) {
	const value = e.value;

	브라켓 = value;
}

function _S_PLUG_콤보박스(e) {
	const value = e.value;

	S_PLUG = value;
}

function _접지_콤보박스(e) {
	const value = e.value;

	접지 = value;
}

function _DTC_콤보박스(e) {
	const value = e.value;

	document.getElementById('_DTC').value = value;
}

function _배터리충전상태_콤보박스(e) {
	const value = e.value;

	document.getElementById('_배터리충전상태').value = value;
}

function _BMS고장NO_콤보박스(e) {
	const value = e.value;

	document.getElementById('_BMS고장NO').value = value;
}

function _BMS융착NO_콤보박스(e) {
	const value = e.value;

	document.getElementById('_BMS융착NO').value = value;
}

function _배터리팩전압_콤보박스(e) {
	const value = e.value;

	document.getElementById('_배터리팩전압').value = value;
}

function _배터리모듈온도_콤보박스(e) {
	const value = e.value;

	document.getElementById('_배터리모듈온도').value = value;
}

function _배터리셀전압_콤보박스(e) {
	const value = e.value;

	document.getElementById('_배터리셀전압').value = value;
}


function _셀전압편차_콤보박스(e) {
	const value = e.value;

	document.getElementById('_셀전압편차').value = value;
}

function _절연저항_콤보박스(e) {
	const value = e.value;

	document.getElementById('_절연저항').value = value;
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
