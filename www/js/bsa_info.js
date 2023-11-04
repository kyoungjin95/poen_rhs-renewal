var row_one_id = '';
var 재제조번호;
var tabledata_BSA = [];
var _id;
var m_id;
var m_ids = [];
var flag_id_search = 0;
var table;
var table_입고;
var table_세척;
var table_기초검사;
var table_분해조립;
var table_성능검사;
var table_EOL;
var table_출하정보;
var table_특이사항;
var table_교체부품상세1;
var table_교체부품상세2;
var table_교체부품상세3;
var table_교체부품상세4;
var table_교체부품상세5;
var table_교체부품상세6;
var table_교체부품상세7;
var table_교체부품상세8;
var table_교체부품상세9;
var table_교체부품상세10;

async function 관리번호_변경() {
	var new_관리번호 = document.getElementById('new_관리번호').value;
	if(new_관리번호 == '') {
		return;
	}

	if(m_id == '') {
		alert('변경을 원하시는 BSA를 선택해 주세요');
		return;
	}

	find(BSA재제조, m_id);
	await delay();

	var doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(BSA재제조, doc);
		await delay();

		deleteOne(BSA재제조, m_id);
		await delay();
	}

	progress.value = 1 / 18 * 100;

	find(입고, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(입고, doc);
		await delay();

		deleteOne(입고, m_id);
		await delay();
	}

	progress.value = 2 / 18 * 100;

	find(세척, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(세척, doc);
		await delay();

		deleteOne(세척, m_id);
		await delay();
	}

	progress.value = 3 / 18 * 100;

	find(기초검사, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(기초검사, doc);
		await delay();

		deleteOne(기초검사, m_id);
		await delay();
	}

	progress.value = 4 / 18 * 100;

	find(분해조립, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(분해조립, doc);
		await delay();

		deleteOne(분해조립, m_id);
		await delay();
	}

	progress.value = 5 / 18 * 100;

	find(성능검사, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(성능검사, doc);
		await delay();

		deleteOne(성능검사, m_id);
		await delay();
	}

	progress.value = 6 / 18 * 100;

	find(EOL, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(EOL, doc);
		await delay();

		deleteOne(EOL, m_id);
		await delay();
	}

	progress.value = 7 / 18 * 100;

	find(출하정보, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(출하정보, doc);
		await delay();

		deleteOne(출하정보, m_id);
		await delay();
	}

	progress.value = 8 / 18 * 100;

	find(특이사항, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(특이사항, doc);
		await delay();

		deleteOne(특이사항, m_id);
		await delay();
	}

	progress.value = 9 / 18 * 100;

	find(교체부품상세1, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세1, doc);
		await delay();

		deleteOne(교체부품상세1, m_id);
		await delay();
	}

	progress.value = 10 / 18 * 100;

	find(교체부품상세2, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세2, doc);
		await delay();

		deleteOne(교체부품상세2, m_id);
		await delay();
	}

	progress.value = 11 / 18 * 100;

	find(교체부품상세3, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세3, doc);
		await delay();

		deleteOne(교체부품상세3, m_id);
		await delay();
	}

	progress.value = 12 / 18 * 100;

	find(교체부품상세4, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세4, doc);
		await delay();

		deleteOne(교체부품상세4, m_id);
		await delay();
	}

	progress.value = 13 / 18 * 100;

	find(교체부품상세5, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세5, doc);
		await delay();

		deleteOne(교체부품상세5, m_id);
		await delay();
	}

	progress.value = 14 / 18 * 100;

	find(교체부품상세6, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세6, doc);
		await delay();

		deleteOne(교체부품상세6, m_id);
		await delay();
	}

	progress.value = 15 / 18 * 100;

	find(교체부품상세7, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세7, doc);
		await delay();

		deleteOne(교체부품상세7, m_id);
		await delay();
	}

	progress.value = 16 / 18 * 100;

	find(교체부품상세8, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세8, doc);
		await delay();

		deleteOne(교체부품상세8, m_id);
		await delay();
	}

	progress.value = 17 / 18 * 100;

	find(교체부품상세9, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세9, doc);
		await delay();

		deleteOne(교체부품상세9, m_id);
		await delay();
	}

	progress.value = 18 / 18 * 100;

	find(교체부품상세10, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세10, doc);
		await delay();

		deleteOne(교체부품상세10, m_id);
		await delay();
	}
	console.log('관리번호 변경 완료');
	재제조현황_조회();
	alert('관리번호 변경이 완료되었습니다');
}

async function copy() {
	var new_관리번호 = document.getElementById('copy_관리번호').value;
	if(new_관리번호 == '') {
		return;
	}

	if(m_id == '') {
		alert('변경을 원하시는 BSA를 선택해 주세요');
		return;
	}

	find(BSA재제조, m_id);
	await delay();

	var doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(BSA재제조, doc);
		await delay();
	}

	progress.value = 1 / 18 * 100;

	find(입고, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(입고, doc);
		await delay();
	}

	progress.value = 2 / 18 * 100;

	find(세척, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(세척, doc);
		await delay();
	}

	progress.value = 3 / 18 * 100;

	find(기초검사, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(기초검사, doc);
		await delay();
	}

	progress.value = 4 / 18 * 100;

	find(분해조립, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(분해조립, doc);
		await delay();
	}

	progress.value = 5 / 18 * 100;

	find(성능검사, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(성능검사, doc);
		await delay();
	}

	progress.value = 6 / 18 * 100;

	find(EOL, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(EOL, doc);
		await delay();
	}

	progress.value = 7 / 18 * 100;

	find(출하정보, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(출하정보, doc);
		await delay();
	}

	progress.value = 8 / 18 * 100;

	find(특이사항, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(특이사항, doc);
		await delay();
	}

	progress.value = 9 / 18 * 100;

	find(교체부품상세1, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세1, doc);
		await delay();
	}

	progress.value = 10 / 18 * 100;

	find(교체부품상세2, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세2, doc);
		await delay();
	}

	progress.value = 11 / 18 * 100;

	find(교체부품상세3, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세3, doc);
		await delay();
	}

	progress.value = 12 / 18 * 100;

	find(교체부품상세4, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세4, doc);
		await delay();
	}

	progress.value = 13 / 18 * 100;

	find(교체부품상세5, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세5, doc);
		await delay();
	}

	progress.value = 14 / 18 * 100;

	find(교체부품상세6, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세6, doc);
		await delay();
	}

	progress.value = 15 / 18 * 100;

	find(교체부품상세7, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세7, doc);
		await delay();
	}

	progress.value = 16 / 18 * 100;

	find(교체부품상세8, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세8, doc);
		await delay();
	}

	progress.value = 17 / 18 * 100;

	find(교체부품상세9, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세9, doc);
		await delay();
	}

	progress.value = 18 / 18 * 100;

	find(교체부품상세10, m_id);
	await delay();

	doc = find_array[0];
	if(doc != undefined) {
		doc.관리번호 = new_관리번호;

		update(교체부품상세10, doc);
		await delay();
	}
	console.log('Copy 완료');
	재제조현황_조회();
	alert('복사가 완료되었습니다');
}

function updateFilter(){
	var fieldEl = document.getElementById("filter-field");
	var typeEl = document.getElementById("filter-type");
	var valueEl = document.getElementById("filter-value");

	var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
	var typeVal = typeEl.options[typeEl.selectedIndex].value;

	var filter = filterVal == "function" ? customFilter : filterVal;

	if(filterVal == "function" ){
		typeEl.disabled = true;
		valueEl.disabled = true;
	}else{
		typeEl.disabled = false;
		valueEl.disabled = false;
	}

	if(filterVal){
		table.setFilter(filter, typeVal, valueEl.value);
	}
}

async function 재제조현황_시작() {
	flag_재제조현황 = false;

	if(worker == '') return;
	while(document.getElementById('폐기_pic4') == undefined) {
		await sleep(100);
	}
	await sleep(10);

	//Update filters on value change
	document.getElementById("filter-field").addEventListener("change", updateFilter);
	document.getElementById("filter-type").addEventListener("change", updateFilter);
	document.getElementById("filter-value").addEventListener("keyup", updateFilter);

	//Clear filters on "Clear Filters" button click
	document.getElementById("filter-clear").addEventListener("click", function(){
		var fieldEl = document.getElementById("filter-field");
		var typeEl = document.getElementById("filter-type");
		var valueEl = document.getElementById("filter-value");
		fieldEl.value = "";
		typeEl.value = "=";
		valueEl.value = "";

		table.clearFilter();
	});

	toggle1();
	toggle2();
	toggle3();
	toggle4();
	toggle5();
	toggle6();
	toggle7();
	toggle8();
	toggle9();
	toggle10();
	toggle11();
	toggle12();

	관리번호 = '';

	재제조현황_조회();
}

