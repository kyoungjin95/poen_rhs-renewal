async function 재충전정보_시작() {
	flag_재충전정보 = false;
	if(worker == '') return;
	var _loaded = document.getElementById('grid_재충전정보');
	while(_loaded == undefined) {
		await sleep(DELAY);
	}
	
	alert_allow = false;

	var tabledata = [];
	var DateTime = luxon.DateTime;
	var seoul = DateTime.local().setZone("Asia/Seoul");
	var now = seoul.toString();
	var year = now.substr(0, 4);
	var month = String(Number(now.substr(5, 2)) - 3).padStart(2, '0');
	var day = now.substr(8, 2);
	var 기준일 = year + '-' + month + '-' + day + 'T00:00:00Z'

	console.log('검색 기준일:', 기준일, now);
	count(BSA재제조, { 마지막충전일 : { $lte : 기준일, $ne : '' }, 공정단계 : { $ne : '출하' }});
	await delay();
	await sleep(100);

	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_query(BSA재제조, { 마지막충전일 : { $lte : 기준일, $ne : '' }, 공정단계 : { $ne : '출하' }});
		await delay();

		console.log('result:', find_array);

		tabledata = find_array;
		//find_array.forEach(function(data) {
		//	var info = {
		//		관리번호 : data.관리번호,
		//		재제조번호 : data.재제조번호,
		//		마지막충전일 : data.마지막충전일.substring(0, 10) + ' ' + data.마지막충전일.substring(11, 16)
		//	}

		//	tabledata.push(info);
		//});
	}

	var table_고품정보 = new Tabulator("#grid_재충전정보", {
		layout: "resizableColumnFit",
		height:1500,
		data:tabledata, 
		//autoColumns:true,
		
		columns:[
			{title:"관리번호", field:"관리번호", sorter:"string"},
			{title:"재제조번호", field:"재제조번호", sorter:"string"},
			{title:"마지막충전일", field:"마지막충전일", sorter:"string"},
		]
	});
}
