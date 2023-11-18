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

  _management_id.value = 관리번호;
  통신검사_조회();
}

async function 통신검사_조회(is재제조번호 = false) {
  if(is재제조번호 == true) {
    count(BSA재제조, { 재제조번호 : _재제조번호.value});
    await delay();

    if(BSA재제조_cnt > 0) {
      find_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
      await delay();

      _management_id.value = BSA재제조_v.관리번호;
    }
  }

  if (_management_id.value.trim() == "조회 버튼을 누르세요")
    _management_id.value = 관리번호;

  if (_management_id.value.length == 0) return;

  count(입고_pic, { 관리번호: _management_id.value });
  await delay();

  if (입고_pic_cnt > 0) {
    find(입고_pic, _management_id.value);
    await delay();

    relay_control_pic.src = "data:image/;base64," + 입고_pic_v.pic1;
    cell_vol_test.src = "data:image/;base64," + 입고_pic_v.pic2;

    DTC.src = "data:image/;base64," + 입고_pic_v.pic3;
    sensor.src = "data:image/;base64," + 입고_pic_v.pic4;
    DTC2.src = "data:image/;base64," + 입고_pic_v.pic5;
    ROM_ID.src = "data:image/;base64," + 입고_pic_v.pic6;
  }

  count(출하정보, { 관리번호: _management_id.value });
  await delay();

  if (출하정보_cnt > 0) {
    find(출하정보, _management_id.value);
    await delay();

    relay_control.innerHTML = 출하정보_v.릴레이_강제구동;
    relay_pack_vol.innerHTML = 출하정보_v.배터리팩_측정값;
    cell_vol_max.innerHTML = 출하정보_v.배터리셀전압_최대;
    cell_vol_편차.innerHTML = 출하정보_v.셀전압편차_측정값;
    cell_vol_min.innerHTML = 출하정보_v.배터리셀전압_최소;
    charicter_cell_no.innerHTML = "??"; //find_array.
    relay_ok.innerHTML = "OK";
    cell_vol_test_ok.innerHTML = "OK";
  }
}

async function 통신검사_save() {
  var _date = new Date();
  var file_name = "CAN통신검사" + _date + ".pdf";
  var body = document.getElementsByTagName("body");
  if (window.innerWidth > 1920) {
    alert("해상도가 1920 x 1080일때만 사용이 가능합니다.");
  }

  let type3 = "";
  if (print_doc_type3 == 1 || print_doc_type3 == null) {
    type3 = document.getElementById("_통신검사");
  } else {
    type3 = document.getElementById("_진단결과");
  }
  html2canvas(type3, {
    width: 4100,
    height: 2200,
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
    canvas.width = 220;

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
