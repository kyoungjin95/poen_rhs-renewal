var row_one_id = '';
var tabledata_BSA = [];
var flag_id_search = false;

async function 재제조현황_시작() {
	flag_재제조현황 = false;
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

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

		for(var i = 0; i < find_array.length; i++) {
			delete find_array[i].적재No;
			delete find_array[i].입고;
			delete find_array[i].제조투입;
			delete find_array[i].세척;
			delete find_array[i].기초검사;
			delete find_array[i].분해조립;
			delete find_array[i].성능검사;
			delete find_array[i].EOL;
		}
		tabledata_BSA = find_array;
		
		row_one_id = find_array[0].관리번호;
		
	}

	var table = new Tabulator("#grid_BSA", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_BSA, 
		autoColumns:true,
		
	});

	var progress = document.getElementById('progress');
	table.on("rowClick", async function(e, row){
		console.log('selected 관리번호: ',  row.getData().관리번호);
		m_id = row.getData().관리번호;
		row_one_id = m_id;

		await grid_기초검사(m_id);
		progress.value = 1 / 16 * 100;

		await grid_분해조립(m_id);
		progress.value = 2 / 16 * 100;

		await grid_성능검사(m_id);
		progress.value = 3 / 16 * 100;

		await grid_EOL(m_id);
		progress.value = 4 / 16 * 100;

		await grid_출하정보(m_id);
		progress.value = 5 / 16 * 100;

		await grid_특이사항(m_id);
		progress.value = 6 / 16 * 100;

		await grid_교체부품상세1(m_id);
		progress.value = 7 / 16 * 100;

		await grid_교체부품상세2(m_id);
		progress.value = 8 / 16 * 100;

		await grid_교체부품상세3(m_id);
		progress.value = 9 / 16 * 100;

		await grid_교체부품상세4(m_id);
		progress.value = 10 / 16 * 100;

		await grid_교체부품상세5(m_id);
		progress.value = 11 / 16 * 100;

		await grid_교체부품상세6(m_id);
		progress.value = 12 / 16 * 100;

		await grid_교체부품상세7(m_id);
		progress.value = 13 / 16 * 100;

		await grid_교체부품상세8(m_id);
		progress.value = 14 / 16 * 100;

		await grid_교체부품상세9(m_id);
		progress.value = 15 / 16 * 100;

		await grid_교체부품상세10(m_id);
		progress.value = 16 / 16 * 100;

		return;
	});

	if(_management_id.value == '') return;

	await grid_기초검사(row_one_id);
	progress.value = 1 / 16 * 100;

	await grid_분해조립(row_one_id);
	progress.value = 2 / 16 * 100;

	await grid_성능검사(row_one_id);
	progress.value = 3 / 16 * 100;

	await grid_EOL(row_one_id);
	progress.value = 4 / 16 * 100;

	await grid_출하정보(row_one_id);
	progress.value = 5 / 16 * 100;

	await grid_특이사항(row_one_id);
	progress.value = 6 / 16 * 100;

	await grid_교체부품상세1(row_one_id);
	progress.value = 7 / 16 * 100;

	await grid_교체부품상세2(row_one_id);
	progress.value = 8 / 16 * 100;

	await grid_교체부품상세3(row_one_id);
	progress.value = 9 / 16 * 100;

	await grid_교체부품상세4(row_one_id);
	progress.value = 10 / 16 * 100;

	await grid_교체부품상세5(row_one_id);
	progress.value = 11 / 16 * 100;

	await grid_교체부품상세6(row_one_id);
	progress.value = 12 / 16 * 100;

	await grid_교체부품상세7(row_one_id);
	progress.value = 13 / 16 * 100;

	await grid_교체부품상세8(row_one_id);
	progress.value = 14 / 16 * 100;

	await grid_교체부품상세9(row_one_id);
	progress.value = 15 / 16 * 100;

	await grid_교체부품상세10(row_one_id);
	progress.value = 16 / 16 * 100;
};

