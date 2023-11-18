async function 기밀검사_시작() {
  loadPage("base/기밀검사.html");
  await sleep(1000);

  _management_id.value = 관리번호;
  기밀검사_조회();
}

async function 기밀검사_조회(is재제조번호 = false) {
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

  count(EOL, { 관리번호: _management_id.value });
  await delay();

  if (EOL_cnt > 0) {
    find(EOL, _management_id.value);
    await delay();

    _케이스.innerHTML = EOL_v.기밀검사_케이스;
    _냉각유로.innerHTML = EOL_v.기밀검사_냉각유로;
  }

  count(입고_pic, { 관리번호 : _management_id.value });
  await delay();

  if(입고_pic_cnt > 0) {
    find(입고_pic, _management_id.value);
    await delay();

    _측정사진1.src = "data:image/;base64," + 입고_pic_v.pic1;
    _측정사진2.src = "data:image/;base64," + 입고_pic_v.pic2;
    _측정값사진1.src = "data:image/;base64," + 입고_pic_v.pic3;
    _측정값사진2.src = "data:image/;base64," + 입고_pic_v.pic4;
  }
}

async function 기밀검사_save() {
  var _date = new Date();
  var file_name = "기밀검사" + _date + ".pdf";
  var body = document.getElementsByTagName("body");
  if (window.innerWidth > 1920) {
    alert("해상도가 1920 x 1080일때만 사용이 가능합니다.");
  }

  html2canvas(document.getElementById("_기밀검사"), {
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

