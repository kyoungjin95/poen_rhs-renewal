var 입력재제조번호 = "";
var today_count = 0;

async function 세척_시작(is재제조 = 0) {
  while (_management_id == undefined) {
    await sleep(DELAY);
  }
  if (flag_세척 == true) await 세척_list();
  flag_세척 = false;

  if (is재제조 == 0) {
    if (_management_id.value.length == 0) return;

    find(BSA재제조, _management_id.value);
    await delay();

    if (BSA재제조_v != null) {
      _재제조번호.value = BSA재제조_v.재제조번호;
      _구분.value = BSA재제조_v.구분;
      _차종.value = BSA재제조_v.차종;
      _품번.value = BSA재제조_v.품번;
      _RO_no.value = BSA재제조_v.RO_no;
    } else {
      _재제조번호.value = "";
      _구분.value = "";
      _차종.value = "";
      _품번.value = "";
      _RO_no.value = "";
    }
  } else if (is재제조 == 1) {
    if (_재제조번호.value.length == 0) return;

    findOne_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
    await delay();

    if (BSA재제조_v != null) {
      _management_id.value = BSA재제조_v.관리번호;
      _구분.value = BSA재제조_v.구분;
      _차종.value = BSA재제조_v.차종;
      _품번.value = BSA재제조_v.품번;
      _RO_no.value = BSA재제조_v.RO_no;
    } else {
      _management_id.value = "";
      _구분.value = "";
      _차종.value = "";
      _품번.value = "";
      _RO_no.value = "";
    }
  } else if (is재제조 == 2) {
    if (_RO_no.value.length == 0) return;

    findOne_BSA재제조(BSA재제조, { RO_no: _RO_no.value });
    await delay();

    if (BSA재제조_v != null) {
      _management_id.value = BSA재제조_v.관리번호;
      _재제조번호.value = BSA재제조_v.재제조번호;
      _구분.value = BSA재제조_v.구분;
      _차종.value = BSA재제조_v.차종;
      _품번.value = BSA재제조_v.품번;
    } else {
      _management_id.value = "";
      _재제조번호.value = "";
      _구분.value = "";
      _차종.value = "";
      _품번.value = "";
    }
  }

  console.log("load: ", _management_id.value);

  관리번호 = _management_id.value;

  if (_재제조번호.value == "") {
    console.log("make product key");

    findOne_변수(변수, { 구분: "mado_product_no" });
    await delay();

    console.log("변수:", 변수_v);
    if (변수_v == null) {
      today_count = String(1);
    } else {
      today_count = Number(변수_v.값) + 1;
      today_count = today_count.toString();
    }
    var product_no;
    product_no = await make_md_product_no(today_count);

    console.log("product no:", product_no);

    _재제조번호.value = product_no;
    입력재제조번호 = product_no;
  }

  find(세척, _management_id.value);
  await delay();

  if (세척_v != null) {
    _공정입고일.value = 세척_v.공정입고일;
    _공정완료일.value = 세척_v.공정완료일;
    _어퍼케이스재사용가능.value = 세척_v.어퍼케이스재사용가능;
    _기밀검사_케이스.value = 세척_v.기밀검사_케이스;
    _기밀검사_케이스_특이사항.value = 세척_v.기밀검사_케이스_특이사항;
    _육안검사_외부.value = 세척_v.육안검사_외부;
    _육안검사_외부_특이사항.value = 세척_v.육안검사_외부_특이사항;
    _특이사항.value = 세척_v.특이사항;

    find(세척_pic, _management_id.value);
    await delay();

    if (세척_pic_v != null) {
      img1.src = 세척_pic_v.pic1;
      img2.src = 세척_pic_v.pic2;
      img3.src = 세척_pic_v.pic3;
      img4.src = 세척_pic_v.pic4;
      img5.src = 세척_pic_v.pic5;
      img6.src = 세척_pic_v.pic6;
      img7.src = 세척_pic_v.pic7;
      img8.src = 세척_pic_v.pic8;
      img9.src = 세척_pic_v.pic9;
      img10.src = 세척_pic_v.pic10;
      img11.src = 세척_pic_v.pic11;
      img12.src = 세척_pic_v.pic12;
      img13.src = 세척_pic_v.pic13;
    }
  } else {
    _공정입고일.value = "0000-00-00T00:00";
    _공정완료일.value = "0000-00-00T00:00";
    _어퍼케이스재사용가능.value = "";
    _기밀검사_케이스.value = "";
    _기밀검사_케이스_특이사항.value = "";
    _육안검사_외부.value = "";
    _육안검사_외부_특이사항.value = "";
    _특이사항.value = "";

    img1.src = "";
    img2.src = "";
    img3.src = "";
    img4.src = "";
    img5.src = "";
    img6.src = "";
    img7.src = "";
    img8.src = "";
    img9.src = "";
    img10.src = "";
    img11.src = "";
    img12.src = "";
    img13.src = "";

    var DateTime = luxon.DateTime;
    var seoul = DateTime.local().setZone("Asia/Seoul");
    var now = seoul.toString().slice(0, 19);

    _공정입고일.value = now;
  }

  _기밀검사_케이스_box.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        const dataURL = reader.result;
        img1.src = dataURL;
      };
    }
    evt.preventDefault();
  };

  _기밀검사_케이스_특이사항_box.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        const dataURL = reader.result;
        img2.src = dataURL;
      };
    }
    evt.preventDefault();
  };

  _육안검사_외부_img.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        const dataURL = reader.result;
        img3.src = dataURL;
      };
    }
    evt.preventDefault();
  };

  _육안검사_외부_특이사항_img.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        const dataURL = reader.result;
        img9.src = dataURL;
      };
    }
    evt.preventDefault();
  };

  _특이사항_box.ondrop = function (evt) {
    var files = evt.dataTransfer?.files;
    if (files.length > 0) {
      console.log("drag & drop");
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        const dataURL = reader.result;
        img13.src = dataURL;
      };
    }
    evt.preventDefault();
  };

  _기밀검사_케이스_box.ondragover = function (evt) {
    evt.preventDefault();
  };

  _기밀검사_케이스_특이사항_box.ondragover = function (evt) {
    evt.preventDefault();
  };

  _육안검사_외부_img.ondragover = function (evt) {
    evt.preventDefault();
  };

  _육안검사_외부_특이사항_img.ondragover = function (evt) {
    evt.preventDefault();
  };

  _특이사항_box.ondragover = function (evt) {
    evt.preventDefault();
  };
}

