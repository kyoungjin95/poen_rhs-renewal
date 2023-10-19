let print_doc_type3;

async function 통신검사_시작() {
  loadPage("base/통신검사.html");
  await sleep(1000);

  // 각각 통신검사, 진단결과 show, hide 버튼
  const firstBtn = document.querySelector("#communication .btn1");
  const secondBtn = document.querySelector("#communication .btn2");
  const communicationInspection = document.getElementById("_통신검사");
  const communicationInspectionImg = document.getElementById("_진단결과");

  firstBtn.addEventListener("click", () => {
    print_doc_type3 = 1;
    communicationInspection.style.display = "block";
    communicationInspectionImg.style.display = "none";
  });

  secondBtn.addEventListener("click", () => {
    print_doc_type3 = 2;
    communicationInspection.style.display = "none";
    communicationInspectionImg.style.display = "block";
  });
}

async function 통신검사_조회() {
  if (_management_id.value.trim() == "조회 버튼을 누르세요")
    _management_id.value = 관리번호;
  console.log("load: ", _management_id.value);
  if (_management_id.value.length == 0) return;
}

async function 통신검사_save() {
  var _date = new Date();
  var file_name = "CAN통신검사" + _date + ".pdf";
  var body = document.getElementsByTagName("body")[0];
  if (window.innerWidth > 1920) {
    alert("해상도가 1920 x 1080일때만 사용이 가능합니다.");
  }

  let type3 = "";
  if (print_doc_type3 == 1) {
    type3 = document.getElementById("_통신검사");
  } else {
    type3 = document.getElementById("_진단결과");
  }
  html2canvas(type3, {
    width: 4000,
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

    canvas.width = 400;
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
