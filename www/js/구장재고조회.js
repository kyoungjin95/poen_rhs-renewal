var 구장창고_table;

async function 구장재고조회_시작() {
	flag_구장재고조회 = false;

	document.getElementById("filter-field").addEventListener("change", 구장재고updateFilter);
	document.getElementById("filter-type").addEventListener("change", 구장재고updateFilter);
	document.getElementById("filter-value").addEventListener("keyup", 구장재고updateFilter);

	//Clear filters on "Clear Filters" button click
	document.getElementById("filter-clear").addEventListener("click", function(){
		var fieldEl = document.getElementById("filter-field");
		var typeEl = document.getElementById("filter-type");
		var valueEl = document.getElementById("filter-value");
		fieldEl.value = "";
		typeEl.value = "=";
		valueEl.value = "";

		구장창고_table.clearFilter();
	});

	count(구장재고, { 관리번호 : { $exists : true } }); 
	await delay();
	
	if(doc_count > 0) {
		find_구장재고(구장재고, { 관리번호 : { $exists : true } });
		await delay();

		구장창고조회(find_array);
	}
}

function 구장창고조회(data) {
	구장창고_table = new Tabulator("#grid_BSA", {
		layout: "resizableColumnFit",
                data:data,
		height: '700px',
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"재제조번호", field:"재제조번호", sorter:"string", width:'180'},
			{title:"입고일", field:"입고일", sorter:"string", width:'180'},
			{title:"입고처", field:"입고처", sorter:"string", width:'180'},
			{title:"RO번호", field:"RO번호", sorter:"string", width:'180'},
			{title:"부품번호", field:"부품번호", sorter:"string", width:'180'},
			{title:"생산연도", field:"생산연도", sorter:"string", width:'180'},
			{title:"ROM ID", field:"ROM_ID", sorter:"string", width:'180'},
			{title:"출고일", field:"출고일", sorter:"string", width:'180'},
			{title:"출고처", field:"출고처", sorter:"string", width:'180'},
			{title:"비고", field:"비고", sorter:"string", width:'180'},
		],
	});
}

function 구장재고updateFilter(){
  var fieldEl = document.getElementById("filter-field");
  var typeEl = document.getElementById("filter-type");
  var valueEl = document.getElementById("filter-value");

  var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
  var typeVal = typeEl.options[typeEl.selectedIndex].value;

  var filter = filterVal == "function" ? customFilter : filterVal;

  if(filterVal == "function") {
    typeEl.disabled = true;
    valueEl.disabled = true;
  }else{
    typeEl.disabled = false;
    valueEl.disabled = false;
  }

  if(filterVal){
    구장창고_table.setFilter(filter, typeVal, valueEl.value);
  }
}
