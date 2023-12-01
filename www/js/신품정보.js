var m_id = '';
var tabledata = [];

async function 신품정보_시작() {
	read_신품정보_func_csv();
}

async function 신품정보등록_조회() {
	if(worker == '') return;
	while(_QR == undefined) {
		await sleep(DELAY);
	}

	if(_QR.value.length == 0) return;
	console.log('load: ', _QR.value);
	if(_QR.value == '' | _QR.value == 'none') return;

	findOne_자재입출고(자재입출고, { QR : _QR.value });
	await delay();

	if(자재입출고_v != null) {
		_QR.value   = 자재입출고_v.QR;
		_날짜.value = 자재입출고_v.날짜;
		_구분.value = 자재입출고_v.구분;
		_차종.value = 자재입출고_v.차종;
		_품명.value = 자재입출고_v.품명;
		_품번.value = 자재입출고_v.품번;
		_단가.value = 자재입출고_v.단가;
		_수량.value = 자재입출고_v.수량;
                _LotNo.value = 자재입출고_v.LotNo;
                _비고.value = 자재입출고_v.비고;
	} else {
		_QR.value = '';
		_날짜.value = '';
		_구분.value = '';
		_차종.value = '';
		_품명.value = '';
		_품번.value = '';
		_단가.value = '';
		_수량.value = '';
                _LotNo.value = '';
                _비고.value = '';
	}
}

async function 신품정보_save() {
	if(worker == '') 
	if(_QR.value.length == 0) return;
	console.log('save: ', _QR.value);

	var doc = 자재입출고_doc;
	doc.QR = _QR.value;
	doc.날짜 = _날짜.value;
	doc.구분 = _구분.value;
	doc.차종 = _차종.value;
	doc.품명 = _품명.value;
	doc.품번 = _품번.value;
	doc.단가 = _단가.value;
	doc.수량 = _수량.value;
	doc.LotNo = _LotNo.value;
	doc.비고 = _비고.value;

	update_신품정보(자재입출고, doc);
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

function _구분_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_구분').value = value;
}

function _품명_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_품명').value = value;
}

function _사용여부_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_사용여부').value = value;
}

var flag_신품정보_엑셀 = false;
function read_신품정보_func_csv() {
	_재고관리_csv.addEventListener('input', function(event) {
		const target = event.target;
		const files = target.files;
		const file = files[0];

		const reader = new FileReader();
		reader.addEventListener('load', async function() {
			if(flag_신품정보_엑셀 == true) return;
			flag_신품정보_엑셀 = true;

			const res = d3.csvParse(reader.result);
			var docs = [];

			count(자재입출고, { QR : { $exists : true }});
			await delay();
			
			console.log(자재입출고_cnt, res.length);
			for(var i = 자재입출고_cnt; i < res.length; i++) {
				if(res[i].QR != '') docs.push(res[i]);
				console.log('docs count: ', docs.length);
				if((i > 0 && (i % 2000) == 0) || i == (res.length - 1)) {
					insertMany(자재입출고, docs);
					await delay();

					console.log('processing:', i, docs.length);
					
					docs = [];

					await sleep(1);
				} 
			};
			console.log('complete:', res.length);
		});
		console.log(file);
		reader.readAsText(file);
	});
}

async function 신품정보_insert(val) {
	var doc = 자재입출고_doc;

	doc.QR = val.QR.trim();
	doc.날짜 = val.날짜;
	doc.구분 = val.구분;
	doc.차종 = val.차종;
	doc.품명 = val.품명;
	doc.품번 = val.품번;
	doc.수량 = val.수량;
	doc.LotNo = val.LotNo; 
	doc.비고 = val.비고; 
	doc.사용관리번호 = ''; 
	update_신품정보(자재입출고, doc);
	await delay();

	console.log('+');
}
