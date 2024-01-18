async function 입고_시작() {
	if(typeof _management_id == 'undefined') {
		await sleep(DELAY);
		return;
	}

	if (flag_입고 == true) await 입고_list();
	flag_입고 = false;

	const _입고기타 = document.getElementById("_입고_기타");
	const _입고일반 = document.getElementById("_입고_일반");

	if (level != "관리자") {
		_입고일반.style.display = "inline-block";
		_입고기타.style.display = "none";
	} else {
		_입고일반.style.display = "none";
		_입고기타.style.display = "inline-block";
	}

	var 보관위치 = select_pos;

	select_pos = '';

	if(보관위치 != '') {
		_management_id.value = 관리번호.toUpperCase();
	}

	_img1.ondrop = function (evt) {
		var files = evt.dataTransfer?.files;
		if (files.length > 0) {
			console.log("drag & drop");
			const reader = new FileReader();

			reader.readAsDataURL(files[0]);

			reader.onload = () => {
				const dataURL = reader.result;
				_img1.src = dataURL;
			};
		}
		evt.preventDefault();
	};

	_img1.ondragover = function (evt) {
		evt.preventDefault();
	};
	console.log("load: ", _management_id.value);
	if (_management_id.value.length == 0) return;
	if ((_management_id.value == "") | (_management_id.value == "none")) return;

	관리번호 = _management_id.value;

	_management_id.value = _management_id.value.toUpperCase();

	find(입고, _management_id.value);
	await delay();

	if (입고_v != null) {
		console.log("입고 data:", 입고_v);

		_입고일.value = 입고_v.입고일;
		_입고처.value = 입고_v.입고처;
		_구분.value = 입고_v.구분;
		_차종.value = 입고_v.차종;
		_품번.value = 입고_v.품번;
		_RO_no.value = 입고_v.RO_no;
		_Rack_번호.value = 입고_v.보관위치;
		if(보관위치 != '') {
			_Rack_번호.value = 보관위치;
		}
	} else {
		_입고일.value = "0000-00-00T00:00";
		_입고처.value = "";
		_구분.value = "";
		_차종.value = "";
		_품번.value = "";
		_RO_no.value = "";
		_Rack_번호.value = '';

		var DateTime = luxon.DateTime;
		var seoul = DateTime.local().setZone("Asia/Seoul");
		var now = seoul.toString().slice(0, 19);

		_입고일.value = now;
	}

	find(입고_pic, _management_id.value);
	await delay();

	if(입고_pic_v != null) {
		_img1.src = 입고_pic_v.pic1;
	} else {
		_img1.src = '';
	}
}

async function 입고_save() {
	if (_management_id.value.length == 0) return;
	console.log("save: ", _management_id.value);
	_차종.value = _차종.value.replace('-', '_');
	var doc = JSON.parse(JSON.stringify(입고_doc));

	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString().slice(0, 19);

	if (_입고일.value == '') _입고일.value = now;

	doc.관리번호 = _management_id.value.trim().toUpperCase();
	doc.입고일 = _입고일.value;
	doc.입고처 = _입고처.value;
	doc.구분 = _구분.value;
	doc.차종 = _차종.value;
	doc.품번 = _품번.value;
	doc.RO_no = _RO_no.value;
	doc.보관위치 = _Rack_번호.value;

	if (_RO_no.value.length != 17 && _RO_no.value.length != 0) {
		var cnt = (_RO_no.value.match(/-/g) || []).length;
		if ((_RO_no.value.length - cnt) != 17) {
			alert('Ro 번호 자릴수가 다릅니다.(17)');
			return;
		}
	}

	if (_RO_no.value.length == 0) {
		alert('RO 번호가 입력되지 않았습니다.');
	}
	update(입고, doc);
	await delay();

	console.log(update_count);
	console.log(insert_count);

	var out = false;
	if (update_count > 0) {
		out = true;
		alert("업데이트 되었습니다");
	}

	if (insert_count > 0) {
		out = true;
		alert("저장 되었습니다");
	}

	var pic_doc = JSON.parse(JSON.stringify(입고_pic_doc));
	pic_doc.관리번호 = _management_id.value;
	pic_doc.pic1 = _img1.src;

	update(입고_pic, pic_doc);
	await delay();

	console.log('save 입고 pic1');
	if(out == false) {
		if (update_count > 0) {
			alert("업데이트 되었습니다");
		}

		if (insert_count > 0) {
			alert("저장 되었습니다");
		}
	}

	find(BSA재제조, _management_id.value);
	await delay();

	if (BSA재제조_v == null) {
		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호 = _management_id.value.trim().toUpperCase();
		_doc.입고 = _입고일.value;
		_doc.구분 = _구분.value;
		_doc.차종 = _차종.value;
		_doc.품번 = _품번.value;
		_doc.RO_no = _RO_no.value;
		_doc.보관위치 = _Rack_번호.value;
		update(BSA재제조, _doc);
		await delay();

		select_pos = '';
	} else {
		var _doc = {
			관리번호: _management_id.value.toUpperCase(),
			입고: _입고일.value,
			구분: _구분.value,
			차종: _차종.value,
			품번: _품번.value,
			RO_no: _RO_no.value,
			보관위치: _Rack_번호.value,
		};

		update(BSA재제조, _doc);
		await delay();
	}

	await 공정단계자동입력(_management_id.value);
	//이전페이지();
}

function _구분_콤보박스(e) {
	const value = e.value;

	document.getElementById("_구분").value = value;
}

function _차종_리스트_콤보박스(e) {
	const value = e.value;

	document.getElementById("_차종").value = value;
}

function 입고_updateFilter() {
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
		입고_list_table.setFilter(filter, typeVal, valueEl.value);
	}
}

var 입고_list_table;

async function 입고_list() {
	findOne_입고(입고, { 입고처: { $in : ['구장창고', '제주창고', '군포창고']}});
	await delay();

	if (입고_v != null) {
		find_입고(입고, { 입고처: { $in : ['구장창고', '제주창고', '군포창고']}});
		await delay();
	}

	입고_list_table = new Tabulator("#grid_list", {
		layout: "resizableColumnFit",
		data: 입고_v,
		height: "400px",

		columns: [
			{ title: "ID", field: "_id", sorter: "string", width: "180" },
			{ title: "관리번호", field: "관리번호", sorter: "string", width: "180" },
			{ title: "입고일", field: "입고일", sorter: "string", width: "180" },
			{ title: "입고처", field: "입고처", sorter: "string", width: "180" },
			{ title: "구분", field: "구분", sorter: "string", width: "180" },
			{ title: "차종", field: "차종", sorter: "string", width: "180" },
			{ title: "품번", field: "품번", sorter: "string", width: "180" },
			{ title: "Ro_no", field: "Ro_no", sorter: "string", width: "180" },
		],
	});

	입고_list_table.on("rowClick", async function (e, row) {
		console.log("selected 관리번호: ", row.getData().관리번호);

		_management_id.value = row.getData().관리번호;

		await sleep(1);

		var yes = confirm('선택한 BSA로 세척 공정 정보입력을 시작하시겠습니까?');
		if (yes != true) return;

		입고_시작();
	});

	//Update filters on value change
	document
		.getElementById("filter-field")
		.addEventListener("change", 세척_updateFilter);
	document
		.getElementById("filter-type")
		.addEventListener("change", 세척_updateFilter);
	document
		.getElementById("filter-value")
		.addEventListener("keyup", 세척_updateFilter);

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

			입고_list_table.clearFilter();
		});
}

