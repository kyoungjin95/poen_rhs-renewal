var row_one_id = '';
var tabledata_BSA = [];
var flag_id_search = false;

async function 재제조현황_시작() {
	flag_재제조현황 = false;
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	
	관리번호 = '';
	if(_management_id.value == '') {
		flag_id_search = false;
	} else {
		flag_id_search = true;
	}

	재제조현황_조회(flag_id_search);
}

async function 재제조현황_조회(flag_id_search = false) {
	if(worker == '') return;
	find_array = undefined;
	count(BSA재제조, { 관리번호 : { $exists: true } });
	await delay();
	
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		if(flag_id_search == false) {
			var now = new Date();
			var 기준일 = new Date(now.setMonth(now.getYear() - 2));

			find_query(BSA재제조, { 관리번호: { $exists : true }});
			//find_query(BSA재제조, { 입고 : { $gte : 기준일 }});
			await delay();
			await sleep(100);
		} else {
			find(BSA재제조, _management_id.value);
			await delay();
		}
		await sleep(200);

		//for(var i = 0; i < find_array.length; i++) {
		//	delete find_array[i].적재No;
		//	delete find_array[i].입고;
		//	delete find_array[i].제조투입;
		//	delete find_array[i].세척;
		//	delete find_array[i].기초검사;
		//	delete find_array[i].분해조립;
		//	delete find_array[i].성능검사;
		//	delete find_array[i].EOL;
		//	delete find_array[i].마지막충전일;
		//}
		tabledata_BSA = find_array;
		
		row_one_id = find_array[0].관리번호;
		
	}

	var table = new Tabulator("#grid_BSA", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_BSA, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"차종", field:"차종", sorter:"string"},
			{title:"품번", field:"품번", sorter:"string"},
			{title:"RO_no", field:"RO_no", sorter:"string"},
			{title:"공정단계", field:"공정단계", sorter:"string"},
			//{title:"적재No", field:"적재No", sorter:"string"},
			//{title:"입고", field:"입고", sorter:"string"},
			//{title:"제조투입", field:"제조투입", sorter:"string"},
			//{title:"세척", field:"세척", sorter:"string"},
			//{title:"기초검사", field:"기초검사", sorter:"string"},
			//{title:"분해조립", field:"분해조립", sorter:"string"},
			//{title:"성능검사", field:"성능검사", sorter:"string"},
			//{title:"EOL", field:"EOL", sorter:"string"},
			{title:"출하", field:"출하", sorter:"string"},
			{title:"소재지", field:"소재지", sorter:"string"},
		],
	});

	var progress = document.getElementById('progress');
	table.on("rowClick", async function(e, row){
		console.log('selected 관리번호: ',  row.getData().관리번호);
		m_id = row.getData().관리번호;
		row_one_id = m_id;
		
		document.getElementById('m_id').innerHTML = '관리번호: ' + m_id;

		await grid_입고(m_id);
		progress.value = 1 / 18 * 100;

		await grid_세척(m_id);
		progress.value = 2 / 18 * 100;

		await grid_기초검사(m_id);
		progress.value = 3 / 18 * 100;

		await grid_분해조립(m_id);
		progress.value = 4 / 18 * 100;

		await grid_성능검사(m_id);
		progress.value = 5 / 18 * 100;

		await grid_EOL(m_id);
		progress.value = 6 / 18 * 100;

		await grid_출하정보(m_id);
		progress.value = 7 / 18 * 100;

		await grid_특이사항(m_id);
		progress.value = 8 / 18 * 100;

		await grid_교체부품상세1(m_id);
		progress.value = 9 / 18 * 100;

		await grid_교체부품상세2(m_id);
		progress.value = 10 / 18 * 100;

		await grid_교체부품상세3(m_id);
		progress.value = 11 / 18 * 100;

		await grid_교체부품상세4(m_id);
		progress.value = 12 / 18 * 100;

		await grid_교체부품상세5(m_id);
		progress.value = 13 / 18 * 100;

		await grid_교체부품상세6(m_id);
		progress.value = 14 / 18 * 100;

		await grid_교체부품상세7(m_id);
		progress.value = 15 / 18 * 100;

		await grid_교체부품상세8(m_id);
		progress.value = 16 / 18 * 100;

		await grid_교체부품상세9(m_id);
		progress.value = 17 / 18 * 100;

		await grid_교체부품상세10(m_id);
		progress.value = 18 / 18 * 100;

		return;
	});

	if(_management_id.value == '' && row_one_id == '') return;
	document.getElementById('m_id').innerHTML = '관리번호: ' + row_one_id;

	await grid_입고(row_one_id);
	progress.value = 1 / 18 * 100;

	await grid_세척(row_one_id);
	progress.value = 2 / 18 * 100;

	await grid_기초검사(row_one_id);
	progress.value = 3 / 18 * 100;

	await grid_분해조립(row_one_id);
	progress.value = 4 / 18 * 100;

	await grid_성능검사(row_one_id);
	progress.value = 5 / 18 * 100;

	await grid_EOL(row_one_id);
	progress.value = 6 / 18 * 100;

	await grid_출하정보(row_one_id);
	progress.value = 7 / 18 * 100;

	await grid_특이사항(row_one_id);
	progress.value = 8 / 18 * 100;

	await grid_교체부품상세1(row_one_id);
	progress.value = 9 / 18 * 100;

	await grid_교체부품상세2(row_one_id);
	progress.value = 10 / 18 * 100;

	await grid_교체부품상세3(row_one_id);
	progress.value = 11 / 18 * 100;

	await grid_교체부품상세4(row_one_id);
	progress.value = 12 / 18 * 100;

	await grid_교체부품상세5(row_one_id);
	progress.value = 13 / 18 * 100;

	await grid_교체부품상세6(row_one_id);
	progress.value = 14 / 18 * 100;

	await grid_교체부품상세7(row_one_id);
	progress.value = 15 / 18 * 100;

	await grid_교체부품상세8(row_one_id);
	progress.value = 16 / 18 * 100;

	await grid_교체부품상세9(row_one_id);
	progress.value = 17 / 18 * 100;

	await grid_교체부품상세10(row_one_id);
	progress.value = 18 / 18 * 100;
};

