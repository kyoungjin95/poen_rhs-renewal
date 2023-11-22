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
