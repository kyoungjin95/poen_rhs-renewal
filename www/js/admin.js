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

	;
}

async function add_user() {
	_id = document.getElementById('_id');
	_passwd = document.getElementById('_passwd');
	_passwd2 = document.getElementById('_passwd2');
	_set_level = document.getElementById('_level');
	if(_id.value == '' || _passwd.value == '') return;
	if(_passwd.value != _passwd2.value) {
		alert('패스워드가 서로 다름니다.');
		return;
	}

	const hash = CryptoJS.MD5(_passwd.value.trim()); 	

	var doc = 계정_doc;
	doc.id = _id.value.trim();
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
	_csv.addEventListener('input', function(event) {
		const target = event.target;
		const files = target.files;
		const file = files[0];

		const reader = new FileReader();
		reader.addEventListener('load', async function() {
			const res = d3.csvParse(reader.result);

			//insertMany(BSA재제조, res);
			//await delay();


			for(var i = 0; i < res.length; i++) {
				update(BSA재제조, res[i]);
				await delay();
			};
			console.log('complete');
		});
		reader.readAsText(file);
	});
}

async function 출하to출하검사copy() {
	find_BSA재제조(BSA재제조, { 관리번호 : { $exists : true }, 출하: { $exists : true }});
	await delay();
	
	find_array.forEach(async function(info) {
		let doc = {
			관리번호 : info.관리번호,
			출하검사 : info.출하,
			납품처 : ''
		}
		update(BSA재제조, doc);
		await delay();
	});

	await delay();
	console.log('complete');
}

async function 기본to입고copy() {
	find_BSA재제조(BSA재제조, { 관리번호 : { $exists : true }, 입고 : { $exists : true }});
	await delay();
	
	find_array.forEach(async function(info) {
		let doc = {
			관리번호 : info.관리번호,
			입고일 : info.입고
		}
		update(입고, doc);
		await delay();
	});

	await delay();
	console.log('complete');
}

async function EOLto성능검사() {
	find_BSA재제조(BSA재제조, { 관리번호 : { $exists : true }, EOL투입일 : { $ne : '' }, 성능검사 : ''});
	await delay();
	
	find_array.forEach(async function(info) {
		let doc = {
			관리번호 : info.관리번호,
			성능검사 : info.EOL투입일
		}
		update(입고, doc);
		await delay();
	});

	await delay();
	console.log('complete');
}
