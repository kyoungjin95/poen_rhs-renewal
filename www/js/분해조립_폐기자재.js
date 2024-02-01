async function 분해조립_폐기자재_시작() {
	await sleep(100);
	if(typeof _D == 'undefined') {
		await sleep(1);
		return;
	}
	flag_분해조립_폐기자재 = false;

	console.log('분해조립 폐기자재 시작');

	flag_부품정보_list = true;
	await 부품정보_list_시작();

	var 내부 = false;
	flag_불량의심부품 = false;
	await 불량의심부품_시작(내부);

	find(분해조립폐기자재, 관리번호);
	await delay();

	분해조립폐기자재_tabledata = JSON.parse(JSON.stringify(분해조립폐기자재_v));
	await 분해조립폐기자재_table(분해조립폐기자재_tabledata);

	폐기자재_choisenButton();

	flag_폐기자재_all = false;
	flag_all_폐기사유 = false;
	check_items = [];
}

var table_폐기자재;
var flag_all_폐기사유 = false;
function 분해조립폐기자재_table(tabledata) {
	table_폐기자재 = new Tabulator("#grid_교체부품", {
		layout: "resizableColumnFit",
		height: 500,
		data: tabledata,

		columns: [
			{ title: "품명", field: "품명", sorter: "string" },
			{ title: "품번", field: "품번", sorter: "string" },
			{ title: "QR", field: "QR", sorter: "string" },
			{ title: "폐기사유", field: "폐기사유", editor: "textarea"},
			{
				formatter: "buttonCross",
				width: 40,
				align: "center",
				cellClick: async function (e, cell) {
					var row_index = cell.getRow()._row.position;
					console.log(row_index);

					var del_QR = 분해조립폐기자재_tabledata[row_index - 1].QR;
					delete_분해조립폐기자재(분해조립폐기자재, del_QR);
					await delay();

					분해조립폐기자재_tabledata.splice(row_index - 1, 1);
					분해조립폐기자재_table(분해조립폐기자재_tabledata);


				},
			},
		]
	});

	table_폐기자재.on("cellEdited", function(cell) {
		if(flag_all_폐기사유 == false) {
			flag_all_폐기사유 == true;
			var data = cell.getRow().getData();
			for(var i = 0; i < 분해조립폐기자재_tabledata.length; i++) {
				분해조립폐기자재_tabledata[i].폐기사유 = data.폐기사유;
			}
			분해조립폐기자재_table(분해조립폐기자재_tabledata);
		}
	});
}

var check_items;
var 분해조립폐기자재_tabledata = [];
function 폐기자재_choisenButton() {
	var buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const value = button.getAttribute("value");
			if (value == null) return;
			console.log("value:", value);
			
			check_items.push(value);
			button.style.backgroundColor = 'red';

			var add_item = {
				관리번호 : 관리번호,
				품명 : value.replace('_A_', '').replace('_B_', '').replace('_C_', '').replace('_D_', '').replace('_D2_', '').replace('_QR', ''),
				품번 : document.getElementById(value.replace('QR', '품번')).value,
				QR : document.getElementById(value).value,
				폐기사유 : ''
			};

			var 중복 = false;
			분해조립폐기자재_tabledata.forEach((v) => {
				if(v.QR == add_item.QR) 중복 = true;
			});
			if(중복 == true) return;

			분해조립폐기자재_tabledata.push(add_item);
			분해조립폐기자재_table(분해조립폐기자재_tabledata);
		});
	});
}

async function 분해조립폐기자재_save() {
	var data = table_폐기자재.getData();

	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
		update_분해조립폐기자재(분해조립폐기자재, data[i]);
		await delay();

		console.log(update_count);
		console.log(insert_count);
	};


	if (update_count > 0) {
		alert("업데이트 되었습니다");
	}

	if (insert_count > 0) {
		alert("저장 되었습니다");
	}

	var buttons = document.querySelectorAll("button");
	buttons.forEach(async (button) => {
		const value = button.getAttribute("value");
		if (value == null) return;
		console.log("value:", value);

		if(check_items.indexOf(value) != -1) return;

    		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호  = 관리번호;
		_doc.품명 = value.replace('_A_', '').replace('_B_', '').replace('_C_', '').replace('_D_', '').replace('_D2_', '').replace('_QR', '');
		_doc.품번 = document.getElementById(value.replace('QR', '품번')).value;
		_doc.QR = document.getElementById(value).value;

		update_고품정보(고품정보, _doc);
		await delay();

		console.log(update_count);
		console.log(insert_count);
	});
}

var flag_폐기자재_all = false;
async function 분해조립폐기자재_all() {
	var buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		const value = button.getAttribute("value");
		if (value == null) return;
		console.log("value:", value);

		button.style.backgroundColor = 'red';

		var add_item = {
			관리번호 : 관리번호,
			품명 : value.replace('_A_', '').replace('_B_', '').replace('_C_', '').replace('_D_', '').replace('_D2_', '').replace('_QR', ''),
			품번 : document.getElementById(value.replace('QR', '품번')).value,
			QR : document.getElementById(value).value,
			폐기사유 : ''
		};

		분해조립폐기자재_tabledata.push(add_item);
	});

	분해조립폐기자재_table(분해조립폐기자재_tabledata);

	flag_폐기자재_all = true;
}
