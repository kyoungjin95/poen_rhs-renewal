var row_one_id = '';
var chart;

async function 일간현황_시작() {
	flag_일간현황 = false;
	worker = localStorage.getItem('worker');
	if(worker == '') return;
	while(_검색일 == undefined) {
		await sleep(DELAY);
	}
	일간_조회();
}

function 날짜_조회() {
	if(worker == '') return;
	var search_day = _검색일.value;

	일간_조회(search_day);
}

async function 일간_조회(search_day = '') {
	if(worker == '') return;
	var now = new Date();
	var today = now.toISOString().slice(0, 10);
	await sleep(DELAY);

	if(search_day == '') {
		_검색일.value = today;
		search_day = today;
	} else {
		chart.destroy();
	}

	console.log('search_day:', search_day);
	const count_입고 = await 일간입고_table(search_day);
	const count_출하 = await 일간출하_table(search_day);
	일간차트(count_입고, count_출하);
}

async function 일간차트(count_입고 = 0, count_출하 = 0) {
	if(worker == '') return;
	const canvas = document.getElementById('chart');

	chart = new Chart(canvas, {
		type: 'bar',
		data: {
			labels: ['입고', '출하'],
			datasets: [{
				label: '입고 vs 출하',
				data: [count_입고, count_출하],
				backgroundColor: [
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
				],
				borderColor: [
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
				],
				borderWidth: 2
			}]
		},
		options: {
			scales: {
				y: {
					title: {
						display: true,
						text: '갯수'
					},
					min: 0,
					ticks: {
						// forces step size to be 50 units
						stepSize: 1
					},
					beginAtZero: true
				}
			}
		}
	});
}

async function 일간입고_table(search_day = '') {
	if(worker == '') return;
	var tabledata_BSA_입고 = [];
	count(BSA재제조, { 입고 : search_day });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_query(BSA재제조, { 입고 : search_day });
		await delay();
		tabledata_BSA_입고 = find_array;
	}

	var table = new Tabulator("#grid_입고", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_BSA_입고, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:200},
			{title:"차종", field:"차종", sorter:"string", width:200},
			{title:"품번", field:"품번", sorter:"string", width:200},
			{title:"RO_no", field:"RO_no", sorter:"string", width:200},
			{title:"공정단계", field:"공정단계", sorter:"string", width:200},
			{title:"적재No", field:"적재No", sorter:"string", width:200},
			{title:"입고", field:"입고", sorter:"string", width:200},
			{title:"제조투입", field:"제조투입", sorter:"string", width:200},
			{title:"세척", field:"세척", sorter:"string", width:200},
			{title:"기초검사", field:"기초검사", sorter:"string", width:200},
			{title:"분해조립", field:"분해조립", sorter:"string", width:200},
			{title:"성능검사", field:"성능검사", sorter:"string", width:200},
			{title:"EOL", field:"EOL", sorter:"string", width:200},
			{title:"출하", field:"출하", sorter:"string", width:200},
			{title:"소재지", field:"소재지", sorter:"string", width:200},
		],
	});

	return doc_count;
}

async function 일간출하_table(search_day = '') {
	if(worker == '') return;
	var tabledata_BSA_출하 = [];
	count(BSA재제조, { 출하 : search_day });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_query(BSA재제조, { 출하 : search_day });
		await delay();
		tabledata_BSA_출하 = find_array;
	}

	var table = new Tabulator("#grid_출하", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_BSA_출하, 
		autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:200},
			{title:"차종", field:"차종", sorter:"string", width:200},
			{title:"품번", field:"품번", sorter:"string", width:200},
			{title:"RO_no", field:"RO_no", sorter:"string", width:200},
			{title:"공정단계", field:"공정단계", sorter:"string", width:200},
			{title:"적재No", field:"적재No", sorter:"string", width:200},
			{title:"입고", field:"입고", sorter:"string", width:200},
			{title:"제조투입", field:"제조투입", sorter:"string", width:200},
			{title:"세척", field:"세척", sorter:"string", width:200},
			{title:"기초검사", field:"기초검사", sorter:"string", width:200},
			{title:"분해조립", field:"분해조립", sorter:"string", width:200},
			{title:"성능검사", field:"성능검사", sorter:"string", width:200},
			{title:"EOL", field:"EOL", sorter:"string", width:200},
			{title:"출하", field:"출하", sorter:"string", width:200},
			{title:"소재지", field:"소재지", sorter:"string", width:200},
		],
	});

	return doc_count;
}

