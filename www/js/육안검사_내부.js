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
}

async function 육안검사내부_save() {
  var _date = new Date();
  var file_name = "육안검사내부" + _date + ".pdf";
  var body = document.getElementsByTagName("body")[0];
  if (window.innerWidth > 1920) {
    alert("해상도가 1920 x 1080일때만 사용이 가능합니다.");
  }

  var type2 = "";
  if (print_doc_type2 == 1) {
    type2 = document.getElementById("_육안검사내부1");
  } else {
    type2 = document.getElementById("_육안검사내부2");
  }

  html2canvas(type2, {
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
