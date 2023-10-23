var pre_관리번호 = "";
var 차종 = "";
var flag_입고_complete = false;

async function 상세입력_시작(is재제조번호 = false) {
  await sleep(100);
  while (_폐기 == undefined) {
    await sleep(DELAY);
  }

  flag_상세입력 = false;

  first_분해조립 = true;
  기초검사_DTC_count = 0;
  EOL_DTC_count = 0;
  BMU_count = 1;
  CMU_count = 1;
  PRA_count = 1;
  SPA_count = 1;
  LWR_C_count = 1;
  UPR_C_count = 1;
  PBE_count = 1;
  Gasket_count = 1;
  Relay_count = 1;
  HV_CNTR_count = 1;
  Heating_CNTR_count = 1;
  FuseBox_count = 1;
  LV_W_H_count = 1;
  HV_W_H_count = 1;
  온도센서_count = 1;
  Busbars_count = 1;
  BMA_count = 1;

  // item-detalis - select option
  const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option");

  selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      optionMenu.classList.remove("active");
    });
  });

  await sleep(100);
  if (is재제조번호 == false) {
    _management_id.value = _management_id.value.trim();
    if (_management_id.value == "조회를 누르세요")
      _management_id.value = 관리번호;

    console.log("load: ", _management_id.value);
    if (_management_id.value.length == 0 && _재제조번호.value.length == 0)
      return;

    관리번호 = _management_id.value;
    console.log("관리번호:", 관리번호);

    if (level == "kia_일반") {
      count(BSA재제조, {
        차종: {
          $in: [
            "DE",
            "DE_EV",
            "DEPBV",
            "DEPBV-EV",
            "CV",
            "CV_EV",
            "MV",
            "MV_EV",
            "PU",
            "PU_EV",
            "SG2",
            "SG2-EV",
            "TAM",
            "TAM-EV",
            "PS",
            "PS_EV",
            "SK3",
          ],
        },
        관리번호: _management_id.value,
        구분: "일반",
      });
      await delay();
    } else if (level == "hyundai_일반") {
      count(BSA재제조, {
        차종: {
          $in: [
            "OS",
            "OS_EV",
            "NE",
            "NE_EV",
            "HR",
            "HR_EV",
            "LK",
            "LK_EV",
            "LM",
            "LM_EV",
            "LKFC",
            "LKFC-EV",
            "CS",
            "CS-EV",
            "CS_EV",
            "SX2",
            "SX2-EV",
            "AE",
            "AE_EV",
            "CE",
            "CE_EV",
            "ME",
            "ME_EV",
            "FE",
            "FE_EV",
            "RG3",
            "RG3-EV",
            "JW",
            "JW_EV",
            "JK",
            "JK_EV",
            "JX",
            "JX_EV",
          ],
        },
        관리번호: _management_id.value,
        구분: "일반",
      });
      await delay();
    } else if (level == "kia_보증") {
      count(BSA재제조, {
        차종: {
          $in: [
            "DE",
            "DE_EV",
            "DEPBV",
            "DEPBV-EV",
            "CV",
            "CV_EV",
            "MV",
            "MV_EV",
            "PU",
            "PU_EV",
            "SG2",
            "SG2-EV",
            "TAM",
            "TAM-EV",
            "PS",
            "PS_EV",
            "SK3",
          ],
        },
        관리번호: _management_id.value,
        구분: "보증",
      });
      await delay();
    } else if (level == "hyundai_보증") {
      count(BSA재제조, {
        차종: {
          $in: [
            "OS",
            "OS_EV",
            "NE",
            "NE_EV",
            "HR",
            "HR_EV",
            "LK",
            "LK_EV",
            "LM",
            "LM_EV",
            "LKFC",
            "LKFC-EV",
            "CS",
            "CS-EV",
            "CS_EV",
            "SX2",
            "SX2-EV",
            "AE",
            "AE_EV",
            "CE",
            "CE_EV",
            "ME",
            "ME_EV",
            "FE",
            "FE_EV",
            "RG3",
            "RG3-EV",
            "JW",
            "JW_EV",
            "JK",
            "JK_EV",
            "JX",
            "JX_EV",
          ],
        },
        관리번호: _management_id.value,
        구분: "보증",
      });
      await delay();
    } else {
      count(BSA재제조, { 관리번호: _management_id.value });
      await delay();
    }
  } else {
    console.log("재제조번호:", _재제조번호.value);
    if (level == "kia_일반") {
      count(BSA재제조, {
        차종: {
          $in: [
            "DE",
            "DE_EV",
            "DEPBV",
            "DEPBV-EV",
            "CV",
            "CV_EV",
            "MV",
            "MV_EV",
            "PU",
            "PU_EV",
            "SG2",
            "SG2-EV",
            "TAM",
            "TAM-EV",
            "PS",
            "PS_EV",
            "SK3",
          ],
        },
        재제조번호: _재제조번호.value,
        구분: "일반",
      });
      await delay();
    } else if (level == "hyundai_일반") {
      count(BSA재제조, {
        차종: {
          $in: [
            "OS",
            "OS_EV",
            "NE",
            "NE_EV",
            "HR",
            "HR_EV",
            "LK",
            "LK_EV",
            "LM",
            "LM_EV",
            "LKFC",
            "LKFC-EV",
            "CS",
            "CS-EV",
            "CS_EV",
            "SX2",
            "SX2-EV",
            "AE",
            "AE_EV",
            "CE",
            "CE_EV",
            "ME",
            "ME_EV",
            "FE",
            "FE_EV",
            "RG3",
            "RG3-EV",
            "JW",
            "JW_EV",
            "JK",
            "JK_EV",
            "JX",
            "JX_EV",
          ],
        },
        재제조번호: _재제조번호.value,
        구분: "일반",
      });
      await delay();
    } else if (level == "kia_보증") {
      count(BSA재제조, {
        차종: {
          $in: [
            "DE",
            "DE_EV",
            "DEPBV",
            "DEPBV-EV",
            "CV",
            "CV_EV",
            "MV",
            "MV_EV",
            "PU",
            "PU_EV",
            "SG2",
            "SG2-EV",
            "TAM",
            "TAM-EV",
            "PS",
            "PS_EV",
            "SK3",
          ],
        },
        재제조번호: _재제조번호.value,
        구분: "보증",
      });
      await delay();
    } else if (level == "hyundai_보증") {
      count(BSA재제조, {
        차종: {
          $in: [
            "OS",
            "OS_EV",
            "NE",
            "NE_EV",
            "HR",
            "HR_EV",
            "LK",
            "LK_EV",
            "LM",
            "LM_EV",
            "LKFC",
            "LKFC-EV",
            "CS",
            "CS-EV",
            "CS_EV",
            "SX2",
            "SX2-EV",
            "AE",
            "AE_EV",
            "CE",
            "CE_EV",
            "ME",
            "ME_EV",
            "FE",
            "FE_EV",
            "RG3",
            "RG3-EV",
            "JW",
            "JW_EV",
            "JK",
            "JK_EV",
            "JX",
            "JX_EV",
          ],
        },
        재제조번호: _재제조번호.value,
        구분: "보증",
      });
      await delay();
    } else {
      count(BSA재제조, { 재제조번호: _재제조번호.value });
      await delay();
    }
  }
  console.log("초기 doc_count: ", doc_count);
  if (doc_count > 0) {
    if (is재제조번호 == false) {
      관리번호 = _management_id.value.trim();
      pre_관리번호 = 관리번호;
      sessionStorage.setItem("manage_id", 관리번호);

      if (level == "kia_일반") {
        find_BSA재제조(BSA재제조, {
          차종: {
            $in: [
              "DE",
              "DE_EV",
              "DEPBV",
              "DEPBV-EV",
              "CV",
              "CV_EV",
              "MV",
              "MV_EV",
              "PU",
              "PU_EV",
              "SG2",
              "SG2-EV",
              "TAM",
              "TAM-EV",
              "PS",
              "PS_EV",
              "SK3",
            ],
          },
          관리번호: _management_id.value,
          구분: "일반",
        });
        await delay();
      } else if (level == "hyundai_일반") {
        find_BSA재제조(BSA재제조, {
          차종: {
            $in: [
              "OS",
              "OS_EV",
              "NE",
              "NE_EV",
              "HR",
              "HR_EV",
              "LK",
              "LK_EV",
              "LM",
              "LM_EV",
              "LKFC",
              "LKFC-EV",
              "CS",
              "CS-EV",
              "CS_EV",
              "SX2",
              "SX2-EV",
              "AE",
              "AE_EV",
              "CE",
              "CE_EV",
              "ME",
              "ME_EV",
              "FE",
              "FE_EV",
              "RG3",
              "RG3-EV",
              "JW",
              "JW_EV",
              "JK",
              "JK_EV",
              "JX",
              "JX_EV",
            ],
          },
          관리번호: _management_id.value,
          구분: "일반",
        });
        await delay();
      } else if (level == "kia_보증") {
        find_BSA재제조(BSA재제조, {
          차종: {
            $in: [
              "DE",
              "DE_EV",
              "DEPBV",
              "DEPBV-EV",
              "CV",
              "CV_EV",
              "MV",
              "MV_EV",
              "PU",
              "PU_EV",
              "SG2",
              "SG2-EV",
              "TAM",
              "TAM-EV",
              "PS",
              "PS_EV",
              "SK3",
            ],
          },
          관리번호: _management_id.value,
          구분: "보증",
        });
        await delay();
      } else if (level == "hyundai_보증") {
        find_BSA재제조(BSA재제조, {
          차종: {
            $in: [
              "OS",
              "OS_EV",
              "NE",
              "NE_EV",
              "HR",
              "HR_EV",
              "LK",
              "LK_EV",
              "LM",
              "LM_EV",
              "LKFC",
              "LKFC-EV",
              "CS",
              "CS-EV",
              "CS_EV",
              "SX2",
              "SX2-EV",
              "AE",
              "AE_EV",
              "CE",
              "CE_EV",
              "ME",
              "ME_EV",
              "FE",
              "FE_EV",
              "RG3",
              "RG3-EV",
              "JW",
              "JW_EV",
              "JK",
              "JK_EV",
              "JX",
              "JX_EV",
            ],
          },
          관리번호: _management_id.value,
          구분: "보증",
        });
        await delay();
      } else {
        find_BSA재제조(BSA재제조, { 관리번호: _management_id.value });
        await delay();
      }
    } else {
      _재제조번호.value = _재제조번호.value.trim();
      console.log("load: ", _재제조번호.value);

      if (_management_id.value.length == 0 && _재제조번호.value.length == 0)
        return;

      if (level == "kia_일반") {
        count(BSA재제조, {
          차종: {
            $in: [
              "DE",
              "DE_EV",
              "DEPBV",
              "DEPBV-EV",
              "CV",
              "CV_EV",
              "MV",
              "MV_EV",
              "PU",
              "PU_EV",
              "SG2",
              "SG2-EV",
              "TAM",
              "TAM-EV",
              "PS",
              "PS_EV",
              "SK3",
            ],
          },
          재제조번호: _재제조번호.value,
          구분: "일반",
        });
        await delay();
      } else if (level == "hyundai_일반") {
        count(BSA재제조, {
          차종: {
            $in: [
              "OS",
              "OS_EV",
              "NE",
              "NE_EV",
              "HR",
              "HR_EV",
              "LK",
              "LK_EV",
              "LM",
              "LM_EV",
              "LKFC",
              "LKFC-EV",
              "CS",
              "CS-EV",
              "CS_EV",
              "SX2",
              "SX2-EV",
              "AE",
              "AE_EV",
              "CE",
              "CE_EV",
              "ME",
              "ME_EV",
              "FE",
              "FE_EV",
              "RG3",
              "RG3-EV",
              "JW",
              "JW_EV",
              "JK",
              "JK_EV",
              "JX",
              "JX_EV",
            ],
          },
          재제조번호: _재제조번호.value,
          구분: "일반",
        });
        await delay();
      } else if (level == "kia_보증") {
        count(BSA재제조, {
          차종: {
            $in: [
              "DE",
              "DE_EV",
              "DEPBV",
              "DEPBV-EV",
              "CV",
              "CV_EV",
              "MV",
              "MV_EV",
              "PU",
              "PU_EV",
              "SG2",
              "SG2-EV",
              "TAM",
              "TAM-EV",
              "PS",
              "PS_EV",
              "SK3",
            ],
          },
          재제조번호: _재제조번호.value,
          구분: "보증",
        });
        await delay();
      } else if (level == "hyundai_보증") {
        count(BSA재제조, {
          차종: {
            $in: [
              "OS",
              "OS_EV",
              "NE",
              "NE_EV",
              "HR",
              "HR_EV",
              "LK",
              "LK_EV",
              "LM",
              "LM_EV",
              "LKFC",
              "LKFC-EV",
              "CS",
              "CS-EV",
              "CS_EV",
              "SX2",
              "SX2-EV",
              "AE",
              "AE_EV",
              "CE",
              "CE_EV",
              "ME",
              "ME_EV",
              "FE",
              "FE_EV",
              "RG3",
              "RG3-EV",
              "JW",
              "JW_EV",
              "JK",
              "JK_EV",
              "JX",
              "JX_EV",
            ],
          },
          재제조번호: _재제조번호.value,
          구분: "보증",
        });
        await delay();
      } else {
        find_BSA재제조(BSA재제조, { 재제조번호: _재제조번호.value });
        await delay();
      }
    }

    console.log("result:", find_array);

    _management_id.value = find_array[0].관리번호;
    _재제조번호.value = find_array[0].재제조번호;

    _공정단계.value = find_array[0].공정단계;
    _적재No.value = find_array[0].적재No;
    _입고.value = find_array[0].입고.substr(0, 16);
    if (find_array[0].제조투입 != undefined)
      _제조투입.value = find_array[0].제조투입.substr(0, 16);
    _세척투입일.value = find_array[0].세척투입일.substr(0, 16);
    _세척.value = find_array[0].세척.substr(0, 16);
    _기초검사투입일.value = find_array[0].기초검사투입일.substr(0, 16);
    _기초검사.value = find_array[0].기초검사.substr(0, 16);
    _분해조립투입일.value = find_array[0].분해조립투입일.substr(0, 16);
    _분해조립.value = find_array[0].분해조립.substr(0, 16);
    _성능검사투입일.value = find_array[0].성능검사투입일.substr(0, 16);
    _성능검사.value = find_array[0].성능검사.substr(0, 16);
    _EOL투입일.value = find_array[0].EOL투입일.substr(0, 16);
    _EOL.value = find_array[0].EOL.substr(0, 16);
    if (find_array[0].출하검사 != undefined)
      _출하검사.value = find_array[0].출하검사.substr(0, 16);
    _납품처.value = find_array[0].납품처;
    _출하.value = find_array[0].출하.substr(0, 16);
    if (find_array[0].출하.length > 5) _공정단계.value = "출하";
    _소재지.value = find_array[0].소재지.substr(0, 16);
    _마지막충전일.value = find_array[0].마지막충전일.substr(0, 16);
    _반품입고.value = find_array[0].반품입고.substr(0, 16);
    _재출하.value = find_array[0].재출하.substr(0, 16);
    _완전분해.value = find_array[0].완전분해.substr(0, 16);
    _폐기.value = find_array[0].폐기.substr(0, 16);
    if (find_array[0].출하예약 != undefined)
      _출하예약.value = find_array[0].출하예약.substr(0, 16);

    count(입고, { 관리번호: _management_id.value });
    await delay();
    if (doc_count > 0) {
      find(입고, _management_id.value);
      await delay();

      _구분.value = find_array[0].구분;
      _차종.value = find_array[0].차종;
      _품번.value = find_array[0].품번;
      //_RO_no.value = find_array[0].RO_no;
      _입고.value = find_array[0].입고일.substr(0, 16);
      if (_입고.value != "" && _공정단계.value != "출하") {
        _공정단계.value = "세척";
      }
      if (_입고.value != "" && _입고.value != undefined) {
        flag_입고_complete = true;
      } else {
        flag_입고_complete = false;
      }
    } else {
      flag_입고_complete = false;
    }

    count(기초검사, { 관리번호: _management_id.value });
    await delay();
    if (doc_count > 0) {
      find(기초검사, _management_id.value);
      await delay();

      _RO_no.value = find_array[0].RO_no;
    }

    count(세척, { 관리번호: _management_id.value });
    await delay();
    console.log("doc_count: ", doc_count);
    if (doc_count > 0) {
      find(세척, _management_id.value);
      await delay();

      if (_세척투입일.value == "")
        _세척투입일.value = find_array[0].공정입고일.substr(0, 16);
      if (_세척.value == "")
        _세척.value = find_array[0].공정완료일.substr(0, 16);
      if (
        _세척.value != "" &&
        _세척.value != "none" &&
        _세척.value != "0000-00-00T00:00"
      ) {
        if (_공정단계.value != "출하") _공정단계.value = "기초검사";
      } else {
        if (_공정단계.value != "출하") _공정단계.value = "세척";
      }
    }

    count(기초검사, { 관리번호: _management_id.value });
    await delay();
    console.log("doc_count: ", doc_count);
    if (doc_count > 0) {
      find(기초검사, _management_id.value);
      await delay();

      if (_기초검사투입일.value == "")
        _기초검사투입일.value = find_array[0].공정입고일.substr(0, 16);
      if (_기초검사.value == "")
        _기초검사.value = find_array[0].공정완료일.substr(0, 16);
      if (
        _기초검사.value != "" &&
        _기초검사.value != "none" &&
        _기초검사.value != "0000-00-00T00:00"
      ) {
        if (_공정단계.value != "출하") _공정단계.value = "분해조립";
      } else {
        if (_공정단계.value != "출하") _공정단계.value = "기초검사";
      }
    }

    count(분해조립, { 관리번호: _management_id.value });
    await delay();
    console.log("doc_count: ", doc_count);
    if (doc_count > 0) {
      find(분해조립, _management_id.value);
      await delay();

      if (_분해조립투입일.value == "")
        _분해조립투입일.value = find_array[0].공정입고일.substr(0, 16);
      if (_분해조립.value == "")
        _분해조립.value = find_array[0].공정완료일.substr(0, 16);
      if (
        _분해조립.value != "" &&
        _분해조립.value != "none" &&
        _분해조립.value != "0000-00-00T00:00"
      ) {
        if (_공정단계.value != "출하") _공정단계.value = "성능검사";
      } else {
        if (_공정단계.value != "출하") _공정단계.value = "분해조립";
      }
    }

    count(성능검사, { 관리번호: _management_id.value });
    await delay();
    console.log("doc_count: ", doc_count);
    if (doc_count > 0) {
      find(성능검사, _management_id.value);
      await delay();

      if (_성능검사투입일.value == "")
        _성능검사투입일.value = find_array[0].공정입고일.substr(0, 16);
      if (_성능검사.value == "")
        _성능검사.value = find_array[0].공정완료일.substr(0, 16);
      if (
        _성능검사.value != "" &&
        _성능검사.value != "none" &&
        _성능검사.value != "0000-00-00T00:00"
      ) {
        if (_공정단계.value != "출하") _공정단계.value = "EOL";
      } else {
        if (_공정단계.value != "출하") _공정단계.value = "성능검사";
      }
    }

    count(EOL, { 관리번호: _management_id.value });
    await delay();
    console.log("doc_count: ", doc_count);
    if (doc_count > 0) {
      find(EOL, _management_id.value);
      await delay();

      if (_EOL투입일.value == "" && find_array[0].공정입고일 != undefined)
        _EOL투입일.value = find_array[0].공정입고일.substr(0, 16);
      if (_EOL.value == "") _EOL.value = find_array[0].공정완료일.substr(0, 16);
      if (
        _EOL.value != "" ||
        (_EOL.value != "none" && _EOL.value != "0000-00-00T00:00")
      ) {
        if (_공정단계.value != "출하") _공정단계.value = "제조완료";
      } else {
        if (_공정단계.value != "출하") _공정단계.value = "EOL";
      }
    }

    count(출하정보, { 관리번호: _management_id.value });
    await delay();
    console.log("doc_count: ", doc_count);
    if (doc_count > 0) {
      find(출하정보, _management_id.value);
      await delay();

      if (_출하검사.value == "") {
        _출하검사.value = find_array[0].검사일.substr(0, 10) + "T12:00";
        _공정단계.value = "출하";
      }
    }
    item_detail_save(true);
  } else {
    if (is재제조번호 == false) {
      _재제조번호.value = "";
    } else {
      _management_id.value = "";
    }

    _재제조번호.value = "";
    _구분.value = "";
    _차종.value = "";
    _품번.value = "";
    _RO_no.value = "";
    _공정단계.value = "";
    _적재No.value = "";
    _입고.value = "0000-00-00T00:00";
    _제조투입.value = "0000-00-00T00:00";
    _세척투입일.value = "0000-00-00T00:00";
    _세척.value = "0000-00-00T00:00";
    _기초검사투입일.value = "0000-00-00T00:00";
    _기초검사.value = "0000-00-00T00:00";
    _분해조립투입일.value = "0000-00-00T00:00";
    _분해조립.value = "0000-00-00T00:00";
    _성능검사투입일.value = "0000-00-00T00:00";
    _성능검사.value = "0000-00-00T00:00";
    _EOL투입일.value = "0000-00-00T00:00";
    _EOL.value = "0000-00-00T00:00";
    _출하검사.value = "0000-00-00T00:00";
    _출하.value = "0000-00-00T00:00";
    _납품처.value = "";
    _소재지.value = "";
    _마지막충전일.value = "0000-00-00T00:00";
    _반품입고.value = "0000-00-00T00:00";
    _재출하.value = "0000-00-00T00:00";
    _완전분해.value = "0000-00-00T00:00";
    _폐기.value = "0000-00-00T00:00";
    _출하예약.value = "";

    item_detail_save(true);
  }
}

