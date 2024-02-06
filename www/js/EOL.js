function EOL_재제조번호_시작() {
  EOL_시작(true);
}

var EOL_DTC_count = 0;

async function EOL_시작(is재제조 = 0) {
  if (typeof _management_id == "undefined") {
    await sleep(DELAY);
    return;
  }

  if (flag_EOL == true) await EOL_list();
  flag_EOL = false;
  if (worker == "") return;

  _eol_delete_all();
  init_EOL();

  document.getElementById("_UPR_C조립_label").innerHTML = "UPR_C조립 특이사항";
  document.getElementById("_기밀검사_케이스_label").innerHTML = "기밀검사 케이스 특이사항";
  document.getElementById("_기밀검사_냉각유로_label").innerHTML = "기밀검사 냉각유로 특이사항";
  document.getElementById("_절연검사P_label").innerHTML = "절연검사+ 특이사항";
  document.getElementById("_절연검사M_label").innerHTML = "절연검사- 특이사항";
  document.getElementById("_절연저항HVP_label").innerHTML = "절연저항HV+ 특이사항";
  document.getElementById("_절연저항HVN_label").innerHTML = "절연저항HV- 특이사항";
  document.getElementById("_통신검사_팩전압_label").innerHTML = "통신검사_팩전압 특이사항";
  document.getElementById("_통신검사_셀전압편차_label").innerHTML = "통신검사_셀전압편차 특이사항";
  document.getElementById("_통신검사_릴레이구동_label").innerHTML = "통신검사_릴레이구동 특이사항";

  if (is재제조 == 0) {
    if (_management_id.value.length == 0) return;

    find(BSA재제조, _management_id.value);
    await delay();
    if (BSA재제조_v != null) {
      _재제조번호.value = BSA재제조_v.재제조번호;
      _RO_no.value = BSA재제조_v.RO_no;
    } else {
      _재제조번호.value = "";
      _RO_no.value = "";
    }
  } else if (is재제조 == 1) {
    if (_재제조번호.value.length == 0) return;

    findOne_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
    await delay();

    if (BSA재제조_v != null) {
      _management_id.value = BSA재제조_v.관리번호;
      _RO_no.value = BSA재제조_v.RO_no;
    } else {
      _management_id.value = "";
      _RO_no.value = "";
    }
  } else if (is재제조 == 2) {
    if (_RO_no.value.length == 0) return;

    findOne_BSA재제조(BSA재제조, { RO_no: _RO_no.value });
    await delay();

    if (BSA재제조_v != null) {
      _management_id.value = BSA재제조_v.관리번호;
      _재제조번호.value = BSA재제조_v.재제조번호;
    } else {
      _management_id.value = "";
      _재제조번호.value = "";
    }
  }

  관리번호 = _management_id.value;
  console.log("load: ", _management_id.value);

  find(EOL, _management_id.value);
  await delay();

  if (EOL_v != null) {
    _공정입고일.value = EOL_v.공정입고일;
    _UPR_C조립.value = EOL_v.UPR_C조립;
    if (_UPR_C조립.value == "OK") {
      document.getElementById("_UPR_C조립_label").innerHTML = "UPR_C조립 입력값";
    } else {
      document.getElementById("_UPR_C조립_label").innerHTML = "UPR_C조립 특이사항";
    }
    _기밀검사_케이스.value = EOL_v.기밀검사_케이스;
    if (_기밀검사_케이스.value == "OK") {
      document.getElementById("_기밀검사_케이스_label").innerHTML = "기밀검사 케이스 입력값";
    } else {
      document.getElementById("_기밀검사_케이스_label").innerHTML = "기밀검사 케이스 특이사항";
    }
    _기밀검사_케이스_특이사항.value = EOL_v.기밀검사_케이스_특이사항;
    _기밀검사_냉각유로.value = EOL_v.기밀검사_냉각유로;
    if (_기밀검사_냉각유로.value == "OK") {
      document.getElementById("_기밀검사_냉각유로_label").innerHTML = "기밀검사 냉각유로 입력값";
    } else {
      document.getElementById("_기밀검사_냉각유로_label").innerHTML = "기밀검사 냉각유로 특이사항";
    }
    _기밀검사_냉각유로_특이사항.value = EOL_v.기밀검사_냉각유로_특이사항;
    _절연검사P.value = EOL_v.절연검사_Plus;
    if (_절연검사P.value == "OK") {
      document.getElementById("_절연검사P_label").innerHTML = "절연검사+ 입력값";
    } else {
      document.getElementById("_절연검사P_label").innerHTML = "절연검사+ 특이사항";
    }
    _절연검사M.value = EOL_v.절연검사_Minus;
    if (_절연검사M.value == "OK") {
      document.getElementById("_절연검사M_label").innerHTML = "절연검사- 입력값";
    } else {
      document.getElementById("_절연검사M_label").innerHTML = "절연검사- 특이사항";
    }
    _절연저항HVP.value = EOL_v.절연저항_HVP;
    if (_절연저항HVP.value == "OK") {
      document.getElementById("_절연저항HVP_label").innerHTML = "절연저항HV+ 입력값";
    } else {
      document.getElementById("_절연저항HVP_label").innerHTML = "절연저항HV+ 특이사항";
    }
    _절연저항HVN.value = EOL_v.절연저항_HVN;
    if (_절연저항HVN.value == "OK") {
      document.getElementById("_절연저항HVN_label").innerHTML = "절연저항HV- 입력값";
    } else {
      document.getElementById("_절연저항HVN_label").innerHTML = "절연저항HV- 특이사항";
    }
    _통신검사_DTC코드1.value = EOL_v.통신검사_DTC코드1;
    _통신검사_DTC코드2.value = EOL_v.통신검사_DTC코드2;
    _통신검사_DTC코드3.value = EOL_v.통신검사_DTC코드3;
    if (EOL_v.통신검사_DTC코드4 != "" && EOL_v.통신검사_DTC코드4 != undefined) {
      _EOL_add_DTC_Code();
      _통신검사_DTC코드4.value = EOL_v.통신검사_DTC코드4;
    }

    if (EOL_v.통신검사_DTC코드5 != "" && EOL_v.통신검사_DTC코드5 != undefined) {
      _EOL_add_DTC_Code();
      _통신검사_DTC코드5.value = EOL_v.통신검사_DTC코드5;
    }

    if (EOL_v.통신검사_DTC코드6 != "" && EOL_v.통신검사_DTC코드6 != undefined) {
      _EOL_add_DTC_Code();
      _통신검사_DTC코드6.value = EOL_v.통신검사_DTC코드6;
    }

    if (EOL_v.통신검사_DTC코드7 != "" && EOL_v.통신검사_DTC코드7 != undefined) {
      _EOL_add_DTC_Code();
      _통신검사_DTC코드7.value = EOL_v.통신검사_DTC코드7;
    }

    if (EOL_v.통신검사_DTC코드8 != "" && EOL_v.통신검사_DTC코드8 != undefined) {
      _EOL_add_DTC_Code();
      _통신검사_DTC코드8.value = EOL_v.통신검사_DTC코드8;
    }

    if (EOL_v.통신검사_DTC코드9 != "" && EOL_v.통신검사_DTC코드9 != undefined) {
      _EOL_add_DTC_Code();
      _통신검사_DTC코드9.value = EOL_v.통신검사_DTC코드9;
    }

    if (EOL_v.통신검사_DTC코드10 != "" && EOL_v.통신검사_DTC코드10 != undefined) {
      _EOL_add_DTC_Code();
      _통신검사_DTC코드10.value = EOL_v.통신검사_DTC코드10;
    }

    _통신검사_팩전압.value = EOL_v.통신검사_팩전압;
    if (_통신검사_팩전압.value == "OK") {
      document.getElementById("_통신검사_팩전압_label").innerHTML = "통신검사_팩전압 입력값";
    } else {
      document.getElementById("_통신검사_팩전압_label").innerHTML = "통신검사_팩전압 특이사항";
    }
    _통신검사_셀전압편차.value = EOL_v.통신검사_셀전압편차;
    if (_통신검사_셀전압편차.value == "OK") {
      document.getElementById("_통신검사_셀전압편차_label").innerHTML = "통신검사_셀전압편차 입력값";
    } else {
      document.getElementById("_통신검사_셀전압편차_label").innerHTML = "통신검사_셀전압편차 특이사항";
    }
    _통신검사_릴레이구동.value = EOL_v.통신검사_릴레이구동;
    if (_통신검사_릴레이구동.value == "OK") {
      document.getElementById("_통신검사_릴레이구동_label").innerHTML = "통신검사_릴레이구동 입력값";
    } else {
      document.getElementById("_통신검사_릴레이구동_label").innerHTML = "통신검사_릴레이구동 특이사항";
    }
    _공정완료일.value = EOL_v.공정완료일;
    _비고.value = EOL_v.비고;
    _QR.value = EOL_v.QR;
    _검사자.value = EOL_v.검사자;

    find(EOL_pic, _management_id.value);
    await delay();
    if (EOL_pic_v != null) {
      _img1.src = EOL_pic_v.pic1;
      _img2.src = EOL_pic_v.pic2;
      _img3.src = EOL_pic_v.pic3;
      _img4.src = EOL_pic_v.pic4;
      _img5.src = EOL_pic_v.pic5;
      _img6.src = EOL_pic_v.pic6;
      _img7.src = EOL_pic_v.pic7;
      _img8.src = EOL_pic_v.pic8;
      _img9.src = EOL_pic_v.pic9;
      _img10.src = EOL_pic_v.pic10;
      _img11.src = EOL_pic_v.pic11;
      _img12.src = EOL_pic_v.pic12;
      _img13.src = EOL_pic_v.pic13;
      _img14.src = EOL_pic_v.pic14;
      _img15.src = EOL_pic_v.pic15;
      _img16.src = EOL_pic_v.pic16;
    }
  } else {
    init_EOL();

    var DateTime = luxon.DateTime;
    var seoul = DateTime.local().setZone("Asia/Seoul");
    var now = seoul.toString().slice(0, 19);

    _공정입고일.value = now;

    _img1.src = "";
    _img2.src = "";
    _img3.src = "";
    _img4.src = "";
    _img5.src = "";
    _img6.src = "";
    _img7.src = "";
    _img8.src = "";
    _img9.src = "";
    _img10.src = "";
    _img11.src = "";
    _img12.src = "";
    _img13.src = "";
    _img14.src = "";
    _img15.src = "";
    _img16.src = "";
  }

  _img1.ondblclick = function (evt) {
    _img1.src = "";
  };
  _img1.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img1);
    }
    evt.preventDefault();
  };
  _img2.ondblclick = function (evt) {
    _img2.src = "";
  };
  _img2.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img2);
    }
    evt.preventDefault();
  };
  _img3.ondblclick = function (evt) {
    _img3.src = "";
  };
  _img3.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img3);
    }
    evt.preventDefault();
  };
  _img4.ondblclick = function (evt) {
    _img4.src = "";
  };
  _img4.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img4);
    }
    evt.preventDefault();
  };
  _img5.ondblclick = function (evt) {
    _img5.src = "";
  };
  _img5.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img5);
    }
    evt.preventDefault();
  };
  _img6.ondblclick = function (evt) {
    _img6.src = "";
  };
  _img6.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img6);
    }
    evt.preventDefault();
  };
  _img7.ondblclick = function (evt) {
    _img7.src = "";
  };
  _img7.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img7);
    }
    evt.preventDefault();
  };
  _img8.ondblclick = function (evt) {
    _img8.src = "";
  };
  _img8.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img8);
    }
    evt.preventDefault();
  };
  _img9.ondblclick = function (evt) {
    _img9.src = "";
  };
  _img9.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img9);
    }
    evt.preventDefault();
  };
  _img10.ondblclick = function (evt) {
    _img10.src = "";
  };
  _img10.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img10);
    }
    evt.preventDefault();
  };
  _img11.ondblclick = function (evt) {
    _img11.src = "";
  };
  _img11.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img11);
    }
    evt.preventDefault();
  };
  _img12.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img12);
    }
    evt.preventDefault();
  };
  _img13.ondblclick = function (evt) {
    _img13.src = "";
  };
  _img13.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img13);
    }
    evt.preventDefault();
  };
  _img14.ondblclick = function (evt) {
    _img14.src = "";
  };
  _img14.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img14);
    }
    evt.preventDefault();
  };
  _img15.ondblclick = function (evt) {
    _img15.src = "";
  };
  _img15.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img15);
    }
    evt.preventDefault();
  };
  _img16.ondblclick = function (evt) {
    _img16.src = "";
  };
  _img16.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      resize_pic(files[0], _img16);
    }
    evt.preventDefault();
  };

  _img1.ondragover = function (evt) {
    evt.preventDefault();
    console.log("dragover!");
  };

  _img2.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img3.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img4.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img5.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img6.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img7.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img8.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img9.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img10.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img11.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img12.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img13.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img14.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img15.ondragover = function (evt) {
    evt.preventDefault();
  };

  _img16.ondragover = function (evt) {
    evt.preventDefault();
  };

  find(BSA재제조, _management_id.value);
  await delay();
  if (BSA재제조_v != null) {
    _구분.value = BSA재제조_v.구분;
    _차종.value = BSA재제조_v.차종;
    _품번.value = BSA재제조_v.품번;
    _RO_no.value = BSA재제조_v.RO_no;
  }

  find(BSA재제조, _management_id.value);
  await delay();

  if (BSA재제조_v != null) {
    if (BSA재제조_v.재제조번호 != undefined) _재제조번호.value = BSA재제조_v.재제조번호;
  }
}

