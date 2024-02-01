async function 분해조립_공정대기_시작() {
	await sleep(100);
	if(typeof _D == 'undefined') {
		await sleep(1);
		return;
	}
	flag_분해조립_공정대기 = false;

	console.log('분해조립 공정대기 시작');

	var doc = {
		관리번호 : 관리번호,
		소재지 : '공정대기'
	}

	update(BSA재제조, doc);
	await delay();

	flag_부품정보_list = true;
	await 부품정보_list_시작();

	var 내부 = false;
	flag_불량의심부품 = false;
	await 불량의심부품_시작(내부);

	find(분해조립공정대기, 관리번호);
	await delay();

	분해조립공정대기_tabledata = JSON.parse(JSON.stringify(분해조립공정대기_v));
	await 분해조립공정대기_table(분해조립공정대기_tabledata);

	공정대기_choisenButton();
}

var table_공정대기;
function 분해조립공정대기_table(tabledata) {
	table_공정대기 = new Tabulator("#grid_교체부품", {
		layout: "resizableColumnFit",
		height: 500,
		data: tabledata,

		columns: [
			{ title: "품명", field: "품명", sorter: "string" },
			{ title: "품번", field: "품번", sorter: "string" },
			{ title: "QR", field: "QR", sorter: "string" },
			{ title: "대기사유", field: "대기사유", editor: "textarea"},
			{
				formatter: "buttonCross",
				width: 40,
				align: "center",
				cellClick: async function (e, cell) {
					var row_index = cell.getRow()._row.position;
					console.log(row_index);
					
					var del_QR = 분해조립공정대기_tabledata[row_index - 1].QR;
					delete_분해조립공정대기(분해조립공정대기, del_QR);
					await delay();

					분해조립공정대기_tabledata.splice(row_index - 1, 1);
					분해조립공정대기_table(분해조립공정대기_tabledata);


				},
			},
		]
	});
}

var 분해조립공정대기_tabledata = [];
function 공정대기_choisenButton() {
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
				대기사유 : ''
			};

			var 중복 = false;
			분해조립공정대기_tabledata.forEach((v) => {
				if(v.QR == add_item.QR) 중복 = true;
			});
			if(중복 == true) return;

			분해조립공정대기_tabledata.push(add_item);
			분해조립공정대기_table(분해조립공정대기_tabledata);
		});
	});
}

async function 분해조립공정대기_save() {
	var data = table_공정대기.getData();
	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
		update_분해조립공정대기(분해조립공정대기, data[i]);
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

	find_분해조립공정대기(분해조립공정대기, { 관리번호 : 관리번호 });
	await delay();

	console.log(분해조립공정대기_v);
}
