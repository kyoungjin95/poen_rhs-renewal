function 기초보고서_시작() {
  loadPage('base/기초보고서.html');
}

async function 기초보고서_조회() {
  if(_management_id.value.trim() == '조회 버튼을 누르세요') _management_id.value =  관리번호;
  console.log('load: ', _management_id.value);
  if(_management_id.value.length == 0) return;

  count(기초검사, { 관리번호 : _management_id.value });
  await delay();

  if(doc_count > 0) {
    find(기초검사, _management_id.value);
    await delay();

    var _VIN = document.getElementById('_VINNo');
    _VIN.innerHTML = find_array[0].VIN == undefined?'':find_array[0].VIN;
    var _RO = document.getElementById('_RONo');
    _RO.innerHTML = find_array[0].RO_no == undefined?'':find_array[0].RO_no;
    _주행거리.innerHTML = find_array[0].주행거리 == undefined?'':find_array[0].주행거리;
    _차량번호.innerHTML = find_array[0].차량번호 == undefined?'':find_array[0].차량번호;
    //생산일
    //판매일
    //수리일
    //입고사진
    //_BSA_QR 사진
    _관리번호.innerHTML = find_array[0].관리번호;
    //필드현상
    _센터진단.innerHTML = find_array[0].샌터진단내용 == undefined?'':find_array[0].센터진단내용;
    //센터조치
    _작성자.innerHTML = worker;
    //_작성일.innerHTML = 
    _외부점검.innerHTML = find_array[0].육안검사_외부 == undefined?'':find_array[0].육안검사_외부;
    _외부점검사유.innerHTML = find_array[0].육안검사_외부_특이사항 == undefined?'':find_array[0].육안검사_외부_특이사항;
    _내부점검.innerHTML = find_array[0].육안검사_내부 == undefined?'':find_array[0].육안검사_내부;
    _내부점검사유.innerHTML = find_array[0].육안검사_내부_특이사항 == undefined?'':find_array[0].육안검사_내부_특이사항;
    //_셀제조사사유.innerHTML = find_array[0].
    //_냉각유로.innerHTML = find_array[0].기밀검사_냉각유로;
    _냉각유로감압량.innerHTML = find_array[0].기밀검사_냉각유로_특이사항 == undefined?'':find_array[0].기밀검사_냉각유로_특이사항;
    //_PRA_P.innerHTML = find_array[0].절연검사_Plus;
    _PRA_P값.innerHTML = find_array[0].절연검사_Plus == undefined?'':find_array[0].절연검사_Plus;
    //_PRA_N.innerHTML = find_array[0].절연검사_Minus;
    _PRA_N값.innerHTML = find_array[0].절연검사_Minus == undefined?'':find_array[0].절연검사_Minus;
    _HV커넥터_P값.innerHTML = find_array[0].절연감사_HVPlus == undefined?'':find_array[0].절연검사_HVPlus;
    _HV커넥터_N값.innerHTML = find_array[0].절연감사_HVMinus == undefined?'':find_array[0].절연검사_HVMinus;
    //_팩전압.innerHTML = find_array[0].통신검사_팩전압;
    _팩전압값.innerHTML = find_array[0].통신검사_팩전압 == undefined?'':find_array[0].통신검사_팩전압;
    //_셀전압편차.innerHTML = find_array[0].통신검사_셀전압편차;
    _셀전압편차값.innerHTML = find_array[0].통신검사_셀전압편차 == undefined?'':find_array[0].통신검사_셀전압편차;
    _릴레이제어.innerHTML = find_array[0].통신검사_릴레이구동 == undefined?'':find_array[0].통신검사_릴레이구동;
    //릴레이제어사유.innerHTML = find_array[0].통신검사_릴레이구동;
    _고장코드.innerHTML = find_array[0].고장현상코드 == undefined?'':find_array[0].고장현상코드;
    _고장코드사유.innerHTML = find_array[0].고장코드현상명 == undefined?'':find_array[0].고장코드현상명;
    //_입고정보.innerHTML =
    //_입고정보사유.innerHTML =
    //재제조이력.innerHTML
    //재제조이력사유.innerHTML
  }

  count(입고, { 관리번호 : _management_id.value });
  await delay();

  if(doc_count > 0) {
    find(입고, _management_id.value);
    await delay();

    _입고일.value = find_array[0].입고일;
  }

  count(세척, { 관리번호 : _management_id.value });
  await delay();

  if(doc_count > 0) {
    find(세척, _management_id.value);
    await delay();

    _케이스.innerHTML = find_array[0].기밀검사_케이스 == undefined?'':find_array[0].기밀검사_케이스;
    _케이스감압량.innerHTML = find_array[0].기밀검사_케이스_특이사항 == undefined?'':find_array[0].기밀검사_케이스_특이사항;
  }

  count(입고_pic, { 관리번호 : _management_id.value });
  await delay();
  if(doc_count > 0) {
    find(입고_pic, _management_id.value);
    await delay();

    _입고사진.src = 'data:image/;base64,' + find_array[0].pic1;
    _BSA_QR.src = 'data:image/;base64,' + find_array[0].pic2;
  }

  var DateTime = luxon.DateTime;
  var seoul = DateTime.local().setZone("Asia/Seoul");
  var now = seoul.toString();

  document.getElementById('_작성일_input').value = now.substr(0, 10);
  _작성일.innerHTML = now.substr(0, 10);
}


