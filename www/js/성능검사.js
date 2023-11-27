async function 성능검사_시작(is재제조 = false) {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	
	flag_성능검사 = false;

	if(_management_id.value == '조회 버튼을 누르세요') _management_id.value =  관리번호;
	_검사자.value = worker;

	if(is재제조 == false) {
		if(_management_id.value.length == 0) return;
		console.log('load: ', _management_id.value);
		
		find(BSA재제조, _management_id.value);
		await delay();
		
		if(BSA재제조_v != null) {
			_재제조번호.value = BSA재제조_v.재제조번호;
		}
	} else {
		if(_재제조번호.value.length == 0) return;

		findOne_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value });
		await delay();

		if(BSA재제조_v != null) {
			_management_id.value = BSA재제조_v.관리번호;
		} else {
			_management_id.value = '찾지 못하였습니다';
		}
	}

	find(입고, _management_id.value);
	await delay();

	if(입고_v != null) {
		_구분.value = 입고_v.구분;
		_차종.value = 입고_v.차종;
		_품번.value = 입고_v.품번;
	} else {
		_구분.value = '';
		_차종.value = '';
		_품번.value = '';
	}

	find(성능검사, _management_id.value);
	await delay();

	if(성능검사_v != null) {
		_공정입고일.value = 성능검사_v.공정입고일;
		_용량평가.value = 성능검사_v.용량평가;
		_SOC60Percent.value = 성능검사_v.SOC60Percent;
		_DCIR.value = 성능검사_v.DCIR;
		_DCIR_Charge.value    = 성능검사_v.DCIR_Charge;
		_DCIR_Discharge.value =	성능검사_v.DCIR_Discharge;
		_공정완료일.value = 성능검사_v.공정완료일;
		_검사자.value = 성능검사_v.검사자;
	} else {
		_공정입고일.value = '0000-00-00T00:00'
		_용량평가.value = '';
		_SOC60Percent.value = '';
		_DCIR.value = '';
		_DCIR_Charge.value    = '';
		_DCIR_Discharge.value =	'';
		_공정완료일.value = '0000-00-00T00:00';
		_검사자.value = worker;
	}
}

async function 성능검사_save() {
	if(worker == '') return;
	while(_management_id == undefined) {
		await sleep(DELAY);
	}
	if(_management_id.value.length == 0) return;
	console.log('save: ', _management_id.value);

	var doc = JSON.parse(JSON.stringify(성능검사_doc));
	doc.관리번호 = _management_id.value.trim();
	doc.공정입고일 = _공정입고일.value;
	doc.용량평가 = _용량평가.value;
	doc.SOC60Percent = _SOC60Percent.value;
	doc.DCIR = _DCIR.value;
	doc.DCIR_Charge = _DCIR_Charge.value;
	doc.DCIR_Discharge = _DCIR_Discharge.value;
	doc.공정완료일 = _공정완료일.value;
	doc.검사자 = _검사자.value;
	
	update(성능검사, doc);
	await delay();
	
	console.log(update_count);
	console.log(insert_count);

	if(update_count > 0) {
		alert('업데이트 되었습니다');
	}

	if(insert_count > 0) {
		alert('저장 되었습니다');
	}

	find(BSA재제조, _management_id.value );
	await delay();

	if(BSA재제조_v == null) {
		var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
		_doc.관리번호 = _management_id.value.trim();
		_doc.성능검사투입일 ; _공정입고일.value;
		_doc.성능검사 = _공정완료일.value;

		update(BSA재제조, _doc);
		await delay();
	} else {
		var _doc = {
			관리번호 : _management_id.value,
			성능검사투입일 : _공정입고일.value,
			성능검사 : _공정완료일.value
		}

		update(BSA재제조, _doc);
		await delay();
	}

	await 공정단계자동입력(_management_id.value);
	//이전페이지();
}

async function 성능검사_list() {
	findOne_BSA재제조(BSA재제조, {공정단계 : { $ne : '출하' }, 분해조립 : { $ne : '' }, 성능검사 : { $eq : '' }, EOL : { $eq : '' } ,  소재지 : { $nin : ['공정대기', '품질대기'] }, 완전분해 : { $eq : ''}, 폐기 : { $eq : '' }, 출하 : { $eq : '' }, 구분 : { $nin: ['일반기타', '보증기타']} });
	await delay();

	if(BSA재제조_v != null) {
		find_BSA재제조(BSA재제조, { 공정단계 : { $ne : '출하' }, 분해조립 : { $ne : '' }, 성능검사 : { $eq : '' }, EOL : { $eq : '' } ,  소재지 : { $nin : ['공정대기', '품질대기'] }, 완전분해 : { $eq : ''}, 폐기 : { $eq : '' }, 출하 : { $eq : '' }, 구분 : { $nin: ['일반기타', '보증기타']} });
		await delay();
	}

	var table = new Tabulator("#grid_list", {
		layout: "resizableColumnFit",
		data: BSA재제조_v,
		height: "700px",

		columns: [
			{ title: "ID", field: "_id", sorter: "string", width: "180" },
			{ title: "관리번호", field: "관리번호", sorter: "string", width: "180" },
			{
				title: "재제조번호",
				field: "재제조번호",
				sorter: "string",
				width: "180",
			},
			{ title: "구분", field: "구분", sorter: "string", width: "180" },
			{ title: "차종", field: "차종", sorter: "string", width: "180" },
			{ title: "품번", field: "품번", sorter: "string", width: "180" },
			{ title: "RO_no", field: "RO_no", sorter: "string", width: "180" },
			{ title: "공정단계", field: "공정단계", sorter: "string", width: "180" },
			{ title: "소재지", field: "소재지", sorter: "string", width: "180" },
			{
				title: "적재No",
				field: "적재No",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "입고",
				field: "입고",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "제조투입",
				field: "제조투입",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "세척투입일",
				field: "세척투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "세척",
				field: "세척",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "기초검사투입일",
				field: "기초검사투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "기초검사",
				field: "기초검사",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "분해조립투입일",
				field: "분해조립투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "분해조립",
				field: "분해조립",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "성능검사투입일",
				field: "성능검사투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "성능검사",
				field: "성능검사",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{
				title: "EOL투입일",
				field: "EOL투입일",
				sorter: "string",
				width: "180",
			},
			{
				title: "EOL",
				field: "EOL",
				sorter: "string",
				visible: true,
				width: "180",
			}, //
			{ title: "출하검사", field: "출하검사", sorter: "string", width: "180" },
			{ title: "납품처", field: "납품처", sorter: "string", width: "180" },
			{ title: "출하", field: "출하", sorter: "string", width: "180" },
			{ title: "반품입고", field: "반품입고", sorter: "string", width: "180" },
			{ title: "재출하", field: "재출하", sorter: "string", width: "180" },
			{ title: "완전분해", field: "완전분해", sorter: "string", width: "180" },
			{
				title: "완전분해사유",
				field: "완전분해사유",
				sorter: "string",
				width: "180",
			},
			{ title: "폐기", field: "폐기", sorter: "string", width: "180" },
			{ title: "폐기사유", field: "폐기사유", sorter: "string", width: "180" },
			{
				title: "마지막충전일",
				field: "마지막충전일",
				sorter: "string",
				width: "180",
			},
			{ title: "출하예약", field: "출하예약", sorter: "string", width: "180" },
			{ title: "렉번호", field: "렉번호", sorter: "string", width: "180" },
		],
	});
	
	table.on("rowClick", async function (e, row) {
		console.log("selected 관리번호: ", row.getData().관리번호);

		_management_id.value = row.getData().관리번호;
		성능검사_시작();
	});
}
