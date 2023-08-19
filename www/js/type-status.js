var _chart;

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return String(Math.floor(Math.random() * (max - min + 1)) + min); //최댓값도 포함, 최솟값도 포함
}

async function 생산현황_시작() {
	flag_생산현황 = false;
	if(worker == '') return;
	while(document.getElementById('_chart') == undefined) {
		await sleep(DELAY);
	}
	품번_조회();
}

async function 품번_조회() {
	if(worker == '') return;
	var labels = [];
	var counts = [];
	var background_color = [];
	var border_color = [];

	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 출하 : { $exists : true}, 품번 : { $exists: true}});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 출하 : { $exists : true}, 품번 : { $exists: true}});
		await delay();
	} else {
		count(BSA재제조, { 출하 : { $exists : true}, 품번 : { $exists: true}});
		await delay();
	}
	await sleep(100);
	console.log('doc_count: ', doc_count);
	if(doc_count < 1) return;

	if(level == 'kia') {
		find_query(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 출하 : { $exists : true}, 품번 : { $exists: true}});
		await delay();
	} else if(level == 'hyundai') {
		find_query(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 출하 : { $exists : true}, 품번 : { $exists: true}});
		await delay();
	} else {
		find_query(BSA재제조, { 출하 : { $exists : true}, 품번 : { $exists: true}});
		await delay();
	}
	
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

async function 품번차트(labels, counts, background_color, border_color) {
	if(worker == '') return;
	const canvas = document.getElementById('_chart');

	if(_chart != undefined) {
		_chart.destroy();
	}

	_chart = new Chart(canvas, {
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
