function 수량집계_시작() {
	flag_수량집계 = false;
	if(worker == '') return;

	수량집계_조회();
}
function 수량집계_기간조회() {
	var 집계_today_begin = document.getElementById('_검색일_from').value + 'T00:00:000Z';;
	var 집계_today_end = document.getElementById('_검색일_to').value + 'T24:00:000Z';;
	
	수량집계_조회(집계_today_begin, 집계_today_end);
}

async function 수량집계_조회(집계_today_begin = '', 집계_today_end = '') {
	await BSA_info();
	await BMA_info();
	await 부품_info();
}

async function BSA_info()
{
	var counts = [];
	var types_list = [];
	
	count(BSA재제조, { 품번 : { $exists: true}});
	await delay();

	if(doc_count > 0) {
		find_BSA재제조(BSA재제조, { 품번 : { $exists: true}});
		await delay();

		find_array.forEach(function(info) {
			if(types_list.indexOf(info.품번) < 0) {
				types_list.push(info.품번);

				var count = {
					입고 : 0,
					작업 : 0,
					완료 : 0,
					출고 : 0
				}
				
				switch(info.공정단계) {
					case '입고' :
						count.입고++;
						break;

					case '제조완료' :
						count.완료++;
						break;

					case '출하' :
						count.출고++;
						break;

					case '세척' :
					case '기초검사' :
					case '분해조립' :
					case '성능검사' :
					case 'EOL' :
					case '출하검사' :
						count.작업++;
						break;
					
					default :
						console.log(info.공정단계);
						break;
				}

				counts.push(count);
			} else {
				var no = types_list.indexOf(info.품번);

				switch(info.공정단계) {
					case '입고' :
						counts[no].입고++;
						break;

					case '제조완료' :
						counts[no].완료++;
						break;

					case '출하' :
						counts[no].출고++;
						break;

					case '세척' :
					case '기초검사' :
					case '분해조립' :
					case '성능검사' :
					case 'EOL' :
					case '출하검사' :
						counts[no].작업++;
						break;
					
					default :
						console.log(info.공정단계);
						break;
				}
			}
		});
	}

	BSA재고(types_list, counts);
}

async function BMA_info() {
	var counts = [];
	var types_list = [];

	count(고품정보, { 품명 : 'BMA' });
	await delay();

	if(doc_count > 0) {
		find_고품정보(고품정보, { 품명 : 'BMA' });
		await delay();

		find_array.forEach(function(info) {
			if(types_list.indexOf(info.품번) < 0) {
				types_list.push(info.품번);

				var count = {
					입고 : 0,
					출고 : 0
				}
				
				if(info.등록일 != '' && info.등록일 != undefined) {
					count++;
				}

				if(info.사용일 != '' && info.사용일 != undefined) {
					count++;
				}

				counts.push(count);
			} else {
				var no = types_list.indexOf(info.품번);

				if(info.등록일 != '' && info.등록일 != undefined) {
					counts[no]++;
				}

				if(info.사용일 != '' && info.사용일 != undefined) {
					count[no]++;
				}
			}
		});
	}

	BMA재고(types_list, counts);
}

async function 부품_info() {
	var 품명 = [];
	var 품명_info = [];

	count(자재입출고, { QR : { $exists: true}});
	await delay();

	if(doc_count > 0) {
		find_신품정보(자재입출고, { QR : { $exists : true } });
		await delay();
		
		var all_data = JSON.parse(JSON.stringify(find_array));
		all_data.forEach(async function(infos) {
			if(품명.indexOf(infos.품명) < 0) {
				품명.push(infos.품명);
			}
		});
			
		품명.forEach(async function(info_품명) {
			var counts = [];
			var types_list = [];

			find_신품정보(자재입출고, { 품명 : info_품명 });
			await delay();
			console.log(find_array);

			find_array.forEach(function(info) {
				if(types_list.indexOf(info.품번) < 0) {
					types_list.push(info.품번);

					var count = {
						입고 : 0,
						출고 : 0
					}

					if(info.구분 == '입고') count.입고 = Number(info.수량);
					if(info.구분 == '출고') count.출고 = Number(info.수량);

					counts.push(count);
				} else {
					var no = types_list.indexOf(info.품번);

					if(info.구분 == '입고') counts[no].입고 += Number(info.수량);
					if(info.구분 == '출고') counts[no].출고 += Number(info.수량);
				}
			});

			var data = {
				types_list : types_list,
				counts : counts
			}

			품명_info.push(data);

			console.log(data);
		});
	}

	//부품재고(품명, 품명_info);
}

function BSA재고(품번_list, datas) {
	var BSA집계_datas = [];
	
	for(var i = 0; i <  품번_list.length; i++) {
		var _datas = {
			품번 : 품번_list[i],
			입고수 : datas[i].입고,
			작업수 : datas[i].작업,
			출고수 : datas[i].출고,
			완료수 : datas[i].완료
		}
		BSA집계_datas.push(_datas);
	}

	var table_BSA = new Tabulator("#grid_BSA집계", {
		layout: "resizableColumnFit",
                data: BSA집계_datas,
		height: '700px',
		
		columns:[
			{title:"품번", field:"품번", sorter:"string", width:'180'},
			{title:"입고수", field:"입고수", sorter:"string", width:'180'},
			{title:"작업수", field:"작업수", sorter:"string", width:'180'},
			{title:"출고수", field:"출고수", sorter:"string", width:'180'},
			{title:"완료수", field:"완료수", sorter:"string", width:'180'},
		],
	});
}

function BMA재고(품번_list, datas) {
	var BMA집계_datas = [];
	
	for(var i = 0; i <  품번_list.length; i++) {
		var _datas = {
			품번 : 품번_list[i],
			입고수 : datas[i].입고,
			출고수 : datas[i].출고,
		}
		BMA집계_datas.push(_datas);
	}

	if(BMA집계_datas.length == 0) {
		console.log('BMA재고 EMPTY'); 
		return;
	}

	var table_BMA = new Tabulator("#grid_BMA집계", {
		layout: "resizableColumnFit",
                data: BMA집계_datas,
		height: '700px',
		
		columns:[
			{title:"품번", field:"품번", sorter:"string", width:'180'},
			{title:"입고수", field:"입고수", sorter:"string", width:'180'},
			{title:"출고수", field:"출고수", sorter:"string", width:'180'},
		],
	});
}

function 부품재고(품명, data_list) {
	var 부품집계_datas = [];
	var 품명_list = [];
	var datas = [];
	
	품명_list = 품명;
	datas = data_list;

	for(var i = 0; i < 품명_list.length; i++) {
		for(var k = 0; k < datas[i].types_list.length; k++) {
			var _datas = {
				품명 : 품명_list[i],
				품번 : datas[i].types_list[k],
				입고수 : datas[i].counts[k].입고,
				출고수 : datas[i].counts[k].출고
			}

			부품집계_datas.push(_datas);
		}
	}

	if(부품집계_datas.length == 0) {
		console.log('부품재고 EMPTY'); 
		return;
	}

	var table_BMA = new Tabulator("#grid_부품집계", {
		layout: "resizableColumnFit",
                data: 부품집계_datas,
		height: '700px',
		
		columns:[
			{title:"품명", field:"품명", sorter:"string", width:'180'},
			{title:"품번", field:"품번", sorter:"string", width:'180'},
			{title:"입고수", field:"입고수", sorter:"string", width:'180'},
			{title:"출고수", field:"출고수", sorter:"string", width:'180'},
		],
	});
}