async function 재제조현황_조회() {
	if(worker == '') return;
	find_array = undefined;
	if(level == 'kia_일반') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'DEPBV-EV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'SG2-EV', 'TAM', 'TAM-EV', 'PS', 'PS_EV', 'SK3']}, 구분 : '일반' });
		await delay();
	} else if(level == 'hyundai_일반') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'LKFC-EV', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'SX2-EV', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'RG3-EV', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 구분 : '일반' });
		await delay();
	} else if(level == 'kia_보증') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'DEPBV-EV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'SG2-EV', 'TAM', 'TAM-EV', 'PS', 'PS_EV', 'SK3']}, 구분 : '보증'});
		await delay();
	} else if(level == 'hyundai_보증') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'LKFC-EV', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'SX2-EV', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'RG3-EV', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 구분 : '보증'});
		await delay();
	} else {
		count(BSA재제조, { 관리번호 : { $exists: true } });
		await delay();
	}

	console.log('doc_count: ', doc_count);
	if(doc_count > 0) {
		if(level == 'kia_일반') {
			find_BSA재제조(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'DEPBV-EV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'SG2-EV', 'TAM', 'TAM-EV', 'PS', 'PS_EV', 'SK3']}, 구분 : '일반'});
			await delay();
		} else if(level == 'hyundai_일반') {
			find_BSA재제조(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'LKFC-EV', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'SX2-EV', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'RG3-EV', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 구분 : '일반'});
			await delay();
		} else if(level == 'kia_보증') {
			find_BSA재제조(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'DEPBV-EV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'SG2-EV', 'TAM', 'TAM-EV', 'PS', 'PS_EV', 'SK3']}, 구분 : '보증'});
			await delay();
		} else if(level == 'hyundai_보증') {
			find_BSA재제조(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'LKFC-EV', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'SX2-EV', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'RG3-EV', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 구분 : '보증'});
			await delay();
		} else {
			find_BSA재제조(BSA재제조, { 관리번호 : { $exists: true } });
			await delay();
		}
	} 

	tabledata_BSA = find_array;
	table = new Tabulator("#grid_BSA", {
		layout: "resizableColumnFit",
		data:tabledata_BSA,
		height: '700px',

		columns:[
			{title:"ID", field:"_id", sorter:"string", width:'180'},
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"재제조번호", field:"재제조번호", sorter:"string", width:'180'},
			{title:"구분", field:"구분", sorter:"string", width:'180'},
			{title:"차종", field:"차종", sorter:"string", width:'180'},
			{title:"품번", field:"품번", sorter:"string", width:'180'},
			{title:"RO_no", field:"RO_no", sorter:"string", width:'180'},
			{title:"공정단계", field:"공정단계", sorter:"string", width:'180'},
			{title:"소재지", field:"소재지", sorter:"string", width:'180'},
			{title:"적재No", field:"적재No", sorter:"string", visible: true, width:'180'}, //
			{title:"입고", field:"입고", sorter:"string", visible: true, width:'180'},//
			{title:"제조투입", field:"제조투입", sorter:"string", visible: true, width:'180'},//
			{title:"세척투입일", field:"세척투입일", sorter:"string", width:'180'},
			{title:"세척", field:"세척", sorter:"string", visible: true, width:'180'},//
			{title:"기초검사투입일", field:"기초검사투입일", sorter:"string", width:'180'},
			{title:"기초검사", field:"기초검사", sorter:"string", visible: true, width:'180'},//
			{title:"분해조립투입일", field:"분해조립투입일", sorter:"string", width:'180'},
			{title:"분해조립", field:"분해조립", sorter:"string", visible: true, width:'180'},//
			{title:"성능검사투입일", field:"성능검사투입일", sorter:"string", width:'180'},
			{title:"성능검사", field:"성능검사", sorter:"string", visible: true, width:'180'},//
			{title:"EOL투입일", field:"EOL투입일", sorter:"string", width:'180'},
			{title:"EOL", field:"EOL", sorter:"string", visible: true, width:'180'},//
			{title:"출하검사", field:"출하검사", sorter:"string", width:'180'},
			{title:"납품처", field:"납품처", sorter:"string", width:'180'},
			{title:"출하", field:"출하", sorter:"string", width:'180'},
			{title:"반품입고", field:"반품입고", sorter:"string", width:'180'},
			{title:"재출하", field:"재출하", sorter:"string", width:'180'},
			{title:"완전분해", field:"완전분해", sorter:"string", width:'180'},
			{title:"폐기", field:"폐기", sorter:"string", width:'180'},
			{title:"마지막충전일", field:"마지막충전일", sorter:"string", width:'180'},
			{title:"출하예약", field:"출하예약", sorter:"string", width:'180'},
			{title:"렉번호", field:"렉번호", sorter:"string", width:'180'},
		],
		rowFormatter: function(row){
			console.log(row.getData());
			if (row.getData().완전분해 != ''){
				const children = row.getElement().childNodes;
				children.forEach((child) => {
					child.style.backgroundColor = 'pink';
				})
			} else if (row.getData().폐기 != ''){
				const children = row.getElement().childNodes;
				children.forEach((child) => {
					child.style.backgroundColor = 'yellow';
				})
			} else if (row.getData().공정단계 === '제조완료'){
				const children = row.getElement().childNodes;
				children.forEach((child) => {
					child.style.backgroundColor = '#CCCCFF';
				})
			} else if (row.getData().공정단계 != '출하'){
				const children = row.getElement().childNodes;
				children.forEach((child) => {
					child.style.backgroundColor = '#E8F8F5';
				})
			} 
		}
	});

	var progress = document.getElementById('progress');
	table.on("rowClick", async function(e, row){
		console.log('selected 관리번호: ',  row.getData().관리번호);
		m_id = row.getData().관리번호;
		_id = row.getData()._id;
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

		await 반품입고_load_pic(m_id);
		await 재출하_load_pic(m_id);
		await 완전분해_load_pic(m_id);
		await 폐기_load_pic(m_id);

		return;
	});

	await grid_입고();
	progress.value = 1 / 18 * 100;

	await grid_세척();
	progress.value = 2 / 18 * 100;

	await grid_기초검사();
	progress.value = 3 / 18 * 100;

	await grid_분해조립();
	progress.value = 4 / 18 * 100;

	await grid_성능검사();
	progress.value = 5 / 18 * 100;

	await grid_EOL();
	progress.value = 6 / 18 * 100;

	await grid_출하정보();
	progress.value = 7 / 18 * 100;

	await grid_특이사항();
	progress.value = 8 / 18 * 100;

	await grid_교체부품상세1();
	progress.value = 9 / 18 * 100;

	await grid_교체부품상세2();
	progress.value = 10 / 18 * 100;

	await grid_교체부품상세3();
	progress.value = 11 / 18 * 100;

	await grid_교체부품상세4();
	progress.value = 12 / 18 * 100;

	await grid_교체부품상세5();
	progress.value = 13 / 18 * 100;

	await grid_교체부품상세6();
	progress.value = 14 / 18 * 100;

	await grid_교체부품상세7();
	progress.value = 15 / 18 * 100;

	await grid_교체부품상세8();
	progress.value = 16 / 18 * 100;

	await grid_교체부품상세9();
	progress.value = 17 / 18 * 100;

	await grid_교체부품상세10();
	progress.value = 18 / 18 * 100;

	await 반품입고_load_pic();
	await 재출하_load_pic();
	await 완전분해_load_pic();
	await 폐기_load_pic();
};

async function delete_bsa_중복정보() {
	console.log('delete : ', _id);

	deleteOneBSA(BSA재제조, _id);
	await delay();

	var fieldEl = document.getElementById("filter-field");
	var typeEl = document.getElementById("filter-type");
	var valueEl = document.getElementById("filter-value");
	fieldEl.value = "";
	typeEl.value = "=";
	valueEl.value = "";

	table.clearFilter();

	if(delete_count > 0) {
		alert('삭제 되었습니다.');
	}
	재제조현황_조회();
}