async function EOL_SAVE() {
  if (worker == "") return;
  if (_management_id.value.length == 0) return;
  console.log("save: ", _management_id.value);

  var DateTime = luxon.DateTime;
  var seoul = DateTime.local().setZone("Asia/Seoul");
  var now = seoul.toString().slice(0, 19);

  if (_공정입고일.value == "") _공정입고일.value = now;
  if (_공정완료일.value == "") _공정완료일.value = now;
  //if (계정_stat.완료일수정 != 'o' || _공정완료일.value == "") _공정완료일.value = now;

  var doc = JSON.parse(JSON.stringify(EOL_doc));
  console.log("new doc:", doc);
  doc.관리번호 = _management_id.value.trim().toUpperCase();
  doc.공정입고일 = _공정입고일.value;
  doc.UPR_C조립 = _UPR_C조립.value;
  doc.기밀검사_케이스 = _기밀검사_케이스.value;
  doc.기밀검사_케이스_특이사항 = _기밀검사_케이스_특이사항.value;
  doc.기밀검사_냉각유로 = _기밀검사_냉각유로.value;
  doc.기밀검사_냉각유로_특이사항 = _기밀검사_냉각유로_특이사항.value;
  doc.절연검사_Plus = _절연검사P.value;
  doc.절연검사_Minus = _절연검사M.value;
  doc.절연저항_HVP = _절연저항HVP.value;
  doc.절연저항_HVN = _절연저항HVN.value;
  doc.통신검사_DTC코드1 = _통신검사_DTC코드1.value;
  doc.통신검사_DTC코드2 = _통신검사_DTC코드2.value;
  doc.통신검사_DTC코드3 = _통신검사_DTC코드3.value;
  var tb = document.getElementById("tb");
  var rowIcnt = tb.rows.length - 9;
  var code_no = rowIcnt - 18;
  console.log("rowIcnt:", rowIcnt, "code_no:", code_no);

  if (code_no == 10) {
    doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
    doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
    doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
    doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
    doc.통신검사_DTC코드8 = _통신검사_DTC코드8.value;
    doc.통신검사_DTC코드9 = _통신검사_DTC코드9.value;
    doc.통신검사_DTC코드10 = _통신검사_DTC코드10.value;
  } else if (code_no == 9) {
    doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
    doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
    doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
    doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
    doc.통신검사_DTC코드8 = _통신검사_DTC코드8.value;
    doc.통신검사_DTC코드9 = _통신검사_DTC코드9.value;
    doc.통신검사_DTC코드10 = "";
  } else if (code_no == 8) {
    doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
    doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
    doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
    doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
    doc.통신검사_DTC코드8 = _통신검사_DTC코드8.value;
    doc.통신검사_DTC코드9 = "";
    doc.통신검사_DTC코드10 = "";
  } else if (code_no == 7) {
    doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
    doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
    doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
    doc.통신검사_DTC코드7 = _통신검사_DTC코드7.value;
    doc.통신검사_DTC코드8 = "";
    doc.통신검사_DTC코드9 = "";
    doc.통신검사_DTC코드10 = "";
  } else if (code_no == 6) {
    doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
    doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
    doc.통신검사_DTC코드6 = _통신검사_DTC코드6.value;
    doc.통신검사_DTC코드7 = "";
    doc.통신검사_DTC코드8 = "";
    doc.통신검사_DTC코드9 = "";
    doc.통신검사_DTC코드10 = "";
  } else if (code_no == 5) {
    doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
    doc.통신검사_DTC코드5 = _통신검사_DTC코드5.value;
    doc.통신검사_DTC코드6 = "";
    doc.통신검사_DTC코드7 = "";
    doc.통신검사_DTC코드8 = "";
    doc.통신검사_DTC코드9 = "";
    doc.통신검사_DTC코드10 = "";
  } else if (code_no == 4) {
    doc.통신검사_DTC코드4 = _통신검사_DTC코드4.value;
    doc.통신검사_DTC코드5 = "";
    doc.통신검사_DTC코드6 = "";
    doc.통신검사_DTC코드7 = "";
    doc.통신검사_DTC코드8 = "";
    doc.통신검사_DTC코드9 = "";
    doc.통신검사_DTC코드10 = "";
  }

  doc.통신검사_팩전압 = _통신검사_팩전압.value;
  doc.통신검사_셀전압편차 = _통신검사_셀전압편차.value;
  doc.통신검사_릴레이구동 = _통신검사_릴레이구동.value;
  doc.통신검사_릴레이구동_특이사항 = _통신검사_릴레이구동_특이사항.value;
  doc.공정완료일 = _공정완료일.value;
  doc.비고 = _비고.value;
  doc.QR = _QR.value;
  doc.검사자 = _검사자.value;

  update(EOL, doc);
  await delay();

  console.log(update_count);
  console.log(insert_count);

  if (update_count > 0) {
    alert("업데이트 되었습니다");
  }

  if (insert_count > 0) {
    alert("저장 되었습니다");
  }

  var _doc = {
    관리번호: _management_id.value.toUpperCase(),
    EOL투입일: _공정입고일.value,
    EOL: _공정완료일.value,
    마지막충전일: _공정완료일.value,
  };

  update(BSA재제조, _doc);
  await delay();

  select_pos = "";
  await 공정단계자동입력(_management_id.value.trim().toUpperCase());

  var _pic_doc = JSON.parse(JSON.stringify(EOL_pic_doc));
  _pic_doc.관리번호 = _management_id.value.trim().toUpperCase();
  _pic_doc.pic1 = _img1.src;
  _pic_doc.pic2 = _img2.src;
  _pic_doc.pic3 = _img3.src;
  _pic_doc.pic4 = _img4.src;
  _pic_doc.pic5 = _img5.src;
  _pic_doc.pic6 = _img6.src;
  _pic_doc.pic7 = _img7.src;
  _pic_doc.pic8 = _img8.src;
  _pic_doc.pic9 = _img9.src;
  _pic_doc.pic10 = _img10.src;
  _pic_doc.pic11 = _img11.src;
  _pic_doc.pic12 = _img12.src;
  _pic_doc.pic13 = _img13.src;
  _pic_doc.pic14 = _img14.src;
  _pic_doc.pic15 = _img15.src;
  _pic_doc.pic16 = _img16.src;

  update(EOL_pic, _pic_doc);
  await delay();

  console.log("EOL_pic_update:", update_count);
  console.log("EOL_pic_insert:", insert_count);

  find(출하정보, _management_id.value);
  await delay();

  if (출하정보_v == null) {
    var _doc = JSON.parse(JSON.stringify(출하정보_doc));
    _doc.관리번호 = _management_id.value;
    _doc.출하코드 = _QR.value;

    update(출하정보, _doc);
    await delay();
  } else {
    var _doc = {
      관리번호: _management_id.value,
      출하코드: _QR.value,
    };

    update(출하정보, _doc);
    await delay();
  }
}

