var dashboard_chart;

async function 대시보드_시작() {
	flag_대시보드 = false;
	if(worker == '') return;
	await sleep(200);
	총합계_조회();
}

async function 총합계_조회() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';
	console.log(now, today_begin, today_end);

	//await dash_세척();
	await dash_기초검사();
	await dash_분해조립();
	await dash_성능검사();
	await dash_EOL();
	await dash_출하();
}

async function dash_세척() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';

	count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('세척 count:', doc_count);
	var 세척누적 = doc_count;

	count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	console.log('세척 당일 count:', doc_count);
	var 세척당일 = doc_count;

	document.getElementById('num1').innerHTML = 세척누적 + ' (' + 세척당일 + ')';
}

async function dash_기초검사() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';

	count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('기초검사누적 count:', doc_count);
	var 기초검사누적 = doc_count;

	count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	console.log('기초검사당일  count:', doc_count);
	var 기초검사당일 = doc_count;

	document.getElementById('num1').innerHTML = (기초검사누적 + 1) + ' (' + 기초검사당일 + ')';
	document.getElementById('num2').innerHTML = 기초검사누적 + ' (' + 기초검사당일 + ')';
}

async function dash_분해조립() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';

	count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('분해조립누적 count:', doc_count);
	var 분해조립누적 = doc_count;

	count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	console.log('분해조립당일 count:', doc_count);
	var 분해조립당일 = doc_count;

	document.getElementById('num3').innerHTML = 분해조립누적 + ' (' + 분해조립당일 + ')';
}

async function dash_성능검사() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';

	count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('성능검사누적 count:', doc_count);
	var 성능검사누적 = doc_count;

	count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	console.log('성능검사 당일  count:', doc_count);
	var 성능검사당일 = doc_count;

	document.getElementById('num4').innerHTML = 성능검사누적 + ' ('+ 성능검사당일 + ')';
}

async function dash_EOL() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';

	count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('EOL 누적 count:', doc_count);
	var EOL누적 = doc_count;

	count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	console.log('EOL 당일  count:', doc_count);
	var EOL당일 = doc_count;
	
	document.getElementById('num5').innerHTML = EOL누적 + ' (' + EOL당일 + ')';
}

async function dash_출하() {
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var today_begin = now.slice(0, 10) + 'T00:00:000Z';
	var today_end = now.slice(0, 10) + 'T24:00:000Z';

	count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('출하누적 count:', doc_count);
	var 출하누적 = doc_count;

	count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	console.log('출하당일 count:', doc_count);
	var 출하당일 = doc_count;
	
	document.getElementById('num8').innerHTML = 출하누적 + ' (' + 출하당일 + ')';
}
