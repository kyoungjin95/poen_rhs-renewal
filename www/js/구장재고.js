async function 구장재고_시작() {
	while (typeof _비고 == 'undefined') {
		await sleep(DELAY);
	}
	flag_구장재고 = false;

	구장재고_조회(false);
}

function 구장재고_관리번호_조회() {
	구장재고_조회(false);
}

function 구장재고_재제조번호_조회() {
	구장재고_조회(true);
	console.log('재제조 조회');
}

async function 구장재고_조회(is재제조 = false) {
	var flag_empty = false;
	if (is재제조 == false) {
		_management_id.value = _management_id.value.trim().toUpperCase();
		if (_management_id.value == '조회를 누르세요') _management_id.value = 관리번호;
		if (_management_id.value.length == 0) return;
		관리번호 = _management_id.value.trim().toUpperCase();
		console.log('관리번호:', 관리번호);

		findOne_구장재고(구장재고, { 관리번호: _management_id.value });
		await delay();

		if (구장재고_v == null) flag_empty = true;
	} else {
		_재제조번호.value = _재제조번호.value.trim();
		if (_재제조번호.value.length == 0) return;

		findOne_구장재고(구장재고, { 재제조번호: _재제조번호.value });
		await delay();

		if (구장재고_v == null) flag_empty = true;
	}

	if (flag_empty == false) {
		_management_id.value = 구장재고_v.관리번호;
		_재제조번호.value = 구장재고_v.재제조번호;
		_입고일.value = 구장재고_v.입고일;
		_입고처.value = 구장재고_v.입고처;
		_RO번호.value = 구장재고_v.RO번호;
		_부품번호.value = 구장재고_v.부품번호;
		_생산연도.value = 구장재고_v.생산연도.value;
		_ROM_ID.value = 구장재고_v.ROM_ID;
		_보관위치.value = select_pos;
		_제조완료.value = 구장재고_v.제조완료;
		_출고일.value = 구장재고_v.출고일;
		_출고처.value = 구장재고_v.출고처;
		_비고.value = 구장재고_v.비고;
	} else {
		if (is재제조 == false) _재제조번호.value = '';
		else _management_id.value = '';

		_입고일.value = '';
		_입고처.value = '';
		_RO번호.value = '';
		_부품번호.value = '';
		_생산연도.value = '0000-00-00T00:00:00';
		_ROM_ID.value = '';
		_보관위치.value = select_pos;
		_제조완료.value = '';
		_출고일.value = '0000-00-00T00:00:00';
		_출고처.value = '';
		_비고.value = '';
	}
}

async function 구장재고_save() {
	if (_management_id.value.length == 0) return;

	var doc = 구장재고_doc;
	doc.관리번호 = _management_id.value.trim().toUpperCase();
	doc.재제조번호 = _재제조번호.value;
	doc.입고일 = _입고일.value;
	doc.입고처 = _입고처.value;
	doc.RO번호 = _RO번호.value;
	doc.부품번호 = _부품번호.value;
	doc.생산연도 = _생산연도.value;
	doc.ROM_ID = _ROM_ID.value;
	doc.보관위치 = _보관위치.value;
	doc.제조완료 = _제조완료.value;
	doc.출고일 = _출고일.value;
	doc.출고처 = _출고처.value;
	doc.비고 = _비고.value;

	update(구장재고, doc);
	await delay();

	if (update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if (insert_count > 0) {
		alert('신규 항목이 저장 되었습니다');
	}
}
