async function 완료보고서_시작() {
  loadPage("base/완료보고서.html");
  await sleep(1000);

  _management_id.value = 관리번호;
  완료보고서_조회();
}

async function 완료보고서_조회(is재제조번호 = false) {
  if(is재제조번호 == true) {
    count(BSA재제조, { 재제조번호: _재제조번호.value });
    await delay();

    console.log(doc_count);
    if(doc_count > 0) {
      find_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value});
      await delay();
      
      console.log('test:', find_array);
      _management_id.value = find_array[0].관리번호;
    }
  } 

  count(기초검사, { 관리번호: _management_id.value });
  await delay();

  if (doc_count > 0) {
    find(기초검사, _management_id.value);
    await delay();

    var _VIN = document.getElementById("_VINNo");
    _VIN.innerHTML = find_array[0].VIN == undefined ? "" : find_array[0].VIN;
    var _RO = document.getElementById("_RONo");
    _RO.innerHTML = find_array[0].RO_no == undefined ? "" : find_array[0].RO_no;
    _주행거리.innerHTML =
      find_array[0].주행거리 == undefined ? "" : find_array[0].주행거리;
    _차량번호.innerHTML =
      find_array[0].차량번호 == undefined ? "" : find_array[0].차량번호;

    _management_id.value = find_array[0].관리번호;

    _작성자.innerHTML = worker;

    _외부점검.innerHTML =
      find_array[0].육안검사_외부 == undefined
        ? ""
        : find_array[0].육안검사_외부;

    _외부점검사유.innerHTML =
      find_array[0].육안검사_외부_특이사항 == undefined
        ? ""
        : find_array[0].육안검사_외부_특이사항;

    _내부점검.innerHTML =
      find_array[0].육안검사_내부 == undefined
        ? ""
        : find_array[0].육안검사_내부;

    _내부점검사유.innerHTML =
      find_array[0].육안검사_내부_특이사항 == undefined
        ? ""
        : find_array[0].육안검사_내부_특이사항;

    _PRA_P값.innerHTML =
      find_array[0].절연검사_Plus == undefined
        ? ""
        : find_array[0].절연검사_Plus;

    _PRA_N값.innerHTML =
      find_array[0].절연검사_Minus == undefined
        ? ""
        : find_array[0].절연검사_Minus;

    _고장코드.innerHTML =
      find_array[0].고장현상코드 == undefined ? "" : find_array[0].고장현상코드;

    _고장코드사유.innerHTML =
      find_array[0].고장현상명 == undefined ? "" : find_array[0].고장현상명;

    _재제조이력.innerHTML = 'OK';
  } else {
    _재제조이력.innerHTML = 'NG';
  }

  count(입고, { 관리번호: _management_id.value });
  await delay();

  if (doc_count > 0) {
    _입고정보.innerHTML = 'OK';
    find(입고, _management_id.value);
    await delay();
    console.log(find_array);

    _입고일.innerHTML = find_array[0].입고일;
  } else {
    _입고정보.innerHTML = 'NG';
    _입고일.innerHTML = "";
  }

  count(EOL, { 관리번호 : _management_id.value});
  await delay();

  if(doc_count > 0) {
    find(EOL, _management_id.value);
    await delay();

    console.log('EOL:', find_array);
    _케이스.innerHTML =
      find_array[0].기밀검사_케이스 == undefined
        ? ""
        : find_array[0].기밀검사_케이스;
    _케이스감압량.innerHTML =
      find_array[0].기밀검사_케이스_특이사항 == undefined
        ? ""
        : find_array[0].기밀검사_케이스_특이사항;
    _냉각유로.innerHTML =
      find_array[0].기밀검사_냉각유로 == undefined ? "" : find_array[0].기밀검사_냉각유로;
    _냉각유로감압량.innerHTML = find_array[0].기밀검사_냉각유로_특이사항 == undefined ? "" : find_array[0].기밀검사_냉각유로_특이사항;
    //_팩전압.innerHTML = find_array[0].통신검사_팩전압 == undefined ? "" :  find_array[0].통신검사_팩전압;

  } else {
    _케이스.innerHTML = "";
    _케이스감압량.innerHTML = "";
    _냉각유로.innerHTML = "";
    _냉각유로감압량.innerHTML = "";
  }

  count(입고_pic, { 관리번호: _management_id.value });
  await delay();
  if (doc_count > 0) {
    find(입고_pic, _management_id.value);
    await delay();

    _입고사진.src = "data:image/;base64," + find_array[0].pic1;
    _BSA_QR.src = "data:image/;base64," + find_array[0].pic2;
  }

  var DateTime = luxon.DateTime;
  var seoul = DateTime.local().setZone("Asia/Seoul");
  var now = seoul.toString();

  document.getElementById("_작성일_input").value = now.substr(0, 10);
  _작성일.innerHTML = now.substr(0, 10);

  count(출하정보, { 관리번호 : _management_id.value});
  await delay();

  if(doc_count > 0) {
    find(출하정보, _management_id.value);
    await delay();

    _출하QR.innerHTML = find_array[0].출하코드 == undefined?'NG': 'OK';
    _출하QR사유.innerHTML = find_array[0].출하코드;

    _팩전압.innerHTML =
      find_array[0].배터리팩전압 == undefined
        ? ""
        : find_array[0].배터리팩전압;

    _팩전압값.innerHTML =
      find_array[0].배터리팩_측정값 == undefined
        ? ""
        : find_array[0].배터리팩_측정값;

    _셀전압편차.innerHTML =
      find_array[0].셀전압편차 == undefined
        ? ""
        : find_array[0].셀전압편차;

    _셀전압편차값.innerHTML =
      find_array[0].셀전압편차값 == undefined
        ? ""
        : find_array[0].셀전압편차값;

    _릴레이제어.innerHTML =
      find_array[0].통신검사_릴레이구동 == undefined
        ? ""
        : find_array[0].통신검사_릴레이구동;

    _커버류.innerHTML = find_array[0].냉각유로_커버;
    _커버류확인.innerHTML = find_array[0].냉각유로_커버;

    _브라켓정보.innerHTML = find_array[0].브라켓;
    _브라켓값.innerHTML = find_array[0].브라켓_비고;
  }
}

async function 완료보고서_save() {
  var _date = new Date();
  var file_name = "완료보고서" + _date + ".pdf";
  var body = document.getElementsByTagName("body")[0];
  if (window.innerWidth > 1920) {
    alert("해상도가 1920 x 1080일때만 사용이 가능합니다.");
  }

  html2canvas(document.getElementById("_완료보고서"), {
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
