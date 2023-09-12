async function login() {
	const _id = document.getElementById('_id');
	const _passwd = document.getElementById('_passwd');
	if(_id.value == '' || _passwd.value == '') return;
	
	;

	const hash = CryptoJS.MD5(_passwd.value); 	

	count(계정, { id: _id.value, passwd: hash.toString() });
	await delay();
	if(doc_count > 0) {
		if(worker == '') {
			worker = _id.value;
			find_계정(계정, { id: _id.value })
			await delay()
			console.log('test:', find_array);
			level = find_array[0].level;
			//sessionStorage.setItem('worker',  worker);
			sessionStorage.setItem('level',  level);

			alert('로그인 성공');
			setTimeout(async function() {
				loadPage('base/dashboard.html');
				start_repeat_대시보드();
				대시보드_시작();
				if(level == '관리자') admin_btn.style.display = 'block';
				부품재고_btn.style.display = 'block';
				//if(level == '부품관리자') 부품재고_btn.style.display = 'block';
				
				var DateTime = luxon.DateTime;
				var seoul = DateTime.local().setZone("Asia/Seoul");
				var now = seoul.toString();
				var year = now.substr(0, 4);
				var month = String(Number(now.substr(5, 2)) - 3).padStart(2, '0');
				var day = now.substr(8, 2);
				var 기준일 = year + '-' + month + '-' + day + 'T00:00:00Z'

				count(BSA재제조, { 마지막충전일 : { $lte : 기준일, $ne : '' }, 공정단계 : { $ne : '출하'}});
				await delay();

				console.log('recharge_count: ', doc_count);
				if(doc_count >= 1) {
					alert('재충전이 필요한 BSA가 있습니다.');
				}
			}, 1000);
		} else if(worker == _id.value) {
			worker = '';
			level = '';
			sessionStorage.clear();
			admin_btn.style.display = 'none';
			부품재고_btn.style.display = 'none';
			const _login_info = document.getElementById('login_info');
			alert('로그아웃 성공');
		}
		change_label();
	} else {
		alert('계정 정보가 맞지 않습니다');
	}
}

async function change_label() {
	while(document.getElementById('login_label') == undefined) {
		await sleep(DELAY);
	}
	await sleep(10);
	const _label = document.getElementById('login_label');
	const _login_btn = document.getElementById('login_btn');
	const _login_info = document.getElementById('login_info');
	_label.innerHTML = 'Login';

	if(_login_btn.innerHTML == '로그아웃') {
		sessionStorage.clear();
		worker = '';
		level = '';
		admin_btn.style.display = 'none';
		_label.innerHTML = 'Login';
		_login_btn.innerHTML = '로그인';
		_login_info.innerHTML = '';
		const _admin_btn = document.getElementById('부품재고_btn');
		_admin_btn.style.display = 'none';
		const _부품재고_btn = document.getElementById('부품재고_btn');
		_부품재고_btn.style.display = 'none';
	}

	var _worker = sessionStorage.getItem('worker');
	level = sessionStorage.getItem('level');
	if(_worker != '' && _worker != null) worker = _worker;
	console.log('worker in change label :', worker);
	if(worker == '' || worker == 'null' || worker == null)  {
		worker = '';
		level = '';
		admin_btn.style.display = 'none';
		_label.innerHTML = 'Login';
		_login_btn.innerHTML = '로그인';
		_login_info.innerHTML = '';
	} else {
		_label.innerHTML = 'Login';
		_login_btn.innerHTML = '로그아웃';
		_login_info.innerHTML = worker + ' / 로그인 中  ';
	}

	count(계정, { id: 'admin' });
	await delay();
	if(doc_count == 0 || level == 'admin') {
		admin_btn.style.display = 'block';
	}
}