async function 기초보고서_save() {
  var _date = new Date();
  var file_name = '기초보고서' + _date + '.pdf';
  var body = document.getElementsByTagName('body')[0];
  if (window.innerWidth > 1920) { alert('해상도가 1920 x 1080일때만 사용이 가능합니다.');}

  html2canvas(document.getElementById('_기초보고서'), { width : 4000, height : 2000 }).then(canvas => {
    var data = canvas.toDataURL();
    var canvas = document.getElementById('_canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image;
    img.src = data;
    img.onload = function() {
      ctx.drawImage(img, 1920, 1080);
    };

    canvas.width = 400;
    canvas.width = 200;

    var docDefinition = {
      content: [{
        image: data,
        width: 1920,
        height: 1080	
      }],
      pageSize: 'A4',
      pageOrientation: 'landscape'
    };
    pdfMake.createPdf(docDefinition).download(file_name);
  });
  console.log('file name:', file_name);
}

function 기초보고서_apply() {
  _외부점검.innerHTML = document.getElementById('cb외부점검').value;
  _내부점검.innerHTML = document.getElementById('cb내부점검').value;
  _냉각유로.innerHTML = document.getElementById('cb냉각유로').value;
  _케이스.innerHTML = document.getElementById('cb케이스').value;
  _PRA_P.innerHTML = document.getElementById('cb절연검사P').value;
  _PRA_N.innerHTML = document.getElementById('cb절연검사N').value;
  _HV커넥터_P.innerHTML = document.getElementById('cbHVP').value;
  _HV커넥터_N.innerHTML = document.getElementById('cbHVN').value;
  _팩전압.innerHTML = document.getElementById('cb팩전압').value;
  _셀전압편차.innerHTML = document.getElementById('cb셀전압편차').value;
  _릴레이제어.innerHTML = document.getElementById('cb릴레이제어').value;
  _입고정보.innerHTML = document.getElementById('cb입고정보').value;
  _재제조이력.innerHTML = document.getElementById('cb재제조이력').value;
  _고장코드.innerHTML = document.getElementById('cb고장코드').value;

  _셀제조사사유.innerHTML = document.getElementById('_셀제조사사유_input').value;
  _생산일.innerHTML = document.getElementById('_생산일_input').value;
  _판매일.innerHTML = document.getElementById('_판매일_input').value;
  _수리일.innerHTML = document.getElementById('_수리일_input').value;
  _판매일.innerHTML = document.getElementById('_판매일_input').value;
  _필드현상.innerHTML = document.getElementById('_필드현상_input').value;
  _센터진단.innerHTML = document.getElementById('_센터진단_input').value;
  _센터조치.innerHTML = document.getElementById('_센터조치_input').value;
  _작성일.innerHTML = document.getElementById('_작성일_input').value;
  _고장코드사유.innerHTML = document.getElementById('_고장코드사유_input').value;
  _릴레이제어사유.innerHTML = document.getElementById('_릴레이제어사유_input').value;
  _입고정보사유.innerHTML = document.getElementById('_입고정보사유_input').value;
  _재제조이력사유.innerHTML = document.getElementById('_재제조이력사유_input').value;
  _결과.innerHTML = document.getElementById('_결과_input').value;

}

function _기초보고서_외부점검_콤보박스(e) {
  const value = e.value;

  document.getElementById('_외부점검').innerHTML = value;
}

function _기초보고서_내부점검_콤보박스(e) {
  const value = e.value;

  document.getElementById('_내부점검').innerHTML = value;
}

function _기초보고서_냉각유로_콤보박스(e) {
  const value = e.value;

  document.getElementById('_냉각유로').innerHTML = value;
}

function _기초보고서_케이스_콤보박스(e) {
  const value = e.value;

  document.getElementById('_케이스').innerHTML = value;
}

function _기초보고서_PRA_P_콤보박스(e) {
  const value = e.value;

  document.getElementById('_PRA_P').innerHTML = value;
}

function _기초보고서_PRA_N_콤보박스(e) {
  const value = e.value;

  document.getElementById('_PRA_N').innerHTML = value;
}

function _기초보고서_HVP_콤보박스(e) {
  const value = e.value;

  document.getElementById('_HV커넥터_P').innerHTML = value;
}

function _기초보고서_HVN_콤보박스(e) {
  const value = e.value;

  document.getElementById('_HV커넥터_N').innerHTML = value;
}

function _기초보고서_팩전압_콤보박스(e) {
  const value = e.value;

  document.getElementById('_팩전압').innerHTML = value;
}

function _기초보고서_셀전압편차_콤보박스(e) {
  const value = e.value;

  document.getElementById('_셀전압편차').innerHTML = value;
}

function _기초보고서_릴레이제어_콤보박스(e) {
  const value = e.value;

  document.getElementById('_릴레이제어').innerHTML = value;
}

function _기초보고서_고장코드_콤보박스(e) {
  const value = e.value;

  document.getElementById('_고장코드').innerHTML = value;
}

function _기초보고서_입고정보_콤보박스(e) {
  const value = e.value;

  document.getElementById('_입고정보').innerHTML = value;
}

function _기초보고서_재제조이력_콤보박스(e) {
  const value = e.value;

  document.getElementById('_재제조이력').innerHTML = value;
}

function _기초보고서_고장코드_콤보박스(e) {
  const value = e.value;

  document.getElementById('_고장코드').innerHTML = value;
}
