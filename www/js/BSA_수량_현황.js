var BSA대기수량_table;
var 출하대기_BSA_관리번호 = '';

async function BSA_수량_현황_시작() {
	flag_BSA_수량_현황 = false;
	if(worker == '') return;
	await sleep(200);
	BSA_수량_현황_조회();

	document.getElementById("filter-field").addEventListener("change", BSA대기수량_updateFilter);
	document.getElementById("filter-type").addEventListener("change", BSA대기수량_updateFilter);
	document.getElementById("filter-value").addEventListener("keyup", BSA대기수량_updateFilter);

	//Clear filters on "Clear Filters" button click
	document.getElementById("filter-clear").addEventListener("click", function(){
		var fieldEl = document.getElementById("filter-field");
		var typeEl = document.getElementById("filter-type");
		var valueEl = document.getElementById("filter-value");
		fieldEl.value = "";
		typeEl.value = "=";
		valueEl.value = "";

		BSA대기수량_table.clearFilter();
	});

	document.getElementById('대기라벨').innerHTML = '선택 대기 목록';
	document.getElementById('입고').addEventListener("click", function(){
		document.getElementById('대기라벨').innerHTML = '입고 대기 목록';
		대기목록('입고');
	});
	document.getElementById('세척').addEventListener("click", function(){
		document.getElementById('대기라벨').innerHTML = '세척 대기 목록';
		대기목록('세척');
	});
	document.getElementById('기초').addEventListener("click", function(){
		document.getElementById('대기라벨').innerHTML = '기초검사 대기 목록';
		대기목록('기초검사');
	});
	document.getElementById('분해').addEventListener("click", function(){
		document.getElementById('대기라벨').innerHTML = '분해조립 대기 목록';
		대기목록('분해조립');
	});
	document.getElementById('성능').addEventListener("click", function(){
		document.getElementById('대기라벨').innerHTML = '성능검사 대기 목록';
		대기목록('성능검사');
	});
	document.getElementById('EOL').addEventListener("click", function(){
		document.getElementById('대기라벨').innerHTML = 'EOL 대기 목록';
		대기목록('EOL');
	});
}

async function BSA_수량_현황_조회() {
	await 작업대기();
	await 세척대기();
	await 기초검사대기();
	await 분해조립대기();
	await 성능검사대기();
	await EOL대기();
	await 출하대기();

	console.log('update');
}

async function 작업대기() {
	 count(BSA재제조, { 공정단계 : '입고' });
	 await delay();

	 document.getElementById('check_num1').innerHTML = doc_count;
}

async function 세척대기() {
	 count(BSA재제조, { 공정단계 : '세척' });
	 await delay();

	 document.getElementById('check_num2').innerHTML = doc_count;
}

async function 기초검사대기() {
	 count(BSA재제조, { 공정단계 : '기초검사' });
	 await delay();

	 document.getElementById('check_num3').innerHTML = doc_count;
}

async function 분해조립대기() {
	 count(BSA재제조, { 공정단계 : '분해조립' });
	 await delay();

	 document.getElementById('check_num4').innerHTML = doc_count;
}

async function 성능검사대기() {
	 count(BSA재제조, { 공정단계 : '성능검사' });
	 await delay();

	 document.getElementById('check_num5').innerHTML = doc_count;
}

async function EOL대기() {
	 count(BSA재제조, { 공정단계 : 'EOL' });
	 await delay();

	 document.getElementById('check_num6').innerHTML = doc_count;
}

async function 출하대기() {
	 count(BSA재제조, { 공정단계 : '제조완료' });
	 await delay();

	 document.getElementById('check_num7').innerHTML = doc_count;

	 await 출하대기목록();
}

async function 대기목록(공정) {
	var 대기_tabledata_BSA = [];

	count(BSA재제조, { 공정단계 : 공정 });
	await delay();

	if(doc_count == 0) {
		대기_tabledata_BSA = []
	} else {
		find_query(BSA재제조, { 공정단계 : 공정 });
		await delay();

		대기_tabledata_BSA = find_array;
	}

	BSA대기수량_table = new Tabulator("#grid_대기", {
		layout: "resizableColumnFit",
                data: 대기_tabledata_BSA,
		height: '300px',
		
		columns:[
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
			{title:"출하", field:"출하", sorter:"string", width:'180'},
			{title:"반품입고", field:"반품입고", sorter:"string", width:'180'},
			{title:"재출하", field:"재출하", sorter:"string", width:'180'},
			{title:"완전분해", field:"완전분해", sorter:"string", width:'180'},
			{title:"폐기", field:"폐기", sorter:"string", width:'180'},
		],
	});
}

async function 출하대기목록() {
	var 출하대기_tabledata_BSA = [];

	count(BSA재제조, { 공정단계 : '제조완료' });
	await delay();

	if(doc_count == 0) return;

	find_query(BSA재제조, { 공정단계 : '제조완료' });
	await delay();

	출하대기_tabledata_BSA = find_array;

	BSA대기수량_table = new Tabulator("#grid_출하대기", {
		layout: "resizableColumnFit",
                data: 출하대기_tabledata_BSA,
		height: '700px',
		
		columns:[
			{title:"출하예약", field:"출하예약", sorter:"string", width:'180'},
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
			{title:"출하", field:"출하", sorter:"string", width:'180'},
			{title:"반품입고", field:"반품입고", sorter:"string", width:'180'},
			{title:"재출하", field:"재출하", sorter:"string", width:'180'},
			{title:"완전분해", field:"완전분해", sorter:"string", width:'180'},
			{title:"폐기", field:"폐기", sorter:"string", width:'180'},
		],
	});

	BSA대기수량_table.on("rowClick", async function(e, row){
		console.log('selected 관리번호: ', row.getData().관리번호);
		출하대기_BSA_관리번호 = row.getData().관리번호;
		
		document.getElementById('출하예약_관리번호').innerHTML = '출하 예약 관리번호: ' +  출하대기_BSA_관리번호;
	});
}

function BSA대기수량_updateFilter(){
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
		BSA대기수량_table.setFilter(filter,typeVal, valueEl.value.trim());
	}
}

async function 출하예약() {
	if(출하대기_BSA_관리번호 == '') {
		alert('출하 예약할 BSA를 선택하세요');
		return;
	}

	var doc = {
		관리번호 : 출하대기_BSA_관리번호,
		출하예약 : '예약'
	}

	update(BSA재제조, doc);
	await delay();

	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	BSA_수량_현황_조회();
}

async function 출하예약취소() {
	if(출하대기_BSA_관리번호 == '') {
		alert('출하 예약 취소할 BSA를 선택하세요');
		return;
	}

	var doc = {
		관리번호 : 출하대기_BSA_관리번호,
		출하예약 : '예약 취소'
	}

	update(BSA재제조, doc);
	await delay();

	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	BSA_수량_현황_조회();
}
