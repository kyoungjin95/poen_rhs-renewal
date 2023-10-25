async function 수량집계_시작() {
	flag_수량집계 = false;
	if (worker == '') return;

	const grid_부품집계 = document.getElementById('grid_부품집계');
	while( grid_부품집계 == undefined) {
		await sleep(DELAY);
	}

	수량집계_조회();
}

function 수량집계_year() {
		var DateTime = luxon.DateTime;
		var seoul = DateTime.local().setZone("Asia/Seoul");
		var now = seoul.toString();
		var s_day = now.slice(0, 5) + '01-01';
		var e_day = now.slice(0, 5) + '12-31';

		document.getElementById('_검색일_from').value = s_day;
		document.getElementById('_검색일_to').value = e_day;
}

function 수량집계_month() {
		var DateTime = luxon.DateTime;
		var seoul = DateTime.local().setZone("Asia/Seoul");
		var now = seoul.toString();
		var s_day = now.slice(0, 8) + '01';
		var e_day;
		if(now.slice(5, 2) in ['01', '03', '05', '07', '08', '10', '12']) e_day = now.slice(0, 8) + '31';
		else if(now.slice(5, 2) == '02') e_day = now.slice(0, 8) + '28';
		else e_day = now.slice(0, 8) + '30';

		document.getElementById('_검색일_from').value = s_day;
		document.getElementById('_검색일_to').value = e_day;
}

function 수량집계_기간조회() {
	var 집계_today_begin = document.getElementById('_검색일_from').value + 'T00:00:000Z';;
	var 집계_today_end = document.getElementById('_검색일_to').value + 'T23:59:000Z';;
 	var 구분 = '';

	if(document.getElementById('_검색일_from').value == '') 집계_today_begin = '';
	if(document.getElementById('_검색일_to').value == '') 집계_today_end = '';
	
	if(document.getElementById('_일반').checked == true) 구분 = '일반';
	if(document.getElementById('_보증').checked == true) 구분 = '보증';
	if(document.getElementById('_all').checked == true) 구분 = '';

	console.log('begin:', 집계_today_begin, 'end:', 집계_today_end, '구분:', 구분);
	
	수량집계_조회(집계_today_begin, 집계_today_end, 구분);
}

async function 수량집계_조회(집계_today_begin = '', 집계_today_end = '', 구분 = 'all') {
	var begin = 집계_today_begin;
	var end = 집계_today_end;

	await BSA_info(begin, end, 구분);
	await BMA_info(begin, end, 구분);
	await 자재재료_info(begin, end, 구분);
	await 부품_info(begin, end, 구분);
}

async function BSA_info(begin = '', end = '', 구분 = 'all') {
	var counts = [];
	var types_list = [];

	if (begin == '' || end == '' || 구분 == 'all') {
		count(BSA재제조, { 품번: { $exists: true } });
		await delay();
	} else {
		count(BSA재제조, { 품번: { $exists: true }, 입고: { $gte: begin, $lte: end }, 구분 : { $eq : 구분 }});
		await delay();
	}

	if (doc_count > 0) {
		if (begin == '' || end == '' || 구분 == 'all') {
			find_BSA재제조(BSA재제조, { 품번: { $exists: true } });
			await delay();
		} else {
			find_BSA재제조(BSA재제조, { 품번: { $exists: true }, 입고: { $gte: begin, $lte: end }, 구분 : { $eq : 구분 }});
			await delay();
		}

		find_array.forEach(function (info) {
			if (types_list.indexOf(info.품번) < 0) {
				types_list.push(info.품번);

				var count = {
					입고: 0,
					작업: 0,
					완료: 0,
					출고: 0
				}

				switch (info.공정단계) {
					case '입고':
						count.입고++;
						break;

					case '제조완료':
						count.완료++;
						break;

					case '출하':
						count.출고++;
						break;

					case '세척':
					case '기초검사':
					case '분해조립':
					case '성능검사':
					case 'EOL':
					case '출하검사':
						count.작업++;
						break;

					default:
						console.log(info.공정단계);
						break;
				}

				counts.push(count);
			} else {
				var no = types_list.indexOf(info.품번);

				switch (info.공정단계) {
					case '입고':
						counts[no].입고++;
						break;

					case '제조완료':
						counts[no].완료++;
						break;

					case '출하':
						counts[no].출고++;
						break;

					case '세척':
					case '기초검사':
					case '분해조립':
					case '성능검사':
					case 'EOL':
					case '출하검사':
						counts[no].작업++;
						break;

					default:
						console.log(info.공정단계);
						break;
				}
			}
		});
	}

	BSA재고(types_list, counts);
}

