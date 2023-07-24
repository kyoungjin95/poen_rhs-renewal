var m_id = '';
var tabledata = [];

async function 신품정보_시작() {
	read_신품정보_func_csv();
}

async function 신품정보등록_조회() {
	if(worker == '') return;
	while(_바코드 == undefined) {
		await sleep(DELAY);
	}

	if(_바코드.value.length == 0) return;
	console.log('load: ', _바코드.value);
	if(_바코드.value == '' | _바코드.value == 'none') return;

	count(신품정보, { 바코드 : _바코드.value });
	await delay();
	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_신품정보(자재입출고, { 바코드 : _바코드.value });
		await delay();
		console.log('신품정보 : ', find_array);
		
		_바코드.value = find_array[0].바코드;
		_날짜.value = find_array[0].날짜;
		_구분.value = find_array[0].구분;
		_차종.value = find_array[0].차종;
		_품명.value = find_array[0].품명;
		_품번.value = find_array[0].품번;
		_수량.value = find_array[0].수량;
                _LotNo.value = find_array[0].LotNo;
                _비고.value = find_array[0].비고;
	} else {
		_바코드.value = '';
		_날짜.value = '';
		_구분.value = '';
		_차종.value = '';
		_품명.value = '';
		_품번.value = '';
		_수량.value = '';
                _LotNo.value = '';
                _비고.value = '';
	}

	find_신품정보(자재입출고, { 바코드 : { $exists: true }});
	await delay();
	tabledata = find_array;

	var table_신품정보 = new Tabulator("#grid_신품정보", {
		layout: "resizableColumnFit",
		height:200,
		data:tabledata, 
		//autoColumns:true,
		
		columns:[
			{title:"차종", field:"차종", sorter:"string"},
			{title:"품명", field:"품명", sorter:"string"},
			{title:"품번", field:"품번", sorter:"string"},
			{title:"입고수량", field:"입고수량", sorter:"string"},
			{title:"출고수량", field:"출고수량", sorter:"string"},
			{title:"남은수량", field:"남은수량", sorter:"string"},
		]
	});
}

async function 신품정보_save() {
	if(worker == '') 
	if(_바코드.value.length == 0) return;
	console.log('save: ', _바코드.value);

	var doc = 자재입출고_doc;
	doc.바코드 = _바코드.value;
	doc.날짜 = _날짜.value;
	doc.구분 = _구분.value;
	doc.차종 = _차종.value;
	doc.품명 = _품명.value;
	doc.품번 = _품번.value;
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

	신품정보등록_조회();
}

function _품명_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_품명').value = value;
}

function _사용여부_콤보박스(e) {
	const value = e.value;

  	document.getElementById('_사용여부').value = value;
}

async function read_신품정보_func_csv() {
	_재고관리_csv.addEventListener('input', async function(event) {
		const target = event.target;
		const files = target.files;
		const file = files[0];

		const reader = new FileReader();
		reader.addEventListener('load', async function() {
			const res = d3.csvParse(reader.result);
			//console.log(res);
			for(var i = 0; i < res.length; i++) {
				신품정보_insert(res[i]);
				await sleep(10);
			};
			console.log('insert count :', total_insert_count);
			console.log('update count :', total_update_count);
			console.log('fail count :', fail_count);
		});
		reader.readAsText(file);
	});
}

async function 신품정보_insert(val) {
	var doc = 자재입출고_doc;
	doc.바코드= val.바코드;
	doc.날짜 = val.날짜;
	doc.구분 = val.구분;
	doc.차종 = val.차종;
	doc.품명 = val.품명;
	doc.품번 = val.품번;
	doc.수량 = val.수량;
	doc.LotNo = val.LotNo; 
	doc.비고 = val.비고; 
	update_신품정보(자재입출고, doc);
	await delay();
}
