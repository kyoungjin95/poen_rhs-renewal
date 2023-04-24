var pre_관리번호 = '';
async function 상세입력_시작() {
	await sleep(100);

	flag_상세입력 = false;
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	if(_management_id.value.length == 0 && 관리번호 != '' && 관리번호.indexOf('none') == -1) {
		_management_id.value = 관리번호;
	}

	if(pre_관리번호 != '' && pre_관리번호 == _management_id.value) return;

	console.log('load: ', _management_id.value);
	if(_management_id.value.length == 0) return;
	if(_management_id.value == '' | _management_id == 'none') return;
	
	관리번호 = _management_id.value;

	count(BSA재제조, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		관리번호 = _management_id.value;
		pre_관리번호 = 관리번호;
		sessionStorage.setItem('manage_id', 관리번호);
		find(BSA재제조, _management_id.value);
		await delay();
		_재제조번호.value = find_array[0].재제조번호;
		//_차종.value = find_array[0].차종;
		//_품번.value = find_array[0].품번;
		//_RO_no.value = find_array[0].RO_no;
		_공정단계.value = find_array[0].공정단계;
		_적재No.value = find_array[0].적재No;
		_입고.value = find_array[0].입고;
		_제조투입.value = find_array[0].제조투입;
		_세척.value = find_array[0].세척;
		_기초검사.value = find_array[0].기초검사;
		_분해조립.value = find_array[0].분해조립;
		_성능검사.value = find_array[0].성능검사;
		_EOL.value = find_array[0].EOL;
		_출하.value = find_array[0].출하;
		_소재지.value = find_array[0].소재지;
		_마지막충전일.value = find_array[0].마지막충전일;

		count(입고, { 관리번호 : _management_id.value });
		await delay();
		if(doc_count >= 1) {
			find(입고, _management_id.value);
			await delay();
			
			_차종.value = find_array[0].차종;
			_품번.value = find_array[0].품번;
			_RO_no.value = find_array[0].RO_no;
			_입고.value = find_array[0].입고일;
			if(_입고.value != '' && _입고.value != 'none') {
				_공정단계.value = '입고';
			}
		}

		await sleep(DELAY);

		count(세척, { 관리번호 : _management_id.value });
		await delay();
		console.log('doc_count: ', doc_count);
		if(doc_count >= 1) {
			find(세척, _management_id.value);
			await delay();
			
			_세척.value = find_array[0].공정완료일;
			if(_세척.value != '' && _세척.value != 'none' && _세척.value != '0000-00-00T00:00') {
				_공정단계.value = '기초검사';
			} else {
				_공정단계.value = '세척';
			}
		}
		await sleep(DELAY);

		count(기초검사, { 관리번호 : _management_id.value });
		await delay();
		console.log('doc_count: ', doc_count);
		if(doc_count >= 1) {
			find(기초검사, _management_id.value);
			await delay();
			
			_기초검사.value = find_array[0].완료일;
			if(_기초검사.value != '' && _기초검사.value != 'none' && _기초검사.value != '0000-00-00T00:00') {
				_공정단계.value = '분해조립';
			} else {
				_공정단계.value = '기초검사';
			}
		}
		await sleep(DELAY);

		count(분해조립, { 관리번호 : _management_id.value });
		await delay();
		console.log('doc_count: ', doc_count);
		if(doc_count >= 1) {
			find(분해조립, _management_id.value);
			await delay();
			
			_분해조립.value = find_array[0].완료일;
			if(_분해조립.value != '' && _분해조립.value != 'none' && _분해조립.value != '0000-00-00T00:00') {
				_공정단계.value = '성능검사';
			} else {
				_공정단계.value = '분해조립';
			}
		}
		await sleep(DELAY);

		count(성능검사, { 관리번호 : _management_id.value });
		await delay();
		console.log('doc_count: ', doc_count);
		if(doc_count >= 1) {
			find(성능검사, _management_id.value);
			await delay();
			
			_성능검사.value = find_array[0].완료일;
			if(_성능검사.value != '' && _성능검사.value != 'none' && _성능검사.value != '0000-00-00T00:00') {
				_공정단계.value = 'EOL';
			} else {
				_공정단계.value = '성능검사';
			}
		}
		await sleep(DELAY);

		count(EOL, { 관리번호 : _management_id.value });
		await delay();
		console.log('doc_count: ', doc_count);
		if(doc_count >= 1) {
			find(EOL, _management_id.value);
			await delay();
			
			_EOL.value = find_array[0].완료일;
			if(_EOL.value != '' || _EOL.value != 'none' && _EOL.value != '0000-00-00T00:00') {
				_공정단계.value = '제조완료';
			} else {
				_공정단계.value = 'EOL';
			}
		}
		await sleep(DELAY);

		count(출하정보, { 관리번호 : _management_id.value });
		await delay();
		console.log('doc_count: ', doc_count);
		if(doc_count >= 1) {
			find(출하정보, _management_id.value);
			await delay();
			
			_출하.value = find_array[0].출하일;
			_공정단계.value = '출하';
		}
		await sleep(DELAY);
		item_detail_save(true);
	} else {
		_제재조번호.value = '';
		_차종.value = '';
		_품번.value = '';
		_RO_no.value = '';
		_공정단계.value = '';
		_적재No.value = '';
		_입고.value = '0000-00-00T00:00';
		_제조투입.value = '0000-00-00T00:00';
		_세척.value = '0000-00-00T00:00';
		_기초검사.value = '0000-00-00T00:00';
		_분해조립.value = '0000-00-00T00:00';
		_성능검사.value = '0000-00-00T00:00';;
		_EOL.value = '0000-00-00T00:00';
		_출하.value = '0000-00-00T00:00';;
		_소재지.value = '';
		_마지막충전일.value = '0000-00-00T00:00';
	}
}