async function BMA_info(begin = '', end = '', 구분 = 'all') {
	var counts = [];
	var types_list = [];

	if (begin == '' || end == '' || 구분 == 'all') {
		count(고품정보, { 품명: 'BMA', 폐기여부 : '폐기' });
		await delay();
	} else {
		count(고품정보, { 품명: 'BMA', 폐기여부 : '폐기' , 등록일: { $gte: begin, $lte: end }, 구분 : 구분 });
		await delay();
	}

	if (doc_count > 0) {
		if (begin == '' || end == '' || 구분 == 'all') {
			find_고품정보(고품정보, { 품명: 'BMA', 폐기여부 : '폐기'  });
			await delay();
		} else {
			find_고품정보(고품정보, { 품명: 'BMA', 폐기여부 : '폐기' , 등록일: { $gte: begin, $lte: end }, 구분 : 구분 });
			await delay();
		}

		find_array.forEach(function (info) {
			if (types_list.indexOf(info.품번) < 0) {
				types_list.push(info.품번);

				var count = {
					입고: 0,
					출고: 0
				}

				if (info.등록일 != '' && info.등록일 != undefined) {
					count.입고++;
				}

				if (info.사용일 != '' && info.사용일 != undefined) {
					count.출고++;
				}

				counts.push(count);
			} else {
				var no = types_list.indexOf(info.품번);

				if (info.등록일 != '' && info.등록일 != undefined) {
					counts[no].입고++;
				}

				if (info.사용일 != '' && info.사용일 != undefined) {
					counts[no].출고++;
				}
			}
		});
	}

	BMA재고(types_list, counts);
}

async function 자재재료_info(begin = '', end = '', 구분 = 'all') {
	var counts = [];
	var types_list = [];
	var 품명_list = [];

	if (begin == '' || end == '' || 구분 == 'all') {
		count(고품정보, { 폐기여부: '자재' });
		await delay();
	} else {
		count(고품정보, { 폐기여부 : '자재', 등록일: { $gte: begin, $lte: end }, 구분 : 구분 });
		await delay();
	}

	if (doc_count > 0) {
		if (begin == '' || end == '' || 구분 == 'all') {
			find_고품정보(고품정보, { 폐기여부: '자재' });
			await delay();
		} else {
			find_고품정보(고품정보, { 폐기여부 : '자재', 등록일: { $gte: begin, $lte: end }, 구분 : 구분 });
			await delay();
		}

		find_array.forEach(function (info) {
			if (types_list.indexOf(info.품번) < 0) {
				types_list.push(info.품번);
				품명_list.push(info.품명);

				var count = {
					입고: 0,
					출고: 0
				}

				if (info.등록일 != '' && info.등록일 != undefined) {
					count.입고++;
				}

				if (info.사용일 != '' && info.사용일 != undefined) {
					count.출고++;
				}

				counts.push(count);
			} else {
				var no = types_list.indexOf(info.품번);

				if (info.등록일 != '' && info.등록일 != undefined) {
					counts[no].입고++;
				}

				if (info.사용일 != '' && info.사용일 != undefined) {
					counts[no].출고++;
				}
			}
		});
	}

	자재재고(품명_list, types_list, counts);
}

async function 부품_info(begin = '', end = '', 구분 = 'all') {
	var 품명 = [];
	var 부품정보 = [];

	if (begin == '' || end == '' ) {
		count(자재입출고, { QR: { $exists: true } });
		await delay();
	} else {
		count(자재입출고, { QR: { $exists: true }, 날짜: { $gte: begin, $lte: end }});
		await delay();
	}

	if (doc_count > 0) {
		if (begin == '' || end == '') {
			find_신품정보(자재입출고, { QR: { $exists: true } });
			await delay();
		} else {
			find_신품정보(자재입출고, { QR: { $exists: true }, 날짜: { $gte: begin, $lte: end }});
			await delay();
		}
	}

	
	find_array.forEach(async function (infos) {
		if (품명.indexOf(infos.품명) < 0) {
			품명.push(infos.품명);
		}
	});

	for (var i = 0; i < 품명.length; i++) {
		var counts = [];
		var types_list = [];

		if (begin == ''|| end == '') {
			find_신품정보(자재입출고, { 품명: 품명[i], QR: { $exists: true }});
			await delay();
		} else {
			find_신품정보(자재입출고, { 품명: 품명[i], QR: { $exists: true }, 날짜: { $gte: begin, $lte: end }});
			await delay();
		}
		console.log(find_array);

		find_array.forEach(function (info) {
			var 수량 = parseInt(info.수량);

			if (types_list.indexOf(info.품번) < 0) {
				types_list.push(info.품번);

				var count = {
					입고: 0,
					출고: 0
				}

				if (info.구분 == '입고') count.입고 = 수량;
				if (info.구분 == '출고') count.출고 = 수량;

				counts.push(count);
			} else {
				var no = types_list.indexOf(info.품번);

				if (info.구분 == '입고') counts[no].입고 = parseInt(counts[no].입고) + 수량;
				if (info.구분 == '출고') counts[no].출고 = parseInt(counts[no].출고) + 수량;
			}
		});
		console.log('품명:', 품명[i]);
		console.log('Type:', types_list);
		console.log('Counts:', counts);

		var data = {
			품명: 품명[i],
			types_list: types_list,
			counts: counts
		}

		부품정보.push(data);

		console.log(data);
	}

	부품재고(부품정보);
}


