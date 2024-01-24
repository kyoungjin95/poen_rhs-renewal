var select_pos ='';
var 창고 = '';
var flag_마도_출하보관렉 = false;

async function racks_시작() {
	console.log("racks start");
	flag_racks = false;

	while(document.getElementById('_제주') == undefined) {
		await sleep(1);
	}

	var buttons = document.querySelectorAll('.rack');
	buttons.forEach((button) => {
		button.addEventListener('click', getButtonValue);
	});

	document.getElementById('_마도').style.display = 'none';
	document.getElementById('_마도출고').style.display = 'none';
	document.getElementById('_구장').style.display = 'none';
	//document.getElementById('_군포').style.display = 'none';
	document.getElementById('_제주').style.display = 'none';

	창고선택();

	if(flag_마도_출하보관렉 == true) {
		flag_마도_출하보관렉 = false;
		find_BSA재제조(BSA재제조, { EOL : {$ne : ''}, 렉번호 :  {$ne : ''} });
		await delay();

		var 마도출고_button = document.querySelectorAll('.rack');
		for(var i = 0; i < BSA재제조_v.length; i++) {
			for(var j = 0; 마도출고_buttons.length; j++) {
				if(BSA재제조_v[i].렉번호 == 마도출고_buttons[j].value) {
					마도출고_buttons[j].innerHTML = BSA재제조_v[i].관리번호 + '\n' + BSA재제조_v[i].RONo;
					마도출고_buttons[j].title = '차종: ' +  BSA재제조_v[i].차종 + '\n' + BSA재제조_v[i].품번;
				}
			}
		}
	}
}

function 창고선택() {
	if(창고 == '마도') {
		document.getElementById('_마도').style.display = 'block';
	} else if(창고 == '마도출고') {
		document.getElementById('_마도출고').style.display = 'block';
	} else if(창고 == '마도') {
		document.getElementById('_마도출고').style.display = 'block';
	} else if(창고 == '구장') {
		document.getElementById('_구장').style.display = 'block';
	} else if(창고 == '군포') {
		//document.getElementById('_군포').style.display = 'block';
	} else if(창고 == '제주') {
		document.getElementById('_제주').style.display = 'block';
	}
}

function getButtonValue(event) {
	const button = event.target;
	const value = button.value;
	console.log(value);

	var yes = confirm("선택 Rack 번호: " + value + "\n입고 정보를 입력하시겠습니까?");
	if (yes == true) {
		select_pos = value;

		if(창고 == '마도') {
			flag_입고 = true;
			loadPage('base/입고.html');
		} else if(창고 == '마도출고') {
			flag_상세입력 = true;
			loadPage('base/품목상세입력.html');
		} else if(창고 == '마도보관') {
			flag_EOL = true;
			loadPage('base/EOL.html');
		} else if(창고 == '군포') {
			//flag_군포재고 = true;
			//loadPage('base/군포재고.html');
		} else if(창고 == '구장') {
			flag_구장재고 = true;
			loadPage('base/구장재고.html');
		} else if(창고 == '제주') {
			flag_제주재고 = true;
			loadPage('base/제주재고.html');
		}
		창고 = '';
	}
}
