function loadPage(url) {
  //화면전환 마다 reset
  기초검사_DTC_count = 0;
  EOL_DTC_count = 0;

  const content = document.getElementById('content');

  //화면전환시 타이머 끔
  if (대기수량Timer != undefined) clearInterval(대기수량Timer);
  if (dashboardTimer != undefined) clearInterval(dashboardTimer);

  //child window의 화면만을 바꿈
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`Failed to load page: ${url}`);
      }
    })
    .then((html) => {
      content.innerHTML = html;

      // innerHTML 로 들어간 <script> 는 실행되지 않으므로 새 <script> 요소로 교체해 실행
      // 같은 페이지를 다시 들어오면 const/let 가 재선언되어 SyntaxError 가 나므로
      // 전역 스코프의 const/let 를 var 로 치환 (var 는 재선언 가능)
      content.querySelectorAll('script').forEach((oldScript) => {
        try {
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
          });
          let code = oldScript.textContent || '';
          // 줄/공백/세미콜론/괄호 뒤에 오는 const|let 만 var 로 치환 (식별자 내부는 건드리지 않음)
          code = code.replace(/(^|[\s;{}()])(?:const|let)(\s+)/g, '$1var$2');
          newScript.textContent = code;
          oldScript.parentNode.replaceChild(newScript, oldScript);
        } catch (e) {
          console.warn('inline script execution skipped:', e.message);
        }
      });
    })
    .catch((error) => {
      console.error(error);
      content.innerHTML = `<p>오류가 발생했습니다. 페이지를 로드할 수 없습니다.</p>`;
    });
}