async function delete_bsa() {
	console.log('delete : ', row_one_id);
	if(row_one_id == '' || row_one_id == null) return;
	deleteOne(BSA재제조, row_one_id);
	await delay();

	deleteOne(입고, row_one_id);
	await delay();
	progress.value = 1 / 18 * 100;

	deleteOne(세척, row_one_id);
	await delay();
	progress.value = 2 / 18 * 100;

	deleteOne(기초검사, row_one_id);
	await delay();
	progress.value = 3 / 18 * 100;

	deleteOne(분해조립, row_one_id);
	await delay();
	progress.value = 4 / 18 * 100;

	deleteOne(성능검사, row_one_id);
	await delay();
	progress.value = 5 / 18 * 100;

	deleteOne(EOL, row_one_id);
	await delay();
	progress.value = 6 / 18 * 100;

	deleteOne(출하정보, row_one_id);
	await delay();
	progress.value = 7 / 18 * 100;

	deleteOne(특이사항, row_one_id);
	await delay();
	progress.value = 8 / 18 * 100;

	deleteOne(교체부품상세1 , row_one_id);
	await delay();
	progress.value = 9 / 18 * 100;

	deleteOne(교체부품상세2 , row_one_id);
	await delay();
	progress.value = 10 / 18 * 100;

	deleteOne(교체부품상세3 , row_one_id);
	await delay();
	progress.value = 11 / 18 * 100;

	deleteOne(교체부품상세4 , row_one_id);
	await delay();
	progress.value = 12 / 18 * 100;

	deleteOne(교체부품상세5 , row_one_id);
	await delay();
	progress.value = 13 / 18 * 100;

	deleteOne(교체부품상세6 , row_one_id);
	await delay();
	progress.value = 14 / 18 * 100;

	deleteOne(교체부품상세7 , row_one_id);
	await delay();
	progress.value = 15 / 18 * 100;

	deleteOne(교체부품상세8 , row_one_id);
	await delay();
	progress.value = 16 / 18 * 100;

	deleteOne(교체부품상세9 , row_one_id);
	await delay();
	progress.value = 17 / 18 * 100;

	deleteOne(교체부품상세10 , row_one_id);
	await delay();
	progress.value = 18 / 18 * 100;
	if(delete_count > 0) {
		alert('삭제 되었습니다.');
	}
	재제조현황_조회(false);
}

