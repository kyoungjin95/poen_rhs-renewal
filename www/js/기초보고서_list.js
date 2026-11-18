// 기초보고서 list 페이지 — 기초검사 완료된 BSA 리스트 + row 클릭 시 기초보고서 표시

var _filter_value_보고서리스트;
var _filter_clear_보고서리스트;
var _grid_기초검사;
var _report_list_total;
var _보고서_리스트_화면;
var _보고서_상세_화면;
var _보고서_상세_영역;
var _보고서_상세_관리번호;

var 기초보고서_list_table = null;
var flag_기초보고서_list = false;

async function 기초보고서_list_시작() {
  flag_기초보고서_list = false;

  _filter_value_보고서리스트 = document.getElementById('filter-value');
  _filter_clear_보고서리스트 = document.getElementById('filter-clear');
  _grid_기초검사 = document.getElementById('grid_기초검사');
  _report_list_total = document.getElementById('report-list-total');
  _보고서_리스트_화면 = document.getElementById('_보고서_리스트_화면');
  _보고서_상세_화면 = document.getElementById('_보고서_상세_화면');
  _보고서_상세_영역 = document.getElementById('_보고서_상세_영역');
  _보고서_상세_관리번호 = document.getElementById('_보고서_상세_관리번호');

  if (!_grid_기초검사) return;

  // 기초검사 완료된 BSA 조회 (후속 공정/출하 여부 무관)
  find_BSA재제조(BSA재제조, { 기초검사: { $ne: '', $exists: true } });
  await delay();

  var list = Array.isArray(BSA재제조_v) ? BSA재제조_v : BSA재제조_v ? [BSA재제조_v] : [];
  // 안전 — 빈 문자열 record 도 제거
  list = list.filter(function (d) {
    return d && d.기초검사 && d.기초검사 !== '';
  });
  // 최근 완료일 순 정렬
  list.sort(function (a, b) {
    return (b.기초검사 || '').localeCompare(a.기초검사 || '');
  });

  var no = 0;
  var rows = list.map(function (d) {
    no++;
    return {
      No: no,
      관리번호: d.관리번호 || '',
      재제조번호: d.재제조번호 || '',
      차종: d.차종 || '',
      품번: d.품번 || '',
      RO_no: d.RO_no || '',
      입고일: (d.입고 || '').substring(0, 10),
      기초검사완료일: (d.기초검사 || '').substring(0, 10),
      구분: d.구분 || '',
      공정단계: d.공정단계 || '',
    };
  });

  if (_report_list_total) _report_list_total.innerHTML = rows.length;

  // 기존 table 이 있으면 destroy
  if (기초보고서_list_table) {
    try {
      기초보고서_list_table.destroy();
    } catch (e) {}
    기초보고서_list_table = null;
  }

  기초보고서_list_table = new Tabulator('#grid_기초검사', {
    layout: 'fitColumns',
    data: rows,
    height: '600px',
    placeholder: '기초검사 완료된 배터리팩이 없습니다',
    columns: [
      { title: 'No', field: 'No', width: 60, hozAlign: 'center', headerSort: false },
      { title: '관리번호', field: '관리번호', minWidth: 160 },
      { title: '재제조번호', field: '재제조번호', minWidth: 140 },
      { title: '차종', field: '차종', minWidth: 100, hozAlign: 'center' },
      { title: '품번', field: '품번', minWidth: 130 },
      { title: 'RO번호', field: 'RO_no', minWidth: 160 },
      { title: '입고일', field: '입고일', minWidth: 100, hozAlign: 'center' },
      { title: '기초검사 완료일', field: '기초검사완료일', minWidth: 130, hozAlign: 'center' },
      { title: '공정단계 ', field: '공정단계', minWidth: 130, hozAlign: 'center' },
    ],
  });

  // row 클릭 → 기초보고서.html 페이지로 이동 (단독 모드 — 사이드바 init 정상 동작)
  // 되돌아가기 시 이 list 로 복귀
  기초보고서_list_table.on('rowClick', function (e, row) {
    var data = row.getData();
    if (!data || !data.관리번호) return;
    // 전역 관리번호 변수 (poenRHS.js) 직접 할당 — 기초보고서_조회 가 이걸 사용
    관리번호 = data.관리번호;
    window._report_return_url = 'base/기초보고서_list.html';
    window._report_return_flag = 'flag_기초보고서_list';
    flag_기초보고서 = true;
    loadPage('base/기초보고서.html');
    // loadPage 가 비동기 — DOM 준비된 후 _management_id 강제 채움 (safety)
    setTimeout(function () {
      var m = document.getElementById('_management_id');
      if (m) m.value = data.관리번호;
    }, 300);
  });

  // 검색 input — 모든 컬럼 부분일치 (대소문자 무시)
  _filter_value_보고서리스트.oninput = function () {
    var q = (_filter_value_보고서리스트.value || '').trim().toLowerCase();
    if (!q) {
      기초보고서_list_table.clearFilter();
      return;
    }
    기초보고서_list_table.setFilter(function (row) {
      for (var k in row) {
        if (Object.prototype.hasOwnProperty.call(row, k)) {
          if (
            String(row[k] || '')
              .toLowerCase()
              .indexOf(q) !== -1
          )
            return true;
        }
      }
      return false;
    });
  };

  _filter_clear_보고서리스트.onclick = function () {
    _filter_value_보고서리스트.value = '';
    기초보고서_list_table.clearFilter();
  };
}