async function delete_bsa() {
	console.log('delete : ', row_one_id);
	if(row_one_id == '' || row_one_id == null) return;
	deleteOne(BSA재제조, row_one_id);
	await delay();

	deleteOne(기초검사, row_one_id);
	await delay();
	progress.value = 1 / 16 * 100;

	deleteOne(분해조립, row_one_id);
	await delay();
	progress.value = 2 / 16 * 100;

	deleteOne(성능검사, row_one_id);
	await delay();
	progress.value = 3 / 16 * 100;

	deleteOne(EOL, row_one_id);
	await delay();
	progress.value = 4 / 16 * 100;

	deleteOne(출하정보, row_one_id);
	await delay();
	progress.value = 5 / 16 * 100;

	deleteOne(특이사항, row_one_id);
	await delay();
	progress.value = 6 / 16 * 100;

	deleteOne(교체부품상세1 , row_one_id);
	await delay();
	progress.value = 7 / 16 * 100;

	deleteOne(교체부품상세2 , row_one_id);
	await delay();
	progress.value = 8 / 16 * 100;

	deleteOne(교체부품상세3 , row_one_id);
	await delay();
	progress.value = 9 / 16 * 100;

	deleteOne(교체부품상세4 , row_one_id);
	await delay();
	progress.value = 10 / 16 * 100;

	deleteOne(교체부품상세5 , row_one_id);
	await delay();
	progress.value = 11 / 16 * 100;

	deleteOne(교체부품상세6 , row_one_id);
	await delay();
	progress.value = 12 / 16 * 100;

	deleteOne(교체부품상세7 , row_one_id);
	await delay();
	progress.value = 13 / 16 * 100;

	deleteOne(교체부품상세8 , row_one_id);
	await delay();
	progress.value = 14 / 16 * 100;

	deleteOne(교체부품상세9 , row_one_id);
	await delay();
	progress.value = 15 / 16 * 100;

	deleteOne(교체부품상세10 , row_one_id);
	await delay();
	progress.value = 16 / 16 * 100;
	if(delete_count > 0) {
		alert('삭제 되었습니다.');
	}
	재제조현황_조회(false);
}

async function grid_기초검사(m_id) {
	if(worker == '') return;
	var tabledata_기초검사 = [];

	count(기초검사, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(기초검사, m_id);
		await delay();
		await sleep(100);
		tabledata_기초검사 = find_array;
		console.log('기초검사 : ', find_array);;
	}

	var table_기초검사 = new Tabulator("#grid_기초검사", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_기초검사, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"육안검사 외부", field:"육안검사_외부", sorter:"string", width:130},
			{title:"육안검사 내부", field:"육안검사_내부", sorter:"string", width:130},
			{title:"기밀검사 케이스", field:"기밀검사_케이스", sorter:"string", width:130},
			{title:"기밀검사 냉각유로", field:"기밀검사_냉각유로", sorter:"string", width:130},
			{title:"절연검사 Plus", field:"절연검사_Plus", sorter:"string", width:130},
			{title:"절연검사 Minus", field:"절연검사_Minus", sorter:"string", width:130},
			{title:"토크검사 UPR/C", field:"토크검사_UPR_C", sorter:"string", width:130},
			{title:"토크검사 버스바", field:"토크검사_버스바", sorter:"string", width:130},
			{title:"통신검사 DTC코드", field:"통신검사_DTC코드", sorter:"string", width:130},
			{title:"통신검사 팩전압", field:"통신검사_팩전압", sorter:"string", width:130},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string", width:130},
			{title:"통신검사 릴레이구동", field:"통신검사_릴레이구동", sorter:"string", width:130},
			{title:"완료일", field:"완료일", sorter:"string", width:130},
			{title:"검사자", field:"검사자", sorter:"string", width:130},
		],
	});
}

