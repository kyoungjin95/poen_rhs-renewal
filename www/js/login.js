async function login() {
	const _id = document.getElementById('_id');
	const _passwd = document.getElementById('_passwd');
	if(_id.value == '' || _passwd.value == '') return;

	const hash = CryptoJS.MD5(_passwd.value); 	
	console.log('hash:', hash.toString());

	count(계정, {id: _id.value, passwd: hash.toString()});
	await delay();
	if(doc_count > 0) {
		if(worker == '') {
			worker = _id.value;
			sessionStorage.setItem('worker',  worker);
			alert('로그인 성공');
			setTimeout(function() {
				loadPage('dashboard.html');
				start_repeat_대시보드();
				대시보드_시작();
			}, 1000);
		} else {
			worker = '';
			sessionStorage.clear();
			const _login_info = document.getElementById('login_info');
			alert('로그아웃 성공');
		}
		change_label();
	} else {
		alert('계정 정보가 맞지 않습니다');
	}
}

async function change_label() {
	await sleep(500);
	while(document.getElementById('login_label') == undefined) {
		await sleep(DELAY);
	}
	var _worker = sessionStorage.getItem('worker');
	if(_worker != '' && _worker != null) worker = _worker;
	console.log('worker in change label :', worker);
	const _label = document.getElementById('login_label');
	const _login_btn = document.getElementById('login_btn');
	const _login_info = document.getElementById('login_info');
	if(worker == '' || worker == 'null')  {
		worker = '';
		_label.innerHTML = 'Login';
		_login_btn.innerHTML = '로그인';
		_login_info.innerHTML = '';
	} else {
		_label.innerHTML = 'Logout';
		_login_btn.innerHTML = '로그아웃';
		_login_info.innerHTML = worker + ' / 로그인 中  ';
	}
}
