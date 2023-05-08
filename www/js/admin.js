var _id;
var _passwd; 
var _passwd2;
var _set_level;
var _csv;

function 관리자_시작() {
	flag_관리자 = false;
	_id = document.getElementById('_id');
	_passwd = document.getElementById('_passwd');
	_passwd2 = document.getElementById('_passwd2');
	_set_level = document.getElementById('_level');
	_csv = document.getElementById('_csv');
	func_csv();
}

async function add_user() {
	if(_id.value == '' || _passwd.value == '') return;
	if(_passwd.value != _passwd2.value) {
		alert('패스워드가 서로 다름니다.');
		return;
	}

	const hash = CryptoJS.MD5(_passwd.value); 	

	var doc = 계정_doc;
	doc.id = _id.value;
	doc.passwd = hash.toString();
	doc.level = _set_level.value;

	console.log('hash:', hash.toString());

	update_계정(계정, doc);
	await sleep(DELAY);

	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}
}

async function delete_user() {
	if(_id.value == '') return;

	delete_계정(_id.value);
	await sleep(DELAY);

	if(delete_count > 0) {
		alert('DELETE COMPLETE');
	}
}

function func_csv() {
	_csv.addEventListener('input', async function(event) {
		const target = event.target;
		const files = target.files;
		const file = files[0];

		const reader = new FileReader();
		reader.addEventListener('load', function() {
			const res = d3.csvParse(reader.result);
			console.log(res);

			res.forEach(async function(val) {
				if(val.관리번호 == undefined || val.관리번호.trim() == '') return;

				console.log(val);
				var doc = BSA재제조_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.차종 = val.차종.trim();
				doc.품번 = val.품번.trim(); 
				doc.RO_no = val.RO_no.trim(); 
				doc.공정단계 = '출하'; 
				doc.적재No = ''; 
				doc.입고 = val.기초검사_완료일.trim();
				doc.제조투입 = val.기초검사_완료일.trim();
				doc.세척 = val.기초검사_완료일.trim();
				doc.기초검사 = val.기초검사_완료일.trim();
				doc.분해조립 = val.분해조립_완료일.trim();
				doc.성능검사 = val.성능검사_완료일.trim();
				doc.EOL = val.EOL_완료일.trim();
				doc.출하 = val.출하일.trim();
				doc.소재지 = '';

				console.log('BSA재제조:', doc);
				update(BSA재제조, doc);
				await sleep(DELAY);

				doc = 입고_doc;
				doc.차종 = val.차종.trim();
				doc.품번 = val.품번.trim(); 
				doc.RO_no = val.RO_no.trim(); 

				console.log('입고:', doc);
				update(입고, doc);
				await sleep(DELAY);

				doc = 기초검사_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.육안검사_외부 = val.외부.trim();
				doc.육안검사_내부 = val.내부.trim();
				doc.기밀검사_케이스 = val.케이스.trim();
				doc.기밀검사_냉각유로 = val.냉각유로.trim();
				doc.절연검사_Plus = val.plus.trim();
				doc.절연검사_Minus = val.minus.trim();
				doc.토크검사_UPR_C = val.UPR_C.trim();
				doc.토크검사_버스바 = val.버스바.trim(); 
				doc.통신검사_DTC코드 = val.DTC코드.trim();
				doc.통신검사_팩전압 = val.팩전압.trim();
				doc.통신검사_셀전압편차 = val.셀전압편차.trim();
				doc.통신검사_릴레이구동 = val.릴레이구동.trim(); 
				doc.완료일 = val.기초검사_완료일.trim(); 
				doc.검사자 = val.기초검사_검사자.trim();

				console.log('기초검사:', doc);
				update(기초검사, doc);
				await sleep(DELAY);

				doc = 성능검사_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.UPR_C조립 = val.UPR_C조립.trim();
				doc.기밀검사_케이스 = val.성능검사_케이스.trim();
				doc.기밀검사_냉각유로 = val.성능검사_냉각유로.trim();
				doc.절연검사_Plus = val.성능검사_plus.trim();
				doc.절연검사_Minus = val.성능검사_minus.trim();
				doc.토크검사_UPR_C = val.UPR_C조립.trim();
				doc.토크검사_버스바 = 'none';
				doc.통신검사_DTC코드 = val.성능검사_DTC코드.trim();
				doc.통신검사_팩전압 = val.성능검사_팩전압.trim();
				doc.통신검사_셀전압편차 = val.성능검사_셀전압편차.trim();
				doc.통신검사_릴레이구동 = val.성능검사_릴레이구동.trim();
				doc.완료일 = val.성능검사_완료일.trim();
				doc.검사자 = val.성능검사_검사자.trim();

				console.log('성능검사:', doc);
				update(성능검사, doc);
				await sleep(DELAY);

				doc = EOL_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.용량평가 = val.용량평가.trim();
				doc.SOC60Percent = val.SOC60.trim();
				doc.DCIR = val.DCIR.trim();
				doc.완료일 = val.EOL_완료일.trim();
				doc.검사자 = val.EOL_검사자.trim();

				console.log('EOL:', doc);
				update(EOL, doc);
				await sleep(DELAY);


				doc = 출하정보_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.출하일 = val.출하일.trim();
				doc.출하코드 = val.출하코드.trim();
				doc.납품처 = val.납품처.trim();

				console.log('출하코드:', doc);
				update(출하정보, doc);
				await sleep(DELAY);

				doc = 분해조립_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.UPR_C = val.분해조립_UPR_C.trim();
				doc.PBE = val.PBE.trim();
				doc.Gasket = val.Gasket.trim();
				doc.Busbars = val.Busbars.trim();
				doc.W_H = val.W_H.trim();
				doc.SPA = val.SPA.trim();
				doc.PRA = val.PRA.trim();
				doc.FuseBox = val.FuseBox.trim();
				doc.Relay = val.Relay.trim();
				doc.CMU = val.CMU.trim();
				doc.BMU = val.BMU.trim();
				doc.BMA = val.BMA.trim();
				doc.LWR_C = val.LWR_C.trim();
				doc.ETC = val.기타.trim();
				doc.완료일 = val.분해조립_완료일.trim();
				doc.작업자 = val.분해조립_작업자.trim();

				console.log('분해조립:', doc);
				update(분해조립, doc);
				await sleep(DELAY);

				doc = 특이사항_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.특이사항 = val.특이사항.trim();

				console.log('특이사항:', doc);
				update(특이사항, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_1.trim();
				doc.교체전_품번 = val.교체전_품번_1.trim();
				doc.교체전_QR = val.교체전_QR_1.trim();
				doc.교체후_신품_고품 = val.신품고품_1.trim();
				doc.교체후_고품식별 = val.고품식별_1.trim();
				doc.교체후_품번 = val.품번_1.trim(),
					doc.교체후_QR = val.QR_1.trim();
				doc.교체사유 = val.교체사유_1.trim();

				console.log('교체부품상세1:', doc);
				update(교체부품상세1, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_2.trim();
				doc.교체전_품번 = val.교체전_품번_2.trim();
				doc.교체전_QR = val.교체전_QR_2.trim();
				doc.교체후_신품_고품 = val.신품고품_2.trim();
				doc.교체후_고품식별 = val.고품식별_2.trim();
				doc.교체후_품번 = val.품번_2.trim();
				doc.교체후_QR = val.QR_2.trim();
				doc.교체사유 = val.교체사유_2.trim();

				console.log('교체부품상세2:', doc);
				update(교체부품상세2, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_3.trim();
				doc.교체전_품번 = val.교체전_품번_3.trim();
				doc.교체전_QR = val.교체전_QR_3.trim();
				doc.교체후_신품_고품 = val.신품고품_3.trim();
				doc.교체후_고품식별 = val.고품식별_3.trim();
				doc.교체후_품번 = val.품번_3.trim(),
					doc.교체후_QR = val.QR_3.trim();
				doc.교체사유 = val.교체사유_3.trim();

				console.log('교체부품상세3:', doc);
				update(교체부품상세3, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_4.trim();
				doc.교체전_품번 = val.교체전_품번_4.trim();
				doc.교체전_QR = val.교체전_QR_4.trim();
				doc.교체후_신품_고품 = val.신품고품_4.trim();
				doc.교체후_고품식별 = val.고품식별_4.trim();
				doc.교체후_품번 = val.품번_4.trim(),
					doc.교체후_QR = val.QR_4.trim();
				doc.교체사유 = val.교체사유_4.trim();

				console.log('교체부품상세4:', doc);
				update(교체부품상세4, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_5.trim();
				doc.교체전_품번 = val.교체전_품번_5.trim();
				doc.교체전_QR = val.교체전_QR_5.trim();
				doc.교체후_신품_고품 = val.신품고품_5.trim();
				doc.교체후_고품식별 = val.고품식별_5.trim();
				doc.교체후_품번 = val.품번_5.trim(),
					doc.교체후_QR = val.QR_5.trim();
				doc.교체사유 = val.교체사유_5.trim();

				console.log('교체부품상세5:', doc);
				update(교체부품상세5, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_6.trim();
				doc.교체전_품번 = val.교체전_품번_6.trim();
				doc.교체전_QR = val.교체전_QR_6.trim();
				doc.교체후_신품_고품 = val.신품고품_6.trim();
				doc.교체후_고품식별 = val.고품식별_6.trim();
				doc.교체후_품번 = val.품번_6.trim(),
					doc.교체후_QR = val.QR_6.trim();
				doc.교체사유 = val.교체사유_6.trim();

				console.log('교체부품상세6:', doc);
				update(교체부품상세6, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_7.trim();
				doc.교체전_품번 = val.교체전_품번_7.trim();
				doc.교체전_QR = val.교체전_QR_7.trim();
				doc.교체후_신품_고품 = val.신품고품_7.trim();
				doc.교체후_고품식별 = val.고품식별_7.trim();
				doc.교체후_품번 = val.품번_7.trim(),
					doc.교체후_QR = val.QR_7.trim();
				doc.교체사유 = val.교체사유_7.trim();

				console.log('교체부품상세7:', doc);
				update(교체부품상세7, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_8.trim();
				doc.교체전_품번 = val.교체전_품번_8.trim();
				doc.교체전_QR = val.교체전_QR_8.trim();
				doc.교체후_신품_고품 = val.신품고품_8.trim();
				doc.교체후_고품식별 = val.고품식별_8.trim();
				doc.교체후_품번 = val.품번_8.trim(),
					doc.교체후_QR = val.QR_8.trim();
				doc.교체사유 = val.교체사유_8.trim();

				console.log('교체부품상세8:', doc);
				update(교체부품상세8, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_9.trim();
				doc.교체전_품번 = val.교체전_품번_9.trim();
				doc.교체전_QR = val.교체전_QR_9.trim();
				doc.교체후_신품_고품 = val.신품고품_9.trim();
				doc.교체후_고품식별 = val.고품식별_9.trim();
				doc.교체후_품번 = val.품번_9.trim(),
					doc.교체후_QR = val.QR_9.trim();
				doc.교체사유 = val.교체사유_9.trim();

				console.log('교체부품상세9:', doc);
				update(교체부품상세9, doc);
				await sleep(DELAY);

				doc = 교체부품상세_doc;
				doc.관리번호 = val.관리번호.trim();
				doc.교체전_품명 = val.교체전_품명_10.trim();
				doc.교체전_품번 = val.교체전_품번_10.trim();
				doc.교체전_QR = val.교체전_QR_10.trim();
				doc.교체후_신품_고품 = val.신품고품_10.trim();
				doc.교체후_고품식별 = val.고품식별_10.trim();
				doc.교체후_품번 = val.품번_10.trim();
				doc.교체후_QR = val.QR_10.trim();
				doc.교체사유 = val.교체사유_10.trim();

				console.log('교체부품상세10:', doc);
				update(교체부품상세10, doc);
				await sleep(DELAY);
			});
			alert('완료');
		});
		reader.readAsText(file);
	});
}
