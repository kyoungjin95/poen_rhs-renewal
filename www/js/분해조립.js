var 신품_docs = [];
var 고품_docs = [];
var BMU_count = 1;
var CMU_count = 1;
var PRA_count = 1;
var SPA_count = 1;
var LWR_C_count = 1;
var UPR_C_count = 1;
var PBE_count = 1;
var Gasket_count = 1;
var Relay_count = 1;
var HV_CNTR_count = 1;
var Heating_CNTR_count = 1;
var FuseBox_count = 1;
var LV_W_H_count = 1;
var HV_W_H_count = 1;
var 온도센서_count = 1;
var Busbars_count = 1;
var BMA_count = 1;

async function 분해조립_재제조번호_시작() {
	분해조립_시작(true);
}

async function 분해조립_시작(is재제조번호 = false) {
	//if(flag_loaded == true) return;
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	
	flag_분해조립 = false;

	flag_loaded = true;

	alert_allow = true;

	_management_id.value =  관리번호;

	count(입고, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(입고, _management_id.value);
		await delay();
		console.log('입고 data:', find_array);

		_구분.value = find_array[0].구분;
		_차종.value = find_array[0].차종;
		_품번.value = find_array[0].품번;
	}

	BMU_count = 1;
	CMU_count = 1;
	PRA_count = 1;
	SPA_count = 1;
	LWR_C_count = 1;
	UPR_C_count = 1;
	PBE_count = 1;
	Gasket_count = 1;
	Relay_count = 1;
	HV_CNTR_count = 1;
	Heating_CNTR_count = 1;
	FuseBox_count = 1;
	LV_W_H_count = 1;
	HV_W_H_count = 1;
	온도센서_count = 1;
	Busbars_count = 1;
	BMA_count = 1;

	if(is재제조번호 == true) {
		if(_재제조번호.value.length == 0) return;
		console.log('load: ', _재제조번호.value);
		if(_재제조번호.value == '' | _재제조번호.value == 'none') return;
		
		count(BSA재제조, { 재제조번호 : _재제조번호.value });
		await delay();
		console.log('재제조번호 찾기');
		if(doc_count >= 1) {
			find_query(BSA재제조, { 재제조번호: _재제조번호.value.trim() });
			await delay();
			
			console.log(find_array);
			_management_id.value = find_array[0].관리번호;
		}
	}

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id == 'none') return;

	count(BSA재제조, { 관리번호 : _management_id.value.trim() });
	await delay();
	console.log('재제조번호 찾기');
	if(doc_count >= 1) {
		find_query(BSA재제조, { 관리번호: _management_id.value.trim() });
		await delay();
		_재제조번호.value = find_array[0].재제조번호;
	}

	count(분해조립, { 관리번호 : _management_id.value });
	await delay();
	console.log('doc_count: ', doc_count);

	if(doc_count >= 1) {
		count(BSA재제조, { 관리번호 : _management_id.value });
		await delay();
		if(doc_count >= 1) {
			find_query(BSA재제조, { 관리번호: _management_id.value.trim() });
			await delay();
			
			console.log(find_array);
			_재제조번호.value = find_array[0].재제조번호;
		}
		find(분해조립, _management_id.value);
		await delay();

		var no_count = 6;
		_공정입고일.value = find_array[0].공정입고일;
		_BMU1.value = find_array[0].BMU1;
		if(find_array[0].BMU2 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU2').value = find_array[0].BMU2;}
		if(find_array[0].BMU3 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU3').value = find_array[0].BMU3;}
		if(find_array[0].BMU4 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU4').value = find_array[0].BMU4;}
		if(find_array[0].BMU5 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU5').value = find_array[0].BMU5;}
		if(find_array[0].BMU6 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU6').value = find_array[0].BMU6;}
		if(find_array[0].BMU7 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU7').value = find_array[0].BMU7;}
		if(find_array[0].BMU8 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU8').value = find_array[0].BMU8;}
		if(find_array[0].BMU9 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU9').value = find_array[0].BMU9;}
		if(find_array[0].BMU10 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU10').value = find_array[0].BMU10;}
		_CMU1.value = find_array[0].CMU1;
		no_count += BMU_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].CMU' + i + ' != \'\') ' + '{ CMU_count += 1; type_add(\'CMU\', \'CMU\', no_count, CMU_count); document.getElementById(\'_CMU' + i + '\').value = ' + 'find_array[0].CMU' + i + ';}');
		_PRA1.value = find_array[0].PRA1;
		no_count += CMU_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].PRA' + i + ' != \'\') ' + '{ PRA_count += 1; type_add(\'PRA\', \'PRA\', no_count, PRA_count); document.getElementById(\'_PRA' + i + '\').value = ' + 'find_array[0].PRA' + i + ';}');
		_SPA1.value = find_array[0].SPA1;
		no_count += PRA_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].SPA' + i + ' != \'\' && find_array[0].SPA' + i + ' != undefined) ' + '{ SPA_count += 1; type_add(\'SPA\', \'SPA\', no_count, SPA_count); document.getElementById(\'_SPA' + i + '\').value = ' + 'find_array[0].SPA' + i + ';}');
		_LWR_C1.value = find_array[0].LWR_C1;
		no_count += SPA_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].LWR_C' + i + ' != \'\') ' + '{ LWR_C_count += 1; type_add(\'LWR Cace\', \'LWR_C\', no_count, LWR_C_count); document.getElementById(\'_LWR_C' + i + '\').value = ' + 'find_array[0].LWR_C' + i + ';}');
		_UPR_C1.value = find_array[0].UPR_C1;
		no_count += LWR_C_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].UPR_C' + i + ' != \'\') ' + '{ UPR_C_count += 1; type_add(\'UPR Case\', \'UPR_C\', no_count, UPR_C_count); document.getElementById(\'_UPR_C' + i + '\').value = ' + 'find_array[0].UPR_C' + i + ';}');
		_PBE.value = find_array[0].PBE;
		_Gasket.value = find_array[0].Gasket;
		_Relay1.value = find_array[0].Relay1;
		no_count += 2 + UPR_C_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].Relay' + i + ' != \'\') ' + '{ Relay_count += 1; type_add(\'Relay\', \'Relay\', no_count, Relay_count); document.getElementById(\'_Relay' + i + '\').value = ' + 'find_array[0].Relay' + i + ';}');
		_HV_CNTR1.value = find_array[0].HV_CNTR1;
		no_count += Relay_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].HV_CNTR' + i + ' != \'\') ' + '{ HV_CNTR_count += 1; type_add(\'HV CNTR\', \'HV_CNTR\', no_count, HV_CNTR_count); document.getElementById(\'_HV_CNTR' + i + '\').value = ' + 'find_array[0].HV_CNTR' + i + ';}');
		_Heating_CNTR1.value = find_array[0].Heating_CNTR1;
		no_count += HV_CNTR_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].Heating_CNTR' + i + ' != \'\') ' + '{ Heating_CNTR_count += 1; type_add(\'Heating CNTR\', \'Heating_CNTR\', no_count, Heating_CNTR_count); document.getElementById(\'_Heating_CNTR' + i + '\').value = ' + 'find_array[0].Heating_CNTR' + i + ';}');
		_FuseBox1.value = find_array[0].FuseBox1;
		no_count += Heating_CNTR_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].FuseBox' + i + ' != \'\') ' + '{ FuseBox_count += 1; type_add(\'FuseBox\', \'FuseBox\', no_count, FuseBox_count); document.getElementById(\'_FuseBox' + i + '\').value = ' + 'find_array[0].FuseBox' + i + ';}');
		_LV_W_H1.value = find_array[0].LV_W_H1;
		no_count += FuseBox_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].LV_W_H' + i + ' != \'\') ' + '{ LV_W_H_count += 1; type_add(\'LV W/H\', \'LV_W_H\', no_count, LV_W_H_count); document.getElementById(\'_LV_W_H' + i + '\').value = ' + 'find_array[0].LV_W_H' + i + ';}');
		_HV_W_H1.value = find_array[0].HV_W_H1;
		no_count += LV_W_H_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].HV_W_H' + i + ' != \'\') ' + '{ HV_W_H_count += 1; type_add(\'HV W/H\', \'HV_W_H\', no_count, HV_W_H_count); document.getElementById(\'_HV_W_H' + i + '\').value = ' + 'find_array[0].HV_W_H' + i + ';}');
		_온도센서1.value = find_array[0].온도센서1;
		no_count += HV_W_H_count;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].온도센서' + i + ' != \'\') ' + '{ 온도센서_count += 1; type_add(\'온도센서\', \'온도센서\', no_count, 온도센서_count); document.getElementById(\'_온도센서' + i + '\').value = ' + 'find_array[0].온도센서' + i + ';}');
		_Busbars.value = find_array[0].Busbars;
		no_count += 1 + 온도센서_count;
		_BMA1.value = find_array[0].BMA1;
		for(var i = 2; i <= 10; i++) eval('if(find_array[0].BMA' + i + ' != \'\') ' + '{ BMA_count += 1; type_add(\'BMA\', \'BMA\', no_count, BMA_count); document.getElementById(\'_BMA' + i + '\').value = ' + 'find_array[0].BMA' + i + ';}');
		_ETC.value = find_array[0].ETC;
		_공정완료일.value = find_array[0].공정완료일;
		_작업자.value = find_array[0].작업자;
	} else {
		_공정입고일.value = '0000-00-00T00:00';
                _BMU1.value = '';
                _CMU1.value = '';
                _PRA1.value = '';
                _SPA1.value = '';
                _LWR_C1.value = '';
		_UPR_C1.value = '';
                _HV_CNTR1.value = '';
                _Heating_CNTR1.value = '';
                _FuseBox1.value = '';
                _LV_W_H1.value = '';
                _HV_W_H1.value = '';
                _PBE.value = '';
                _Gasket.value = '';
                _Relay1.value = '';
                _온도센서1.value = '';
                _Busbars.value = '';
                _BMA1.value = '';
                _ETC.value = '';
		_공정완료일.value = '0000-00-00T00:00';
		_작업자.value = worker;
	}

	const tbody = document.querySelector('#_tb tbody');
	tbody.addEventListener('click', function(e) {
		const cell = e.target.closest('td');
		if(!cell) return;
		const row = cell.parentElement;
		const row_index = row.rowIndex;
		const cell_index = cell.cellIndex;
		console.log('row:', row_index);
		console.log('col:', cell_index);
		if(row_index < 2 || cell_index != 2) return;
		var str = row.children[0].innerText;
		var type = str.slice(0, -2);
		var no = str.slice(-2);
		console.log('type:', type, 'no:', no);
		if(no != 1) {
			_delete_row(row_index, no, type);
		}

		if(str == 'BMU 1') {
			if(BMU_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(BMU_count >= cnt) return;

				for(var i = BMU_count; i < cnt; i++) {
					BMU_count++;
					type_add('BMU', 'BMU', row_index, BMU_count);
				}
			}
		}
		if(str == 'CMU 1') {
			if(CMU_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(CMU_count >= cnt) return;

				for(var i = CMU_count; i < cnt; i++) {
					CMU_count++;
					type_add('CMU', 'CMU', row_index, CMU_count);
				}
			}
		}
		if(str == 'PRA 1') {
			if(PRA_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(PRA_count >= cnt) return;

				for(var i = PRA_count; i < cnt; i++) {
					PRA_count++;
					type_add('PRA', 'PRA', row_index, PRA_count);
				}
			}
		}
		if(str == 'SPA 1') {
			if(SPA_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(SPA_count >= cnt) return;

				for(var i = SPA_count; i < cnt; i++) {
					SPA_count++;
					type_add('SPA', 'SPA', row_index, SPA_count);
				}
			}
		}
		if(str == 'LWR Case 1') {
			if(LWR_C_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(LWR_C_count >= cnt) return;

				for(var i = LWR_C_count; i < cnt; i++) {
					LWR_C_count++;
					type_add('LWR Case', 'LWR_C', row_index, LWR_C_count);
				}
			}
		}
		if(str == 'UPR Case 1') {
			if(UPR_C_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(UPR_C_count >= cnt) return;

				for(var i = UPR_C_count; i < cnt; i++) {
					UPR_C_count++;
					type_add('UPR Case', 'UPR_C', row_index, UPR_C_count);
				}
			}
		}
		if(str == 'Relay 1') {
			if(Relay_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(Relay_count >= cnt) return;

				for(var i = Relay_count; i < cnt; i++) {
					Relay_count++;
					type_add('Relay', 'Relay', row_index, Relay_count);
				}
			}
		}
		if(str == 'HV CNTR 1') {
			if(HV_CNTR_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(HV_CNTR_count >= cnt) return;

				for(var i = HV_CNTR_count; i < cnt; i++) {
					HV_CNTR_count++;
					type_add('HV CNTR', 'HV_CNTR', row_index, HV_CNTR_count);
				}
			}
		}
		if(str == 'Heating CNTR 1') {
			if(Heating_CNTR_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(Heating_CNTR_count >= cnt) return;

				for(var i = Heating_CNTR_count; i < cnt; i++) {
					Heating_CNTR_count++;
					type_add('Heating CNTR', 'Heating_CNTR', row_index, Heating_CNTR_count);
				}
			}
		}
		if(str == 'FuseBox 1') {
			if(FuseBox_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(FuseBox_count >= cnt) return;

				for(var i = FuseBox_count; i < cnt; i++) {
					FuseBox_count++;
					type_add('FuseBox', 'FuseBox', row_index, FuseBox_count);
				}
			}
		}
		if(str == 'LV W/H 1') {
			if(LV_W_H_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(LV_W_H_count >= cnt) return;

				for(var i = LV_W_H_count; i < cnt; i++) {
					LV_W_H_count++;
					type_add('LV W/H', 'LV_W_H', row_index, LV_W_H_count);
				}
			}
		}
		if(str == 'HV W/H 1') {
			if(HV_W_H_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(HV_W_H_count >= cnt) return;

				for(var i = HV_W_H_count; i < cnt; i++) {
					HV_W_H_count++;
					type_add('HV W/H', 'HV_W_H', row_index, HV_W_H_count);
				}
			}
		}
		if(str == '온도센서 1') {
			if(온도센서_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(온도센서_count >= cnt) return;

				for(var i = 온도센서_count; i < cnt; i++) {
					온도센서_count++;
					type_add('온도센서', '온도센서', row_index, 온도센서_count);
				}
			}
		}
		if(str == 'BMA 1') {
			if(BMA_count != 10) {
				var cnt = prompt('#No를 입력하세요');
				if(BMA_count >= cnt) return;

				for(var i = BMA_count; i < cnt; i++) {
					BMA_count++;
					type_add('BMA', 'BMA', row_index, BMA_count);
				}
			}
		}
	});
}

