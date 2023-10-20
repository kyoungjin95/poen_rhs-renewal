function 기밀검사_시작() {
  loadPage("base/기밀검사.html");
}

async function 기밀검사_조회() {
  if (_management_id.value.trim() == "조회 버튼을 누르세요")
    _management_id.value = 관리번호;
  console.log("load: ", _management_id.value);
  if (_management_id.value.length == 0) return;

  count(EOL, { 관리번호: _management_id.value });
  await delay();

  if (doc_count > 0) {
    find(EOL, _management_id.value);
    await delay();

    _케이스.innerHTML = find_array[0].기밀검사_케이스;
    _냉각유로.innerHTML = find_array[0].기밀검사_냉각유로;
  }

  count(입고_pic, { 관리번호 : _management_id.value });
  await delay();

  if(doc_count > 0) {
    find(입고_pic, _management_id.value);
    await delay();

    _측정사진1.src = "data:image/;base64," + find_array[0].pic1;
    _측정사진2.src = "data:image/;base64," + find_array[0].pic2;
    _측정값사진1.src = "data:image/;base64," + find_array[0].pic3;
    _측정값사진2.src = "data:image/;base64," + find_array[0].pic4;
  }
}

async function 기밀검사_save() {
  var _date = new Date();
  var file_name = "기밀검사" + _date + ".pdf";
  var body = document.getElementsByTagName("body")[0];
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
