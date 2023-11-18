const MAX_SLOT = 15;
var imgBase64Str = new Array(15);
var pic_step;
var slot;
var image_count = 0;
var camera_img1;
var camera_img2; 
var camera_img3; 
var camera_img4; 
var camera_img5; 
var camera_img6; 
var camera_img7; 
var camera_img8; 
var camera_img9; 
var camera_img10;
var camera_img11;
var camera_img12;
var camera_img13;
var camera_img14;
var camera_img15;
var col;
var result;
var doc;

function pic_load(e) {
	if(worker == '') return;
	//load_element();
	
	image_count = e.length;
	if(image_count > 15) {
		image_count = 15;
	}
	
	var file = e;

	if(image_count == 1) {
		if(slot == undefined) slot = '1';

		eval('camera_img' + slot +'.src = URL.createObjectURL(file);');
		getDataUrl(file, (slot - 1));

		return;
	}

	for(var i = 1; i <= image_count; i++) {
		eval('camera_img' + i +'.src = URL.createObjectURL(file[' + (i - 1) + ']);');
		getDataUrl(file[i -1], (i - 1));
	}
}

async function 세척_사진촬영(m_id) {
	if(worker == '') return;
	loadPage('base/camera.html'); 
	await sleep(100);

	var mid = document.getElementById('_pic_management_id');
	var step_sel = document.getElementById('camera_step');

	mid.value = m_id;
	pic_step = '세척';
	col = 세척_pic;
	doc = 세척_pic_doc;

	step_sel.options[2].selected = true;

	pic_loading();
}

async function 기초검사_사진촬영(m_id) {
	if(worker == '') return;
	loadPage('base/camera.html'); 
	await sleep(DELAY);

	var mid = document.getElementById('_pic_management_id');
	var step_sel = document.getElementById('camera_step');

	mid.value = m_id;
	pic_step = '기초검사';
	col = 기초검사_pic;
	doc = 기초검사_pic_doc;

	step_sel.options[3].selected = true;

	pic_loading();
}

async function EOL_사진촬영(m_id) {
	if(worker == '') return;
	loadPage('base/camera.html'); 
	await sleep(100);

	var mid = document.getElementById('_pic_management_id');
	var step_sel = document.getElementById('camera_step');

	mid.value = m_id;
	pic_step = 'EOL';
	col = EOL_pic;
	doc = EOL_pic_doc;

	step_sel.options[6].selected = true;

	pic_loading();
}

async function pic_save() {
	if(worker == '') return;
	var mid = document.getElementById('_pic_management_id');
	if(mid.value.length == 0) {
		alert('관리번호를 입력하세요.');
		return;
	}

	doc.관리번호 = mid.value.trim();
	doc.pic1 = imgBase64Str[0];
	doc.pic2 = imgBase64Str[1];
	doc.pic3 = imgBase64Str[2];
	doc.pic4 = imgBase64Str[3];
	doc.pic5 = imgBase64Str[4];
	doc.pic6 = imgBase64Str[5];
	doc.pic7 = imgBase64Str[6];
	doc.pic8 = imgBase64Str[7];
	doc.pic9 = imgBase64Str[8];
	doc.pic10 = imgBase64Str[9];
	doc.pic11 = imgBase64Str[10];
	doc.pic12 = imgBase64Str[11];
	doc.pic13 = imgBase64Str[12];
	doc.pic14 = imgBase64Str[13];
	doc.pic15 = imgBase64Str[14];

	console.log(col, doc)

	update(col, doc);
	await delay();

	console.log('update :', update_count);
	console.log('insert :', insert_count);
	alert('Saved');

	load_element();
}

function getDataUrl(file, no) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
	imgBase64Str[no] = reader.result.replace(/^data:image\/[a-z]+;base64,/, "");
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

