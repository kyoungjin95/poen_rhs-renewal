async function 출하검사성적서_시작() {
  loadPage("base/출하검사성적서.html");
  await sleep(1000);

  _management_id.value = 관리번호;
  출하검사성적서_조회();
}

async function 출하검사성적서_조회(is재제조번호 = false) {
  if (is재제조번호 == true) {
    count(BSA재제조, { 재제조번호: _재제조번호.value });
    await delay();

    if (doc_count > 0) {
      find_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
      await delay();

      _management_id.value = find_array[0].관리번호;
    }
  }

  if (_management_id.value.trim() == "조회 버튼을 누르세요")
    _management_id.value = 관리번호;
  console.log("load: ", _management_id.value);
  if (_management_id.value.length == 0) return;

  count(BSA재제조, {관리번호: _management_id.value });
  await delay();

  if(doc_count > 0) {
    find(BSA재제조, _management_id.value);
    await delay();

    _재제조번호.innerHTML = find_array[0].재제조번호;
  }

  count(입고, { 관리번호: _management_id.value });
  await delay();

  if(doc_count > 0) {
    find(입고, _management_id.value);
    _차종.innerHTML = find_array[0].차종;
    _품번.innerHTML = find_array[0].품번;
  }

  count(기초검사, { 관리번호: _management_id.value });
  await delay();

  if(doc_count > 0) {
    find(기초검사, _management_id.value);
    await delay();

    _RO.innerHTML = find_array[0].RO_no;
  }

  count(출하정보, { 관리번호: _management_id.value });
  await delay();

  if (doc_count > 0) {
    find(출하정보, _management_id.value);
    await delay();

    _출하일.innerHTML = find_array[0].출하일;
    _납품처.innerHTML = find_array[0].납품처;
    _검사일.innerHTML = find_array[0].검사일;
    _검사자.innerHTML = find_array[0].검사자;
    _기초보고서_OK.innerHTML = find_array[0].기초보고서_작성확인 == 'OK'? 'OK' : '';
    _기초보고서_NG.innerHTML = find_array[0].기초보고서_작성확인 == 'NG'? 'NG' : '';
    _완료보고서_OK.innerHTML = find_array[0].기초보고서_작성확인 == 'OK'? 'OK' : '';
    _완료보고서_NG.innerHTML = find_array[0].기초보고서_작성확인 == 'NG'? 'NG' : '';
    _릴레이동시구동_OK.innerHTML = find_array[0].릴레이_강제구동 == 'OK'? 'OK' : '';
    _릴레이동시구동_NG.innerHTML = find_array[0].릴레이_강제구동 == 'NG'? 'NG' : '';
    //_SOC전압_OK.innerHTML = find_array[0].SOC == 'OK' ? 'OK' : '';
    //_SOC전압_NG.innerHTML = find_array[0].SOC == 'NG' ? 'NG' : '';
    _팩전압.innerHTML = find_array[0].배터리팩전압;
    _셀전압_OK.innerHTML = find_array[0].배터리셀전압 == 'OK' ? 'OK' : '';
    _셀전압_NG.innerHTML = find_array[0].배터리셀전압 == 'NG' ? 'NG' : '';
    _셀전압_최대.innerHTML = find_array[0].배터리셀전압_최대;
    _셀전압_최소.innerHTML = find_array[0].배터리셀전압_최소;
    _셀전압편차_OK.innerHTML = find_array[0].셀전압편차 == 'OK' ? 'OK' : '';
    _셀전압편차_NG.innerHTML = find_array[0].셀전압편차 == 'NG' ? 'NG' : '';
    _셀전압편차_측정값.innerHTML = find_array[0].셀전압편차_측정값;
    //_DCIR_OK
    //_DCIR_NG
    //_DCIR_측정값
    //_용량평가_OK.innerHTML = find_array[0]
    //_용량평가_NG.innerHTML = find_array[0]
    //_용량평가_측정값
    //_케이스_OK
    //_케이스_NG
    //_케이스_측정값
    //_냉각유로 OK
    //_냉각유로 NG
    //_냉각유로 측정값
    //_접지 P OK
    //_접지 P NG
    //_접지 N OK
    //_접지 N NG
    //
    _DTC_OK.innerHTML = find_array[0].DTC == 'OK' ? 'OK' : '';
    _DTC_NG.innerHTML = find_array[0].DTC == 'NG' ? 'NG' : '';
    _DTC_현재.innerHTML = find_array[0].DTC_현재;
    _DTC_과거.innerHTML = find_array[0].DTC_과거;

    _배터리충전상태_OK.innerHTML = find_array[0].배터리충전상태 == 'OK' ? 'OK' : '';
    _배터리충전상태_NG.innerHTML = find_array[0].배터리충전상태 == 'NG' ? 'NG' : '';
    _배터리충전상태_측정값.innerHTML = find_array[0].배터리충전상태_측정값;
    _BMS고장NO_OK.innerHTML = find_array[0].BMS고장NO == 'OK' ? 'OK' : '';
    _BMS고장NO_NG.innerHTML = find_array[0].BMS고장NO == 'NG' ? 'NG' : '';
    _BMS융착NO_OK.innerHTML = find_array[0].BMS융착NO == 'OK' ? 'OK' : '';
    _BMS융착NO_NG.innerHTML = find_array[0].BMS융착NO == 'NG' ? 'NG' : '';
    _배터리팩전압_OK.innerHTML = find_array[0].배터리팩전압 == 'OK' ? 'OK' : '';
    _배터리팩전압_NG.innerHTML = find_array[0].배터리팩전압 == 'NG' ? 'NG' : '';
    _배터리모듈온도_OK.innerHTML = find_array[0].배터리모듈온도 == 'OK' ? 'OK' : '';
    _배터리모듈온도_NG.innerHTML = find_array[0].배터리모듈온도 == 'NG' ? 'NG' : '';
    _배터리모듈온도_최대.innerHTML = find_array[0].배터리모듈온도_최대;
    _배터리모듈온도_최소.innerHTML = find_array[0].배터리모듈온도_최소;
    _배터리셀간전압편차_OK.innerHTML = find_array[0].셀전압편차 == 'OK' ? 'OK' : '';
    _배터리셀간전압편차_NG.innerHTML = find_array[0].셀전압편차 == 'NG' ? 'NG' : '';
    _배터리셀간전압편차_측정값.innerHTML = find_array[0].셀전압편차_측정값;
    _절연저항_OK.innerHTML = find_array[0].절연저항 == 'OK' ? 'OK' : '';
    _절연저항_NG.innerHTML = find_array[0].절연저항 == 'NG' ? 'NG' : '';
    _절연저항_측정값.innerHTML = find_array[0].절연저항_측정값;
    _SOH_OK.innerHTML = find_array[0].SOH == 'OK' ? 'OK' : '';
    _SOH_NG.innerHTML = find_array[0].SOH == 'NG' ? 'NG' : '';
    //SOH측정값
    _릴레이강제구동_OK.innerHTML = find_array[0].릴레이_강제구동 == 'OK' ? 'OK' : '';
    _릴레이강제구동_NG.innerHTML = find_array[0].릴레이_강제구동 == 'NG' ? 'NG' : '';
    _커넥터체결검사_OK.innerHTML = find_array[0].커넥터체결검사 == 'OK' ? 'OK' : '';
    _커넥터체결검사_NG.innerHTML = find_array[0].커넥터체결검사 == 'NG' ? 'NG' : '';
  }
}

async function 출하검사성적서_save() {
  var _date = new Date();
  var file_name = "출하검사성적서" + _date + ".pdf";

  html2canvas(document.getElementById("_출하검사성적서"), {
    width: 4200 * window.innerWidth / 1920,
    height: 4600 * window.innerHeight / 1080,
  }).then((canvas) => {
    var data = canvas.toDataURL();
    var canvas = document.getElementById("_canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = data;
    img.onload = function () {
      ctx.drawImage(img, 1920, 1080);
    };

    canvas.width = 420;
    canvas.width = 460;

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
