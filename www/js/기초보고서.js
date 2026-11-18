async function 기초보고서_시작() {
  while (_management_id == undefined) {
    await sleep(1);
  }
  flag_기초보고서 = false;

  기초보고서_조회(false);
  console.log('->', 관리번호);

  _기초보고서_사이드바_init();
}

// 기초보고서 페이지 — 좌측 사이드바 + 섹션 토글 + 다운로드 아이콘
function _기초보고서_사이드바_init() {
  // 이 페이지의 핵심 요소가 없으면 (다른 페이지면) skip
  if (!document.getElementById('_기초보고서')) return;

  if (document.querySelector('#content .report-layout')) return;

  document.querySelectorAll('.report-layout').forEach(function (el) {
    el.remove();
  });

  // 섹션 + PDF 키
  const sections = [
    { id: '_기초보고서', label: '기초보고서', pdfKey: '' },
    { id: '_육안검사외부1', label: '육안검사 외부', pdfKey: '육외' },
    { id: '_육안검사외부2', label: '육안검사 외부 (상세)', pdfKey: '육외상' },
    { id: '_육안검사내부1', label: '육안검사 내부', pdfKey: '육내' },
    { id: '_육안검사내부2', label: '육안검사 내부 (상세)', pdfKey: '육내상' },
    { id: '_기밀검사', label: '기밀검사', pdfKey: '기밀' },
    { id: '_기밀검사2', label: '기밀검사 (특이사항)', pdfKey: '기밀특이' },
    { id: '_절연저항검사', label: '절연저항 검사', pdfKey: '절연' },
    { id: '_CAN통신검사', label: 'CAN 통신 검사', pdfKey: 'CAN' },
    // HEV 전용 상세 페이지
    { id: '_육안검사외부_HEV', label: '육안검사 외부', pdfKey: 'HEV육외' },
    { id: '_절연저항검사_HEV', label: '절연저항 검사', pdfKey: 'HEV절연' },
    { id: '_CAN통신검사_HEV2', label: '통신 검사', pdfKey: 'HEVCAN2' },
    { id: '_CAN통신검사_HEV', label: '교차 검사', pdfKey: 'HEVCAN' },
    { id: '_BMS_PCB', label: 'PCB 검사', pdfKey: 'HEVPCB' },
    { id: '_개별모듈실측전압', label: '실측 검사', pdfKey: 'HEV실측' },
  ];

  const content = document.getElementById('content');

  // 불필요 영역 숨김: 기존 노란 PDF 버튼 + 단독 이전페이지/저장 버튼
  document.querySelectorAll('.report__btns').forEach(function (el) {
    el.style.display = 'none';
  });
  // body 직속에 떠있는 단독 button (이전페이지/저장 등) 숨김
  Array.from(document.querySelectorAll('body > button, #content > button')).forEach(function (btn) {
    btn.style.display = 'none';
  });

  sections.forEach(function (s, idx) {
    const el = document.getElementById(s.id);
    if (el) {
      el.classList.add('report-section');
      if (idx === 0) el.classList.add('active');
    }
  });

  const layout = document.createElement('section');
  layout.className = 'report-layout';

  const sidebar = document.createElement('aside');
  sidebar.className = 'report-sidebar';

  // 검색 영역은 메인 콘텐츠 위쪽에 배치 (관리번호만, 재제조번호 행 숨김)
  const searchBox = document.createElement('div');
  searchBox.className = 'report-main-search';
  const tbTable = document.getElementById('tb');
  if (tbTable && tbTable.parentNode) {
    const trs = tbTable.querySelectorAll('tr');
    if (trs[1]) trs[1].style.display = 'none';
    searchBox.appendChild(tbTable);
  }

  // canvas (PDF 생성용 보조 element) 숨김
  const canvas = document.getElementById('_canvas');
  if (canvas) {
    canvas.style.display = 'none';
    if (canvas.parentNode) canvas.parentNode.style.display = 'none';
  }

  const navWrap = document.createElement('div');
  navWrap.innerHTML =
    '<div class="report-sidebar-title">목차</div><ul>' +
    sections
      .map(function (s, i) {
        return (
          '<li class="report-nav-item">' +
          '<button class="report-nav-link" data-target="' +
          s.id +
          '"' +
          (i === 0 ? ' data-active="1"' : '') +
          '>' +
          s.label +
          '</button>' +
          '<button class="report-nav-pdf" data-pdf="' +
          s.pdfKey +
          '" title="PDF 다운로드"><i class="fa-solid fa-download"></i></button>' +
          '</li>'
        );
      })
      .join('') +
    '</ul>';
  sidebar.appendChild(navWrap);

  const main = document.createElement('div');
  main.className = 'report-main';

  // 메인 영역 최상단에 관리번호 검색 영역 배치
  main.appendChild(searchBox);

  sections.forEach(function (s) {
    const el = document.getElementById(s.id);
    if (el && el.parentNode) {
      main.appendChild(el);
    }
  });

  // 사이드바 하단: 되돌아가기 버튼
  const backBtn = document.createElement('button');
  backBtn.className = 'report-back-btn';
  backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> 되돌아가기';
  backBtn.onclick = function () {
    // 다른 페이지에서 setReturn URL 저장한 경우 그쪽으로 복귀
    if (window._report_return_url) {
      const url = window._report_return_url;
      const flagName = window._report_return_flag;
      window._report_return_url = '';
      window._report_return_flag = '';
      if (flagName && typeof window[flagName] !== 'undefined') window[flagName] = true;
      loadPage(url);
      return;
    }
    if (typeof 기초검사_이전페이지 === 'function') 기초검사_이전페이지();
    else if (typeof 이전페이지 === 'function') 이전페이지();
  };
  sidebar.appendChild(backBtn);

  layout.appendChild(sidebar);
  layout.appendChild(main);
  content.appendChild(layout);

  const firstLink = sidebar.querySelector('.report-nav-link[data-active="1"]');
  if (firstLink) firstLink.classList.add('active');

  sidebar.querySelectorAll('.report-nav-link').forEach(function (btn) {
    btn.onclick = function () {
      sidebar.querySelectorAll('.report-nav-link').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      document.querySelectorAll('.report-section').forEach(function (s) {
        s.classList.remove('active');
      });
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
    };
  });

  sidebar.querySelectorAll('.report-nav-pdf').forEach(function (btn) {
    btn.onclick = function (e) {
      e.stopPropagation();
      const key = btn.dataset.pdf;
      // PDF 캡처 동안 모든 섹션 일시적으로 보이게 (display:none 이면 html2canvas 가 빈 캡처)
      layout.classList.add('capturing');
      try {
        if (typeof 기초보고서_save === 'function') {
          key ? 기초보고서_save(key) : 기초보고서_save();
        }
      } catch (err) {
        console.error('기초보고서_save 호출 실패:', err);
      }
      // html2canvas + pdfMake 가 비동기라 약간 여유 두고 원복
      setTimeout(function () {
        layout.classList.remove('capturing');
      }, 4000);
    };
  });
}

