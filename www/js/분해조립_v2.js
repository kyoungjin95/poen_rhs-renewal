// 분해조립 v2 — 새 UI 버전
// 기존 분해조립.js / old_분해조립.js 와 독립

var 분해조립_v2_list_table;
var flag_분해조립_v2 = false;

// 부품 정의 — EV
const EV_부품_정의 = [
  { name: 'BMU', id: 'BMU1', group: null },
  { name: 'CMU', id: 'CMU', group: { from: 1, to: 10 } },
  { name: 'PRA', id: 'PRA1', group: null },
  { name: 'SPA', id: 'SPA1', group: null },
  { name: 'LWR Case', id: 'LWR_C1', group: null },
  { name: 'UPR Case', id: 'UPR_C1', group: null },
  { name: 'PBE', id: 'PBE', group: null, noCombo: true },
  { name: 'Gasket', id: 'Gasket', group: null, noCombo: true },
  { name: 'Relay', id: 'Relay1', group: null },
  { name: 'HV CNTR', id: 'HV_CNTR', group: { from: 1, to: 2 } },
  { name: 'Heating CNTR', id: 'Heating_CNTR1', group: null },
  { name: 'FuseBox', id: 'FuseBox1', group: null },
  { name: 'LV W/H', id: 'LV_W_H1', group: null },
  { name: 'HV W/H', id: 'HV_W_H', group: { from: 1, to: 10 } },
  { name: '온도센서', id: '온도센서', group: { from: 1, to: 10 } },
  { name: 'BMA', id: 'BMA', group: { from: 1, to: 10 } },
];

// 부품 정의 — HEV
const HEV_부품_정의 = [
  { name: 'BMU', id: 'BMU1', group: null },
  { name: 'PRA', id: 'PRA1', group: null },
  { name: '12V', id: '12V', group: null, noCombo: true },
  { name: '온도센서', id: '온도센서', group: { from: 1, to: 10 } },
  { name: 'BMA', id: 'BMA', group: { from: 1, to: 9 } },
  { name: '기타 1', id: '기타1', group: null, noCombo: true },
  { name: '기타 2', id: '기타2', group: null, noCombo: true },
];

async function 분해조립_v2_시작() {
  if (worker == '') return;
  if (typeof _management_id == 'undefined') {
    await sleep(1);
    return;
  }
  if (flag_분해조립_v2 != true) return;
  flag_분해조립_v2 = false;

  console.log('분해조립_v2 시작');
  await 분해조립_v2_list();
}

// BSA재제조 목록 표시 (분해조립 대상 BSA)
async function 분해조립_v2_list() {
  find_BSA재제조(BSA재제조, {
    공정단계: { $ne: '출하' },
    기초검사: { $ne: '' },
    분해조립: { $eq: '' },
    성능검사: { $eq: '' },
    EOL: { $eq: '' },
    소재지: { $nin: ['공정대기', '품질대기', '구장'] },
    완전분해: { $eq: '' },
    폐기: { $eq: '' },
    출하: { $eq: '' },
    구분: { $nin: ['일반기타', '보증기타'] },
  });
  await delay();

  console.log('분해조립_v2 list:', BSA재제조_v ? BSA재제조_v.length : 0);

  분해조립_v2_list_table = new Tabulator('#grid_list', {
    layout: 'resizableColumnFit',
    data: BSA재제조_v || [],
    height: '300px',
    initialSort: [{ column: '관리번호', dir: 'asc' }],
    columns: [
      { title: '관리번호', field: '관리번호', sorter: 'string', width: 160 },
      { title: '재제조번호', field: '재제조번호', sorter: 'string', width: 160 },
      { title: '구분', field: '구분', sorter: 'string', width: 80 },
      { title: '차종', field: '차종', sorter: 'string', width: 100 },
      { title: '품번', field: '품번', sorter: 'string', width: 160 },
      { title: 'RO_no', field: 'RO_no', sorter: 'string', width: 180 },
      { title: '공정단계', field: '공정단계', sorter: 'string', width: 100 },
      { title: '소재지', field: '소재지', sorter: 'string', width: 100 },
      { title: '입고', field: '입고', sorter: 'string', width: 130 },
      { title: '기초검사', field: '기초검사', sorter: 'string', width: 130 },
    ],
  });

  // row 클릭 시 상단 BSA 정보 채움 + 차종에 맞는 부품 영역 렌더 + 불량의심부품 뱃지 + 기존 저장 부품 복원
  분해조립_v2_list_table.on('rowClick', async function (e, row) {
    const data = row.getData();
    _management_id.value = data.관리번호 || '';
    _재제조번호.value = data.재제조번호 || '';
    _RO_no.value = data.RO_no || '';
    _구분.value = data.구분 || '';
    _차종.value = data.차종 || '';
    _품번.value = data.품번 || '';
    console.log('selected:', data.관리번호, data.차종);
    render_부품영역(data.차종);
    // 기존 저장된 고품정보 (자재대기/폐기 부품) 복원
    await 분해조립_v2_복원(data.관리번호);
  });

  // 필터 핸들러
  const fieldEl = document.getElementById('filter-field');
  const typeEl = document.getElementById('filter-type');
  const valueEl = document.getElementById('filter-value');
  const clearBtn = document.getElementById('filter-clear');
  if (fieldEl) fieldEl.addEventListener('change', 분해조립_v2_updateFilter);
  if (typeEl) typeEl.addEventListener('change', 분해조립_v2_updateFilter);
  if (valueEl) valueEl.addEventListener('keyup', 분해조립_v2_updateFilter);
  if (clearBtn)
    clearBtn.addEventListener('click', function () {
      fieldEl.value = '';
      typeEl.value = '=';
      valueEl.value = '';
      분해조립_v2_list_table.clearFilter();
    });
}