async function 세척_save() {
  if (_management_id.value.length == 0) return;
  console.log("save: ", _management_id.value);

  var doc = JSON.parse(JSON.stringify(세척_doc));

  var DateTime = luxon.DateTime;
  var seoul = DateTime.local().setZone("Asia/Seoul");
  var now = seoul.toString().slice(0, 19);

  if (_공정입고일.value == "") _공정입고일.value = now;
  _공정완료일.value = now;

  doc.관리번호 = _management_id.value.trim().toUpperCase();
  doc.재제조번호 = _재제조번호.value;
  doc.공정입고일 = _공정입고일.value;
  doc.공정완료일 = _공정완료일.value;
  doc.어퍼케이스재사용가능 = _어퍼케이스재사용가능.value;
  doc.기밀검사_케이스 = _기밀검사_케이스.value;
  doc.기밀검사_케이스_특이사항 = _기밀검사_케이스_특이사항.value;
  doc.육안검사_외부 = _육안검사_외부.value;
  doc.육안검사_외부_특이사항 = _육안검사_외부_특이사항.value;
  doc.특이사항 = _특이사항.value;

  update(세척, doc);
  await delay();

  console.log(update_count);
  console.log(insert_count);

  if (update_count > 0) {
    alert("업데이트 되었습니다");
    변수저장(today_count);
  }

  if (insert_count > 0) {
    alert("저장 되었습니다");
    변수저장(today_count);
  }

  find(BSA재제조, _management_id.value);
  await delay();

  if (BSA재제조_v == null) {
    var _doc = JSON.parse(JSON.stringify(BSA재제조_doc));
    _doc.관리번호 = _management_id.value.trim().toUpperCase();
    _doc.재제조번호 = _재제조번호.value;
    _doc.세척투입일 = _공정입고일.value;
    _doc.세척 = _공정완료일.value;

    update(BSA재제조, _doc);
    await delay();
  } else {
    var _doc = {
      관리번호: _management_id.value.toUpperCase(),
      재제조번호: _재제조번호.value,
      세척투입일: _공정입고일.value,
      세척: _공정완료일.value,
    };

    update(BSA재제조, _doc);
    await delay();
  }

  await 공정단계자동입력(_management_id.value);

  var _pic_doc = JSON.parse(JSON.stringify(세척_pic_doc));
  _pic_doc.관리번호 = _management_id.value.trim().toUpperCase();
  _pic_doc.pic1 = img1.src;
  _pic_doc.pic2 = img2.src;
  _pic_doc.pic3 = img3.src;
  _pic_doc.pic4 = img4.src;
  _pic_doc.pic5 = img5.src;
  _pic_doc.pic6 = img6.src;
  _pic_doc.pic7 = img7.src;
  _pic_doc.pic8 = img8.src;
  _pic_doc.pic9 = img9.src;
  _pic_doc.pic10 = img10.src;
  _pic_doc.pic11 = img11.src;
  _pic_doc.pic12 = img12.src;
  _pic_doc.pic13 = img13.src;

  update(세척_pic, _pic_doc);
  await delay();

  console.log("세척_pic_update:", update_count);
  console.log("세척_pic_insert:", insert_count);
  //이전페이지();
}