async function grid_입고(m_id) {
	if(worker == '') return;
	var tabledata_입고 = [];

		find(입고, m_id);
		await delay();
		tabledata_입고 = find_array;
		console.log('입고 : ', find_array);;

	var table_입고 = new Tabulator("#grid_입고정보", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_입고, 
		//autoColumns:true
	});
}

async function grid_세척(m_id) {
	if(worker == '') return;
	var tabledata_세척 = [];

		find(세척, m_id);
		await delay();
		tabledata_세척 = find_array;
		console.log('세척 : ', find_array);;

	var table_세척 = new Tabulator("#grid_세척정보", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_세척, 
		//autoColumns:true
	});
}

async function grid_기초검사(m_id) {
	if(worker == '') return;
	var tabledata_기초검사 = [];

		find(기초검사, m_id);
		await delay();
		await sleep(100);
		tabledata_기초검사 = find_array;
		console.log('기초검사 : ', find_array);;

	var table_기초검사 = new Tabulator("#grid_기초검사", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_기초검사, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"육안검사 외부", field:"육안검사_외부", sorter:"string"},
			{title:"육안검사 내부", field:"육안검사_내부", sorter:"string"},
			{title:"기밀검사 케이스", field:"기밀검사_케이스", sorter:"string"},
			{title:"기밀검사 냉각유로", field:"기밀검사_냉각유로", sorter:"string"},
			{title:"절연검사 Plus", field:"절연검사_Plus", sorter:"string"},
			{title:"절연검사 Minus", field:"절연검사_Minus", sorter:"string"},
			{title:"토크검사 UPR/C", field:"토크검사_UPR_C", sorter:"string"},
			{title:"토크검사 버스바", field:"토크검사_버스바", sorter:"string"},
			{title:"통신검사 DTC코드", field:"통신검사_DTC코드", sorter:"string"},
			{title:"통신검사 팩전압", field:"통신검사_팩전압", sorter:"string"},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string"},
			{title:"통신검사 릴레이구동", field:"통신검사_릴레이구동", sorter:"string"},
			{title:"완료일", field:"완료일", sorter:"string"},
			{title:"검사자", field:"검사자", sorter:"string"},
		],
	});
}

