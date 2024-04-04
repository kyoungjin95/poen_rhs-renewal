var 분해조립투입일 = "";
async function 분해조립_폐기자재_시작() {
  await sleep(100);
  if (typeof _D == "undefined") {
    await sleep(1);
    return;
  }
  flag_분해조립_폐기자재 = false;

  console.log("분해조립 폐기자재 시작");

  pushed = [];

  flag_부품정보_list = true;
  await 부품정보_list_시작();

  var 내부 = false;
  flag_불량의심부품 = false;
  await 불량의심부품_시작(내부);

  find(분해조립폐기자재, 관리번호);
  await delay();

  분해조립폐기자재_tabledata = JSON.parse(JSON.stringify(분해조립폐기자재_v));
  await 분해조립폐기자재_table(분해조립폐기자재_tabledata);

  폐기자재_choisenButton();

  draw_color(분해조립폐기자재_tabledata);

  flag_폐기자재_all = false;
  flag_all_폐기사유 = false;
  check_items = [];

  find(BSA재제조, 관리번호);
  await delay();

  분해조립투입일 = BSA재제조_v.분해조립투립일;
  if (BSA재제조_v.분해조립투입일 == null || BSA재제조_v.분해조립투입일 == undefined) {
    var DateTime = luxon.DateTime;
    var seoul = DateTime.local().setZone("Asia/Seoul");
    var now = seoul.toString().slice(0, 19);

    분해조립투입일 = now;
  }
}

var table_폐기자재;
var flag_all_폐기사유 = false;
async function 분해조립폐기자재_table(tabledata) {
  table_폐기자재 = new Tabulator("#grid_교체부품", {
    initialSort: [
      { column: "품명", dir: "asc" }, //sort by this first
    ],
    layout: "resizableColumnFit",
    height: 500,
    data: tabledata,

    columns: [
      { title: "품명", field: "품명", sorter: "string" },
      { title: "품번", field: "품번", sorter: "string" },
      { title: "QR", field: "QR", sorter: "string" },
      { title: "폐기사유", field: "폐기사유", editor: "textarea" },
    ],
  });

  // table_폐기자재.on("cellEdited", function (cell) {
  //   if (flag_all_폐기사유 == false) {
  //     flag_all_폐기사유 == true;
  //     var data = cell.getRow().getData();
  //     for (var i = 0; i < 분해조립폐기자재_tabledata.length; i++) {
  //       분해조립폐기자재_tabledata[i].폐기사유 = data.폐기사유;
  //     }
  //     분해조립폐기자재_table(분해조립폐기자재_tabledata);
  //   }
  // });
}

var 고품 = [];
var check_items;
var 분해조립폐기자재_tabledata = [];
function 폐기자재_choisenButton() {
  고품 = [];
  var buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    const value = button.getAttribute("value");
    if (value == null) return;

    var DateTime = luxon.DateTime;
    var seoul = DateTime.local().setZone("Asia/Seoul");
    var now = seoul.toString().slice(0, 19);

    var _tmp = JSON.parse(JSON.stringify(고품정보_doc));
    _tmp.관리번호 = 관리번호;
    _tmp.품명 = value.replace("_A_", "").replace("_B_", "").replace("_C_", "").replace("_D_", "").replace("_D2_", "").replace("_QR", "");
    _tmp.품번 = document.getElementById(value.replace("QR", "품번")).value;
    _tmp.QR = document.getElementById(value).value;
    _tmp.폐기여부 = "자재";
    _tmp.등록일 = now;
    _tmp.등록작업자 = worker;
    고품.push(_tmp);

    button.addEventListener("click", async () => {
      const value = button.getAttribute("value");
      if (value == null) return;
      console.log("value:", value);

      check_items.push(value);

      var add_item = {
        관리번호: 관리번호,
        품명: value.replace("_A_", "").replace("_B_", "").replace("_C_", "").replace("_D_", "").replace("_D2_", "").replace("_QR", ""),
        품번: document.getElementById(value.replace("QR", "품번")).value,
        QR: document.getElementById(value).value,
        폐기사유: "",
      };

      if (add_item.QR.trim() == "") return;
      button.style.backgroundColor = "red";

      for (var i = 0; i < 분해조립폐기자재_tabledata.length; i++) {
        if (분해조립폐기자재_tabledata[i].QR == add_item.QR || pushed.indexOf(add_item.QR) != -1) {
          document.getElementById(value.replace("_QR", "")).style.backgroundColor = "salmon";

          if (pushed.indexOf(add_item.QR) != -1) pushed.splice(pushed.indexOf(add_item.QR), 1);
          분해조립폐기자재_tabledata.splice(i, 1);
          분해조립폐기자재_table(분해조립폐기자재_tabledata);

          delete_분해조립폐기자재(분해조립폐기자재, add_item.QR);
          await delay();
          return;
        }
      }

      분해조립폐기자재_tabledata.push(add_item);
      분해조립폐기자재_table(분해조립폐기자재_tabledata);
    });
  });
}

