var _chart_;
var _month_chart;
var _공정단계_chart;

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return String(Math.floor(Math.random() * (max - min + 1)) + min); //최댓값도 포함, 최솟값도 포함
}

async function 생산현황_시작() {
	flag_생산현황 = false;
	worker = sessionStorage.getItem('worker');
	if(worker == '') return;
	while(document.getElementById('_chart') == undefined) {
		await sleep(DELAY);
	}
	품번_조회();
	월_조회();
	공정단계_조회();
}

async function 품번_조회() {
	if(worker == '') return;
	var labels = [];
	var counts = [];
	var background_color = [];
	var border_color = [];

	count(BSA재제조, { 출하 : { $exists : true}, 품번 : { $exists: true}});
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count < 1) return;

	find_query(BSA재제조, { 출하 : { $exists : true}, 품번 : { $exists: true}});
	await delay();
	console.log(find_array);

	find_array.forEach(function(doc) {
		if(labels.indexOf(doc.품번) < 0) {
			labels.push(doc.품번);
			counts.push(1);

			var back_rand1 = rand(0, 255);
			var back_rand2 = rand(0, 255);
			var back_rand3 = rand(0, 255);

			var border1 = back_rand1;
			var border2 = back_rand2;
			var border3 = back_rand3;

			background_color.push('rgba(' + back_rand1 + ', ' + back_rand2 + ', ' + back_rand3 + ', 0.2)');
			border_color.push('rgb(' + border1 + ', ' + border2 + ', ' + border3 + ')');
		} else {
			var no = labels.indexOf(doc.품번);
			counts[no]++;
		}
	});
	
	console.log(labels);
	console.log(count);
	console.log(background_color);
	console.log(border_color);
	품번차트(labels, counts, background_color, border_color);
}

async function 월_조회() {
	if(worker == '') return;
	await sleep(DELAY);
	var labels = [];
	var counts = [];
	var background_color = [];
	var border_color = [];
	var now = new Date();
	var today = now.toISOString().slice(0, 10);
	var month = now.getMonth();
	await sleep(DELAY);

	var s_day = now.toISOString().slice(0, 8) + '01' + 'T00:00:00.000Z';
	var e_day = now.toISOString().slice(0, 8) + '31' + 'T00:00:00.000Z';

	count(BSA재제조, { 출하 : { $gte : s_day, $lte : e_day}, 품번 : { $exists: true}});
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count < 1) return;

	find_query(BSA재제조, { 출하 : { $gte : s_day, $lte : e_day}, 품번 : { $exists: true}});
	await delay();
	console.log(find_array);

	find_array.forEach(function(doc) {
		if(labels.indexOf(doc.품번) < 0) {
			labels.push(doc.품번);
			counts.push(1);

			var back_rand1 = rand(0, 255);
			var back_rand2 = rand(0, 255);
			var back_rand3 = rand(0, 255);

			var border1 = back_rand1;
			var border2 = back_rand2;
			var border3 = back_rand3;

			background_color.push('rgba(' + back_rand1 + ', ' + back_rand2 + ', ' + back_rand3 + ', 0.2)');
			border_color.push('rgb(' + border1 + ', ' + border2 + ', ' + border3 + ')');
		} else {
			var no = labels.indexOf(doc.품번);
			counts[no]++;
		}
	});
	
	console.log(labels);
	console.log(count);
	console.log(background_color);
	console.log(border_color);
	품번월차트(labels, counts, background_color, border_color);
}

async function 공정단계_조회() {
	if(worker == '') return;
	await sleep(DELAY);
	var labels = [];
	var counts = [];
	var background_color = [];
	var border_color = [];
	await sleep(DELAY);

	count(BSA재제조, { 관리번호 : { $exists: true}, 공정단계 : { $ne: '제조완료'}, 품번 : { $exists: true}});
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count < 1) return;

	find_query(BSA재제조, { 관리번호 : { $exists: true}, 공정단계 : { $ne: '제조완료', $ne: '출하'}, 품번 : { $exists: true}});
	await delay();
	console.log(find_array);

	find_array.forEach(function(doc) {
		if(labels.indexOf(doc.공정단계) < 0) {
			labels.push(doc.공정단계);
			counts.push(1);

			var back_rand1 = rand(0, 255);
			var back_rand2 = rand(0, 255);
			var back_rand3 = rand(0, 255);

			var border1 = back_rand1;
			var border2 = back_rand2;
			var border3 = back_rand3;

			background_color.push('rgba(' + back_rand1 + ', ' + back_rand2 + ', ' + back_rand3 + ', 0.2)');
			border_color.push('rgb(' + border1 + ', ' + border2 + ', ' + border3 + ')');
		} else {
			var no = labels.indexOf(doc.공정단계);
			counts[no]++;
		}
	});
	
	console.log(labels);
	console.log(count);
	console.log(background_color);
	console.log(border_color);
	공정단계차트(labels, counts, background_color, border_color);

}
async function 품번차트(labels, counts, background_color, border_color) {
	if(worker == '') return;
	const canvas = document.getElementById('_chart');

	if(chart != undefined) {
		chart.destroy();
	}

	chart = new Chart(canvas, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: '출하 품번(누적)',
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

async function 품번월차트(labels, counts, background_color, border_color) {
	if(worker == '') return;
	const canvas = document.getElementById('_month_chart');

	if(_month_chart != undefined) {
		_month_chart.destroy();
	}

	_month_chart = new Chart(canvas, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: '출하 품번별 월 누적',
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

async function 공정단계차트(labels, counts, background_color, border_color) {
	if(worker == '') return;
	const canvas = document.getElementById('_공정단계_chart');

	if(_공정단계_chart != undefined) {
		_공정단계_chart.destroy();
	}

	_공정단계_chart = new Chart(canvas, {
		type: 'bar',
		data: {
			labels: ['입고', '제조투입', '세척', '기초검사', '분해조립', '성능검사', 'EOL', '제조완료', '출하'],
			datasets: [{
				label: '공정 단계',
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
