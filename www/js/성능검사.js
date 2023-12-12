async function 성능검사_시작(is재제조 = 0) {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	
	if(flag_성능검사 == true) await 성능검사_list();
	flag_성능검사 = false;

	_검사자.value = worker;

	if(is재제조 == 0) {
		if(_management_id.value.length == 0) return;

		find(BSA재제조, _management_id.value);
		await delay();
		if(BSA재제조_v != null) {
			_재제조번호.value = BSA재제조_v.재제조번호;
			_구분.value = BSA재제조_v.구분;
			_차종.value = BSA재제조_v.차종;
			_품번.value = BSA재제조_v.품번;;
			_RO_no.value = BSA재제조_v.RO_no;
		} else {
			_재제조번호.value = '';
			_구분.value = '';
			_차종.value = '';
			_품번.value = '';
			_RO_no.value = '';
		}
	} else if(is재제조 == 1) {
		if(_재제조번호.value.length == 0) return;

		findOne_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value});
		await delay();

		if(BSA재제조_v != null) {
			_management_id.value = BSA재제조_v.관리번호;
			_구분.value = BSA재제조_v.구분;
			_차종.value = BSA재제조_v.차종;
			_품번.value = BSA재제조_v.품번;;
			_RO_no.value = BSA재제조_v.RO_no;
		} else {
			_management_id.value = '';
			_구분.value = '';
			_차종.value = '';
			_품번.value = '';
			_RO_no.value = '';
		}
	} else if(is재제조 == 2) {
		if(_RO_no.value.length == 0) return;

		findOne_BSA재제조(BSA재제조, { RO_no : _RO_no.value});
		await delay();

		if(BSA재제조_v != null) {
			_management_id.value = BSA재제조_v.관리번호;
			_재제조번호.value = BSA재제조_v.재제조번호;
			_구분.value = BSA재제조_v.구분;
			_차종.value = BSA재제조_v.차종;
			_품번.value = BSA재제조_v.품번;;
		} else {
			_management_id.value = '';
			_재제조번호.value = '';
			_구분.value = '';
			_차종.value = '';
			_품번.value = '';
		}
	}

	find(성능검사, _management_id.value);
	await delay();

	if(성능검사_v != null) {
		_공정입고일.value = 성능검사_v.공정입고일;
		_용량평가.value = 성능검사_v.용량평가;
		_SOC60Percent.value = 성능검사_v.SOC60Percent;
		_DCIR.value = 성능검사_v.DCIR;
		_DCIR_Charge.value    = 성능검사_v.DCIR_Charge;
		_DCIR_Discharge.value =	성능검사_v.DCIR_Discharge;
		_분해조립_재의뢰사유.value = 성능검사_v.분해조립_재의뢰사유;
		_공정완료일.value = 성능검사_v.공정완료일;
		_검사자.value = 성능검사_v.검사자;
	} else {
		_공정입고일.value = '0000-00-00T00:00'
		_용량평가.value = '';
		_SOC60Percent.value = '';
		_DCIR.value = '';
		_DCIR_Charge.value    = '';
		_DCIR_Discharge.value =	'';
		_분해조립_재의뢰사유.value = '';
		_공정완료일.value = '0000-00-00T00:00';
		_검사자.value = worker;

		var DateTime = luxon.DateTime;
		var seoul = DateTime.local().setZone("Asia/Seoul");
		var now = seoul.toString().slice(0, 19);

		_공정입고일.value = now;	
	}
}

async function 성능검사_save() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString().slice(0, 19);

	if(level != '관리자') _공정완료일.value = now;

	find(성능검사, _management_id.value);
	await delay();

	var doc = JSON.parse(JSON.stringify(성능검사_doc));
	doc.관리번호 = _management_id.value.trim().toUpperCase();
	if(성능검사_v == null) doc.공정입고일 = _공정입고일.value;
	if(level == '관리자') doc.공정입고일 = _공정입고일.value;
	doc.용량평가 = _용량평가.value;
	doc.SOC60Percent = _SOC60Percent.value;
	doc.DCIR = _DCIR.value;
	doc.DCIR_Charge = _DCIR_Charge.value;
	doc.DCIR_Discharge = _DCIR_Discharge.value;
	doc.분해조립_재의뢰사유 = _분해조립_재의뢰사유.value;
	doc.공정완료일 = now; //_공정완료일.value;
	if(level == '관리자') doc.공정완료일 = _공정완료일.value;
	doc.검사자 = _검사자.value;
	
	update(성능검사, doc);
	await delay();
	
	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	find(BSA재제조, _management_id.value );
	await delay();

	if(BSA재제조_v == null) {
		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호 = _management_id.value.trim().toUpperCase();
		_doc.성능검사투입일 ; _공정입고일.value;
		if(_분해조립_재의뢰사유.value == '') {
			_doc.성능검사 = _공정완료일.value;
		} else {
			_doc.분해조립 = '';
			_doc.성능검사 = '';
		}
		
		update(BSA재제조, _doc);
		await delay();
	} else {
		if(_분해조립_재의뢰사유.value == '') {
			var _doc = {
				관리번호 : _management_id.value.toUpperCase(),
				성능검사투입일 : _공정입고일.value,
				성능검사 : _공정완료일.value
			}
		} else {
			var _doc = {
				관리번호 : _management_id.value.toUpperCase(),
				성능검사투입일 : _공정입고일.value,
				분해조립 : '',
				성능검사 : ''
			}
		}

		update(BSA재제조, _doc);
		await delay();
	}

	//이전페이지();
}

