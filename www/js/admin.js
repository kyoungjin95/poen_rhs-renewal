var _id;
var _passwd;
var _passwd2;
var _set_level;
var _csv;

async function 관리자_시작() {
	flag_관리자 = false;
	_id = document.getElementById('_id');
	_passwd = document.getElementById('_passwd');
	_passwd2 = document.getElementById('_passwd2');
	_level = document.getElementById('_level');
	_이름 = document.getElementById('_이름');
	_기본정보 = document.getElementById('_기본정보');
	_입고 = document.getElementById('_입고');
	_세척 = document.getElementById('_세척');
	_기초검사 = document.getElementById('_기초검사');
	_분해조립 = document.getElementById('_분해조립');
	_성능검사 = document.getElementById('_성능검사');
	_EOL = document.getElementById('_EOL');
	_출하검사 = document.getElementById('_출하검사');
	_부품재고 = document.getElementById('_부품재고');
	_완료일수정 = document.getElementById('_완료일수정');
	_관리번호 = document.getElementById('_관리번호');
	_품번_csv = document.getElementById('_품번_csv');

	find_계정(계정, { id: { $exists: true } })
	await delay();

	var table;
	if (계정_v != null) {
		table = new Tabulator("#grid_user_info", {
			layout: "resizableColumnFit",
			data: 계정_v,
			height: '700px',

			columns: [
				{ title: "ID", field: "id", sorter: "string", width: '180' },
				{ title: "LEVEL", field: "level", sorter: "string", width: '180' },
				{ title: "이름", field: "이름", sorter: "string", width: '180' },
				{ title: "기본정보", field: "기본정보", sorter: "string", width: '180' },
				{ title: "입고", field: "입고", sorter: "string", width: '180' },
				{ title: "세척", field: "세척", sorter: "string", width: '180' },
				{ title: "기초검사", field: "기초검사", sorter: "string", width: '180' },
				{ title: "분해조립", field: "분해조립", sorter: "string", width: '180' },
				{ title: "성능검사", field: "성능검사", sorter: "string", width: '180' },
				{ title: "EOL", field: "EOL", sorter: "string", width: '180' },
				{ title: "출하검사", field: "출하검사", sorter: "string", width: '180' },
				{ title: "부품재고", field: "부품재고", sorter: "string", width: '180' },
				{ title: "완료일수정", field: "완료일수정", sorter: "string", width: '180' },
				{ title: "관리번호", field: "관리번호", sorter: "string", width: '180' },
			],
		});
	}

	table.on("rowClick", async function (e, row) {
		console.log("selected 관리번호: ", row.getData().id);
		if (row.getData().id != '') {
			_id.value = row.getData().id;
			_level.value = row.getData().level;
			_이름.value = row.getData().이름;
			_기본정보.value = row.getData().기본정보;
			_입고.value = row.getData().입고;
			_세척.value = row.getData().세척;
			_기초검사.value = row.getData().기초검사;
			_분해조립.value = row.getData().분해조립;
			_성능검사.value = row.getData().성능검사;
			_EOL.value = row.getData().EOL;
			_출하검사.value = row.getData().출하검사;
			_부품재고.value = row.getData().부품재고;
			_완료일수정.value = row.getData().완료일수정;
			_관리번호.value = row.getData().관리번호;
		}
	});
}

