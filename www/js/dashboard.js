var dashboard_chart;

async function 대시보드_시작() {
	flag_대시보드 = false;
	worker = sessionStorage.getItem('worker');
	if(worker == '') return;
	while(document.getElementById('grid_total') == undefined) {	
		await sleep(DELAY);
	}

	총합계_조회();
}

async function 총합계_조회() {
	var tabledata = [
		{ 세척: 0, 기초검사: 0, 분해조립: 0, 성능검사: 0, EOL: 0, 마도: 0, 구장: 0, 출하: 0 },
	];

	count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('세척 count:', doc_count);
	tabledata[0].세척 = doc_count;

	count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('기초검사 count:', doc_count);
	tabledata[0].기초검사 = doc_count;

	count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('분해조립 count:', doc_count);
	tabledata[0].분해조립 = doc_count;

	count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('성능검사 count:', doc_count);
	tabledata[0].성능검사 = doc_count;

	count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('EOL count:', doc_count);
	tabledata[0].EOL = doc_count;

	count(BSA재제조, { 소재지 : '마도'});
	await delay();
	console.log('마도 count:', doc_count);
	tabledata[0].마도 = doc_count;

	count(BSA재제조, { 소재지 : '구장'});
	await delay();
	console.log('구장 count:', doc_count);
	tabledata[0].구장 = doc_count;

	count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : ''}});
	await sleep(100);
	console.log('출하 count:', doc_count);
	tabledata[0].출하 = doc_count;

	var table = new Tabulator("#grid_total", {
		layout: "resizableColumnFit",
		rowFormatter:function(row){
			row.getElement().style.backgroundColor = "yellow";
		},
		columnHeaderVertAlign:"bottom",
		height:130,
		data:tabledata,
		autoColumns:true,

		columns:[
			{title:"세척", field:"세척", sorter:"string", width:200},
			{title:"기초 검사", field:"기초검사", sorter:"string", width:200},
			{title:"분해 조립", field:"분해조립", sorter:"string", width:200},
			{title:"성능 검사", field:"성능검사", sorter:"string", width:200},
			{title:"EOL", field:"EOL", sorter:"string", width:200},
			{title: "출하 대기", 
				columns: [
					{title:"마도", field:"마도", sorter:"string", width:200},
					{title:"구장", field:"구장", sorter:"string", width:200}
				]},
			{title:"출하", field:"출하", sorter:"string", width:200},
		],
	});
}