async function item_detail_save(flag_result = false) {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	관리번호 = _management_id.value;
	
	var doc = BSA재제조_doc;
	doc.관리번호 = _management_id.value;
	doc.재제조번호 = _재제조번호.value;
	doc.차종 = _차종.value;
	doc.품번 = _품번.value;
	doc.RO_no = _RO_no.value;
	doc.공정단계 = _공정단계.value;
	doc.적재No = _적재No.value;
	doc.입고 = _입고.value;
	doc.제조투입 = _제조투입.value;
	doc.세척 = _세척.value;
	doc.기초검사 = _기초검사.value;
	doc.분해조립 = _분해조립.value;
	doc.성능검사 = _성능검사.value;
	doc.EOL = _EOL.value;
	doc.출하 = _출하.value;
	doc.소재지 = _소재지.value;
	doc.마지막충전일 = _마지막충전일.value;
	
	update(BSA재제조, doc);
	await sleep(DELAY);
	
	console.log(update_count);
	console.log(insert_count);

	if(flag_result == false) {
		if(update_count > 0) {
			alert('업데이트 되었습니다');
		}

		if(insert_count > 0) {
			alert('저장 되었습니다');
		}
	}
}

async function processStep() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	pre_관리번호 = '';

	var step = _공정단계.value;

	switch(step) {
		case '입고' :
			loadPage('입고.html');
			break;

		case '제조투입' :
			break;

		case '세척' :
			loadPage('세척.html');
			break;

		case '기초검사' :
			loadPage('기초검사.html');
			break;

		case '분해조립' :
			loadPage('분해조립.html');
			break;

		case '성능검사' :
			loadPage('성능검사.html');
			break;

		case 'EOL' :
			loadPage('EOL.html');
			break;

		case '제조완료' :
			break;

		case '출하' :
			loadPage('출하정보.html');
			break;

		default:
			alert('잘못된 공정명입니다');
			break;
	}
}

function func_부품정보등록() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	loadPage('부품정보.html');
}

function func_교체부품상세() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;

	loadPage('교체부품상세.html');
}

function func_특이사항() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	loadPage('특이사항.html');
}

function 공정입력_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_공정단계').value = value;
}

function 교체부품상세_콤보박스(e) {
	const value = e.value;

  	교체부품상세No = value;
}
