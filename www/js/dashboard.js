var dashboard_chart;

async function 대시보드_시작() {
	flag_대시보드 = false;
	worker = sessionStorage.getItem('worker');
	if(worker == '') return;
	총합계_조회();
}

async function 총합계_조회() {
	count(BSA재제조, { 세척 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('세척 count:', doc_count);
	document.getElementById('num1').innerHTML = doc_count;

	count(BSA재제조, { 기초검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('기초검사 count:', doc_count);
	document.getElementById('num2').innerHTML = doc_count;

	count(BSA재제조, { 분해조립 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('분해조립 count:', doc_count);
	document.getElementById('num3').innerHTML = doc_count;

	count(BSA재제조, { 성능검사 : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('성능검사 count:', doc_count);
	document.getElementById('num4').innerHTML = doc_count;

	count(BSA재제조, { EOL : { $exists : true, $ne : 'none', $ne : ''}});
	await delay();
	console.log('EOL count:', doc_count);
	document.getElementById('num5').innerHTML = doc_count;

	count(BSA재제조, { 소재지 : '마도'});
	await delay();
	console.log('마도 count:', doc_count);
	document.getElementById('num6').innerHTML = doc_count;

	count(BSA재제조, { 소재지 : '구장'});
	await delay();
	console.log('구장 count:', doc_count);
	document.getElementById('num7').innerHTML = doc_count;

	count(BSA재제조, { 출하 : { $exists : true, $ne : 'none', $ne : ''}});
	await sleep(100);
	console.log('출하 count:', doc_count);
	document.getElementById('num8').innerHTML = doc_count;
}