function 분해조립_v2_updateFilter() {
  const fieldEl = document.getElementById('filter-field');
  const typeEl = document.getElementById('filter-type');
  const valueEl = document.getElementById('filter-value');
  const filterVal = fieldEl.options[fieldEl.selectedIndex].value;
  const typeVal = typeEl.options[typeEl.selectedIndex].value;
  if (filterVal) 분해조립_v2_list_table.setFilter(filterVal, typeVal, valueEl.value);
}

// 관리번호/재제조번호/RO 로 BSA 조회 (상단 정보 자동 채움)
async function 분해조립_v2_조회(mode) {
  // mode: 0=관리번호, 1=재제조번호, 2=RO
  if (mode == 0) {
    if (!_management_id.value) return;
    find(BSA재제조, _management_id.value);
    await delay();
  } else if (mode == 1) {
    if (!_재제조번호.value) return;
    findOne_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
    await delay();
  } else if (mode == 2) {
    if (!_RO_no.value) return;
    findOne_BSA재제조(BSA재제조, { RO_no: _RO_no.value });
    await delay();
  }

  if (BSA재제조_v != null) {
    _management_id.value = BSA재제조_v.관리번호 || '';
    _재제조번호.value = BSA재제조_v.재제조번호 || '';
    _RO_no.value = BSA재제조_v.RO_no || '';
    _구분.value = BSA재제조_v.구분 || '';
    _차종.value = BSA재제조_v.차종 || '';
    _품번.value = BSA재제조_v.품번 || '';
    render_부품영역(BSA재제조_v.차종);
    // 저장된 고품정보 복원 — 부품 카드에 자동 채움
    await 분해조립_v2_복원(BSA재제조_v.관리번호);
  } else {
    alert('해당 BSA 를 찾을 수 없습니다.');
  }
}

// 교체후 구분(신품/고품) 선택 시 — 고품이면 추가 정보 영역 표시
function 분해조립_v2_교체후_구분(sel) {
  const section = sel.closest('.part-v2__after');
  if (!section) return;
  const oldInfo = section.querySelector('.part-v2__old-info[data-show-when="고품"]');
  if (!oldInfo) return;
  oldInfo.style.display = sel.value === '고품' ? 'grid' : 'none';
}

// 기초보고서 보기 — 페이지 이동. 기초보고서의 "되돌아가기" 누르면 다시 분해조립_v2 로
function 분해조립_v2_기초보고서_팝업() {
  if (!_management_id.value) {
    alert('먼저 관리번호를 선택하세요.');
    return;
  }
  관리번호 = _management_id.value;
  // 기초보고서 의 되돌아가기 버튼이 분해조립_v2 로 돌아오도록 return URL 저장
  window._report_return_url = 'base/분해조립_v2.html';
  window._report_return_flag = 'flag_분해조립_v2';
  flag_기초보고서 = true;
  loadPage('base/기초보고서.html');
}

