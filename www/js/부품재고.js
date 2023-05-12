var 신품_바코드 = '';
var 고품_QR = '';

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
		//autoColumns:true,
	});

	table_신품재고.on("rowClick", async function(e, row){
		console.log('selected 바코드: ', row.getData().바코드);
		신품_바코드 = row.getData().바코드;

		document.getElementById('신품_바코드').innerHTML = '바코드: ' + 신품_바코드;
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
		//autoColumns:true,
	});

	table_고품재고.on("rowClick", async function(e, row){
		console.log('selected QR: ', row.getData().QR);
		고품_QR = row.getData().QR;

		document.getElementById('고품_QR').innerHTML = 'QR: ' + 고품_QR;
	});
}

async function 신품정보_삭제() {
	deleteOne_신품정보(신품정보, 신품_바코드);
	await delay();

	if(delete_count > 0) {
		alert('삭제 되었습니다.');
		부품재고_시작();
	}

	document.getElementById('신품_바코드').innerHTML = '';
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

