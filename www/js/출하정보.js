let 청결상태 = '';
let 포장랩 = '';
let 출하QR = '';
let HKMC_스티커 = '';
let 커넥터커버 = '';
let 브라켓 = '';
let S_PLUG = '';
let 접지 = '';

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


	find(BSA재제조, _management_id.value );
	await delay();

	_차종.value = find_array[0].차종;
	_품번.value = find_array[0].품번;
	_RO_no.value = find_array[0].RO_no;

	if(_차종.value != '') {
		let 브라켓 = document.getElementById('브라켓');
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
				브라켓.innerHTML = '브라켓 4개';
				break;

			case 'PU':
			case 'PU_EV':
			case 'HR':
			case 'HR_EV':
				브라켓.innerHTML = '브라켓 3개';
				break;

			case 'CV':
			case 'CV_EV':
			case 'NE':
			case 'NE_EV':
				브라켓.innerHTML = '브라켓 9개( 55mm : 1개, 35mm : 8개 )';
				break;

			case 'LK':
			case 'LK_EV':
				브라켓.innerHTML = '아이볼트 4개';
				break;

			case 'LM':
			case 'LM_EV':
				브라켓.innerHTML = '아이볼트 4개';
				break;
			
			case 'CS':
			case 'CS_EV':
				브라켓.innerHTML = 'M1,S2/브라켓 4개/S1/브라켓 1개';
				s_plug_show.disabled = true;
				s_plug_show_비고.disabled = true;

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
		console.log('관리번호:', 관리번호);

		
		find(출하정보, _management_id.value);
		await delay();
		console.log(find_array);

		_출하코드.value = find_array[0].출하코드;
		_납품처.value = find_array[0].납품처;
		_출하일.value = find_array[0].출하일;
		_검사일.value = find_array[0].검사일;
		_기초보고서_작성확인.value = find_array[0].기초보고서_작성확인;
		_완료보고서_작성확인.value = find_array[0].완료보고서_작성확인;
		_클린상태.value = find_array[0].클린상태;
		_팔레트_적정위치.value = find_array[0].팔레트_적정위치;
		_포장랩상태.value = find_array[0].포장랩상태;
		_UPR_QR.value = find_array[0].UPR_QR;
		_LWR_QR.value = find_array[0].LWR_QR;
		_HKMC_스티커_URP.value = find_array[0].HKMC_스티커_URP;
		_냉각유로_커버1.value = find_array[0].냉각유로_커버1;
		_냉각유로_커버2.value = find_array[0].냉각유로_커버2;

		청결상태 = find_array[0].청결상태;
		if(청결상태 == 'OK') {
			_청결상태.options[1].selected = true;
		} else if(청결상태 == 'NG') {
			_청결상태.options[2].selected = true;
		} else {
			_청결상태.options[0].selected = true;
		}
		_청결상태_비고.value = find_array[0].청결상태_비고;

		포장랩 = find_array[0].포장랩;
		if(포장랩 == 'OK') {
			_포장랩.options[1].selected = true;
		} else if(포장랩 == 'NG') {
			_포장랩.options[2].selected = true;
		} else {
			_포장랩.options[0].selected = true;
		}
		_포장랩_비고.value = find_array[0].포장랩_비고;

		출하QR = find_array[0].출하QR;
		if(출하QR == 'OK') {
			_출하QR.options[1].selected = true;
		} else if(출하QR == 'NG') {
			_출하QR.options[2].selected = true;
		} else {
			_출하QR.options[0].selected = true;
		}
		_출하QR_비고.value = find_array[0].출하QR_비고;

		HKMC_스티커 = find_array[0].HKMC_스티커;
		if(HKMC_스티커 == 'OK') {
			_HKMC_스티커.options[1].selected = true;
		} else if(HKMC_스티커 == 'NG') {
			_HKMC_스티커.options[2].selected = true;
		} else {
			_HKMC_스티커.options[0].selected = true;
		}
		_HKMC_스티커_비고.value = find_array[0].HKMC_스티커_비고;

		커넥터커버 = find_array[0].커넥터커버;
		if(커넥터커버 == 'OK') {
			_커넥터커버.options[1].selected = true;
		} else if(커넥터커버 == 'NG') {
			_커넥터커버.options[2].selected = true;
		} else {
			_커넥터커버.options[0].selected = true;
		}
		_커넥터커버_비고.value = find_array[0].커넥터커버_비고;

		브라켓 = find_array[0].브라켓;
		if(브라켓 == 'OK') {
			_브라켓.options[1].selected = true;
		} else if(브라켓 == 'NG') {
			_브라켓.options[2].selected = true;
		} else {
			_브라켓.options[0].selected = true;
		}
		_브라켓_비고.value = find_array[0].브라켓_비고;

		S_PLUG = find_array[0].S_PLUG;
		if(S_PLUG == 'OK') {
			_S_PLUG.options[1].selected = true;
		} else if(S_PLUG == 'NG') {
			_S_PLUG.options[2].selected = true;
		} else {
			_S_PLUG.options[0].selected = true;
		}
		_S_PLUG_비고.value = find_array[0].S_PLUG_비고;

		접지 = find_array[0].접지;
		if(접지 == 'OK') {
			_접지.options[1].selected = true;
		} else if(접지 == 'NG') {
			_접지.options[2].selected = true;
		} else {
			_접지.options[0].selected = true;
		}
		_접지_비고.value = find_array[0].접지_비고;

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
		
		포장랩 = '';
		_포장랩.options[0].selected = true;
		_포장랩_비고.value = '';
		출하QR = '';
		_출하QR.options[0].selected = true;
		_출하QR_비고.value = '';
		HKMC_스티커 = '';
		_HKMC_스티커.options[0].selected = true;
		_HKMC_스티커_비고.value = '';
		커넥터커버 = '';
		_커넥터커버.options[0].selected = true; 
		_커넥터커버_비고.value = '';
		브라켓 = '';
		_브라켓.options[0].selected = true; 
		_브라켓_비고.value = '';
		S_PLUG = '';
		_S_PLUG.options[0].selected = true; 
		_S_PLUG_비고.value = '';
		접지 = '';
		_접지.options[0].selected = true;
		_접지_비고.value = '';
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
	doc.검사자 = _검사자.value;
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
	doc.청결상태 = 청결상태;
	doc.청결상태_비고 = _청결상태_비고.value;
	doc.포장랩 = 포장랩;
	doc.포장랩_비고 = _포장랩_비고.value;
	doc.출하QR = 출하QR;
	doc.출하QR_비고 = _출하QR_비고.value;
	doc.HKMC_스티커 = HKMC_스티커;
	doc.HKMC_스티커_비고 = _HKMC_스티커_비고.value;
	doc.커넥터커버 = 커넥터커버;
	doc.커넥터커버_비고 = _커넥터커버_비고.value;
	doc.브라켓 = 브라켓;
	doc.브라켓_비고 = _브라켓_비고.value;
	doc.S_PLUG = S_PLUG;
	doc.S_PLUG_비고 = _S_PLUG_비고.value;
	doc.접지 = 접지;
	doc.접지_비고 = _접지_비고.value;
	
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

function _청결상태_콤보박스(e) {
	const value = e.value;
	
	청결상태 = value;
}

function _포장랩_콤보박스(e) {
	const value = e.value;

	포장랩 = value;
}

function _출하QR_콤보박스(e) {
	const value = e.value;

	출하QR = value;
}

function _HKMC_스티커_콤보박스(e) {
	const value = e.value;

	HKMC_스티커 = e.value;
}

function _커넥터커버_콤보박스(e) {
	const value = e.value;

	커넥터커버 = value;
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