async function add_user() {
	_passwd = document.getElementById('_passwd');
	_passwd2 = document.getElementById('_passwd2');
	if (_id.value == '' || _passwd.value == '') return;
	if (_passwd.value != _passwd2.value) {
		alert('패스워드가 서로 다름니다.');
		return;
	}

	const hash = CryptoJS.MD5(_passwd.value.trim());

	var hash_str = hash.toString();
	var doc = JSON.parse(JSON.stringify(계정_doc));
	doc.id = _id.value.trim();
	doc.passwd = hash_str;
	doc.level = _level.value;
	doc.이름 = _이름.value;
	doc.기본정보 = _기본정보.value;
	doc.입고 = _입고.value;
	doc.세척 = _세척.value;
	doc.기초검사 = _기초검사.value;
	doc.분해조립 = _분해조립.value;
	doc.성능검사 = _성능검사.value;
	doc.EOL = _EOL.value;
	doc.출하검사 = _출하검사.value;
	doc.부품재고 = _부품재고.value;
	doc.완료일수정 = _완료일수정.value;
	doc.관리번호 = _관리번호.value;

	update_계정(계정, doc);
	await delay();

	console.log(update_count);
	console.log(insert_count);

	if (update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if (insert_count > 0) {
		alert('저장 되었습니다');
	}

	관리자_시작();
}

async function delete_user() {
	if (_id.value == '') return;

	delete_계정(_id.value);
	await delay();

	if (delete_count > 0) {
		alert('DELETE COMPLETE');
	}

	관리자_시작();
}

function getType(target) {
	return Object.prototype.toString.call(target).slice(8, -1);
}

var check_count = 0;
var total_insert_count = 0;
var total_update_count = 0;
var fail_count = 0;

async function test() {
	find_BSA재제조(BSA재제조, { 관리번호: { $exists: true }, 공정단계: { $eq: '제조완료' }, 출하: { $ne : ''} });
	await delay();

	BSA재제조_v.forEach(async function(v) {
		var doc = {
			관리번호 : v.관리번호,
			공정단계 : '출하'
		}

		update(BSA재제조, doc);
		await delay();
	});
}

async function doo() {
	find_BSA재제조(BSA재제조, { 관리번호: { $exists: true }, 공정단계: { $ne: '출하' } });
	await delay();

	BSA재제조_v.forEach(async function (item) {
		var _공정단계 = '입고';
		if (item.입고 != '') _공정단계 = '세척';
		E
		if (item.세척 != '') _공정단계 = '기초검사';
		if (item.기초검사 != '') _공정단계 = '분해조립';
		if (item.분해조립 != '') _공정단계 = '성능검사';
		if (item.성능검사 != '') _공정단계 = 'EOL';
		if (item.EOL != '') _공정단계 = '제조완료';
		if (item.출하검사 != '') _공정단계 = '제조완료';
		if (item.출하 != '') _공정단계 = '출하';

		var doc = {
			관리번호: item.관리번호,
			공정단계: _공정단계
		}

		update(BSA재제조, doc);
		await delay();
	});

	console.log('complete');
}

async function doo() {
	var doc = {
		관리번호 : '#S240126-MD001',
		기초검사투입일 : '',
		기초검사 : ''
	}

	update(BSA재제조, doc);
	await delay();

	console.log('complete');
}

async function 대기공정처리_완전분해() {
	find_BSA재제조(BSA재제조, { 완전분해: { $nin: ['', 'undefined'] } });
	await delay();

	BSA재제조_v.forEach(async function (bsa_info) {
		doc = {
			관리번호: bsa_info.관리번호,
			공정단계: '완전분해'
		}

		update(BSA재제조, doc);
		await delay();
	});

	console.log('complete 완전분해');
}

async function 대기공정처리_폐기() {
	find_BSA재제조(BSA재제조, { 폐기: { $nin : ['', 'undefined'] } });
	await delay();

	BSA재제조_v.forEach(async function (bsa_info) {
		doc = {
			관리번호: bsa_info.관리번호,
			공정단계: '폐기'
		}

		update(BSA재제조, doc);
		await delay();
	});

	console.log('complete 폐기');
}

async function doo_2() {
	find_BSA재제조(BSA재제조, { EOL: { $ne: '' }, 출하검사: { $eq: '' } });
	await delay();

	var test_BSA = BSA재제조_v;
	var table = new Tabulator("#grid_bsa", {
		layout: "resizableColumnFit",
		data: test_BSA,
		height: '700px',

		columns: [
			{ title: "ID", field: "_id", sorter: "string", width: '180' },
			{ title: "관리번호", field: "관리번호", sorter: "string", width: '180' },
			{ title: "재제조번호", field: "재제조번호", sorter: "string", width: '180' },
			{ title: "구분", field: "구분", sorter: "string", width: '180' },
			{ title: "차종", field: "차종", sorter: "string", width: '180' },
			{ title: "품번", field: "품번", sorter: "string", width: '180' },
			{ title: "RO_no", field: "RO_no", sorter: "string", width: '180' },
			{ title: "공정단계", field: "공정단계", sorter: "string", width: '180' },
			{ title: "소재지", field: "소재지", sorter: "string", width: '180' },
			{ title: "적재No", field: "적재No", sorter: "string", visible: true, width: '180' }, //
			{ title: "입고", field: "입고", sorter: "string", visible: true, width: '180' },//
			{ title: "제조투입", field: "제조투입", sorter: "string", visible: true, width: '180' },//
			{ title: "세척투입일", field: "세척투입일", sorter: "string", width: '180' },
			{ title: "세척", field: "세척", sorter: "string", visible: true, width: '180' },//
			{ title: "기초검사투입일", field: "기초검사투입일", sorter: "string", width: '180' },
			{ title: "기초검사", field: "기초검사", sorter: "string", visible: true, width: '180' },//
			{ title: "분해조립투입일", field: "분해조립투입일", sorter: "string", width: '180' },
			{ title: "분해조립", field: "분해조립", sorter: "string", visible: true, width: '180' },//
			{ title: "성능검사투입일", field: "성능검사투입일", sorter: "string", width: '180' },
			{ title: "성능검사", field: "성능검사", sorter: "string", visible: true, width: '180' },//
			{ title: "EOL투입일", field: "EOL투입일", sorter: "string", width: '180' },
			{ title: "EOL", field: "EOL", sorter: "string", visible: true, width: '180' },//
			{ title: "출하검사", field: "출하검사", sorter: "string", width: '180' },
			{ title: "납품처", field: "납품처", sorter: "string", width: '180' },
			{ title: "출하", field: "출하", sorter: "string", width: '180' },
			{ title: "반품입고", field: "반품입고", sorter: "string", width: '180' },
			{ title: "재출하", field: "재출하", sorter: "string", width: '180' },
			{ title: "완전분해", field: "완전분해", sorter: "string", width: '180' },
			{ title: "폐기", field: "폐기", sorter: "string", width: '180' },
			{ title: "마지막충전일", field: "마지막충전일", sorter: "string", width: '180' },
			{ title: "출하예약", field: "출하예약", sorter: "string", width: '180' },
			{ title: "렉번호", field: "렉번호", sorter: "string", width: '180' },
		],
	});

	await sleep(1);
	var sheets = {
		'EOLvs출하검사': true,
	};
	table.download("xlsx", "EOLvs출하검사_bsa.xlsx", { sheets: sheets });
}

var flag_품번_excel = false;
function read_품번_func_csv() {
	var _품번_csv = document.getElementById('_csv');
	_품번_csv.addEventListener('input', function (event) {
		if(flag_품번_excel == true) return;
		flag_품번_excel = true;
		console.log('file finded');
		const target = event.target;
		const files = target.files;
		const file = files[0];

		const reader = new FileReader();
		reader.addEventListener('load', async function () {
			const res = d3.csvParse(reader.result);
			var docs = [];

			drop(품번);
			await delay();

			for (var i = 0; i < res.length; i++) {
				if (res[i].차종 != '') docs.push(res[i]);
				if ((i > 0 && (i % 2000) == 0) || i == (res.length - 1)) {
					insertMany(품번, docs);
					await delay();

					console.log('processing:', i, docs.length);

					docs = [];

					await sleep(1);
				}
			};
			console.log('complete:', res.length);
			alert('업로드가 완료되었습니다. 새로고침후 다시 로그인하세요');
		});
		console.log(file);
		reader.readAsText(file);
	});
}

async function eolpic() {
	find_EOL_pic(EOL_pic, { 관리번호 : { $exists : true}});
	await delay();
	console.log(EOL_pic_v);

	if(EOL_pic_v != null) {
		for(var i = 0; i < EOL_pic_v.length; i++) {
			console.log('start:', EOL_pic_v[i].관리번호);
			var doc_1 = {
				관리번호 : EOL_pic_v[i].관리번호,
				pic1 : EOL_pic_v[i].pic1,
				pic2 : EOL_pic_v[i].pic2,
				pic3 : EOL_pic_v[i].pic3,
				pic4 : EOL_pic_v[i].pic4,
				pic5 : EOL_pic_v[i].pic5,
				pic6 : EOL_pic_v[i].pic6,
				pic7 : EOL_pic_v[i].pic7,
				pic8 : EOL_pic_v[i].pic8,
				pic9 : EOL_pic_v[i].pic9,
				pic10 : EOL_pic_v[i].pic10
			}

			update(EOL_pic1, doc_1);
			await delay();

			var doc_2 = {
				관리번호 : EOL_pic_v[i].관리번호,
				pic1 : EOL_pic_v[i].pic11,
				pic2 : EOL_pic_v[i].pic12,
				pic3 : EOL_pic_v[i].pic13,
				pic4 : EOL_pic_v[i].pic14,
				pic5 : EOL_pic_v[i].pic15,
				pic6 : EOL_pic_v[i].pic16,
				pic7 : EOL_pic_v[i].pic17,
				pic8 : EOL_pic_v[i].pic18,
				pic9 : EOL_pic_v[i].pic19,
				pic10 : EOL_pic_v[i].pic20
			}

			update(EOL_pic2, doc_2);
			await delay();

			var doc_3 = {
				관리번호 : EOL_pic_v[i].관리번호,
				pic1 : EOL_pic_v[i].pic21,
				pic2 : EOL_pic_v[i].pic22,
				pic3 : EOL_pic_v[i].pic23,
				pic4 : EOL_pic_v[i].pic24,
				pic5 : EOL_pic_v[i].pic25,
			}

			update(EOL_pic3, doc_3);
			await delay();

			console.log('end:', EOL_pic_v[i].관리번호);

			await sleep(1);
		}
	}
}

async function 기본정보자동입력() {
	var cnt = 0;
	find_입고(입고, { 관리번호 : { $exists : true}});
	await delay();

	console.log(입고_v);
	for(var i = 0 ; i < 입고_v.length; i++) {
		var doc = {};
		doc.관리번호 = 입고_v[i].관리번호;
		doc.구분 = 입고_v[i].구분;
		doc.차종 = 입고_v[i].차종;
		doc.품번 = 입고_v[i].품번;
		doc.RO_no = 입고_v[i].RO_no;

		update(세척, doc);
		await delay();

		update(기초검사, doc);
		await delay();

		update(분해조립, doc);
		await delay();

		update(성능검사, doc);
		await delay();

		update(EOL, doc);
		await delay();

		update(교체부품상세1, doc);
		await delay();

		update(교체부품상세2, doc);
		await delay();

		update(교체부품상세3, doc);
		await delay();

		update(교체부품상세4, doc);
		await delay();

		update(교체부품상세5, doc);
		await delay();

		update(교체부품상세6, doc);
		await delay();

		update(교체부품상세7, doc);
		await delay();

		update(교체부품상세8, doc);
		await delay();

		update(교체부품상세9, doc);
		await delay();

		update(교체부품상세10, doc);
		await delay();

		cnt++;
		console.log(cnt);
	}
}
