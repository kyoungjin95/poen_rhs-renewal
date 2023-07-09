var imgBase64Str;
var pic_step;
var slot;

function pic_load(e) {
		console.log(e);
		var file = e[0];
		camera_img = document.getElementById('frame');
		camera_img.src = URL.createObjectURL(file);
}

async function pic_save() {
	getDataUrl();
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

		case '반품입고' :
			col = 반품입고_pic;
			doc = 반품입고_pic_doc;
			break;

		case '재출하' :
			col = 제출하_pic;
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
	var pic = document.getElementById('frame2');
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
	}

	switch(slot) {
		case '1' : 
			doc.pic1 = imgBase64Str;
			break;

		case '2' :
			doc.pic2 = imgBase64Str;
			break;

		case '3' :
			doc.pic3 = imgBase64Str;
			break;

		case '4' :
			doc.pic4 = imgBase64Str;
			break;
	}

	console.log(col, doc)
	update(col, doc);
	await delay();
	
	console.log('update :', update_count;
	console.log('insert :', insert_count;
}


function getDataUrl() {
	// Create canvas
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	
	camera_img = document.getElementById('frame');
	
	// Set width and height
	canvas.width = camera_img.width;
	canvas.height = camera_img.height;
	// Draw the image
	ctx.drawImage(camera_img, 0, 0);

	var base64 = canvas.toDataURL('image/*');
	imgBase64Str = base64.replace(/^data:image\/[a-z]+;base64,/, "");
}

function 공정입력_콤보박스(e) {
	pic_step = e.value;
}

function Slot_콤보박스(e) {
	slot = e.value;
}
