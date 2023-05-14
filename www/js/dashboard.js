var dashboard_chart;

async function 대시보드_시작() {
	flag_대시보드 = false;
	if(worker == '') return;
	await sleep(200);
	총합계_조회();
}

async function 총합계_조회() {
	var now = new Date();
	var today_begin = now.toISOString().slice(0, 10) + 'T00:00:000Z';
	var today_end = now.toISOString().slice(0, 10) + 'T24:00:000Z';
	count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	await sleep(100);
	console.log('세척 count:', doc_count);
	var 세척누적 = doc_count;

	count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	await sleep(100);
	console.log('세척 당일 count:', doc_count);
	var 세척당일 = doc_count;

	//document.getElementById('num1').innerHTML = '512(2)';
	document.getElementById('num1').innerHTML = 세척누적 + ' (' + 세척당일 + ')';

	count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	await sleep(100);
	console.log('기초검사누적 count:', doc_count);
	var 기초검사누적 = doc_count;

	count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	await sleep(100);
	console.log('기초검사당일  count:', doc_count);
	var 기초검사당일 = doc_count;

	//document.getElementById('num2').innerHTML = '512(2)';
	document.getElementById('num1').innerHTML = (기초검사누적 + 1) + ' (' + 기초검사당일 + ')';
	document.getElementById('num2').innerHTML = 기초검사누적 + ' (' + 기초검사당일 + ')';

	count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	await sleep(100);
	console.log('분해조립누적 count:', doc_count);
	var 분해조립누적 = doc_count;

	count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	await sleep(100);
	console.log('분해조립당일 count:', doc_count);
	var 분해조립당일 = doc_count;

	//document.getElementById('num3').innerHTML = '527(1)';
	document.getElementById('num3').innerHTML = 분해조립누적 + ' (' + 분해조립당일 + ')';

	count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	await sleep(100);
	console.log('성능검사누적 count:', doc_count);
	var 성능검사누적 = doc_count;
	
	count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	await sleep(100);
	console.log('성능검사 당일  count:', doc_count);
	var 성능검사당일 = doc_count;

	//document.getElementById('num4').innerHTML = '511(1)';
	document.getElementById('num4').innerHTML = 성능검사누적 + ' ('+ 성능검사당일 + ')';

	count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	await sleep(100);
	console.log('EOL 누적 count:', doc_count);
	var EOL누적 = doc_count;

	count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	await sleep(100);
	console.log('EOL 당일  count:', doc_count);
	var EOL당일 = doc_count;
	
	//document.getElementById('num5').innerHTML = '511(1)';
	document.getElementById('num5').innerHTML = EOL누적 + ' (' + EOL당일 + ')';

	count(BSA재제조, { 소재지 : '마도'});
	await delay();
	await sleep(100);
	console.log('마도 count:', doc_count);
	var 마도누적 = doc_count;

	count(BSA재제조, { 소재지 : '마도' , EOL : { $gte : today_begin, $lt : today_end }});
	await delay();
	await sleep(100);
	console.log('마도 당일  count:', doc_count);
	var 마도당일 = doc_count;
	
	//document.getElementById('num6').innerHTML = '25(1)';
	document.getElementById('num6').innerHTML = 마도누적 + ' (' + 마도당일 + ')';

	count(BSA재제조, { 소재지 : '구장'});
	await delay();
	await sleep(100);
	console.log('구장 count:', doc_count);
	var 구장누적 = doc_count;

	count(BSA재제조, { 소재지 : '구장' , EOL : { $gte : today_begin, $lt : today_end}});
	await delay();
	await sleep(100);
	console.log('구장 당일  count:', doc_count);
	var 구장당일 = doc_count;
	
	//document.getElementById('num7').innerHTML = '57(0)';
	document.getElementById('num7').innerHTML = 구장누적 + ' (' + 구장당일 + ')';

	count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : ''}});
	await sleep(100);
	await sleep(100);
	console.log('출하누적 count:', doc_count);
	var 출하누적 = doc_count;

	count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : '', $gte : today_begin, $lt : today_end }});
	await delay();
	await sleep(100);
	console.log('출하당일 count:', doc_count);
	var 출하당일 = doc_count;
	
	//document.getElementById('num8').innerHTML = '428(0)';
	document.getElementById('num8').innerHTML = 출하누적 + ' (' + 출하당일 + ')';

	count(BSA재제조, { 소재지 : '폐기'});
	await delay();
	await sleep(100);
	console.log('폐기 count:', doc_count);
	var 폐기누적 = doc_count;

	count(BSA재제조, { 소재지 : '폐기' , 분해조립 : { $gte : today_begin , $lt : today_end}});
	await delay();
	await sleep(100);
	console.log('폐기 당일  count:', doc_count);
	var 폐기당일 = doc_count;
	
	//document.getElementById('num9').innerHTML = '16(0)';
	document.getElementById('num9').innerHTML = 폐기누적 + ' (' + 폐기당일 + ')';
}