async function grid_분해조립(m_id) {
	if(worker == '') return;
	var tabledata_분해조립 = [];

		find(분해조립, m_id);
		await delay();
		await sleep(100);
	
		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].BMU' + i + ' == \'\') delete find_array[0].BMU' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].CMU' + i + ' == \'\') delete find_array[0].CMU' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].PRA' + i + ' == \'\') delete find_array[0].PRA' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].SPA' + i + ' == \'\') delete find_array[0].SPA' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].LWR_C' + i + ' == \'\') delete find_array[0].LWR_C' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].UPR_C' + i + ' == \'\') delete find_array[0].UPR_C' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].Relay' + i + ' == \'\') delete find_array[0].Relay' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].HV_CNTR' + i + ' == \'\') delete find_array[0].HV_CNTR' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].Heating_CNTR' + i + ' == \'\') delete find_array[0].Heating_CNTR' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].FuseBox' + i + ' == \'\') delete find_array[0].FuseBox' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].LV_W_H' + i + ' == \'\') delete find_array[0].LV_W_H' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].HV_W_H' + i + ' == \'\') delete find_array[0].HV_W_H' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].온도센서' + i + ' == \'\') delete find_array[0].온도센서' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		//for(var i = 1; i <= 10; i++) {
		//	var str = 'if(find_array[0].BMA' + i + ' == \'\') delete find_array[0].BMA' + i +';';
		//	console.log(str);
		//	eval(str);
		//}

		tabledata_분해조립 = find_array;
		console.log('분해조립 : ', find_array);
		
	var table_분해조립 = new Tabulator("#grid_분해조립", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_분해조립, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"BMU 1", field:"BMU1", sorter:"string"},
			{title:"BMU 2", field:"BMU2", sorter:"string"},
			{title:"BMU 3", field:"BMU3", sorter:"string"},
			{title:"BMU 4", field:"BMU4", sorter:"string"},
			{title:"BMU 5", field:"BMU5", sorter:"string"},
			{title:"BMU 6", field:"BMU6", sorter:"string"},
			{title:"BMU 7", field:"BMU7", sorter:"string"},
			{title:"BMU 8", field:"BMU8", sorter:"string"},
			{title:"BMU 9", field:"BMU9", sorter:"string"},
			{title:"BMU 10", field:"BMU10", sorter:"string"},
			{title:"CMU 1", field:"CMU1", sorter:"string"},
			{title:"CMU 2", field:"CMU2", sorter:"string"},
			{title:"CMU 3", field:"CMU3", sorter:"string"},
			{title:"CMU 4", field:"CMU4", sorter:"string"},
			{title:"CMU 5", field:"CMU5", sorter:"string"},
			{title:"CMU 6", field:"CMU6", sorter:"string"},
			{title:"CMU 7", field:"CMU7", sorter:"string"},
			{title:"CMU 8", field:"CMU8", sorter:"string"},
			{title:"CMU 9", field:"CMU9", sorter:"string"},
			{title:"CMU 10", field:"CMU10", sorter:"string"},
			{title:"PRA 1", field:"PRA1", sorter:"string"},
			{title:"PRA 2", field:"PRA2", sorter:"string"},
			{title:"PRA 3", field:"PRA3", sorter:"string"},
			{title:"PRA 4", field:"PRA4", sorter:"string"},
			{title:"PRA 5", field:"PRA5", sorter:"string"},
			{title:"PRA 6", field:"PRA6", sorter:"string"},
			{title:"PRA 7", field:"PRA7", sorter:"string"},
			{title:"PRA 8", field:"PRA8", sorter:"string"},
			{title:"PRA 9", field:"PRA9", sorter:"string"},
			{title:"PRA 10", field:"PRA10", sorter:"string"},
			{title:"SPA 1", field:"SPA1", sorter:"string"},
			{title:"SPA 2", field:"SPA2", sorter:"string"},
			{title:"SPA 3", field:"SPA3", sorter:"string"},
			{title:"SPA 4", field:"SPA4", sorter:"string"},
			{title:"SPA 5", field:"SPA5", sorter:"string"},
			{title:"SPA 6", field:"SPA6", sorter:"string"},
			{title:"SPA 7", field:"SPA7", sorter:"string"},
			{title:"SPA 8", field:"SPA8", sorter:"string"},
			{title:"SPA 9", field:"SPA9", sorter:"string"},
			{title:"SPA 10", field:"SPA10", sorter:"string"},
			{title:"LWR Case 1", field:"LWR_C1", sorter:"string"},
			{title:"LWR Case 2", field:"LWR_C2", sorter:"string"},
			{title:"LWR Case 3", field:"LWR_C3", sorter:"string"},
			{title:"LWR Case 4", field:"LWR_C4", sorter:"string"},
			{title:"LWR Case 5", field:"LWR_C5", sorter:"string"},
			{title:"LWR Case 6", field:"LWR_C6", sorter:"string"},
			{title:"LWR Case 7", field:"LWR_C7", sorter:"string"},
			{title:"LWR Case 8", field:"LWR_C8", sorter:"string"},
			{title:"LWR Case 9", field:"LWR_C9", sorter:"string"},
			{title:"LWR Case 10", field:"LWR_C10", sorter:"string"},
			{title:"UPR Case 1", field:"UPR_C1", sorter:"string"},
			{title:"UPR Case 2", field:"UPR_C2", sorter:"string"},
			{title:"UPR Case 3", field:"UPR_C3", sorter:"string"},
			{title:"UPR Case 4", field:"UPR_C4", sorter:"string"},
			{title:"UPR Case 5", field:"UPR_C5", sorter:"string"},
			{title:"UPR Case 6", field:"UPR_C6", sorter:"string"},
			{title:"UPR Case 7", field:"UPR_C7", sorter:"string"},
			{title:"UPR Case 8", field:"UPR_C8", sorter:"string"},
			{title:"UPR Case 9", field:"UPR_C9", sorter:"string"},
			{title:"UPR Case 10", field:"UPR_C10", sorter:"string"},
			{title:"PBE", field:"PBE", sorter:"string"},
			{title:"Gasket", field:"Gasket", sorter:"string"},
			{title:"Relay 1", field:"Relay1", sorter:"string"},
			{title:"Relay 2", field:"Relay2", sorter:"string"},
			{title:"Relay 3", field:"Relay3", sorter:"string"},
			{title:"Relay 4", field:"Relay4", sorter:"string"},
			{title:"Relay 5", field:"Relay5", sorter:"string"},
			{title:"Relay 6", field:"Relay6", sorter:"string"},
			{title:"Relay 7", field:"Relay7", sorter:"string"},
			{title:"Relay 8", field:"Relay8", sorter:"string"},
			{title:"Relay 9", field:"Relay9", sorter:"string"},
			{title:"Relay 10", field:"Relay10", sorter:"string"},
			{title:"HV CNTR 1", field:"HV_CNTR1", sorter:"string"},
			{title:"HV CNTR 2", field:"HV_CNTR2", sorter:"string"},
			{title:"HV CNTR 3", field:"HV_CNTR3", sorter:"string"},
			{title:"HV CNTR 4", field:"HV_CNTR4", sorter:"string"},
			{title:"HV CNTR 5", field:"HV_CNTR5", sorter:"string"},
			{title:"HV CNTR 6", field:"HV_CNTR6", sorter:"string"},
			{title:"HV CNTR 7", field:"HV_CNTR7", sorter:"string"},
			{title:"HV CNTR 8", field:"HV_CNTR8", sorter:"string"},
			{title:"HV CNTR 9", field:"HV_CNTR9", sorter:"string"},
			{title:"HV CNTR 10", field:"HV_CNTR10", sorter:"string"},
			{title:"Heating CNTR 1", field:"Heating_CNTR1", sorter:"string"},
			{title:"Heating CNTR 2", field:"Heating_CNTR2", sorter:"string"},
			{title:"Heating CNTR 3", field:"Heating_CNTR3", sorter:"string"},
			{title:"Heating CNTR 4", field:"Heating_CNTR4", sorter:"string"},
			{title:"Heating CNTR 5", field:"Heating_CNTR5", sorter:"string"},
			{title:"Heating CNTR 6", field:"Heating_CNTR6", sorter:"string"},
			{title:"Heating CNTR 7", field:"Heating_CNTR7", sorter:"string"},
			{title:"Heating CNTR 8", field:"Heating_CNTR8", sorter:"string"},
			{title:"Heating CNTR 9", field:"Heating_CNTR9", sorter:"string"},
			{title:"Heating CNTR 10", field:"Heating_CNTR10", sorter:"string"},
			{title:"FuseBox 1", field:"FuseBox1", sorter:"string"},
			{title:"FuseBox 2", field:"FuseBox2", sorter:"string"},
			{title:"FuseBox 3", field:"FuseBox3", sorter:"string"},
			{title:"FuseBox 4", field:"FuseBox4", sorter:"string"},
			{title:"FuseBox 5", field:"FuseBox5", sorter:"string"},
			{title:"FuseBox 6", field:"FuseBox6", sorter:"string"},
			{title:"FuseBox 7", field:"FuseBox7", sorter:"string"},
			{title:"FuseBox 8", field:"FuseBox8", sorter:"string"},
			{title:"FuseBox 9", field:"FuseBox9", sorter:"string"},
			{title:"FuseBox 10", field:"FuseBox10", sorter:"string"},
			{title:"LV W/H 1", field:"LV_W_H1", sorter:"string"},
			{title:"LV W/H 2", field:"LV_W_H2", sorter:"string"},
			{title:"LV W/H 3", field:"LV_W_H3", sorter:"string"},
			{title:"LV W/H 4", field:"LV_W_H4", sorter:"string"},
			{title:"LV W/H 5", field:"LV_W_H5", sorter:"string"},
			{title:"LV W/H 6", field:"LV_W_H6", sorter:"string"},
			{title:"LV W/H 7", field:"LV_W_H7", sorter:"string"},
			{title:"LV W/H 8", field:"LV_W_H8", sorter:"string"},
			{title:"LV W/H 9", field:"LV_W_H9", sorter:"string"},
			{title:"LV W/H 10", field:"LV_W_H10", sorter:"string"},
			{title:"HV W/H 1", field:"HV_W_H1", sorter:"string"},
			{title:"HV W/H 2", field:"HV_W_H2", sorter:"string"},
			{title:"HV W/H 3", field:"HV_W_H3", sorter:"string"},
			{title:"HV W/H 4", field:"HV_W_H4", sorter:"string"},
			{title:"HV W/H 5", field:"HV_W_H5", sorter:"string"},
			{title:"HV W/H 6", field:"HV_W_H6", sorter:"string"},
			{title:"HV W/H 7", field:"HV_W_H7", sorter:"string"},
			{title:"HV W/H 8", field:"HV_W_H8", sorter:"string"},
			{title:"HV W/H 9", field:"HV_W_H9", sorter:"string"},
			{title:"HV W/H 10", field:"HV_W_H10", sorter:"string"},
			{title:"온도센서 1", field:"온도센서1", sorter:"string"},
			{title:"온도센서 2", field:"온도센서2", sorter:"string"},
			{title:"온도센서 3", field:"온도센서3", sorter:"string"},
			{title:"온도센서 4", field:"온도센서4", sorter:"string"},
			{title:"온도센서 5", field:"온도센서5", sorter:"string"},
			{title:"온도센서 6", field:"온도센서6", sorter:"string"},
			{title:"온도센서 7", field:"온도센서7", sorter:"string"},
			{title:"온도센서 8", field:"온도센서8", sorter:"string"},
			{title:"온도센서 9", field:"온도센서9", sorter:"string"},
			{title:"온도센서 10", field:"온도센서10", sorter:"string"},
			{title:"Busbars", field:"Busbars", sorter:"string"},
			{title:"BMA 1", field:"BMA1", sorter:"string"},
			{title:"BMA 2", field:"BMA2", sorter:"string"},
			{title:"BMA 3", field:"BMA3", sorter:"string"},
			{title:"BMA 4", field:"BMA4", sorter:"string"},
			{title:"BMA 5", field:"BMA5", sorter:"string"},
			{title:"BMA 6", field:"BMA6", sorter:"string"},
			{title:"BMA 7", field:"BMA7", sorter:"string"},
			{title:"BMA 8", field:"BMA8", sorter:"string"},
			{title:"BMA 9", field:"BMA9", sorter:"string"},
			{title:"BMA 10", field:"BMA10", sorter:"string"},
			{title:"ETC", field:"ETC", sorter:"string"},
			{title:"완료일", field:"완료일", sorter:"string"},
			{title:"작업자", field:"작업자", sorter:"string"},
		],
	});
}

