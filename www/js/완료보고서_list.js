// 완료보고서 list 페이지 — EOL 완료된 BSA 리스트 + row 클릭 시 완료보고서 표시

var _filter_value_완료;
var _filter_clear_완료;
var _grid_완료;
var _report_list_total_완료;
var _완료_리스트_화면;
var _완료_상세_화면;
var _완료_상세_영역;
var _완료_상세_관리번호;

var 완료보고서_list_table = null;
var flag_완료보고서_list = false;

async function 완료보고서_list_시작() {
  flag_완료보고서_list = false;

  _filter_value_완료 = document.getElementById('filter-value-완료');
  _filter_clear_완료 = document.getElementById('filter-clear-완료');
  _grid_완료 = document.getElementById('grid_완료');
  _report_list_total_완료 = document.getElementById('report-list-total-완료');
  _완료_리스트_화면 = document.getElementById('_완료_리스트_화면');
  _완료_상세_화면 = document.getElementById('_완료_상세_화면');
  _완료_상세_영역 = document.getElementById('_완료_상세_영역');
  _완료_상세_관리번호 = document.getElementById('_완료_상세_관리번호');

  if (!_grid_완료) return;

  // EOL 완료된 BSA 조회 (출하/후속 공정 무관)
  find_BSA재제조(BSA재제조, { EOL: { $ne: '', $exists: true } });
  await delay();

  var list = Array.isArray(BSA재제조_v) ? BSA재제조_v : BSA재제조_v ? [BSA재제조_v] : [];
  list = list.filter(function (d) {
    return d && d.EOL && d.EOL !== '';
  });
  // 최근 완료일 순 정렬
  list.sort(function (a, b) {
    return (b.EOL || '').localeCompare(a.EOL || '');
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
      EOL완료일: (d.EOL || '').substring(0, 10),
      구분: d.구분 || '',
      공정단계: d.공정단계 || '',
    };
  });

  if (_report_list_total_완료) _report_list_total_완료.innerHTML = rows.length;

  if (완료보고서_list_table) {
    try { 완료보고서_list_table.destroy(); } catch (e) {}
    완료보고서_list_table = null;
  }

  완료보고서_list_table = new Tabulator('#grid_완료', {
    layout: 'fitColumns',
    data: rows,
    height: '600px',
    placeholder: 'EOL 완료된 배터리팩이 없습니다',
    columns: [
      { title: 'No', field: 'No', width: 60, hozAlign: 'center', headerSort: false },
      { title: '관리번호', field: '관리번호', minWidth: 160 },
      { title: '재제조번호', field: '재제조번호', minWidth: 140 },
      { title: '차종', field: '차종', minWidth: 100, hozAlign: 'center' },
      { title: '품번', field: '품번', minWidth: 130 },
      { title: 'RO번호', field: 'RO_no', minWidth: 160 },
      { title: '입고일', field: '입고일', minWidth: 100, hozAlign: 'center' },
      { title: 'EOL 완료일', field: 'EOL완료일', minWidth: 110, hozAlign: 'center' },
      { title: '공정단계', field: '공정단계', minWidth: 100, hozAlign: 'center' },
      { title: '구분', field: '구분', minWidth: 80, hozAlign: 'center' },
    ],
  });

  완료보고서_list_table.on('rowClick', function (e, row) {
    var data = row.getData();
    if (!data || !data.관리번호) return;
    관리번호 = data.관리번호;
    window._report_return_url = 'base/완료보고서_list.html';
    window._report_return_flag = 'flag_완료보고서_list';
    flag_완료보고서 = true;
    loadPage('base/완료보고서.html');
    setTimeout(function () {
      var m = document.getElementById('_management_id');
      if (m) m.value = data.관리번호;
    }, 300);
  });

  _filter_value_완료.oninput = function () {
    var q = (_filter_value_완료.value || '').trim().toLowerCase();
    if (!q) {
      완료보고서_list_table.clearFilter();
      return;
    }
    완료보고서_list_table.setFilter(function (row) {
      for (var k in row) {
        if (Object.prototype.hasOwnProperty.call(row, k)) {
          if (String(row[k] || '').toLowerCase().indexOf(q) !== -1) return true;
        }
      }
      return false;
    });
  };

  _filter_clear_완료.onclick = function () {
    _filter_value_완료.value = '';
    완료보고서_list_table.clearFilter();
  };
}

function 완료보고서_list_리스트로() {
  if (_완료_리스트_화면) _완료_리스트_화면.style.display = 'block';
  if (_완료_상세_화면) _완료_상세_화면.style.display = 'none';
  if (_완료_상세_영역) _완료_상세_영역.innerHTML = '';
}
