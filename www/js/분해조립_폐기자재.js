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

	choisenButton();
}

function 분해조립폐기자재_table(tabledata) {
	var table_폐기자재 = new Tabulator("#grid_교체부품", {
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
}

var 분해조립폐기자재_tabledata = [];
function choisenButton() {
	var buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
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
			분해조립폐기자재_table(분해조립폐기자재_tabledata);
		});
	});
}

async function 분해조립재제조_save() {
	for(var i = 0; i < 분해조립폐기자재_tabledata.length; i++) {
		console.log(분해조립폐기자재_tabledata[i]);
		update_분해조립폐기자재(분해조립폐기자재, 분해조립폐기자재_tabledata[i]);
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

	find_분해조립폐기자재(분해조립폐기자재, { 관리번호 : 관리번호 });
	await delay();

	console.log(분해조립폐기자재_v);
}