function 분해조립_v2_기초보고서_닫기() {
  // 사용 안 함 (modal 제거)
}

// 기존 저장된 고품정보 + 옛 분해조립 collection 데이터 복원 — 부품 카드 자동 채움
async function 분해조립_v2_복원(관리번호) {
  if (!관리번호) return;

  const 부품영역 = document.getElementById('_부품영역');
  if (!부품영역) return;

  // 기존 배너 제거
  const oldBanner = document.getElementById('_v2_복원_배너');
  if (oldBanner) oldBanner.remove();

  // === 1) 옛 분해조립 collection 데이터 — 부품별 값을 카드의 바코드 QR 에 채움 ===
  findOne_분해조립(분해조립, { 관리번호: 관리번호 });
  await delay();
  if (분해조립_v != null && typeof 분해조립_v === 'object' && !Array.isArray(분해조립_v)) {
    console.log('[v2 복원] 옛 분해조립 데이터:', Object.keys(분해조립_v).filter(k=>k!=='_id'&&k!=='관리번호').length, '개 필드');
    Object.keys(분해조립_v).forEach(function (key) {
      if (key === '_id' || key === '관리번호') return;
      const value = 분해조립_v[key];
      if (!value || value === '' || value === 'NA') return;

      const partId = key;
      // 카드 찾기 — 단일 카드 또는 그룹 토글
      let card = 부품영역.querySelector('.part-v2[data-part="' + partId + '"]');
      if (!card) {
        const m = partId.match(/^([A-Za-z가-힣_]+?)(\d+)$/);
        if (m) {
          const groupId = m[1];
          const n = parseInt(m[2], 10);
          const numBtns = 부품영역.querySelectorAll(
            '.part-v2__group[data-group="' + groupId + '"] .part-v2__num-btn'
          );
          numBtns.forEach(function (btn) {
            if (parseInt(btn.textContent, 10) === n && !btn.classList.contains('active')) {
              btn.click();
            }
          });
          card = 부품영역.querySelector('.part-v2[data-part="' + partId + '"]');
        }
      }
      if (!card) return;

      // 바코드 QR 영역에 값 채움
      const qrEl = document.getElementById('_' + partId + '_b_QR');
      if (qrEl && !qrEl.value) qrEl.value = value;
    });
  }

  // === 2) 신규 고품정보 collection — 자재대기/폐기 부품 복원 ===
  find_고품정보(고품정보, { 관리번호: 관리번호 });
  await delay();
  if (!Array.isArray(고품정보_v) || 고품정보_v.length === 0) {
    console.log('[v2 복원] 신규 고품정보 없음');
    return;
  }
  console.log('[v2 복원] 신규 고품정보:', 고품정보_v.length, '건');

  const 매칭안된 = [];

  고품정보_v.forEach(function (d) {
    // partId 매칭 — 3단계 fallback
    let partId = d.partId || '';
    if (!partId) {
      const qr = (d.QR || '').toString();
      const prefix = 관리번호 + '_';
      if (qr.startsWith(prefix)) {
        partId = qr.substring(prefix.length);
      }
    }
    if (!partId && d.품명) {
      partId = d.품명.toString().replace(/\s+/g, '');
    }
    console.log('[v2 복원 디버그]', { 품명: d.품명, QR: d.QR, partId_db: d.partId, partId_사용: partId, 폐기여부: d.폐기여부 });

    // partId 로 카드 찾기
    let card = partId ? 부품영역.querySelector('.part-v2[data-part="' + partId + '"]') : null;

    // partId 매칭 실패 시 — 카드 헤더 (.part-v2__name) 텍스트로 매칭 (BMU, PRA 등 단일 카드)
    if (!card && d.품명) {
      const allCards = 부품영역.querySelectorAll('.part-v2[data-part]');
      const 품명_정리 = d.품명.toString().trim();
      for (let i = 0; i < allCards.length; i++) {
        const c = allCards[i];
        const nameEl = c.querySelector('.part-v2__name');
        const nameText = nameEl ? nameEl.textContent.trim() : '';
        if (nameText === 품명_정리 || nameText.replace(/\s+/g, '') === 품명_정리.replace(/\s+/g, '')) {
          card = c;
          partId = c.getAttribute('data-part');
          break;
        }
      }
    }

    // 그룹 부품인 경우 — 번호 grid 자동 클릭 후 카드 생성
    if (!card && partId) {
      // partId 가 "CMU3", "BMA5" 같은 형식이면 그룹 토글
      const m = partId.match(/^([A-Z가-힣]+?)(\d+)$/);
      if (m) {
        const groupId = m[1];
        const n = parseInt(m[2], 10);
        const numBtns = 부품영역.querySelectorAll(
          '.part-v2__group[data-group="' + groupId + '"] .part-v2__num-btn'
        );
        numBtns.forEach(function (btn) {
          if (parseInt(btn.textContent, 10) === n && !btn.classList.contains('active')) {
            btn.click();
          }
        });
        card = 부품영역.querySelector('.part-v2[data-part="' + partId + '"]');
      }
    }

    if (!card) {
      매칭안된.push(d);
      return;
    }

    // 카드에 값 채움
    const id = '_' + partId;
    // 교체전
    const bName = document.getElementById(id + '_b_품명');
    const bNo = document.getElementById(id + '_b_품번');
    const bQR = document.getElementById(id + '_b_QR');
    if (bName) bName.value = d.품명 || '';
    if (bNo) bNo.value = d.품번 || '';
    if (bQR) bQR.value = d.QR || '';
    // 처분 라디오
    const 처분원본 = (d.폐기여부 || '').toString();
    let 처분값 = '';
    if (처분원본 === '자재대기' || 처분원본 === '자재') 처분값 = '자재대기';
    else if (처분원본 === '폐기' || 처분원본 === 'o') 처분값 = '폐기';
    if (처분값) {
      const radio = card.querySelector('input[name="' + partId + '_처분"][value="' + 처분값 + '"]');
      if (radio) radio.checked = true;
    }
    // 교체후
    const aName = document.getElementById(id + '_a_품명');
    const aNo = document.getElementById(id + '_a_품번');
    const aQR = document.getElementById(id + '_a_QR');
    const aSel = document.getElementById(id + '_a_구분');
    if (aName) aName.value = d.교체후품명 || '';
    if (aNo) aNo.value = d.교체후품번 || '';
    if (aQR) aQR.value = d.교체후QR || '';
    if (aSel && d.교체후구분) {
      aSel.value = d.교체후구분;
      // 고품 선택 시 — 고품정보 영역 표시 + 채움
      if (typeof 분해조립_v2_교체후_구분 === 'function') 분해조립_v2_교체후_구분(aSel);
      const aMgmt = document.getElementById(id + '_a_고품관리번호');
      const aRem = document.getElementById(id + '_a_재제조번호');
      const aRO = document.getElementById(id + '_a_RO');
      if (aMgmt) aMgmt.value = d.교체후고품관리번호 || '';
      if (aRem) aRem.value = d.교체후재제조번호 || '';
      if (aRO) aRO.value = d.교체후RO || '';
    }
    // 비고
    const 비고el = document.getElementById(id + '_비고');
    if (비고el && d.비고) 비고el.value = d.비고;
  });

  // 매칭 안 된 옛 데이터 — 상단 배너에 list 로 표시
  if (매칭안된.length) {
    const 배너 = document.createElement('div');
    배너.id = '_v2_복원_배너';
    배너.className = 'suspicious-banner';
    배너.style.borderLeftColor = '#3b82f6';
    배너.innerHTML =
      '<div class="suspicious-banner__title" style="color:#1e40af">📦 기존 등록 부품 (옛 자료 — 카드 매칭 안 됨)</div>' +
      '<div class="suspicious-banner__list">' +
      매칭안된
        .map(function (d) {
          const 구분 = (d.폐기여부 || '').toString();
          const 표시 = 구분 === '폐기' || 구분 === 'o' ? '폐기' : '자재대기';
          return (
            '<span class="suspicious-banner__chip">' +
            (d.품명 || '?') + ' (' + 표시 + ')' +
            (d.QR ? ' [' + d.QR + ']' : '') +
            '</span>'
          );
        })
        .join('') +
      '</div>';
    부품영역.insertBefore(배너, 부품영역.firstChild);
    console.log('[v2 복원] 매칭 안 된 옛 데이터:', 매칭안된.length, '건');
  }
}

