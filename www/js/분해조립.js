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
var first_분해조립 = true;

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

	for(var i = 1; i <= 10; i++) eval('if(typeof _BMU' + i + ' != \'undefined\') _BMU' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _BMU' + i + '_2 != \'undefined\') _BMU' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _CMU' + i + ' != \'undefined\') _CMU' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _CMU' + i + '_2 != \'undefined\') _CMU' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _PRA' + i + ' != \'undefined\') _PRA' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _PRA' + i + '_2 != \'undefined\') _PRA' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _SPA' + i + ' != \'undefined\') _SPA' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _SPA' + i + '_2 != \'undefined\') _SPA' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _LWR_C' + i + ' != \'undefined\') _LWR_C' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _LWR_C' + i + '_2 != \'undefined\') _LWR_C' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _UPR_C' + i + ' != \'undefined\') _UPR_C' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _UPR_C' + i + '_2 != \'undefined\') _UPR_C' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _HV_CNTR' + i + ' != \'undefined\') _HV_CNTR' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _HV_CNTR' + i + '_2 != \'undefined\') _HV_CNTR' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _Heating_CNTR' + i + ' != \'undefined\') _Heating_CNTR' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _Heating_CNTR' + i + '_2 != \'undefined\') _Heating_CNTR' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _FuseBox' + i + ' != \'undefined\') _FuseBox' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _FuseBox' + i + '_2 != \'undefined\') _FuseBox' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _LV_W_H' + i + ' != \'undefined\') _LV_W_H' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _LV_W_H' + i + '_2 != \'undefined\') _LV_W_H' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _HV_W_H' + i + ' != \'undefined\') _HV_W_H' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _HV_W_H' + i + '_2 != \'undefined\') _HV_W_H' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _온도센서' + i + ' != \'undefined\') _온도센서' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _온도센서' + i + '_2 != \'undefined\') _온도센서' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _Relay' + i + ' != \'undefined\') _Relay' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _Relay' + i + '_2 != \'undefined\') _Relay' + i + '_2.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _BMA' + i + ' != \'undefined\') _BMA' + i + '.value = \'\';');
	for(var i = 1; i <= 10; i++) eval('if(typeof _BMA' + i + '_2 != \'undefined\') _BMA' + i + '_2.value = \'\';');

	_delete_all();

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

	if(_management_id.value == '조회 버튼을 누르세요') _management_id.value =  관리번호;
	console.log(_management_id.vaue);

	count(입고, { 관리번호 : _management_id.value });
	await delay();
	if(입고_cnt > 0) {
		find(입고, _management_id.value);
		await delay();

		_구분.value = 입고_v[0].구분;
		_차종.value = 입고_v[0].차종;
		_품번.value = 입고_v[0].품번;
	} else {
		_구분.value = '';
		_차종.value = '';
		_품번.value = '';
	}

	if(is재제조번호 == true) {
		if(_재제조번호.value.length == 0) return;
		console.log('load: ', _재제조번호.value);
		if(_재제조번호.value == '' | _재제조번호.value == 'none') return;
		
		count(BSA재제조, { 재제조번호 : _재제조번호.value });
		await delay();
		console.log('관리번호 찾기');
		if(BSA재제조_cnt > 0) {
			find_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value.trim() });
			await delay();
			
			_management_id.value = BSA재제조_v[0].관리번호;
		} else {
			_management_id.value = '찾지 못하였습니다';
		}

	}

	if(_management_id.value.length == 0) return;
	console.log('load: ', _management_id.value);
	if(_management_id.value == '' | _management_id == 'none') return;

	count(BSA재제조, { 관리번호 : _management_id.value.trim() });
	await delay();
	console.log('재제조번호 찾기');

	if(BSA재제조_cnt > 0) {
		find_BSA재제조(BSA재제조, { 관리번호: _management_id.value.trim() });
		await delay();
		_재제조번호.value = BSA재제조_v[0].재제조번호;
	} else {
		_재제조번호.value = '';
	}

	count(분해조립, { 관리번호 : _management_id.value });
	await delay();

	if(분해조립_cnt > 0) {
		count(BSA재제조, { 관리번호 : _management_id.value });
		await delay();
		if(BSA재제조_cnt > 0) {
			find_BSA재제조(BSA재제조, { 관리번호: _management_id.value.trim() });
			await delay();
			
			_재제조번호.value = BSA재제조_v[0].재제조번호;
		}


		find(분해조립, _management_id.value);
		await delay();

		var no_count = 6;
		_공정입고일.value = 분해조립_v[0].공정입고일;
		_BMU1.value = 분해조립_v[0].BMU1;
		_BMU1_2.value = 분해조립_v[0].BMU1_2;
		if(분해조립_v[0].BMU2 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU2').value = 분해조립_v[0].BMU2; document.getElementById('_BMU2_2').value = 분해조립_v[0].BMU2_2;}
		if(분해조립_v[0].BMU3 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU3').value = 분해조립_v[0].BMU3; document.getElementById('_BMU3_2').value = 분해조립_v[0].BMU3_2;}
		if(분해조립_v[0].BMU4 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU4').value = 분해조립_v[0].BMU4; document.getElementById('_BMU4_2').value = 분해조립_v[0].BMU4_2;}
		if(분해조립_v[0].BMU5 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU5').value = 분해조립_v[0].BMU5; document.getElementById('_BMU5_2').value = 분해조립_v[0].BMU5_2;}
		if(분해조립_v[0].BMU6 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU6').value = 분해조립_v[0].BMU6; document.getElementById('_BMU6_2').value = 분해조립_v[0].BMU6_2;}
		if(분해조립_v[0].BMU7 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU7').value = 분해조립_v[0].BMU7; document.getElementById('_BMU7_2').value = 분해조립_v[0].BMU7_2;}
		if(분해조립_v[0].BMU8 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU8').value = 분해조립_v[0].BMU8; document.getElementById('_BMU8_2').value = 분해조립_v[0].BMU8_2;}
		if(분해조립_v[0].BMU9 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU9').value = 분해조립_v[0].BMU9; document.getElementById('_BMU9_2').value = 분해조립_v[0].BMU9_2;}
		if(분해조립_v[0].BMU10 != '') { BMU_count += 1; type_add('BMU', 'BMU', no_count, BMU_count); document.getElementById('_BMU10').value = 분해조립_v[0].BMU10; document.getElementById('_BMU10_2').value = 분해조립_v[0].BMU10_2;}

		_CMU1.value = 분해조립_v[0].CMU1;
		_CMU1_2.value = 분해조립_v[0].CMU1_2;
		no_count += BMU_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].CMU' + i + ' != \'\' || (분해조립_v[0].CMU' + i + '_2 != \'\' && 분해조립_v[0].CMU' + i + '_2 != undefined)) ' + '{ CMU_count += 1; type_add(\'CMU\', \'CMU\', no_count, CMU_count); document.getElementById(\'_CMU' + i + '\').value = ' + '분해조립_v[0].CMU' + i + '; document.getElementById(\'_CMU' + i + '_2\').value = ' + '분해조립_v[0].CMU' + i + '_2;}');

		_PRA1.value = 분해조립_v[0].PRA1;
		_PRA1_2.value = 분해조립_v[0].PRA1_2;
		no_count += CMU_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].PRA' + i + ' != \'\' || (분해조립_v[0].PRA' + i + '_2 != \'\' && 분해조립_v[0].PRA' + i + '_2 != undefined)) ' + '{ PRA_count += 1; type_add(\'PRA\', \'PRA\', no_count, PRA_count); document.getElementById(\'_PRA' + i + '\').value = ' + '분해조립_v[0].PRA' + i + '; document.getElementById(\'_PRA' + i + '_2\').value = ' + '분해조립_v[0].PRA' + i + '_2; }');

		_SPA1.value = 분해조립_v[0].SPA1;
		_SPA1_2.value = 분해조립_v[0].SPA1_2;
		no_count += PRA_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].SPA' + i + ' != \'\' || (분해조립_v[0].SPA' + i + '_2 != \'\' && 분해조립_v[0].SPA' + i + '_2 != undefined)) ' + '{ SPA_count += 1; type_add(\'SPA\', \'SPA\', no_count, SPA_count); document.getElementById(\'_SPA' + i + '\').value = ' + '분해조립_v[0].SPA' + i + '; document.getElementById(\'_SPA' + i + '_2\').value = ' + '분해조립_v[0].SPA' + i + '_2; }');

		_LWR_C1.value = 분해조립_v[0].LWR_C1;
		_LWR_C1_2.value = 분해조립_v[0].LWR_C1_2;
		no_count += SPA_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].LWR_C' + i + ' != \'\' || (분해조립_v[0].LWR_C' + i + '_2 != \'\' && 분해조립_v[0].LWR_C' + i + '_2 != undefined)) ' + '{ LWR_C_count += 1; type_add(\'LWR Case\', \'LWR_C\', no_count, LWR_C_count); document.getElementById(\'_LWR_C' + i + '\').value = ' + '분해조립_v[0].LWR_C' + i + '; document.getElementById(\'_LWR_C' + i + '_2\').value = ' + '분해조립_v[0].LWR_C' + i + '_2; }');

		_UPR_C1.value = 분해조립_v[0].UPR_C1;
		_UPR_C1_2.value = 분해조립_v[0].UPR_C1_2;
		no_count += LWR_C_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].UPR_C' + i + ' != \'\' || (분해조립_v[0].UPR_C' + i + '_2 != \'\' && 분해조립_v[0].UPR_C' + i + '_2 != undefined)) ' + '{ UPR_C_count += 1; type_add(\'UPR Case\', \'UPR_C\', no_count, UPR_C_count); document.getElementById(\'_UPR_C' + i + '\').value = ' + '분해조립_v[0].UPR_C' + i + '; document.getElementById(\'_UPR_C' + i + '_2\').value = ' + '분해조립_v[0].UPR_C' + i + '_2; }');

		_PBE.value = 분해조립_v[0].PBE;
		_PBE_2.value = 분해조립_v[0].PBE_2;
		_Gasket.value = 분해조립_v[0].Gasket;
		_Gasket_2.value = 분해조립_v[0].Gasket_2;
		
		_Relay1.value = 분해조립_v[0].Relay1;
		_Relay1_2.value = 분해조립_v[0].Relay1_2;
		no_count += 2 + UPR_C_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].Relay' + i + ' != \'\' || (분해조립_v[0].Relay' + i + '_2 != \'\' && 분해조립_v[0].Relay' + i + '_2 != undefined)) ' + '{ Relay_count += 1; type_add(\'Relay\', \'Relay\', no_count, Relay_count); document.getElementById(\'_Relay' + i + '\').value = ' + '분해조립_v[0].Relay' + i + '; document.getElementById(\'_Relay' + i + '_2\').value = ' + '분해조립_v[0].Relay' + i + '_2;}');

		_HV_CNTR1.value = 분해조립_v[0].HV_CNTR1;
		_HV_CNTR1_2.value = 분해조립_v[0].HV_CNTR1_2;
		no_count += Relay_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].HV_CNTR' + i + ' != \'\' || (분해조립_v[0].HV_CNTR' + i + '_2 != \'\' && 분해조립_v[0].HV_CNTR' + i + '_2 != undefined)) ' + '{ HV_CNTR_count += 1; type_add(\'HV CNTR\', \'HV_CNTR\', no_count, HV_CNTR_count); document.getElementById(\'_HV_CNTR' + i + '\').value = ' + '분해조립_v[0].HV_CNTR' + i + '; document.getElementById(\'_HV_CNTR' + i + '_2\').value = ' + '분해조립_v[0].HV_CNTR' + i + '_2; }');

		_Heating_CNTR1.value = 분해조립_v[0].Heating_CNTR1;
		_Heating_CNTR1_2.value = 분해조립_v[0].Heating_CNTR1_2;
		no_count += HV_CNTR_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].Heating_CNTR' + i + ' != \'\' || (분해조립_v[0].Heating_CNTR' + i + '_2 != \'\' && 분해조립_v[0].Heating_CNTR' + i + '_2 != undefined)) ' + '{ Heating_CNTR_count += 1; type_add(\'Heating CNTR\', \'Heating_CNTR\', no_count, Heating_CNTR_count); document.getElementById(\'_Heating_CNTR' + i + '\').value = ' + '분해조립_v[0].Heating_CNTR' + i + '; document.getElementById(\'_Heating_CNTR' + i + '_2\').value = ' + '분해조립_v[0].Heating_CNTR' + i + '_2;}');

		_FuseBox1.value = 분해조립_v[0].FuseBox1;
		_FuseBox1_2.value = 분해조립_v[0].FuseBox1_2;
		no_count += Heating_CNTR_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].FuseBox' + i + ' != \'\' || (분해조립_v[0].FuseBox' + i + '_2 != \'\' && 분해조립_v[0].FuseBox' + i + '_2 != undefined)) ' + '{ FuseBox_count += 1; type_add(\'FuseBox\', \'FuseBox\', no_count, FuseBox_count); document.getElementById(\'_FuseBox' + i + '\').value = ' + '분해조립_v[0].FuseBox' + i + '; document.getElementById(\'_FuseBox' + i + '_2\').value = ' + '분해조립_v[0].FuseBox' + i + '_2;}');

		_LV_W_H1.value = 분해조립_v[0].LV_W_H1;
		_LV_W_H1_2.value = 분해조립_v[0].LV_W_H1_2;
		no_count += FuseBox_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].LV_W_H' + i + ' != \'\' || (분해조립_v[0].LV_W_H' + i + '_2 != \'\' && 분해조립_v[0].LV_W_H' + i + '_2 != undefined)) ' + '{ LV_W_H_count += 1; type_add(\'LV W/H\', \'LV_W_H\', no_count, LV_W_H_count); document.getElementById(\'_LV_W_H' + i + '\').value = ' + '분해조립_v[0].LV_W_H' + i + '; document.getElementById(\'_LV_W_H' + i + '_2\').value = ' + '분해조립_v[0].LV_W_H' + i + '_2;}');

		_HV_W_H1.value = 분해조립_v[0].HV_W_H1;
		_HV_W_H1_2.value = 분해조립_v[0].HV_W_H1_2;
		no_count += LV_W_H_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].HV_W_H' + i + ' != \'\' || (분해조립_v[0].HV_W_H' + i + '_2 != \'\' && 분해조립_v[0].HV_W_H' + i + '_2 != undefined)) ' + '{ HV_W_H_count += 1; type_add(\'HV W/H\', \'HV_W_H\', no_count, HV_W_H_count); document.getElementById(\'_HV_W_H' + i + '\').value = ' + '분해조립_v[0].HV_W_H' + i + '; document.getElementById(\'_HV_W_H' + i + '_2\').value = ' + '분해조립_v[0].HV_W_H' + i + '_2;}');

		_온도센서1.value = 분해조립_v[0].온도센서1;
		_온도센서1_2.value = 분해조립_v[0].온도센서1_2;
		no_count += HV_W_H_count;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].온도센서' + i + ' != \'\' || (분해조립_v[0].온도센서' + i + '_2 != \'\' && 분해조립_v[0].온도센서' + i + '_2 != undefined)) ' + '{ 온도센서_count += 1; type_add(\'온도센서\', \'온도센서\', no_count, 온도센서_count); document.getElementById(\'_온도센서' + i + '\').value = ' + '분해조립_v[0].온도센서' + i + '; document.getElementById(\'_온도센서' + i + '_2\').value = ' + '분해조립_v[0].온도센서' + i + '_2;}');

		_Busbars.value = 분해조립_v[0].Busbars;
		_Busbars_2.value = 분해조립_v[0].Busbars_2;
		no_count += 1 + 온도센서_count;
		_BMA1.value = 분해조립_v[0].BMA1;
		_BMA1_2.value = 분해조립_v[0].BMA1_2;
		for(var i = 2; i <= 10; i++) eval('if(분해조립_v[0].BMA' + i + ' != \'\' || (분해조립_v[0].BMA' + i + '_2 != \'\' && 분해조립_v[0].BMA' + i + '_2 != undefined)) ' + '{ BMA_count += 1; type_add(\'BMA\', \'BMA\', no_count, BMA_count); document.getElementById(\'_BMA' + i + '\').value = ' + '분해조립_v[0].BMA' + i + '; document.getElementById(\'_BMA' + i + '_2\').value = ' + '분해조립_v[0].BMA' + i + '_2;}');

		_ETC.value = 분해조립_v[0].ETC;
		_공정완료일.value = 분해조립_v[0].공정완료일;
		_작업자.value = 분해조립_v[0].작업자;
	} else {
		_공정입고일.value = '0000-00-00T00:00';
		for(var i = 1; i <= 10; i++) eval('if(typeof _BMU' + i + ' != \'undefined\') _BMU' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _BMU' + i + '_2 != \'undefined\') _BMU' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _CMU' + i + ' != \'undefined\') _CMU' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _CMU' + i + '_2 != \'undefined\') _CMU' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _PRA' + i + ' != \'undefined\') _PRA' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _PRA' + i + '_2 != \'undefined\') _PRA' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _SPA' + i + ' != \'undefined\') _SPA' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _SPA' + i + '_2 != \'undefined\') _SPA' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _LWR_C' + i + ' != \'undefined\') _LWR_C' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _LWR_C' + i + '_2 != \'undefined\') _LWR_C' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _UPR_C' + i + ' != \'undefined\') _UPR_C' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _UPR_C' + i + '_2 != \'undefined\') _UPR_C' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _HV_CNTR' + i + ' != \'undefined\') _HV_CNTR' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _HV_CNTR' + i + '_2 != \'undefined\') _HV_CNTR' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _Heating_CNTR' + i + ' != \'undefined\') _Heating_CNTR' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _Heating_CNTR' + i + '_2 != \'undefined\') _Heating_CNTR' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _FuseBox' + i + ' != \'undefined\') _FuseBox' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _FuseBox' + i + '_2 != \'undefined\') _FuseBox' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _LV_W_H' + i + ' != \'undefined\') _LV_W_H' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _LV_W_H' + i + '_2 != \'undefined\') _LV_W_H' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _HV_W_H' + i + ' != \'undefined\') _HV_W_H' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _HV_W_H' + i + '_2 != \'undefined\') _HV_W_H' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _온도센서' + i + ' != \'undefined\') _온도센서' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _온도센서' + i + '_2 != \'undefined\') _온도센서' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _Relay' + i + ' != \'undefined\') _Relay' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _Relay' + i + '_2 != \'undefined\') _Relay' + i + '_2.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _BMA' + i + ' != \'undefined\') _BMA' + i + '.value = \'\';');
		for(var i = 1; i <= 10; i++) eval('if(typeof _BMA' + i + '_2 != \'undefined\') _BMA' + i + '_2.value = \'\';');
		_PBE.value = '';
		_Gasket.value = '';
		_Busbars.value = '';
		_ETC.value = '';
		_공정완료일.value = '0000-00-00T00:00';
		_작업자.value = worker;
	}

	const tbody = document.querySelector('#_tb tbody');
	if(first_분해조립 == true) {
		first_분해조립 = false;

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
					BMU_count++;
					type_add('BMU', 'BMU', row_index, BMU_count);
				}
			}
			if(str == 'CMU 1') {
				if(CMU_count != 10) {
					CMU_count++;
					type_add('CMU', 'CMU', row_index, CMU_count);
				}
			}
			if(str == 'PRA 1') {
				if(PRA_count != 10) {
					PRA_count++;
					type_add('PRA', 'PRA', row_index, PRA_count);
				}
			}
			if(str == 'SPA 1') {
				if(SPA_count != 10) {
					SPA_count++;
					type_add('SPA', 'SPA', row_index, SPA_count);
				}
			}
			if(str == 'LWR Case 1') {
				if(LWR_C_count != 10) {
					LWR_C_count++;
					type_add('LWR Case', 'LWR_C', row_index, LWR_C_count);
				}
			}
			if(str == 'UPR Case 1') {
				if(UPR_C_count != 10) {
					UPR_C_count++;
					type_add('UPR Case', 'UPR_C', row_index, UPR_C_count);
				}
			}
			if(str == 'Relay 1') {
				if(Relay_count != 10) {
					Relay_count++;
					type_add('Relay', 'Relay', row_index, Relay_count);
				}
			}
			if(str == 'HV CNTR 1') {
				if(HV_CNTR_count != 10) {
					HV_CNTR_count++;
					type_add('HV CNTR', 'HV_CNTR', row_index, HV_CNTR_count);
				}
			}
			if(str == 'Heating CNTR 1') {
				if(Heating_CNTR_count != 10) {
					Heating_CNTR_count++;
					type_add('Heating CNTR', 'Heating_CNTR', row_index, Heating_CNTR_count);
				}
			}
			if(str == 'FuseBox 1') {
				if(FuseBox_count != 10) {
					FuseBox_count++;
					type_add('FuseBox', 'FuseBox', row_index, FuseBox_count);
				}
			}
			if(str == 'LV W/H 1') {
				if(LV_W_H_count != 10) {
					LV_W_H_count++;
					type_add('LV W/H', 'LV_W_H', row_index, LV_W_H_count);
				}
			}
			if(str == 'HV W/H 1') {
				if(HV_W_H_count != 10) {
					HV_W_H_count++;
					type_add('HV W/H', 'HV_W_H', row_index, HV_W_H_count);
				}
			}
			if(str == '온도센서 1') {
				if(온도센서_count != 10) {
					온도센서_count++;
					type_add('온도센서', '온도센서', row_index, 온도센서_count);
				}
			}
			if(str == 'BMA 1') {
				if(BMA_count != 10) {
					BMA_count++;
					type_add('BMA', 'BMA', row_index, BMA_count);
				}
			}
		});

		tbody.addEventListener('dblclick', function(e) {
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
}

async function 분해조립_save() {
	if(worker == '') return;
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = JSON.parse(JSON.stringify(분해조립_doc));
  	console.log('분해조립 init SAVE:', doc);
	doc.관리번호 = _management_id.value;
	doc.공정입고일 = _공정입고일.value;
	for(var i = 1; i <= BMU_count; i++) eval('var item = document.getElementById(\'_BMU' + i + '\'); if(typeof item != \'undefined\') doc.BMU' + i + ' = item.value;');
	for(var i = 1; i <= BMU_count; i++) eval('var item = document.getElementById(\'_BMU' + i + '_2\'); if(typeof item != \'undefined\') doc.BMU' + i + '_2 = item.value;');
	for(var i = 1; i <= CMU_count; i++) eval('var item = document.getElementById(\'_CMU' + i + '\'); if(typeof item != \'undefined\') doc.CMU' + i + ' = item.value;');
	for(var i = 1; i <= CMU_count; i++) eval('var item = document.getElementById(\'_CMU' + i + '_2\'); if(typeof item != \'undefined\') doc.CMU' + i + '_2 = item.value;');
	for(var i = 1; i <= PRA_count; i++) eval('var item = document.getElementById(\'_PRA' + i + '\'); if(typeof item != \'undefined\') doc.PRA' + i + ' = item.value;');
	for(var i = 1; i <= PRA_count; i++) eval('var item = document.getElementById(\'_PRA' + i + '_2\'); if(typeof item != \'undefined\') doc.PRA' + i + '_2 = item.value;');
	for(var i = 1; i <= SPA_count; i++) eval('var item = document.getElementById(\'_SPA' + i + '\'); if(typeof item != \'undefined\') doc.SPA' + i + ' = item.value;');
	for(var i = 1; i <= SPA_count; i++) eval('var item = document.getElementById(\'_SPA' + i + '_2\'); if(typeof item != \'undefined\') doc.SPA' + i + '_2 = item.value;');
	for(var i = 1; i <= LWR_C_count; i++) eval('var item = document.getElementById(\'_LWR_C' + i + '\'); if(typeof item != \'undefined\') doc.LWR_C' + i + ' = item.value;');
	for(var i = 1; i <= LWR_C_count; i++) eval('var item = document.getElementById(\'_LWR_C' + i + '_2\'); if(typeof item != \'undefined\') doc.LWR_C' + i + '_2 = item.value;');
	for(var i = 1; i <= UPR_C_count; i++) eval('var item = document.getElementById(\'_UPR_C' + i + '\'); if(typeof item != \'undefined\') doc.UPR_C' + i + ' = item.value;');
	for(var i = 1; i <= UPR_C_count; i++) eval('var item = document.getElementById(\'_UPR_C' + i + '_2\'); if(typeof item != \'undefined\') doc.UPR_C' + i + '_2 = item.value;');
	for(var i = 1; i <= Relay_count; i++) eval('var item = document.getElementById(\'_Relay' + i + '\'); if(typeof item != \'undefined\') doc.Relay' + i + ' = item.value;');
	for(var i = 1; i <= Relay_count; i++) eval('var item = document.getElementById(\'_Relay' + i + '_2\'); if(typeof item != \'undefined\') doc.Relay' + i + '_2 = item.value;');
	for(var i = 1; i <= HV_CNTR_count; i++) eval('var item = document.getElementById(\'_HV_CNTR' + i + '\'); if(typeof item != \'undefined\') doc.HV_CNTR' + i + ' = item.value;');
	for(var i = 1; i <= HV_CNTR_count; i++) eval('var item = document.getElementById(\'_HV_CNTR' + i + '_2\'); if(typeof item != \'undefined\') doc.HV_CNTR' + i + '_2 = item.value;');
	for(var i = 1; i <= Heating_CNTR_count; i++) eval('var item = document.getElementById(\'_Heating_CNTR' + i + '\'); if(typeof item != \'undefined\') doc.Heating_CNTR' + i + ' = item.value;');
	for(var i = 1; i <= Heating_CNTR_count; i++) eval('var item = document.getElementById(\'_Heating_CNTR' + i + '_2\'); if(typeof item != \'undefined\') doc.Heating_CNTR' + i + '_2 = item.value;');
	for(var i = 1; i <= FuseBox_count; i++) eval('var item = document.getElementById(\'_FuseBox' + i + '\'); if(typeof item != \'undefined\') doc.FuseBox' + i + ' = item.value;');
	for(var i = 1; i <= FuseBox_count; i++) eval('var item = document.getElementById(\'_FuseBox' + i + '_2\'); if(typeof item != \'undefined\') doc.FuseBox' + i + '_2 = item.value;');
	for(var i = 1; i <= LV_W_H_count; i++) eval('var item = document.getElementById(\'_LV_W_H' + i + '\'); if(typeof item != \'undefined\') doc.LV_W_H' + i + ' = item.value;');
	for(var i = 1; i <= LV_W_H_count; i++) eval('var item = document.getElementById(\'_LV_W_H' + i + '_2\'); if(typeof item != \'undefined\') doc.LV_W_H' + i + '_2 = item.value;');
	for(var i = 1; i <= HV_W_H_count; i++) eval('var item = document.getElementById(\'_HV_W_H' + i + '\'); if(typeof item != \'undefined\') doc.HV_W_H' + i + ' = item.value;');
	for(var i = 1; i <= HV_W_H_count; i++) eval('var item = document.getElementById(\'_HV_W_H' + i + '_2\'); if(typeof item != \'undefined\') doc.HV_W_H' + i + '_2 = item.value;');
	for(var i = 1; i <= 온도센서_count; i++) eval('var item = document.getElementById(\'_온도센서' + i + '\'); if(typeof item != \'undefined\') doc.온도센서' + i + ' = item.value;');
	for(var i = 1; i <= 온도센서_count; i++) eval('var item = document.getElementById(\'_온도센서' + i + '_2\'); if(typeof item != \'undefined\') doc.온도센서' + i + '_2 = item.value;');
	for(var i = 1; i <= BMA_count; i++) eval('var item = document.getElementById(\'_BMA' + i + '\'); if(typeof item != \'undefined\') doc.BMA' + i + ' = item.value;');
	for(var i = 1; i <= BMA_count; i++) eval('var item = document.getElementById(\'_BMA' + i + '_2\'); if(typeof item != \'undefined\') doc.BMA' + i + '_2 = item.value;');
	doc.PBE = _PBE.value;
	doc.PBE_2 = _PBE_2.value;
	doc.Gasket = _Gasket.value;
	doc.Gasket_2 = _Gasket_2.value;
	doc.Busbars = _Busbars.value;
	doc.Busbars_2 = _Busbars_2.value;
	doc.ETC = _ETC.value;
	doc.공정완료일 = _공정완료일.value;
	doc.작업자 = _작업자.value;

	console.log(신품_docs);
	신품_docs.forEach(async function(new_doc) {
		update_신품정보(자재입출고, new_doc);
		await delay();

		console.log(update_count);
		console.log(insert_count);
	});

	console.log(고품_docs);
	고품_docs.forEach(async function(old_doc) {
		update_고품정보(고품정보, old_doc);
		await delay();

		console.log(update_count);
		console.log(insert_count);
	});

  console.log('분해조립 SAVE:', doc);
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

	count(BSA재제조, { 관리번호 : _management_id.value });
	await delay();

	if(BSA재제조 == 0) {
		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호 = _management_id.value;
		_doc.분해조립투입일 = _공정입고일.value;
		_doc.분해조립 = _공정완료일.value;

		update(BSA재제조, _doc);
		await delay();
	} else {
		var _doc = {
			관리번호 : _management_id.value,
			분해조립투입일 : _공정입고일.value,
			분해조립 : _공정완료일.value
		}

		update(BSA재제조, _doc);
		await delay();
	}

  doc = 분해조립_doc;

	await 공정단계자동입력(_management_id.value);
	//이전페이지();
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
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString().substr(0, 19);
	var 교체후_QR = prompt('교체후 QR을 입력하세요');
	
	count(고품정보, { QR: 교체후_QR });
	await delay();	
	if(고품정보_cnt > 0) {
		find_고품정보(고품정보, { QR: 교체후_QR });
		await delay();

		var doc = JSON.parse(JSON.stringify(고품정보_doc));
		doc.관리번호 = 고품정보_v[0].관리번호;
		doc.품명 = 고품정보_v[0].품명;
		doc.번호 = 고품정보_v[0].번호;
		doc.QR = 고품정보_v[0].QR;
		doc.폐기여부 = 고품정보_v[0].폐기여부;
		doc.사용여부 = '사용';
		doc.사용일 = now;
		doc.사용_작업자 = _작업자.value;
		doc.사용_관리번호 = _management_id.value;
		고품_docs.push(doc);
		console.log(고품_docs);
	} else {
		//alert('해당 QR을 부품재고에서 찾을 수 없습니다.');
	}

	//var 교체후_품번 = prompt('교체후 품번을 입력하세요');
	//var str = '교체후 QR:' + 교체후_QR + ', 교체후 품번:' + 교체후_품번;
	//var 교체전_QR = prompt('교체전 QR을 입력하세요');
	//var 교체전_품번 = prompt('교체전 품번을 입력하세요');
	//str += ', 교체전 QR:' + 교체전_QR + ', 교체전 품번:' + 교체전_품번;
	var str = '교체후 QR:' + 교체후_QR;
	console.log(str);

	return str;
}

async function _콤보박스(type, e) {
	var value = e.value;

	if(value == '신품 교체') {
		//var 관련번호 = await request_신품QR();
		//value = value + '(' + 관련번호 + ')';
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
	var insert_string = "<td><label for=\"_" + type + no + "\"><b>" + name + " " + no + "</b></label></td><td>교환전&nbsp;<input type=\"text\" id=\"_" + type + no + "\" size=\"100\" value=\' \' required>&nbsp;<select name=\"language\" onchange=\"_콤보박스(\'_" + type + no + "\', this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select><br/>교환후&nbsp;<input type=\"text\" id=\"_" + type + no + "_2\" size=\"100\" value=\' \' required>&nbsp;<select name=\"language\" onchange=\"_콤보박스(\'_" + type + no + "_2\', this);\"><option value=\"\">---</option><option value=\"신품 교체\">신품 교체</option><option value=\"고품 교체\">고품 교체</option><option value=\"N/A\">N/A</option></select></td><td><center><button>-</button></center></td>";
	console.log(insert_string);
	current_row.innerHTML = insert_string;
	await sleep(20);
}

function _delete_row(index, no, type) {
	const _tb = document.getElementById('_tb');
	type = type.trim();
	console.log(index, no, type, LWR_C_count);
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

function _delete_all() {
	const _tb = document.getElementById('_tb');

	while(BMA_count > 1) {
		var index = _tb.rows.length - 4;
		_tb.deleteRow(index);
		BMA_count--;
	}

	while(온도센서_count > 1) {
		var index = _tb.rows.length - 6;
		_tb.deleteRow(index);
		온도센서_count--;
	}

	while(HV_W_H_count > 1) {
		var index = _tb.rows.length - 7;
		_tb.deleteRow(index);
		HV_W_H_count--;
	}

	while(LV_W_H_count > 1) {
		var index = _tb.rows.length - 8;
		_tb.deleteRow(index);
		LV_W_H_count--;
	}

	while(FuseBox_count > 1) {
		var index = _tb.rows.length - 9;
		_tb.deleteRow(index);
		FuseBox_count--;
	}

	while(Heating_CNTR_count > 1) {
		var index = _tb.rows.length - 10;
		_tb.deleteRow(index);
		Heating_CNTR_count--;
	}

	while(HV_CNTR_count > 1) {
		var index = _tb.rows.length - 11;
		_tb.deleteRow(index);
		HV_CNTR_count--;
	}

	while(Relay_count > 1) {
		var index = _tb.rows.length - 12;
		_tb.deleteRow(index);
		Relay_count--;
	}

	while(UPR_C_count > 1) {
		var index = _tb.rows.length - 15;
		_tb.deleteRow(index);
		UPR_C_count--;
	}

	while(LWR_C_count > 1) {
		var index = _tb.rows.length - 16;
		_tb.deleteRow(index);
		LWR_C_count--;
	}

	while(SPA_count > 1) {
		var index = _tb.rows.length - 17;
		_tb.deleteRow(index);
		SPA_count--;
	}

	while(PRA_count > 1) {
		var index = _tb.rows.length - 18;
		_tb.deleteRow(index);
		PRA_count--;
	}

	while(CMU_count > 1) {
		var index = _tb.rows.length - 19;
		_tb.deleteRow(index);
		CMU_count--;
	}

	while(BMU_count > 1) {
		var index = _tb.rows.length - 20;
		_tb.deleteRow(index);
		BMU_count--;
	}
}