async function item_detail_save(flag_result = false) {
  if (worker == "") return;
  if (_management_id.value.length == 0) return;
  if (_management_id.value.slice(0, 2) == "조회") return;
  console.log("save: ", _management_id.value);

  관리번호 = _management_id.value;

  var doc = BSA재제조_doc;
  doc.관리번호 = _management_id.value;
  doc.재제조번호 = _재제조번호.value;
  doc.구분 = _구분.value;
  doc.차종 = _차종.value;
  doc.품번 = _품번.value;
  doc.RO_no = _RO_no.value;
  doc.공정단계 = _공정단계.value;
  doc.적재No = _적재No.value;
  doc.입고 = _입고.value;
  doc.제조투입 = _제조투입.value;
  doc.세척투입일 = _세척투입일.value;
  doc.세척 = _세척.value;
  doc.기초검사투입일 = _기초검사투입일.value;
  doc.기초검사 = _기초검사.value;
  doc.분해조립투입일 = _분해조립투입일.value;
  doc.분해조립 = _분해조립.value;
  doc.성능검사투입일 = _성능검사투입일.value;
  doc.성능검사 = _성능검사.value;
  doc.EOL투입일 = _EOL투입일.value;
  doc.EOL = _EOL.value;
  doc.출하검사 = _출하검사.value;
  doc.출하 = _출하.value;
  if (_출하.value != "") _공정단계.value = "출하";
  doc.납품처 = _납품처.value;
  doc.소재지 = _소재지.value;
  doc.마지막충전일 = _마지막충전일.value;
  doc.반품입고 = _반품입고.value;
  doc.재출하 = _재출하.value;
  doc.완전분해 = _완전분해.value;
  doc.폐기 = _폐기.value;
  doc.출하예약 = _출하예약.value;

  update(BSA재제조, doc);
  await delay();

  console.log(update_count);
  console.log(insert_count);

  if (flag_result == false) {
    if (update_count > 0) {
      alert("업데이트 되었습니다");
    }

    if (insert_count > 0) {
      alert("신규 항목이 저장 되었습니다");
    }
  }
}