async function grid_성능검사(m_id) {
	if(worker == '') return;
	var tabledata_성능검사 = [];

		find(성능검사, m_id);
		await delay();
		tabledata_성능검사 = find_array;
		console.log('성능검사 : ', find_array);;

	var table_성능검사 = new Tabulator("#grid_성능검사", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_성능검사, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"UPR/C 조립", field:"UPR_C조립", sorter:"string"},
			{title:"기밀검사 케이스", field:"기밀검사_케이스", sorter:"string"},
			{title:"기밀검사 냉각유로", field:"기밀검사_냉각유로", sorter:"string"},
			{title:"절연검사 Plus", field:"절연검사_Plus", sorter:"string"},
			{title:"절연검사 Minus", field:"절연검사_Minus", sorter:"string"},
			{title:"토크검사 UPR/C", field:"토크검사_UPR_C", sorter:"string"},
			{title:"토크검사 버스바", field:"토크검사_버스바", sorter:"string"},
			{title:"통신검사 DTC코드", field:"통신검사_DTC코드", sorter:"string"},
			{title:"통신검사 팩전압", field:"통신검사_팩전압", sorter:"string"},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string"},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string"},
			{title:"통신검사 릴레이구동", field:"통신검사_릴레이구동", sorter:"string"},
			{title:"완료일", field:"완료일", sorter:"string"},
			{title:"검사자", field:"검사자", sorter:"string"},
		],
	});
}