async function 분해조립_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = 분해조립_doc;
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
        for(var i = 1; i <= BMU_count; i++) eval('doc.BMU' + i + ' = document.getElementById(\'_BMU' + i + '\').value;');
        for(var i = 1; i <= CMU_count; i++) eval('doc.CMU' + i + ' = document.getElementById(\'_CMU' + i + '\').value;');
        for(var i = 1; i <= PRA_count; i++) eval('doc.PRA' + i + ' = document.getElementById(\'_PRA' + i + '\').value;');
        for(var i = 1; i <= SPA_count; i++) eval('doc.SPA' + i + ' = document.getElementById(\'_SPA' + i + '\').value;');
        for(var i = 1; i <= LWR_C_count; i++) eval('doc.LWR_C' + i + ' = document.getElementById(\'_LWR_C' + i + '\').value;');
        for(var i = 1; i <= UPR_C_count; i++) eval('doc.UPR_C' + i + ' = document.getElementById(\'_UPR_C' + i + '\').value;');
        for(var i = 1; i <= Relay_count; i++) eval('doc.Relay' + i + ' = document.getElementById(\'_Relay' + i + '\').value;');
        for(var i = 1; i <= HV_CNTR_count; i++) eval('doc.HV_CNTR' + i + ' = document.getElementById(\'_HV_CNTR' + i + '\').value;');
        for(var i = 1; i <= Heating_CNTR_count; i++) eval('doc.Heating_CNTR' + i + ' = document.getElementById(\'_Heating_CNTR' + i + '\').value;');
        for(var i = 1; i <= FuseBox_count; i++) eval('doc.FuseBox' + i + ' = document.getElementById(\'_FuseBox' + i + '\').value;');
        for(var i = 1; i <= LV_W_H_count; i++) eval('doc.LV_W_H' + i + ' = document.getElementById(\'_LV_W_H' + i + '\').value;');
        for(var i = 1; i <= HV_W_H_count; i++) eval('doc.HV_W_H' + i + ' = document.getElementById(\'_HV_W_H' + i + '\').value;');
        for(var i = 1; i <= 온도센서_count; i++) eval('doc.온도센서' + i + ' = document.getElementById(\'_온도센서' + i + '\').value;');
        for(var i = 1; i <= BMA_count; i++) eval('doc.BMA' + i + ' = document.getElementById(\'_BMA' + i + '\').value;');
	doc.PBE = _PBE.value;
	doc.Gasket = _Gasket.value;
	doc.Busbars = _Busbars.value;
	doc.ETC = _ETC.value;
	doc.공정완료일 = _공정완료일.value;
	doc.작업자 = _작업자.value;
	
	console.log(신품_docs);
	신품_docs.forEach(async function(doc) {
		update_신품정보(자재입출고, doc);
		await delay();

		console.log(update_count);
		console.log(insert_count);
	});

	console.log(고품_docs);
	고품_docs.forEach(async function(doc) {
		update_고품정보(고품정보, doc);
		await delay();

		console.log(update_count);
		console.log(insert_count);
	});

	update(분해조립, doc);
	await delay();
	

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