// 저장 — 교환전 고품(자재대기/폐기) 을 고품정보 collection 에 insert
async function 분해조립_v2_save() {
  const 관리번호 = ((_management_id && _management_id.value) || '').trim().toUpperCase();
  if (!관리번호) {
    alert('관리번호를 입력하세요');
    return;
  }

  const 부품영역 = document.getElementById('_부품영역');
  if (!부품영역) return;

  const cards = 부품영역.querySelectorAll('.part-v2[data-part]');
  const 저장_리스트 = [];
  const 등록_시각 = new Date().toISOString().slice(0, 19).replace('T', ' ');
  // 분해조립 collection 용 doc — 부품별 (BMU1, CMU3, BMA5 등) 필드에 교환전 정보 저장
  const 분해조립_doc = { 관리번호: 관리번호 };

  cards.forEach(function (card) {
    const partId = card.getAttribute('data-part');
    if (!partId) return;
    const id = '_' + partId;
    const nameEl = card.querySelector('.part-v2__name');
    const 부품명 = (nameEl && nameEl.textContent.trim()) || partId;

    // 교환전 입력
    const b_품명 = (document.getElementById(id + '_b_품명') || {}).value || '';
    const b_품번 = (document.getElementById(id + '_b_품번') || {}).value || '';
    const b_QR = (document.getElementById(id + '_b_QR') || {}).value || '';

    // 교환후 입력
    const a_품명 = (document.getElementById(id + '_a_품명') || {}).value || '';
    const a_품번 = (document.getElementById(id + '_a_품번') || {}).value || '';
    const a_QR = (document.getElementById(id + '_a_QR') || {}).value || '';
    const a_구분 = (document.getElementById(id + '_a_구분') || {}).value || '';
    const a_고품관리번호 = (document.getElementById(id + '_a_고품관리번호') || {}).value || '';
    const a_재제조번호 = (document.getElementById(id + '_a_재제조번호') || {}).value || '';
    const a_RO = (document.getElementById(id + '_a_RO') || {}).value || '';

    // 처분: 자재대기 / 폐기
    const checked = card.querySelector('input[name="' + partId + '_처분"]:checked');
    const 처분 = checked ? checked.value : '';

    // 비고
    const 비고 = (document.getElementById(id + '_비고') || {}).value || '';

    // 분해조립 collection 의 부품별 필드 채움 — 교환전 정보가 하나라도 있으면 저장
    if (b_품명 || b_품번 || b_QR || 처분) {
      const 값 = [b_품명, b_품번, b_QR].filter(Boolean).join(' / ');
      분해조립_doc[partId] = 처분 ? (값 + ' [' + 처분 + ']') : 값;
    }

    // 처분이 자재대기 또는 폐기 인 경우만 고품정보 insert
    if (처분 === '자재대기' || 처분 === '폐기') {
      // 번호 추출 (그룹 부품: "BMA 5" → 번호 "5")
      const numMatch = 부품명.match(/(\d+)\s*$/);
      const 번호 = numMatch ? numMatch[1] : '';

      const doc = {
        관리번호: 관리번호,
        재제조번호: typeof BSA재제조_v !== 'undefined' && BSA재제조_v ? BSA재제조_v.재제조번호 || '' : '',
        partId: partId, // 부품 카드 id — 복원 시 매칭용
        품명: b_품명 || 부품명,
        품번: b_품번,
        번호: 번호,
        QR: b_QR || 관리번호 + '_' + partId, // 사용자 QR 입력 없으면 관리번호+partId 로 자동 생성
        // 폐기여부 필드를 '구분' 으로 통일 사용 — '자재대기' / '폐기'
        폐기여부: 처분,
        // 교환후 데이터 — 신품 또는 고품 (재사용 부품)
        교체후품명: a_품명,
        교체후품번: a_품번,
        교체후QR: a_QR,
        교체후구분: a_구분, // '신품' / '고품'
        교체후고품관리번호: a_고품관리번호,
        교체후재제조번호: a_재제조번호,
        교체후RO: a_RO,
        사용여부: '',
        사용_관리번호: '',
        등록일: 등록_시각,
        사용일: '',
        등록_작업자: typeof worker !== 'undefined' ? worker || '' : '',
        사용_작업자: '',
        폐기품출고: '',
        비고: 비고,
      };
      저장_리스트.push(doc);
    }
  });

  if (!저장_리스트.length) {
    alert('자재대기 또는 폐기로 표시된 부품이 없습니다');
    return;
  }

  // 고품정보 insert (각 부품마다)
  for (let i = 0; i < 저장_리스트.length; i++) {
    insert(고품정보, 저장_리스트[i]);
    await sleep(50);
  }

  // 분해조립 collection update — 부품별 필드에 교환전 정보 (재제조 분해조립 화면 표시용)
  if (Object.keys(분해조립_doc).length > 1 && typeof update === 'function') {
    update(분해조립, 분해조립_doc);
    await delay();
  }

  // BSA재제조 — 분해조립 완료일 update, 공정단계 진행
  const bsaDoc = {
    관리번호: 관리번호,
    분해조립: 등록_시각,
    공정단계: '성능검사',
  };
  if (typeof update === 'function') {
    update(BSA재제조, bsaDoc);
    await delay();
  }

  const 자재 = 저장_리스트.filter(function (d) { return d.폐기여부 === '자재대기'; }).length;
  const 폐기 = 저장_리스트.filter(function (d) { return d.폐기여부 === '폐기'; }).length;
  alert('저장 완료\n— 자재대기 ' + 자재 + '건\n— 폐기 ' + 폐기 + '건\n총 ' + 저장_리스트.length + '건 고품정보에 등록됨');
}

