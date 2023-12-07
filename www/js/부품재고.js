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
    table_신품재고.setFilter(filter, typeVal, valueEl.value);
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

	find_자재입출고(자재입출고, { QR : { $exists : true }});
	await delay();

	if(자재입출고_v != null) {
		tabledata_신품재고 = JSON.parse(JSON.stringify(자재입출고_v));
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
			{title:"단가", field:"단가", sorter:"string", width:'180'},
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

	var input_counts = [];
	var counts = [];
	var 품번 = [];
	var 단가합 = [];
	var 평균단가 = [];
	var 합계 = [];

	find_자재입출고(자재입출고, { QR: { $exists: true } });
	await delay();

	자재입출고_v.forEach(async function (infos) {
		var date_start = new Date('2023-04-30');
		var date_date = new Date(infos.날짜);

		if(date_date < date_start) return;

		if (품번.indexOf(infos.품번) < 0) {
			품번.push(infos.품번);
			counts.push(infos.수량);
			input_counts.push(1);
			
			if(infos.단가 != undefined) 단가합.push(infos.단가);
			else 단가합.push(0);

			if(infos.단가 != undefined) 평균단가.push(infos.단가);
			else 평균단가.push(0);

			if(infos.단가 != undefined) 합계.push(infos.단가 * infos.수량);
			else 합계.push(0);
		} else {
			var no = 품번.indexOf(infos.품번);
			input_counts[no]++;
			if(infos.단가 != undefined && infos.단가 != '') { 
				counts[no] += infos.수량;
				단가합[no] += infos.단가;
				평균단가[no] = 단가합[no] / input_counts[no];
				합계[no] += infos.단가 * infos.수량;
			}

		}
	});
	console.log(평균단가, 단가합);
	var list = [];
	for(var i = 0; i < 품번.length; i++) {
		var item = {
			품번 : 품번[i],
			수량 : Number(counts[i]).toLocaleString('ko-KR'),
			평균단가 : Number(평균단가[i]).toLocaleString('ko-KR'),
			합계 : Number(합계[i]).toLocaleString('ko-KR')
		}

		list.push(item);
	}
	
	var table_평균단가 = new Tabulator("#grid_품번별단가평균", {
		layout: "resizableColumnFit",
		height:'700px',
		data:list, 

		columns: [
			{title:"품번", field:"품번", sorter:"string", width:'180'},
			{title:"평균단가", field:"평균단가", sorter:"string", width:'180'},
			{title:"수량", field:"수량", sorter:"string", width:'180'},
			{title:"합계", field:"합계", sorter:"string", width:'180'},
		],
	});

	find_고품정보(고품정보, { 관리번호 : { $exists : true }});
	await delay();

	if(고품정보_v != null) {
		tabledata_고품재고 = JSON.parse(JSON.stringify(고품정보_v));
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
			{title:"폐기품출고", field:"폐기품출고", sorter:"string", width:'180'},
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

async function 폐기품출고() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();

	var doc = {
		QR : 고품_QR,
		폐기품출고 : now.substr(0, 19)
	}

	update_고품정보(고품정보, doc);
	await delay();

	if(update_count > 0) {
		부품재고_시작();
	}
}

async function 폐기품출고취소() {
	var doc = {
		QR : 고품_QR,
		폐기품출고 : ''
	}

	update_고품정보(고품정보, doc);
	await delay();

	if(update_count > 0) {
		부품재고_시작();
	}
}