async function grid_EOL(m_id) {
	if(worker == '') return;
	var tabledata_EOL = [];

		find(EOL, m_id);
		await delay();
		tabledata_EOL = find_array;
		console.log('EOL : ', find_array);;

	var table_EOL = new Tabulator("#grid_EOL", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_EOL, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"용량평가", field:"용량평가", sorter:"string"},
			{title:"SOC60Percent", field:"SOC60Percent", sorter:"string"},
			{title:"DCIR", field:"DCIR", sorter:"string"},
			{title:"완료일", field:"완료일", sorter:"string"},
			{title:"검사자", field:"검사자", sorter:"string"},
		],
	});
}

async function grid_출하정보(m_id) {
	if(worker == '') return;
	var tabledata_출하정보 = [];

		find(출하정보, m_id);
		await delay();
		await sleep(100);
		tabledata_출하정보 = find_array;
		console.log('출하정보 : ', find_array);;

	var table_출하정보 = new Tabulator("#grid_출하정보", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_출하정보, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"출하일", field:"출하일", sorter:"string"},
			{title:"출하코드", field:"출하코드", sorter:"string"},
			{title:"납품처", field:"납품처", sorter:"string"},
		],
	});
}

async function grid_특이사항(m_id) {
	if(worker == '') return;
	var tabledata_특이사항 = [];

		find(특이사항, m_id);
		await delay();
		tabledata_특이사항 = find_array;
		console.log('특이사항 : ', find_array);;

	var table_특이사항 = new Tabulator("#grid_특이사항", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_특이사항, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"특이사항", field:"특이사항", sorter:"string"},
		],
	});
}