// 불량의심부품 — 기초검사에서 입력한 정보를 부품영역 상단에 배너로 표시
async function 분해조립_v2_불량의심_표시(관리번호) {
  if (!관리번호) return;
  find(기초검사, 관리번호);
  await delay();
  const items = (typeof 기초검사_v !== 'undefined' && 기초검사_v && 기초검사_v.의심부품) || [];

  const 부품영역 = document.getElementById('_부품영역');
  if (!부품영역) return;

  // 기존 배너 제거
  const old = document.getElementById('_의심부품_배너');
  if (old) old.remove();

  if (!items.length) {
    console.log('[v2 의심부품] 없음');
    return;
  }

  const 배너 = document.createElement('div');
  배너.id = '_의심부품_배너';
  배너.className = 'suspicious-banner';
  배너.innerHTML =
    '<div class="suspicious-banner__title">🔴 불량의심부품 (기초검사 가이드)</div>' +
    '<div class="suspicious-banner__list">' +
    items
      .map(function (it) {
        const 사유 = it.사유 ? ' — ' + it.사유 : '';
        return '<span class="suspicious-banner__chip">' + it.부품 + 사유 + '</span>';
      })
      .join('') +
    '</div>';
  부품영역.insertBefore(배너, 부품영역.firstChild);

  // 그룹 부품(BMA 9 같이 숫자 있는)이면 그 번호 버튼 자동 활성화 + 카드 펼침
  items.forEach(function (it) {
    const m = (it.부품 || '').match(/^(.+?)\s+(\d+)$/);
    if (!m) return;
    const partName = m[1].trim();
    const num = parseInt(m[2], 10);
    // 매칭하는 그룹 찾기 (헤더 이름 일치)
    const groups = document.querySelectorAll('.part-v2__group');
    groups.forEach(function (g) {
      const nameEl = g.querySelector('.part-v2__name');
      if (!nameEl) return;
      if (nameEl.textContent.trim() !== partName) return;
      const btns = g.querySelectorAll('.part-v2__num-btn');
      btns.forEach(function (btn) {
        if (parseInt(btn.textContent, 10) === num && !btn.classList.contains('active')) {
          btn.click();
        }
      });
    });
  });

  console.log('[v2 의심부품] 표시:', items.length, '건');
}