async function 분해조립폐기자재_save() {
  var data = table_폐기자재.getData();
  var update_cnt = 0;
  var insert_cnt = 0;

  for (var i = 0; i < data.length; i++) {
    delete_분해조립폐기자재(분해조립폐기자재, data[i].QR);
    await delay();
  }

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    update_분해조립폐기자재(분해조립폐기자재, data[i]);
    await delay();

    console.log(update_count);
    console.log(insert_count);

    update_cnt = update_count;
    inserte_cnt = insert_count;
  }

  console.log(고품);
  for (var i = 0; i < 고품.length; i++) {
    var DateTime = luxon.DateTime;
    var seoul = DateTime.local().setZone("Asia/Seoul");
    var now = seoul.toString().slice(0, 19);

    var _doc = JSON.parse(JSON.stringify(고품정보_doc));
    _doc.관리번호 = 관리번호;
    _doc.품명 = 고품[i].품명;
    _doc.품번 = 고품[i].품번;
    _doc.QR = 고품[i].QR;
    _doc.폐기여부 = "자재";
    _doc.등록일 = now;
    _doc.등록_작업자 = worker;

    for (var j = 0; j < data.length; j++) {
      if (data[j].QR == _doc.QR) {
        _doc.폐기여부 = "폐기";
      }
    }

    if (_doc.QR == "") continue;

    console.log(_doc);
    update_고품정보(고품정보, _doc);
    await delay();

    update_cnt += update_count;
    insert_cnt += insert_count;
  }

  var DateTime = luxon.DateTime;
  var seoul = DateTime.local().setZone("Asia/Seoul");
  var now = seoul.toString().slice(0, 19);

  var _doc = {
    관리번호: 관리번호,
    분해조립투입일: 분해조립투입일,
    분해조립: now,
  };

  update(BSA재제조, _doc);
  await delay();

  update_cnt += update_count;
  insert_cnt += insert_count;

  if (update_cnt > 0) {
    alert("업데이트 되었습니다");
  }

  if (insert_cnt > 0) {
    alert("저장 되었습니다");
  }

  find(BSA재제조, _management_id.value);
  await delay();

  undefined_check(BSA재제조_v);

  await 공정단계자동입력(_management_id.value);
}

var flag_폐기자재_all = false;
async function 분해조립폐기자재_all() {
  var buttons = document.querySelectorAll("button");
  switch (차종) {
    case "DE":
    case "DE_EV":
    case "OS":
    case "OS_EV":
    case "SK3":
    case "SK3_EV":
    case "LK":
    case "LK_EV":
      id = "_A_";
      break;

    case "PU":
    case "PU_EV":
    case "HR":
    case "HR_EV":
      id = "_B_";
      break;

    case "CV":
    case "CV_EV":
    case "NE":
    case "NE_EV":
    case "LM":
    case "LM_EV":
      id = "_C_";
      break;

    case "CS":
    case "CS_EV":
      id = "_D_";
      break;

    default:
      alert("차종 정보를 확인해주세요");

      return;
      break;
  }
  buttons.forEach((button) => {
    const value = button.getAttribute("value");
    if (value == null) return;
    if (value.substr(0, 3) != id) return;
    console.log("value:", value);

    button.style.backgroundColor = "red";

    var add_item = {
      관리번호: 관리번호,
      품명: value.replace("_A_", "").replace("_B_", "").replace("_C_", "").replace("_D_", "").replace("_D2_", "").replace("_QR", ""),
      품번: document.getElementById(value.replace("QR", "품번")).value,
      QR: document.getElementById(value).value,
      폐기사유: "",
    };

    분해조립폐기자재_tabledata.push(add_item);
  });

  분해조립폐기자재_table(분해조립폐기자재_tabledata);

  flag_폐기자재_all = true;
}

var pushed = [];
function draw_color(data) {
  data.forEach((v) => {
    var id = v.품명;
    console.log(v);

    switch (차종) {
      case "DE":
      case "DE_EV":
      case "OS":
      case "OS_EV":
      case "SK3":
      case "SK3_EV":
      case "LK":
      case "LK_EV":
        id = "_A_" + id;
        break;

      case "PU":
      case "PU_EV":
      case "HR":
      case "HR_EV":
        id = "_B_" + id;
        break;

      case "CV":
      case "CV_EV":
      case "NE":
      case "NE_EV":
      case "LM":
      case "LM_EV":
        id = "_C_" + id;
        break;

        break;

      case "CS":
      case "CS_EV":
        id = "_D_" + id;
        break;

      default:
        alert("차종 정보를 확인해주세요");

        return;
        break;
    }
    document.getElementById(id).style.backgroundColor = "red";
    pushed.push(id);
  });
}