async function request_신품QR() {
	var 교체후_QR = prompt('교체후 QR을 입력하세요');
	var 교체후_품번 = prompt('교체후 품번을 입력하세요');
	var str = '교체후 QR:' + 교체후_QR + ', 교체후 품번:' + 교체후_품번;
	var 교체전_QR = prompt('교체전 QR을 입력하세요');
	var 교체전_품번 = prompt('교체전 품번을 입력하세요');
	str += ', 교체전 QR:' + 교체전_QR + ', 교체전 품번:' + 교체전_품번;
	console.log(str);

	return str;
}

async function request_고품QR() {
	var 교체후_QR = prompt('교체후 QR을 입력하세요');
	count(고품정보, { QR: 교체후_QR });
	await delay();	
	console.log('고품정보 doc_count: ', doc_count);
	if(doc_count > 0) {
		find_고품정보(고품정보, { QR: 교체후_QR });
		await delay();
		console.log('고품정보:', find_array);

		var doc = JSON.parse(JSON.stringify(고품정보_doc));
		doc.관리번호 = find_array[0].관리번호;
		doc.품명 = find_array[0].품명;
		doc.번호 = find_array[0].번호;
		doc.QR = find_array[0].QR;
		doc.폐기여부 = find_array[0].폐기여부;
		doc.사용여부 = '사용';
		doc.사용_관리번호 = _management_id.value;
		고품_docs.push(doc);
		console.log(고품_docs);
	}

	var 교체후_품번 = prompt('교체후 품번을 입력하세요');
	var str = '교체후 QR:' + 교체후_QR + ', 교체후 품번:' + 교체후_품번;
	var 교체전_QR = prompt('교체전 QR을 입력하세요');
	var 교체전_품번 = prompt('교체전 품번을 입력하세요');
	str += ', 교체전 QR:' + 교체전_QR + ', 교체전 품번:' + 교체전_품번;
	console.log(str);

	return str;
}

