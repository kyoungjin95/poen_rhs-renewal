async function 재충전정보_시작() {
	flag_재충전정보 = false;
	if(worker == '') return;
	var _loaded = document.getElementById('grid_재충전정보');
	while(_loaded == undefined) {
		await sleep(DELAY);
	}

	var tabledata = [];
	var now = new Date();
	var 기준일 = new Date(now.setMonth(now.getMonth() - 3));

	count(BSA재제조, { 마지막충전일 : { $lte : 기준일, $ne : '' }});
	await delay();
	await sleep(100);

	console.log('doc_count: ', doc_count);
	if(doc_count >= 1) {
		find_query(BSA재제조, { 마지막충전일 : { $lte : 기준일, $ne : '' }});
		await delay();
		//tabledata = find_array;
		find_array.forEach(function(data) {
			var info = {
				관리번호 : data.관리번호,
				재제조번호 : data.재제조번호,
				마지막충전일 : data.마지막충전일.substring(0, 10) + ' ' + data.마지막충전일.substring(11, 16)
			}

			tabledata.push(info);
		});
	}

	var table_고품정보 = new Tabulator("#grid_재충전정보", {
		layout: "resizableColumnFit",
		height:1500,
		data:tabledata, 
		autoColumns:true,
	});
}