async function processStep() {
  if (worker == "") return;
  if (_management_id.value.length == 0) return;
  pre_관리번호 = "";
  관리번호 = _management_id.value;

  var step = _공정단계.value;

  if (flag_입고_complete == false && step != "입고") {
    alert("입고 정보를 입력해 주세요!");
    step = "입고";
  }

  switch (step) {
    case "입고":
      flag_입고 = true;
      loadPage("base/입고.html");
      break;

    case "제조투입":
      break;

    case "세척":
      flag_세척 = true;
      loadPage("base/세척.html");
      break;

    case "기초검사":
      flag_기초검사 = true;
      loadPage("base/기초검사.html");
      break;

    case "분해조립":
      flag_분해조립 = true;
      flag_loaded = false;
      loadPage("base/분해조립.html");
      break;

    case "성능검사":
      flag_성능검사 = true;
      loadPage("base/성능검사.html");
      break;

    case "EOL":
      flag_EOL = true;
      loadPage("base/EOL.html");
      break;

    case "제조완료":
      break;

    case "출하검사":
      flag_출하 = true;
      loadPage("base/출하정보.html");
      break;

    case "출하":
      break;

    default:
      alert("잘못된 공정명입니다");
      break;
  }
}

function func_고품정보등록() {
  if (worker == "") return;
  if (_management_id.value.length == 0) return;
  loadPage("base/고품정보.html");
}

function func_교체부품상세() {
  if (worker == "") return;
  if (_management_id.value.length == 0) return;

  loadPage("base/교체부품상세.html");
}

function func_특이사항() {
  if (worker == "") return;
  if (_management_id.value.length == 0) return;
  loadPage("base/특이사항.html");
}

function 공정입력_콤보박스(e) {
  const value = e.value;

  document.getElementById("_공정단계").value = value;
}

function 소재지_콤보박스(e) {
  const value = e.value;

  document.getElementById("_소재지").value = value;
}

function 출하예약_콤보박스(e) {
  const value = e.value;

  document.getElementById("_출하예약").value = value;
}

function 교체부품상세_콤보박스(e) {
  const value = e.value;

  교체부품상세No = value;
}

function 기초보고서() {
  기초보고서_시작();
}
function 완료보고서() {
  완료보고서_시작();
}
function 육안검사외부() {
  육안검사외부_시작();
}
function 육안검사내부() {
  육안검사내부_시작();
}
function 기밀검사() {
  기밀검사_시작();
}
function 통신검사() {
  통신검사_시작();
}
