async function 부품재고_시작() {
	flag_부품재고 = false;
	if(worker == '') return;
	var _loaded = document.getElementById('grid_고품재고');
	while(_loaded == undefined) {
		await sleep(DELAY);
	}

	var tabledata_신품재고 = [];
	var tabledata_고품재고 = [];

	count(신품정보, { 바코드 : { $exists : true }});
	await delay();

	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_신품정보(신품정보, { 바코드 : { $exists : true }});
		await delay();
		tabledata_신품재고 = find_array;
	}

	var table_신품재고 = new Tabulator("#grid_신품재고", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_신품재고, 
		autoColumns:true,
	});

	count(고품정보, { 관리번호 : { $exists : true }});
	await delay();

	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_고품정보(고품정보, { 관리번호 : { $exists : true }});
		await delay();
		tabledata_고품재고 = find_array;
	}

	var table_고품재고 = new Tabulator("#grid_고품재고", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_고품재고, 
		autoColumns:true,
	});
}
