async function BSA_수량_현황_시작() {
	flag_BSA_수량_현황 = false;
	if(worker == '') return;
	await sleep(200);
	BSA_수량_현황_조회();
}

async function BSA_수량_현황_조회() {
	await 작업대기();
	await 세척대기();
	await 기초검사대기();
	await 분해조립대기();
	await 성능검사대기();
	await EOL대기();
	await 출하대기();
}

async function 작업대기() {
	 count(BSA재제조, { 공정단계 : '입고' });
	 await delay();

	 document.getElementById('check_num1').innerHTML = doc_count;
}

async function 세척대기() {
	 count(BSA재제조, { 공정단계 : '세척' });
	 await delay();

	 document.getElementById('check_num2').innerHTML = doc_count;
}

async function 기초검사대기() {
	 count(BSA재제조, { 공정단계 : '기초검사' });
	 await delay();

	 document.getElementById('check_num3').innerHTML = doc_count;
}

async function 분해조립대기() {
	 count(BSA재제조, { 공정단계 : '분해조립' });
	 await delay();

	 document.getElementById('check_num4').innerHTML = doc_count;
}

async function 성능검사대기() {
	 count(BSA재제조, { 공정단계 : '성능검사' });
	 await delay();

	 document.getElementById('check_num5').innerHTML = doc_count;
}

async function EOL대기() {
	 count(BSA재제조, { 공정단계 : 'EOL' });
	 await delay();

	 document.getElementById('check_num6').innerHTML = doc_count;
}

async function 출하대기() {
	 count(BSA재제조, { 공정단계 : '제조완료' });
	 await delay();

	 document.getElementById('check_num7').innerHTML = doc_count;
}