function EOL_save() {
  EOL_SAVE();

  //이전페이지();
}

function _기밀검사_케이스_콤보박스(e) {
  const value = e.value;

  document.getElementById("_기밀검사_케이스").value = value;
}

function _기밀검사_냉각유로_콤보박스(e) {
  const value = e.value;

  document.getElementById("_기밀검사_냉각유로").value = value;
}

function _UPR_C조립_콤보박스(e) {
  const value = e.value;

  document.getElementById("_UPR_C조립").value = value;
  if (value == "OK") {
    document.getElementById("_UPR_C조립_label").innerHTML = "UPR_C조립 입력값";
  } else if (value == "미실시") {
    document.getElementById("_UPR_C조립_label").innerHTML = "UPR_C조립 특이사항";
  }
}

function _절연검사p_콤보박스(e) {
  const value = e.value;

  document.getElementById("_절연검사P").value = value;
  if (value == "OK") {
    document.getElementById("_절연검사P_label").innerHTML = "절연검사+ 입력값";
  } else if (value == "미실시") {
    document.getElementById("_절연검사P_label").innerHTML = "절연검사+ 특이사항";
  }
}

function _절연검사M_콤보박스(e) {
  const value = e.value;

  document.getElementById("_절연검사M").value = value;
  if (value == "OK") {
    document.getElementById("_절연검사M_label").innerHTML = "절연검사- 입력값";
  } else if (value == "미실시") {
    document.getElementById("_절연검사M_label").innerHTML = "절연검사- 특이사항";
  }
}

