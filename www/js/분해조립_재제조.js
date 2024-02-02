var 재제조_doc;
async function 분해조립_재제조_시작() {
	await sleep(100);
	if(typeof _D == 'undefined') {
		await sleep(1);
		return;
	}
	flag_분해조립_재제조 = false;

	console.log('분해조립 재제조 시작');

	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString().slice(0, 19);
	
	find(BSA재제조, 관리번호);
	await delay();

	if(BSA재제조_v != null) {
		재제조_doc = {
			관리번호 : 관리번호,
			분해조립투입일 : BSA재제조_v.분해조립투입일,
			분해조립 : BSA재제조_v.분해조립
		}
	}

	if(재제조_doc.분해조립투입일 == '') 재제조_doc.분해조립투입일 = now;

	flag_부품정보_list = true;
	await 부품정보_list_시작();

	var 내부 = false;
	flag_불량의심부품 = false;
	await 불량의심부품_시작(내부);

	find(분해조립재제조, 관리번호);
	await delay();

	교체부품_tabledata = JSON.parse(JSON.stringify(분해조립재제조_v));
	await 교체부품_table(교체부품_tabledata);

	재제조_choisenButton();

	draw_color(교체부품_tabledata);

	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString().slice(0, 19);

	if (_공정입고일.value == "") _공정입고일.value = now;
	if (_공정완료일.value == "") _공정완료일.value = now;

	_작성자.value = worker;
}

var table_부품교환;

function 교체부품_table(tabledata) {
	table_부품교환 = new Tabulator("#grid_교체부품", {
		layout: "resizableColumnFit",
		height: 500,
		data: tabledata,

		columns: [
			{ title: "품명", field: "품명", sorter: "string" },
			{ title: "교체전 품번", field: "교체전품번", sorter: "string" },
			{ title: "교체전 QR", field: "교체전QR", sorter: "string" },
			{ title: "신품/고품", field: "신품고품", editor: "select", editorParams: {values: { "신품":"신품", "고품":"고품"}}},
			{ title: "교체후 품번", field: "교체후품번", editor: "input" },
			{ title: "교체후 QR", field: "교체후QR", editor: "input" },
			{ title: "교체사유", field: "교체사유", editor: "textarea" },
			{ title: "공정입고일", field: "공정입고일", editor: "input" },
			{ title: "공정완료일", field: "공정완료일", editor: "input" },
			{ title: "작성자", field: "작성자", editor: "input" },
			{
				formatter: "buttonCross",
				width: 40,
				align: "center",
				cellClick: async function (e, cell) {
					var row_index = cell.getRow()._row.position;
					console.log(row_index);
					
					교체부품_tabledata.splice(row_index - 1, 1);
					교체부품_table(교체부품_tabledata);
				},
			},
		]
	});
}

var 교체부품_tabledata = [];
function 재제조_choisenButton() {
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
				교체사유 : '',
				공정입고일 : _공정입고일.value,
				공정완료일 : _공정완료일.value,
				작성자: worker,
			};

			for(var i = 0; i < 교체부품_tabledata.length; i++) {
				if(교체부품_tabledata[i].교체전QR == add_item.교체전QR) {
					document.getElementById(value.replace('_QR', '')).style.backgroundColor = 'salmon';

					교체부품_tabledata.splice(i, 1);
					교체부품_table(교체부품_tabledata);
					return;
				}
			}

			교체부품_tabledata.push(add_item);
			교체부품_table(교체부품_tabledata);
		});
	});
}

async function 분해조립재제조_save() {
	var data = table_부품교환.getData();
	
	delete(분해조립재제조, 관리번호);
	await delay();

	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
		update_분해조립재제조(분해조립재제조, data[i]);
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

	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString().slice(0, 19);

	if(재제조_doc.분해조립 == '') 재제조_doc.분해조립 = now;

	update(BSA재제조, 재제조_doc);
	await delay();

}

function draw_color(data) {
	data.forEach((v) => {
		var id = v.품명;
		console.log(v);

		switch (차종) {
			case "DE":
			case "DE_EV":
			case "OS":
			case "OS_EV":
			case "SK3":
			case "SK3_EV":
			case "LK":
			case "LK_EV":
				id = '_A_' + id;
				break;

			case "PU":
			case "PU_EV":
			case "HR":
			case "HR_EV":
				id = '_B_' + id;
				break;

			case "CV":
			case "CV_EV":
			case "NE":
			case "NE_EV":
			case "LM":
			case "LM_EV":
				id = '_C_' + id;
				break;

				break;

			case "CS":
			case "CS_EV":
				id = '_D_' + id;
				break;

			default:
				alert("차종 정보를 확인해주세요");

				return;
				break;
		}
		document.getElementById(id).style.backgroundColor = 'red';
	});
}
