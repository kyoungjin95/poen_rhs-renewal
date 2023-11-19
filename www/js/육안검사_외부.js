var print_doc_type1;

async function 육안검사외부_시작() {
  loadPage("base/육안검사_외부.html");
  await sleep(1);

  const firstBtn = document.querySelector("#external .btn1");
  const secondBtn = document.querySelector("#external .btn2");
  const externalInspection = document.getElementById("_육안검사외부1");
  const externalInspectionImg = document.getElementById("_육안검사외부2");

  firstBtn.addEventListener("click", function () {
    print_doc_type1 = 1;
    externalInspection.style.display = "block";
    externalInspectionImg.style.display = "none";
  });

  secondBtn.addEventListener("click", function () {
    print_doc_type1 = 2;
    externalInspection.style.display = "none";
    externalInspectionImg.style.display = "block";
  });

  _management_id.value = 관리번호;
  육안검사외부_조회();
}

async function 육안검사외부_조회(is재제조번호 = false) {
  if(is재제조번호 == true) {
    count(BSA재제조, { 재제조번호 : _재제조번호.value});
    await delay();
	
    if(BSA재제조_cnt > 0) {
    	find_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value});
    	await delay();

    	_management_id.value = find_array.관리번호;
    }
  }

  if (_management_id.value.trim() == "조회 버튼을 누르세요")
    _management_id.value = 관리번호;
  console.log("load: ", _management_id.value);
  if (_management_id.value.length == 0) return;

  find(입고_pic, _management_id.value);
  await delay();

  _top_pic.src = "data:image/;base64," + find_array.pic1;
  _front_pic.src = "data:image/;base64," + find_array.pic2;
  _left_pic.src = "data:image/;base64," + find_array.pic3;
  _bottom_pic.src = "data:image/;base64," + find_array.pic4;
  _rear_pic.src = "data:image/;base64," + find_array.pic5;
  _right_pic.src = "data:image/;base64," + find_array.pic6;
  _이상부위_외부1.src = "data:image/;base64," + find_array.pic7;
  _이상부위_외부2.src = "data:image/;base64," + find_array.pic8;
  _이상부위_외부3.src = "data:image/;base64," + find_array.pic9;
  _이상부위_외부4.src = "data:image/;base64," + find_array.pic10;
}

async function 육안검사외부_save() {
  var _date = new Date();
  var file_name = "육안검사외부" + _date + ".pdf";
  var body = document.getElementsByTagName("body");
  if (window.innerWidth > 1920) {
    alert("해상도가 1920 x 1080일때만 사용이 가능합니다.");
  }

  let type1 = "";
  if (print_doc_type1 == 1 || print_doc_type1 == null) {
    type1 = document.getElementById("_육안검사외부1");
  } else {
    type1 = document.getElementById("_육안검사외부2");
  }
  html2canvas(type1, {
    width: 4100,
    height: 2000,
  }).then((canvas) => {
    var data = canvas.toDataURL();
    var canvas = document.getElementById("_canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = data;
    img.onload = function () {
      ctx.drawImage(img, window.innerWidth, window.innerHeight);
    };

    canvas.width = 410;
    canvas.width = 200;

    var docDefinition = {
      content: [
        {
          image: data,
          width: window.innerWidth,
          height: window.innerHeight,
        },
      ],
      pageSize: "A4",
      pageOrientation: "landscape",
    };
    pdfMake.createPdf(docDefinition).download(file_name);
  });
  console.log("file name:", file_name);
}