function _절연저항HVP_콤보박스(e) {
  const value = e.value;

  document.getElementById("_절연저항HVP").value = value;
  if (value == "OK") {
    document.getElementById("_절연저항HVP_label").innerHTML = "절연저항HV+ 입력값";
  } else if (value == "미실시") {
    document.getElementById("_절연저항HVP_label").innerHTML = "절연저항HV+ 특이사항";
  }
}

function _절연저항HVN_콤보박스(e) {
  const value = e.value;

  document.getElementById("_절연저항HVN").value = value;
  if (value == "OK") {
    document.getElementById("_절연저항HVN_label").innerHTML = "절연저항HV- 입력값";
  } else if (value == "미실시") {
    document.getElementById("_절연저항HVN_label").innerHTML = "절연저항HV- 특이사항";
  }
}

function _통신검사_팩전압_콤보박스(e) {
  const value = e.value;

  document.getElementById("_통신검사_팩전압").value = value;
  if (value == "OK") {
    document.getElementById("_통신검사_팩전압_label").innerHTML = "통신검사 팩전압 입력값";
  } else if (value == "미실시") {
    document.getElementById("_통신검사_팩전압_label").innerHTML = "통신검사 팩전압 특이사항";
  }
}

function _통신검사_셀전압편차_콤보박스(e) {
  const value = e.value;

  document.getElementById("_통신검사_셀전압편차").value = value;
  if (value == "OK") {
    document.getElementById("_통신검사_셀전압편차_label").innerHTML = "통신검사 셀전압편차 입력값";
  } else if (value == "미실시") {
    document.getElementById("_통신검사_셀전압편차_label").innerHTML = "통신검사 셀전압편차 특이사항";
  }
}