function _어퍼케이스재사용가능_콤보박스(e) {
  const value = e.value;

  document.getElementById("_어퍼케이스재사용가능").value = value;
}

function _기밀검사_케이스_콤보박스(e) {
  const value = e.value;

  document.getElementById("_기밀검사_케이스").value = value;
}

async function 세척_카메라시작() {
  if (관리번호 == "") return;
  await 세척_save();

  세척_사진촬영(관리번호);
}

function 세척_updateFilter() {
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
    세척_list_table.setFilter(filter, typeVal, valueEl.value);
  }
}

var 세척_list_table;

async function 세척_list() {
  findOne_BSA재제조(BSA재제조, { 공정단계: { $ne: "출하" }, 입고: { $ne: "" }, 세척: { $eq: "" },
    기초검사: { $eq: "" }, 분해조립: { $eq: "" }, 성능검사: { $eq: "" },
    EOL: { $eq: "" }, 소재지: { $nin: ["공정대기", "품질대기"] }, 완전분해: { $eq: "" },
    폐기: { $eq: "" }, 출하: { $eq: "" }, 구분: { $nin: ["일반기타", "보증기타"] },});
  await delay();

  if (BSA재제조_v != null) {
    find_BSA재제조(BSA재제조, {
      공정단계: { $ne: "출하" },
      입고: { $ne: "" },
      세척: { $eq: "" },
      기초검사: { $eq: "" },
      분해조립: { $eq: "" },
      성능검사: { $eq: "" },
      EOL: { $eq: "" },
      소재지: { $nin: ["공정대기", "품질대기"] },
      완전분해: { $eq: "" },
      폐기: { $eq: "" },
      출하: { $eq: "" },
      구분: { $nin: ["일반기타", "보증기타"] },
    });
    await delay();
  }
  세척_list_table = new Tabulator("#grid_list", {
    layout: "resizableColumnFit",
    data: BSA재제조_v,
    height: "400px",

    columns: [
      { title: "ID", field: "_id", sorter: "string", width: "180" },
      { title: "관리번호", field: "관리번호", sorter: "string", width: "180" },
      { title: "재제조번호", field: "재제조번호", sorter: "string", width: "180",},
      { title: "구분", field: "구분", sorter: "string", width: "180" },
      { title: "차종", field: "차종", sorter: "string", width: "180" },
      { title: "품번", field: "품번", sorter: "string", width: "180" },
      { title: "RO_no", field: "RO_no", sorter: "string", width: "180" },
      { title: "공정단계", field: "공정단계", sorter: "string", width: "180" },
      { title: "소재지", field: "소재지", sorter: "string", width: "180" },
      { title: "적재No", field: "적재No", sorter: "string", visible: true, width: "180",}, //
      { title: "입고", field: "입고", sorter: "string", visible: true, width: "180", }, //
      { title: "제조투입", field: "제조투입", sorter: "string", visible: true, width: "180", }, //
      { title: "세척투입일", field: "세척투입일", sorter: "string", width: "180", },
      { title: "세척", field: "세척", sorter: "string", visible: true, width: "180", }, //
      { title: "기초검사투입일", field: "기초검사투입일", sorter: "string", width: "180", },
      { title: "기초검사", field: "기초검사", sorter: "string", visible: true, width: "180", }, //
      { title: "분해조립투입일", field: "분해조립투입일", sorter: "string", width: "180", },
      { title: "분해조립", field: "분해조립", sorter: "string", visible: true, width: "180", }, //
      { title: "성능검사투입일", field: "성능검사투입일", sorter: "string", width: "180",},
      { title: "성능검사", field: "성능검사", sorter: "string", visible: true, width: "180",}, //
      { title: "EOL투입일", field: "EOL투입일", sorter: "string", width: "180",},
      { title: "EOL", field: "EOL", sorter: "string", visible: true, width: "180"}, //
      { title: "출하검사", field: "출하검사", sorter: "string", width: "180" },
      { title: "납품처", field: "납품처", sorter: "string", width: "180" },
      { title: "출하", field: "출하", sorter: "string", width: "180" },
      { title: "반품입고", field: "반품입고", sorter: "string", width: "180" },
      { title: "재출하", field: "재출하", sorter: "string", width: "180" },
      { title: "완전분해", field: "완전분해", sorter: "string", width: "180" },
      {title: "완전분해사유",field: "완전분해사유",sorter: "string",width: "180",},
      { title: "폐기", field: "폐기", sorter: "string", width: "180" },
      { title: "폐기사유", field: "폐기사유", sorter: "string", width: "180" },
      {title: "마지막충전일",field: "마지막충전일",sorter: "string",width: "180",},
      { title: "출하예약", field: "출하예약", sorter: "string", width: "180" },
      { title: "렉번호", field: "렉번호", sorter: "string", width: "180" },
    ],
  });

  세척_list_table.on("rowClick", async function (e, row) {
    console.log("selected 관리번호: ", row.getData().관리번호);

    _management_id.value = row.getData().관리번호;

    await sleep(1);

    var yes = confirm("선택한 BSA로 세척 공정 정보입력을 시작하시겠습니까?");
    if (yes != true) return;

    세척_시작();
  });

  //Update filters on value change
  document
    .getElementById("filter-field")
    .addEventListener("change", 세척_updateFilter);
  document
    .getElementById("filter-type")
    .addEventListener("change", 세척_updateFilter);
  document
    .getElementById("filter-value")
    .addEventListener("keyup", 세척_updateFilter);

  //Clear filters on "Clear Filters" button click
  document
    .getElementById("filter-clear")
    .addEventListener("click", function () {
      var fieldEl = document.getElementById("filter-field");
      var typeEl = document.getElementById("filter-type");
      var valueEl = document.getElementById("filter-value");
      fieldEl.value = "";
      typeEl.value = "=";
      valueEl.value = "";

      세척_list_table.clearFilter();
    });
}

async function 변수저장(today_count) {
  var doc = 변수_doc;
  doc.구분 = "mado_product_no";
  doc.값 = today_count;

  update(변수, doc);
  await delay();
}

function _육안검사외부_콤보박스(e) {
  const value = e.value;

  document.getElementById("_육안검사_외부").value = value;
}