async function 기초보고서_조회(is재제조번호 = false) {
  // 사용자가 입력한 값 우선 — 없을 때만 전역 관리번호 사용
  if (_management_id.value && _management_id.value.trim() !== '') {
    관리번호 = _management_id.value.trim();
  } else {
    _management_id.value = 관리번호;
  }

  if (is재제조번호 == true) {
    //재제조 번호로 조회
    findOne_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
    await delay();

    if (BSA재제조_v != null) {
      _management_id.value = BSA재제조_v.관리번호;
      _재제조번호.value = BSA재제조_v.재제조번호;
    }
  } else {
    //관리번호로 조회
    findOne_BSA재제조(BSA재제조, { 관리번호: _management_id.value });
    await delay();

    if (BSA재제조_v != null) {
      _management_id.value = BSA재제조_v.관리번호;
      _재제조번호.value = BSA재제조_v.재제조번호;
    }
  }

  //입고 데이터 조회
  findOne_입고(입고, { 관리번호: _management_id.value });
  await delay();

  if (입고_v != null) {
    _차종.innerHTML = 입고_v.차종;
    _입고일.innerHTML = 입고_v.입고일;
    // 전역 차종 변수 (poenRHS.js) 할당 — line 401 의 switch (차종) 가 이걸 사용
    차종 = 입고_v.차종 || '';

    //차종별 표시할 부분만 표시
    switch (입고_v.차종) {
      case 'CS_EV':
        showTable('_CS_EV');
        break;

      case 'CV_EV':
        showTable('_CV_EV');
        break;

      case 'DE_EV':
        showTable('_DE_EV');
        break;

      case 'HR_EV':
        showTable('_HR_EV');
        break;

      case 'LK_EV':
      case 'LK_FCEV':
      case 'LK_FC':
        showTable('_LK_EV');
        break;

      case 'LM_EV':
        showTable('_LM_EV');
        break;

      case 'NE_EV':
        showTable('_NE_EV');
        break;

      case 'OS_EV':
      case 'SK3_EV':
        showTable('_OS_SK3_EV');
        break;

      case 'PU_EV':
        showTable('_PU_EV');
        break;
      case 'DE_HEV':
        showTable('_HEV');
        break;
      case 'GL3_HEV':
        showTable('_HEV');
        break;
      case 'DL3_HEV':
        showTable('_HEV');
        break;
      case 'YG_HEV':
        showTable('_HEV');
        break;
      case 'JF_HEV':
        showTable('_HEV');
        break;
      case 'SG2_HEV':
        showTable('_HEV');
        break;
      case 'NQ5_HEV':
        showTable('_HEV');
        break;

      default:
        showTable('_CS_EV');
        alert('차종을 확인해 주세요');
    }

    //HEV/EV 목차·섹션 분기: HEV는 HEV 전용만, EV는 HEV 전용 제외
    var isHEV = String(입고_v.차종 || '')
      .trim()
      .toUpperCase()
      .endsWith('HEV');
    var HEV_전용 = ['_육안검사외부_HEV', '_절연저항검사_HEV', '_CAN통신검사_HEV2', '_CAN통신검사_HEV', '_BMS_PCB', '_개별모듈실측전압'];
    var HEV_표시 = ['_기초보고서'].concat(HEV_전용);
    var 보일섹션 = isHEV ? HEV_표시 : null; // EV는 HEV_전용만 제외
    document.querySelectorAll('.report-nav-item').forEach(function (li) {
      var link = li.querySelector('.report-nav-link');
      if (!link) return;
      var tid = link.dataset.target;
      var show = isHEV ? 보일섹션.indexOf(tid) !== -1 : HEV_전용.indexOf(tid) === -1;
      li.style.display = show ? '' : 'none';
    });
    //안 보일 섹션이 active 면 메인(기초보고서)으로 되돌림
    document.querySelectorAll('.report-section').forEach(function (sec) {
      var keep = isHEV ? HEV_표시.indexOf(sec.id) !== -1 : HEV_전용.indexOf(sec.id) === -1;
      if (!keep) sec.classList.remove('active');
    });
    var main섹션 = document.getElementById('_기초보고서');
    if (main섹션) main섹션.classList.toggle('hev-main', isHEV); // HEV 1페이지 컴팩트 모드
    //HEV 는 재제조 Com-ment 행 숨김 (EV 는 표시)
    var _재제조행 = document.getElementById('_재제조comment_row');
    if (_재제조행) _재제조행.style.display = isHEV ? 'none' : '';
    if (main섹션 && !document.querySelector('.report-section.active')) main섹션.classList.add('active');
  }

  //입고 사진 로딩
  find(입고_pic, _management_id.value);
  await delay();

  if (입고_pic_v != null) {
    _입고사진.src = 입고_pic_v.pic1;
  }

  //사용 변수 선언 및 초기화
  var 외부검사 = '';
  var 외부검사사유 = '';
  var 내부검사 = '';
  var 내부검사사유 = '';
  var 케이스 = '';
  var 케이스감압량 = '';
  var 냉각유로 = '';
  var 냉각유로감압량 = '';
  var 부품정보유무 = 'NG';
  var 절연검사_B_P = '';
  var 절연검사_B_N = '';
  var 절연검사_B_P판정 = '';
  var 절연검사_B_N판정 = '';

  //부푸정보 유무 체크
  find(부품정보_list, _management_id.value);
  await delay();

  if (부품정보_list_v != null) {
    부품정보유무 = 'OK';
  }

  //세척 데이터 로드
  find(세척, _management_id.value);
  await delay();

  if (세척_v != null) {
    외부검사 = 세척_v.육안검사_외부;
    외부검사사유 = 세척_v.육안검사_외부_특이사항;
    케이스 = 세척_v.기밀검사_케이스;
    케이스감압량 = 세척_v.기밀검사_케이스_특이사항;
  }

  //불량 의심 부품 코멘트 로딩
  find(불량의심부품, _management_id.value);
  await delay();

  if (불량의심부품_v != null) {
    _재제조comment.innerHTML = 불량의심부품_v.재제조comment;
  }

  //기초검사 데이터 로딩
  findOne_기초검사(기초검사, { 관리번호: _management_id.value });
  await delay();

  if (기초검사_v != null) {
    var 고장코드 =
      기초검사_v.통신검사_DTC코드1 == '' &&
      기초검사_v.통신검사_DTC코드2 == '' &&
      기초검사_v.통신검사_DTC코드3 == '' &&
      기초검사_v.통신검사_DTC코드4 == '' &&
      기초검사_v.통신검사_DTC코드5 == '' &&
      기초검사_v.통신검사_DTC코드6 == '' &&
      기초검사_v.통신검사_DTC코드7 == '' &&
      기초검사_v.통신검사_DTC코드8 == '' &&
      기초검사_v.통신검사_DTC코드9 == '' &&
      기초검사_v.통신검사_DTC코드10 == ''
        ? 'OK'
        : 'NG';

    //고장사유 멘트 만들기
    var 고장사유 =
      기초검사_v.통신검사_DTC코드1 +
      ' ' +
      기초검사_v.통신검사_DTC코드2 +
      ' ' +
      기초검사_v.통신검사_DTC코드3 +
      ' ' +
      기초검사_v.통신검사_DTC코드4 +
      ' ' +
      기초검사_v.통신검사_DTC코드5 +
      ' ' +
      기초검사_v.통신검사_DTC코드6 +
      ' ' +
      기초검사_v.통신검사_DTC코드7 +
      ' ' +
      기초검사_v.통신검사_DTC코드8 +
      ' ' +
      기초검사_v.통신검사_DTC코드9 +
      ' ' +
      기초검사_v.통신검사_DTC코드10;

    console.log('고장코드 사유:', 고장사유);

    //common (차종에 상관없이 모두 쓰이는 부분)
    _VIN.innerHTML = 기초검사_v.VIN;
    _RO.innerHTML = 기초검사_v.RO_no;
    _주행거리.innerHTML = 기초검사_v.주행거리;
    _차량번호.innerHTML = 기초검사_v.차량번호;
    _생산일.innerHTML = 기초검사_v.BSA생산일자;
    _판매일.innerHTML = 기초검사_v.BSA판매일자;
    _수리일.innerHTML = 기초검사_v.BSA수리일자;
    _관리번호.innerHTML = _management_id.value;
    _필드현상.innerHTML = 기초검사_v.필드현상;
    _센터진단.innerHTML = 기초검사_v.센터진단내용;
    _센터조치.innerHTML = 기초검사_v.AS센터조치;
    _작성자.innerHTML = worker;
    _작성일.innerHTML = 기초검사_v.공정완료일;
    _분석결과값.innerHTML = 기초검사_v.분석결과;

    내부검사 = 기초검사_v.육안검사_내부;
    내부검사사유 = 기초검사_v.육안검사_내부_특이사항;

    냉각유로 = 기초검사_v.기밀검사_냉각유로;
    냉각유로감압량 = 기초검사_v.기밀검사_냉각유로_특이사항;

    절연검사_B_P = 기초검사_v.절연검사_Plus;
    절연검사_B_P판정 = 기초검사_v.절연검사_Plus판정;
    절연검사_B_N = 기초검사_v.절연검사_Minus;
    절연검사_B_N판정 = 기초검사_v.절연검사_Minus판정;

    // === 차종별 prefix 매핑 (EV/HEV/FCEV 통합) ===
    var PREFIX_MAP = {
      CS: '_CS_',
      CS_EV: '_CS_',
      CV: '_CV_',
      CV_EV: '_CV_',
      DE: '_DE_',
      DE_EV: '_DE_',
      HR: '_HR_',
      HR_EV: '_HR_',
      LK: '_LK_',
      LK_EV: '_LK_',
      LK_FCEV: '_LK_',
      LK_FC: '_LK_',
      LM: '_LM_',
      LM_EV: '_LM_',
      NE: '_NE_',
      NE_EV: '_NE_',
      OS: '_OS_SK3_',
      OS_EV: '_OS_SK3_',
      SK3: '_OS_SK3_',
      SK3_EV: '_OS_SK3_',
      PU: '_PU_',
      PU_EV: '_PU_',
      // HEV — 모두 통합 _HEV_ 표 사용
      DE_HEV: '_HEV_',
      GL3_HEV: '_HEV_',
      DL3_HEV: '_HEV_',
      YG_HEV: '_HEV_',
      NQ5_HEV: '_HEV_',
      SG2_HEV: '_HEV_',
      JF_HEV: '_HEV_',
    };
    var prefix = PREFIX_MAP[차종];
    if (!prefix) {
      alert('차종을 확인해 주세요');
    } else {
      // 공통 채우기 — element 없으면 skip (null-safe)
      var _set = function (id, val) {
        var el = document.getElementById(prefix + id);
        if (el) el.innerHTML = val == null ? '' : val;
      };
      _set('외부점검', 외부검사);
      _set('외부점검사유', 외부검사사유);
      _set('내부점검', 기초검사_v.육안검사_내부);
      _set('내부점검사유', 기초검사_v.육안검사_내부_특이사항);
      _set('케이스', 케이스);
      _set('케이스감압량', 케이스감압량);
      _set('냉각유로', 기초검사_v.기밀검사_냉각유로);
      _set('냉각유로감압량', 기초검사_v.기밀검사_냉각유로_특이사항);
      _set('PRA_P', 기초검사_v.절연검사_Plus판정);
      _set('PRA_P값', 기초검사_v.절연검사_Plus);
      _set('PRA_N', 기초검사_v.절연검사_Minus판정);
      _set('PRA_N값', 기초검사_v.절연검사_Minus);
      // HV커넥터 — 있는 차종 (HR/LK 등) 만 표시
      _set('HV커넥터_P', 기초검사_v.절연검사_HV_Plus판정 || '');
      _set('HV커넥터_P값', 기초검사_v.절연검사_HV_Plus || '');
      _set('HV커넥터_N', 기초검사_v.절연검사_HV_Minus판정 || '');
      _set('HV커넥터_N값', 기초검사_v.절연검사_HV_Minus || '');
      // 통신 검사
      _set('팩전압', 기초검사_v.통신검사_팩전압판정);
      _set('팩전압값', 기초검사_v.통신검사_팩전압);
      _set('셀전압편차', 기초검사_v.통신검사_셀전압편차판정);
      _set('셀전압편차값', 기초검사_v.통신검사_셀전압편차);
      //HEV — 최대 내부 저항 (판정 OK/NG + 값) / 셀번호. 없으면 '-'
      _set('최대내부저항', 기초검사_v.통신검사_최대내부저항판정 || '-');
      _set('최대내부저항값', 기초검사_v.통신검사_최대내부저항 || '-');
      _set('최대내부저항셀번호값', 기초검사_v.통신검사_최대내부저항_셀번호 || '-');
      _set('릴레이제어', 기초검사_v.통신검사_릴레이구동);
      _set('릴레이제어사유', 기초검사_v.통신검사_릴레이구동사유);
      _set('고장코드', 고장코드);
      _set('고장코드사유', 고장사유);
    }

    // === 아래 옛 switch 는 신규 prefix 방식으로 대체됨. 안전을 위해 잠시 보존(주석) ===
    /* eslint-disable */
    /*
    switch (차종) {
      case 'CS':
      case 'CS_EV':
        _CS_외부점검.innerHTML = 외부검사;
        _CS_외부점검사유.innerHTML = 외부검사사유;
        _CS_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _CS_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _CS_케이스.innerHTML = 케이스;
        _CS_케이스감압량.innerHTML = 케이스감압량;
        _CS_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _CS_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _CS_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _CS_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _CS_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _CS_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _CS_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _CS_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _CS_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _CS_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _CS_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _CS_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _CS_고장코드.innerHTML = 고장코드;
        _CS_고장코드사유.innerHTML = 고장사유;
        break;

      case 'CV':
      case 'CV_EV':
        _CV_외부점검.innerHTML = 외부검사;
        _CV_외부점검사유.innerHTML = 외부검사사유;
        _CV_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _CV_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _CV_케이스.innerHTML = 케이스;
        _CV_케이스감압량.innerHTML = 케이스감압량;
        _CV_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _CV_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _CV_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _CV_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _CV_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _CV_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _CV_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _CV_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _CV_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _CV_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _CV_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _CV_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _CV_고장코드.innerHTML = 고장코드;
        _CV_고장코드사유.innerHTML = 고장사유;
        break;

      case 'DE':
      case 'DE_EV':
        _DE_외부점검.innerHTML = 외부검사;
        _DE_외부점검사유.innerHTML = 외부검사사유;
        _DE_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _DE_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _DE_케이스.innerHTML = 케이스;
        _DE_케이스감압량.innerHTML = 케이스감압량;
        _DE_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _DE_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _DE_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _DE_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _DE_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _DE_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _DE_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _DE_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _DE_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _DE_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _DE_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _DE_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _DE_고장코드.innerHTML = 고장코드;
        _DE_고장코드사유.innerHTML = 고장사유;
        break;

      case 'HR':
      case 'HR_EV':
        _HR_외부점검.innerHTML = 외부검사;
        _HR_외부점검사유.innerHTML = 외부검사사유;
        _HR_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _HR_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _HR_케이스.innerHTML = 케이스;
        _HR_케이스감압량.innerHTML = 케이스감압량;
        _HR_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _HR_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _HR_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _HR_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _HR_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _HR_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _HR_HV커넥터_P.innerHTML = 기초검사_v.절연검사_Minus판정;
        _HR_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _HR_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _HR_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _HR_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _HR_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _HR_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _HR_고장코드.innerHTML = 고장코드;
        _HR_고장코드사유.innerHTML = 고장사유;
        break;

      case 'LK':
      case 'LK_EV':
        _LK_외부점검.innerHTML = 외부검사;
        _LK_외부점검사유.innerHTML = 외부검사사유;
        _LK_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _LK_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _LK_케이스.innerHTML = 케이스;
        _LK_케이스감압량.innerHTML = 케이스감압량;
        _LK_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _LK_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _LK_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _LK_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _LK_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _LK_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _LK_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _LK_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _LK_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _LK_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _LK_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _LK_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _LK_고장코드.innerHTML = 고장코드;
        _LK_고장코드사유.innerHTML = 고장사유;
        break;

      case 'LM':
      case 'LM_EV':
        _LM_외부점검.innerHTML = 외부검사;
        _LM_외부점검사유.innerHTML = 외부검사사유;
        _LM_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _LM_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _LM_케이스.innerHTML = 케이스;
        _LM_케이스감압량.innerHTML = 케이스감압량;
        _LM_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _LM_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _LM_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _LM_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _LM_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _LM_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _LM_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _LM_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _LM_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _LM_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _LM_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _LM_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _LM_고장코드.innerHTML = 고장코드;
        _LM_고장코드사유.innerHTML = 고장사유;
        break;

      case 'NE':
      case 'NE_EV':
        _NE_외부점검.innerHTML = 외부검사;
        _NE_외부점검사유.innerHTML = 외부검사사유;
        _NE_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _NE_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _NE_케이스.innerHTML = 케이스;
        _NE_케이스감압량.innerHTML = 케이스감압량;
        _NE_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _NE_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _NE_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _NE_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _NE_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _NE_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _NE_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _NE_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _NE_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _NE_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _NE_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _NE_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _NE_고장코드.innerHTML = 고장코드;
        _NE_고장코드사유.innerHTML = 고장사유;
        break;

      case 'OS':
      case 'OS_EV':
      case 'SK3':
      case 'SK3_EV':
        _OS_SK3_외부점검.innerHTML = 외부검사;
        _OS_SK3_외부점검사유.innerHTML = 외부검사사유;
        _OS_SK3_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _OS_SK3_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _OS_SK3_케이스.innerHTML = 케이스;
        _OS_SK3_케이스감압량.innerHTML = 케이스감압량;
        _OS_SK3_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _OS_SK3_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _OS_SK3_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _OS_SK3_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _OS_SK3_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _OS_SK3_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _OS_SK3_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _OS_SK3_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _OS_SK3_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _OS_SK3_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _OS_SK3_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _OS_SK3_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _OS_SK3_고장코드.innerHTML = 고장코드;
        _OS_SK3_고장코드사유.innerHTML = 고장사유;
        break;

      case 'PU_EV':
      case 'PU':
        _PU_외부점검.innerHTML = 외부검사;
        _PU_외부점검사유.innerHTML = 외부검사사유;
        _PU_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _PU_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _PU_케이스.innerHTML = 케이스;
        _PU_케이스감압량.innerHTML = 케이스감압량;
        _PU_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _PU_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _PU_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _PU_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _PU_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _PU_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _PU_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _PU_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _PU_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _PU_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _PU_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _PU_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _PU_고장코드.innerHTML = 고장코드;
        _PU_고장코드사유.innerHTML = 고장사유;
        break;

      case 'DE_HEV':
      case 'GL3_HEV':
      case 'DL3_HEV':
      case 'YG_HEV':
      case 'NQ5_HEV':
      case 'SG2_HEV':
      case 'JF_HEV':
        _HEV_외부점검.innerHTML = 외부검사;
        _HEV_외부점검사유.innerHTML = 외부검사사유;
        _HEV_내부점검.innerHTML = 기초검사_v.육안검사_내부;
        _HEV_내부점검사유.innerHTML = 기초검사_v.육안검사_내부_특이사항;
        _HEV_케이스.innerHTML = 케이스;
        _HEV_케이스감압량.innerHTML = 케이스감압량;
        _HEV_냉각유로.innerHTML = 기초검사_v.기밀검사_냉각유로;
        _HEV_냉각유로감압량.innerHTML = 기초검사_v.기밀검사_냉각유로_특이사항;
        _HEV_PRA_P.innerHTML = 기초검사_v.절연검사_Plus판정;
        _HEV_PRA_P값.innerHTML = 기초검사_v.절연검사_Plus;
        _HEV_PRA_N.innerHTML = 기초검사_v.절연검사_Minus판정;
        _HEV_PRA_N값.innerHTML = 기초검사_v.절연검사_Minus;
        _HEV_팩전압.innerHTML = 기초검사_v.통신검사_팩전압판정;
        _HEV_팩전압값.innerHTML = 기초검사_v.통신검사_팩전압;
        _HEV_셀전압편차.innerHTML = 기초검사_v.통신검사_셀전압편차판정;
        _HEV_셀전압편차값.innerHTML = 기초검사_v.통신검사_셀전압편차;
        _HEV_릴레이제어.innerHTML = 기초검사_v.통신검사_릴레이구동;
        _HEV_릴레이제어사유.innerHTML = 기초검사_v.통신검사_릴레이구동사유;
        _HEV_고장코드.innerHTML = 고장코드;
        _HEV_고장코드사유.innerHTML = 고장사유;
        break;

      default:
        alert('차종을 확인해 주세요');
    }
    */
    /* eslint-enable */
  }

  find(세척_pic, _management_id.value);
  await delay();

  if (세척_pic_v != null) {
    //기밀검사-케이스
    _측정사진1.src = 세척_pic_v.pic1;
    _측정값사진1.src = 세척_pic_v.pic2;
    _기밀검사_특이사항1.src = 세척_pic_v.pic3;
    _기밀검사_특이사항2.src = 세척_pic_v.pic4;

    //육안검사 외부1
    _top_pic.src = 세척_pic_v.pic5;
    _front_pic.src = 세척_pic_v.pic6;
    _left_pic.src = 세척_pic_v.pic7;
    _bottom_pic.src = 세척_pic_v.pic8;
    _rear_pic.src = 세척_pic_v.pic9;
    _right_pic.src = 세척_pic_v.pic10;

    //HEV 육안검사 외부 — 세척 front 사진(pic6) 사용
    var _hev육안 = document.getElementById('_HEV_육안외부사진');
    if (_hev육안) _hev육안.src = 세척_pic_v.pic6;

    //육안검사 외부 2
    _이상부위_외부1.src = 세척_pic_v.pic11;
    _이상부위_외부2.src = 세척_pic_v.pic12;
    _이상부위_외부3.src = 세척_pic_v.pic13;
    _이상부위_외부4.src = 세척_pic_v.pic14;
  }

  _육안검사_결과.innerHTML = 외부검사;
  _육안검사_결과2.innerHTML = 외부검사사유;

  _육안검사_내부_결과.innerHTML = 내부검사;
  _육안검사_내부_결과2.innerHTML = 내부검사사유;

  //사진 로딩
  find(기초검사_pic1, _management_id.value);
  await delay();

  if (기초검사_pic1_v != null) {
    // qr code
    _BSA_QR.src = 기초검사_pic1_v.pic1;

    //육안검사 내부 1
    _allImg.src = 기초검사_pic1_v.pic2;
    _BMU.src = 기초검사_pic1_v.pic3;
    _CMU.src = 기초검사_pic1_v.pic4;
    _PRA.src = 기초검사_pic1_v.pic5;

    //육안검사 내부 2
    _이상부위_내부1.src = 기초검사_pic1_v.pic6;
    _이상부위_내부2.src = 기초검사_pic1_v.pic7;
    _이상부위_내부3.src = 기초검사_pic1_v.pic8;
    _이상부위_내부4.src = 기초검사_pic1_v.pic9;

    //기밀검사 -냉각유로
    _측정사진2.src = 기초검사_pic1_v.pic10;
  }

  find(기초검사_pic2, _management_id.value);
  await delay();

  if (기초검사_pic2_v != null) {
    //기밀검사 -냉각유로
    _측정값사진2.src = 기초검사_pic2_v.pic1;

    //절연검사
    _절연측정사진1.src = 기초검사_pic2_v.pic2;
    _절연측정값사진1.src = 기초검사_pic2_v.pic3;
    _절연측정사진2.src = 기초검사_pic2_v.pic4;

    //절연검사
    _절연측정값사진2.src = 기초검사_pic2_v.pic5;

    //CAN통신검사
    _CAN현재.src = 기초검사_pic2_v.pic6;
    _CAN진단.src = 기초검사_pic2_v.pic7;
    _CAN과거.src = 기초검사_pic2_v.pic8;
    _PDS진단1.src = 기초검사_pic2_v.pic9;
    _PDS진단2.src = 기초검사_pic2_v.pic10;

    //HEV 절연저항 검사 — 기초검사 절연 사진(pic2~5) 사용
    var _set이미지 = function (id, src) {
      var el = document.getElementById(id);
      if (el) el.src = src || '';
    };
    _set이미지('_HEV_절연측정사진1', 기초검사_pic2_v.pic2);
    _set이미지('_HEV_절연측정값사진1', 기초검사_pic2_v.pic3);
    _set이미지('_HEV_절연측정사진2', 기초검사_pic2_v.pic4);
    _set이미지('_HEV_절연측정값사진2', 기초검사_pic2_v.pic5);

    //HEV 통신검사 (G-SCAN) — 고장코드 현재/과거, 센서데이터
    _set이미지('_HEV2_CAN현재', 기초검사_pic2_v.pic6);
    _set이미지('_HEV2_현재센서데이터', 기초검사_pic2_v.pic7);
    _set이미지('_HEV2_CAN과거', 기초검사_pic2_v.pic8);
    //HEV 통신검사 (BMS 교차) 페이지도 동일 소스로 연결
    _set이미지('_HEV_CAN현재', 기초검사_pic2_v.pic6);
    _set이미지('_HEV_현재센서데이터', 기초검사_pic2_v.pic7);
    _set이미지('_HEV_CAN과거', 기초검사_pic2_v.pic8);
  }

  //기밀검사 - 케이스
  _케이스.innerHTML = 케이스 + ' : ' + 케이스감압량;
  _냉각유로.innerHTML = 냉각유로 + ' : ' + 냉각유로감압량;

  //절연저항검사 — 합부판정: OK(파랑)/NG(빨강)/미실시(이유)
  function _절연합부HTML(판정, 값) {
    var p = (판정 == null ? '' : String(판정)).trim();
    if (p === 'OK') return '<span class="result-vlaue r1">OK</span>';
    if (p === 'NG') return '<span class="result-vlaue r2">NG</span>';
    if (p.indexOf('미실시') !== -1) {
      // 판정에 이유가 없으면 값(측정값)을 이유로 표시
      var 이유 = p.length > 3 ? p : '미실시(이유: ' + (값 || '') + ')';
      return '<span class="result-vlaue r3">' + 이유 + '</span>';
    }
    return p ? '<span class="result-vlaue r1">' + p + '</span>' : '';
  }
  _절연PRA_P.innerHTML = _절연합부HTML(절연검사_B_P판정, 절연검사_B_P);
  _절연PRA_N.innerHTML = _절연합부HTML(절연검사_B_N판정, 절연검사_B_N);
}