async function grid_분해조립(m_id) {
	if(worker == '') return;
	var tabledata_분해조립 = [];

	count(분해조립, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(분해조립, m_id);
		await delay();
		await sleep(100);
		tabledata_분해조립 = find_array;
		console.log('분해조립 : ', find_array);;
	}

	var table_분해조립 = new Tabulator("#grid_분해조립", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_분해조립, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"UPR/C", field:"UPR_C", sorter:"string", width:130},
			{title:"PBE", field:"PBE", sorter:"string", width:130},
			{title:"Gasket", field:"Gasket", sorter:"string", width:130},
			{title:"Busbars", field:"Busbars", sorter:"string", width:130},
			{title:"W_H", field:"W_H", sorter:"string", width:130},
			{title:"SPA", field:"SPA", sorter:"string", width:130},
			{title:"PRA", field:"PRA", sorter:"string", width:130},
			{title:"FuseBox", field:"FuseBox", sorter:"string", width:130},
			{title:"Relay", field:"Relay", sorter:"string", width:130},
			{title:"CMU", field:"CMU", sorter:"string", width:130},
			{title:"BMU", field:"BMU", sorter:"string", width:130},
			{title:"BMA", field:"BMA", sorter:"string", width:130},
			{title:"LWR/C", field:"LWR_C", sorter:"string", width:130},
			{title:"ETC", field:"ETC", sorter:"string", width:130},
			{title:"완료일", field:"완료일", sorter:"string", width:130},
			{title:"작업자", field:"작업자", sorter:"string", width:130},
		],
	});
}

async function grid_성능검사(m_id) {
	if(worker == '') return;
	var tabledata_성능검사 = [];

	count(성능검사, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(성능검사, m_id);
		await delay();
		tabledata_성능검사 = find_array;
		console.log('성능검사 : ', find_array);;
	}

	var table_성능검사 = new Tabulator("#grid_성능검사", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_성능검사, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"UPR/C 조립", field:"UPR_C조립", sorter:"string", width:130},
			{title:"기밀검사 케이스", field:"기밀검사_케이스", sorter:"string", width:130},
			{title:"기밀검사 냉각유로", field:"기밀검사_냉각유로", sorter:"string", width:130},
			{title:"절연검사 Plus", field:"절연검사_Plus", sorter:"string", width:130},
			{title:"절연검사 Minus", field:"절연검사_Minus", sorter:"string", width:130},
			{title:"토크검사 UPR/C", field:"토크검사_UPR_C", sorter:"string", width:130},
			{title:"토크검사 버스바", field:"토크검사_버스바", sorter:"string", width:130},
			{title:"통신검사 DTC코드", field:"통신검사_DTC코드", sorter:"string", width:130},
			{title:"통신검사 팩전압", field:"통신검사_팩전압", sorter:"string", width:130},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string", width:130},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string", width:130},
			{title:"통신검사 릴레이구동", field:"통신검사_릴레이구동", sorter:"string", width:130},
			{title:"완료일", field:"완료일", sorter:"string", width:130},
			{title:"검사자", field:"검사자", sorter:"string", width:130},
		],
	});
}

async function grid_EOL(m_id) {
	if(worker == '') return;
	var tabledata_EOL = [];

	count(EOL, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(EOL, m_id);
		await delay();
		tabledata_EOL = find_array;
		console.log('EOL : ', find_array);;
	}

	var table_EOL = new Tabulator("#grid_EOL", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_EOL, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"용량평가", field:"용량평가", sorter:"string", width:130},
			{title:"SOC60Percent", field:"SOC60Percent", sorter:"string", width:130},
			{title:"DCIR", field:"DCIR", sorter:"string", width:130},
			{title:"완료일", field:"완료일", sorter:"string", width:130},
			{title:"검사자", field:"검사자", sorter:"string", width:130},
		],
	});
}

async function grid_출하정보(m_id) {
	if(worker == '') return;
	var tabledata_출하정보 = [];

	count(출하정보, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(출하정보, m_id);
		await delay();
		await sleep(100);
		tabledata_출하정보 = find_array;
		console.log('출하정보 : ', find_array);;
	}

	var table_출하정보 = new Tabulator("#grid_출하정보", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_출하정보, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"출하일", field:"출하일", sorter:"string", width:130},
			{title:"출하코드", field:"출하코드", sorter:"string", width:130},
			{title:"납품처", field:"납품처", sorter:"string", width:130},
		],
	});
}

