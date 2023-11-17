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

	if(계정_cnt > 0) {
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

	var doc = JSON.parse(JSON.stringify(계정_doc));
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
				if(res[i].완전분해 != '') doc.완전분혜 = res[i].완전분해 + 'T14:00:00';
				else doc.완전분해 = '';
				
				if(res[i].폐기 != '') doc.폐기 = res[i].폐기 + 'T14:00:00';
				else doc.폐기 = '';
				
				if(res[i].출하 != '') doc.출하 = res[i].출하 + 'T14:00:00';
				else doc.출하 = '';

				update(BSA재제조, doc);
				await delay();

				console.log(doc);
			};
			console.log('complete');
		});
		reader.readAsText(file);
	});
}

async function doo_() {
	find_BSA재제조(BSA재제조, { 완전분해 : { $ne : '' }, 공정단계 : { $ne : '완전분해'}});
	await delay();

	BSA재제조_v.forEach(async function(item) {
		var doc = {
			관리번호 : item.관리번호,
			공정단계 : '분해조립'
		}

		update(BSA재제조, doc);
		await delay();
	});

	console.log('complete');
}

async function doo() {
	find_BSA재제조(BSA재제조, { EOL : { $ne : '' }, 출하검사 : { $eq : ''}});
	await delay();

	var test_BSA = BSA재제조_v;
	var table = new Tabulator("#grid_bsa", {
		layout: "resizableColumnFit",
		data:test_BSA,
		height: '700px',

		columns:[
			{title:"ID", field:"_id", sorter:"string", width:'180'},
			{title:"관리번호", field:"관리번호", sorter:"string", width:'180'},
			{title:"재제조번호", field:"재제조번호", sorter:"string", width:'180'},
			{title:"구분", field:"구분", sorter:"string", width:'180'},
			{title:"차종", field:"차종", sorter:"string", width:'180'},
			{title:"품번", field:"품번", sorter:"string", width:'180'},
			{title:"RO_no", field:"RO_no", sorter:"string", width:'180'},
			{title:"공정단계", field:"공정단계", sorter:"string", width:'180'},
			{title:"소재지", field:"소재지", sorter:"string", width:'180'},
			{title:"적재No", field:"적재No", sorter:"string", visible: true, width:'180'}, //
			{title:"입고", field:"입고", sorter:"string", visible: true, width:'180'},//
			{title:"제조투입", field:"제조투입", sorter:"string", visible: true, width:'180'},//
			{title:"세척투입일", field:"세척투입일", sorter:"string", width:'180'},
			{title:"세척", field:"세척", sorter:"string", visible: true, width:'180'},//
			{title:"기초검사투입일", field:"기초검사투입일", sorter:"string", width:'180'},
			{title:"기초검사", field:"기초검사", sorter:"string", visible: true, width:'180'},//
			{title:"분해조립투입일", field:"분해조립투입일", sorter:"string", width:'180'},
			{title:"분해조립", field:"분해조립", sorter:"string", visible: true, width:'180'},//
			{title:"성능검사투입일", field:"성능검사투입일", sorter:"string", width:'180'},
			{title:"성능검사", field:"성능검사", sorter:"string", visible: true, width:'180'},//
			{title:"EOL투입일", field:"EOL투입일", sorter:"string", width:'180'},
			{title:"EOL", field:"EOL", sorter:"string", visible: true, width:'180'},//
			{title:"출하검사", field:"출하검사", sorter:"string", width:'180'},
			{title:"납품처", field:"납품처", sorter:"string", width:'180'},
			{title:"출하", field:"출하", sorter:"string", width:'180'},
			{title:"반품입고", field:"반품입고", sorter:"string", width:'180'},
			{title:"재출하", field:"재출하", sorter:"string", width:'180'},
			{title:"완전분해", field:"완전분해", sorter:"string", width:'180'},
			{title:"폐기", field:"폐기", sorter:"string", width:'180'},
			{title:"마지막충전일", field:"마지막충전일", sorter:"string", width:'180'},
			{title:"출하예약", field:"출하예약", sorter:"string", width:'180'},
			{title:"렉번호", field:"렉번호", sorter:"string", width:'180'},
		],
	});

	await sleep(1000);
	var sheets = {
		'EOLvs출하검사' : true,
	};
	table.download("xlsx", "EOLvs출하검사_bsa.xlsx", {sheets:sheets});
}