// ====================================================
// 부품 카드 동적 렌더링
// ====================================================

// 단일 부품 카드 HTML 생성
function make_단일_카드(부품) {
  const id = '_' + 부품.id;
  const 콤보 = 부품.noCombo
    ? ''
    : `<div class="field"><label>구분</label><select id="${id}_a_구분" onchange="분해조립_v2_교체후_구분(this);"><option value="">---</option><option value="신품">신품</option><option value="고품">고품</option></select></div>`;
  const 고품정보 = 부품.noCombo
    ? ''
    : `<div class="part-v2__old-info" data-show-when="고품" style="display:none"><div class="field"><label>고품 관리번호</label><input type="text" id="${id}_a_고품관리번호" /></div><div class="field"><label>재제조번호</label><input type="text" id="${id}_a_재제조번호" /></div><div class="field"><label>R/O 번호</label><input type="text" id="${id}_a_RO" /></div></div>`;
  const html = `
    <div class="part-v2" data-part="${부품.id}">
      <div class="part-v2__header">
        <span class="part-v2__name">${부품.name}</span>
        <span class="part-v2__status">재제조 진행</span>
      </div>
      <div class="part-v2__body">
        <div class="part-v2__section part-v2__before">
          <div class="part-v2__tag tag-old">교체전 (고품)</div>
          <div class="part-v2__fields">
            <div class="field"><label>품명</label><input type="text" id="${id}_b_품명" placeholder="품명 입력" /></div>
            <div class="field"><label>품번</label><input type="text" id="${id}_b_품번" placeholder="품번 입력" /></div>
            <div class="field"><label>바코드 QR</label><input type="text" id="${id}_b_QR" placeholder="QR 코드 입력" /></div>
          </div>
          <div class="part-v2__actions">
            <span class="part-v2__action-label">교체 후 처분:</span>
            <label class="radio-pill"><input type="radio" name="${부품.id}_처분" value="자재대기" /> 자재대기</label>
            <label class="radio-pill"><input type="radio" name="${부품.id}_처분" value="폐기" /> 폐기</label>
          </div>
        </div>
        <div class="part-v2__section part-v2__after">
          <div class="part-v2__tag tag-new">교체후</div>
          <div class="part-v2__fields">
            ${콤보}
            <div class="field"><label>품명</label><input type="text" id="${id}_a_품명" placeholder="품명 입력" /></div>
            <div class="field"><label>품번</label><input type="text" id="${id}_a_품번" placeholder="품번 입력" /></div>
            <div class="field"><label>바코드 QR</label><input type="text" id="${id}_a_QR" placeholder="QR 코드 입력" /></div>
          </div>
          ${고품정보}
        </div>
        <div class="part-v2__memo">
          <label>비고</label>
          <input type="text" id="${id}_비고" placeholder="메모" />
        </div>
      </div>
    </div>
  `;
  const wrap = document.createElement('div');
  wrap.innerHTML = html.trim();
  return wrap.firstChild;
}

