var 신품_QR = '';
var 고품_QR = '';
var table_신품재고;
var table_고품재고;
function 신품_updateFilter(){
  var fieldEl = document.getElementById("new_filter-field");
  var typeEl = document.getElementById("new_filter-type");
  var valueEl = document.getElementById("new_filter-value");

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
    table_신품재고.setFilter(filter,typeVal, valueEl.value);
  }
}

function 고품_updateFilter(){
  var fieldEl = document.getElementById("old_filter-field");
  var typeEl = document.getElementById("old_filter-type");
  var valueEl = document.getElementById("old_filter-value");

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
    table_고품재고.setFilter(filter,typeVal, valueEl.value);
  }
}

async function 부품재고_시작() {
	flag_부품재고 = false;
	if(worker == '') return;
	var _loaded = document.getElementById('grid_고품재고');
	while(_loaded == undefined) {
		await sleep(DELAY);
	}

	;

	//Update filters on value change
	document.getElementById("new_filter-field").addEventListener("change", 신품_updateFilter);
	document.getElementById("new_filter-type").addEventListener("change", 신품_updateFilter);
	document.getElementById("new_filter-value").addEventListener("keyup", 신품_updateFilter);

	//Clear filters on "Clear Filters" button click
	document.getElementById("new_filter-clear").addEventListener("click", function(){
		var fieldEl = document.getElementById("new_filter-field");
		var typeEl = document.getElementById("new_filter-type");
		var valueEl = document.getElementById("new_filter-value");
		fieldEl.value = "";
		typeEl.value = "=";
		valueEl.value = "";

		table_신품재고.clearFilter();
	});

	//Update filters on value change
	document.getElementById("old_filter-field").addEventListener("change", 고품_updateFilter);
	document.getElementById("old_filter-type").addEventListener("change", 고품_updateFilter);
	document.getElementById("old_filter-value").addEventListener("keyup", 고품_updateFilter);

	//Clear filters on "Clear Filters" button click
	document.getElementById("old_filter-clear").addEventListener("click", function(){
		var fieldEl = document.getElementById("old_filter-field");
		var typeEl = document.getElementById("old_filter-type");
		var valueEl = document.getElementById("old_filter-value");
		fieldEl.value = "";
		typeEl.value = "=";
		valueEl.value = "";

		table_고품재고.clearFilter();
	});

	var tabledata_신품재고 = [];
	var tabledata_고품재고 = [];

	count(자재입출고, { QR : { $exists : true }});
	await delay();

	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_신품정보(자재입출고, { QR : { $exists : true }});
		await delay();
		tabledata_신품재고 = find_array;
		//console.log(find_array);
	}

	table_신품재고 = new Tabulator("#grid_신품재고", {
		layout: "resizableColumnFit",
		height:'700px',
		data:tabledata_신품재고, 

		columns: [
			{title:"QR", field:"QR", sorter:"string", width:'180'},
			{title:"날짜", field:"날짜", sorter:"string", width:'180'},
			{title:"구분", field:"구분", sorter:"string", width:'180'},
			{title:"차종", field:"차종", sorter:"string", width:'180'},
			{title:"품명", field:"품명", sorter:"string", width:'180'},
			{title:"품번", field:"품번", sorter:"string", width:'180'},
			{title:"수량", field:"수량", sorter:"string", width:'180'},
			{title:"LotNo", field:"LotNo", sorter:"string", width:'180'},
			{title:"비고", field:"비고", sorter:"string", width:'180'},
			{title:"사용관리번호", field:"사용관리번호", sorter:"string", width:'180'},
		],
	});

	await sleep(DELAY);

	table_신품재고.on("rowClick", async function(e, row){
		console.log('selected QR: ', row.getData().QR);
		신품_QR = row.getData().QR;

		document.getElementById('신품_QR').innerHTML = 'QR: ' + 신품_QR;
	});

	count(고품정보, { 관리번호 : { $exists : true }});
	await delay();

	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_고품정보(고품정보, { 관리번호 : { $exists : true }});
		await delay();
		tabledata_고품재고 = find_array;
	}

	table_고품재고 = new Tabulator("#grid_고품재고", {
		layout: "resizableColumnFit",
		height: '700px',
		data:tabledata_고품재고, 
		
		columns: [
			{title:"QR", field:"QR", sorter:"string", width:'180'},
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"품명", field:"품명", sorter:"string", width:'180'},
			{title:"구분", field:"구", sorter:"string", width:'180'},
			{title:"번호", field:"번호", sorter:"string", width:'180'},
			{title:"폐기여부", field:"폐기여부", sorter:"string", width:'180'},
			{title:"사용여부", field:"사용여부", sorter:"string", width:'180'},
			{title:"사용 관리번호", field:"사용_관리번호", sorter:"string", width:'180'},
			{title:"등록 작업자", field:"등록_작업자", sorter:"string", width:'180'},
			{title:"사용 작업자", field:"사용_작업자", sorter:"string", width:'180'},
			{title:"등록일", field:"등록일", sorter:"string", width:'180'},
			{title:"사용일", field:"사용일", sorter:"string", width:'180'},
		],
		
	});

	table_고품재고.on("rowClick", async function(e, row){
		console.log('selected QR: ', row.getData().QR);
		고품_QR = row.getData().QR;

		document.getElementById('고품_QR').innerHTML = 'QR: ' + 고품_QR;
	});
}

async function 신품정보_삭제() {
	deleteOne_신품정보(자재입출고, 신품_QR);
	await delay();

	if(delete_count > 0) {
		alert('삭제 되었습니다.');
		부품재고_시작();
	}

	document.getElementById('신품_QR').innerHTML = '';
}

async function 고품정보_삭제() {
	deleteOne_고품정보(고품정보, 고품_QR);
	await delay();

	if(delete_count > 0) {
		alert('삭제 되었습니다.');
		부품재고_시작();
	}

	document.getElementById('고품_QR').innerHTML = '';
}
