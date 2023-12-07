async function 부품정보_list_loadPage() {
  await loadPage("base/부품정보_list.html");
}

async function 부품정보_list_시작() {
  console.log(관리번호);
  if (_management_id.value == "") _management_id.value = 관리번호;
  _차종.value = 차종;

  document.getElementById("_A_DE_OS_SK3_LK").style.display = "none";
  document.getElementById("_B_HR_PU").style.display = "none";
  document.getElementById("_C_CN_NE_JW1_LM").style.display = "none";
  document.getElementById("_D_CS").style.display = "none";

  switch (차종) {
    case "DE":
    case "DE_EV":
    case "OS":
    case "OS_EV":
    case "SK3":
    case "SK3_EV":
    case "LK":
    case "LK_EV":
      document.getElementById("_A_DE_OS_SK3_LK").style.display = "block";
      document.getElementById("_B_HR_PU").style.display = "none";
      document.getElementById("_C_CN_NE_JW1_LM").style.display = "none";
      document.getElementById("_D_CS").style.display = "none";
      _A_UPR_CASE.focus();
      auto_focus_A();
      break;

    case "PU":
    case "PU_EV":
    case "HR":
    case "HR_EV":
      document.getElementById("_A_DE_OS_SK3_LK").style.display = "none";
      document.getElementById("_B_HR_PU").style.display = "block";
      document.getElementById("_C_CN_NE_JW1_LM").style.display = "none";
      document.getElementById("_D_CS").style.display = "none";
      _B_UPR_CASE.focus();
      auto_focus_B();
      break;

    case "CV":
    case "CV_EV":
    case "NE":
    case "NE_EV":
    case "LM":
    case "LM_EV":
      document.getElementById("_A_DE_OS_SK3_LK").style.display = "none";
      document.getElementById("_B_HR_PU").style.display = "none";
      document.getElementById("_C_CN_NE_JW1_LM").style.display = "block";
      document.getElementById("_D_CS").style.display = "none";
      _C_UPR_CASE.focus();
      auto_focus_C();
      break;

    case "CS":
    case "CS_EV":
      document.getElementById("_A_DE_OS_SK3_LK").style.display = "none";
      document.getElementById("_B_HR_PU").style.display = "none";
      document.getElementById("_C_CN_NE_JW1_LM").style.display = "none";
      document.getElementById("_D_CS").style.display = "block";
      _D_UPR_CASE.focus();
      auto_focus_D();
      break;

    default:
      alert("차종 정보를 확인해주세요");

      return;
      break;
  }

  await 부품정보_list_load();
}