async function delete_bsa() {
	console.log('delete : ', row_one_id);

	deleteOne(BSA재제조, row_one_id);
	await delay();

	progress.value = 1 / 18 * 100;

	deleteOne(입고, row_one_id);
	await delay();

	progress.value = 2 / 18 * 100;

	deleteOne(입고_pic, row_one_id);
	await delay();

	progress.value = 3 / 18 * 100;

	deleteOne(세척, row_one_id);
	await delay();

	progress.value = 4 / 18 * 100;

	deleteOne(세척_pic, row_one_id);
	await delay();

	progress.value = 5 / 18 * 100;

	deleteOne(기초검사, row_one_id);
	await delay();

	progress.value = 6 / 18 * 100;

	deleteOne(기초검사_pic, row_one_id);
	await delay();

	progress.value = 7 / 18 * 100;

	deleteOne(분해조립, row_one_id);
	await delay();

	progress.value = 8 / 18 * 100;

	deleteOne(분해조립_pic, row_one_id);
	await delay();

	progress.value = 9 / 18 * 100;

	deleteOne(성능검사, row_one_id);
	await delay();

	progress.value = 10 / 18 * 100;

	deleteOne(성능검사_pic, row_one_id);
	await delay();

	progress.value = 11 / 18 * 100;

	deleteOne(EOL, row_one_id);
	await delay();

	progress.value = 12 / 18 * 100;

	deleteOne(EOL_pic, row_one_id);
	await delay();

	progress.value = 13 / 18 * 100;

	deleteOne(출하정보, row_one_id);
	await delay();

	progress.value = 13 / 18 * 100;

	deleteOne(출하_pic, row_one_id);
	await delay();

	progress.value = 14 / 18 * 100;

	deleteOne(특이사항, row_one_id);
	await delay();

	progress.value = 15 / 18 * 100;

	deleteOne(특이사항_pic, row_one_id);
	await delay();

	progress.value = 16 / 18 * 100;

	deleteOne(교체부품상세1 , row_one_id);
	await delay();
	progress.value = 17 / 18 * 100;

	deleteOne(교체부품상세2 , row_one_id);
	await delay();
	progress.value = 18 / 18 * 100;

	deleteOne(교체부품상세3 , row_one_id);
	await delay();
	progress.value = 19 / 18 * 100;

	deleteOne(교체부품상세4 , row_one_id);
	await delay();
	progress.value = 20 / 18 * 100;

	deleteOne(교체부품상세5 , row_one_id);
	await delay();
	progress.value = 21 / 18 * 100;

	deleteOne(교체부품상세6 , row_one_id);
	await delay();
	progress.value = 22 / 18 * 100;

	deleteOne(교체부품상세7 , row_one_id);
	await delay();
	progress.value = 23 / 18 * 100;

	deleteOne(교체부품상세8 , row_one_id);
	await delay();
	progress.value = 24 / 18 * 100;

	deleteOne(교체부품상세9 , row_one_id);
	await delay();
	progress.value = 25 / 18 * 100;

	deleteOne(교체부품상세10 , row_one_id);
	await delay();
	progress.value = 26 / 18 * 100;

	deleteOne(반품입고_pic, row_one_id);
	await delay();
	progress.value = 27 / 18 * 100;

	deleteOne(재출하_pic, row_one_id);
	await delay();
	progress.value = 28 / 18 * 100;

	deleteOne(완전분해_pic, row_one_id);
	await delay();
	progress.value = 29 / 18 * 100;

	deleteOne(폐기_pic, row_one_id);
	await delay();

	var fieldEl = document.getElementById("filter-field");
	var typeEl = document.getElementById("filter-type");
	var valueEl = document.getElementById("filter-value");
	fieldEl.value = "";
	typeEl.value = "=";
	valueEl.value = "";

	table.clearFilter();

	if(delete_count > 0) {
		alert('삭제 되었습니다.');
	}
	재제조현황_조회();
}

