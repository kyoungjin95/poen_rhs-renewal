var dashboard_chart;

async function 대시보드_시작() {
	flag_대시보드 = false;
	if(worker == '') return;
	while(document.getElementById('grid_total') == undefined) {	
		await sleep(DELAY);
	}

	총합계_조회();
	dashboard_조회();
	누적현황_조회();
	주간누적현황_조회();
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
	await delay();
	console.log('출하 count:', doc_count);
	tabledata[0].출하 = doc_count;

	var table = new Tabulator("#grid_total", {
		layout: "resizableColumnFit",
		rowFormatter:function(row){
			row.getElement().style.backgroundColor = "yellow";
		},
		columnHeaderVertAlign:"bottom",
		height:167,
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

async function dashboard_조회() {
	if(worker == '') return;
	var 품번들 = [];
	var tabledatas = [];
	var progress = document.getElementById('progress');
	distinct(BSA재제조, { 품번 : { $exists : true}}, '품번');
	await delay();
	await sleep(100);
	품번들 = find_array;
	console.log('품번들 length :', 품번들.length);

	for(var i = 0; i < 품번들.length; i++) {
		var mno = 품번들[i];
		var doc = {
			업체 : '',
			차종 : '',
			품번 : '',
			세척 : 0,
			기초검사 : 0,
			분해조립 : 0,
			성능검사 : 0,
			EOL : 0,
			마도 : 0,
			구장 : 0,
			출하 : 0,
		}

		find_query(BSA재제조, { 품번 : mno});
		await delay();

		doc.업체 = 'poen';
		doc.차종 = find_array[0].차종;
		doc.품번 = mno;
		count(BSA재제조, { 품번 : mno, 공정단계 : '세척' });
		await delay();
		doc.세척 = doc_count;

		count(BSA재제조, { 품번 : mno, 공정단계 : '기초검사' });
		await delay();
		doc.기초검사 = doc_count;

		count(BSA재제조, { 품번 : mno, 공정단계 : '분해조립' });
		await delay();
		doc.분해조립 = doc_count;

		count(BSA재제조, { 품번 : mno, 공정단계 : '성능검사' });
		await delay();
		doc.성능검사 = doc_count;

		count(BSA재제조, { 품번 : mno, 공정단계 : 'EOL' });
		await delay();
		doc.EOL = doc_count;

		count(BSA재제조, { 품번 : mno, 소재지 : '마도' , EOL : { $ne : 'none'}});
		await delay();
		doc.마도 = doc_count;

		count(BSA재제조, { 품번 : mno, 소재지 : '구장' , EOL : { $ne : 'none'}});
		await delay();
		doc.구장 = doc_count;

		count(BSA재제조, { 품번 : mno, 출하 : { $ne : 'none'}});
		await delay();
		doc.출하 = doc_count;

		tabledatas.push(doc);

		progress.value = (i + 1) / 품번들.length * 100;
	}

	var table = new Tabulator("#grid_left", {
		layout: "resizableColumnFit",
		columnHeaderVertAlign:"bottom",
		height:800,
		data:tabledatas,
		autoColumns:true,

		columns:[
			{title:"구분",
				columns:[
					{title:"업체", field:"업체", sorter:"string", width:100},
					{title:"차종", field:"차종", sorter:"string", width:100},
					{title:"품번", field:"품번", sorter:"string", width:200},
				],
			},
			{title:"세척", field:"세척", sorter:"string", width:100},
			{title:"기초검사", field:"기초검사", sorter:"string", width:100},
			{title:"분해조립", field:"분해조립", sorter:"string", width:100},
			{title:"성능검사", field:"성능검사", sorter:"string", width:100},
			{title:"EOL", field:"EOL", sorter:"string", width:100},
			{title:"출하대기", 
				columns: [
					{title:"마도", field:"마도", sorter:"string", width:100},
					{title:"구장", field:"구장", sorter:"string", width:100},
				],
			},
			{title:"출하", field:"출하", sorter:"string", width:100},
		],
	});
};

async function 누적현황_조회() {
	await sleep(DELAY);
	var tabledata = [
		{ 구분: 'HMC', 목표 : 100, 완성: 320, 출하: 273, 완료율: '87%' },
		{ 구분: 'KIA', 목표 : 100, 완성: 270, 출하: 120, 완료율: '47%' },
	];

	find_query(목표수량, { 목표수량 : { $exists : true }});
	
	var table = new Tabulator("#grid_right", {
		layout: "resizableColumnFit",
		columnHeaderVertAlign:"bottom",
		height:160,
		data:tabledata,
		autoColumns:true,

		columns:[
			{title:"구분", field:"구분", sorter:"string", width:100},
			{title:"목표", field:"구분", sorter:"string", width:100},
			{title:"완성", field:"완성", sorter:"string", width:100},
			{title:"출하", field:"출하", sorter:"string", width:100},
		],
	});

}

async function 주간누적현황_조회() {
	await sleep(DELAY);
	var tabledata = [
		{ 구분: 'HMC', 목표 : 20, 완성: 40, 출하: 35, 완료율: 30 },
		{ 구분: 'KIA', 목표 : 20, 완성:  4, 출하: 24, 완료율: 14 },
	];

	var table = new Tabulator("#grid_right_week", {
		layout: "resizableColumnFit",
		columnHeaderVertAlign:"bottom",
		height:160,
		data:tabledata,
		autoColumns:true,

		columns:[
			{title:"구분", field:"구분", sorter:"string", width:100},
			{title:"완성", field:"완성", sorter:"string", width:100},
			{title:"출하", field:"출하", sorter:"string", width:100},
			{title:"완료율", field:"완료율", sorter:"string", width:100},
		],
	});

}


async function 출하대기차트(labels, counts, background_color, border_color) {
	await sleep(DELAY);
	if(worker == '') return;
	const canvas = document.getElementById('dashboard_chart');

	if(dashboard_chart != undefined) {
		출하대기_chart.destroy();
	}

	dashboard_chart = new Chart(canvas, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: '출하 대기(제조완료)  품번별 누적',
				data: counts,
				backgroundColor: background_color,
				borderColor: border_color,
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