async function 부품정보_list_load() {
  if (_management_id.value == "") return;

  find(부품정보_list, _management_id.value);
  await delay();

  if (부품정보_list_v == null) return;

  _A_UPR_CASE.value = 부품정보_list_v.A_UPR_CASE;
  _A_LWR_CASE.value = 부품정보_list_v.A_LWR_CASE;
  _A_S_PLUG.value = 부품정보_list_v.A_S_PLUG;
  _A_SPA.value = 부품정보_list_v.A_SPA;
  _A_HV_CNTR.value = 부품정보_list_v.A_HV_CNTR;
  _A_Heating_CNTR.value = 부품정보_list_v.A_Heating_CNTR;
  _A_PRA.value = 부품정보_list_v.A_PRA;
  _A_LV_W_H.value = 부품정보_list_v.A_LV_W_H;
  _A_HV_W_H_1.value = 부품정보_list_v.A_HV_W_H_1;
  _A_HV_W_H_2.value = 부품정보_list_v.A_HV_W_H_2;
  _A_HV_W_H_3.value = 부품정보_list_v.A_HV_W_H_3;
  _A_HV_W_H_4.value = 부품정보_list_v.A_HV_W_H_4;
  _A_HV_W_H_5.value = 부품정보_list_v.A_HV_W_H_5;
  _A_BUSBAR.value = 부품정보_list_v.A_BUSBAR;
  _A_BMU.value = 부품정보_list_v.A_BMU;
  _A_CMU_1.value = 부품정보_list_v.A_CMU_1;
  _A_CMU_2.value = 부품정보_list_v.A_CMU_2;
  _A_CMU_3.value = 부품정보_list_v.A_CMU_3;
  _A_CMU_4.value = 부품정보_list_v.A_CMU_4;
  _A_CMU_5.value = 부품정보_list_v.A_CMU_5;
  _A_BMA_1.value = 부품정보_list_v.A_BMA_1;
  _A_BMA_2.value = 부품정보_list_v.A_BMA_2;
  _A_BMA_3.value = 부품정보_list_v.A_BMA_3;
  _A_BMA_4.value = 부품정보_list_v.A_BMA_4;
  _A_BMA_5.value = 부품정보_list_v.A_BMA_5;
  _B_UPR_CASE.value = 부품정보_list_v.B_UPR_CASE;
  _B_LWR_CASE.value = 부품정보_list_v.B_LWR_CASE;
  _B_HV_CNTR.value = 부품정보_list_v.B_HV_CNTR;
  _B_Heating_CNTR.value = 부품정보_list_v.B_Heating_CNTR;
  _B_PRA.value = 부품정보_list_v.B_PRA;
  _B_FUSE_BOX.value = 부품정보_list_v.B_FUSE_BOX;
  _B_LV_W_H.value = 부품정보_list_v.B_LV_W_H;
  _B_HV_W_H_1.value = 부품정보_list_v.B_HV_W_H_1;
  _B_HV_W_H_2.value = 부품정보_list_v.B_HV_W_H_2;
  _B_HV_W_H_3.value = 부품정보_list_v.B_HV_W_H_3;
  _B_HV_W_H_4.value = 부품정보_list_v.B_HV_W_H_4;
  _B_HV_W_H_5.value = 부품정보_list_v.B_HV_W_H_5;
  _B_HV_W_H_6.value = 부품정보_list_v.B_HV_W_H_6;
  _B_HV_W_H_7.value = 부품정보_list_v.B_HV_W_H_7;
  _B_HV_W_H_8.value = 부품정보_list_v.B_HV_W_H_8;
  _B_HV_W_H_9.value = 부품정보_list_v.B_HV_W_H_9;
  _B_HV_W_H_10.value = 부품정보_list_v.B_HV_W_H_10;
  _B_BUSBAR.value = 부품정보_list_v.B_BUSBAR;
  _B_BMU.value = 부품정보_list_v.B_BMU;
  _B_CMU_1.value = 부품정보_list_v.B_CMU_1;
  _B_CMU_2.value = 부품정보_list_v.B_CMU_2;
  _B_CMU_3.value = 부품정보_list_v.B_CMU_3;
  _B_CMU_4.value = 부품정보_list_v.B_CMU_4;
  _B_CMU_5.value = 부품정보_list_v.B_CMU_5;
  _B_BMA_1.value = 부품정보_list_v.B_BMA_1;
  _B_BMA_2.value = 부품정보_list_v.B_BMA_2;
  _B_BMA_3.value = 부품정보_list_v.B_BMA_3;
  _B_BMA_4.value = 부품정보_list_v.B_BMA_4;
  _B_BMA_5.value = 부품정보_list_v.B_BMA_5;
  _B_BMA_6.value = 부품정보_list_v.B_BMA_6;
  _B_BMA_7.value = 부품정보_list_v.B_BMA_7;
  _B_BMA_8.value = 부품정보_list_v.B_BMA_8;
  _B_BMA_9.value = 부품정보_list_v.B_BMA_9;
  _B_BMA_10.value = 부품정보_list_v.B_BMA_10;
  _C_UPR_CASE.value = 부품정보_list_v.C_UPR_CASE;
  _C_LWR_CASE.value = 부품정보_list_v.C_LWR_CASE;
  _C_HV_CNTR_1.value = 부품정보_list_v.C_HV_CNTR_1;
  _C_HV_CNTR_2.value = 부품정보_list_v.C_HV_CNTR_2;
  _C_Heating_CNTR.value = 부품정보_list_v.C_Heating_CNTR;
  _C_PRA.value = 부품정보_list_v.C_PRA;
  _C_FUSE_BOX.value = 부품정보_list_v.C_FUSE_BOX;
  _C_LV_W_H.value = 부품정보_list_v.C_LV_W_H;
  _C_HV_W_H_1.value = 부품정보_list_v.C_HV_W_H_1;
  _C_HV_W_H_2.value = 부품정보_list_v.C_HV_W_H_2;
  _C_HV_W_H_3.value = 부품정보_list_v.C_HV_W_H_3;
  _C_HV_W_H_4.value = 부품정보_list_v.C_HV_W_H_4;
  _C_HV_W_H_5.value = 부품정보_list_v.C_HV_W_H_5;
  _C_HV_W_H_6.value = 부품정보_list_v.C_HV_W_H_6;
  _C_HV_W_H_7.value = 부품정보_list_v.C_HV_W_H_7;
  _C_HV_W_H_8.value = 부품정보_list_v.C_HV_W_H_8;
  _C_BUSBAR.value = 부품정보_list_v.C_BUSBAR;
  _C_BMU.value = 부품정보_list_v.C_BMU;
  _C_CMU_1.value = 부품정보_list_v.C_CMU_1;
  _C_CMU_2.value = 부품정보_list_v.C_CMU_2;
  _C_CMU_3.value = 부품정보_list_v.C_CMU_3;
  _C_CMU_4.value = 부품정보_list_v.C_CMU_4;
  _C_CMU_5.value = 부품정보_list_v.C_CMU_5;
  _C_CMU_6.value = 부품정보_list_v.C_CMU_6;
  _C_CMU_7.value = 부품정보_list_v.C_CMU_7;
  _C_CMU_8.value = 부품정보_list_v.C_CMU_8;
  _C_BMA_1.value = 부품정보_list_v.C_BMA_1;
  _C_BMA_2.value = 부품정보_list_v.C_BMA_2;
  _C_BMA_3.value = 부품정보_list_v.C_BMA_3;
  _C_BMA_4.value = 부품정보_list_v.C_BMA_4;
  _C_BMA_5.value = 부품정보_list_v.C_BMA_5;
  _C_BMA_6.value = 부품정보_list_v.C_BMA_6;
  _C_BMA_7.value = 부품정보_list_v.C_BMA_7;
  _C_BMA_8.value = 부품정보_list_v.C_BMA_8;
  _C_BMA_9.value = 부품정보_list_v.C_BMA_9;
  _C_BMA_10.value = 부품정보_list_v.C_BMA_10;
  _C_BMA_11.value = 부품정보_list_v.C_BMA_11;
  _C_BMA_12.value = 부품정보_list_v.C_BMA_12;
  _D_UPR_CASE.value = 부품정보_list_v.D_UPR_CASE;
  _D_LWR_CASE.value = 부품정보_list_v.D_LWR_CASE;
  _D_HV_CNTR_RH.value = 부품정보_list_v.D_HV_CNTR_RH;
  _D_HV_CNTR_LH.value = 부품정보_list_v.D_HV_CNTR_LH;
  _D_RELAY.value = 부품정보_list_v.D_RELAY;
  _D_LV_W_H.value = 부품정보_list_v.D_LV_W_H;
  _D_HV_W_H_1.value = 부품정보_list_v.D_HV_W_H_1;
  _D_HV_W_H_2.value = 부품정보_list_v.D_HV_W_H_2;
  _D_BUSBAR.value = 부품정보_list_v.D_BUSBAR;
  _D_BMU.value = 부품정보_list_v.D_BMU;
  _D_CMU_1.value = 부품정보_list_v.D_CMU_1;
  _D_CMU_2.value = 부품정보_list_v.D_CMU_2;
  _D_BMA_1.value = 부품정보_list_v.D_BMA_1;
  _D_BMA_2.value = 부품정보_list_v.D_BMA_2;
}

