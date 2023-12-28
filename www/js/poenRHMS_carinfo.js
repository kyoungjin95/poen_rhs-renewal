const DELAY = 1;
const DELAY_SYS = 5000;
const 계정 = "계정";

var 계정_v = [];

var 계정_cnt = 0;

var 관리번호 = "";
var 차종 = "";
var worker = "";
var level = "";

var flag_loaded = false;

const 계정_doc = {
  id: "",
  passwd: "",
  level: "",
  이름: "",
  기본정보: "",
  입고: "",
  세척: "",
  기초검사: "",
  분해조립: "",
  성능검사: "",
  EOL: "",
  출하검사: "",
  부품재고: "",
  관리번호: "",
};

const 계정_ = {
  _id: 0,
  id: 1,
  passwd: 1,
  level: 1,
  이름: 1,
  기본정보: 1,
  입고: 1,
  세척: 1,
  기초검사: 1,
  분해조립: 1,
  성능검사: 1,
  EOL: 1,
  출하검사: 1,
  부품재고: 1,
  관리번호: 1,
};

var doc_count = 0;
var update_count = 0;
var insert_count = 0;
var delete_count = 0;
var insert_id = "";
var find_array = [];
var arregation_array = [];
var flag_arrivedMSG = false;
var check = 0;
var str = "";

var socket = io();
socket.on("connect", function () {
  console.log("connected");
  loadPage("base/carinfo__login.html");
});

socket.on("insert_result", async function (id) {
  //console.log('insert id: ', id);
  insert_id = id;
  flag_arrivedMSG = true;
});

socket.on("count_result", async function (col, count, rcv_check, option = "") {
  reset_count();

  if (rcv_check != check) return;
  switch (col) {
    case 계정:
      계정_cnt = 0;
      계정_cnt = JSON.parse(JSON.stringify(count));

    default:
      doc_count = 0;
      doc_count = JSON.parse(JSON.stringify(count));
      break;
  }

  flag_arrivedMSG = true;
});

socket.on("find_result", async function (col, result, rcv_check) {
  reset_result();
  if (rcv_check != check) return;

  switch (col) {
    case 계정:
      계정_v = [];
      계정_v = JSON.parse(JSON.stringify(result));
      break;

    default:
      find_array = [];
      find_array = JSON.parse(JSON.stringify(result));
      break;
  }

  flag_arrivedMSG = true;
});

socket.on("update_result", async function (result) {
  update_count = 0;
  insert_count = 0;
  if (result == null) return;
  //console.log('update result count: ', result.modifiedCount);
  //console.log('insert result count: ', result.upsertedCount);
  update_count = result.modifiedCount;
  insert_count = result.upsertedCount;
  flag_arrivedMSG = true;
});

socket.on("delete_result", async function (count) {
  console.log("delete result count: ", count);
  delete_count = count;
  flag_arrivedMSG = true;
});

socket.on("drop_result", async function (result) {
  console.log("drop result: ", result);
  flag_arrivedMSG = true;
});

socket.on("disconnect", function () {
  console.log("disconnect");
  walker = "";
  const _login_btn = document.getElementById("login_btn");
  _login_btn.innerHTML = "로그인";
  _login_btn.style.coler = "red";
  //socket = io();
});

function reset_result() {}

function reset_count() {}

async function count(col, query, option = "") {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  check++;
  if (check > 10) check = 0;
  socket.emit("count", level, col, query, check, option);
}

async function insert(col, doc) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("insert", worker, col, doc);
}

async function insertMany(col, doc) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("insertMany", worker, col, doc);
}

async function update(col, doc) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("update", worker, col, { 관리번호: doc.관리번호 }, { $set: doc });
}

async function update_계정(col, doc) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("update", worker, col, { id: doc.id }, { $set: doc });
}

async function update_품번(col, doc) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("update", worker, col, { 번호: doc.번호 }, { $set: doc });
}

async function deleteOne(col, management_id) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("delete", worker, col, { 관리번호: management_id });
}

async function deleteOneBSA(col, id) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("delete_by_id", worker, col, id);
}

async function delete_계정(_id) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("delete", worker, 계정, { id: _id });
}

async function drop(_col) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  socket.emit("drop", worker, _col);
}

async function find(col, management_id) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;

  console.log("find:", col, management_id);
  check++;
  if (check > 10) check = 0;
}

async function findOne_품번(col, query) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  check++;
  if (check > 10) check = 0;
  socket.emit(
    "findOne",
    worker,
    col,
    query,
    { sort: { kind: 1 }, projection: 품번_ },
    check
  );
}

async function findOne_계정(col, query) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  check++;
  if (check > 10) check = 0;

  socket.emit(
    "findOne",
    worker,
    col,
    query,
    { sort: { kind: 1 }, projection: 계정_ },
    check
  );
}

async function find_계정(col, query) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  check++;
  if (check > 10) check = 0;

  socket.emit(
    "find",
    worker,
    col,
    query,
    { sort: { kind: 1 }, projection: 계정_ },
    check
  );
}

async function find_품번(col, query) {
  if (socket == undefined) return;
  flag_arrivedMSG = false;
  check++;
  if (check > 10) check = 0;
  socket.emit(
    "find",
    worker,
    col,
    query,
    { sort: { kind: 1 }, projection: 품번_ },
    check
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delay() {
  while (flag_arrivedMSG == false) {
    await sleep(1);
  }

  return true;
}
