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


	doc = 입고_doc;
	doc.관리번호 = val.관리번호;
	doc.차종 = val.차종;
	doc.품번 = val.품번; 
	doc.RO_no = val.RO_no; 

	//console.log('입고:', doc);
	update(입고, doc);
	await delay();
}