function camera_공정입력_콤보박스(e) {
	if(worker == '') return;
	pic_step = e.value;
	
	switch(pic_step) {
		case '입고' :
      			slot1.innerHTML = '입고';
      			slot2.innerHTML = 'BSA QR 코드';

			col = 입고_pic;
			result = 입고_pic_v;
			doc = JSON.parse(JSON.stringify(입고_pic_doc));
			break;

		case '세척' :
			col = 세척_pic;
			result = 세척_pic_v;
			doc = JSON.parse(JSON.stringify(세척_pic_doc));
			break;

		case '기초검사' :
			col = 기초검사_pic;
			result = 기초검사_pic_v;
			doc = JSON.parse(JSON.stringify(기초검사_pic_doc));
			break;

		case '분해조립' :
			col = 분해조립_pic;
			result = 분해조립_pic_v;
			doc = JSON.parse(JSON.stringify(분해조립_pic_doc));
			break;

		case '성능검사' :
			col = 성능검사_pic;
			result = 성능검사_pic_v;
			doc = JSON.parse(JSON.stringify(성능검사_pic_doc));
			break;

		case 'EOL' :
			col = EOL_pic;
			result = EOL_pic_v;
			doc = JSON.parse(JSON.stringify(EOL_pic_doc));
			break;

		case '출하검사' :
			col = 출하_pic;
			result = 출하_pic_v;
			doc = JSON.parse(JSON.stringify(출하_pic_doc));
			break;

		case '특이사항' :
			col = 특이사항_pic;
			result = 특이사항_pic_v;
			doc = JSON.parse(JSON.stringify(특이사항_pic_doc));
			break;

		case '반품입고' :
			col = 반품입고_pic;
			result = 반품입고_pic_v;
			doc = JSON.parse(JSON.stringify(반품입고_pic_doc));
			break;

		case '재출하' :
			col = 재출하_pic;
			result = 재출하_pic_v;
			doc = JSON.parse(JSON.stringify(재출하_pic_doc));
			break;

		case '완전분해' :
			col = 완전분해_pic;
			result = 완전분해_pic_v;
			doc = JSON.parse(JSON.stringify(완전분해_pic_doc));
			break;

		case '폐기' :
			col = 폐기_pic;
			result = 폐기_pic_v;
			doc = JSON.parse(JSON.stringify(폐기_pic_doc));
			break;

		default :
			return;
	}
	pic_loading();
}

function Slot_콤보박스(e) {
	slot = e.value;
}

async function pic_loading() {
	load_element();

	imgBase64Str = new Array(15);
	var mid = document.getElementById('_pic_management_id');
	doc.관리번호 = mid.value;
	console.log('check:', doc.관리번호);
	console.log('col:', col);
	find(col, doc.관리번호);
	await delay();

	if(result != null) {
		camera_img1.src = 'data:image/;base64,' + result.pic1;
		camera_img2.src = 'data:image/;base64,' + result.pic2;
		camera_img3.src = 'data:image/;base64,' + result.pic3;
		camera_img4.src = 'data:image/;base64,' + result.pic4;
		camera_img5.src = 'data:image/;base64,' + result.pic5;
		camera_img6.src = 'data:image/;base64,' + result.pic6;
		camera_img7.src = 'data:image/;base64,' + result.pic7;
		camera_img8.src = 'data:image/;base64,' + result.pic8;
		camera_img9.src = 'data:image/;base64,' + result.pic9;
		camera_img10.src = 'data:image/;base64,' + result.pic10;
		camera_img11.src = 'data:image/;base64,' + result.pic11;
		camera_img12.src = 'data:image/;base64,' + result.pic12;
		camera_img13.src = 'data:image/;base64,' + result.pic13;
		camera_img14.src = 'data:image/;base64,' + result.pic14;
	        camera_img15.src = 'data:image/;base64,' + result.pic15;
	} else {
		camera_img1.src = '';
		camera_img2.src = '';
		camera_img3.src = '';
		camera_img4.src = '';
		camera_img5.src = '';
		camera_img6.src = '';
		camera_img7.src = '';
		camera_img8.src = '';
		camera_img9.src = '';
		camera_img10.src = '';
		camera_img11.src = '';
		camera_img12.src = '';
		camera_img13.src = '';
		camera_img14.src = '';
	        camera_img15.src = '';
	}
}

function load_element() {
	camera_img1 = document.getElementById('frame1');
	camera_img2 = document.getElementById('frame2');
	camera_img3 = document.getElementById('frame3');
	camera_img4 = document.getElementById('frame4');
	camera_img5 = document.getElementById('frame5');
	camera_img6 = document.getElementById('frame6');
	camera_img7 = document.getElementById('frame7');
	camera_img8 = document.getElementById('frame8');
	camera_img9 = document.getElementById('frame9');
	camera_img10 = document.getElementById('frame10');
	camera_img11 = document.getElementById('frame11');
	camera_img12 = document.getElementById('frame12');
	camera_img13 = document.getElementById('frame13');
	camera_img14 = document.getElementById('frame14');
	camera_img15 = document.getElementById('frame15');

	camera_img1.src = '';
	camera_img2.src = '';
	camera_img3.src = '';
	camera_img4.src = '';
	camera_img5.src = '';
	camera_img6.src = '';
	camera_img7.src = '';
	camera_img8.src = '';
	camera_img9.src = '';
	camera_img10.src = '';
	camera_img11.src = '';
	camera_img12.src = '';
	camera_img13.src = '';
	camera_img14.src = '';
	camera_img15.src = '';
}
