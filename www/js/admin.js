var _id;
var _passwd; 
var _passwd2;
var _set_level;
var _csv;
var _신품정보_csv;

function 관리자_시작() {
	flag_관리자 = false;
	_id = document.getElementById('_id');
	_passwd = document.getElementById('_passwd');
	_passwd2 = document.getElementById('_passwd2');
	_set_level = document.getElementById('_level');
	_csv = document.getElementById('_csv');
	_신품정보_csv = document.getElementById('_신품정보_csv');
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
	await delay();

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
	await delay();

	if(delete_count > 0) {
		alert('DELETE COMPLETE');
	}
}

function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

var check_count = 0;
var total_insert_count = 0;
var total_update_count = 0;
var fail_count = 0;

function func_csv() {
	_csv.addEventListener('input', async function(event) {
		const target = event.target;
		const files = target.files;
		const file = files[0];

		const reader = new FileReader();
		reader.addEventListener('load', async function() {
			const res = d3.csvParse(reader.result);
			console.log(res);
			for(var i = 0; i < res.length; i++) {
				insert(res[i]);
				await sleep(1000);
			};
			console.log('insert count :', total_insert_count);
			console.log('update count :', total_update_count);
			console.log('fail count :', fail_count);
		});
		reader.readAsText(file);
	});
}