async function 부품정보_list_save() {
  if (_management_id.value == "") return;

  var doc = 부품정보_list_doc;
  doc.관리번호 = _management_id.value;
  doc.A_UPR_CASE = _A_UPR_CASE.value;
  doc.A_LWR_CASE = _A_LWR_CASE.value;
  doc.A_S_PLUG = _A_S_PLUG.value;
  doc.A_SPA = _A_SPA.value;
  doc.A_HV_CNTR = _A_HV_CNTR.value;
  doc.A_Heating_CNTR = _A_Heating_CNTR.value;
  doc.A_PRA = _A_PRA.value;
  doc.A_LV_W_H = _A_LV_W_H.value;
  doc.A_HV_W_H_1 = _A_HV_W_H_1.value;
  doc.A_HV_W_H_2 = _A_HV_W_H_2.value;
  doc.A_HV_W_H_3 = _A_HV_W_H_3.value;
  doc.A_HV_W_H_4 = _A_HV_W_H_4.value;
  doc.A_HV_W_H_5 = _A_HV_W_H_5.value;
  doc.A_BUSBAR = _A_BUSBAR.value;
  doc.A_BMU = _A_BMU.value;
  doc.A_CMU_1 = _A_CMU_1.value;
  doc.A_CMU_2 = _A_CMU_2.value;
  doc.A_CMU_3 = _A_CMU_3.value;
  doc.A_CMU_4 = _A_CMU_4.value;
  doc.A_CMU_5 = _A_CMU_5.value;
  doc.A_BMA_1 = _A_BMA_1.value;
  doc.A_BMA_2 = _A_BMA_2.value;
  doc.A_BMA_3 = _A_BMA_3.value;
  doc.A_BMA_4 = _A_BMA_4.value;
  doc.A_BMA_5 = _A_BMA_5.value;
  doc.B_UPR_CASE = _B_UPR_CASE.value;
  doc.B_LWR_CASE = _B_LWR_CASE.value;
  doc.B_HV_CNTR = _B_HV_CNTR.value;
  doc.B_Heating_CNTR = _B_Heating_CNTR.value;
  doc.B_PRA = _B_PRA.value;
  doc.B_FUSE_BOX = _B_FUSE_BOX.value;
  doc.B_LV_W_H = _B_LV_W_H.value;
  doc.B_HV_W_H_1 = _B_HV_W_H_1.value;
  doc.B_HV_W_H_2 = _B_HV_W_H_2.value;
  doc.B_HV_W_H_3 = _B_HV_W_H_3.value;
  doc.B_HV_W_H_4 = _B_HV_W_H_4.value;
  doc.B_HV_W_H_5 = _B_HV_W_H_5.value;
  doc.B_HV_W_H_6 = _B_HV_W_H_6.value;
  doc.B_HV_W_H_7 = _B_HV_W_H_7.value;
  doc.B_HV_W_H_8 = _B_HV_W_H_8.value;
  doc.B_HV_W_H_9 = _B_HV_W_H_9.value;
  doc.B_HV_W_H_10 = _B_HV_W_H_10.value;
  doc.B_BUSBAR = _B_BUSBAR.value;
  doc.B_BMU = _B_BMU.value;
  doc.B_CMU_1 = _B_CMU_1.value;
  doc.B_CMU_2 = _B_CMU_2.value;
  doc.B_CMU_3 = _B_CMU_3.value;
  doc.B_CMU_4 = _B_CMU_4.value;
  doc.B_CMU_5 = _B_CMU_5.value;
  doc.B_BMA_1 = _B_BMA_1.value;
  doc.B_BMA_2 = _B_BMA_2.value;
  doc.B_BMA_3 = _B_BMA_3.value;
  doc.B_BMA_4 = _B_BMA_4.value;
  doc.B_BMA_5 = _B_BMA_5.value;
  doc.B_BMA_6 = _B_BMA_6.value;
  doc.B_BMA_7 = _B_BMA_7.value;
  doc.B_BMA_8 = _B_BMA_8.value;
  doc.B_BMA_9 = _B_BMA_9.value;
  doc.B_BMA_10 = _B_BMA_10.value;
  doc.C_UPR_CASE = _C_UPR_CASE.value;
  doc.C_LWR_CASE = _C_LWR_CASE.value;
  doc.C_HV_CNTR_1 = _C_HV_CNTR_1.value;
  doc.C_HV_CNTR_2 = _C_HV_CNTR_2.value;
  doc.C_Heating_CNTR = _C_Heating_CNTR.value;
  doc.C_PRA = _C_PRA.value;
  doc.C_FUSE_BOX = _C_FUSE_BOX.value;
  doc.C_LV_W_H = _C_LV_W_H.value;
  doc.C_HV_W_H_1 = _C_HV_W_H_1.value;
  doc.C_HV_W_H_2 = _C_HV_W_H_2.value;
  doc.C_HV_W_H_3 = _C_HV_W_H_3.value;
  doc.C_HV_W_H_4 = _C_HV_W_H_4.value;
  doc.C_HV_W_H_5 = _C_HV_W_H_5.value;
  doc.C_HV_W_H_6 = _C_HV_W_H_6.value;
  doc.C_HV_W_H_7 = _C_HV_W_H_7.value;
  doc.C_HV_W_H_8 = _C_HV_W_H_8.value;
  doc.C_BUSBAR = _C_BUSBAR.value;
  doc.C_BMU = _C_BMU.value;
  doc.C_CMU_1 = _C_CMU_1.value;
  doc.C_CMU_2 = _C_CMU_2.value;
  doc.C_CMU_3 = _C_CMU_3.value;
  doc.C_CMU_4 = _C_CMU_4.value;
  doc.C_CMU_5 = _C_CMU_5.value;
  doc.C_CMU_6 = _C_CMU_6.value;
  doc.C_CMU_7 = _C_CMU_7.value;
  doc.C_CMU_8 = _C_CMU_8.value;
  doc.C_BMA_1 = _C_BMA_1.value;
  doc.C_BMA_2 = _C_BMA_2.value;
  doc.C_BMA_3 = _C_BMA_3.value;
  doc.C_BMA_4 = _C_BMA_4.value;
  doc.C_BMA_5 = _C_BMA_5.value;
  doc.C_BMA_6 = _C_BMA_6.value;
  doc.C_BMA_7 = _C_BMA_7.value;
  doc.C_BMA_8 = _C_BMA_8.value;
  doc.C_BMA_9 = _C_BMA_9.value;
  doc.C_BMA_10 = _C_BMA_10.value;
  doc.C_BMA_11 = _C_BMA_11.value;
  doc.C_BMA_12 = _C_BMA_12.value;
  doc.D_UPR_CASE = _D_UPR_CASE.value;
  doc.D_LWR_CASE = _D_LWR_CASE.value;
  doc.D_HV_CNTR_RH = _D_HV_CNTR_RH.value;
  doc.D_HV_CNTR_LH = _D_HV_CNTR_LH.value;
  doc.D_RELAY = _D_RELAY.value;
  doc.D_LV_W_H = _D_LV_W_H.value;
  doc.D_HV_W_H_1 = _D_HV_W_H_1.value;
  doc.D_HV_W_H_2 = _D_HV_W_H_2.value;
  doc.D_BUSBAR = _D_BUSBAR.value;
  doc.D_BMU = _D_BMU.value;
  doc.D_CMU_1 = _D_CMU_1.value;
  doc.D_CMU_2 = _D_CMU_2.value;
  doc.D_BMA_1 = _D_BMA_1.value;
  doc.D_BMA_2 = _D_BMA_2.value;

  update(부품정보_list, doc);
  await delay();

  console.log(update_count);
  console.log(insert_count);

  if (update_count > 0) {
    alert("업데이트 되었습니다");
  }

  if (insert_count > 0) {
    alert("저장 되었습니다");
  }
}

