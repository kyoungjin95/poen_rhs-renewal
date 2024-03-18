var 계정_stat = "";

async function login() {
  console.log("try login");
  const _id = document.getElementById("_id");
  const _passwd = document.getElementById("_passwd");
  const _login_btn = document.getElementById("login_btn");

  if (_id.value == "" || _passwd.value == "") return;

  const hash = CryptoJS.MD5(_passwd.value);

  findOne_계정(계정, { id: _id.value, passwd: hash.toString() });
  await delay();

  if (계정_v != null) {
    if (worker == "") {
      worker = _id.value;
      console.log('작업자:', worker);
      findOne_계정(계정, { id: _id.value });
      await delay();
      계정_stat = 계정_v;
      //console.log(계정_stat);

      //sessionStorage.setItem('worker',  worker);
      sessionStorage.setItem("level", 계정_stat.level);

      alert("로그인 성공");

      const _login_btn = document.getElementById("login_btn");

      setTimeout(async function () {
        loadPage("base/dashboard.html");
        start_repeat_대시보드();
        대시보드_시작();
        if (level == "관리자") admin_btn.style.display = "block";
        부품재고_btn.style.display = "block";
        //if(level == '부품관리자') 부품재고_btn.style.display = 'block';

        var DateTime = luxon.DateTime;
        var seoul = DateTime.local().setZone("Asia/Seoul");
        var now = seoul.toString();
        var year = now.substr(0, 4);
        var month = String(Number(now.substr(5, 2)) - 3).padStart(2, "0");
        var day = now.substr(8, 2);
        var 기준일 = year + "-" + month + "-" + day + "T00:00:00Z";

        count(BSA재제조, {
          마지막충전일: { $lte: 기준일, $ne: "" },
          공정단계: { $ne: "출하" },
        });
        await delay();

        console.log("recharge_count: ", doc_count);
        if (doc_count > 0) {
          alert("재충전이 필요한 BSA가 있습니다.");
        }
      }, 1000);
      await sleep(1);
      alert('#공지사항#\nVersion update sky 0.71\n1. 성능검사 저장시 완료보고서 DCIR 검사 표와 차트,\n 용량평가 그래프 자동 처리 DATA 저장');
    } else if (worker == _id.value) {
      worker = "";
      level = "";
      sessionStorage.clear();
      admin_btn.style.display = "none";
      부품재고_btn.style.display = "none";
      const _login_info = document.getElementById("login_info");
    }
    change_label();
  } else {
    alert("계정 정보가 맞지 않습니다");
  }
}

async function change_label() {
  await sleep(10);
  const _label = document.getElementById("login_label");
  const _login_btn = document.getElementById("login_btn");
  const _login_info = document.getElementById("login_info");

  if (_login_btn.innerHTML == "로그아웃") {
    sessionStorage.clear();
    worker = "";
    level = "";
    admin_btn.style.display = "none";
    //_label.innerHTML = "Login";
    _login_btn.innerHTML = "로그인";
    _login_info.innerHTML = "";
    const _admin_btn = document.getElementById("부품재고_btn");
    _admin_btn.style.display = "none";
    const _부품재고_btn = document.getElementById("부품재고_btn");
    _부품재고_btn.style.display = "none";
  }

  var _worker = sessionStorage.getItem("worker");
  level = sessionStorage.getItem("level");
  if (_worker != "" && _worker != null) worker = _worker;
  console.log("worker in change label :", worker);
  if (worker == "" || worker == "null" || worker == null) {
    worker = "";
    level = "";
    admin_btn.style.display = "none";
    _login_btn.innerHTML = "로그인";
    _login_info.innerHTML = "";
  } else {
    _login_btn.innerHTML = "로그아웃";
    _login_info.innerHTML = worker;
  }

  find_계정(계정, { id: "admin" });
  await delay();

  if (계정_v == null || level == "admin") {
    admin_btn.style.display = "block";
  }
}