// 그룹 부품 카드 (헤더 + 번호 그리드 + 활성 카드 영역)
function make_그룹_카드(부품) {
  const groupId = 부품.id;
  const from = 부품.group.from;
  const to = 부품.group.to;
  let 번호_html = '';
  for (let n = from; n <= to; n++) {
    번호_html += `<button type="button" class="part-v2__num-btn" onclick="분해조립_v2_그룹_토글('${groupId}', ${n}, this)">${n}</button>`;
  }
  const html = `
    <div class="part-v2__group" data-group="${groupId}">
      <div class="part-v2__group-header">
        <span class="part-v2__name">${부품.name}</span>
        <div class="part-v2__num-grid">${번호_html}</div>
      </div>
      <div class="part-v2__group-body" id="_${groupId}_body"></div>
    </div>
  `;
  const wrap = document.createElement('div');
  wrap.innerHTML = html.trim();
  return wrap.firstChild;
}

// 그룹 안의 번호 클릭 → 그 번호의 카드 추가/제거
function 분해조립_v2_그룹_토글(groupId, n, btn) {
  const body = document.getElementById('_' + groupId + '_body');
  if (!body) return;
  const partId = groupId + n;
  const existing = body.querySelector('[data-part="' + partId + '"]');
  if (existing) {
    existing.remove();
    btn.classList.remove('active');
    return;
  }
  const 부품 = { name: groupId.replace(/_/g, ' ') + ' ' + n, id: partId };
  body.appendChild(make_단일_카드(부품));
  btn.classList.add('active');
}

// 부품 영역 렌더링 — 차종에 따라 EV/HEV 분기
function render_부품영역(차종) {
  const isHEV = /HEV/i.test(차종 || '');
  const 정의 = isHEV ? HEV_부품_정의 : EV_부품_정의;
  const 부품영역 = document.getElementById('_부품영역');
  if (!부품영역) return;
  부품영역.innerHTML = '';
  정의.forEach(function (부품) {
    if (부품.group) {
      부품영역.appendChild(make_그룹_카드(부품));
    } else {
      부품영역.appendChild(make_단일_카드(부품));
    }
  });
  console.log('[v2 render] 차종:', 차종, isHEV ? 'HEV' : 'EV', '부품:', 정의.length, '개');
}