function auto_focus_A() {
  _A_UPR_CASE.onchange = function (event) {
    _A_LWR_CASE.focus();
  };
  _A_LWR_CASE.onchange = function (event) {
    _A_S_PLUG.focus();
  };
  _A_S_PLUG.onchange = function (event) {
    _A_SPA.focus();
  };
  _A_SPA.onchange = function (event) {
    _A_HV_CNTR.focus();
  };
  _A_HV_CNTR.onchange = function (event) {
    _A_Heating_CNTR.focus();
  };
  _A_Heating_CNTR.onchange = function (event) {
    _A_PRA.focus();
  };
  _A_PRA.onchange = function (event) {
    _A_LV_W_H.focus();
  };
  _A_LV_W_H.onchange = function (event) {
    _A_HV_W_H_1.focus();
  };
  _A_HV_W_H_1.onchange = function (event) {
    _A_HV_W_H_2.focus();
  };
  _A_HV_W_H_2.onchange = function (event) {
    _A_HV_W_H_3.focus();
  };
  _A_HV_W_H_3.onchange = function (event) {
    _A_HV_W_H_4.focus();
  };
  _A_HV_W_H_4.onchange = function (event) {
    _A_HV_W_H_5.focus();
  };
  _A_HV_W_H_5.onchange = function (event) {
    _A_BUSBAR.focus();
  };
  _A_BUSBAR.onchange = function (event) {
    _A_BMU.focus();
  };
  _A_BMU.onchange = function (event) {
    _A_CMU_1.focus();
  };
  _A_CMU_1.onchange = function (event) {
    _A_CMU_2.focus();
  };
  _A_CMU_2.onchange = function (event) {
    _A_CMU_3.focus();
  };
  _A_CMU_3.onchange = function (event) {
    _A_CMU_4.focus();
  };
  _A_CMU_4.onchange = function (event) {
    _A_CMU_5.focus();
  };
  _A_CMU_5.onchange = function (event) {
    _A_BMA_1.focus();
  };
  _A_BMA_1.onchange = function (event) {
    _A_BMA_2.focus();
  };
  _A_BMA_2.onchange = function (event) {
    _A_BMA_3.focus();
  };
  _A_BMA_3.onchange = function (event) {
    _A_BMA_4.focus();
  };
  _A_BMA_4.onchange = function (event) {
    _A_BMA_5.focus();
  };
  //_A_BMA_5.onchange = function(event) {
}

