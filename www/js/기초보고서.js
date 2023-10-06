async function 기초보고서_시작() {
	while(_management_id == undefined) {
		await sleep(DELAY);
	}

	if(_management_id.value.trim() == '조회 버튼을 누르세요') _management_id.value =  관리번호;
	console.log('load: ', _management_id.value);
	if(_management_id.value.length == 0) return;

	count(기초검사, { 관리번호 : _management_id.value });
	await delay();

	if(doc_count > 0) {
		find(기초검사, _management_id.value);
		await delay();

		_VIN.value = find_array[0].VIN;
		_RO.value = find_array[0].RO_no;
		_주행거리.value = find_array[0].주행거리;
		_차량번호.value = find_array[0].차량번호;
		//생산일
		//판매일
		//수리일
		//입고사진
		_BSA_QR.value = find_array[0].QRCode;
		_관리번호.value = find_array[0].관리번호;
		//필드현상
		_센터진단.value = find_array[0].샌터진단내용;
		//센터조치
		_작성자.value = worker;
		_작성일.value = 
		_외부점검.value = find_array[0].육안검사_외부;
		_외부점검사유.value = find_array[0].육안검사_외부_특이사항;
		_내부점검.value = find_array[0].육안검사_내부;
		_내부점검사유.value = find_array[0].육안검사_내부_특이사항;
		//_셀제조사사유.value = find_array[0].
		//_냉각유로.value = find_array[0].기밀검사_냉각유로;
		_냉각유로감압량.value = find_array[0].기밀검사_냉각유로_특이사항;
		//_PRA_P.value = find_array[0].절연검사_Plus;
		_PRA_P값.value = find_array[0].절연검사_Plus;
		//_PRA_N.value = find_array[0].절연검사_Minus;
		_PRA_N값.value = find_array[0].절연검사_Minus;
		_HV커넥터_P.value = find_array[0].절연감사_HVPlus;
		_HV커넥터_N.value = find_array[0].절연감사_HVMinus;
		//_팩전압.value = find_array[0].통신검사_팩전압;
		_팩전압값.value = find_array[0].통신검사_팩전압;
		//_셀전압편차.value = find_array[0].통신검사_셀전압편차;
		_셀전압편차값.value = find_array[0].통신검사_셀전압편차;
		_릴레이제어.value = find_array[0].통신검사_릴레이구동;
		//릴레이제어사유.value = find_array[0].통신검사_릴레이구동;
		_고장코드.value = find_array[0].고장현상코드;
		_고장코드사유.value = find_array[0].고장코드현상명;
		//_입고정보.value =
		//_입고정보사유.value =
		//재제조이력
		//재제조이력사유
	}

	count(입고, { 관리번호 : _management_id.value });
	await delay();

	if(doc_count > 0) {
		find(입고, _management_id.value);
		await delay();

		_입고일.value = find_array[0].입고일;
	}

	count(세척, { 관리번호 : _management_id.value });
	await delay();

	if(doc_count > 0) {
		find(세척, _management_id.value);
		await delay();

		_케이스.value = find_array[0].기밀검사_케이스;
		_케이스감압량.value = find_array[0].기밀검사_케이스_특이사항;
	}

}

async function 기초보고서_save() {
	var _date = new Date();
	var file_name = '기초보고서' + _date + '.pdf';
	var body = document.getElementsByTagName('body')[0];
	if (window.innerWidth > 1920) { alert('해상도가 1920 x 1080일때만 사용이 가능합니다.');}

	html2canvas(document.getElementById('_기초보고서'), { width : 3000, height : 2000 }).then(canvas => {
			var data = canvas.toDataURL();
			var canvas = document.getElementById('_canvas');
			var ctx = canvas.getContext('2d');
			var img = new Image;
  			img.src = data;
  			img.onload = function() {
    				ctx.drawImage(img, 1920, 1080);
  			};

			canvas.width = 300;
			canvas.width = 200;

			var docDefinition = {
				content: [{
					image: data,
					width: 1920,
					height: 1080	
				}],
				pageSize: 'A4',
				pageOrientation: 'landscape'
			};
			pdfMake.createPdf(docDefinition).download(file_name);
	});
	console.log('file name:', file_name);
}