function _통신검사_릴레이구동_콤보박스(e) {
  const value = e.value;

  document.getElementById("_통신검사_릴레이구동").value = value;
  if (value == "OK") {
    document.getElementById("_통신검사_릴레이구동_label").innerHTML = "통신검사 릴레이구동 입력값";
  } else if (value == "NG") {
    document.getElementById("_통신검사_릴레이구동_label").innerHTML = "통신검사 릴레이구동 특이사항";
  } else if (value == "통신불가") {
    document.getElementById("_통신검사_릴레이구동_label").innerHTML = "통신검사 릴레이구동 특이사항";
  }
}

function _EOL_add_DTC_Code() {
  var oCurrentRow;
  var tb = document.getElementById("tb");
  var rowIcnt = tb.rows.length - 11;
  var code_no = rowIcnt - 26;
  console.log("rosw count:", rowIcnt);
  if (rowIcnt > 37) return false;
  oCurrentRow = tb.insertRow(rowIcnt);
  var insert_string = '<td><label for="_통신검사_DTC코드"' + code_no + "><b>통신검사 DTC코드 " + code_no + '</b></label></td><td><input type="text" id="_통신검사_DTC코드' + code_no + '" size="40" required></td><td><button onClick="_eol_delete_row(' + rowIcnt + ');">삭제</button></td>';
  console.log(insert_string);
  oCurrentRow.innerHTML = insert_string;
  EOL_DTC_count++;
}