function auto_focus_B() {
  _B_UPR_CASE.onchange = function (event) {
    _B_LWR_CASE.focus();
  };

  _B_LWR_CASE.onchange = function (event) {
    _B_HV_CNTR.focus();
  };

  _B_HV_CNTR.onchange = function (event) {
    _B_Heating_CNTR.focus();
  };

  _B_Heating_CNTR.onchange = function (event) {
    _B_PRA.focus();
  };

  _B_PRA.onchange = function (event) {
    _B_FUSE_BOX.focus();
  };

  _B_FUSE_BOX.onchange = function (event) {
    _B_LV_W_H.focus();
  };

  _B_LV_W_H.onchange = function (event) {
    _B_HV_W_H_1.focus();
  };

  _B_HV_W_H_1.onchange = function (event) {
    _B_HV_W_H_2.focus();
  };

  _B_HV_W_H_2.onchange = function (event) {
    _B_HV_W_H_3.focus();
  };

  _B_HV_W_H_3.onchange = function (event) {
    _B_HV_W_H_4.focus();
  };

  _B_HV_W_H_4.onchange = function (event) {
    _B_HV_W_H_5.focus();
  };

  _B_HV_W_H_5.onchange = function (event) {
    _B_HV_W_H_6.focus();
  };

  _B_HV_W_H_6.onchange = function (event) {
    _B_HV_W_H_7.focus();
  };

  _B_HV_W_H_7.onchange = function (event) {
    _B_HV_W_H_8.focus();
  };

  _B_HV_W_H_8.onchange = function (event) {
    _B_HV_W_H_9.focus();
  };

  _B_HV_W_H_9.onchange = function (event) {
    _B_HV_W_H_10.focus();
  };

  _B_HV_W_H_10.onchange = function (event) {
    _B_BUSBAR.focus();
  };

  _B_BUSBAR.onchange = function (event) {
    _B_BMU.focus();
  };

  _B_BMU.onchange = function (event) {
    _B_CMU_1.focus();
  };

  _B_CMU_1.onchange = function (event) {
    _B_CMU_2.focus();
  };

  _B_CMU_2.onchange = function (event) {
    _B_CMU_3.focus();
  };

  _B_CMU_3.onchange = function (event) {
    _B_CMU_4.focus();
  };

  _B_CMU_4.onchange = function (event) {
    _B_CMU_5.focus();
  };

  _B_CMU_5.onchange = function (event) {
    _B_BMA_1.focus();
  };

  _B_BMA_1.onchange = function (event) {
    _B_BMA_2.focus();
  };

  _B_BMA_2.onchange = function (event) {
    _B_BMA_3.focus();
  };

  _B_BMA_3.onchange = function (event) {
    _B_BMA_4.focus();
  };

  _B_BMA_4.onchange = function (event) {
    _B_BMA_5.focus();
  };

  _B_BMA_5.onchange = function (event) {
    _B_BMA_6.focus();
  };

  _B_BMA_6.onchange = function (event) {
    _B_BMA_7.focus();
  };

  _B_BMA_7.onchange = function (event) {
    _B_BMA_8.focus();
  };

  _B_BMA_8.onchange = function (event) {
    _B_BMA_9.focus();
  };

  _B_BMA_9.onchange = function (event) {
    _B_BMA_10.focus();
  };

  //_B_BMA_10.onchange = function(event) {
  //	_B_LWR_CASE.focus();
  //}
}

