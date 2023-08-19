var dashboard_chart;

async function 대시보드_시작() {
	flag_대시보드 = false;
	if(worker == '') return;
	await sleep(200);
	총합계_조회();
}

function dashboard_조회() {
	var today_begin = document.getElementById('_검색일_from').value;
	var today_end = document.getElementById('_검색일_to').value;
	
	조회_list(today_begin, today_end);
}

function 총합계_조회() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';
	
	조회_list(today_begin, today_end);
}

async function 조회_list(today_begin, today_end) {
	console.log(today_begin, today_end);

	//await dash_세척();
	await dash_기초검사(today_begin, today_end);
	await dash_분해조립(today_begin, today_end);
	await dash_성능검사(today_begin, today_end);
	await dash_EOL(today_begin, today_end);
	await dash_출하(today_begin, today_end);
}

async function dash_세척(today_begin, today_end) {
	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 세척 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 세척 : { $exists : true, $ne : 'none', $ne : ''}});
	} else {
		count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	}
	console.log('세척 count:', doc_count);
	var 세척누적 = doc_count;
	await sleep(DELAY);

	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 세척 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 세척 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	} else {
		count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	}
	console.log('세척 당일 count:', doc_count);
	var 세척당일 = doc_count;
	await sleep(DELAY);

	document.getElementById('num1').innerHTML = 세척누적 + ' (' + 세척당일 + ')';
}

async function dash_기초검사(today_begin, today_end) {
	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 기초검사 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 기초검사 : { $exists : true, $ne : 'none', $ne : ''}});
	} else {
		count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	}
	console.log('기초검사누적 count:', doc_count);
	var 기초검사누적 = doc_count;
	await sleep(DELAY);

	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 기초검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 기초검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	} else {
		count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	}
	await delay();
	console.log('기초검사당일 count:', doc_count);
	var 기초검사당일 = doc_count;
	await sleep(DELAY);

	document.getElementById('num1').innerHTML = (기초검사누적 + 1) + ' (' + 기초검사당일 + ')';
	document.getElementById('num2').innerHTML = 기초검사누적 + ' (' + 기초검사당일 + ')';
}

async function dash_분해조립(today_begin, today_end) {
	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 분해조립 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 분해조립 : { $exists : true, $ne : 'none', $ne : ''}});
	} else {
		count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	}
	await delay();
	console.log('분해조립누적 count:', doc_count);
	var 분해조립누적 = doc_count;
	await sleep(DELAY);

	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 분해조립 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 분해조립 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	} else {
		count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	}
	await delay();
	console.log('분해조립당일 count:', doc_count);
	var 분해조립당일 = doc_count;
	await sleep(DELAY);

	document.getElementById('num3').innerHTML = 분해조립누적 + ' (' + 분해조립당일 + ')';
}

async function dash_성능검사(today_begin, today_end) {
	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 성능검사 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 성능검사 : { $exists : true, $ne : 'none', $ne : ''}});
	} else {
		count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	}
	await delay();
	console.log('성능검사누적 count:', doc_count);
	var 성능검사누적 = doc_count;
	await sleep(DELAY);

	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 성능검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 성능검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	} else {
		count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	}
	await delay();
	console.log('성능검사 당일  count:', doc_count);
	var 성능검사당일 = doc_count;
	await sleep(DELAY);

	document.getElementById('num4').innerHTML = 성능검사누적 + ' ('+ 성능검사당일 + ')';
}

async function dash_EOL(today_begin, today_end) {
	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, EOL : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, EOL : { $exists : true, $ne : 'none', $ne : ''}});
	} else {
		count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	}
	await delay();
	console.log('EOL 누적 count:', doc_count);
	var EOL누적 = doc_count;
	await sleep(DELAY);

	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, EOL : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, EOL : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	} else {
		count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	}
	await delay();
	console.log('EOL 당일  count:', doc_count);
	var EOL당일 = doc_count;
	await sleep(DELAY);
	
	document.getElementById('num5').innerHTML = EOL누적 + ' (' + EOL당일 + ')';
}

async function dash_출하(today_begin, today_end) {
	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 출하 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 출하 : { $exists : true, $ne : 'none', $ne : ''}});
	} else {
		count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : ''}});
		await delay();
	}
	await delay();
	console.log('출하누적 count:', doc_count);
	var 출하누적 = doc_count;
	await sleep(DELAY);

	if(level == 'kia') {
		count(BSA재제조, { 차종 : { $in : ['DE', 'DE_EV', 'DEPBV', 'CV', 'CV_EV', 'MV', 'MV_EV', 'PU', 'PU_EV', 'SG2', 'TAM', 'PS', 'PS_EV', 'SK3']}, 출하 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	} else if(level == 'hyundai') {
		count(BSA재제조, { 차종 : { $in : ['OS', 'OS_EV', 'NE', 'NE_EV', 'HR', 'HR_EV', 'LK', 'LK_EV', 'LM', 'LM_EV', 'LKFC', 'CS', 'CS-EV', 'CS_EV', 'SX2', 'AE', 'AE_EV', 'CE', 'CE_EV', 'ME', 'ME_EV', 'FE', 'FE_EV', 'RG3', 'JW', 'JW_EV', 'JK', 'JK_EV', 'JX', 'JX_EV']}, 출하 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	} else {
		count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
		await delay();
	}
	await delay();
	console.log('출하당일 count:', doc_count);
	var 출하당일 = doc_count;
	await sleep(DELAY);
	
	document.getElementById('num8').innerHTML = 출하누적 + ' (' + 출하당일 + ')';
}
