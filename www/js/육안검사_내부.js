let print_doc_type2;

async function 육안검사내부_시작() {
  loadPage("base/육안검사_내부.html");
  await sleep(1000);

  // 각각 통신검사, 진단결과 show, hide 버튼
  const firstBtn = document.querySelector("#internal .btn1");
  const secondBtn = document.querySelector("#internal .btn2");
  const internalInspection = document.getElementById("_육안검사내부1");
  const internalInspectionImg = document.getElementById("_육안검사내부2");

  firstBtn.addEventListener("click", () => {
    print_doc_type2 = 1;
    internalInspection.style.display = "block";
    internalInspectionImg.style.display = "none";
  });

  secondBtn.addEventListener("click", () => {
    print_doc_type2 = 2;
    internalInspection.style.display = "none";
    internalInspectionImg.style.display = "block";
  });
  
  _management_id.value = 관리번호;
  육안검사내부_조회();
}

async function 육안검사내부_조회(is재제조번호 = false) {
  if(is재제조번호 == true) {
    count(BSA재제조, { 재제조번호 : _재제조번호.value});
    await delay();

    if(BSA재제조_cnt > 0) {
    	find_BSA재제조(BSA재제조, { 재제조번호 : _재제조번호.value});
    	await delay();

    	_management_id.value = BSA재제조_v[0].관리번호;
    }
  }

  if (_management_id.value.trim() == "조회 버튼을 누르세요")
    _management_id.value = 관리번호;
  console.log("load: ", _management_id.value);
  if (_management_id.value.length == 0) return;

  count(입고_pic, { 관리번호 : _management_id.value });
  await delay();

  if(입고_pic_cnt == 0) return;

  find(입고_pic, _management_id.value);
  await delay();

  _BMU.src = "data:image/;base64," + 입고_pic_v[0].pic3;
  _CMU.src = "data:image/;base64," + 입고_pic_v[0].pic4;
  _PRA.src = "data:image/;base64," + 입고_pic_v[0].pic5;
  _이상부위_내부1.src = "data:image/;base64," + 입고_pic_v[0].pic6;
  _이상부위_내부2.src = "data:image/;base64," + 입고_pic_v[0].pic7;
  _이상부위_내부3.src = "data:image/;base64," + 입고_pic_v[0].pic8;
  _이상부위_내부4.src = "data:image/;base64," + 입고_pic_v[0].pic9;
}

async function 육안검사내부_save() {
  var _date = new Date();
  var file_name = "육안검사내부" + _date + ".pdf";
  var body = document.getElementsByTagName("body")[0];
  if (window.innerWidth > 1920) {
    alert("해상도가 1920 x 1080일때만 사용이 가능합니다.");
  }

  var type2 = "";
  if (print_doc_type2 == 1 || print_doc_type2 == null) {
    type2 = document.getElementById("_육안검사내부1");
  } else {
    type2 = document.getElementById("_육안검사내부2");
  }

  html2canvas(type2, {
    width: 4100,
    height: 2000,
  }).then((canvas) => {
    var data = canvas.toDataURL();
    var canvas = document.getElementById("_canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = data;
    img.onload = function () {
      ctx.drawImage(img, 1920, 1080);
    };

    canvas.width = 410;
    canvas.width = 200;

    var docDefinition = {
      content: [
        {
          image: data,
          width: 1920,
          height: 1080,
        },
      ],
      pageSize: "A4",
      pageOrientation: "landscape",
    };
    pdfMake.createPdf(docDefinition).download(file_name);
  });
  console.log("file name:", file_name);
}