function auto_focus_C() {
  _C_UPR_CASE.onchange = function (event) {
    _C_.focus();
  };

  _C_LWR_CASE.onchange = function (event) {
    _C_HV_CNTR_1.focus();
  };

  _C_HV_CNTR_1.onchange = function (event) {
    _C_HC_CNTR_2.focus();
  };

  _C_HV_CNTR_2.onchange = function (event) {
    _C_Heating_CNTR.focus();
  };

  _C_Heating_CNTR.onchange = function (event) {
    _C_PRA.focus();
  };

  _C_PRA.onchange = function (event) {
    _C_FUSE_BOX.focus();
  };

  _C_FUSE_BOX.onchange = function (event) {
    _C_LV_W_H.focus();
  };

  _C_LV_W_H.onchange = function (event) {
    _C_HV_W_H_1.focus();
  };

  _C_HV_W_H_1.onchange = function (event) {
    _C_HV_W_H_2.focus();
  };

  _C_HV_W_H_2.onchange = function (event) {
    _C_HV_W_H_3.focus();
  };

  _C_HV_W_H_3.onchange = function (event) {
    _C_HV_W_H_4.focus();
  };

  _C_HV_W_H_4.onchange = function (event) {
    _C_HV_W_H_5.focus();
  };

  _C_HV_W_H_5.onchange = function (event) {
    _C_HV_W_H_6.focus();
  };

  _C_HV_W_H_6.onchange = function (event) {
    _C_HV_W_H_7.focus();
  };

  _C_HV_W_H_7.onchange = function (event) {
    _C_HV_W_H_8.focus();
  };

  _C_HV_W_H_8.onchange = function (event) {
    _C_BUSBAR.focus();
  };

  _C_BUSBAR.onchange = function (event) {
    _C_BMU.focus();
  };

  _C_BMU.onchange = function (event) {
    _C_CMU_1.focus();
  };

  _C_CMU_1.onchange = function (event) {
    _C_CMU_2.focus();
  };

  _C_CMU_2.onchange = function (event) {
    _C_CMU_3.focus();
  };

  _C_CMU_3.onchange = function (event) {
    _C_CMU_4.focus();
  };

  _C_CMU_4.onchange = function (event) {
    _C_CMU_5.focus();
  };

  _C_CMU_5.onchange = function (event) {
    _C_CMU_6.focus();
  };

  _C_CMU_6.onchange = function (event) {
    _C_CMU_7.focus();
  };

  _C_CMU_7.onchange = function (event) {
    _C_CMU_8.focus();
  };

  _C_CMU_8.onchange = function (event) {
    _C_BMA_1.focus();
  };

  _C_BMA_1.onchange = function (event) {
    _C_BMA_2.focus();
  };

  _C_BMA_2.onchange = function (event) {
    _C_BMA_3.focus();
  };

  _C_BMA_3.onchange = function (event) {
    _C_BMA_4.focus();
  };

  _C_BMA_4.onchange = function (event) {
    _C_BMA_5.focus();
  };

  _C_BMA_5.onchange = function (event) {
    _C_BMA_6.focus();
  };

  _C_BMA_6.onchange = function (event) {
    _C_BMA_7.focus();
  };

  _C_BMA_7.onchange = function (event) {
    _C_BMA_8.focus();
  };

  _C_BMA_8.onchange = function (event) {
    _C_BMA_9.focus();
  };

  _C_BMA_9.onchange = function (event) {
    _C_BMA_10.focus();
  };

  _C_BMA_10.onchange = function (event) {
    _C_BMA_11.focus();
  };

  _C_BMA_11.onchange = function (event) {
    _C_BMA_12.focus();
  };

  //_C_BMA_12.onchange = function(event) {
  //	_C_BMA_2.focus();
  //}
}

