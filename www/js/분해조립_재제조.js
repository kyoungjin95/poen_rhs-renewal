async function 분해조립_재제조_시작() {
	await sleep(100);
	if(typeof _D == 'undefined') {
		await sleep(1);
		return;
	}
	flag_분해조립_재제조 = false;

	console.log('분해조립 재제조 시작');

	flag_부품정보_list = true;
	await 부품정보_list_시작();

	var 내부 = false;
	flag_불량의심부품 = false;
	await 불량의심부품_시작(내부);

	find(분해조립재제조, 관리번호);
	await delay();

	분해조립재제조_tabledata = JSON.parse(JSON.stringify(분해조립재제조_v));
	await 교체부품_table(분해조립재제조_tabledata);

	choisenButton();
}

function 교체부품_table(tabledata) {
	var table_부품교환 = new Tabulator("#grid_교체부품", {
		layout: "resizableColumnFit",
		height: 500,
		data: tabledata,

		columns: [
			{ title: "품명", field: "품명", sorter: "string" },
			{ title: "교체전 품번", field: "교체전품번", sorter: "string" },
			{ title: "교체전 QR", field: "교체전QR", sorter: "string" },
			{ title: "신품/고품", field: "신품고품", editor: "input"},
			{ title: "교체후 품번", field: "교체후품번", editor: "input" },
			{ title: "교체후 QR", field: "교체후QR", editor: "input" },
			{ title: "교체사유", field: "교체사유", editor: "textarea" },
			{
				formatter: "buttonCross",
				width: 40,
				align: "center",
				cellClick: async function (e, cell) {
					var row_index = cell.getRow()._row.position;
					console.log(row_index);
					
					var del_QR = 교체부품_tabledata[row_index - 1].교체전QR;
					delete_분해조립재제조(분해조립재제조, del_QR);
					await delay();

					교체부품_tabledata.splice(row_index - 1, 1);
					교체부품_table(교체부품_tabledata);


				},
			},
		]
	});
}

var 교체부품_tabledata = [];
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
				교체전품번 : document.getElementById(value.replace('QR', '품번')).value,
				교체전QR : document.getElementById(value).value,
				신품고품 : '',
				교체후품번 : '',
				교체후QR : '',
				교체사유 : ''
			};

			교체부품_tabledata.push(add_item);
			교체부품_table(교체부품_tabledata);
		});
	});
}

async function 분해조립재제조_save() {
	for(var i = 0; i < 교체부품_tabledata.length; i++) {
		console.log(교체부품_tabledata[i]);
		update_분해조립재제조(분해조립재제조, 교체부품_tabledata[i]);
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

	find_분해조립재제조(분해조립재제조, { 관리번호 : 관리번호 });
	await delay();

	console.log(분해조립재제조_v);
}