// 리스트 row 클릭 시 — 기초보고서.html 에서 보고서 섹션 + 필수 input 만 추출해 상세 영역에 표시
// 옛 검색 UI / 토글 버튼 / 이전페이지 등 raw 영역은 처음부터 안 가져옴
async function 기초보고서_list_상세표시(관리번호) {
  if (!관리번호) return;
  if (_보고서_상세_관리번호) _보고서_상세_관리번호.innerHTML = 관리번호;

  // 기초보고서.html fetch
  var res = await fetch('base/기초보고서.html');
  var htmlText = await res.text();

  // 임시 컨테이너에 파싱 (DOM 으로 만들어 부분 추출)
  var tmp = document.createElement('div');
  tmp.innerHTML = htmlText;
  var bodyEl = tmp.querySelector('body');
  if (!bodyEl) return;

  // === 1) 상세 영역 초기화 ===
  _보고서_상세_영역.innerHTML = '';

  // === 2) 필수 hidden input (_management_id, _재제조번호) — 보고서 JS 가 참조 ===
  var hiddenWrap = document.createElement('div');
  hiddenWrap.style.display = 'none';
  hiddenWrap.innerHTML = '<input type="text" id="_management_id" value="' + 관리번호 + '" />' + '<input type="text" id="_재제조번호" value="" />';
  _보고서_상세_영역.appendChild(hiddenWrap);

  // === 3) 보고서 섹션 9개만 추출해 옮기기 (옛 검색 UI / 단독 button / 이전페이지 등은 안 가져옴) ===
  var SECTION_IDS = ['_기초보고서', '_육안검사외부1', '_육안검사외부2', '_육안검사내부1', '_육안검사내부2', '_기밀검사', '_기밀검사2', '_절연저항검사', '_CAN통신검사'];
  SECTION_IDS.forEach(function (id) {
    var el = bodyEl.querySelector('#' + id);
    if (!el) return;
    el.classList.add('report-section', 'active');
    el.style.display = 'flex';
    _보고서_상세_영역.appendChild(el);
  });

  // === 4) 보고서.html 안의 inline script 모아서 const/let → var 치환 후 실행 (element refs 선언용) ===
  var scriptText = '';
  Array.from(bodyEl.querySelectorAll('script')).forEach(function (s) {
    if (s.src) return;
    scriptText += '\n' + (s.textContent || '');
  });
  scriptText = scriptText.replace(/\bconst\s/g, 'var ').replace(/\blet\s/g, 'var ');
  if (scriptText.trim()) {
    var newScript = document.createElement('script');
    newScript.textContent = scriptText;
    _보고서_상세_영역.appendChild(newScript);
  }

  // === 5) 리스트 숨기고 상세 표시 ===
  _보고서_리스트_화면.style.display = 'none';
  _보고서_상세_화면.style.display = 'block';

  // === 6) 데이터 조회 ===
  setTimeout(async function () {
    if (typeof window.관리번호 !== 'undefined') window.관리번호 = 관리번호;
    if (typeof 기초보고서_조회 === 'function') {
      try {
        await 기초보고서_조회(false);
      } catch (e) {
        console.warn('기초보고서_조회 실패:', e);
      }
    }
  }, 200);
}

// "리스트로" 버튼
function 기초보고서_list_리스트로() {
  if (_보고서_리스트_화면) _보고서_리스트_화면.style.display = 'block';
  if (_보고서_상세_화면) _보고서_상세_화면.style.display = 'none';
  if (_보고서_상세_영역) _보고서_상세_영역.innerHTML = '';
}