function 성능검사_updateFilter() {
  var fieldEl = document.getElementById("filter-field");
  var typeEl = document.getElementById("filter-type");
  var valueEl = document.getElementById("filter-value");

  var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
  var typeVal = typeEl.options[typeEl.selectedIndex].value;

  var filter = filterVal == "function" ? customFilter : filterVal;

  if (filterVal == "function") {
    typeEl.disabled = true;
    valueEl.disabled = true;
  } else {
    typeEl.disabled = false;
    valueEl.disabled = false;
  }

  if (filterVal) {
    성능검사_list_table.setFilter(filter, typeVal, valueEl.value);
  }
}

var 성능검사_list_table;
async function 성능검사_list() {
	findOne_BSA재제조(BSA재제조, {공정단계 : { $ne : '출하' }, 분해조립 : { $ne : '' }, 성능검사 : { $eq : '' }, EOL : { $eq : '' } ,  소재지 : { $nin : ['공정대기', '품질대기'] }, 완전분해 : { $eq : ''}, 폐기 : { $eq : '' }, 출하 : { $eq : '' }, 구분 : { $nin: ['일반기타', '보증기타']} });
	await delay();

	if(BSA재제조_v != null) {
		find_BSA재제조(BSA재제조, { 공정단계 : { $ne : '출하' }, 분해조립 : { $ne : '' }, 성능검사 : { $eq : '' }, EOL : { $eq : '' } ,  소재지 : { $nin : ['공정대기', '품질대기'] }, 완전분해 : { $eq : ''}, 폐기 : { $eq : '' }, 출하 : { $eq : '' }, 구분 : { $nin: ['일반기타', '보증기타']} });
		await delay();
	}

	성능검사_list_table = new Tabulator("#grid_list", {
		layout: "resizableColumnFit",
		data: BSA재제조_v,
		height: "400px",

		columns: [
			{ title: "ID", field: "_id", sorter: "string", width: "180" },
			{ title: "관리번호", field: "관리번호", sorter: "string", width: "180" },
			{
				title: "재제조번호",
				field: "재제조번호",
				sorter: "string",
				width: "180",
			},
			{ title: "구분", field: "구분", sorter: "string", width: "180" },
			{ title: "차종", field: "차종", sorter: "string", width: "180" },
			{ title: "품번", field: "품번", sorter: "string", width: "180" },
			{ title: "RO_no", field: "RO_no", sorter: "string", width: "180" },
			{ title: "공정단계", field: "공정단계", sorter: "string", width: "180" },
			{ title: "소재지", field: "소재지", sorter: "string", width: "180" },
			{
				title: "적재No",
				field: "적재No",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "입고",
				field: "입고",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "제조투입",
				field: "제조투입",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "세척투입일",
				field: "세척투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "세척",
				field: "세척",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "기초검사투입일",
				field: "기초검사투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "기초검사",
				field: "기초검사",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "분해조립투입일",
				field: "분해조립투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "분해조립",
				field: "분해조립",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "성능검사투입일",
				field: "성능검사투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "성능검사",
				field: "성능검사",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "EOL투입일",
				field: "EOL투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "EOL",
				field: "EOL",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{ title: "출하검사", field: "출하검사", sorter: "string", width: "180" },
			{ title: "납품처", field: "납품처", sorter: "string", width: "180" },
			{ title: "출하", field: "출하", sorter: "string", width: "180" },
			{ title: "반품입고", field: "반품입고", sorter: "string", width: "180" },
			{ title: "재출하", field: "재출하", sorter: "string", width: "180" },
			{ title: "완전분해", field: "완전분해", sorter: "string", width: "180" },
			{
				title: "완전분해사유",
				field: "완전분해사유",
				sorter: "string",
				width: "180",
			},
			{ title: "폐기", field: "폐기", sorter: "string", width: "180" },
			{ title: "폐기사유", field: "폐기사유", sorter: "string", width: "180" },
			{
				title: "마지막충전일",
				field: "마지막충전일",
				sorter: "string",
				width: "180",
			},
			{ title: "출하예약", field: "출하예약", sorter: "string", width: "180" },
			{ title: "렉번호", field: "렉번호", sorter: "string", width: "180" },
		],
	});
	
	성능검사_list_table.on("rowClick", async function (e, row) {
		console.log("selected 관리번호: ", row.getData().관리번호);

		_management_id.value = row.getData().관리번호;

		await sleep(1);

		var yes = confirm('선택한 BSA로 성능검사 공정 정보입력을 시작하시겠습니까?');
		if(yes != true) return;

		성능검사_시작();
	});

	//Update filters on value change
	document
		.getElementById("filter-field")
		.addEventListener("change", 성능검사_updateFilter);
	document
		.getElementById("filter-type")
		.addEventListener("change", 성능검사_updateFilter);
	document
		.getElementById("filter-value")
		.addEventListener("keyup", 성능검사_updateFilter);

	//Clear filters on "Clear Filters" button click
	document
		.getElementById("filter-clear")
		.addEventListener("click", function () {
			var fieldEl = document.getElementById("filter-field");
			var typeEl = document.getElementById("filter-type");
			var valueEl = document.getElementById("filter-value");
			fieldEl.value = "";
			typeEl.value = "=";
			valueEl.value = "";

			성능검사_list_table.clearFilter();
		});
}