function auto_focus_D() {
  _D_UPR_CASE.onchange = function (event) {
    _D_LWR_CASE.focus();
  };

  _D_LWR_CASE.onchange = function (event) {
    _D_HV_CNTR_RH.focus();
  };

  _D_HV_CNTR_RH.onchange = function (event) {
    _D_HV_CNTR_LH.focus();
  };

  _D_HV_CNTR_LH.onchange = function (event) {
    _D_RELAY.focus();
  };

  _D_RELAY.onchange = function (event) {
    _D_LV_W_H.focus();
  };

  _D_LV_W_H.onchange = function (event) {
    _D_HV_W_H_1.focus();
  };

  _D_HV_W_H_1.onchange = function (event) {
    _D_HV_W_H_2.focus();
  };

  _D_HV_W_H_2.onchange = function (event) {
    _D_BUSBAR.focus();
  };

  _D_BUSBAR.onchange = function (event) {
    _D_BMU.focus();
  };

  _D_BMU.onchange = function (event) {
    _D_CMU_1.focus();
  };

  _D_CMU_1.onchange = function (event) {
    _D_CMU_2.focus();
  };

  _D_CMU_2.onchange = function (event) {
    _D_BMA_1.focus();
  };

  _D_BMA_1.onchange = function (event) {
    _D_BMA_2.focus();
  };

  //_D_BMA_2.onchange = function(event) {
  //}
}
