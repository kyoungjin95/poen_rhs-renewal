var _id;
var _passwd; 
var _passwd2;
var _set_level;
var _csv;
var _신품정보_csv;

async function 관리자_시작() {
	flag_관리자 = false;
	_id = document.getElementById('_id');
	_passwd = document.getElementById('_passwd');
	_passwd2 = document.getElementById('_passwd2');
	_set_level = document.getElementById('_level');

	count(계정, { id : {$exists : true }});
	await delay();

	if(doc_count > 0) {
		find_계정(계정, { id : { $exists : true }})
		await delay();

		var table = new Tabulator("#grid_user_info", {
			layout: "resizableColumnFit",
			data: find_array,
			height: '700px',

			columns:[
				{title:"ID", field:"id", sorter:"string", width:'180'},
				{title:"LEVEL", field:"level", sorter:"string", width:'180'},
			],
		});
	}
	_csv = document.getElementById('_csv');
	func_csv();
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

	관리자_시작();
}

async function delete_user() {
	if(_id.value == '') return;

	delete_계정(_id.value);
	await delay();

	if(delete_count > 0) {
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
				var doc = {};
				doc.관리번호 = res[i].관리번호;
				doc.공정단계 = res[i].공정단계;

				update(BSA재제조, doc);
				await delay();

				console.log(doc);
			};
			console.log('complete');
		});
		reader.readAsText(file);
	});
}

async function doo() {
	find_BSA재제조(BSA재제조, { 입고 : { $eq : '' }, 세척 : { $ne : '' }});
	await delay();

	find_array.forEach(async function(info) {
		var year = info.세척.substr(0, 4);
		var month = info.세척.substr(5, 2);
		var day = info.세척.substr(8, 2);
		day = String(parseInt(day) - 1);
		
		var 입고일 = year + '-' + month + '-' + day + 'T00:00';

		var doc = {
			관리번호 : info.관리번호,
			입고 : 입고일
		}

		update(BSA재제조, doc);
		await delay();

		console.log('.');
	});
}