async function grid_교체부품상세1(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세1 = [];

		find(교체부품상세1, m_id);
		await delay();
		tabledata_교체부품상세1 = find_array;
		console.log('교체부품상세1 : ', find_array);;

	var table_교체부품상세1 = new Tabulator("#grid_교체부품상세1", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세1, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세2(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세2 = [];

		find(교체부품상세2, m_id);
		await delay();
		tabledata_교체부품상세2 = find_array;
		console.log('교체부품상세2 : ', find_array);;

	var table_교체부품상세2 = new Tabulator("#grid_교체부품상세2", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세2, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세3(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세3 = [];

		find(교체부품상세3, m_id);
		await delay();
		tabledata_교체부품상세3 = find_array;
		console.log('교체부품상세3 : ', find_array);;

	var table_교체부품상세3 = new Tabulator("#grid_교체부품상세3", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세3, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세4(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세4 = [];

		find(교체부품상세4, m_id);
		await delay();
		tabledata_교체부품상세4 = find_array;
		console.log('교체부품상세4 : ', find_array);;

	var table_교체부품상세4 = new Tabulator("#grid_교체부품상세4", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세4, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세5(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세5 = [];

		find(교체부품상세5, m_id);
		await delay();
		tabledata_교체부품상세5 = find_array;
		console.log('교체부품상세5 : ', find_array);;

	var table_교체부품상세5 = new Tabulator("#grid_교체부품상세5", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세5, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세6(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세6 = [];

		find(교체부품상세6, m_id);
		await delay();
		tabledata_교체부품상세6 = find_array;
		console.log('교체부품상세6 : ', find_array);;

	var table_교체부품상세6 = new Tabulator("#grid_교체부품상세6", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세6, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세7(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세7 = [];

		find(교체부품상세7, m_id);
		await delay();
		tabledata_교체부품상세7 = find_array;
		console.log('교체부품상세7 : ', find_array);;

	var table_교체부품상세7 = new Tabulator("#grid_교체부품상세7", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세7, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세8(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세8 = [];

		find(교체부품상세8, m_id);
		await delay();
		tabledata_교체부품상세8 = find_array;
		console.log('교체부품상세8 : ', find_array);;

	var table_교체부품상세8 = new Tabulator("#grid_교체부품상세8", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세8, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"orogin_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세9(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세9 = [];

		find(교체부품상세9, m_id);
		await delay();
		tabledata_교체부품상세9 = find_array;
		console.log('교체부품상세9 : ', find_array);;

	var table_교체부품상세9 = new Tabulator("#grid_교체부품상세9", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세9, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"OROGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

async function grid_교체부품상세10(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세10 = [];

		find(교체부품상세10, m_id);
		await delay();
		tabledata_교체부품상세10 = find_array;
		console.log('교체부품상세10 : ', find_array);;

	var table_교체부품상세10 = new Tabulator("#grid_교체부품상세10", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세10, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string"},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string"},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string"},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string"},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string"},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string"},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string"},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string"},
			{title:"교체사유", field:"교체사유", sorter:"string"},
		],
	});
}