var table_BSA;
function BSA재고(품번_list, datas) {
	var BSA집계_datas = [];

	for (var i = 0; i < 품번_list.length; i++) {
		var _datas = {
			품번: 품번_list[i],
			입고수: datas[i].입고,
			작업수: datas[i].작업,
			출고수: datas[i].출고,
			완료수: datas[i].완료
		}
		BSA집계_datas.push(_datas);
	}
	
	table_BSA = new Tabulator("#grid_BSA집계", {
		layout: "resizableColumnFit",
		data: BSA집계_datas,
		height: '700px',

		columns: [
			{ title: "품번", field: "품번", sorter: "string", width: '180' },
			{ title: "입고수", field: "입고수", sorter: "string", width: '180' },
			{ title: "작업수", field: "작업수", sorter: "string", width: '180' },
			{ title: "출고수", field: "출고수", sorter: "string", width: '180' },
			{ title: "완료수", field: "완료수", sorter: "string", width: '180' },
		],
	});
}

var table_BMA;
function BMA재고(품번_list, datas) {
	var BMA집계_datas = [];

	for (var i = 0; i < 품번_list.length; i++) {
		var _datas = {
			품번: 품번_list[i],
			입고수: datas[i].입고,
			출고수: datas[i].출고,
			합계: (datas[i].입고 - datas[i].출고)
		}
		BMA집계_datas.push(_datas);
	}

	if (BMA집계_datas.length == 0) {
		console.log('BMA재고 EMPTY');
		return;
	}

	table_BMA = new Tabulator("#grid_BMA집계", {
		layout: "resizableColumnFit",
		data: BMA집계_datas,
		height: '400px',

		columns: [
			{ title: "품번", field: "품번", sorter: "string", width: '180' },
			{ title: "입고수", field: "입고수", sorter: "string", width: '180' },
			{ title: "출고수", field: "출고수", sorter: "string", width: '180' },
			{ title: "합계", field: "합계", sorter: "string", width: '180' },
		],
	});
}

var table_자재재고;
function 자재재고(품명_list, 품번_list, datas) {
	var 자재집계_datas = [];

	for (var i = 0; i < 품번_list.length; i++) {
		var _datas = {
			품명: 품명_list[i],
			품번: 품번_list[i],
			입고수: datas[i].입고,
			출고수: datas[i].출고,
			합계: (datas[i].입고 - datas[i].출고)
		}
		자재집계_datas.push(_datas);
	}

	if (자재집계_datas.length == 0) {
		console.log('자재재고 EMPTY');
		return;
	}

	table_자재재고 = new Tabulator("#grid_자재집계", {
		layout: "resizableColumnFit",
		data: 자재집계_datas,
		height: '400px',

		columns: [
			{ title: "품명", field: "품명", sorter: "string", width: '180' },
			{ title: "품번", field: "품번", sorter: "string", width: '180' },
			{ title: "입고수", field: "입고수", sorter: "string", width: '180' },
			{ title: "출고수", field: "출고수", sorter: "string", width: '180' },
			{ title: "합계", field: "합계", sorter: "string", width: '180' },
		],
	});
}

var table_BMA;
function 부품재고(부품정보) {
	var 부품집계_datas = [];

	for (var i = 0; i < 부품정보.length; i++) {
		for (var j = 0; j < 부품정보[i].types_list.length; j++) {
			var _datas = {
				품명: 부품정보[i].품명,
				품번: 부품정보[i].types_list[j],
				입고수: 부품정보[i].counts[j].입고,
				출고수: 부품정보[i].counts[j].출고,
				합계: 부품정보[i].counts[j].입고 + 부품정보[i].counts[j].출고
			}

			부품집계_datas.push(_datas);
		}
	}

	if (부품집계_datas.length == 0) {
		console.log('부품재고 EMPTY');
		return;
	}

	table_BMA = new Tabulator("#grid_부품집계", {
		layout: "resizableColumnFit",
		data: 부품집계_datas,
		height: '700px',

		columns: [
			{ title: "품명", field: "품명", sorter: "string", width: '180' },
			{ title: "품번", field: "품번", sorter: "string", width: '180' },
			{ title: "입고수", field: "입고수", sorter: "string", width: '180' },
			{ title: "출고수", field: "출고수", sorter: "string", width: '180' },
			{ title: "합계", field: "합계", sorter: "string", width: '180' },
		],
	});
}

function 수량집계_export_to_excel() {
	var sheets = {
		'BSA집계' : true,
		'BMA집계' : table_BMA,
		'자재집계' : table_자재재고,
		'부품집계' : table_BMA,
	};
	table_BSA.download("xlsx", "RHMS_수량집계.xlsx", {sheets:sheets});
	
}
