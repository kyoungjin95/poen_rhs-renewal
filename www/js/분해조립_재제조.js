var 분해조립_재제조_tabledata = [];
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

	flag_불량의심부품 = false;
	var 내부 = false;
	await 불량의심부품_시작(내부);

	await 교체부품_table([]);
}

function 교체부품_table(tabledata) {
	var table_부품교환 = new Tabulator("#grid_교체부품", {
		layout: "resizableColumnFit",
		height: 1500,
		data: tabledata,

		columns: [
			{ title: "품명", field: "품명", sorter: "string" },
			{ title: "교체전 품번", field: "교체전품번", sorter: "string" },
			{ title: "교체전 QR", field: "교체전QR", sorter: "string" },
			{ title: "신품/고품", field: "신품고품", editor: "input"},
			{ title: "교체후 품번", field: "교체후품번", editor: "input" },
			{ title: "교체후 QR", field: "교체후QR", editor: "input" },
			{ title: "교체사유", field: "교체사유", editor: "textarea" },
		]
	});
}

function choisenButton() {
	var buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const value = button.getAttribute("value");
			if (value == null) return;
			console.log("value:", value);

			button.style.backgroundColor = 'red';

			var add_item = {
				품명 : '',
				교체전품번 : document.getElementById(value.replace('QR', '품번')).value,
				교체전QR : document.getElementById(value).value,
				신품고품 : '',
				교체후품번 : '',
				교체후QR : '',
				교체사유 : ''
			};

			

		});
	});