async function grid_특이사항(m_id) {
	if(worker == '') return;
	var tabledata_특이사항 = [];

	count(특이사항, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(특이사항, m_id);
		await delay();
		tabledata_특이사항 = find_array;
		console.log('특이사항 : ', find_array);;
	}

	var table_특이사항 = new Tabulator("#grid_특이사항", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_특이사항, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"특이사항", field:"특이사항", sorter:"string", width:1300},
		],
	});
}

async function grid_교체부품상세1(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세1 = [];

	count(교체부품상세1, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세1, m_id);
		await delay();
		tabledata_교체부품상세1 = find_array;
		console.log('교체부품상세1 : ', find_array);;
	}

	var table_교체부품상세1 = new Tabulator("#grid_교체부품상세1", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세1, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세2(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세2 = [];

	count(교체부품상세2, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세2, m_id);
		await delay();
		tabledata_교체부품상세2 = find_array;
		console.log('교체부품상세2 : ', find_array);;
	}

	var table_교체부품상세2 = new Tabulator("#grid_교체부품상세2", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세2, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세3(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세3 = [];

	count(교체부품상세3, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세3, m_id);
		await delay();
		tabledata_교체부품상세3 = find_array;
		console.log('교체부품상세3 : ', find_array);;
	}

	var table_교체부품상세3 = new Tabulator("#grid_교체부품상세3", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세3, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세4(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세4 = [];

	count(교체부품상세4, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세4, m_id);
		await delay();
		tabledata_교체부품상세4 = find_array;
		console.log('교체부품상세4 : ', find_array);;
	}

	var table_교체부품상세4 = new Tabulator("#grid_교체부품상세4", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세4, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세5(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세5 = [];

	count(교체부품상세5, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세5, m_id);
		await delay();
		tabledata_교체부품상세5 = find_array;
		console.log('교체부품상세5 : ', find_array);;
	}

	var table_교체부품상세5 = new Tabulator("#grid_교체부품상세5", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세5, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세6(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세6 = [];

	count(교체부품상세6, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세6, m_id);
		await delay();
		tabledata_교체부품상세6 = find_array;
		console.log('교체부품상세6 : ', find_array);;
	}

	var table_교체부품상세6 = new Tabulator("#grid_교체부품상세6", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세6, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세7(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세7 = [];

	count(교체부품상세7, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세7, m_id);
		await delay();
		tabledata_교체부품상세7 = find_array;
		console.log('교체부품상세7 : ', find_array);;
	}

	var table_교체부품상세7 = new Tabulator("#grid_교체부품상세7", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세7, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세8(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세8 = [];

	count(교체부품상세8, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세8, m_id);
		await delay();
		tabledata_교체부품상세8 = find_array;
		console.log('교체부품상세8 : ', find_array);;
	}

	var table_교체부품상세8 = new Tabulator("#grid_교체부품상세8", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세8, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"orogin_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세9(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세9 = [];

	count(교체부품상세9, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세9, m_id);
		await delay();
		tabledata_교체부품상세9 = find_array;
		console.log('교체부품상세9 : ', find_array);;
	}

	var table_교체부품상세9 = new Tabulator("#grid_교체부품상세9", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세9, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"OROGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

async function grid_교체부품상세10(m_id) {
	if(worker == '') return;
	var tabledata_교체부품상세10 = [];

	count(교체부품상세10, { 관리번호 : m_id });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find(교체부품상세10, m_id);
		await delay();
		tabledata_교체부품상세10 = find_array;
		console.log('교체부품상세10 : ', find_array);;
	}

	var table_교체부품상세10 = new Tabulator("#grid_교체부품상세10", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세10, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:130},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:130},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:130},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:130},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:130},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:130},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:130},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:130},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:130},
			{title:"교체사유", field:"교체사유", sorter:"string", width:130},
		],
	});
}