async function grid_입고(m_id = '') {
	if(worker == '') return;
	var pic1 = document.getElementById('입고정보_pic1');
	var pic2 = document.getElementById('입고정보_pic2');
	var pic3 = document.getElementById('입고정보_pic3');
	var pic4 = document.getElementById('입고정보_pic4');
	var pic5 = document.getElementById('입고정보_pic5');
	var pic6 = document.getElementById('입고정보_pic6');
	var pic7 = document.getElementById('입고정보_pic7');
	var pic8 = document.getElementById('입고정보_pic8');
	var pic9 = document.getElementById('입고정보_pic9');
	var pic10 = document.getElementById('입고정보_pic10');
	var pic11 = document.getElementById('입고정보_pic11');
	var pic12 = document.getElementById('입고정보_pic12');
	var pic13 = document.getElementById('입고정보_pic13');
	var pic14 = document.getElementById('입고정보_pic14');
	var pic15 = document.getElementById('입고정보_pic15');

	var tabledata_입고 = [];

	if(m_id == '') {
		find_입고(입고, { 관리번호 : { $exists: true } });
		await delay();
	} else {
		find(입고, m_id);
		await delay();
	}

	tabledata_입고 = find_array;
	console.log('입고 : ', find_array)

	table_입고 = new Tabulator("#grid_입고정보", {
		layout: "resizableColumnFit",
		height: '300px',
		data:tabledata_입고, 
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"입고일", field:"입고일", sorter:"string", width:'180'},
			{title:"입고처", field:"입고처", sorter:"string", width:'180'},
			{title:"구분", field:"구분", sorter:"string", width:'180'},
			{title:"차종", field:"차종", sorter:"string", width:'180'},
			{title:"품번", field:"품번", sorter:"string", width:'180'},
		]
	});

	count(입고_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(입고_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src = 'data:image/;base64,' + find_array[0].pic1;
		pic2.src = 'data:image/;base64,' + find_array[0].pic2;
		pic3.src = 'data:image/;base64,' + find_array[0].pic3;
		pic4.src = 'data:image/;base64,' + find_array[0].pic4;
		pic5.src = 'data:image/;base64,' + find_array[0].pic5;
		pic6.src = 'data:image/;base64,' + find_array[0].pic6;
		pic7.src = 'data:image/;base64,' + find_array[0].pic7;
		pic8.src = 'data:image/;base64,' + find_array[0].pic8;
		pic9.src = 'data:image/;base64,' + find_array[0].pic9;
		pic10.src = 'data:image/;base64,' + find_array[0].pic10;
		pic11.src = 'data:image/;base64,' + find_array[0].pic11;
		pic12.src = 'data:image/;base64,' + find_array[0].pic12;
		pic13.src = 'data:image/;base64,' + find_array[0].pic13;
		pic14.src = 'data:image/;base64,' + find_array[0].pic14;
		pic15.src = 'data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_세척(m_id = '') {
	if(worker == '') return;
	var pic1 = document.getElementById('세척_pic1');
	var pic2 = document.getElementById('세척_pic2');
	var pic3 = document.getElementById('세척_pic3');
	var pic4 = document.getElementById('세척_pic4');
	var pic5 = document.getElementById('세척_pic5');
	var pic6 = document.getElementById('세척_pic6');
	var pic7 = document.getElementById('세척_pic7');
	var pic8 = document.getElementById('세척_pic8');
	var pic9 = document.getElementById('세척_pic9');
	var pic10 = document.getElementById('세척_pic10');
	var pic11 = document.getElementById('세척_pic11');
	var pic12 = document.getElementById('세척_pic12');
	var pic13 = document.getElementById('세척_pic13');
	var pic14 = document.getElementById('세척_pic14');
	var pic15 = document.getElementById('세척_pic15');

	var tabledata_세척 = [];

	if(m_id == '') {
		find_세척(세척, { 관리번호 : { $exists: true } });
	} else {
		find(세척, m_id);
	}
	await delay();

	tabledata_세척 = find_array;
	console.log('세척 : ', find_array);;

	table_세척 = new Tabulator("#grid_세척정보", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_세척, 
		//autoColumns:true
		//
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"입고일", field:"공정입고일", sorter:"string", width:'180'},
			{title:"완료일", field:"공정완료일", sorter:"string", width:'180'},
			{title:"기밀검사 케이스", field:"기밀검사_케이스", sorter:"string", width:'180'},
			{title:"기밀검사 케이스 특이사항", field:"기밀검사_케이스_특이사항", sorter:"string", width:'180'},
			{title:"특이사항", field:"특이사항", sorter:"string", width:'180'},
		]
	});

	count(세척_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(세척_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_기초검사(m_id = '') {
	if(worker == '') return;
	var pic1 = document.getElementById('기초검사_pic1');
	var pic2 = document.getElementById('기초검사_pic2');
	var pic3 = document.getElementById('기초검사_pic3');
	var pic4 = document.getElementById('기초검사_pic4');
	var pic5 = document.getElementById('기초검사_pic5');
	var pic6 = document.getElementById('기초검사_pic6');
	var pic7 = document.getElementById('기초검사_pic7');
	var pic8 = document.getElementById('기초검사_pic8');
	var pic9 = document.getElementById('기초검사_pic9');
	var pic10 = document.getElementById('기초검사_pic10');
	var pic11 = document.getElementById('기초검사_pic11');
	var pic12 = document.getElementById('기초검사_pic12');
	var pic13 = document.getElementById('기초검사_pic13');
	var pic14 = document.getElementById('기초검사_pic14');
	var pic15 = document.getElementById('기초검사_pic15');

	var tabledata_기초검사 = [];

	if(m_id == '') {
		find_기초검사(기초검사, { 관리번호 : { $exists: true } });
	} else {
		find(기초검사, m_id);
	}
	await delay();

	tabledata_기초검사 = find_array;
	console.log('기초검사 : ', find_array);;

	table_기초검사 = new Tabulator("#grid_기초검사", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_기초검사, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"RO_no", field:"RO_no", sorter:"string", width:'180'},
			{title:"VIN", field:"VIN", sorter:"string", width:'180'},
			{title:"랙번호", field:"랙번호", sorter:"string", width:'180'},
			{title:"QR", field:"QRcode", sorter:"string", width:'180'},
			{title:"주행거리", field:"주행거리", sorter:"string", width:'180'},
			{title:"차량번호", field:"차량번호", sorter:"string", width:'180'},
			{title:"육안검사 외부", field:"육안검사_외부", sorter:"string", width:'180'},
			{title:"육안검사 내부", field:"육안검사_내부", sorter:"string", width:'180'},
			{title:"기밀검사 케이스", field:"기밀검사_케이스", sorter:"string", width:'180'},
			{title:"기밀검사 냉각유로", field:"기밀검사_냉각유로", sorter:"string", width:'180'},
			{title:"절연검사 B+", field:"절연검사_Plus", sorter:"string", width:'180'},
			{title:"절연검사 B-", field:"절연검사_Minus", sorter:"string", width:'180'},
			{title:"토크검사 UPR/C", field:"토크검사_UPR_C", sorter:"string", width:'180'},
			{title:"토크검사 버스바", field:"토크검사_버스바", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드", field:"통신검사_DTC코드", sorter:"string", width:'180'},
			{title:"통신검사 팩전압", field:"통신검사_팩전압", sorter:"string", width:'180'},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string", width:'180'},
			{title:"통신검사 릴레이구동", field:"통신검사_릴레이구동", sorter:"string", width:'180'},
			{title:"고장현상코드", field:"고장현상코드", sorter:"string", width:'180'},
			{title:"고장현상명", field:"고장현상명", sorter:"string", width:'180'},
			{title:"문제Cell No", field:"문제Cell_No", sorter:"string", width:'180'},
			{title:"문제BMA No", field:"문제BMA_No", sorter:"string", width:'180'},
			{title:"문제BMA 수량", field:"문제BMA_cnt", sorter:"string", width:'180'},
			{title:"완료일", field:"완료일", sorter:"string", width:'180'},
			{title:"요청사항", field:"요청사항", sorter:"string", width:'180'},
			{title:"비고", field:"비고", sorter:"string", width:'180'},
			{title:"센터 진단내용", field:"센터진단내용", sorter:"string", width:'180'},
			{title:"검사자", field:"검사자", sorter:"string", width:'180'},
		],
	});

	count(기초검사_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(기초검사_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_분해조립(m_id = '') {
	if(worker == '') return;
	var pic1 = document.getElementById('분해조립_pic1');
	var pic2 = document.getElementById('분해조립_pic2');
	var pic3 = document.getElementById('분해조립_pic3');
	var pic4 = document.getElementById('분해조립_pic4');
	var pic5 = document.getElementById('분해조립_pic5');
	var pic6 = document.getElementById('분해조립_pic6');
	var pic7 = document.getElementById('분해조립_pic7');
	var pic8 = document.getElementById('분해조립_pic8');
	var pic9 = document.getElementById('분해조립_pic9');
	var pic10 = document.getElementById('분해조립_pic10');
	var pic11 = document.getElementById('분해조립_pic11');
	var pic12 = document.getElementById('분해조립_pic12');
	var pic13 = document.getElementById('분해조립_pic13');
	var pic14 = document.getElementById('분해조립_pic14');
	var pic15 = document.getElementById('분해조립_pic15');

	var tabledata_분해조립 = [];

	if(m_id == '') {
		find_분해조립(분해조립, { 관리번호 : { $exists: true } });
	} else {
		find(분해조립, m_id);
	}
	await delay();

	tabledata_분해조립 = find_array;
	console.log('분해조립 : ', find_array);

	table_분해조립 = new Tabulator("#grid_분해조립", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_분해조립, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"BMU 1", field:"BMU1", sorter:"string", width:'180'},
			{title:"BMU 2", field:"BMU2", sorter:"string", width:'180'},
			{title:"BMU 3", field:"BMU3", sorter:"string", width:'180'},
			{title:"BMU 4", field:"BMU4", sorter:"string", width:'180'},
			{title:"BMU 5", field:"BMU5", sorter:"string", width:'180'},
			{title:"BMU 6", field:"BMU6", sorter:"string", width:'180'},
			{title:"BMU 7", field:"BMU7", sorter:"string", width:'180'},
			{title:"BMU 8", field:"BMU8", sorter:"string", width:'180'},
			{title:"BMU 9", field:"BMU9", sorter:"string", width:'180'},
			{title:"BMU 10", field:"BMU10", sorter:"string", width:'180'},
			{title:"CMU 1", field:"CMU1", sorter:"string", width:'180'},
			{title:"CMU 2", field:"CMU2", sorter:"string", width:'180'},
			{title:"CMU 3", field:"CMU3", sorter:"string", width:'180'},
			{title:"CMU 4", field:"CMU4", sorter:"string", width:'180'},
			{title:"CMU 5", field:"CMU5", sorter:"string", width:'180'},
			{title:"CMU 6", field:"CMU6", sorter:"string", width:'180'},
			{title:"CMU 7", field:"CMU7", sorter:"string", width:'180'},
			{title:"CMU 8", field:"CMU8", sorter:"string", width:'180'},
			{title:"CMU 9", field:"CMU9", sorter:"string", width:'180'},
			{title:"CMU 10", field:"CMU10", sorter:"string", width:'180'},
			{title:"PRA 1", field:"PRA1", sorter:"string", width:'180'},
			{title:"PRA 2", field:"PRA2", sorter:"string", width:'180'},
			{title:"PRA 3", field:"PRA3", sorter:"string", width:'180'},
			{title:"PRA 4", field:"PRA4", sorter:"string", width:'180'},
			{title:"PRA 5", field:"PRA5", sorter:"string", width:'180'},
			{title:"PRA 6", field:"PRA6", sorter:"string", width:'180'},
			{title:"PRA 7", field:"PRA7", sorter:"string", width:'180'},
			{title:"PRA 8", field:"PRA8", sorter:"string", width:'180'},
			{title:"PRA 9", field:"PRA9", sorter:"string", width:'180'},
			{title:"PRA 10", field:"PRA10", sorter:"string", width:'180'},
			{title:"SPA 1", field:"SPA1", sorter:"string", width:'180'},
			{title:"SPA 2", field:"SPA2", sorter:"string", width:'180'},
			{title:"SPA 3", field:"SPA3", sorter:"string", width:'180'},
			{title:"SPA 4", field:"SPA4", sorter:"string", width:'180'},
			{title:"SPA 5", field:"SPA5", sorter:"string", width:'180'},
			{title:"SPA 6", field:"SPA6", sorter:"string", width:'180'},
			{title:"SPA 7", field:"SPA7", sorter:"string", width:'180'},
			{title:"SPA 8", field:"SPA8", sorter:"string", width:'180'},
			{title:"SPA 9", field:"SPA9", sorter:"string", width:'180'},
			{title:"SPA 10", field:"SPA10", sorter:"string", width:'180'},
			{title:"LWR Case 1", field:"LWR_C1", sorter:"string", width:'180'},
			{title:"LWR Case 2", field:"LWR_C2", sorter:"string", width:'180'},
			{title:"LWR Case 3", field:"LWR_C3", sorter:"string", width:'180'},
			{title:"LWR Case 4", field:"LWR_C4", sorter:"string", width:'180'},
			{title:"LWR Case 5", field:"LWR_C5", sorter:"string", width:'180'},
			{title:"LWR Case 6", field:"LWR_C6", sorter:"string", width:'180'},
			{title:"LWR Case 7", field:"LWR_C7", sorter:"string", width:'180'},
			{title:"LWR Case 8", field:"LWR_C8", sorter:"string", width:'180'},
			{title:"LWR Case 9", field:"LWR_C9", sorter:"string", width:'180'},
			{title:"LWR Case 10", field:"LWR_C10", sorter:"string", width:'180'},
			{title:"UPR Case 1", field:"UPR_C1", sorter:"string", width:'180'},
			{title:"UPR Case 2", field:"UPR_C2", sorter:"string", width:'180'},
			{title:"UPR Case 3", field:"UPR_C3", sorter:"string", width:'180'},
			{title:"UPR Case 4", field:"UPR_C4", sorter:"string", width:'180'},
			{title:"UPR Case 5", field:"UPR_C5", sorter:"string", width:'180'},
			{title:"UPR Case 6", field:"UPR_C6", sorter:"string", width:'180'},
			{title:"UPR Case 7", field:"UPR_C7", sorter:"string", width:'180'},
			{title:"UPR Case 8", field:"UPR_C8", sorter:"string", width:'180'},
			{title:"UPR Case 9", field:"UPR_C9", sorter:"string", width:'180'},
			{title:"UPR Case 10", field:"UPR_C10", sorter:"string", width:'180'},
			{title:"PBE", field:"PBE", sorter:"string", width:'180'},
			{title:"Gasket", field:"Gasket", sorter:"string", width:'180'},
			{title:"Relay 1", field:"Relay1", sorter:"string", width:'180'},
			{title:"Relay 2", field:"Relay2", sorter:"string", width:'180'},
			{title:"Relay 3", field:"Relay3", sorter:"string", width:'180'},
			{title:"Relay 4", field:"Relay4", sorter:"string", width:'180'},
			{title:"Relay 5", field:"Relay5", sorter:"string", width:'180'},
			{title:"Relay 6", field:"Relay6", sorter:"string", width:'180'},
			{title:"Relay 7", field:"Relay7", sorter:"string", width:'180'},
			{title:"Relay 8", field:"Relay8", sorter:"string", width:'180'},
			{title:"Relay 9", field:"Relay9", sorter:"string", width:'180'},
			{title:"Relay 10", field:"Relay10", sorter:"string", width:'180'},
			{title:"HV CNTR 1", field:"HV_CNTR1", sorter:"string", width:'180'},
			{title:"HV CNTR 2", field:"HV_CNTR2", sorter:"string", width:'180'},
			{title:"HV CNTR 3", field:"HV_CNTR3", sorter:"string", width:'180'},
			{title:"HV CNTR 4", field:"HV_CNTR4", sorter:"string", width:'180'},
			{title:"HV CNTR 5", field:"HV_CNTR5", sorter:"string", width:'180'},
			{title:"HV CNTR 6", field:"HV_CNTR6", sorter:"string", width:'180'},
			{title:"HV CNTR 7", field:"HV_CNTR7", sorter:"string", width:'180'},
			{title:"HV CNTR 8", field:"HV_CNTR8", sorter:"string", width:'180'},
			{title:"HV CNTR 9", field:"HV_CNTR9", sorter:"string", width:'180'},
			{title:"HV CNTR 10", field:"HV_CNTR10", sorter:"string", width:'180'},
			{title:"Heating CNTR 1", field:"Heating_CNTR1", sorter:"string", width:'180'},
			{title:"Heating CNTR 2", field:"Heating_CNTR2", sorter:"string", width:'180'},
			{title:"Heating CNTR 3", field:"Heating_CNTR3", sorter:"string", width:'180'},
			{title:"Heating CNTR 4", field:"Heating_CNTR4", sorter:"string", width:'180'},
			{title:"Heating CNTR 5", field:"Heating_CNTR5", sorter:"string", width:'180'},
			{title:"Heating CNTR 6", field:"Heating_CNTR6", sorter:"string", width:'180'},
			{title:"Heating CNTR 7", field:"Heating_CNTR7", sorter:"string", width:'180'},
			{title:"Heating CNTR 8", field:"Heating_CNTR8", sorter:"string", width:'180'},
			{title:"Heating CNTR 9", field:"Heating_CNTR9", sorter:"string", width:'180'},
			{title:"Heating CNTR 10", field:"Heating_CNTR10", sorter:"string", width:'180'},
			{title:"FuseBox 1", field:"FuseBox1", sorter:"string", width:'180'},
			{title:"FuseBox 2", field:"FuseBox2", sorter:"string", width:'180'},
			{title:"FuseBox 3", field:"FuseBox3", sorter:"string", width:'180'},
			{title:"FuseBox 4", field:"FuseBox4", sorter:"string", width:'180'},
			{title:"FuseBox 5", field:"FuseBox5", sorter:"string", width:'180'},
			{title:"FuseBox 6", field:"FuseBox6", sorter:"string", width:'180'},
			{title:"FuseBox 7", field:"FuseBox7", sorter:"string", width:'180'},
			{title:"FuseBox 8", field:"FuseBox8", sorter:"string", width:'180'},
			{title:"FuseBox 9", field:"FuseBox9", sorter:"string", width:'180'},
			{title:"FuseBox 10", field:"FuseBox10", sorter:"string", width:'180'},
			{title:"LV W/H 1", field:"LV_W_H1", sorter:"string", width:'180'},
			{title:"LV W/H 2", field:"LV_W_H2", sorter:"string", width:'180'},
			{title:"LV W/H 3", field:"LV_W_H3", sorter:"string", width:'180'},
			{title:"LV W/H 4", field:"LV_W_H4", sorter:"string", width:'180'},
			{title:"LV W/H 5", field:"LV_W_H5", sorter:"string", width:'180'},
			{title:"LV W/H 6", field:"LV_W_H6", sorter:"string", width:'180'},
			{title:"LV W/H 7", field:"LV_W_H7", sorter:"string", width:'180'},
			{title:"LV W/H 8", field:"LV_W_H8", sorter:"string", width:'180'},
			{title:"LV W/H 9", field:"LV_W_H9", sorter:"string", width:'180'},
			{title:"LV W/H 10", field:"LV_W_H10", sorter:"string", width:'180'},
			{title:"HV W/H 1", field:"HV_W_H1", sorter:"string", width:'180'},
			{title:"HV W/H 2", field:"HV_W_H2", sorter:"string", width:'180'},
			{title:"HV W/H 3", field:"HV_W_H3", sorter:"string", width:'180'},
			{title:"HV W/H 4", field:"HV_W_H4", sorter:"string", width:'180'},
			{title:"HV W/H 5", field:"HV_W_H5", sorter:"string", width:'180'},
			{title:"HV W/H 6", field:"HV_W_H6", sorter:"string", width:'180'},
			{title:"HV W/H 7", field:"HV_W_H7", sorter:"string", width:'180'},
			{title:"HV W/H 8", field:"HV_W_H8", sorter:"string", width:'180'},
			{title:"HV W/H 9", field:"HV_W_H9", sorter:"string", width:'180'},
			{title:"HV W/H 10", field:"HV_W_H10", sorter:"string", width:'180'},
			{title:"온도센서 1", field:"온도센서1", sorter:"string", width:'180'},
			{title:"온도센서 2", field:"온도센서2", sorter:"string", width:'180'},
			{title:"온도센서 3", field:"온도센서3", sorter:"string", width:'180'},
			{title:"온도센서 4", field:"온도센서4", sorter:"string", width:'180'},
			{title:"온도센서 5", field:"온도센서5", sorter:"string", width:'180'},
			{title:"온도센서 6", field:"온도센서6", sorter:"string", width:'180'},
			{title:"온도센서 7", field:"온도센서7", sorter:"string", width:'180'},
			{title:"온도센서 8", field:"온도센서8", sorter:"string", width:'180'},
			{title:"온도센서 9", field:"온도센서9", sorter:"string", width:'180'},
			{title:"온도센서 10", field:"온도센서10", sorter:"string", width:'180'},
			{title:"Busbars", field:"Busbars", sorter:"string", width:'180'},
			{title:"BMA 1", field:"BMA1", sorter:"string", width:'180'},
			{title:"BMA 2", field:"BMA2", sorter:"string", width:'180'},
			{title:"BMA 3", field:"BMA3", sorter:"string", width:'180'},
			{title:"BMA 4", field:"BMA4", sorter:"string", width:'180'},
			{title:"BMA 5", field:"BMA5", sorter:"string", width:'180'},
			{title:"BMA 6", field:"BMA6", sorter:"string", width:'180'},
			{title:"BMA 7", field:"BMA7", sorter:"string", width:'180'},
			{title:"BMA 8", field:"BMA8", sorter:"string", width:'180'},
			{title:"BMA 9", field:"BMA9", sorter:"string", width:'180'},
			{title:"BMA 10", field:"BMA10", sorter:"string", width:'180'},
			{title:"ETC", field:"ETC", sorter:"string", width:'180'},
			{title:"완료일", field:"완료일", sorter:"string", width:'180'},
			{title:"작업자", field:"작업자", sorter:"string", width:'180'},
		],
	});

	count(분해조립_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(분해조립_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_성능검사(m_id = '') {
	if(worker == '') return;
	var pic1 = document.getElementById('성능검사_pic1');
	var pic2 = document.getElementById('성능검사_pic2');
	var pic3 = document.getElementById('성능검사_pic3');
	var pic4 = document.getElementById('성능검사_pic4');
	var pic5 = document.getElementById('성능검사_pic5');
	var pic6 = document.getElementById('성능검사_pic6');
	var pic7 = document.getElementById('성능검사_pic7');
	var pic8 = document.getElementById('성능검사_pic8');
	var pic9 = document.getElementById('성능검사_pic9');
	var pic10 = document.getElementById('성능검사_pic10');
	var pic11 = document.getElementById('성능검사_pic11');
	var pic12 = document.getElementById('성능검사_pic12');
	var pic13 = document.getElementById('성능검사_pic13');
	var pic14 = document.getElementById('성능검사_pic14');
	var pic15 = document.getElementById('성능검사_pic15');

	var tabledata_성능검사 = [];

	if(m_id == '') {
		find_성능검사(성능검사, { 관리번호 : { $exists: true } });
	} else {
		find(성능검사, m_id);
	}
	await delay();
	tabledata_성능검사 = find_array;
	console.log('성능검사 : ', find_array);;

	table_성능검사 = new Tabulator("#grid_성능검사", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_성능검사, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"용량평가", field:"용량평가", sorter:"string", width:'180'},
			{title:"SOC60Percent", field:"SOC60Percent", sorter:"string", width:'180'},
			{title:"DCIR", field:"DCIR", sorter:"string", width:'180'},
			{title:"DCIR_Charge", field:"DCIR_Charge", sorter:"string", width:'180'},
			{title:"DCIR_Discharge", field:"DCIR_Discharge", sorter:"string", width:'180'},
			{title:"절연저항_HVP", field:"절연저항_HVP", sorter:"string", width:'180'},
			{title:"절연저항_HVN", field:"절연저항_HVN", sorter:"string", width:'180'},
			{title:"완료일", field:"완료일", sorter:"string", width:'180'},
			{title:"검사자", field:"검사자", sorter:"string", width:'180'},
		],
	});

	count(성능검사_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(성능검사_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_EOL(m_id = '') {
	if(worker == '') return;
	var pic1 = document.getElementById('EOL_pic1');
	var pic2 = document.getElementById('EOL_pic2');
	var pic3 = document.getElementById('EOL_pic3');
	var pic4 = document.getElementById('EOL_pic4');
	var pic5 = document.getElementById('EOL_pic5');
	var pic6 = document.getElementById('EOL_pic6');
	var pic7 = document.getElementById('EOL_pic7');
	var pic8 = document.getElementById('EOL_pic8');
	var pic9 = document.getElementById('EOL_pic9');
	var pic10 = document.getElementById('EOL_pic10');
	var pic11 = document.getElementById('EOL_pic11');
	var pic12 = document.getElementById('EOL_pic12');
	var pic13 = document.getElementById('EOL_pic13');
	var pic14 = document.getElementById('EOL_pic14');
	var pic15 = document.getElementById('EOL_pic15');

	var tabledata_EOL = [];
	if(m_id == '') {
		find_EOL(EOL, { 관리번호 : { $exists: true } });
	} else {
		find(EOL, m_id);
	}
	await delay();
	tabledata_EOL = find_array;
	console.log('EOL : ', find_array);;

	table_EOL = new Tabulator("#grid_EOL", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_EOL, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"UPR/C 조립", field:"UPR_C조립", sorter:"string", width:'180'},
			{title:"기밀검사 케이스", field:"기밀검사_케이스", sorter:"string", width:'180'},
			{title:"기밀검사 케이스 특이사항", field:"기밀검사_케이스_특이사항", sorter:"string", width:'180'},
			{title:"기밀검사 냉각유로", field:"기밀검사_냉각유로", sorter:"string", width:'180'},
			{title:"기밀검사 냉각유로 특이사항", field:"기밀검사_냉각유로_특이사항", sorter:"string", width:'180'},
			{title:"절연검사 Plus", field:"절연검사_Plus", sorter:"string", width:'180'},
			{title:"절연검사 Minus", field:"절연검사_Minus", sorter:"string", width:'180'},
			{title:"절연검사 HV+", field:"절연검사_Plus", sorter:"string", width:'180'},
			{title:"절연검사 HV-", field:"절연검사_Minus", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드1", field:"통신검사_DTC코드1", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드2", field:"통신검사_DTC코드2", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드3", field:"통신검사_DTC코드3", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드4", field:"통신검사_DTC코드4", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드5", field:"통신검사_DTC코드5", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드6", field:"통신검사_DTC코드6", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드7", field:"통신검사_DTC코드7", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드8", field:"통신검사_DTC코드8", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드9", field:"통신검사_DTC코드9", sorter:"string", width:'180'},
			{title:"통신검사 DTC코드10", field:"통신검사_DTC코드10", sorter:"string", width:'180'},
			{title:"통신검사 팩전압", field:"통신검사_팩전압", sorter:"string", width:'180'},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string", width:'180'},
			{title:"통신검사 셀전압편차", field:"통신검사_셀전압편차", sorter:"string", width:'180'},
			{title:"통신검사 릴레이구동", field:"통신검사_릴레이구동", sorter:"string", width:'180'},
			{title:"완료일", field:"완료일", sorter:"string", width:'180'},
			{title:"비고", field:"비고", sorter:"string", width:'180'},
			{title:"QR", field:"QR", sorter:"string", width:'180'},
			{title:"검사자", field:"검사자", sorter:"string", width:'180'},
		],
	});

	count(EOL_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(EOL_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_출하정보(m_id = '') {
	if(worker == '') return;
	var tabledata_출하정보 = [];
	var pic1 = document.getElementById('출하정보_pic1');
	var pic2 = document.getElementById('출하정보_pic2');
	var pic3 = document.getElementById('출하정보_pic3');
	var pic4 = document.getElementById('출하정보_pic4');
	var pic5 = document.getElementById('출하정보_pic5');
	var pic6 = document.getElementById('출하정보_pic6');
	var pic7 = document.getElementById('출하정보_pic7');
	var pic8 = document.getElementById('출하정보_pic8');
	var pic9 = document.getElementById('출하정보_pic9');
	var pic10 = document.getElementById('출하정보_pic10');
	var pic11 = document.getElementById('출하정보_pic11');
	var pic12 = document.getElementById('출하정보_pic12');
	var pic13 = document.getElementById('출하정보_pic13');
	var pic14 = document.getElementById('출하정보_pic14');
	var pic15 = document.getElementById('출하정보_pic15');

	if(m_id == '') {
		find_출하정보(출하정보, { 관리번호 : { $exists: true } });
	} else {
		find(출하정보, m_id);
	}
	await delay();

	tabledata_출하정보 = find_array;
	console.log('출하정보 : ', find_array);;

	table_출하정보 = new Tabulator("#grid_출하정보", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_출하정보, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"출하일", field:"출하일", sorter:"string", width:'180'},
			{title:"출하코드", field:"출하코드", sorter:"string", width:'180'},
			{title:"납품처", field:"납품처", sorter:"string", width:'180'},
			{title:"검사일", field:"검사일", sorter:"string", width:'180'},
			{title:"검토", field:"검토", sorter:"string", width:'180'},
			{title:"승인", field:"승인", sorter:"string", width:'180'},
			{title:"입고정보_작성확인", field:"입고정보_작성확인", sorter:"string", width:'180'},
			{title:"재제조_이력문서_작성확인", field:"재제조_이력문서_작성확인", sorter:"string", width:'180'},
			{title:"기초보고서_작성확인", field:"기초보고서_작성확인", sorter:"string", width:'180'},
			{title:"완료보고서_작성확인", field:"완료보고서_작성확인", sorter:"string", width:'180'},
			{title:"클린상태", field:"클린상태", sorter:"string", width:'180'},
			{title:"팔레트_적정위치", field:"팔레트_적정위치", sorter:"string", width:'180'},
			{title:"포장랩상태", field:"포장랩상태", sorter:"string", width:'180'},
			{title:"UPR_QR", field:"UPR_QR", sorter:"string", width:'180'},
			{title:"LWR_QR", field:"LWR_QR", sorter:"string", width:'180'},
			{title:"HKMC_스티커_URP", field:"HKMC_스티커_URP", sorter:"string", width:'180'},
			{title:"냉각유로_커버1", field:"냉각유로_커버1", sorter:"string", width:'180'},
			{title:"냉각유로_커버2", field:"냉각유로_커버2", sorter:"string", width:'180'},
			{title:"종합평가", field:"종합평가", sorter:"string", width:'180'},
			{title:"용량평가", field:"용량평가", sorter:"string", width:'180'},
			{title:"용량평가_측정값", field:"용량평가_측정값", sorter:"string", width:'180'},
			{title:"SOC60", field:"SOC60", sorter:"string", width:'180'},
			{title:"SOC60_팩전압", field:"SOC60_팩전압", sorter:"string", width:'180'},
			{title:"SOC60_편차", field:"SOC60_편차", sorter:"string", width:'180'},
			{title:"DCIR", field:"DCIR", sorter:"string", width:'180'},
			{title:"DCIR_측정값", field:"DCIR_측정값", sorter:"string", width:'180'},
			{title:"릴레이동시구동", field:"릴레이동시구동", sorter:"string", width:'180'},
			{title:"케이스", field:"케이스", sorter:"string", width:'180'},
			{title:"케이스_측정값", field:"케이스_측정값", sorter:"string", width:'180'},
			{title:"냉각유로", field:"냉각유로", sorter:"string", width:'180'},
			{title:"냉각유로_측정값", field:"냉각유로_측정값", sorter:"string", width:'180'},
			{title:"접지Plus", field:"접지Plus", sorter:"string", width:'180'},
			{title:"접지Plus_측정값", field:"접지Plus_측정값", sorter:"string", width:'180'},
			{title:"접지Minus", field:"접지Minus", sorter:"string", width:'180'},
			{title:"접지Minus_측정값", field:"접지Minus_측정값", sorter:"string", width:'180'},
			{title:"DTC", field:"DTC", sorter:"string", width:'180'},
			{title:"DTC_현재", field:"DTC_현재", sorter:"string", width:'180'},
			{title:"DTC_과거", field:"DTC_과거", sorter:"string", width:'180'},
			{title:"BSA전압", field:"BSA전압", sorter:"string", width:'180'},
			{title:"BSA전압_측정값", field:"BSA전압_측정값", sorter:"string", width:'180'},
			{title:"셀전압편차", field:"셀전압편차", sorter:"string", width:'180'},
			{title:"셀전압편차_측정값", field:"셀전압편차_측정값", sorter:"string", width:'180'},
			{title:"BMS고장NO", field:"BMS고장NO", sorter:"string", width:'180'},
			{title:"BMS융착NO", field:"BMS융착NO", sorter:"string", width:'180'},
			{title:"절연저항", field:"절연저항", sorter:"string", width:'180'},
			{title:"절연저항_측정값", field:"절연저항_측정값", sorter:"string", width:'180'},
			{title:"배터리온도", field:"배터리온도", sorter:"string", width:'180'},
			{title:"배터리온도_최대", field:"배터리온도_최대", sorter:"string", width:'180'},
			{title:"배터리온도_최소", field:"배터리온도_최소", sorter:"string", width:'180'},
			{title:"SOH", field:"SOH", sorter:"string", width:'180'},
			{title:"릴레이_강제구동", field:"릴레이_강제구동", sorter:"string", width:'180'},
			{title:"커넥터_체결검사", field:"커넥터_체결검사", sorter:"string", width:'180'},
			{title:"통신화면_캡쳐", field:"통신화면_캡쳐", sorter:"string", width:'180'},
		],
	});

	count(출하_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(출하_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_특이사항(m_id = '') {
	if(worker == '') return;
	var pic1 = document.getElementById('특이사항_pic1');
	var pic2 = document.getElementById('특이사항_pic2');
	var pic3 = document.getElementById('특이사항_pic3');
	var pic4 = document.getElementById('특이사항_pic4');
	var pic5 = document.getElementById('특이사항_pic5');
	var pic6 = document.getElementById('특이사항_pic6');
	var pic7 = document.getElementById('특이사항_pic7');
	var pic8 = document.getElementById('특이사항_pic8');
	var pic9 = document.getElementById('특이사항_pic9');
	var pic10 = document.getElementById('특이사항_pic10');
	var pic11 = document.getElementById('특이사항_pic11');
	var pic12 = document.getElementById('특이사항_pic12');
	var pic13 = document.getElementById('특이사항_pic13');
	var pic14 = document.getElementById('특이사항_pic14');
	var pic15 = document.getElementById('특이사항_pic15');

	var tabledata_특이사항 = [];

	if(m_id == '') {
		find_특이사항(특이사항, { 관리번호 : { $exists: true } });
	} else {
		find(특이사항, m_id);
	}
	await delay();

	tabledata_특이사항 = find_array;
	console.log('특이사항 : ', find_array);;

	table_특이사항 = new Tabulator("#grid_특이사항", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_특이사항, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"특이사항", field:"특이사항", sorter:"string", width:'180'},
		],
	});

	count(특이사항_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(특이사항_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function grid_교체부품상세1(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세1 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세1, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세1, m_id);
	}
	await delay();

	tabledata_교체부품상세1 = find_array;
	console.log('교체부품상세1 : ', find_array);;

	table_교체부품상세1 = new Tabulator("#grid_교체부품상세1", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세1, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세2(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세2 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세2, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세2, m_id);
	}
	await delay();

	tabledata_교체부품상세2 = find_array;
	console.log('교체부품상세2 : ', find_array);;

	table_교체부품상세2 = new Tabulator("#grid_교체부품상세2", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세2, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세3(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세3 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세3, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세3, m_id);
	}
	await delay();

	tabledata_교체부품상세3 = find_array;
	console.log('교체부품상세3 : ', find_array);;

	table_교체부품상세3 = new Tabulator("#grid_교체부품상세3", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세3, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세4(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세4 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세4, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세4, m_id);
	}
	await delay();

	tabledata_교체부품상세4 = find_array;
	console.log('교체부품상세4 : ', find_array);;

	table_교체부품상세4 = new Tabulator("#grid_교체부품상세4", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세4, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세5(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세5 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세5, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세5, m_id);
	}
	await delay();

	tabledata_교체부품상세5 = find_array;
	console.log('교체부품상세5 : ', find_array);;

	table_교체부품상세5 = new Tabulator("#grid_교체부품상세5", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세5, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세6(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세6 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세6, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세6, m_id);
	}
	await delay();

	tabledata_교체부품상세6 = find_array;
	console.log('교체부품상세6 : ', find_array);;

	table_교체부품상세6 = new Tabulator("#grid_교체부품상세6", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세6, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세7(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세7 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세7, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세7, m_id);
	}
	await delay();

	tabledata_교체부품상세7 = find_array;
	console.log('교체부품상세7 : ', find_array);;

	table_교체부품상세7 = new Tabulator("#grid_교체부품상세7", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세7, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세8(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세8 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세6, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세8, m_id);
	}
	await delay();

	tabledata_교체부품상세8 = find_array;
	console.log('교체부품상세8 : ', find_array);;

	table_교체부품상세8 = new Tabulator("#grid_교체부품상세8", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세8, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"orogin_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세9(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세9 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세9, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세9, m_id);
	}
	await delay();

	tabledata_교체부품상세9 = find_array;
	console.log('교체부품상세9 : ', find_array);;

	table_교체부품상세9 = new Tabulator("#grid_교체부품상세9", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세9, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"OROGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function grid_교체부품상세10(m_id = '') {
	if(worker == '') return;
	var tabledata_교체부품상세10 = [];

	if(m_id == '') {
		find_교체부품상세(교체부품상세10, { 관리번호 : { $exists: true } });
	} else {
		find(교체부품상세10, m_id);
	}
	await delay();

	tabledata_교체부품상세10 = find_array;
	console.log('교체부품상세10 : ', find_array);;

	table_교체부품상세10 = new Tabulator("#grid_교체부품상세10", {
		layout: "resizableColumnFit",
		height:130,
		data:tabledata_교체부품상세10, 
		//autoColumns:true,

		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"ORIGIN 관리번호", field:"ORIGIN_관리번호", sorter:"string", width:'180'},
			{title:"교체전 품명", field:"교체전_품명", sorter:"string", width:'180'},
			{title:"교체전 품번", field:"교체전_품번", sorter:"string", width:'180'},
			{title:"교체전 QR", field:"교체전_QR", sorter:"string", width:'180'},
			{title:"교체후 신품_고품", field:"교체후_신품_고품", sorter:"string", width:'180'},
			{title:"교체후 고품식별", field:"교체후_고품식별", sorter:"string", width:'180'},
			{title:"교체후 품번", field:"교체후_품번", sorter:"string", width:'180'},
			{title:"교체후 QR", field:"교체후_QR", sorter:"string", width:'180'},
			{title:"교체사유", field:"교체사유", sorter:"string", width:'180'},
		],
	});
}

async function 반품입고_load_pic(m_id = '') {
	var pic1 = document.getElementById('반품입고_pic1');
	var pic2 = document.getElementById('반품입고_pic2');
	var pic3 = document.getElementById('반품입고_pic3');
	var pic4 = document.getElementById('반품입고_pic4');
	var pic5 = document.getElementById('반품입고_pic5');
	var pic6 = document.getElementById('반품입고_pic6');
	var pic7 = document.getElementById('반품입고_pic7');
	var pic8 = document.getElementById('반품입고_pic8');
	var pic9 = document.getElementById('반품입고_pic9');
	var pic10 = document.getElementById('반품입고_pic10');
	var pic11 = document.getElementById('반품입고_pic11');
	var pic12 = document.getElementById('반품입고_pic12');
	var pic13 = document.getElementById('반품입고_pic13');
	var pic14 = document.getElementById('반품입고_pic14');
	var pic15 = document.getElementById('반품입고_pic15');

	count(반품입고_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(반품입고_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function 재출하_load_pic(m_id = '') {
	var pic1 = document.getElementById('재출하_pic1');
	var pic2 = document.getElementById('재출하_pic2');
	var pic3 = document.getElementById('재출하_pic3');
	var pic4 = document.getElementById('재출하_pic4');
	var pic5 = document.getElementById('재출하_pic5');
	var pic6 = document.getElementById('재출하_pic6');
	var pic7 = document.getElementById('재출하_pic7');
	var pic8 = document.getElementById('재출하_pic8');
	var pic9 = document.getElementById('재출하_pic9');
	var pic10 = document.getElementById('재출하_pic10');
	var pic11 = document.getElementById('재출하_pic11');
	var pic12 = document.getElementById('재출하_pic12');
	var pic13 = document.getElementById('재출하_pic13');
	var pic14 = document.getElementById('재출하_pic14');
	var pic15 = document.getElementById('재출하_pic15');

	count(재출하_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(재출하_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function 완전분해_load_pic(m_id = '') {
	var pic1 = document.getElementById('완전분해_pic1');
	var pic2 = document.getElementById('완전분해_pic2');
	var pic3 = document.getElementById('완전분해_pic3');
	var pic4 = document.getElementById('완전분해_pic4');
	var pic5 = document.getElementById('완전분해_pic5');
	var pic6 = document.getElementById('완전분해_pic6');
	var pic7 = document.getElementById('완전분해_pic7');
	var pic8 = document.getElementById('완전분해_pic8');
	var pic9 = document.getElementById('완전분해_pic9');
	var pic10 = document.getElementById('완전분해_pic10');
	var pic11 = document.getElementById('완전분해_pic11');
	var pic12 = document.getElementById('완전분해_pic12');
	var pic13 = document.getElementById('완전분해_pic13');
	var pic14 = document.getElementById('완전분해_pic14');
	var pic15 = document.getElementById('완전분해_pic15');

	count(완전분해_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(완전분해_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

async function 폐기_load_pic(m_id = '') {
	var pic1 = document.getElementById('폐기_pic1');
	var pic2 = document.getElementById('폐기_pic2');
	var pic3 = document.getElementById('폐기_pic3');
	var pic4 = document.getElementById('폐기_pic4');
	var pic5 = document.getElementById('폐기_pic5');
	var pic6 = document.getElementById('폐기_pic6');
	var pic7 = document.getElementById('폐기_pic7');
	var pic8 = document.getElementById('폐기_pic8');
	var pic9 = document.getElementById('폐기_pic9');
	var pic10 = document.getElementById('폐기_pic10');
	var pic11 = document.getElementById('폐기_pic11');
	var pic12 = document.getElementById('폐기_pic12');
	var pic13 = document.getElementById('폐기_pic13');
	var pic14 = document.getElementById('폐기_pic14');
	var pic15 = document.getElementById('폐기_pic15');

	count(폐기_pic, { 관리번호 : m_id });
	await delay();
	if(doc_count > 0) {
		find(폐기_pic, m_id);
		await delay();
		console.log(find_array);
		pic1.src='data:image/;base64,' + find_array[0].pic1;
		pic2.src='data:image/;base64,' + find_array[0].pic2;
		pic3.src='data:image/;base64,' + find_array[0].pic3;
		pic4.src='data:image/;base64,' + find_array[0].pic4;
		pic5.src='data:image/;base64,' + find_array[0].pic5;
		pic6.src='data:image/;base64,' + find_array[0].pic6;
		pic7.src='data:image/;base64,' + find_array[0].pic7;
		pic8.src='data:image/;base64,' + find_array[0].pic8;
		pic9.src='data:image/;base64,' + find_array[0].pic9;
		pic10.src='data:image/;base64,' + find_array[0].pic10;
		pic11.src='data:image/;base64,' + find_array[0].pic11;
		pic12.src='data:image/;base64,' + find_array[0].pic12;
		pic13.src='data:image/;base64,' + find_array[0].pic13;
		pic14.src='data:image/;base64,' + find_array[0].pic14;
		pic15.src='data:image/;base64,' + find_array[0].pic15;
	} else {
		pic1.src = '';
		pic2.src = '';
		pic3.src = '';
		pic4.src = '';
		pic5.src = '';
		pic6.src = '';
		pic7.src = '';
		pic8.src = '';
		pic9.src = '';
		pic10.src = '';
		pic11.src = '';
		pic12.src = '';
		pic13.src = '';
		pic14.src = '';
		pic15.src = '';
	}
}

function export_excel() {
	var sheets = {
		'BSA기본정보' : true,
		'입고' : table_입고,
		'세척' : table_세척,
		'기초검사' : table_기초검사,
		'분해조립' : table_분해조립,
		'성능검사' : table_성능검사,
		'EOL' : table_EOL,
		'출하정보' : table_출하정보,
		'특이사항' : table_특이사항,
		'교체부품상세1' : table_교체부품상세1,
		'교체부품상세2' : table_교체부품상세2,
		'교체부품상세3' : table_교체부품상세3,
		'교체부품상세4' : table_교체부품상세4,
		'교체부품상세5' : table_교체부품상세5,
		'교체부품상세6' : table_교체부품상세6,
		'교체부품상세7' : table_교체부품상세7,
		'교체부품상세8' : table_교체부품상세8,
		'교체부품상세9' : table_교체부품상세9,
		'교체부품상세10' : table_교체부품상세10,
	};
	table.download("xlsx", "재제조_bsa_data.xlsx", {sheets:sheets});
}

async function export_all_data_excel() {
	aggregate();
	await delay();	
}

function zoomIn(event) {
	event.target.style.transform = "scale(1.5)";
	event.target.style.zIndex = 1;
	event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
	event.target.style.transform = "scale(1)";
	event.target.style.zIndex = 0;
	event.target.style.transition = "all 0.5s";
}

function toggle1() {
	var con = document.getElementById("pic_1");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle2() {
	var con = document.getElementById("pic_2");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle3() {
	var con = document.getElementById("pic_3");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle4() {
	var con = document.getElementById("pic_4");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle5() {
	var con = document.getElementById("pic_5");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle6() {
	var con = document.getElementById("pic_6");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle7() {
	var con = document.getElementById("pic_7");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle8() {
	var con = document.getElementById("pic_8");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle9() {
	var con = document.getElementById("pic_9");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle10() {
	var con = document.getElementById("pic_10");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle11() {
	var con = document.getElementById("pic_11");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}

function toggle12() {
	var con = document.getElementById("pic_12");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}
