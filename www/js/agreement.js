function agreement_시작() {
  loadPage("base/agreement.html");
}

function 제공동의서_시작() {
  loadPage("base/제공동의서.html");
}

function 거래확인서_시작() {
  loadPage("base/거래확인서.html");
}

function checkboxClick1(chk) {
  const checkboxes = document.getElementsByName("chkbox1");
  checkboxes.forEach((e) => {
    e.checked = false; // 모든 체크박스를 해제
  });
  chk.checked = true; // 선택한 체크박스만 선택
}

function checkboxClick2(chk) {
  const checkboxes = document.getElementsByName("chkbox2");
  checkboxes.forEach((e) => {
    e.checked = false; // 모든 체크박스를 해제
  });
  chk.checked = true; // 선택한 체크박스만 선택
}