function _eol_delete_row(index) {
  var tb = document.getElementById("tb");
  var rowIcnt = tb.rows.length - 11;
  console.log("index:", index, "rowIcnt:", rowIcnt);
  if (index == rowIcnt) tb.deleteRow(index);
  EOL_DTC_count--;
}

function _eol_delete_all() {
  var tb = document.getElementById("tb");

  while (EOL_DTC_count > 0) {
    var rowIcnt = tb.rows.length - 12;
    tb.deleteRow(rowIcnt);
    EOL_DTC_count--;
  }
}

async function EOL_QR_Label() {
  let hyundai_logo;
  convertImageToBase64("base/img/hyundai.jpg", async function (logo) {
    hyundai_logo = logo;
  });

  let qrcode;
  let pumbeon1 = "";
  let pumbeon2 = "";
  let sn = "";
  let html_string = "";

  let QR1 = document.getElementById("QR1");
  let QR2 = document.getElementById("QR2");

  QR1.style.display = "block";
  QR2.style.display = "block";

  find(BSA재제조, 관리번호);
  await delay();

  sn = BSA재제조_v.재제조번호;

  qrcode = new QRCode(document.getElementById("_QR_Code"), {
    width: 100,
    height: 100,
  });

  var 배터리팩_제조번호 = prompt("배터리팩 제조번호를 입력하세요");
  qrcode.makeCode(배터리팩_제조번호 + " " + sn);
  let qrcode_base64 = qrcode._oDrawing._elCanvas.toDataURL("image/png");
  console.log(qrcode_base64);

  document.getElementById("_QR_Label").innerHTML =
    "<div class='HHB' align='left' width='264'><h5>배터리 시스템 어셈블리</h5></div><div class='HHB'><h6>(Battery System Assembly)</h6></div><div><br/></div><div class='HHB' align='left'><h5>R" +
    BSA재제조_v.품번 +
    "</h5></div><div align='center' width='264'><img src='" +
    qrcode_base64 +
    "'></center></div><div><br/></div><div class='HHM' align='center'><h5>" +
    BSA재제조_v.재제조번호 +
    "</h5></div><div align='right'><img src='" +
    hyundai_logo +
    "'></div>";

  pdf();
}