function showTable(tableId) {
  // 모든 테이블을 숨김
  const tables = document.querySelectorAll('.tableAll');
  for (let i = 0; i < tables.length; i++) {
    tables[i].style.display = 'none';
  }
  // 선택된 테이블만 표시
  const table = document.getElementById(tableId);
  if (!table) {
    console.warn('[showTable] 테이블 없음:', tableId);
    return;
  }
  table.style.display = 'block';
}

async function 기초보고서_save(type = 0) {
  var _date = new Date();
  var file_name = '기초보고서_' + _date + '.pdf';
  var _width = 4200;
  var _height = 2200;

  //기초보고서 저장항목들 저장
  var doc = JSON.parse(JSON.stringify(기초보고서_doc));
  doc.level = '작업자';
  doc.기초보고서 = _cb기초보고서.checked; //각 항목 숨기고 보여주는 기능이 필요했으나 후에 요구사항이 사라져 완성된 기능은 아님
  doc.육안검사외부 = _cb육안검사외부.checked;
  doc.육안검사외부상세 = _cb육안검사외부상세.checked;
  doc.육안검사내부 = _cb육안검사내부.checked;
  doc.육안검사내부상세 = _cb육안검사내부상세.checked;
  doc.기밀검사 = _cb기밀검사.checked;
  doc.절연저항검사 = _cb절연저항검사.checked;
  doc.CAN통신검사 = _cbCAN통신검사.checked;

  update_보고서(기초보고서, doc);
  await delay();

  //이후는 PDF 파일로 만드는 부분임
  if (type == 0) {
    type = document.getElementById('_기초보고서');
    file_name = '기초보고서' + _date + '.pdf';
    _width = 3900;
    _height = 1800;
  }

  if (type == '육외') {
    type = document.getElementById('_육안검사외부1');
    file_name = '기초보고서_육안검사외부' + _date + '.pdf';
    _width = 3600;
    _height = 2000;
  }

  if (type == '육외상') {
    type = document.getElementById('_육안검사외부2');
    file_name = '기초보고서_육안검사외부_상세' + _date + '.pdf';
    _width = 3700;
    _height = 2400;
  }

  if (type == '육내') {
    type = document.getElementById('_육안검사내부1');
    file_name = '기초보고서_육안검사내부' + _date + '.pdf';
    _width = 3650;
    _height = 2700;
  }

  if (type == '육내상') {
    type = document.getElementById('_육안검사내부2');
    file_name = '기초보고서_육안검사내부_상세' + _date + '.pdf';
    _width = 3800;
    _height = 2300;
  }

  if (type == '기밀') {
    type = document.getElementById('_기밀검사');
    file_name = '기초보고서_기밀검사' + _date + '.pdf';
    _width = 3400;
    _height = 2600;
  }

  if (type == '기밀특이') {
    type = document.getElementById('_기밀검사2');
    file_name = '기초보고서_기밀검사_특이사항' + _date + '.pdf';
    _width = 3600;
    _height = 2300;
  }

  if (type == '절연') {
    type = document.getElementById('_절연저항검사');
    file_name = '기초보고서_절연검사' + _date + '.pdf';
    _width = 3600;
    _height = 2600;
  }

  if (type == 'CAN') {
    type = document.getElementById('_CAN통신검사');
    file_name = '기초보고서_CAN통신검사' + _date + '.pdf';
    _width = 3600;
    _height = 2000;
  }

  html2canvas(type, {
    width: (_width * window.innerWidth) / 1920,
    height: (_height * window.innerHeight) / 1080,
  }).then((canvas) => {
    var data = canvas.toDataURL();
    // _canvas element 가 사이드바 init 중 사라졌을 수 있으니 없으면 동적 생성
    var canvas = document.getElementById('_canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = '_canvas';
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
    }
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = data;
    img.onload = function () {
      ctx.drawImage(img, 1920, 1080);
    };

    canvas.width = _width / 10;
    canvas.height = _height / 10;

    var docDefinition = {
      content: [
        {
          image: data,
          width: 1920,
          height: 1080,
        },
      ],
      pageSize: 'A4',
      pageOrientation: 'landscape',
    };
    pdfMake.createPdf(docDefinition).download(file_name);
  });
  console.log('file name:', file_name);
}
