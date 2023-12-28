var select_pos ='';
var 창고 = '';
function racks_시작() {
	flag_racks = false;
	console.log('racks start');

	var buttons = document.querySelectorAll('.rack');
	buttons.forEach((button) => {
	    button.addEventListener('click', getButtonValue);
	});

	창고선택();
}

function 창고선택() {
	if(창고 == '마도') {
		document.getElementById('_마도').style.display = 'block';
		document.getElementById('_구장').style.display = 'none';
		//document.getElementById('_군포').style.display = 'none';
		document.getElementById('_제주').style.display = 'none';
	} else if(창고 == '구장') {
		document.getElementById('_마도').style.display = 'none';
		document.getElementById('_구장').style.display = 'block';
		//document.getElementById('_군포').style.display = 'none';
		document.getElementById('_제주').style.display = 'none';
	} else if(창고 == '군포') {
		document.getElementById('_마도').style.display = 'none';
		document.getElementById('_구장').style.display = 'none';
		//document.getElementById('_군포').style.display = 'block';
		document.getElementById('_제주').style.display = 'none';
	} else if(창고 == '제주') {
		document.getElementById('_마도').style.display = 'none';
		document.getElementById('_구장').style.display = 'none';
		//document.getElementById('_군포').style.display = 'none';
		document.getElementById('_제주').style.display = 'block';
	}
}

function getButtonValue(event) {
	const button = event.target;
	const value = button.value;
	console.log(value);

	var yes = confirm('선택 Rack 번호: ' + value + '\n입고 정보를 입력하시겠습니까?');
	if(yes == true) {
		select_pos = value;

		if(창고 == '마도') {
			flag_입고 = true;
			loadPage('base/입고.html');
		} else if(창고 == '군포') {
			//flag_군포재고 = true;
			//loadPage('base/군포재고.html');
		} else if(창고 == '구장') {
			flag_구장재고 = true;
			loadPage('base/구장재고.html');
		} else if(창고 == '군포') {
			flag_제주재고 = true;
			loadPage('base/제주재고.html');
		}
		창고 = '';
	}
}
