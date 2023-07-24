const MAX_SLOT = 15;
var imgBase64Str = [];
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

function pic_load(e) {
	image_count = e.length;
	if(image_count > 15) {
		image_count = 15;
	}

	var file = e;

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

	for(var i = 1; i <= image_count; i++) {
		eval('camera_img' + i +'.src = URL.createObjectURL(file[' + (i - 1) + ']);');
		getDataUrl(file[i -1], (i - 1));
	}
}

async function pic_save() {
	if(worker == '') return;

	var col;
	var doc;

	switch(pic_step) {
		case '입고' :
			col = 입고_pic;
			doc = 입고_pic_doc;
			break;

		case '세척' :
			col = 세척_pic;
			doc = 세척_pic_doc;
			break;

		case '기초검사' :
			col = 기초검사_pic;
			doc = 기초검사_pic_doc;
			break;

		case '분해조립' :
			col = 분해조립_pic;
			doc = 분해조립_pic_doc;
			break;

		case '성능검사' :
			col = 성능검사_pic;
			doc = 성능검사_pic_doc;
			break;

		case 'EOL' :
			col = EOL_pic;
			doc = EOL_pic_doc;
			break;

		case '출하검사' :
			col = 출하_pic;
			doc = 출하_pic_doc;
			break;

		case '특이사항' :
			col = 특이사항_pic;
			doc = 특이사항_pic_doc;
			break;

		case '반품입고' :
			col = 반품입고_pic;
			doc = 반품입고_pic_doc;
			break;

		case '재출하' :
			col = 재출하_pic;
			doc = 재출하_pic_doc;
			break;

		case '완전분해' :
			col = 완전분해_pic;
			doc = 완전분해_pic_doc;
			break;

		case '폐기' :
			col = 폐기_pic;
			doc = 폐기_pic_doc;
			break;

		default :
			return;
	}

	var mid = document.getElementById('_pic_management_id');
	doc.관리번호 = mid.value;
	console.log(doc);
	count(col, { 관리번호: doc.관리번호});
	await delay();
	console.log(doc_count);
	if(doc_count > 0) {
		find(col, doc.관리번호);
		await delay();
		console.log(find_array);
		doc.pic1 = find_array[0].pic1;
		doc.pic2 = find_array[0].pic2;
		doc.pic3 = find_array[0].pic3;
		doc.pic4 = find_array[0].pic4;
		doc.pic5 = find_array[0].pic5;
		doc.pic6 = find_array[0].pic6;
		doc.pic7 = find_array[0].pic7;
		doc.pic8 = find_array[0].pic8;
		doc.pic9 = find_array[0].pic9;
		doc.pic10 = find_array[0].pic10;
		doc.pic11 = find_array[0].pic12;
		doc.pic12 = find_array[0].pic13;
		doc.pic13 = find_array[0].pic14;
		doc.pic14 = find_array[0].pic15;
	}

	await sleep(10);
	if(image_count == 1) {
		switch(slot) {
			case '1' : 
				doc.pic1 = imgBase64Str[0];
				break;

			case '2' :
				doc.pic2 = imgBase64Str[0];
				break;

			case '3' :
				doc.pic3 = imgBase64Str[0];
				break;

			case '4' :
				doc.pic4 = imgBase64Str[0];
				break;

			case '5' : 
				doc.pic5 = imgBase64Str[0];
				break;

			case '6' :
				doc.pic6 = imgBase64Str[0];
				break;

			case '7' :
				doc.pic7 = imgBase64Str[0];
				break;

			case '8' :
				doc.pic8 = imgBase64Str[0];
				break;

			case '9' : 
				doc.pic9 = imgBase64Str[0];
				break;

			case '10' :
				doc.pic10 = imgBase64Str[0];
				break;

			case '11' :
				doc.pic11 = imgBase64Str[0];
				break;

			case '12' :
				doc.pic12 = imgBase64Str[0];
				break;

			case '13' : 
				doc.pic13 = imgBase64Str[0];
				break;

			case '14' :
				doc.pic14 = imgBase64Str[0];
				break;

			case '15' :
				doc.pic15 = imgBase64Str[0];
				break;
		}
	} else if(image_count != 0) {
		console.log('image count:', image_count);
		for(var i = 1; i <= image_count; i++) {
			eval('doc.pic' + i + ' = imgBase64Str[' + (i - 1) + '];');
			await sleep(10);
			console.log('No. ', i);
			eval('console.log(\'doc.pic' + i + '\', doc.pic' + i + ');'); 
			console.log('imgBAse64Str:', imgBase64Str[i -1]);
		}
	}

	console.log(col, doc)
	update(col, doc);
	await delay();

	console.log('update :', update_count);
	console.log('insert :', insert_count);
	alert('Saved');
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
	pic_step = e.value;
}

function Slot_콤보박스(e) {
	slot = e.value;
}