async function insert(val) {
	if(val.관리번호 == undefined || val.관리번호 == '') {
		console.log('관리번호 없음');
		return;
	}

	//console.log(val);
	var doc = BSA재제조_doc;
	doc.재제조번호 = val.재제조번호;
	doc.관리번호 = val.관리번호;
	doc.차종 = val.차종;
	doc.품번 = val.품번; 
	doc.RO_no = val.RO_no; 
	doc.공정단계 = '출하'; 
	doc.적재No = ''; 
	if(val.등록일 != '') {
		doc.입고 = val.등록일 + 'T12:00:00';
	}

	if(val.기초검사_완료일 != '') {
		doc.기초검사 = val.기초검사_완료일 + 'T12:00:00';
	}

	if(val.분해조립_완료일 != '' ) {
		doc.분해조립 = val.분해조립_완료일 + 'T12:00:00';
	}

	if(val.성능검사_완료일 != '') {
		doc.성능검사 = val.성능검사_완료일 + 'T12:00:00';
	}

	if(val.EOL_완료일 != '') {
		doc.EOL = val.EOL_완료일 + 'T12:00:00';
	}

	if(val.출하일 != '') {
		doc.출하 = val.출하일 + 'T12:00:00';
	}

	doc.소재지 = '';

	//console.log('BSA재제조:', doc);
	update(BSA재제조, doc);
	await delay();
	total_insert_count += insert_count;
	total_update_count += update_count;

	console.log('insert count :', insert_count);
	console.log('update count :', update_count);
	if(insert_count == 0 && update_count == 0) fail_count++;

	doc = 입고_doc;
	doc.관리번호 = val.관리번호;
	doc.차종 = val.차종;
	doc.품번 = val.품번; 
	doc.RO_no = val.RO_no; 

	//console.log('입고:', doc);
	update(입고, doc);
	await delay();

	doc = 기초검사_doc;
	doc.관리번호 = val.관리번호;
	doc.육안검사_외부 = val.외부;
	doc.육안검사_내부 = val.내부;
	doc.기밀검사_케이스 = val.케이스;
	doc.기밀검사_냉각유로 = val.냉각유로;
	doc.절연검사_Plus = val.plus;
	doc.절연검사_Minus = val.minus;
	doc.토크검사_UPR_C = val.UPR_C;
	doc.토크검사_버스바 = val.버스바; 
	doc.통신검사_DTC코드 = val.DTC코드;
	doc.통신검사_팩전압 = val.팩전압;
	doc.통신검사_셀전압편차 = val.셀전압편차;
	doc.통신검사_릴레이구동 = val.릴레이구동; 
	if(val.기초검사_완료일 = '') {
		doc.공정완료일 = val.기초검사_완료일 + 'T12:00:00'; 
	}
	doc.검사자 = val.기초검사_검사자;

	//console.log('기초검사:', doc);
	update(기초검사, doc);
	await delay();

	doc = 성능검사_doc;
	doc.관리번호 = val.관리번호;
	doc.용량평가 = val.용량평가;
	doc.SOC60Percent = val.SOC60;
	doc.DCIR = val.DCIR;
	if(val.성능검사_완료일 != '') {
		doc.공정완료일 = val._완료일 + 'T12:00:00';
	}

	//console.log('성능검사:', doc);
	update(성능검사, doc);
	await delay();

	doc = EOL_doc;
	doc.검사자 = val.EOL_검사자;
	doc.관리번호 = val.관리번호;
	doc.UPR_C조립 = val.UPR_C조립;
	doc.기밀검사_케이스 = val.EOL_케이스;
	doc.기밀검사_냉각유로 = val.EOL_냉각유로;
	doc.절연검사_Plus = val.EOL_plus;
	doc.절연검사_Minus = val.EOL_minus;
	doc.토크검사_UPR_C = val.UPR_C조립;
	doc.토크검사_버스바 = 'none';
	doc.통신검사_DTC코드 = val.EOL_DTC코드;
	doc.통신검사_팩전압 = val.EOL_팩전압;
	doc.통신검사_셀전압편차 = val.EOL_셀전압편차;
	doc.통신검사_릴레이구동 = val.EOL_릴레이구동;
	if(val.EOL_완료일 = '') {
		doc.공정완료일 = val.EOL_완료일 + 'T12:00:00';
	}
	doc.검사자 = val.EOL_검사자;

	//console.log('EOL:', doc);
	update(EOL, doc);
	await delay();

	doc = 출하정보_doc;
	doc.관리번호 = val.관리번호;
	if(val.출하일 != '') {
		doc.출하일 = val.출하일 + 'T12:00:00';
	}
	doc.출하코드 = val.출하코드;
	doc.납품처 = val.납품처;

	//console.log('출하정보:', doc);
	update(출하정보, doc);
	await delay();

	doc = 분해조립_doc;
	doc.관리번호 = val.관리번호;
	doc.BMU1 = val.BMU;
	doc.CMU1 = val.CMU;
	doc.PRA1 = val.PRA;
	doc.SPA1 = val.SPA;
	doc.LWR_C1 = val.LWR_C;
	doc.UPR_C1 = val.분해조립_UPR_C;
	doc.FuseBox1 = val.FuseBox;
	doc.HV_W_H1 = val.W_H;
	doc.PBE = val.PBE;
	doc.Gasket = val.Gasket;
	doc.Relay1 = val.Relay;
	doc.Busbars = val.Busbars;
	doc.BMA1 = val.BMA;
	doc.ETC = val.기타;
	if(val.분해조립_완료일 != '') {
		doc.완료일 = val.분해조립_완료일 + 'T12:00:00';
	}
	doc.작업자 = val.분해조립_작업자;

	//console.log('분해조립:', doc);
	update(분해조립, doc);
	await delay();

	doc = 특이사항_doc;
	doc.관리번호 = val.관리번호;
	doc.특이사항 = val.특이사항;

	//console.log('특이사항:', doc);
	update(특이사항, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_1;
	doc.교체전_품번 = val.교체전_품번_1;
	doc.교체전_QR = val.교체전_QR_1;
	doc.교체후_신품_고품 = val.신품고품_1;
	doc.교체후_고품식별 = val.고품식별_1;
	doc.교체후_품번 = val.품번_1;
	doc.교체후_QR = val.QR_1;
	doc.교체사유 = val.교체사유_1;

	//console.log('교체부품상세1:', doc);
	update(교체부품상세1, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_2;
	doc.교체전_품번 = val.교체전_품번_2;
	doc.교체전_QR = val.교체전_QR_2;
	doc.교체후_신품_고품 = val.신품고품_2;
	doc.교체후_고품식별 = val.고품식별_2;
	doc.교체후_품번 = val.품번_2;
	doc.교체후_QR = val.QR_2;
	doc.교체사유 = val.교체사유_2;

	//console.log('교체부품상세2:', doc);
	update(교체부품상세2, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_3;
	doc.교체전_품번 = val.교체전_품번_3;
	doc.교체전_QR = val.교체전_QR_3;
	doc.교체후_신품_고품 = val.신품고품_3;
	doc.교체후_고품식별 = val.고품식별_3;
	doc.교체후_품번 = val.품번_3;
	doc.교체후_QR = val.QR_3;
	doc.교체사유 = val.교체사유_3;

	//console.log('교체부품상세3:', doc);
	update(교체부품상세3, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_4;
	doc.교체전_품번 = val.교체전_품번_4;
	doc.교체전_QR = val.교체전_QR_4;
	doc.교체후_신품_고품 = val.신품고품_4;
	doc.교체후_고품식별 = val.고품식별_4;
	doc.교체후_품번 = val.품번_4;
	doc.교체후_QR = val.QR_4;
	doc.교체사유 = val.교체사유_4;

	//console.log('교체부품상세4:', doc);
	update(교체부품상세4, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_5;
	doc.교체전_품번 = val.교체전_품번_5;
	doc.교체전_QR = val.교체전_QR_5;
	doc.교체후_신품_고품 = val.신품고품_5;
	doc.교체후_고품식별 = val.고품식별_5;
	doc.교체후_품번 = val.품번_5;
	doc.교체후_QR = val.QR_5;
	doc.교체사유 = val.교체사유_5;

	//console.log('교체부품상세5:', doc);
	update(교체부품상세5, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_6;
	doc.교체전_품번 = val.교체전_품번_6;
	doc.교체전_QR = val.교체전_QR_6;
	doc.교체후_신품_고품 = val.신품고품_6;
	doc.교체후_고품식별 = val.고품식별_6;
	doc.교체후_품번 = val.품번_6;
	doc.교체후_QR = val.QR_6;
	doc.교체사유 = val.교체사유_6;

	//console.log('교체부품상세6:', doc);
	update(교체부품상세6, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_7;
	doc.교체전_품번 = val.교체전_품번_7;
	doc.교체전_QR = val.교체전_QR_7;
	doc.교체후_신품_고품 = val.신품고품_7;
	doc.교체후_고품식별 = val.고품식별_7;
	doc.교체후_품번 = val.품번_7;
	doc.교체후_QR = val.QR_7;
	doc.교체사유 = val.교체사유_7;

	//console.log('교체부품상세7:', doc);
	update(교체부품상세7, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_8;
	doc.교체전_품번 = val.교체전_품번_8;
	doc.교체전_QR = val.교체전_QR_8;
	doc.교체후_신품_고품 = val.신품고품_8;
	doc.교체후_고품식별 = val.고품식별_8;
	doc.교체후_품번 = val.품번_8;
	doc.교체후_QR = val.QR_8;
	doc.교체사유 = val.교체사유_8;

	//console.log('교체부품상세8:', doc);
	update(교체부품상세8, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_9;
	doc.교체전_품번 = val.교체전_품번_9;
	doc.교체전_QR = val.교체전_QR_9;
	doc.교체후_신품_고품 = val.신품고품_9;
	doc.교체후_고품식별 = val.고품식별_9;
	doc.교체후_품번 = val.품번_9;
	doc.교체후_QR = val.QR_9;
	doc.교체사유 = val.교체사유_9;

	//console.log('교체부품상세9:', doc);
	update(교체부품상세9, doc);
	await delay();

	doc = 교체부품상세_doc;
	doc.관리번호 = val.관리번호;
	doc.교체전_품명 = val.교체전_품명_10;
	doc.교체전_품번 = val.교체전_품번_10;
	doc.교체전_QR = val.교체전_QR_10;
	doc.교체후_신품_고품 = val.신품고품_10;
	doc.교체후_고품식별 = val.고품식별_10;
	doc.교체후_품번 = val.품번_10;
	doc.교체후_QR = val.QR_10;
	doc.교체사유 = val.교체사유_10;

	//console.log('교체부품상세10:', doc);
	update(교체부품상세10, doc);
	await delay();
	check_count++;
	console.log(check_count);
}