async function _콤보박스(type, e) {
	var value = e.value;

	if(value == '신품 교체') {
		var 관련번호 = await request_신품QR();
		value = value + '(' + 관련번호 + ')';
	}

	if(value == '고품 교체') {
		var 관련번호 = await request_고품QR();
		value = value + '(' + 관련번호 + ')';
	}
	
	console.log('test:', type);
  	document.getElementById(type).value = value;
}

async function type_add(name, type, row_index, no) {
	if(no > 10) return;
	
	const _tb = document.getElementById('_tb');
	console.log('type:', '_' + type + no);
	var current_row;
	current_row = _tb.insertRow(row_index + (no - 1));
	var insert_string = "<td><label for=\"_" + type + no + "\"><b>" + name + " " + no + "</b></label></td><td><input type=\"text\" id=\"_" + type + no + "\" size=\"100\" required><select name=\"language\" onchange=\"_콤보박스(\'_" + type + no + "\', this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><center><button>-</button></center></td>";
	console.log(insert_string);
	current_row.innerHTML = insert_string;
	await sleep(20);
}

function _delete_row(index, no, type) {
	const _tb = document.getElementById('_tb');
	type = type.trim();
	console.log(index, no, type, BMU_count);
	if(type == 'BMU' && no == BMU_count) {
		_tb.deleteRow(index);
		BMU_count = no - 1;
	}

	if(type == 'CMU' && no == CMU_count) {
		_tb.deleteRow(index);
		CMU_count = no -1;
	}

	if(type == 'PRA' && no == PRA_count) {
		_tb.deleteRow(index);
		PRA_count = no -1;
	}

	if(type == 'SPA' && no == SPA_count) {
		_tb.deleteRow(index);
		SPA_count = no - 1;
	}

	if(type == 'LWR Case' && no == LWR_C_count) {
		_tb.deleteRow(index);
		LWR_C_count = no - 1;
	}

	if(type == 'UPR Case' && no == UPR_C_count) {
		_tb.deleteRow(index);
		UPR_C_count = no - 1;
	}

	if(type == 'PBE' && no == PBE_count) {
		_tb.deleteRow(index);
		PBE_count = no - 1;
	}

	if(type == 'Gasket' && no == Gasket_count) {
		_tb.deleteRow(index);
		Gasket_count = no - 1;
	}

	if(type == 'Relay' && no == Relay_count) {
		_tb.deleteRow(index);
		Relay_count = no - 1;
	}

	if(type == 'HV CNTR' && no == HV_CNTR_count) {
		_tb.deleteRow(index);
		HV_CNTR_count = no - 1;
	}

	if(type == 'Heating CNTR' && no == Heating_CNTR_count) {
		_tb.deleteRow(index);
		Heating_CNTR_count = no - 1;
	}

	if(type == 'FuseBox' && no == FuseBox_count) {
		_tb.deleteRow(index);
		FuseBox_count = no - 1;
	}

	if(type == 'LV W/H' && no == LV_W_H_count) {
		_tb.deleteRow(index);
		LV_W_H_count = no - 1;
	}

	if(type == 'HV W/H' && no == HV_W_H_count) {
		_tb.deleteRow(index);
		HV_W_H_count = no - 1;
	}

	if(type == '온도센서' && no == 온도센서_count) {
		_tb.deleteRow(index);
		온도센서_count = no - 1;
	}

	if(type == 'BMA' && no == BMA_count) {
		_tb.deleteRow(index);
		BMA_count = no - 1;
	}
}