function saveAs(uri, filename) {
  var link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}

function convertImageToBase64(imgUrl, callback) {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = image.naturalHeight;
    canvas.width = image.naturalWidth;
    ctx.drawImage(image, 0, 0);
    const dataUrl = canvas.toDataURL();
    callback && callback(dataUrl);
  };
  image.src = imgUrl;
}

function EOL_카메라시작() {
  if (_management_id.value == "") return;
  EOL_SAVE();

  EOL_사진촬영(_management_id.value);
}

function pdf() {
  var _QR_Label = document.getElementById("_QR_Label");
  var _width = 2400;
  var _height = 1700;

  html2canvas(_QR_Label, {
    width: (_width * window.innerWidth) / 1920,
    height: (_height * window.innerHeight) / 1080,
  }).then((canvas) => {
    var data = canvas.toDataURL();
    var canvas = document.getElementById("_canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = data;
    img.onload = function () {
      ctx.drawImage(img, 1920, 1080);
    };

    canvas.width = _width / 10;
    canvas.height = _height / 10;

    var docDefinition = {
      content: [
        {
          image: data,
          width: 1920,
          height: 1080,
        },
      ],
      pageSize: {
        width: 2.75591 * 72,
        height: 3.14961 * 72,
      },
      pageOrientation: "portrait",
      pageMargins: [0, 0, 0, 0],
    };

    var DateTime = luxon.DateTime;
    var seoul = DateTime.local().setZone("Asia/Seoul");
    var now = seoul.toString().slice(0, 19);
    var file_name = now + "_QR.pdf";
    pdfMake.createPdf(docDefinition).download(file_name);
  });
  console.log("file name:", "QR.pdf");
}

function EOL_updateFilter() {
  var fieldEl = document.getElementById("filter-field");
  var typeEl = document.getElementById("filter-type");
  var valueEl = document.getElementById("filter-value");

  var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
  var typeVal = typeEl.options[typeEl.selectedIndex].value;

  var filter = filterVal == "function" ? customFilter : filterVal;

  if (filterVal == "function") {
    typeEl.disabled = true;
    valueEl.disabled = true;
  } else {
    typeEl.disabled = false;
    valueEl.disabled = false;
  }

  if (filterVal) {
    EOL_list_table.setFilter(filter, typeVal, valueEl.value);
  }
}

var EOL_list_table;
async function EOL_list() {
  findOne_BSA재제조(BSA재제조, { 공정단계: { $ne: "출하" }, 성능검사: { $ne: "" }, EOL: { $eq: "" }, 소재지: { $nin: ["공정대기", "품질대기", "구장"] }, 완전분해: { $eq: "" }, 폐기: { $eq: "" }, 출하: { $eq: "" }, 구분: { $nin: ["일반기타", "보증기타"] } });
  await delay();

  if (BSA재제조_v != null) {
    find_BSA재제조(BSA재제조, { 공정단계: { $ne: "출하" }, 성능검사: { $ne: "" }, EOL: { $eq: "" }, 소재지: { $nin: ["공정대기", "품질대기", "구장"] }, 완전분해: { $eq: "" }, 폐기: { $eq: "" }, 출하: { $eq: "" }, 구분: { $nin: ["일반기타", "보증기타"] } });
    await delay();
  }

  EOL_list_table = new Tabulator("#grid_list", {
    layout: "resizableColumnFit",
    data: BSA재제조_v,
    height: "400px",

    columns: [
      { title: "ID", field: "_id", sorter: "string", width: "180" },
      { title: "관리번호", field: "관리번호", sorter: "string", width: "180" },
      {
        title: "재제조번호",
        field: "재제조번호",
        sorter: "string",
        width: "180",
      },
      { title: "구분", field: "구분", sorter: "string", width: "180" },
      { title: "차종", field: "차종", sorter: "string", width: "180" },
      { title: "품번", field: "품번", sorter: "string", width: "180" },
      { title: "RO_no", field: "RO_no", sorter: "string", width: "180" },
      { title: "공정단계", field: "공정단계", sorter: "string", width: "180" },
      { title: "소재지", field: "소재지", sorter: "string", width: "180" },
      {
        title: "적재No",
        field: "적재No",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      {
        title: "입고",
        field: "입고",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      {
        title: "제조투입",
        field: "제조투입",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      {
        title: "세척투입일",
        field: "세척투입일",
        sorter: "string",
        width: "180",
      },
      {
        title: "세척",
        field: "세척",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      {
        title: "기초검사투입일",
        field: "기초검사투입일",
        sorter: "string",
        width: "180",
      },
      {
        title: "기초검사",
        field: "기초검사",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      {
        title: "분해조립투입일",
        field: "분해조립투입일",
        sorter: "string",
        width: "180",
      },
      {
        title: "분해조립",
        field: "분해조립",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      {
        title: "성능검사투입일",
        field: "성능검사투입일",
        sorter: "string",
        width: "180",
      },
      {
        title: "성능검사",
        field: "성능검사",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      {
        title: "EOL투입일",
        field: "EOL투입일",
        sorter: "string",
        width: "180",
      },
      {
        title: "EOL",
        field: "EOL",
        sorter: "string",
        visible: true,
        width: "180",
      }, //
      { title: "출하검사", field: "출하검사", sorter: "string", width: "180" },
      { title: "납품처", field: "납품처", sorter: "string", width: "180" },
      { title: "출하", field: "출하", sorter: "string", width: "180" },
      { title: "반품입고", field: "반품입고", sorter: "string", width: "180" },
      { title: "재출하", field: "재출하", sorter: "string", width: "180" },
      { title: "완전분해", field: "완전분해", sorter: "string", width: "180" },
      {
        title: "완전분해사유",
        field: "완전분해사유",
        sorter: "string",
        width: "180",
      },
      { title: "폐기", field: "폐기", sorter: "string", width: "180" },
      { title: "폐기사유", field: "폐기사유", sorter: "string", width: "180" },
      {
        title: "마지막충전일",
        field: "마지막충전일",
        sorter: "string",
        width: "180",
      },
      { title: "출하예약", field: "출하예약", sorter: "string", width: "180" },
      { title: "렉번호", field: "렉번호", sorter: "string", width: "180" },
    ],
  });

  EOL_list_table.on("rowClick", async function (e, row) {
    console.log("selected 관리번호: ", row.getData().관리번호);

    _management_id.value = row.getData().관리번호;

    await sleep(1);

    var yes = confirm("선택한 BSA로 EOL 공정 정보입력을 시작하시겠습니까?");
    if (yes != true) return;

    EOL_시작();
  });

  //Update filters on value change
  document.getElementById("filter-field").addEventListener("change", EOL_updateFilter);
  document.getElementById("filter-type").addEventListener("change", EOL_updateFilter);
  document.getElementById("filter-value").addEventListener("keyup", EOL_updateFilter);

  //Clear filters on "Clear Filters" button click
  document.getElementById("filter-clear").addEventListener("click", function () {
    var fieldEl = document.getElementById("filter-field");
    var typeEl = document.getElementById("filter-type");
    var valueEl = document.getElementById("filter-value");
    fieldEl.value = "";
    typeEl.value = "=";
    valueEl.value = "";

    EOL_list_table.clearFilter();
  });
}

function init_EOL() {
  _재제조번호.value = "";
  _구분.value = "";
  _차종.value = "";
  _품번.value = "";
  _RO_no.value = "";
  _공정입고일.value = "";
  _UPR_C조립.value = "";
  _UPR_C조립_특이사항.value = "";
  _기밀검사_케이스.value = "";
  _기밀검사_케이스_특이사항.value = "";
  _기밀검사_냉각유로.value = "";
  _기밀검사_냉각유로_특이사항.value = "";
  _절연저항HVP.value = "";
  _절연저항HVN.value = "";
  _절연검사P.value = "";
  _절연검사P.value = "";
  _절연검사P_특이사항.value = "";
  _절연검사M.value = "";
  _절연검사M_특이사항.value = "";
  _통신검사_DTC코드1.value = "";
  _통신검사_DTC코드2.value = "";
  _통신검사_DTC코드3.value = "";
  _통신검사_팩전압.value = "";
  _통신검사_팩전압_특이사항.value = "";
  _통신검사_셀전압편차.value = "";
  _통신검사_셀전압편차_특이사항.value = "";
  _통신검사_릴레이구동.value = "";
  _통신검사_릴레이구동_특이사항.value = "";
  _공정완료일.value = "";
  _비고.value = "";
  _QR.value = "";
  _검사자.value = 계정_stat.이름;
}
