var row_one_id = '';
var chart;

async function 월간현황_시작() {
	flag_월간현황 = false;
	if(worker == '') return;
	while(document.getElementById('_검색일') == undefined) {
		await sleep(DELAY);
	}
	월간_조회();
}

async function 월간_조회(flag_id_search = false) {
	if(worker == '') return;
	if(flag_id_search == false) {
		var DateTime = luxon.DateTime;
		var seoul = DateTime.local().setZone("Asia/Seoul");
		var now = seoul.toString();
		var today = now.slice(0, 10);
		await sleep(DELAY);
		_검색일.value =  today;

		var s_day = now.slice(0, 8) + '01' + 'T00:00:00.000Z';
		var e_day = now.slice(0, 8) + '31' + 'T00:00:00.000Z';

		const count_입고 = await 월간입고_table(s_day, e_day, flag_id_search);
		const count_출하 = await 월간출하_table(s_day, e_day, flag_id_search);

		월간차트(count_입고, count_출하);
	} else {
		var search_day = _검색일.value;
		var s_day = search_day.slice(0, 8) + '01' + 'T00:00:00.000Z';
		var e_day = search_day.slice(0, 8) + '31' + 'T00:00:00.000Z';
		
		console.log('search start: ', s_day, e_day);

		const count_입고 = await 월간입고_table(s_day, e_day, flag_id_search);
		const count_출하 = await 월간출하_table(s_day, e_day, flag_id_search);

		if(chart != undefined) chart.destroy();
	
		월간차트(count_입고, count_출하);
	}
}

async function 월간차트(count_입고 = 0, count_출하 = 0) {
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

async function 월간입고_table(s_day, e_day, flag_id_search = false, search_month = '') {
	if(worker == '') return;
	var tabledata_BSA_입고 = [];
	count(BSA재제조, { 입고 : { $gte: s_day, $lte: e_day }});
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_query(BSA재제조, { 입고 : { $gte: s_day, $lte: e_day }});
		await delay();
		await sleep(100);

		for(var i = 0; i < find_array.length; i++) {
			delete find_array[i].적재No;
			delete find_array[i].입고;
			delete find_array[i].제조투입;
			delete find_array[i].세척;
			delete find_array[i].기초검사;
			delete find_array[i].분해조립;
			delete find_array[i].성능검사;
			delete find_array[i].EOL;
			delete find_array[i].마지막충전일;
		}
		tabledata_BSA_입고 = find_array;
	}

	var table = new Tabulator("#grid_입고", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_BSA_입고, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:200},
			{title:"차종", field:"차종", sorter:"string", width:200},
			{title:"품번", field:"품번", sorter:"string", width:200},
			{title:"RO_no", field:"RO_no", sorter:"string", width:200},
			{title:"공정단계", field:"공정단계", sorter:"string", width:200},
			//{title:"적재No", field:"적재No", sorter:"string", width:200},
			//{title:"제조투입", field:"제조투입", sorter:"string", width:200},
			//{title:"세척", field:"세척", sorter:"string", width:200},
			//{title:"기초검사", field:"기초검사", sorter:"string", width:200},
			//{title:"분해조립", field:"분해조립", sorter:"string", width:200},
			//{title:"성능검사", field:"성능검사", sorter:"string", width:200},
			//{title:"EOL", field:"EOL", sorter:"string", width:200},
			{title:"입고", field:"입고", sorter:"string", width:200},
			//{title:"출하", field:"출하", sorter:"string", width:200},
			{title:"소재지", field:"소재지", sorter:"string", width:200},
		],
	});

	return doc_count;
}

async function 월간출하_table(s_day, e_day, flag_id_search = false, search_month = '') {
	if(worker == '') return;
	var tabledata_BSA_출하 = [];
	count(BSA재제조, { 출하 : { $gte: s_day, $lte: e_day }});
	await delay();
	console.log('doc_count: ', doc_count);

	if(doc_count >= 1) {
		find_query(BSA재제조, { 출하 : { $gte: s_day, $lte: e_day }});
		await delay();
		await sleep(100);

		for(var i = 0; i < find_array.length; i++) {
			delete find_array[i].적재No;
			delete find_array[i].입고;
			delete find_array[i].제조투입;
			delete find_array[i].세척;
			delete find_array[i].기초검사;
			delete find_array[i].분해조립;
			delete find_array[i].성능검사;
			delete find_array[i].EOL;
			delete find_array[i].마지막충전일;
		}
		tabledata_BSA_출하 = find_array;
	}

	var table = new Tabulator("#grid_출하", {
		layout: "resizableColumnFit",
		height:500,
		data:tabledata_BSA_출하, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string", width:200},
			{title:"차종", field:"차종", sorter:"string", width:200},
			{title:"품번", field:"품번", sorter:"string", width:200},
			{title:"RO_no", field:"RO_no", sorter:"string", width:200},
			{title:"공정단계", field:"공정단계", sorter:"string", width:200},
			//{title:"적재No", field:"적재No", sorter:"string", width:200},
			//{title:"입고", field:"입고", sorter:"string", width:200},
			//{title:"제조투입", field:"제조투입", sorter:"string", width:200},
			//{title:"세척", field:"세척", sorter:"string", width:200},
			//{title:"기초검사", field:"기초검사", sorter:"string", width:200},
			//{title:"분해조립", field:"분해조립", sorter:"string", width:200},
			//{title:"성능검사", field:"성능검사", sorter:"string", width:200},
			//{title:"EOL", field:"EOL", sorter:"string", width:200},
			{title:"출하", field:"출하", sorter:"string", width:200},
			{title:"소재지", field:"소재지", sorter:"string", width:200},
		],
	});

	return doc_count;
}
