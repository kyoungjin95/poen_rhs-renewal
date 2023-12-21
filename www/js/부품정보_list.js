var DE_SK3_LWR_CASE = [];
var OS_LWR_CASE = [];
var HR_PU_LWR_CASE = [];
var CV_LWR_CASE = [];
var NE_LWR_CASE = [];
var JW_LWR_CASE = [];
var CS_LWR_CASE = [];
var LK_LWR_CASE = [];
var LK_FC_LWR_CASE = [];
var LM_LWR_CASE = [];

var DE_SK3_UPR_CASE = [];
var OS_UPR_CASE = [];
var HR_PU_UPR_CASE = [];
var CV_UPR_CASE = [];
var NE_UPR_CASE = [];
var JW_UPR_CASE = [];
var CS_UPR_CASE = [];
var LK_UPR_CASE = [];
var LK_FC_UPR_CASE = [];
var LM_UPR_CASE = [];

var DE_SK3_S_PLUG = [];
var OS_S_PLUG = [];
var HR_PU_S_PLUG = [];
var CV_S_PLUG = [];
var NE_S_PLUG = [];
var JW_S_PLUG = [];
var CS_S_PLUG = [];
var LK_S_PLUG = [];
var LK_FC_S_PLUG = [];
var LM_S_PLUG = [];

var DE_SK3_SPA  = [];
var OS_SPA  = [];
var HR_PU_SPA  = [];
var CV_SPA  = [];
var NE_SPA  = [];
var JW_SPA  = [];
var CS_SPA  = [];
var LK_SPA  = [];
var LK_FC_SPA  = [];
var LM_SPA  = [];

var DE_SK3_HV_CNTR = [];
var OS_HV_CNTR = [];
var HR_PU_HV_CNTR = [];
var CV_HV_CNTR = [];
var NE_HV_CNTR = [];
var JW_HV_CNTR = [];
var CS_HV_CNTR = [];
var LK_HV_CNTR = [];
var LK_FC_HV_CNTR = [];
var LM_HV_CNTR = [];

var DE_SK3_HT_CNTR = [];
var OS_HT_CNTR = [];
var HR_PU_HT_CNTR = [];
var CV_HT_CNTR = [];
var NE_HT_CNTR = [];
var JW_HT_CNTR = [];
var CS_HT_CNTR = [];
var LK_HT_CNTR = [];
var LK_FC_HT_CNTR = [];
var LM_HT_CNTR = [];

var DE_SK3_PRA = [];
var OS_PRA = [];
var HR_PU_PRA = [];
var CV_PRA = [];
var NE_PRA = [];
var JW_PRA = [];
var CS_PRA = [];
var LK_PRA = [];
var LK_FC_PRA = [];
var LM_PRA = [];

var DE_SK3_FUSE = [];
var OS_FUSE = [];
var HR_PU_FUSE = [];
var CV_FUSE = [];
var NE_FUSE = [];
var JW_FUSE = [];
var CS_FUSE = [];
var LK_FUSE = [];
var LK_FC_FUSE = [];
var LM_FUSE = [];

var DE_SK3_RELAY = [];
var OS_RELAY = [];
var HR_PU_RELAY = [];
var CV_RELAY = [];
var NE_RELAY = [];
var JW_RELAY = [];
var CS_RELAY = [];
var LK_RELAY = [];
var LK_FC_RELAY = [];
var LM_RELAY = [];

var DE_SK3_LV_W_H = [];
var OS_LV_W_H = [];
var HR_PU_LV_W_H = [];
var CV_LV_W_H = [];
var NE_LV_W_H = [];
var JW_LV_W_H = [];
var CS_LV_W_H = [];
var LK_LV_W_H = [];
var LK_FC_LV_W_H = [];
var LM_LV_W_H = [];

var DE_SK3_HV_W_H  = [];
var OS_HV_W_H  = [];
var HR_PU_HV_W_H  = [];
var CV_HV_W_H  = [];
var NE_HV_W_H  = [];
var JW_HV_W_H  = [];
var CS_HV_W_H  = [];
var LK_HV_W_H  = [];
var LK_FC_HV_W_H  = [];
var LM_HV_W_H  = [];

var DE_SK3_BMU  = [];
var OS_BMU  = [];
var HR_PU_BMU  = [];
var CV_BMU  = [];
var NE_BMU  = [];
var JW_BMU  = [];
var CS_BMU  = [];
var LK_BMU  = [];
var LK_FC_BMU  = [];
var LM_BMU  = [];

var DE_SK3_온도센서 = [];
var OS_온도센서 = [];
var HR_PU_온도센서 = [];
var CV_온도센서 = [];
var NE_온도센서 = [];
var JW_온도센서 = [];
var CS_온도센서 = [];
var LK_온도센서 = [];
var LK_FC_온도센서 = [];
var LM_온도센서 = [];

var DE_SK3_CMU = [];
var OS_CMU = [];
var HR_PU_CMU = [];
var CV_CMU = [];
var NE_CMU = [];
var JW_CMU = [];
var CS_CMU = [];
var LK_CMU = [];
var LK_FC_CMU = [];
var LM_CMU = [];

var DE_SK_BMA = [];
var OS_BMA = [];
var HR_PU_BMA = [];
var CV_BMA = [];
var NE_BMA = [];
var JW_BMA = [];
var CS_BMA = [];
var LK_BMA = [];
var LK_FC_BMA = [];
var LM_BMA = [];

async function 부품정보_list_시작() {
	while (typeof _D == 'undefined') {
		await sleep(100);
	}
	console.log(관리번호, 차종);
	flag_부품정보_list = false;

	_management_id.value = 관리번호;
	_차종.value = 차종;

	auto_focus();

	_A.style.display = "none";
	_B.style.display = "none";
	_C.style.display = "none";
	_D.style.display = "none";
	_D2.style.display = "none";

	_img_1.style.display = "none";
	_img_2.style.display = "none";
	_img_3.style.display = "none";
	_img_4.style.display = "none";
	_img_5.style.display = "none";

	switch (차종) {
		case "DE":
		case "DE_EV":
		case "OS":
		case "OS_EV":
		case "SK3":
		case "SK3_EV":
		case "LK":
		case "LK_EV":
			_A.style.display = "block";
			_B.style.display = "none";
			_C.style.display = "none";
			_D.style.display = "none";
			_D2.style.display = "none";

			_img_1.style.display = "block";
			_img_2.style.display = "none";
			_img_3.style.display = "none";
			_img_4.style.display = "none";
			_img_5.style.display = "none";

			_A_UPR_CASE_QR.focus();
			break;

		case "PU":
		case "PU_EV":
		case "HR":
		case "HR_EV":
			_A.style.display = "none";
			_B.style.display = "block";
			_C.style.display = "none";
			_D.style.display = "none";
			_D2.style.display = "none";

			_img_1.style.display = "none";
			_img_2.style.display = "block";
			_img_3.style.display = "none";
			_img_4.style.display = "none";
			_img_5.style.display = "none";

			_B_UPR_CASE_QR.focus();
			break;

		case "CV":
		case "CV_EV":
		case "NE":
		case "NE_EV":
		case "LM":
		case "LM_EV":
			_A.style.display = "none";
			_B.style.display = "none";
			_C.style.display = "block";
			_D.style.display = "none";
			_D2.style.display = "none";

			_img_1.style.display = "none";
			_img_2.style.display = "none";
			_img_3.style.display = "block";
			_img_4.style.display = "none";
			_img_5.style.display = "none";

			_C_UPR_CASE_QR.focus();
			break;

		case "CS":
		case "CS_EV":
			_A.style.display = "none";
			_B.style.display = "none";
			_C.style.display = "none";
			_D.style.display = "block";
			_D2.style.display = "block";

			_img_1.style.display = "none";
			_img_2.style.display = "none";
			_img_3.style.display = "none";
			_img_4.style.display = "block";
			_img_5.style.display = "block";

			_D_UPR_CASE_QR.focus();
			break;

		default:
			alert("차종 정보를 확인해주세요");

			return;
			break;
	}

	await 부품정보_list_load();
	await 품번_list();
}

async function 품번_list() {
	DE_SK3_LWR_CASE = [];
	OS_LWR_CASE = [];
	HR_PU_LWR_CASE = [];
	CV_LWR_CASE = [];
	NE_LWR_CASE = [];
	JW_LWR_CASE = [];
	CS_LWR_CASE = [];
	LK_LWR_CASE = [];
	LKFC_LWR_CASE = [];
	LM_LWR_CASE = [];

	DE_SK3_UPR_CASE = [];
	OS_UPR_CASE = [];
	HR_PU_UPR_CASE = [];
	CV_UPR_CASE = [];
	NE_UPR_CASE = [];
	JW_UPR_CASE = [];
	CS_UPR_CASE = [];
	LK_UPR_CASE = [];
	LKFC_UPR_CASE = [];
	LM_UPR_CASE = [];

	DE_SK3_S_PLUG = [];
	OS_S_PLUG = [];
	HR_PU_S_PLUG = [];
	CV_S_PLUG = [];
	NE_S_PLUG = [];
	JW_S_PLUG = [];
	CS_S_PLUG = [];
	LK_S_PLUG = [];
	LKFC_S_PLUG = [];
	LM_S_PLUG = [];

	DE_SK3_SPA  = [];
	OS_SPA  = [];
	HR_PU_SPA  = [];
	CV_SPA  = [];
	NE_SPA  = [];
	JW_SPA  = [];
	CS_SPA  = [];
	LK_SPA  = [];
	LKFC_SPA  = [];
	LM_SPA  = [];

	DE_SK3_HV_CNTR = [];
	OS_HV_CNTR = [];
	HR_PU_HV_CNTR = [];
	CV_HV_CNTR = [];
	NE_HV_CNTR = [];
	JW_HV_CNTR = [];
	CS_HV_CNTR = [];
	LK_HV_CNTR = [];
	LKFC_HV_CNTR = [];
	LM_HV_CNTR = [];

	DE_SK3_HT_CNTR = [];
	OS_HT_CNTR = [];
	HR_PU_HT_CNTR = [];
	CV_HT_CNTR = [];
	NE_HT_CNTR = [];
	JW_HT_CNTR = [];
	CS_HT_CNTR = [];
	LK_HT_CNTR = [];
	LKFC_HT_CNTR = [];
	LM_HT_CNTR = [];

	DE_SK3_PRA = [];
	OS_PRA = [];
	HR_PU_PRA = [];
	CV_PRA = [];
	NE_PRA = [];
	JW_PRA = [];
	CS_PRA = [];
	LK_PRA = [];
	LKFC_PRA = [];
	LM_PRA = [];

	DE_SK3_FUSE = [];
	OS_FUSE = [];
	HR_PU_FUSE = [];
	CV_FUSE = [];
	NE_FUSE = [];
	JW_FUSE = [];
	CS_FUSE = [];
	LK_FUSE = [];
	LKFC_FUSE = [];
	LM_FUSE = [];

	DE_SK3_RELAY = [];
	OS_RELAY = [];
	HR_PU_RELAY = [];
	CV_RELAY = [];
	NE_RELAY = [];
	JW_RELAY = [];
	CS_RELAY = [];
	LK_RELAY = [];
	LKFC_RELAY = [];
	LM_RELAY = [];

	DE_SK3_LV_W_H = [];
	OS_LV_W_H = [];
	HR_PU_LV_W_H = [];
	CV_LV_W_H = [];
	NE_LV_W_H = [];
	JW_LV_W_H = [];
	CS_LV_W_H = [];
	LK_LV_W_H = [];
	LKFC_LV_W_H = [];
	LM_LV_W_H = [];

	DE_SK3_HV_W_H  = [];
	OS_HV_W_H  = [];
	HR_PU_HV_W_H  = [];
	CV_HV_W_H  = [];
	NE_HV_W_H  = [];
	JW_HV_W_H  = [];
	CS_HV_W_H  = [];
	LK_HV_W_H  = [];
	LKFC_HV_W_H  = [];
	LM_HV_W_H  = [];

	DE_SK3_BMU  = [];
	OS_BMU  = [];
	HR_PU_BMU  = [];
	CV_BMU  = [];
	NE_BMU  = [];
	JW_BMU  = [];
	CS_BMU  = [];
	LK_BMU  = [];
	LKFC_BMU  = [];
	LM_BMU  = [];

	DE_SK3_온도센서 = [];
	OS_온도센서 = [];
	HR_PU_온도센서 = [];
	CV_온도센서 = [];
	NE_온도센서 = [];
	JW_온도센서 = [];
	CS_온도센서 = [];
	LK_온도센서 = [];
	LKFC_온도센서 = [];
	LM_온도센서 = [];

	DE_SK3_CMU = [];
	OS_CMU = [];
	HR_PU_CMU = [];
	CV_CMU = [];
	NE_CMU = [];
	JW_CMU = [];
	CS_CMU = [];
	LK_CMU = [];
	LKFC_CMU = [];
	LM_CMU = [];

	DE_SK3_BMA = [];
	OS_BMA = [];
	HR_PU_BMA = [];
	CV_BMA = [];
	NE_BMA = [];
	JW_BMA = [];
	CS_BMA = [];
	LK_BMA = [];
	LKFC_BMA = [];
	LM_BMA = [];

	find_품번(품번, { 번호 : { $exists : true }});
	await delay();

	if(품번_v != null) {
		console.log(품번_v);
		품번_v.forEach(function(품번) {
			switch(품번.차종) {
				case 'DE/SK3' :
					DE_SK3_LWR_CASE.push(품번.LWR_CASE);
					DE_SK3_UPR_CASE.push(품번.UPR_CASE);
					DE_SK3_S_PLUG.push(품번.S_PLUG);
					DE_SK3_SPA.push(품번.SPA);
					DE_SK3_HV_CNTR.push(품번.HV_CNTR);
					DE_SK3_HT_CNTR.push(품번.HT_CNTR);
					DE_SK3_PRA.push(품번.PRA);
					DE_SK3_FUSE.push(품번.FUSE);
					DE_SK3_RELAY.push(품번.RELAY);
					DE_SK3_LV_W_H.push(품번.LV_W_H);
					DE_SK3_HV_W_H.push(품번.HV_W_H);
					DE_SK3_BMU.push(품번.BMU);
					DE_SK3_온도센서.push(품번.온도센서);
					DE_SK3_CMU.push(품번.CMU);
					DE_SK3_BMA.push(품번.BMA);

					break;

				case 'OS' :
					OS_LWR_CASE.push(품번.LWR_CASE);
					OS_UPR_CASE.push(품번.UPR_CASE);
					OS_S_PLUG.push(품번.S_PLUG);
					OS_SPA.push(품번.SPA);
					OS_HV_CNTR.push(품번.HV_CNTR);
					OS_HT_CNTR.push(품번.HT_CNTR);
					OS_PRA.push(품번.PRA);
					OS_FUSE.push(품번.FUSE);
					OS_RELAY.push(품번.RELAY);
					OS_LV_W_H.push(품번.LV_W_H);
					OS_HV_W_H.push(품번.HV_W_H);
					OS_BMU.push(품번.BMU);
					OS_온도센서.push(품번.온도센서);
					OS_CMU.push(품번.CMU);
					OS_BMA.push(품번.BMA);

					break;

				case 'HR/PU' :
					HR_PU_LWR_CASE.push(품번.LWR_CASE);
					HR_PU_UPR_CASE.push(품번.UPR_CASE);
					HR_PU_S_PLUG.push(품번.S_PLUG);
					HR_PU_SPA.push(품번.SPA);
					HR_PU_HV_CNTR.push(품번.HV_CNTR);
					HR_PU_HT_CNTR.push(품번.HT_CNTR);
					HR_PU_PRA.push(품번.PRA);
					HR_PU_FUSE.push(품번.FUSE);
					HR_PU_RELAY.push(품번.RELAY);
					HR_PU_LV_W_H.push(품번.LV_W_H);
					HR_PU_HV_W_H.push(품번.HV_W_H);
					HR_PU_BMU.push(품번.BMU);
					HR_PU_온도센서.push(품번.온도센서);
					HR_PU_CMU.push(품번.CMU);
					HR_PU_BMA.push(품번.BMA);

					break;

				case 'CV' :
					CV_LWR_CASE.push(품번.LWR_CASE);
					CV_UPR_CASE.push(품번.UPR_CASE);
					CV_S_PLUG.push(품번.S_PLUG);
					CV_SPA.push(품번.SPA);
					CV_HV_CNTR.push(품번.HV_CNTR);
					CV_HT_CNTR.push(품번.HT_CNTR);
					CV_PRA.push(품번.PRA);
					CV_FUSE.push(품번.FUSE);
					CV_RELAY.push(품번.RELAY);
					CV_LV_W_H.push(품번.LV_W_H);
					CV_HV_W_H.push(품번.HV_W_H);
					CV_BMU.push(품번.BMU);
					CV_온도센서.push(품번.온도센서);
					CV_CMU.push(품번.CMU);
					CV_BMA.push(품번.BMA);

					break;
			
				case 'NE' :
					NE_LWR_CASE.push(품번.LWR_CASE);
					NE_UPR_CASE.push(품번.UPR_CASE);
					NE_S_PLUG.push(품번.S_PLUG);
					NE_SPA.push(품번.SPA);
					NE_HV_CNTR.push(품번.HV_CNTR);
					NE_HT_CNTR.push(품번.HT_CNTR);
					NE_PRA.push(품번.PRA);
					NE_FUSE.push(품번.FUSE);
					NE_RELAY.push(품번.RELAY);
					NE_LV_W_H.push(품번.LV_W_H);
					NE_HV_W_H.push(품번.HV_W_H);
					NE_BMU.push(품번.BMU);
					NE_온도센서.push(품번.온도센서);
					NE_CMU.push(품번.CMU);
					NE_BMA.push(품번.BMA);

					break;
			
				case 'JW' :
					JW_LWR_CASE.push(품번.LWR_CASE);
					JW_UPR_CASE.push(품번.UPR_CASE);
					JW_S_PLUG.push(품번.S_PLUG);
					JW_SPA.push(품번.SPA);
					JW_HV_CNTR.push(품번.HV_CNTR);
					JW_HT_CNTR.push(품번.HT_CNTR);
					JW_PRA.push(품번.PRA);
					JW_FUSE.push(품번.FUSE);
					JW_RELAY.push(품번.RELAY);
					JW_LV_W_H.push(품번.LV_W_H);
					JW_HV_W_H.push(품번.HV_W_H);
					JW_BMU.push(품번.BMU);
					JW_온도센서.push(품번.온도센서);
					JW_CMU.push(품번.CMU);
					JW_BMA.push(품번.BMA);

					break;
			
				case 'CS' :
					CS_LWR_CASE.push(품번.LWR_CASE);
					CS_UPR_CASE.push(품번.UPR_CASE);
					CS_S_PLUG.push(품번.S_PLUG);
					CS_SPA.push(품번.SPA);
					CS_HV_CNTR.push(품번.HV_CNTR);
					CS_HT_CNTR.push(품번.HT_CNTR);
					CS_PRA.push(품번.PRA);
					CS_FUSE.push(품번.FUSE);
					CS_RELAY.push(품번.RELAY);
					CS_LV_W_H.push(품번.LV_W_H);
					CS_HV_W_H.push(품번.HV_W_H);
					CS_BMU.push(품번.BMU);
					CS_온도센서.push(품번.온도센서);
					CS_CMU.push(품번.CMU);
					CS_BMA.push(품번.BMA);

					break;
			
				case 'LK' :
					LK_LWR_CASE.push(품번.LWR_CASE);
					LK_UPR_CASE.push(품번.UPR_CASE);
					LK_S_PLUG.push(품번.S_PLUG);
					LK_SPA.push(품번.SPA);
					LK_HV_CNTR.push(품번.HV_CNTR);
					LK_HT_CNTR.push(품번.HT_CNTR);
					LK_PRA.push(품번.PRA);
					LK_FUSE.push(품번.FUSE);
					LK_RELAY.push(품번.RELAY);
					LK_LV_W_H.push(품번.LV_W_H);
					LK_HV_W_H.push(품번.HV_W_H);
					LK_BMU.push(품번.BMU);
					LK_온도센서.push(품번.온도센서);
					LK_CMU.push(품번.CMU);
					LK_BMA.push(품번.BMA);

					break;
			
				case 'LKFC' :
					LKFC_LWR_CASE.push(품번.LWR_CASE);
					LKFC_UPR_CASE.push(품번.UPR_CASE);
					LKFC_S_PLUG.push(품번.S_PLUG);
					LKFC_SPA.push(품번.SPA);
					LKFC_HV_CNTR.push(품번.HV_CNTR);
					LKFC_HT_CNTR.push(품번.HT_CNTR);
					LKFC_PRA.push(품번.PRA);
					LKFC_FUSE.push(품번.FUSE);
					LKFC_RELAY.push(품번.RELAY);
					LKFC_LV_W_H.push(품번.LV_W_H);
					LKFC_HV_W_H.push(품번.HV_W_H);
					LKFC_BMU.push(품번.BMU);
					LKFC_온도센서.push(품번.온도센서);
					LKFC_CMU.push(품번.CMU);
					LKFC_BMA.push(품번.BMA);

					break;
			
				case 'LM' :
					LM_LWR_CASE.push(품번.LWR_CASE);
					LM_UPR_CASE.push(품번.UPR_CASE);
					LM_S_PLUG.push(품번.S_PLUG);
					LM_SPA.push(품번.SPA);
					LM_HV_CNTR.push(품번.HV_CNTR);
					LM_HT_CNTR.push(품번.HT_CNTR);
					LM_PRA.push(품번.PRA);
					LM_FUSE.push(품번.FUSE);
					LM_RELAY.push(품번.RELAY);
					LM_LV_W_H.push(품번.LV_W_H);
					LM_HV_W_H.push(품번.HV_W_H);
					LM_BMU.push(품번.BMU);
					LM_온도센서.push(품번.온도센서);
					LM_CMU.push(품번.CMU);
					LM_BMA.push(품번.BMA);

					break;

				default : 
					console.log('품번 data의 차종을 확인하세요');
			}
		});
	}
	console.log(LM_BMA);

	select_box_set();
}

function select_box_set_A() {
        //os/ed/sk3/lk
	//
	switch (차종) {
		case "DE":
		case "DE_EV":
		case "SK3":
		case "SK3_EV":
			DE_SK3_LWR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LWR_CASE_SEL.appendChild(option);
			}

			DE_SK3_UPR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_UPR_CASE_SEL.appendChild(option);
			}

			DE_SK3_S_PLUG.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_S_PLUG_SEL.appendChild(option); 
			}

			DE_SK3_SPA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_SPA_SEL.appendChild(option);   
			}

			DE_SK3_HV_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_CNTR_SEL.appendChild(option);  
			}

			DE_SK3_HT_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HT_CNTR_SEL.appendChild(option); 
			}

			DE_SK3_PRA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_PRA_SEL.appendChild(option);   
			}

			DE_SK3_LV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LV_W_H_SEL.appendChild(option); 
			}

			DE_SK3_HV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_W_H_1_SEL.appendChild(option);
				_A_HV_W_H_2_SEL.appendChild(option); 
				_A_HV_W_H_3_SEL.appendChild(option); 
				_A_HV_W_H_4_SEL.appendChild(option); 
				_A_HV_W_H_5_SEL.appendChild(option); 
			}

			DE_SK3_BMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_BMU_SEL.appendChild(option); 
			}

			DE_SK3_CMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_CMU_1_SEL.appendChild(option);
				_A_CMU_2_SEL.appendChild(option);
				_A_CMU_3_SEL.appendChild(option);
				_A_CMU_4_SEL.appendChild(option);
				_A_CMU_5_SEL.appendChild(option);
			}

			break;

		case "OS":
		case "OS_EV":
			OS_LWR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LWR_CASE_SEL.appendChild(option);
			}

			OS_UPR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_UPR_CASE_SEL.appendChild(option);
			}

			OS_S_PLUG.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_S_PLUG_SEL.appendChild(option); 
			}

			OS_SPA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_SPA_SEL.appendChild(option);   
			}

			OS_HV_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_CNTR_SEL.appendChild(option);  
			}

			OS_HT_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HT_CNTR_SEL.appendChild(option); 
			}

			OS_PRA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_PRA_SEL.appendChild(option);   
			}

			OS_LV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LV_W_H_SEL.appendChild(option); 
			}

			OS_HV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_W_H_1_SEL.appendChild(option);
				_A_HV_W_H_2_SEL.appendChild(option); 
				_A_HV_W_H_3_SEL.appendChild(option); 
				_A_HV_W_H_4_SEL.appendChild(option); 
				_A_HV_W_H_5_SEL.appendChild(option); 
			}

			OS_BMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_BMU_SEL.appendChild(option); 
			}

			OS_CMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_CMU_1_SEL.appendChild(option);
				_A_CMU_2_SEL.appendChild(option);
				_A_CMU_3_SEL.appendChild(option);
				_A_CMU_4_SEL.appendChild(option);
				_A_CMU_5_SEL.appendChild(option);
			}

			break;

		case "LK":
		case "LK_EV":
			LK_LWR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LWR_CASE_SEL.appendChild(option);
			}

			LK_UPR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_UPR_CASE_SEL.appendChild(option);
			}

			LK_S_PLUG.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_S_PLUG_SEL.appendChild(option); 
			}

			LK_SPA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_SPA_SEL.appendChild(option);   
			}

			LK_HV_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_CNTR_SEL.appendChild(option);  
			}

			LK_HT_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HT_CNTR_SEL.appendChild(option); 
			}

			LK_PRA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_PRA_SEL.appendChild(option);   
			}

			LK_LV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LV_W_H_SEL.appendChild(option); 
			}

			LK_HV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_W_H_1_SEL.appendChild(option);
				_A_HV_W_H_2_SEL.appendChild(option); 
				_A_HV_W_H_3_SEL.appendChild(option); 
				_A_HV_W_H_4_SEL.appendChild(option); 
				_A_HV_W_H_5_SEL.appendChild(option); 
			}

			LK_BMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_BMU_SEL.appendChild(option); 
			}

			LK_CMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_CMU_1_SEL.appendChild(option);
				_A_CMU_2_SEL.appendChild(option);
				_A_CMU_3_SEL.appendChild(option);
				_A_CMU_4_SEL.appendChild(option);
				_A_CMU_5_SEL.appendChild(option);
			}

			break;

		case 'LKFC' :
			LKFC_LWR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LWR_CASE_SEL.appendChild(option);
			}

			LKFC_UPR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_UPR_CASE_SEL.appendChild(option);
			}

			LKFC_S_PLUG.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_S_PLUG_SEL.appendChild(option); 
			}

			LKFC_SPA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_SPA_SEL.appendChild(option);   
			}

			LKFC_HV_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_CNTR_SEL.appendChild(option);  
			}

			LKFC_HT_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HT_CNTR_SEL.appendChild(option); 
			}

			LKFC_PRA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_PRA_SEL.appendChild(option);   
			}

			LKFC_LV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LV_W_H_SEL.appendChild(option); 
			}

			LKFC_HV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_W_H_1_SEL.appendChild(option);
				_A_HV_W_H_2_SEL.appendChild(option); 
				_A_HV_W_H_3_SEL.appendChild(option); 
				_A_HV_W_H_4_SEL.appendChild(option); 
				_A_HV_W_H_5_SEL.appendChild(option); 
			}

			LKFC_BMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_BMU_SEL.appendChild(option); 
			}

			LKFC_CMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_CMU_1_SEL.appendChild(option);
				_A_CMU_2_SEL.appendChild(option);
				_A_CMU_3_SEL.appendChild(option);
				_A_CMU_4_SEL.appendChild(option);
				_A_CMU_5_SEL.appendChild(option);
			}

			break;

		case 'CV' :
			CV_LWR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LWR_CASE_SEL.appendChild(option);
			}

			CV_UPR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_UPR_CASE_SEL.appendChild(option);
			}

			CV_S_PLUG.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_S_PLUG_SEL.appendChild(option); 
			}

			CV_SPA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_SPA_SEL.appendChild(option);   
			}

			CV_HV_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LV_W_H_SEL.appendChild(option); 
			}

			CV_HT_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_W_H_1_SEL.appendChild(option);
				_A_HV_W_H_2_SEL.appendChild(option); 
				_A_HV_W_H_3_SEL.appendChild(option); 
				_A_HV_W_H_4_SEL.appendChild(option); 
				_A_HV_W_H_5_SEL.appendChild(option); 
			}

			CV_PRA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_PRA_SEL.appendChild(option);   
			}

			CV_LV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_LV_W_H_SEL.appendChild(option); 
			}

			CV_HV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_HV_W_H_1_SEL.appendChild(option);
				_A_HV_W_H_2_SEL.appendChild(option); 
				_A_HV_W_H_3_SEL.appendChild(option); 
				_A_HV_W_H_4_SEL.appendChild(option); 
				_A_HV_W_H_5_SEL.appendChild(option); 
			}

			CV_BMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_BMU_SEL.appendChild(option); 
			}

			CV_CMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_A_CMU_1_SEL.appendChild(option);
				_A_CMU_2_SEL.appendChild(option);
				_A_CMU_3_SEL.appendChild(option);
				_A_CMU_4_SEL.appendChild(option);
				_A_CMU_5_SEL.appendChild(option);
			}

			break;
	}
}

function select_box_set_B() {
        //HR / PU
	
	switch (차종) {
		case 'HR/PU' :
			HR_PU_LWR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_LWR_CASE_SEL.appendChild(option);
			}

			HR_PU_UPR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_UPR_CASE_SEL.appendChild(option);
			}

			HR_PU_HV_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_LV_W_H_SEL.appendChild(option); 
			}

			HR_PU_HT_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_HT_CNTR_SEL.appendChild(option); 
			}

			HR_PU_PRA.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_PRA_SEL.appendChild(option);   
			}

			HR_PU_FUSE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_FUSE_SEL.appendChild(option);   
			}

			HR_PU_LV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_LV_W_H_SEL.appendChild(option);   
			}

			HR_PU_HV_W_H.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_HV_W_H_1_SEL.appendChild(option);   
				_B_HV_W_H_2_SEL.appendChild(option);   
			}

			HR_PU_BMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_BMU_SEL.appendChild(option);   
			}

			HR_PU_CMU.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_B_CMU_1_SEL.appendChild(option);   
				_B_CMU_2_SEL.appendChild(option);   _B_CMU_3_SEL.appendChild(option);   
				_B_CMU_4_SEL.appendChild(option);   
				_B_CMU_5_SEL.appendChild(option);   
			}

			break;
	}
}

function select_box_set_C() {
        //NE/CV/JW1/LM

	switch (차종) {
		case 'CV' :
			CV_LWR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_C_LWR_CASE_SEL.appendChild(option);
			}

			CV_UPR_CASE.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_C_UPR_CASE_SEL.appendChild(option);
			}

			CV_HV_CNTR.forEach(function(v) {
				var option = document.createElement('option');
				option.value = v;
				option.text = v;
				_C_HV_CNTR_1_SEL.appendChild(option);
				_C_HV_CNTR_2_SEL.appendChild(option);
			}

			CV_HT_CNTR
			CV_PRA
			CV_FUSE
			CV_LV_W_H
			CV_HV_W_H
			CV_BMU
			CV_CMU

			break;

		case 'NE' :
			NE_LWR_CASE
			NE_UPR_CASE
			NE_HV_CNTR
			NE_HT_CNTR
			NE_PRA
			NE_FUSE
			NE_LV_W_H
			NE_HV_W_H
			NE_BMU
			NE_CMU

			break;

		case 'JW' :
			JW_LWR_CASE
			JW_UPR_CASE
			JW_HV_CNTR
			JW_HT_CNTR
			JW_PRA
			JW_FUSE
			JW_LV_W_H
			JW_HV_W_H
			JW_BMU
			JW_CMU

			break;

		case 'LM' :
			LM_LWR_CASE
			LM_UPR_CASE
			LM_HV_CNTR
			LM_HT_CNTR
			LM_PRA
			LM_FUSE
			LM_LV_W_H
			LM_HV_W_H
			LM_BMU
			LM_CMU

			break;
	}
}

function select_box_set_D() {
	//cs
	
	switch (차종) {
		case 'CS' :
			CS_LWR_CASE
			CS_UPR_CASE
			CS_HV_CNTR.push(품번.HV_CNTR);
			CS_HT_CNTR.push(품번.HT_CNTR);
			CS_RELAY.push(품번.RELAY);
			CS_LV_W_H.push(품번.LV_W_H);
			CS_HV_W_H.push(품번.HV_W_H);
			CS_BMU.push(품번.BMU);
			CS_CMU.push(품번.CMU);

			break;
	}

async function 부품정보_list_load() {
	if (_management_id.value == "") return;

	find(부품정보_list, _management_id.value);
	await delay();

	if (부품정보_list_v == null) return;

	_A_UPR_CASE_QR.value = 부품정보_list_v.A_UPR_CASE_QR;
	_A_LWR_CASE_QR.value = 부품정보_list_v.A_LWR_CASE_QR;
	_A_S_PLUG_QR.value = 부품정보_list_v.A_S_PLUG_QR;
	_A_SPA_QR.value = 부품정보_list_v.A_SPA_QR;
	_A_HT_CNTR_QR.value = 부품정보_list_v.A_HT_CNTR_QR;
	_A_HV_CNTR_QR.value = 부품정보_list_v.A_HV_CNTR_QR;
	_A_PRA_QR.value = 부품정보_list_v.A_PRA_QR;
	_A_LV_W_H_QR.value = 부품정보_list_v.A_LV_W_H_QR;
	_A_HV_W_H_1_QR.value = 부품정보_list_v.A_HV_W_H_1_QR;
	_A_HV_W_H_2_QR.value = 부품정보_list_v.A_HV_W_H_2_QR;
	_A_HV_W_H_3_QR.value = 부품정보_list_v.A_HV_W_H_3_QR;
	_A_HV_W_H_4_QR.value = 부품정보_list_v.A_HV_W_H_4_QR;
	_A_HV_W_H_5_QR.value = 부품정보_list_v.A_HV_W_H_5_QR;
	_A_BMU_QR.value = 부품정보_list_v.A_BMU_QR;
	_A_CMU_1_QR.value = 부품정보_list_v.A_CMU_1_QR;
	_A_CMU_2_QR.value = 부품정보_list_v.A_CMU_2_QR;
	_A_CMU_3_QR.value = 부품정보_list_v.A_CMU_3_QR;
	_A_CMU_4_QR.value = 부품정보_list_v.A_CMU_4_QR;
	_A_CMU_5_QR.value = 부품정보_list_v.A_CMU_5_QR;
	_A_MODULE_1_QR.value = 부품정보_list_v.A_MODULE_1_QR;
	_A_MODULE_2_QR.value = 부품정보_list_v.A_MODULE_2_QR;
	_A_MODULE_3_QR.value = 부품정보_list_v.A_MODULE_3_QR;
	_A_MODULE_4_QR.value = 부품정보_list_v.A_MODULE_4_QR;
	_A_MODULE_5_QR.value = 부품정보_list_v.A_MODULE_5_QR;
	_B_UPR_CASE_QR.value = 부품정보_list_v.B_UPR_CASE_QR;
	_B_LWR_CASE_QR.value = 부품정보_list_v.B_LWR_CASE_QR;
	_B_HV_CNTR_QR.value = 부품정보_list_v.B_HV_CNTR_QR;
	_B_HT_CNTR_QR.value = 부품정보_list_v.B_HT_CNTR_QR;
	_B_PRA_QR.value = 부품정보_list_v.B_PRA_QR;
	_B_HV_W_H_1_QR.value = 부품정보_list_v.B_HV_W_H_1_QR;
	_B_HV_W_H_2_QR.value = 부품정보_list_v.B_HV_W_H_2_QR;
	_B_LV_W_H_QR.value = 부품정보_list_v.B_LV_W_H_QR;
	_B_BMU_QR.value = 부품정보_list_v.B_BMU_QR;
	_B_CMU_1_QR.value = 부품정보_list_v.B_CMU_1_QR;
	_B_CMU_2_QR.value = 부품정보_list_v.B_CMU_2_QR;
	_B_CMU_3_QR.value = 부품정보_list_v.B_CMU_3_QR;
	_B_CMU_4_QR.value = 부품정보_list_v.B_CMU_4_QR;
	_B_CMU_5_QR.value = 부품정보_list_v.B_CMU_5_QR;
	_B_MODULE_1_QR.value = 부품정보_list_v.B_MODULE_1_QR;
	_B_MODULE_2_QR.value = 부품정보_list_v.B_MODULE_2_QR;
	_B_MODULE_3_QR.value = 부품정보_list_v.B_MODULE_3_QR;
	_B_MODULE_4_QR.value = 부품정보_list_v.B_MODULE_4_QR;
	_B_MODULE_5_QR.value = 부품정보_list_v.B_MODULE_5_QR;
	_B_MODULE_6_QR.value = 부품정보_list_v.B_MODULE_6_QR;
	_B_MODULE_7_QR.value = 부품정보_list_v.B_MODULE_7_QR;
	_B_MODULE_8_QR.value = 부품정보_list_v.B_MODULE_8_QR;
	_B_MODULE_9_QR.value = 부품정보_list_v.B_MODULE_9_QR;
	_B_MODULE_10_QR.value = 부품정보_list_v.B_MODULE_10_QR;
	_C_UPR_CASE_QR.value = 부품정보_list_v.C_UPR_CASE_QR;
	_C_LWR_CASE_QR.value = 부품정보_list_v.C_LWR_CASE_QR;
	_C_HV_CNTR_1_QR.value = 부품정보_list_v.C_HV_CNTR_1_QR;
	_C_HV_CNTR_2_QR.value = 부품정보_list_v.C_HV_CNTR_2_QR;
	_C_HT_CNTR_QR.value = 부품정보_list_v.C_HT_CNTR_QR;
	_C_PRA_QR.value = 부품정보_list_v.C_PRA_QR;
	_C_FUSE_QR.value = 부품정보_list_v.C_FUSE_QR;
	_C_LV_W_H_QR.value = 부품정보_list_v.C_LV_W_H_QR;
	_C_HV_W_H_1_QR.value = 부품정보_list_v.C_HV_W_H_1_QR;
	_C_HV_W_H_2_QR.value = 부품정보_list_v.C_HV_W_H_2_QR;
	_C_HV_W_H_3_QR.value = 부품정보_list_v.C_HV_W_H_3_QR;
	_C_HV_W_H_4_QR.value = 부품정보_list_v.C_HV_W_H_4_QR;
	_C_HV_W_H_5_QR.value = 부품정보_list_v.C_HV_W_H_5_QR;
	_C_HV_W_H_6_QR.value = 부품정보_list_v.C_HV_W_H_6_QR;
	_C_HV_W_H_7_QR.value = 부품정보_list_v.C_HV_W_H_7_QR;
	_C_HV_W_H_8_QR.value = 부품정보_list_v.C_HV_W_H_8_QR;
	_C_BMU_QR.value = 부품정보_list_v.C_BMU_QR;
	_C_CMU_1_QR.value = 부품정보_list_v.C_CMU_1_QR;
	_C_CMU_2_QR.value = 부품정보_list_v.C_CMU_2_QR;
	_C_CMU_3_QR.value = 부품정보_list_v.C_CMU_3_QR;
	_C_CMU_4_QR.value = 부품정보_list_v.C_CMU_4_QR;
	_C_CMU_5_QR.value = 부품정보_list_v.C_CMU_5_QR;
	_C_CMU_6_QR.value = 부품정보_list_v.C_CMU_6_QR;
	_C_CMU_7_QR.value = 부품정보_list_v.C_CMU_7_QR;
	_C_CMU_8_QR.value = 부품정보_list_v.C_CMU_8_QR;
	_C_MODULE_1_QR.value = 부품정보_list_v.C_MODULE_1_QR;
	_C_MODULE_2_QR.value = 부품정보_list_v.C_MODULE_2_QR;
	_C_MODULE_3_QR.value = 부품정보_list_v.C_MODULE_3_QR;
	_C_MODULE_4_QR.value = 부품정보_list_v.C_MODULE_4_QR;
	_C_MODULE_5_QR.value = 부품정보_list_v.C_MODULE_5_QR;
	_C_MODULE_6_QR.value = 부품정보_list_v.C_MODULE_6_QR;
	_C_MODULE_7_QR.value = 부품정보_list_v.C_MODULE_7_QR;
	_C_MODULE_8_QR.value = 부품정보_list_v.C_MODULE_8_QR;
	_C_MODULE_9_QR.value = 부품정보_list_v.C_MODULE_9_QR;
	_C_MODULE_10_QR.value = 부품정보_list_v.C_MODULE_10_QR;
	_C_MODULE_11_QR.value = 부품정보_list_v.C_MODULE_11_QR;
	_C_MODULE_12_QR.value = 부품정보_list_v.C_MODULE_12_QR;
	_C_MODULE_13_QR.value = 부품정보_list_v.C_MODULE_13_QR;
	_C_MODULE_14_QR.value = 부품정보_list_v.C_MODULE_14_QR;
	_C_MODULE_15_QR.value = 부품정보_list_v.C_MODULE_15_QR;
	_C_MODULE_16_QR.value = 부품정보_list_v.C_MODULE_16_QR;
	_C_MODULE_2_1_QR.value = 부품정보_list_v.C_MODULE_2_1_QR;
	_C_MODULE_2_2_QR.value = 부품정보_list_v.C_MODULE_2_2_QR;
	_C_MODULE_2_3_QR.value = 부품정보_list_v.C_MODULE_2_3_QR;
	_C_MODULE_2_4_QR.value = 부품정보_list_v.C_MODULE_2_4_QR;
	_C_MODULE_2_5_QR.value = 부품정보_list_v.C_MODULE_2_5_QR;
	_C_MODULE_2_6_QR.value = 부품정보_list_v.C_MODULE_2_6_QR;
	_C_MODULE_2_7_QR.value = 부품정보_list_v.C_MODULE_2_7_QR;
	_C_MODULE_2_8_QR.value = 부품정보_list_v.C_MODULE_2_8_QR;
	_C_MODULE_2_9_QR.value = 부품정보_list_v.C_MODULE_2_9_QR;
	_C_MODULE_2_10_QR.value = 부품정보_list_v.C_MODULE_2_10_QR;
	_C_MODULE_2_11_QR.value = 부품정보_list_v.C_MODULE_2_11_QR;
	_C_MODULE_2_12_QR.value = 부품정보_list_v.C_MODULE_2_12_QR;
	_C_MODULE_2_13_QR.value = 부품정보_list_v.C_MODULE_2_13_QR;
	_C_MODULE_2_14_QR.value = 부품정보_list_v.C_MODULE_2_14_QR;
	_C_MODULE_2_15_QR.value = 부품정보_list_v.C_MODULE_2_15_QR;
	_C_MODULE_2_16_QR.value = 부품정보_list_v.C_MODULE_2_16_QR;
	_D_UPR_CASE_QR.value = 부품정보_list_v.D_UPR_CASE_QR;
	_D_LWR_CASE_QR.value = 부품정보_list_v.D_LWR_CASE_QR;
	_D_HV_CNTR_1_QR.value = 부품정보_list_v.D_HV_CNTR_1_QR;
	_D_HV_CNTR_2_QR.value = 부품정보_list_v.D_HV_CNTR_2_QR;
	_D_RELAY_QR.value = 부품정보_list_v.D_RELAY_QR;
	_D_LV_W_H_QR.value = 부품정보_list_v.D_LV_W_H_QR;
	_D_HV_W_H_1_QR.value = 부품정보_list_v.D_HV_W_H_1_QR;
	_D_HV_W_H_2_QR.value = 부품정보_list_v.D_HV_W_H_2_QR;
	_D_BMU_QR.value = 부품정보_list_v.D_BMU_QR;
	_D_CMU_1_QR.value = 부품정보_list_v.D_CMU_1_QR;
	_D_MODULE_1_QR.value = 부품정보_list_v.D_MODULE_1_QR;
	_D_MODULE_2_QR.value = 부품정보_list_v.D_MODULE_2_QR;
	_D2_HV_W_H_1_QR.value = 부품정보_list_v.D2_HV_W_H_1_QR;
	_D2_CMU_1_QR.value = 부품정보_list_v.D2_CMU_1_QR;
	_D2_RELAY_QR.value = 부품정보_list_v.D2_RELAY_QR;
	_D2_BMU_QR.value = 부품정보_list_v.D2_BMU_QR;
	_D2_HV_CNTR_1_QR.value = 부품정보_list_v.D2_HV_CNTR_1_QR;
	_D2_HV_CNTR_2_QR.value = 부품정보_list_v.D2_HV_CNTR_2_QR;
	_D2_LWR_CASE_QR.value = 부품정보_list_v.D2_LWR_CASE_QR;
	_D2_UPR_CASE_QR.value = 부품정보_list_v.D2_UPR_CASE_QR;
	_D2_LV_W_H_QR.value = 부품정보_list_v.D2_LV_W_H_QR;
	_D2_MODULE_1_QR.value = 부품정보_list_v.D2_MODULE_1_QR;
	_A_UPR_CASE_품번.value = 부품정보_list_v.A_UPR_CASE_품번;
	_A_LWR_CASE_품번.value = 부품정보_list_v.A_LWR_CASE_품번;
	_A_S_PLUG_품번.value = 부품정보_list_v.A_S_PLUG_품번;
	_A_SPA_품번.value = 부품정보_list_v.A_SPA_품번;
	_A_HT_CNTR_품번.value = 부품정보_list_v.A_HT_CNTR_품번;
	_A_HV_CNTR_품번.value = 부품정보_list_v.A_HV_CNTR_품번;
	_A_PRA_품번.value = 부품정보_list_v.A_PRA_품번;
	_A_LV_W_H_품번.value = 부품정보_list_v.A_LV_W_H_품번;
	_A_HV_W_H_1_품번.value = 부품정보_list_v.A_HV_W_H_1_품번;
	_A_HV_W_H_2_품번.value = 부품정보_list_v.A_HV_W_H_2_품번;
	_A_HV_W_H_3_품번.value = 부품정보_list_v.A_HV_W_H_3_품번;
	_A_HV_W_H_4_품번.value = 부품정보_list_v.A_HV_W_H_4_품번;
	_A_HV_W_H_5_품번.value = 부품정보_list_v.A_HV_W_H_5_품번;
	_A_BMU_품번.value = 부품정보_list_v.A_BMU_품번;
	_A_CMU_1_품번.value = 부품정보_list_v.A_CMU_1_품번;
	_A_CMU_2_품번.value = 부품정보_list_v.A_CMU_2_품번;
	_A_CMU_3_품번.value = 부품정보_list_v.A_CMU_3_품번;
	_A_CMU_4_품번.value = 부품정보_list_v.A_CMU_4_품번;
	_A_CMU_5_품번.value = 부품정보_list_v.A_CMU_5_품번;
	_A_MODULE_1_품번.value = 부품정보_list_v.A_MODULE_1_품번;
	_A_MODULE_2_품번.value = 부품정보_list_v.A_MODULE_2_품번;
	_A_MODULE_3_품번.value = 부품정보_list_v.A_MODULE_3_품번;
	_A_MODULE_4_품번.value = 부품정보_list_v.A_MODULE_4_품번;
	_A_MODULE_5_품번.value = 부품정보_list_v.A_MODULE_5_품번;
	_B_UPR_CASE_품번.value = 부품정보_list_v.B_UPR_CASE_품번;
	_B_LWR_CASE_품번.value = 부품정보_list_v.B_LWR_CASE_품번;
	_B_HV_CNTR_품번.value = 부품정보_list_v.B_HV_CNTR_품번;
	_B_HT_CNTR_품번.value = 부품정보_list_v.B_HT_CNTR_품번;
	_B_PRA_품번.value = 부품정보_list_v.B_PRA_품번;
	_B_HV_W_H_1_품번.value = 부품정보_list_v.B_HV_W_H_1_품번;
	_B_HV_W_H_2_품번.value = 부품정보_list_v.B_HV_W_H_2_품번;
	_B_LV_W_H_품번.value = 부품정보_list_v.B_LV_W_H_품번;
	_B_BMU_품번.value = 부품정보_list_v.B_BMU_품번;
	_B_CMU_1_품번.value = 부품정보_list_v.B_CMU_1_품번;
	_B_CMU_2_품번.value = 부품정보_list_v.B_CMU_2_품번;
	_B_CMU_3_품번.value = 부품정보_list_v.B_CMU_3_품번;
	_B_CMU_4_품번.value = 부품정보_list_v.B_CMU_4_품번;
	_B_CMU_5_품번.value = 부품정보_list_v.B_CMU_5_품번;
	_B_MODULE_1_품번.value = 부품정보_list_v.B_MODULE_1_품번;
	_B_MODULE_2_품번.value = 부품정보_list_v.B_MODULE_2_품번;
	_B_MODULE_3_품번.value = 부품정보_list_v.B_MODULE_3_품번;
	_B_MODULE_4_품번.value = 부품정보_list_v.B_MODULE_4_품번;
	_B_MODULE_5_품번.value = 부품정보_list_v.B_MODULE_5_품번;
	_B_MODULE_6_품번.value = 부품정보_list_v.B_MODULE_6_품번;
	_B_MODULE_7_품번.value = 부품정보_list_v.B_MODULE_7_품번;
	_B_MODULE_8_품번.value = 부품정보_list_v.B_MODULE_8_품번;
	_B_MODULE_9_품번.value = 부품정보_list_v.B_MODULE_9_품번;
	_B_MODULE_10_품번.value = 부품정보_list_v.B_MODULE_10_품번;
	_C_UPR_CASE_품번.value = 부품정보_list_v.C_UPR_CASE_품번;
	_C_LWR_CASE_품번.value = 부품정보_list_v.C_LWR_CASE_품번;
	_C_HV_CNTR_1_품번.value = 부품정보_list_v.C_HV_CNTR_1_품번;
	_C_HV_CNTR_2_품번.value = 부품정보_list_v.C_HV_CNTR_2_품번;
	_C_HT_CNTR_품번.value = 부품정보_list_v.C_HT_CNTR_품번;
	_C_PRA_품번.value = 부품정보_list_v.C_PRA_품번;
	_C_FUSE_품번.value = 부품정보_list_v.C_FUSE_품번;
	_C_LV_W_H_품번.value = 부품정보_list_v.C_LV_W_H_품번;
	_C_HV_W_H_1_품번.value = 부품정보_list_v.C_HV_W_H_1_품번;
	_C_HV_W_H_2_품번.value = 부품정보_list_v.C_HV_W_H_2_품번;
	_C_HV_W_H_3_품번.value = 부품정보_list_v.C_HV_W_H_3_품번;
	_C_HV_W_H_4_품번.value = 부품정보_list_v.C_HV_W_H_4_품번;
	_C_HV_W_H_5_품번.value = 부품정보_list_v.C_HV_W_H_5_품번;
	_C_HV_W_H_6_품번.value = 부품정보_list_v.C_HV_W_H_6_품번;
	_C_HV_W_H_7_품번.value = 부품정보_list_v.C_HV_W_H_7_품번;
	_C_HV_W_H_8_품번.value = 부품정보_list_v.C_HV_W_H_8_품번;
	_C_BMU_품번.value = 부품정보_list_v.C_BMU_품번;
	_C_CMU_1_품번.value = 부품정보_list_v.C_CMU_1_품번;
	_C_CMU_2_품번.value = 부품정보_list_v.C_CMU_2_품번;
	_C_CMU_3_품번.value = 부품정보_list_v.C_CMU_3_품번;
	_C_CMU_4_품번.value = 부품정보_list_v.C_CMU_4_품번;
	_C_CMU_5_품번.value = 부품정보_list_v.C_CMU_5_품번;
	_C_CMU_6_품번.value = 부품정보_list_v.C_CMU_6_품번;
	_C_CMU_7_품번.value = 부품정보_list_v.C_CMU_7_품번;
	_C_CMU_8_품번.value = 부품정보_list_v.C_CMU_8_품번;
	_C_MODULE_1_품번.value = 부품정보_list_v.C_MODULE_1_품번;
	_C_MODULE_2_품번.value = 부품정보_list_v.C_MODULE_2_품번;
	_C_MODULE_3_품번.value = 부품정보_list_v.C_MODULE_3_품번;
	_C_MODULE_4_품번.value = 부품정보_list_v.C_MODULE_4_품번;
	_C_MODULE_5_품번.value = 부품정보_list_v.C_MODULE_5_품번;
	_C_MODULE_6_품번.value = 부품정보_list_v.C_MODULE_6_품번;
	_C_MODULE_7_품번.value = 부품정보_list_v.C_MODULE_7_품번;
	_C_MODULE_8_품번.value = 부품정보_list_v.C_MODULE_8_품번;
	_C_MODULE_9_품번.value = 부품정보_list_v.C_MODULE_9_품번;
	_C_MODULE_10_품번.value = 부품정보_list_v.C_MODULE_10_품번;
	_C_MODULE_11_품번.value = 부품정보_list_v.C_MODULE_11_품번;
	_C_MODULE_12_품번.value = 부품정보_list_v.C_MODULE_12_품번;
	_C_MODULE_13_품번.value = 부품정보_list_v.C_MODULE_13_품번;
	_C_MODULE_14_품번.value = 부품정보_list_v.C_MODULE_14_품번;
	_C_MODULE_15_품번.value = 부품정보_list_v.C_MODULE_15_품번;
	_C_MODULE_16_품번.value = 부품정보_list_v.C_MODULE_16_품번;
	_C_MODULE_2_1_품번.value = 부품정보_list_v.C_MODULE_2_1_품번;
	_C_MODULE_2_2_품번.value = 부품정보_list_v.C_MODULE_2_2_품번;
	_C_MODULE_2_3_품번.value = 부품정보_list_v.C_MODULE_2_3_품번;
	_C_MODULE_2_4_품번.value = 부품정보_list_v.C_MODULE_2_4_품번;
	_C_MODULE_2_5_품번.value = 부품정보_list_v.C_MODULE_2_5_품번;
	_C_MODULE_2_6_품번.value = 부품정보_list_v.C_MODULE_2_6_품번;
	_C_MODULE_2_7_품번.value = 부품정보_list_v.C_MODULE_2_7_품번;
	_C_MODULE_2_8_품번.value = 부품정보_list_v.C_MODULE_2_8_품번;
	_C_MODULE_2_9_품번.value = 부품정보_list_v.C_MODULE_2_9_품번;
	_C_MODULE_2_10_품번.value = 부품정보_list_v.C_MODULE_2_10_품번;
	_C_MODULE_2_11_품번.value = 부품정보_list_v.C_MODULE_2_11_품번;
	_C_MODULE_2_12_품번.value = 부품정보_list_v.C_MODULE_2_12_품번;
	_C_MODULE_2_13_품번.value = 부품정보_list_v.C_MODULE_2_13_품번;
	_C_MODULE_2_14_품번.value = 부품정보_list_v.C_MODULE_2_14_품번;
	_C_MODULE_2_15_품번.value = 부품정보_list_v.C_MODULE_2_15_품번;
	_C_MODULE_2_16_품번.value = 부품정보_list_v.C_MODULE_2_16_품번;
	_D_UPR_CASE_품번.value = 부품정보_list_v.D_UPR_CASE_품번;
	_D_LWR_CASE_품번.value = 부품정보_list_v.D_LWR_CASE_품번;
	_D_HV_CNTR_1_품번.value = 부품정보_list_v.D_HV_CNTR_1_품번;
	_D_HV_CNTR_2_품번.value = 부품정보_list_v.D_HV_CNTR_2_품번;
	_D_RELAY_품번.value = 부품정보_list_v.D_RELAY_품번;
	_D_LV_W_H_품번.value = 부품정보_list_v.D_LV_W_H_품번;
	_D_HV_W_H_1_품번.value = 부품정보_list_v.D_HV_W_H_1_품번;
	_D_HV_W_H_2_품번.value = 부품정보_list_v.D_HV_W_H_2_품번;
	_D_BMU_품번.value = 부품정보_list_v.D_BMU_품번;
	_D_CMU_1_품번.value = 부품정보_list_v.D_CMU_1_품번;
	_D_MODULE_1_품번.value = 부품정보_list_v.D_MODULE_1_품번;
	_D_MODULE_2_품번.value = 부품정보_list_v.D_MODULE_2_품번;
	_D2_HV_W_H_1_품번.value = 부품정보_list_v.D2_HV_W_H_1_품번;
	_D2_CMU_1_품번.value = 부품정보_list_v.D2_CMU_1_품번;
	_D2_RELAY_품번.value = 부품정보_list_v.D2_RELAY_품번;
	_D2_BMU_품번.value = 부품정보_list_v.D2_BMU_품번;
	_D2_HV_CNTR_1_품번.value = 부품정보_list_v.D2_HV_CNTR_1_품번;
	_D2_HV_CNTR_2_품번.value = 부품정보_list_v.D2_HV_CNTR_2_품번;
	_D2_LWR_CASE_품번.value = 부품정보_list_v.D2_LWR_CASE_품번;
	_D2_UPR_CASE_품번.value = 부품정보_list_v.D2_UPR_CASE_품번;
	_D2_LV_W_H_품번.value = 부품정보_list_v.D2_LV_W_H_품번;
	_D2_MODULE_1_품번.value = 부품정보_list_v.D2_MODULE_1_품번;
}

async function 부품정보_list_save() {
	if (_management_id.value == "") return;

	var doc = 부품정보_list_doc;
	doc.관리번호 = _management_id.value;

	doc.A_UPR_CASE_QR = _A_UPR_CASE_QR.value;
	doc.A_LWR_CASE_QR = _A_LWR_CASE_QR.value;
	doc.A_S_PLUG_QR = _A_S_PLUG_QR.value;
	doc.A_SPA_QR = _A_SPA_QR.value;
	doc.A_HT_CNTR_QR = _A_HT_CNTR_QR.value;
	doc.A_HV_CNTR_QR = _A_HV_CNTR_QR.value;
	doc.A_PRA_QR = _A_PRA_QR.value;
	doc.A_LV_W_H_QR = _A_LV_W_H_QR.value;
	doc.A_HV_W_H_1_QR = _A_HV_W_H_1_QR.value;
	doc.A_HV_W_H_2_QR = _A_HV_W_H_2_QR.value;
	doc.A_HV_W_H_3_QR = _A_HV_W_H_3_QR.value;
	doc.A_HV_W_H_4_QR = _A_HV_W_H_4_QR.value;
	doc.A_HV_W_H_5_QR = _A_HV_W_H_5_QR.value;
	doc.A_BMU_QR = _A_BMU_QR.value;
	doc.A_CMU_1_QR = _A_CMU_1_QR.value;
	doc.A_CMU_2_QR = _A_CMU_2_QR.value;
	doc.A_CMU_3_QR = _A_CMU_3_QR.value;
	doc.A_CMU_4_QR = _A_CMU_4_QR.value;
	doc.A_CMU_5_QR = _A_CMU_5_QR.value;
	doc.A_MODULE_1_QR = _A_MODULE_1_QR.value;
	doc.A_MODULE_2_QR = _A_MODULE_2_QR.value;
	doc.A_MODULE_3_QR = _A_MODULE_3_QR.value;
	doc.A_MODULE_4_QR = _A_MODULE_4_QR.value;
	doc.A_MODULE_5_QR = _A_MODULE_5_QR.value;
	doc.B_UPR_CASE_QR = _B_UPR_CASE_QR.value;
	doc.B_LWR_CASE_QR = _B_LWR_CASE_QR.value;
	doc.B_HV_CNTR_QR = _B_HV_CNTR_QR.value;
	doc.B_HT_CNTR_QR = _B_HT_CNTR_QR.value;
	doc.B_PRA_QR = _B_PRA_QR.value;
	doc.B_FUSE_QR = _B_FUSE_QR.value;
	doc.B_HV_W_H_1_QR = _B_HV_W_H_1_QR.value;
	doc.B_HV_W_H_2_QR = _B_HV_W_H_2_QR.value;
	doc.B_LV_W_H_QR = _B_LV_W_H_QR.value;
	doc.B_BMU_QR = _B_BMU_QR.value;
	doc.B_CMU_1_QR = _B_CMU_1_QR.value;
	doc.B_CMU_2_QR = _B_CMU_2_QR.value;
	doc.B_CMU_3_QR = _B_CMU_3_QR.value;
	doc.B_CMU_4_QR = _B_CMU_4_QR.value;
	doc.B_CMU_5_QR = _B_CMU_5_QR.value;
	doc.B_MODULE_1_QR = _B_MODULE_1_QR.value;
	doc.B_MODULE_2_QR = _B_MODULE_2_QR.value;
	doc.B_MODULE_3_QR = _B_MODULE_3_QR.value;
	doc.B_MODULE_4_QR = _B_MODULE_4_QR.value;
	doc.B_MODULE_5_QR = _B_MODULE_5_QR.value;
	doc.B_MODULE_6_QR = _B_MODULE_6_QR.value;
	doc.B_MODULE_7_QR = _B_MODULE_7_QR.value;
	doc.B_MODULE_8_QR = _B_MODULE_8_QR.value;
	doc.B_MODULE_9_QR = _B_MODULE_9_QR.value;
	doc.B_MODULE_10_QR = _B_MODULE_10_QR.value;
	doc.C_UPR_CASE_QR = _C_UPR_CASE_QR.value;
	doc.C_LWR_CASE_QR = _C_LWR_CASE_QR.value;
	doc.C_HV_CNTR_1_QR = _C_HV_CNTR_1_QR.value;
	doc.C_HV_CNTR_2_QR = _C_HV_CNTR_2_QR.value;
	doc.C_HT_CNTR_QR = _C_HT_CNTR_QR.value;
	doc.C_PRA_QR = _C_PRA_QR.value;
	doc.C_FUSE_QR = _C_FUSE_QR.value;
	doc.C_LV_W_H_QR = _C_LV_W_H_QR.value;
	doc.C_HV_W_H_1_QR = _C_HV_W_H_1_QR.value;
	doc.C_HV_W_H_2_QR = _C_HV_W_H_2_QR.value;
	doc.C_HV_W_H_3_QR = _C_HV_W_H_3_QR.value;
	doc.C_HV_W_H_4_QR = _C_HV_W_H_4_QR.value;
	doc.C_HV_W_H_5_QR = _C_HV_W_H_5_QR.value;
	doc.C_HV_W_H_6_QR = _C_HV_W_H_6_QR.value;
	doc.C_HV_W_H_7_QR = _C_HV_W_H_7_QR.value;
	doc.C_HV_W_H_8_QR = _C_HV_W_H_8_QR.value;
	doc.C_BMU_QR = _C_BMU_QR.value;
	doc.C_CMU_1_QR = _C_CMU_1_QR.value;
	doc.C_CMU_2_QR = _C_CMU_2_QR.value;
	doc.C_CMU_3_QR = _C_CMU_3_QR.value;
	doc.C_CMU_4_QR = _C_CMU_4_QR.value;
	doc.C_CMU_5_QR = _C_CMU_5_QR.value;
	doc.C_CMU_6_QR = _C_CMU_6_QR.value;
	doc.C_CMU_7_QR = _C_CMU_7_QR.value;
	doc.C_CMU_8_QR = _C_CMU_8_QR.value;
	doc.C_MODULE_1_QR = _C_MODULE_1_QR.value;
	doc.C_MODULE_2_QR = _C_MODULE_2_QR.value;
	doc.C_MODULE_3_QR = _C_MODULE_3_QR.value;
	doc.C_MODULE_4_QR = _C_MODULE_4_QR.value;
	doc.C_MODULE_5_QR = _C_MODULE_5_QR.value;
	doc.C_MODULE_6_QR = _C_MODULE_6_QR.value;
	doc.C_MODULE_7_QR = _C_MODULE_7_QR.value;
	doc.C_MODULE_8_QR = _C_MODULE_8_QR.value;
	doc.C_MODULE_9_QR = _C_MODULE_9_QR.value;
	doc.C_MODULE_10_QR = _C_MODULE_10_QR.value;
	doc.C_MODULE_11_QR = _C_MODULE_11_QR.value;
	doc.C_MODULE_12_QR = _C_MODULE_12_QR.value;
	doc.C_MODULE_13_QR = _C_MODULE_13_QR.value;
	doc.C_MODULE_14_QR = _C_MODULE_14_QR.value;
	doc.C_MODULE_15_QR = _C_MODULE_15_QR.value;
	doc.C_MODULE_16_QR = _C_MODULE_16_QR.value;
	doc.C_MODULE_2_1_QR = _C_MODULE_2_1_QR.value;
	doc.C_MODULE_2_2_QR = _C_MODULE_2_2_QR.value;
	doc.C_MODULE_2_3_QR = _C_MODULE_2_3_QR.value;
	doc.C_MODULE_2_4_QR = _C_MODULE_2_4_QR.value;
	doc.C_MODULE_2_5_QR = _C_MODULE_2_5_QR.value;
	doc.C_MODULE_2_6_QR = _C_MODULE_2_6_QR.value;
	doc.C_MODULE_2_7_QR = _C_MODULE_2_7_QR.value;
	doc.C_MODULE_2_8_QR = _C_MODULE_2_8_QR.value;
	doc.C_MODULE_2_9_QR = _C_MODULE_2_9_QR.value;
	doc.C_MODULE_2_10_QR = _C_MODULE_2_10_QR.value;
	doc.C_MODULE_2_11_QR = _C_MODULE_2_11_QR.value;
	doc.C_MODULE_2_12_QR = _C_MODULE_2_12_QR.value;
	doc.C_MODULE_2_13_QR = _C_MODULE_2_13_QR.value;
	doc.C_MODULE_2_14_QR = _C_MODULE_2_14_QR.value;
	doc.C_MODULE_2_15_QR = _C_MODULE_2_15_QR.value;
	doc.C_MODULE_2_16_QR = _C_MODULE_2_16_QR.value;
	doc.D_UPR_CASE_QR = _D_UPR_CASE_QR.value;
	doc.D_LWR_CASE_QR = _D_LWR_CASE_QR.value;
	doc.D_HV_CNTR_1_QR = _D_HV_CNTR_1_QR.value;
	doc.D_HV_CNTR_2_QR = _D_HV_CNTR_2_QR.value;
	doc.D_RELAY_QR = _D_RELAY_QR.value;
	doc.D_LV_W_H_QR = _D_LV_W_H_QR.value;
	doc.D_HV_W_H_1_QR = _D_HV_W_H_1_QR.value;
	doc.D_HV_W_H_2_QR = _D_HV_W_H_2_QR.value;
	doc.D_BMU_QR = _D_BMU_QR.value;
	doc.D_CMU_1_QR = _D_CMU_1_QR.value;
	doc.D_MODULE_1_QR = _D_MODULE_1_QR.value;
	doc.D_MODULE_2_QR = _D_MODULE_2_QR.value;
	doc.D2_HV_W_H_1_QR = _D2_HV_W_H_1_QR.value;
	doc.D2_CMU_1_QR = _D2_CMU_1_QR.value;
	doc.D2_RELAY_QR = _D2_RELAY_QR.value;
	doc.D2_BMU_QR = _D2_BMU_QR.value;
	doc.D2_HV_CNTR_1_QR = _D2_HV_CNTR_1_QR.value;
	doc.D2_HV_CNTR_2_QR = _D2_HV_CNTR_2_QR.value;
	doc.D2_LWR_CASE_QR = _D2_LWR_CASE_QR.value;
	doc.D2_UPR_CASE_QR = _D2_UPR_CASE_QR.value;
	doc.D2_LV_W_H_QR = _D2_LV_W_H_QR.value;
	doc.D2_MODULE_1_QR = _D2_MODULE_1_QR.value;
	doc.A_UPR_CASE_품번 = _A_UPR_CASE_품번.value;
	doc.A_LWR_CASE_품번 = _A_LWR_CASE_품번.value;
	doc.A_S_PLUG_품번 = _A_S_PLUG_품번.value;
	doc.A_SPA_품번 = _A_SPA_품번.value;
	doc.A_HT_CNTR_품번 = _A_HT_CNTR_품번.value;
	doc.A_HV_CNTR_품번 = _A_HV_CNTR_품번.value;
	doc.A_PRA_품번 = _A_PRA_품번.value;
	doc.A_LV_W_H_품번 = _A_LV_W_H_품번.value;
	doc.A_HV_W_H_1_품번 = _A_HV_W_H_1_품번.value;
	doc.A_HV_W_H_2_품번 = _A_HV_W_H_2_품번.value;
	doc.A_HV_W_H_3_품번 = _A_HV_W_H_3_품번.value;
	doc.A_HV_W_H_4_품번 = _A_HV_W_H_4_품번.value;
	doc.A_HV_W_H_5_품번 = _A_HV_W_H_5_품번.value;
	doc.A_BMU_품번 = _A_BMU_품번.value;
	doc.A_CMU_1_품번 = _A_CMU_1_품번.value;
	doc.A_CMU_2_품번 = _A_CMU_2_품번.value;
	doc.A_CMU_3_품번 = _A_CMU_3_품번.value;
	doc.A_CMU_4_품번 = _A_CMU_4_품번.value;
	doc.A_CMU_5_품번 = _A_CMU_5_품번.value;
	doc.A_MODULE_1_품번 = _A_MODULE_1_품번.value;
	doc.A_MODULE_2_품번 = _A_MODULE_2_품번.value;
	doc.A_MODULE_3_품번 = _A_MODULE_3_품번.value;
	doc.A_MODULE_4_품번 = _A_MODULE_4_품번.value;
	doc.A_MODULE_5_품번 = _A_MODULE_5_품번.value;
	doc.B_UPR_CASE_품번 = _B_UPR_CASE_품번.value;
	doc.B_LWR_CASE_품번 = _B_LWR_CASE_품번.value;
	doc.B_HV_CNTR_품번 = _B_HV_CNTR_품번.value;
	doc.B_HT_CNTR_품번 = _B_HT_CNTR_품번.value;
	doc.B_PRA_품번 = _B_PRA_품번.value;
	doc.B_FUSE_품번 = _B_FUSE_품번.value;
	doc.B_HV_W_H_1_품번 = _B_HV_W_H_1_품번.value;
	doc.B_HV_W_H_2_품번 = _B_HV_W_H_2_품번.value;
	doc.B_LV_W_H_품번 = _B_LV_W_H_품번.value;
	doc.B_BMU_품번 = _B_BMU_품번.value;
	doc.B_CMU_1_품번 = _B_CMU_1_품번.value;
	doc.B_CMU_2_품번 = _B_CMU_2_품번.value;
	doc.B_CMU_3_품번 = _B_CMU_3_품번.value;
	doc.B_CMU_4_품번 = _B_CMU_4_품번.value;
	doc.B_CMU_5_품번 = _B_CMU_5_품번.value;
	doc.B_MODULE_1_품번 = _B_MODULE_1_품번.value;
	doc.B_MODULE_2_품번 = _B_MODULE_2_품번.value;
	doc.B_MODULE_3_품번 = _B_MODULE_3_품번.value;
	doc.B_MODULE_4_품번 = _B_MODULE_4_품번.value;
	doc.B_MODULE_5_품번 = _B_MODULE_5_품번.value;
	doc.B_MODULE_6_품번 = _B_MODULE_6_품번.value;
	doc.B_MODULE_7_품번 = _B_MODULE_7_품번.value;
	doc.B_MODULE_8_품번 = _B_MODULE_8_품번.value;
	doc.B_MODULE_9_품번 = _B_MODULE_9_품번.value;
	doc.B_MODULE_10_품번 = _B_MODULE_10_품번.value;
	doc.C_UPR_CASE_품번 = _C_UPR_CASE_품번.value;
	doc.C_LWR_CASE_품번 = _C_LWR_CASE_품번.value;
	doc.C_HV_CNTR_1_품번 = _C_HV_CNTR_1_품번.value;
	doc.C_HV_CNTR_2_품번 = _C_HV_CNTR_2_품번.value;
	doc.C_HT_CNTR_품번 = _C_HT_CNTR_품번.value;
	doc.C_PRA_품번 = _C_PRA_품번.value;
	doc.C_FUSE_품번 = _C_FUSE_품번.value;
	doc.C_LV_W_H_품번 = _C_LV_W_H_품번.value;
	doc.C_HV_W_H_1_품번 = _C_HV_W_H_1_품번.value;
	doc.C_HV_W_H_2_품번 = _C_HV_W_H_2_품번.value;
	doc.C_HV_W_H_3_품번 = _C_HV_W_H_3_품번.value;
	doc.C_HV_W_H_4_품번 = _C_HV_W_H_4_품번.value;
	doc.C_HV_W_H_5_품번 = _C_HV_W_H_5_품번.value;
	doc.C_HV_W_H_6_품번 = _C_HV_W_H_6_품번.value;
	doc.C_HV_W_H_7_품번 = _C_HV_W_H_7_품번.value;
	doc.C_HV_W_H_8_품번 = _C_HV_W_H_8_품번.value;
	doc.C_BMU_품번 = _C_BMU_품번.value;
	doc.C_CMU_1_품번 = _C_CMU_1_품번.value;
	doc.C_CMU_2_품번 = _C_CMU_2_품번.value;
	doc.C_CMU_3_품번 = _C_CMU_3_품번.value;
	doc.C_CMU_4_품번 = _C_CMU_4_품번.value;
	doc.C_CMU_5_품번 = _C_CMU_5_품번.value;
	doc.C_CMU_6_품번 = _C_CMU_6_품번.value;
	doc.C_CMU_7_품번 = _C_CMU_7_품번.value;
	doc.C_CMU_8_품번 = _C_CMU_8_품번.value;
	doc.C_MODULE_1_품번 = _C_MODULE_1_품번.value;
	doc.C_MODULE_2_품번 = _C_MODULE_2_품번.value;
	doc.C_MODULE_3_품번 = _C_MODULE_3_품번.value;
	doc.C_MODULE_4_품번 = _C_MODULE_4_품번.value;
	doc.C_MODULE_5_품번 = _C_MODULE_5_품번.value;
	doc.C_MODULE_6_품번 = _C_MODULE_6_품번.value;
	doc.C_MODULE_7_품번 = _C_MODULE_7_품번.value;
	doc.C_MODULE_8_품번 = _C_MODULE_8_품번.value;
	doc.C_MODULE_9_품번 = _C_MODULE_9_품번.value;
	doc.C_MODULE_10_품번 = _C_MODULE_10_품번.value;
	doc.C_MODULE_11_품번 = _C_MODULE_11_품번.value;
	doc.C_MODULE_12_품번 = _C_MODULE_12_품번.value;
	doc.C_MODULE_13_품번 = _C_MODULE_13_품번.value;
	doc.C_MODULE_14_품번 = _C_MODULE_14_품번.value;
	doc.C_MODULE_15_품번 = _C_MODULE_15_품번.value;
	doc.C_MODULE_16_품번 = _C_MODULE_16_품번.value;
	doc.C_MODULE_2_1_품번 = _C_MODULE_2_1_품번.value;
	doc.C_MODULE_2_2_품번 = _C_MODULE_2_2_품번.value;
	doc.C_MODULE_2_3_품번 = _C_MODULE_2_3_품번.value;
	doc.C_MODULE_2_4_품번 = _C_MODULE_2_4_품번.value;
	doc.C_MODULE_2_5_품번 = _C_MODULE_2_5_품번.value;
	doc.C_MODULE_2_6_품번 = _C_MODULE_2_6_품번.value;
	doc.C_MODULE_2_7_품번 = _C_MODULE_2_7_품번.value;
	doc.C_MODULE_2_8_품번 = _C_MODULE_2_8_품번.value;
	doc.C_MODULE_2_9_품번 = _C_MODULE_2_9_품번.value;
	doc.C_MODULE_2_10_품번 = _C_MODULE_2_10_품번.value;
	doc.C_MODULE_2_11_품번 = _C_MODULE_2_11_품번.value;
	doc.C_MODULE_2_12_품번 = _C_MODULE_2_12_품번.value;
	doc.C_MODULE_2_13_품번 = _C_MODULE_2_13_품번.value;
	doc.C_MODULE_2_14_품번 = _C_MODULE_2_14_품번.value;
	doc.C_MODULE_2_15_품번 = _C_MODULE_2_15_품번.value;
	doc.C_MODULE_2_16_품번 = _C_MODULE_2_16_품번.value;
	doc.D_UPR_CASE_품번 = _D_UPR_CASE_품번.value;
	doc.D_LWR_CASE_품번 = _D_LWR_CASE_품번.value;
	doc.D_HV_CNTR_1_품번 = _D_HV_CNTR_1_품번.value;
	doc.D_HV_CNTR_2_품번 = _D_HV_CNTR_2_품번.value;
	doc.D_RELAY_품번 = _D_RELAY_품번.value;
	doc.D_LV_W_H_품번 = _D_LV_W_H_품번.value;
	doc.D_HV_W_H_1_품번 = _D_HV_W_H_1_품번.value;
	doc.D_HV_W_H_2_품번 = _D_HV_W_H_2_품번.value;
	doc.D_BMU_품번 = _D_BMU_품번.value;
	doc.D_CMU_1_품번 = _D_CMU_1_품번.value;
	doc.D_MODULE_1_품번 = _D_MODULE_1_품번.value;
	doc.D_MODULE_2_품번 = _D_MODULE_2_품번.value;
	doc.D2_HV_W_H_1_품번 = _D2_HV_W_H_1_품번.value;
	doc.D2_CMU_1_품번 = _D2_CMU_1_품번.value;
	doc.D2_RELAY_품번 = _D2_RELAY_품번.value;
	doc.D2_BMU_품번 = _D2_BMU_품번.value;
	doc.D2_HV_CNTR_1_품번 = _D2_HV_CNTR_1_품번.value;
	doc.D2_HV_CNTR_2_품번 = _D2_HV_CNTR_2_품번.value;
	doc.D2_LWR_CASE_품번 = _D2_LWR_CASE_품번.value;
	doc.D2_UPR_CASE_품번 = _D2_UPR_CASE_품번.value;
	doc.D2_LV_W_H_품번 = _D2_LV_W_H_품번.value;
	doc.D2_MODULE_1_품번 = _D2_MODULE_1_품번.value;

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

function auto_focus() {
	_A_UPR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_UPR_CASE_품번.focus();
		if(_A_UPR_CASE_QR.value != '' && _A_UPR_CASE_품번.value != '') { 
			_A_UPR_CASE.style.backgroundColor = 'salmon';
			_A_UPR_CASE.style.color = 'white';
		}
	}

	_A_LWR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_LWR_CASE_품번.focus();
		if(_A_LWR_CASE_QR.value != '' && _A_LWR_CASE_품번.value != '') { 
			_A_LWR_CASE.style.backgroundColor = 'salmon';
			_A_LWR_CASE.style.color = 'white';
		}
	}

	_A_S_PLUG_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_S_PLUG_품번.focus();
		if(_A_S_PLUG_QR.value != '' && _A_S_PLUG_품번.value != '') { 
			_A_S_PLUG.style.backgroundColor = 'salmon';
			_A_S_PLUG.style.color = 'white';
		}
	}

	_A_SPA_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_SPA_품번.focus();
		if(_A_SPA_QR.value != '' && _A_SPA_품번.value != '') { 
			_A_SPA.style.backgroundColor = 'salmon';
			_A_SPA.style.color = 'white';
		}
	}

	_A_HT_CNTR_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HT_CNTR_품번.focus();
		if(_A_HT_CNTR_QR.value != '' && _A_HT_CNTR_품번.value != '') { 
			_A_HT_CNTR.style.backgroundColor = 'salmon';
			_A_HT_CNTR.style.color = 'white';
		}
	}

	_A_HV_CNTR_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_CNTR_품번.focus();
		if(_A_HV_CNTR_QR.value != '' && _A_HV_CNTR_품번.value != '') { 
			_A_HV_CNTR.style.backgroundColor = 'salmon';
			_A_HV_CNTR.style.color = 'white';
		}
	}

	_A_PRA_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_PRA_품번.focus();
		if(_A_PRA_QR.value != '' && _A_PRA_품번.value != '') { 
			_A_PRA.style.backgroundColor = 'salmon';
			_A_PRA.style.color = 'white';
		}
	}

	_A_LV_W_H_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_LV_W_H_품번.focus();
		if(_A_LV_W_H_QR.value != '' && _A_LV_W_H_품번.value != '') { 
			_A_LV_W_H.style.backgroundColor = 'salmon';
			_A_LV_W_H.style.color = 'white';
		}
	}

	_A_HV_W_H_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_1_품번.focus();
		if(_A_HV_W_H_1_QR.value != '' && _A_HV_W_H_1_품번.value != '') { 
			_A_HV_W_H_1.style.backgroundColor = 'salmon';
			_A_HV_W_H_1.style.color = 'white';
		}
	}

	_A_HV_W_H_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_2_품번.focus();
		if(_A_HV_W_H_2_QR.value != '' && _A_HV_W_H_2_품번.value != '') { 
			_A_HV_W_H_2.style.backgroundColor = 'salmon';
			_A_HV_W_H_2.style.color = 'white';
		}
	}
	_A_HV_W_H_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_3_품번.focus();
		if(_A_HV_W_H_3_QR.value != '' && _A_HV_W_H_3_품번.value != '') { 
			_A_HV_W_H_3.style.backgroundColor = 'salmon';
			_A_HV_W_H_3.style.color = 'white';
		}
	}

	_A_HV_W_H_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_4_품번.focus();
		if(_A_HV_W_H_4_QR.value != '' && _A_HV_W_H_4_품번.value != '') { 
			_A_HV_W_H_4.style.backgroundColor = 'salmon';
			_A_HV_W_H_4.style.color = 'white';
		}
	}

	_A_HV_W_H_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_5_품번.focus();
		if(_A_HV_W_H_5_QR.value != '' && _A_HV_W_H_5_품번.value != '') { 
			_A_HV_W_H_5.style.backgroundColor = 'salmon';
			_A_HV_W_H_5.style.color = 'white';
		}
	}

	_A_BMU_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_BMU_품번.focus();
		if(_A_BMU_QR.value != '' && _A_BMU_품번.value != '') { 
			_A_BMU.style.backgroundColor = 'salmon';
			_A_BMU.style.color = 'white';
		}
	}

	_A_CMU_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_1_품번.focus();
		if(_A_CMU_1_QR.value != '' && _A_CMU_1_품번.value != '') { 
			_A_CMU_1.style.backgroundColor = 'salmon';
			_A_CMU_1.style.color = 'white';
		}
	}

	_A_CMU_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_2_품번.focus();
		if(_A_CMU_2_QR.value != '' && _A_CMU_2_품번.value != '') { 
			_A_CMU_2.style.backgroundColor = 'salmon';
			_A_CMU_2.style.color = 'white';
		}
	}

	_A_CMU_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_3_품번.focus();
		if(_A_CMU_3_QR.value != '' && _A_CMU_3_품번.value != '') { 
			_A_CMU_3.style.backgroundColor = 'salmon';
			_A_CMU_3.style.color = 'white';
		}
	}

	_A_CMU_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_4_품번.focus();
		if(_A_CMU_4_QR.value != '' && _A_CMU_4_품번.value != '') { 
			_A_CMU_4.style.backgroundColor = 'salmon';
			_A_CMU_4.style.color = 'white';
		}
	}

	_A_CMU_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_5_품번.focus();
		if(_A_CMU_5_QR.value != '' && _A_CMU_5_품번.value != '') { 
			_A_CMU_5.style.backgroundColor = 'salmon';
			_A_CMU_5.style.color = 'white';
		}
	}

	_A_MODULE_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_1_품번.focus();
		if(_A_MODULE_1_QR.value != '' && _A_MODULE_1_품번.value != '') { 
			_A_MODULE_1.style.backgroundColor = 'salmon';
			_A_MODULE_1.style.color = 'white';
		}
	}

	_A_MODULE_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_2_품번.focus();
		if(_A_MODULE_2_QR.value != '' && _A_MODULE_2_품번.value != '') { 
			_A_MODULE_2.style.backgroundColor = 'salmon';
			_A_MODULE_2.style.color = 'white';
		}
	}

	_A_MODULE_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_3_품번.focus();
		if(_A_MODULE_3_QR.value != '' && _A_MODULE_3_품번.value != '') { 
			_A_MODULE_3.style.backgroundColor = 'salmon';
			_A_MODULE_3.style.color = 'white';
		}
	}

	_A_MODULE_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_4_품번.focus();
		if(_A_MODULE_4_QR.value != '' && _A_MODULE_4_품번.value != '') { 
			_A_MODULE_4.style.backgroundColor = 'salmon';
			_A_MODULE_4.style.color = 'white';
		}
	}

	_A_MODULE_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_5_품번.focus();
		if(_A_MODULE_5_QR.value != '' && _A_MODULE_5_품번.value != '') { 
			_A_MODULE_5.style.backgroundColor = 'salmon';
			_A_MODULE_5.style.color = 'white';
		}
	}

	_B_UPR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_UPR_CASE_품번.focus();
		if(_B_UPR_CASE_QR.value != '' && _B_UPR_CASE_품번.value != '') { 
			_B_UPR_CASE.style.backgroundColor = 'salmon';
			_B_UPR_CASE.style.color = 'white';
		}
	}

	_B_LWR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_LWR_CASE_품번.focus();
		if(_B_LWR_CASE_QR.value != '' && _B_LWR_CASE_품번.value != '') { 
			_B_LWR_CASE.style.backgroundColor = 'salmon';
			_B_LWR_CASE.style.color = 'white';
		}
	}

	_B_HV_CNTR_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HV_CNTR_품번.focus();
		if(_B_HV_CNTR_QR.value != '' && _B_HV_CNTR_품번.value != '') { 
			_B_HV_CNTR.style.backgroundColor = 'salmon';
			_B_HV_CNTR.style.color = 'white';
		}
	}

	_B_HT_CNTR_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HT_CNTR_품번.focus();
		if(_B_HT_CNTR_QR.value != '' && _B_HT_CNTR_품번.value != '') { 
			_B_HT_CNTR.style.backgroundColor = 'salmon';
			_B_HT_CNTR.style.color = 'white';
		}
	}

	_B_PRA_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_PRA_품번.focus();
		if(_B_PRA_QR.value != '' && _B_PRA_품번.value != '') { 
			_B_PRA.style.backgroundColor = 'salmon';
			_B_PRA.style.color = 'white';
		}
	}

	_B_HV_W_H_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HV_W_H_1_품번.focus();
		if(_B_HV_W_H_1_QR.value != '' && _B_HV_W_H_1_품번.value != '') { 
			_B_HV_W_H_1.style.backgroundColor = 'salmon';
			_B_HV_W_H_1.style.color = 'white';
		}
	}

	_B_HV_W_H_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HV_W_H_2_품번.focus();
		if(_B_HV_W_H_2_QR.value != '' && _B_HV_W_H_2_품번.value != '') { 
			_B_HV_W_H_2.style.backgroundColor = 'salmon';
			_B_HV_W_H_2.style.color = 'white';
		}
	}

	_B_LV_W_H_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_LV_W_H_품번.focus();
		if(_B_LV_W_H_QR.value != '' && _B_LV_W_H_품번.value != '') { 
			_B_LV_W_H.style.backgroundColor = 'salmon';
			_B_LV_W_H.style.color = 'white';
		}
	}

	_B_BMU_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_BMU_품번.focus();
		if(_B_BMU_QR.value != '' && _B_BMU_품번.value != '') { 
			_B_BMU.style.backgroundColor = 'salmon';
			_B_BMU.style.color = 'white';
		}
	}

	_B_CMU_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_1_품번.focus();
		if(_B_CMU_1_QR.value != '' && _B_CMU_1_품번.value != '') { 
			_B_CMU_1.style.backgroundColor = 'salmon';
			_B_CMU_1.style.color = 'white';
		}
	}

	_B_CMU_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_2_품번.focus();
		if(_B_CMU_2_QR.value != '' && _B_CMU_2_품번.value != '') { 
			_B_CMU_2.style.backgroundColor = 'salmon';
			_B_CMU_2.style.color = 'white';
		}
	}

	_B_CMU_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_3_품번.focus();
		if(_B_CMU_3_QR.value != '' && _B_CMU_3_품번.value != '') { 
			_B_CMU_3.style.backgroundColor = 'salmon';
			_B_CMU_3.style.color = 'white';
		}
	}

	_B_CMU_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_4_품번.focus();
		if(_B_CMU_4_QR.value != '' && _B_CMU_4_품번.value != '') { 
			_B_CMU_4.style.backgroundColor = 'salmon';
			_B_CMU_4.style.color = 'white';
		}
	}

	_B_CMU_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_5_품번.focus();
		if(_B_CMU_5_QR.value != '' && _B_CMU_5_품번.value != '') { 
			_B_CMU_5.style.backgroundColor = 'salmon';
			_B_CMU_5.style.color = 'white';
		}
	}

	_B_MODULE_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_1_품번.focus();
		if(_B_MODULE_1_QR.value != '' && _B_MODULE_1_품번.value != '') { 
			_B_MODULE_1.style.backgroundColor = 'salmon';
			_B_MODULE_1.style.color = 'white';
		}
	}

	_B_MODULE_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_2_품번.focus();
		if(_B_MODULE_2_QR.value != '' && _B_MODULE_2_품번.value != '') { 
			_B_MODULE_2.style.backgroundColor = 'salmon';
			_B_MODULE_2.style.color = 'white';
		}
	}

	_B_MODULE_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_3_품번.focus();
		if(_B_MODULE_3_QR.value != '' && _B_MODULE_3_품번.value != '') { 
			_B_MODULE_3.style.backgroundColor = 'salmon';
			_B_MODULE_3.style.color = 'white';
		}
	}

	_B_MODULE_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_4_품번.focus();
		if(_B_MODULE_4_QR.value != '' && _B_MODULE_4_품번.value != '') { 
			_B_MODULE_4.style.backgroundColor = 'salmon';
			_B_MODULE_4.style.color = 'white';
		}
	}

	_B_MODULE_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_5_품번.focus();
		if(_B_MODULE_5_QR.value != '' && _B_MODULE_5_품번.value != '') { 
			_B_MODULE_5.style.backgroundColor = 'salmon';
			_B_MODULE_5.style.color = 'white';
		}
	}

	_B_MODULE_6_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_6_품번.focus();
		if(_B_MODULE_6_QR.value != '' && _B_MODULE_6_품번.value != '') { 
			_B_MODULE_6.style.backgroundColor = 'salmon';
			_B_MODULE_6.style.color = 'white';
		}
	}

	_B_MODULE_7_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_7_품번.focus();
		if(_B_MODULE_7_QR.value != '' && _B_MODULE_7_품번.value != '') { 
			_B_MODULE_7.style.backgroundColor = 'salmon';
			_B_MODULE_7.style.color = 'white';
		}
	}

	_B_MODULE_8_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_8_품번.focus();
		if(_B_MODULE_8_QR.value != '' && _B_MODULE_8_품번.value != '') { 
			_B_MODULE_8.style.backgroundColor = 'salmon';
			_B_MODULE_8.style.color = 'white';
		}
	}

	_B_MODULE_9_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_9_품번.focus();
		if(_B_MODULE_9_QR.value != '' && _B_MODULE_9_품번.value != '') { 
			_B_MODULE_9.style.backgroundColor = 'salmon';
			_B_MODULE_9.style.color = 'white';
		}
	}

	_B_MODULE_10_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_10_품번.focus();
		if(_B_MODULE_10_QR.value != '' && _B_MODULE_10_품번.value != '') { 
			_B_MODULE_10.style.backgroundColor = 'salmon';
			_B_MODULE_10.style.color = 'white';
		}
	}

	_C_UPR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_UPR_CASE_품번.focus();
		if(_C_UPR_CASE_QR.value != '' && _C_UPR_CASE_품번.value != '') { 
			_C_UPR_CASE.style.backgroundColor = 'salmon';
			_C_UPR_CASE.style.color = 'white';
		}
	}

	_C_LWR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_LWR_CASE_품번.focus();
		if(_C_LWR_CASE_QR.value != '' && _C_LWR_CASE_품번.value != '') { 
			_C_LWR_CASE.style.backgroundColor = 'salmon';
			_C_LWR_CASE.style.color = 'white';
		}
	}

	_C_HV_CNTR_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_CNTR_1_품번.focus();
		if(_C_HV_CNTR_1_QR.value != '' && _C_HV_CNTR_1_품번.value != '') { 
			_C_HV_CNTR_1.style.backgroundColor = 'salmon';
			_C_HV_CNTR_1.style.color = 'white';
		}
	}

	_C_HV_CNTR_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_CNTR_2_품번.focus();
		if(_C_HV_CNTR_2_QR.value != '' && _C_HV_CNTR_2_품번.value != '') { 
			_C_HV_CNTR_2.style.backgroundColor = 'salmon';
			_C_HV_CNTR_2.style.color = 'white';
		}
	}

	_C_HT_CNTR_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HT_CNTR_품번.focus();
		if(_C_HT_CNTR_QR.value != '' && _C_HT_CNTR_품번.value != '') { 
			_C_HT_CNTR.style.backgroundColor = 'salmon';
			_C_HT_CNTR.style.color = 'white';
		}
	}

	_C_PRA_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_PRA_품번.focus();
		if(_C_PRA_QR.value != '' && _C_PRA_품번.value != '') { 
			_C_PRA.style.backgroundColor = 'salmon';
			_C_PRA.style.color = 'white';
		}
	}

	_C_FUSE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_FUSE_품번.focus();
		if(_C_FUSE_QR.value != '' && _C_FUSE_품번.value != '') { 
			_C_FUSE.style.backgroundColor = 'salmon';
			_C_FUSE.style.color = 'white';
		}
	}

	_C_LV_W_H_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_LV_W_H_품번.focus();
		if(_C_LV_W_H_QR.value != '' && _C_LV_W_H_품번.value != '') { 
			_C_LV_W_H.style.backgroundColor = 'salmon';
			_C_LV_W_H.style.color = 'white';
		}
	}

	_C_HV_W_H_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_1_품번.focus();
		if(_C_HV_W_H_1_QR.value != '' && _C_HV_W_H_1_품번.value != '') { 
			_C_HV_W_H_1.style.backgroundColor = 'salmon';
			_C_HV_W_H_1.style.color = 'white';
		}
	}

	_C_HV_W_H_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_2_품번.focus();
		if(_C_HV_W_H_2_QR.value != '' && _C_HV_W_H_2_품번.value != '') { 
			_C_HV_W_H_2.style.backgroundColor = 'salmon';
			_C_HV_W_H_2.style.color = 'white';
		}
	}

	_C_HV_W_H_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_3_품번.focus();
		if(_C_HV_W_H_3_QR.value != '' && _C_HV_W_H_3_품번.value != '') { 
			_C_HV_W_H_3.style.backgroundColor = 'salmon';
			_C_HV_W_H_3.style.color = 'white';
		}
	}

	_C_HV_W_H_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_4_품번.focus();
		if(_C_HV_W_H_4_QR.value != '' && _C_HV_W_H_4_품번.value != '') { 
			_C_HV_W_H_4.style.backgroundColor = 'salmon';
			_C_HV_W_H_4.style.color = 'white';
		}
	}

	_C_HV_W_H_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_5_품번.focus();
		if(_C_HV_W_H_5_QR.value != '' && _C_HV_W_H_5_품번.value != '') { 
			_C_HV_W_H_5.style.backgroundColor = 'salmon';
			_C_HV_W_H_5.style.color = 'white';
		}
	}

	_C_HV_W_H_6_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_6_품번.focus();
		if(_C_HV_W_H_6_QR.value != '' && _C_HV_W_H_6_품번.value != '') { 
			_C_HV_W_H_6.style.backgroundColor = 'salmon';
			_C_HV_W_H_6.style.color = 'white';
		}
	}

	_C_HV_W_H_7_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_7_품번.focus();
		if(_C_HV_W_H_7_QR.value != '' && _C_HV_W_H_7_품번.value != '') { 
			_C_HV_W_H_7.style.backgroundColor = 'salmon';
			_C_HV_W_H_7.style.color = 'white';
		}
	}

	_C_HV_W_H_8_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_8_품번.focus();
		if(_C_HV_W_H_8_QR.value != '' && _C_HV_W_H_8_품번.value != '') { 
			_C_HV_W_H_8.style.backgroundColor = 'salmon';
			_C_HV_W_H_8.style.color = 'white';
		}
	}

	_C_BMU_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_BMU_품번.focus();
		if(_C_BMU_QR.value != '' && _C_BMU_품번.value != '') { 
			_C_BMU.style.backgroundColor = 'salmon';
			_C_BMU.style.color = 'white';
		}
	}

	_C_CMU_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_1_품번.focus();
		if(_C_CMU_1_QR.value != '' && _C_CMU_1_품번.value != '') { 
			_C_CMU_1.style.backgroundColor = 'salmon';
			_C_CMU_1.style.color = 'white';
		}
	}

	_C_CMU_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_2_품번.focus();
		if(_C_CMU_2_QR.value != '' && _C_CMU_2_품번.value != '') { 
			_C_CMU_2.style.backgroundColor = 'salmon';
			_C_CMU_2.style.color = 'white';
		}
	}

	_C_CMU_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_3_품번.focus();
		if(_C_CMU_3_QR.value != '' && _C_CMU_3_품번.value != '') { 
			_C_CMU_3.style.backgroundColor = 'salmon';
			_C_CMU_3.style.color = 'white';
		}
	}

	_C_CMU_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_4_품번.focus();
		if(_C_CMU_4_QR.value != '' && _C_CMU_4_품번.value != '') { 
			_C_CMU_4.style.backgroundColor = 'salmon';
			_C_CMU_4.style.color = 'white';
		}
	}

	_C_CMU_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_5_품번.focus();
		if(_C_CMU_5_QR.value != '' && _C_CMU_5_품번.value != '') { 
			_C_CMU_5.style.backgroundColor = 'salmon';
			_C_CMU_5.style.color = 'white';
		}
	}

	_C_CMU_6_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_6_품번.focus();
		if(_C_CMU_6_QR.value != '' && _C_CMU_6_품번.value != '') { 
			_C_CMU_6.style.backgroundColor = 'salmon';
			_C_CMU_6.style.color = 'white';
		}
	}

	_C_CMU_7_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_7_품번.focus();
		if(_C_CMU_7_QR.value != '' && _C_CMU_7_품번.value != '') { 
			_C_CMU_7.style.backgroundColor = 'salmon';
			_C_CMU_7.style.color = 'white';
		}
	}

	_C_CMU_8_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_8_품번.focus();
		if(_C_CMU_8_QR.value != '' && _C_CMU_8_품번.value != '') { 
			_C_CMU_8.style.backgroundColor = 'salmon';
			_C_CMU_8.style.color = 'white';
		}
	}

	_C_MODULE_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_1_품번.focus();
		if(_C_MODULE_1_QR.value != '' && _C_MODULE_1_품번.value != '') { 
			_C_MODULE_1.style.backgroundColor = 'salmon';
			_C_MODULE_1.style.color = 'white';
		}
	}

	_C_MODULE_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_품번.focus();
		if(_C_MODULE_2_QR.value != '' && _C_MODULE_2_품번.value != '') { 
			_C_MODULE_2.style.backgroundColor = 'salmon';
			_C_MODULE_2.style.color = 'white';
		}
	}

	_C_MODULE_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_3_품번.focus();
		if(_C_MODULE_3_QR.value != '' && _C_MODULE_3_품번.value != '') { 
			_C_MODULE_3.style.backgroundColor = 'salmon';
			_C_MODULE_3.style.color = 'white';
		}
	}

	_C_MODULE_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_4_품번.focus();
		if(_C_MODULE_4_QR.value != '' && _C_MODULE_4_품번.value != '') { 
			_C_MODULE_4.style.backgroundColor = 'salmon';
			_C_MODULE_4.style.color = 'white';
		}
	}

	_C_MODULE_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_5_품번.focus();
		if(_C_MODULE_5_QR.value != '' && _C_MODULE_5_품번.value != '') { 
			_C_MODULE_5.style.backgroundColor = 'salmon';
			_C_MODULE_5.style.color = 'white';
		}
	}

	_C_MODULE_6_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_6_품번.focus();
		if(_C_MODULE_6_QR.value != '' && _C_MODULE_6_품번.value != '') { 
			_C_MODULE_6.style.backgroundColor = 'salmon';
			_C_MODULE_6.style.color = 'white';
		}
	}

	_C_MODULE_7_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_7_품번.focus();
		if(_C_MODULE_7_QR.value != '' && _C_MODULE_7_품번.value != '') { 
			_C_MODULE_7.style.backgroundColor = 'salmon';
			_C_MODULE_7.style.color = 'white';
		}
	}

	_C_MODULE_8_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_8_품번.focus();
		if(_C_MODULE_8_QR.value != '' && _C_MODULE_8_품번.value != '') { 
			_C_MODULE_8.style.backgroundColor = 'salmon';
			_C_MODULE_8.style.color = 'white';
		}
	}

	_C_MODULE_9_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_9_품번.focus();
		if(_C_MODULE_9_QR.value != '' && _C_MODULE_9_품번.value != '') { 
			_C_MODULE_9.style.backgroundColor = 'salmon';
			_C_MODULE_9.style.color = 'white';
		}
	}

	_C_MODULE_10_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_10_품번.focus();
		if(_C_MODULE_10_QR.value != '' && _C_MODULE_10_품번.value != '') { 
			_C_MODULE_10.style.backgroundColor = 'salmon';
			_C_MODULE_10.style.color = 'white';
		}
	}

	_C_MODULE_11_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_11_품번.focus();
		if(_C_MODULE_11_QR.value != '' && _C_MODULE_11_품번.value != '') { 
			_C_MODULE_11.style.backgroundColor = 'salmon';
			_C_MODULE_11.style.color = 'white';
		}
	}

	_C_MODULE_12_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_12_품번.focus();
		if(_C_MODULE_12_QR.value != '' && _C_MODULE_12_품번.value != '') { 
			_C_MODULE_12.style.backgroundColor = 'salmon';
			_C_MODULE_12.style.color = 'white';
		}
	}

	_C_MODULE_13_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_13_품번.focus();
		if(_C_MODULE_13_QR.value != '' && _C_MODULE_13_품번.value != '') { 
			_C_MODULE_13.style.backgroundColor = 'salmon';
			_C_MODULE_13.style.color = 'white';
		}
	}

	_C_MODULE_14_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_14_품번.focus();
		if(_C_MODULE_14_QR.value != '' && _C_MODULE_14_품번.value != '') { 
			_C_MODULE_14.style.backgroundColor = 'salmon';
			_C_MODULE_14.style.color = 'white';
		}
	}

	_C_MODULE_15_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_15_품번.focus();
		if(_C_MODULE_15_QR.value != '' && _C_MODULE_15_품번.value != '') { 
			_C_MODULE_15.style.backgroundColor = 'salmon';
			_C_MODULE_15.style.color = 'white';
		}
	}

	_C_MODULE_16_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_16_품번.focus();
		if(_C_MODULE_16_QR.value != '' && _C_MODULE_16_품번.value != '') { 
			_C_MODULE_16.style.backgroundColor = 'salmon';
			_C_MODULE_16.style.color = 'white';
		}
	}

	_C_MODULE_2_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_1_품번.focus();
		if(_C_MODULE_2_1_QR.value != '' && _C_MODULE_2_1_품번.value != '') { 
			_C_MODULE_2_1.style.backgroundColor = 'salmon';
			_C_MODULE_2_1.style.color = 'white';
		}
	}

	_C_MODULE_2_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_2_품번.focus();
		if(_C_MODULE_2_2_QR.value != '' && _C_MODULE_2_2_품번.value != '') { 
			_C_MODULE_2_2.style.backgroundColor = 'salmon';
			_C_MODULE_2_2.style.color = 'white';
		}
	}

	_C_MODULE_2_3_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_3_품번.focus();
		if(_C_MODULE_2_3_QR.value != '' && _C_MODULE_2_3_품번.value != '') { 
			_C_MODULE_2_3.style.backgroundColor = 'salmon';
			_C_MODULE_2_3.style.color = 'white';
		}
	}

	_C_MODULE_2_4_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_4_품번.focus();
		if(_C_MODULE_2_4_QR.value != '' && _C_MODULE_2_4_품번.value != '') { 
			_C_MODULE_2_4.style.backgroundColor = 'salmon';
			_C_MODULE_2_4.style.color = 'white';
		}
	}

	_C_MODULE_2_5_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_5_품번.focus();
		if(_C_MODULE_2_5_QR.value != '' && _C_MODULE_2_5_품번.value != '') { 
			_C_MODULE_2_5.style.backgroundColor = 'salmon';
			_C_MODULE_2_5.style.color = 'white';
		}
	}

	_C_MODULE_2_6_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_6_품번.focus();
		if(_C_MODULE_2_6_QR.value != '' && _C_MODULE_2_6_품번.value != '') { 
			_C_MODULE_2_6.style.backgroundColor = 'salmon';
			_C_MODULE_2_6.style.color = 'white';
		}
	}

	_C_MODULE_2_7_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_7_품번.focus();
		if(_C_MODULE_2_7_QR.value != '' && _C_MODULE_2_7_품번.value != '') { 
			_C_MODULE_2_7.style.backgroundColor = 'salmon';
			_C_MODULE_2_7.style.color = 'white';
		}
	}

	_C_MODULE_2_8_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_8_품번.focus();
		if(_C_MODULE_2_8_QR.value != '' && _C_MODULE_2_8_품번.value != '') { 
			_C_MODULE_2_8.style.backgroundColor = 'salmon';
			_C_MODULE_2_8.style.color = 'white';
		}
	}

	_C_MODULE_2_9_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_9_품번.focus();
		if(_C_MODULE_2_9_QR.value != '' && _C_MODULE_2_9_품번.value != '') { 
			_C_MODULE_2_9.style.backgroundColor = 'salmon';
			_C_MODULE_2_9.style.color = 'white';
		}
	}

	_C_MODULE_2_10_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_10_품번.focus();
		if(_C_MODULE_2_10_QR.value != '' && _C_MODULE_2_10_품번.value != '') { 
			_C_MODULE_2_10.style.backgroundColor = 'salmon';
			_C_MODULE_2_10.style.color = 'white';
		}
	}

	_C_MODULE_2_11_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_11_품번.focus();
		if(_C_MODULE_2_11_QR.value != '' && _C_MODULE_2_11_품번.value != '') { 
			_C_MODULE_2_11.style.backgroundColor = 'salmon';
			_C_MODULE_2_11.style.color = 'white';
		}
	}

	_C_MODULE_2_12_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_12_품번.focus();
		if(_C_MODULE_2_12_QR.value != '' && _C_MODULE_2_12_품번.value != '') { 
			_C_MODULE_2_12.style.backgroundColor = 'salmon';
			_C_MODULE_2_12.style.color = 'white';
		}
	}

	_C_MODULE_2_13_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_13_품번.focus();
		if(_C_MODULE_2_13_QR.value != '' && _C_MODULE_2_13_품번.value != '') { 
			_C_MODULE_2_13.style.backgroundColor = 'salmon';
			_C_MODULE_2_13.style.color = 'white';
		}
	}

	_C_MODULE_2_14_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_14_품번.focus();
		if(_C_MODULE_2_14_QR.value != '' && _C_MODULE_2_14_품번.value != '') { 
			_C_MODULE_2_14.style.backgroundColor = 'salmon';
			_C_MODULE_2_14.style.color = 'white';
		}
	}

	_C_MODULE_2_15_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_15_품번.focus();
		if(_C_MODULE_2_15_QR.value != '' && _C_MODULE_2_15_품번.value != '') { 
			_C_MODULE_2_15.style.backgroundColor = 'salmon';
			_C_MODULE_2_15.style.color = 'white';
		}
	}

	_C_MODULE_2_16_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_16_품번.focus();
		if(_C_MODULE_2_16_QR.value != '' && _C_MODULE_2_16_품번.value != '') { 
			_C_MODULE_2_16.style.backgroundColor = 'salmon';
			_C_MODULE_2_16.style.color = 'white';
		}
	}

	_D_UPR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_UPR_CASE_품번.focus();
		if(_D_UPR_CASE_QR.value != '' && _D_UPR_CASE_품번.value != '') { 
			_D_UPR_CASE.style.backgroundColor = 'salmon';
			_D_UPR_CASE.style.color = 'white';
		}
	}

	_D_LWR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_LWR_CASE_품번.focus();
		if(_D_LWR_CASE_QR.value != '' && _D_LWR_CASE_품번.value != '') { 
			_D_LWR_CASE.style.backgroundColor = 'salmon';
			_D_LWR_CASE.style.color = 'white';
		}
	}

	_D_HV_CNTR_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_1_품번.focus();
		if(_D_HV_CNTR_1_QR.value != '' && _D_HV_CNTR_1_품번.value != '') { 
			_D_HV_CNTR_1.style.backgroundColor = 'salmon';
			_D_HV_CNTR_1.style.color = 'white';
		}
	}

	_D_HV_CNTR_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_2_품번.focus();
		if(_D_HV_CNTR_2_QR.value != '' && _D_HV_CNTR_2_품번.value != '') { 
			_D_HV_CNTR_2.style.backgroundColor = 'salmon';
			_D_HV_CNTR_2.style.color = 'white';
		}
	}

	_D_RELAY_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_RELAY_품번.focus();
		if(_D_RELAY_QR.value != '' && _D_RELAY_품번.value != '') { 
			_D_RELAY.style.backgroundColor = 'salmon';
			_D_RELAY.style.color = 'white';
		}
	}

	_D_LV_W_H_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_LV_W_H_품번.focus();
		if(_D_LV_W_H_QR.value != '' && _D_LV_W_H_품번.value != '') { 
			_D_LV_W_H.style.backgroundColor = 'salmon';
			_D_LV_W_H.style.color = 'white';
		}
	}

	_D_HV_W_H_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_1_품번.focus();
		if(_D_HV_W_H_1_QR.value != '' && _D_HV_W_H_1_품번.value != '') { 
			_D_HV_W_H_1.style.backgroundColor = 'salmon';
			_D_HV_W_H_1.style.color = 'white';
		}
	}

	_D_HV_W_H_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_2_품번.focus();
		if(_D_HV_W_H_2_QR.value != '' && _D_HV_W_H_2_품번.value != '') { 
			_D_HV_W_H_2.style.backgroundColor = 'salmon';
			_D_HV_W_H_2.style.color = 'white';
		}
	}

	_D_BMU_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_BMU_품번.focus();
		if(_D_BMU_QR.value != '' && _D_BMU_품번.value != '') { 
			_D_BMU.style.backgroundColor = 'salmon';
			_D_BMU.style.color = 'white';
		}
	}

	_D_CMU_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_CMU_1_품번.focus();
		if(_D_CMU_1_QR.value != '' && _D_CMU_1_품번.value != '') { 
			_D_CMU_1.style.backgroundColor = 'salmon';
			_D_CMU_1.style.color = 'white';
		}
	}

	_D_MODULE_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_MODULE_1_품번.focus();
		if(_D_MODULE_1_QR.value != '' && _D_MODULE_1_품번.value != '') { 
			_D_MODULE_1.style.backgroundColor = 'salmon';
			_D_MODULE_1.style.color = 'white';
		}
	}

	_D_MODULE_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_MODULE_2_품번.focus();
		if(_D_MODULE_2_QR.value != '' && _D_MODULE_2_품번.value != '') { 
			_D_MODULE_2.style.backgroundColor = 'salmon';
			_D_MODULE_2.style.color = 'white';
		}
	}

	_D2_HV_W_H_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_HV_W_H_1_품번.focus();
		if(_D2_HV_W_H_1_QR.value != '' && _D2_HV_W_H_1_품번.value != '') { 
			_D2_HV_W_H_1.style.backgroundColor = 'salmon';
			_D2_HV_W_H_1.style.color = 'white';
		}
	}

	_D2_CMU_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_CMU_1_품번.focus();
		if(_D2_CMU_1_QR.value != '' && _D2_CMU_1_품번.value != '') { 
			_D2_CMU_1.style.backgroundColor = 'salmon';
			_D2_CMU_1.style.color = 'white';
		}
	}

	_D2_RELAY_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_RELAY_품번.focus();
		if(_D2_RELAY_QR.value != '' && _D2_RELAY_품번.value != '') { 
			_D2_RELAY.style.backgroundColor = 'salmon';
			_D2_RELAY.style.color = 'white';
		}
	}

	_D2_BMU_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_BMU_품번.focus();
		if(_D2_BMU_QR.value != '' && _D2_BMU_품번.value != '') { 
			_D2_BMU.style.backgroundColor = 'salmon';
			_D2_BMU.style.color = 'white';
		}
	}

	_D2_HV_CNTR_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_HV_CNTR_1_품번.focus();
		if(_D2_HV_CNTR_1_QR.value != '' && _D2_HV_CNTR_1_품번.value != '') { 
			_D2_HV_CNTR_1.style.backgroundColor = 'salmon';
			_D2_HV_CNTR_1.style.color = 'white';
		}
	}

	_D2_HV_CNTR_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_HV_CNTR_2_품번.focus();
		if(_D2_HV_CNTR_2_QR.value != '' && _D2_HV_CNTR_2_품번.value != '') { 
			_D2_HV_CNTR_2.style.backgroundColor = 'salmon';
			_D2_HV_CNTR_2.style.color = 'white';
		}
	}

	_D2_LWR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_LWR_CASE_품번.focus();
		if(_D2_LWR_CASE_QR.value != '' && _D2_LWR_CASE_품번.value != '') { 
			_D2_LWR_CASE.style.backgroundColor = 'salmon';
			_D2_LWR_CASE.style.color = 'white';
		}
	}

	_D2_UPR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_UPR_CASE_품번.focus();
		if(_D2_UPR_CASE_QR.value != '' && _D2_UPR_CASE_품번.value != '') { 
			_D2_UPR_CASE.style.backgroundColor = 'salmon';
			_D2_UPR_CASE.style.color = 'white';
		}
	}

	_D2_LV_W_H_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_LV_W_H_품번.focus();
		if(_D2_LV_W_H_QR.value != '' && _D2_LV_W_H_품번.value != '') { 
			_D2_LV_W_H.style.backgroundColor = 'salmon';
			_D2_LV_W_H.style.color = 'white';
		}
	}

	_D2_MODULE_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_MODULE_1_품번.focus();
		if(_D2_MODULE_1_QR.value != '' && _D2_MODULE_1_품번.value != '') { 
			_D2_MODULE_1.style.backgroundColor = 'salmon';
			_D2_MODULE_1.style.color = 'white';
		}
	}

	_A_UPR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_LWR_CASE_QR.focus();
		if(_A_UPR_CASE_QR.value != '' && _A_UPR_CASE_품번.value != '') { 
			_A_UPR_CASE.style.backgroundColor = 'salmon';
			_A_UPR_CASE.style.color = 'white';
		}
	}

	_A_LWR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_S_PLUG_QR.focus();
		if(_A_LWR_CASE_QR.value != '' && _A_LWR_CASE_품번.value != '') { 
			_A_LWR_CASE.style.backgroundColor = 'salmon';
			_A_LWR_CASE.style.color = 'white';
		}
	}

	_A_S_PLUG_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_SPA_QR.focus();
		if(_A_S_PLUG_QR.value != '' && _A_S_PLUG_품번.value != '') { 
			_A_S_PLUG.style.backgroundColor = 'salmon';
			_A_S_PLUG.style.color = 'white';
		}
	}

	_A_SPA_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HT_CNTR_QR.focus();
		if(_A_SPA_QR.value != '' && _A_SPA_품번.value != '') { 
			_A_SPA.style.backgroundColor = 'salmon';
			_A_SPA.style.color = 'white';
		}
	}

	_A_HT_CNTR_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_CNTR_QR.focus();
		if(_A_HT_CNTR_QR.value != '' && _A_HT_CNTR_품번.value != '') { 
			_A_HT_CNTR.style.backgroundColor = 'salmon';
			_A_HT_CNTR.style.color = 'white';
		}
	}

	_A_HV_CNTR_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_PRA_QR.focus();
		if(_A_HV_CNTR_QR.value != '' && _A_HV_CNTR_품번.value != '') { 
			_A_HV_CNTR.style.backgroundColor = 'salmon';
			_A_HV_CNTR.style.color = 'white';
		}
	}

	_A_PRA_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_LV_W_H_QR.focus();
		if(_A_PRA_QR.value != '' && _A_PRA_품번.value != '') { 
			_A_PRA.style.backgroundColor = 'salmon';
			_A_PRA.style.color = 'white';
		}
	}

	_A_LV_W_H_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_1_QR.focus();
		if(_A_LV_W_H_QR.value != '' && _A_LV_W_H_품번.value != '') { 
			_A_LV_W_H.style.backgroundColor = 'salmon';
			_A_LV_W_H.style.color = 'white';
		}
	}

	_A_HV_W_H_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_2_QR.focus();
		if(_A_HV_W_H_1_QR.value != '' && _A_HV_W_H_1_품번.value != '') { 
			_A_HV_W_H_1.style.backgroundColor = 'salmon';
			_A_HV_W_H_1.style.color = 'white';
		}
	}

	_A_HV_W_H_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_3_QR.focus();
		if(_A_HV_W_H_2_QR.value != '' && _A_HV_W_H_2_품번.value != '') { 
			_A_HV_W_H_2.style.backgroundColor = 'salmon';
			_A_HV_W_H_2.style.color = 'white';
		}
	}

	_A_HV_W_H_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_4_QR.focus();
		if(_A_HV_W_H_3_QR.value != '' && _A_HV_W_H_3_품번.value != '') { 
			_A_HV_W_H_3.style.backgroundColor = 'salmon';
			_A_HV_W_H_3.style.color = 'white';
		}
	}

	_A_HV_W_H_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_HV_W_H_5_QR.focus();
		if(_A_HV_W_H_4_QR.value != '' && _A_HV_W_H_4_품번.value != '') { 
			_A_HV_W_H_4.style.backgroundColor = 'salmon';
			_A_HV_W_H_4.style.color = 'white';
		}
	}

	_A_HV_W_H_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_BMU_QR.focus();
		if(_A_HV_W_H_5_QR.value != '' && _A_HV_W_H_5_품번.value != '') { 
			_A_HV_W_H_5.style.backgroundColor = 'salmon';
			_A_HV_W_H_5.style.color = 'white';
		}
	}

	_A_BMU_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_1_QR.focus();
		if(_A_BMU_QR.value != '' && _A_BMU_품번.value != '') { 
			_A_BMU.style.backgroundColor = 'salmon';
			_A_BMU.style.color = 'white';
		}
	}

	_A_CMU_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_2_QR.focus();
		if(_A_CMU_1_QR.value != '' && _A_CMU_1_품번.value != '') { 
			_A_CMU_1.style.backgroundColor = 'salmon';
			_A_CMU_1.style.color = 'white';
		}
	}

	_A_CMU_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_3_QR.focus();
		if(_A_CMU_2_QR.value != '' && _A_CMU_2_품번.value != '') { 
			_A_CMU_2.style.backgroundColor = 'salmon';
			_A_CMU_2.style.color = 'white';
		}
	}

	_A_CMU_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_4_QR.focus();
		if(_A_CMU_3_QR.value != '' && _A_CMU_3_품번.value != '') { 
			_A_CMU_3.style.backgroundColor = 'salmon';
			_A_CMU_3.style.color = 'white';
		}
	}

	_A_CMU_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_CMU_5_QR.focus();
		if(_A_CMU_4_QR.value != '' && _A_CMU_4_품번.value != '') { 
			_A_CMU_4.style.backgroundColor = 'salmon';
			_A_CMU_4.style.color = 'white';
		}
	}

	_A_CMU_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_1_QR.focus();
		if(_A_CMU_5_QR.value != '' && _A_CMU_5_품번.value != '') { 
			_A_CMU_5.style.backgroundColor = 'salmon';
			_A_CMU_5.style.color = 'white';
		}
	}

	_A_MODULE_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_2_QR.focus();
		if(_A_MODULE_1_QR.value != '' && _A_MODULE_1_품번.value != '') { 
			_A_MODULE_1.style.backgroundColor = 'salmon';
			_A_MODULE_1.style.color = 'white';
		}
	}

	_A_MODULE_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_3_QR.focus();
		if(_A_MODULE_2_QR.value != '' && _A_MODULE_2_품번.value != '') { 
			_A_MODULE_2.style.backgroundColor = 'salmon';
			_A_MODULE_2.style.color = 'white';
		}
	}

	_A_MODULE_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_4_QR.focus();
		if(_A_MODULE_3_QR.value != '' && _A_MODULE_3_품번.value != '') { 
			_A_MODULE_3.style.backgroundColor = 'salmon';
			_A_MODULE_3.style.color = 'white';
		}
	}

	_A_MODULE_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _A_MODULE_5_QR.focus();
		if(_A_MODULE_4_QR.value != '' && _A_MODULE_4_품번.value != '') { 
			_A_MODULE_4.style.backgroundColor = 'salmon';
			_A_MODULE_4.style.color = 'white';
		}
	}

	_A_MODULE_5_품번.onkeydown = function (event) {
		if(_A_MODULE_5_QR.value != '' && _A_MODULE_5_품번.value != '') { 
			_A_MODULE_5.style.backgroundColor = 'salmon';
			_A_MODULE_5.style.color = 'white';
		}
		//_A_MODULE_5_품번.focus();
	}

	_B_UPR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_LWR_CASE_QR.focus();
		if(_B_UPR_CASE_QR.value != '' && _B_UPR_CASE_품번.value != '') { 
			_B_UPR_CASE.style.backgroundColor = 'salmon';
			_B_UPR_CASE.style.color = 'white';
		}
	}

	_B_LWR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HV_CNTR_QR.focus();
		if(_B_LWR_CASE_QR.value != '' && _B_LWR_CASE_품번.value != '') { 
			_B_LWR_CASE.style.backgroundColor = 'salmon';
			_B_LWR_CASE.style.color = 'white';
		}
	}

	_B_HV_CNTR_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HT_CNTR_QR.focus();
		if(_B_HV_CNTR_QR.value != '' && _B_HV_CNTR_품번.value != '') { 
			_B_HV_CNTR.style.backgroundColor = 'salmon';
			_B_HV_CNTR.style.color = 'white';
		}
	}

	_B_HT_CNTR_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_PRA_QR.focus();
		if(_B_HT_CNTR_QR.value != '' && _B_HT_CNTR_품번.value != '') { 
			_B_HT_CNTR.style.backgroundColor = 'salmon';
			_B_HT_CNTR.style.color = 'white';
		}
	}

	_B_PRA_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HV_W_H_1_QR.focus();
		if(_B_PRA_QR.value != '' && _B_PRA_품번.value != '') { 
			_B_PRA.style.backgroundColor = 'salmon';
			_B_PRA.style.color = 'white';
		}
	}

	_B_HV_W_H_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_HV_W_H_2_QR.focus();
		if(_B_HV_W_H_1_QR.value != '' && _B_HV_W_H_1_품번.value != '') { 
			_B_HV_W_H_1.style.backgroundColor = 'salmon';
			_B_HV_W_H_1.style.color = 'white';
		}
	}

	_B_HV_W_H_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_LV_W_H_QR.focus();
		if(_B_HV_W_H_2_QR.value != '' && _B_HV_W_H_2_품번.value != '') { 
			_B_HV_W_H_2.style.backgroundColor = 'salmon';
			_B_HV_W_H_2.style.color = 'white';
		}
	}

	_B_LV_W_H_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_BMU_QR.focus();
		if(_B_LV_W_H_QR.value != '' && _B_LV_W_H_품번.value != '') { 
			_B_LV_W_H.style.backgroundColor = 'salmon';
			_B_LV_W_H.style.color = 'white';
		}
	}

	_B_BMU_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_1_QR.focus();
		if(_B_BMU_QR.value != '' && _B_BMU_품번.value != '') { 
			_B_BMU.style.backgroundColor = 'salmon';
			_B_BMU.style.color = 'white';
		}
	}

	_B_CMU_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_2_QR.focus();
		if(_B_CMU_1_QR.value != '' && _B_CMU_1_품번.value != '') { 
			_B_CMU_1.style.backgroundColor = 'salmon';
			_B_CMU_1.style.color = 'white';
		}
	}

	_B_CMU_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_3_QR.focus();
		if(_B_CMU_2_QR.value != '' && _B_CMU_2_품번.value != '') { 
			_B_CMU_2.style.backgroundColor = 'salmon';
			_B_CMU_2.style.color = 'white';
		}
	}

	_B_CMU_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_4_QR.focus();
		if(_B_CMU_3_QR.value != '' && _B_CMU_3_품번.value != '') { 
			_B_CMU_3.style.backgroundColor = 'salmon';
			_B_CMU_3.style.color = 'white';
		}
	}

	_B_CMU_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_CMU_5_QR.focus();
		if(_B_CMU_4_QR.value != '' && _B_CMU_4_품번.value != '') { 
			_B_CMU_4.style.backgroundColor = 'salmon';
			_B_CMU_4.style.color = 'white';
		}
	}

	_B_CMU_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_1_QR.focus();
		if(_B_CMU_5_QR.value != '' && _B_CMU_5_품번.value != '') { 
			_B_CMU_5.style.backgroundColor = 'salmon';
			_B_CMU_5.style.color = 'white';
		}
	}

	_B_MODULE_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_2_QR.focus();
		if(_B_MODULE_1_QR.value != '' && _B_MODULE_1_품번.value != '') { 
			_B_MODULE_1.style.backgroundColor = 'salmon';
			_B_MODULE_1.style.color = 'white';
		}
	}

	_B_MODULE_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_3_QR.focus();
		if(_B_MODULE_2_QR.value != '' && _B_MODULE_2_품번.value != '') { 
			_B_MODULE_2.style.backgroundColor = 'salmon';
			_B_MODULE_2.style.color = 'white';
		}
	}

	_B_MODULE_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_4_QR.focus();
		if(_B_MODULE_3_QR.value != '' && _B_MODULE_3_품번.value != '') { 
			_B_MODULE_3.style.backgroundColor = 'salmon';
			_B_MODULE_3.style.color = 'white';
		}
	}

	_B_MODULE_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_5_QR.focus();
		if(_B_MODULE_4_QR.value != '' && _B_MODULE_4_품번.value != '') { 
			_B_MODULE_4.style.backgroundColor = 'salmon';
			_B_MODULE_4.style.color = 'white';
		}
	}

	_B_MODULE_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_6_QR.focus();
		if(_B_MODULE_5_QR.value != '' && _B_MODULE_5_품번.value != '') { 
			_B_MODULE_5.style.backgroundColor = 'salmon';
			_B_MODULE_5.style.color = 'white';
		}
	}

	_B_MODULE_6_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_7_QR.focus();
		if(_B_MODULE_6_QR.value != '' && _B_MODULE_6_품번.value != '') { 
			_B_MODULE_6.style.backgroundColor = 'salmon';
			_B_MODULE_6.style.color = 'white';
		}
	}

	_B_MODULE_7_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_8_QR.focus();
		if(_B_MODULE_7_QR.value != '' && _B_MODULE_7_품번.value != '') { 
			_B_MODULE_7.style.backgroundColor = 'salmon';
			_B_MODULE_7.style.color = 'white';
		}
	}

	_B_MODULE_8_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_9_QR.focus();
		if(_B_MODULE_8_QR.value != '' && _B_MODULE_8_품번.value != '') { 
			_B_MODULE_8.style.backgroundColor = 'salmon';
			_B_MODULE_8.style.color = 'white';
		}
	}

	_B_MODULE_9_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _B_MODULE_10_QR.focus();
		if(_B_MODULE_9_QR.value != '' && _B_MODULE_9_품번.value != '') { 
			_B_MODULE_9.style.backgroundColor = 'salmon';
			_B_MODULE_9.style.color = 'white';
		}
	}

	_B_MODULE_10_품번.onkeydown = function (event) {
		if(_B_MODULE_10_QR.value != '' && _B_MODULE_10_품번.value != '') { 
			_B_MODULE_10.style.backgroundColor = 'salmon';
			_B_MODULE_10.style.color = 'white';
		}
		//_B_MODULE_10_QR.focus();
	}

	_C_UPR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_LWR_CASE_QR.focus();
		if(_C_UPR_CASE_QR.value != '' && _C_UPR_CASE_품번.value != '') { 
			_C_UPR_CASE.style.backgroundColor = 'salmon';
			_C_UPR_CASE.style.color = 'white';
		}
	}

	_C_LWR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_CNTR_1_QR.focus();
		if(_C_LWR_CASE_QR.value != '' && _C_LWR_CASE_품번.value != '') { 
			_C_LWR_CASE.style.backgroundColor = 'salmon';
			_C_LWR_CASE.style.color = 'white';
		}
	}

	_C_HV_CNTR_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_CNTR_2_QR.focus();
		if(_C_HV_CNTR_1_QR.value != '' && _C_HV_CNTR_1_품번.value != '') { 
			_C_HV_CNTR_1.style.backgroundColor = 'salmon';
			_C_HV_CNTR_1.style.color = 'white';
		}
	}

	_C_HV_CNTR_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HT_CNTR_QR.focus();
		if(_C_HV_CNTR_2_QR.value != '' && _C_HV_CNTR_2_품번.value != '') { 
			_C_HV_CNTR_2.style.backgroundColor = 'salmon';
			_C_HV_CNTR_2.style.color = 'white';
		}
	}

	_C_HT_CNTR_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_PRA_QR.focus();
		if(_C_HT_CNTR_QR.value != '' && _C_HT_CNTR_품번.value != '') { 
			_C_HT_CNTR.style.backgroundColor = 'salmon';
			_C_HT_CNTR.style.color = 'white';
		}
	}

	_C_PRA_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_FUSE_QR.focus();
		if(_C_PRA_QR.value != '' && _C_PRA_품번.value != '') { 
			_C_PRA.style.backgroundColor = 'salmon';
			_C_PRA.style.color = 'white';
		}
	}

	_C_FUSE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_LV_W_H_QR.focus();
		if(_C_FUSE_QR.value != '' && _C_FUSE_품번.value != '') { 
			_C_FUSE.style.backgroundColor = 'salmon';
			_C_FUSE.style.color = 'white';
		}
	}

	_C_LV_W_H_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_1_QR.focus();
		if(_C_LV_W_H_QR.value != '' && _C_LV_W_H_품번.value != '') { 
			_C_LV_W_H.style.backgroundColor = 'salmon';
			_C_LV_W_H.style.color = 'white';
		}
	}

	_C_HV_W_H_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_2_QR.focus();
		if(_C_HV_W_H_1_QR.value != '' && _C_HV_W_H_1_품번.value != '') { 
			_C_HV_W_H_1.style.backgroundColor = 'salmon';
			_C_HV_W_H_1.style.color = 'white';
		}
	}

	_C_HV_W_H_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_3_QR.focus();
		if(_C_HV_W_H_2_QR.value != '' && _C_HV_W_H_2_품번.value != '') { 
			_C_HV_W_H_2.style.backgroundColor = 'salmon';
			_C_HV_W_H_2.style.color = 'white';
		}
	}

	_C_HV_W_H_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_4_QR.focus();
		if(_C_HV_W_H_3_QR.value != '' && _C_HV_W_H_3_품번.value != '') { 
			_C_HV_W_H_3.style.backgroundColor = 'salmon';
			_C_HV_W_H_3.style.color = 'white';
		}
	}

	_C_HV_W_H_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_5_QR.focus();
		if(_C_HV_W_H_4_QR.value != '' && _C_HV_W_H_4_품번.value != '') { 
			_C_HV_W_H_4.style.backgroundColor = 'salmon';
			_C_HV_W_H_4.style.color = 'white';
		}
	}

	_C_HV_W_H_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_6_QR.focus();
		if(_C_HV_W_H_5_QR.value != '' && _C_HV_W_H_5_품번.value != '') { 
			_C_HV_W_H_5.style.backgroundColor = 'salmon';
			_C_HV_W_H_5.style.color = 'white';
		}
	}

	_C_HV_W_H_6_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_7_QR.focus();
		if(_C_HV_W_H_6_QR.value != '' && _C_HV_W_H_6_품번.value != '') { 
			_C_HV_W_H_6.style.backgroundColor = 'salmon';
			_C_HV_W_H_6.style.color = 'white';
		}
	}

	_C_HV_W_H_7_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_HV_W_H_8_QR.focus();
		if(_C_HV_W_H_7_QR.value != '' && _C_HV_W_H_7_품번.value != '') { 
			_C_HV_W_H_7.style.backgroundColor = 'salmon';
			_C_HV_W_H_7.style.color = 'white';
		}
	}

	_C_HV_W_H_8_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_BMU_QR.focus();
		if(_C_HV_W_H_8_QR.value != '' && _C_HV_W_H_8_품번.value != '') { 
			_C_HV_W_H_8.style.backgroundColor = 'salmon';
			_C_HV_W_H_8.style.color = 'white';
		}
	}

	_C_BMU_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_1_QR.focus();
		if(_C_BMU_QR.value != '' && _C_BMU_품번.value != '') { 
			_C_BMU.style.backgroundColor = 'salmon';
			_C_BMU.style.color = 'white';
		}
	}

	_C_CMU_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_2_QR.focus();
		if(_C_CMU_1_QR.value != '' && _C_CMU_1_품번.value != '') { 
			_C_CMU_1.style.backgroundColor = 'salmon';
			_C_CMU_1.style.color = 'white';
		}
	}

	_C_CMU_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_3_QR.focus();
		if(_C_CMU_2_QR.value != '' && _C_CMU_2_품번.value != '') { 
			_C_CMU_2.style.backgroundColor = 'salmon';
			_C_CMU_2.style.color = 'white';
		}
	}

	_C_CMU_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_4_QR.focus();
		if(_C_CMU_3_QR.value != '' && _C_CMU_3_품번.value != '') { 
			_C_CMU_3.style.backgroundColor = 'salmon';
			_C_CMU_3.style.color = 'white';
		}
	}

	_C_CMU_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_5_QR.focus();
		if(_C_CMU_4_QR.value != '' && _C_CMU_4_품번.value != '') { 
			_C_CMU_4.style.backgroundColor = 'salmon';
			_C_CMU_4.style.color = 'white';
		}
	}

	_C_CMU_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_6_QR.focus();
		if(_C_CMU_5_QR.value != '' && _C_CMU_5_품번.value != '') { 
			_C_CMU_5.style.backgroundColor = 'salmon';
			_C_CMU_5.style.color = 'white';
		}
	}

	_C_CMU_6_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_7_QR.focus();
		if(_C_CMU_6_QR.value != '' && _C_CMU_6_품번.value != '') { 
			_C_CMU_6.style.backgroundColor = 'salmon';
			_C_CMU_6.style.color = 'white';
		}
	}

	_C_CMU_7_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_CMU_8_QR.focus();
		if(_C_CMU_7_QR.value != '' && _C_CMU_7_품번.value != '') { 
			_C_CMU_7.style.backgroundColor = 'salmon';
			_C_CMU_7.style.color = 'white';
		}
	}

	_C_CMU_8_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_1_QR.focus();
		if(_C_CMU_8_QR.value != '' && _C_CMU_8_품번.value != '') { 
			_C_CMU_8.style.backgroundColor = 'salmon';
			_C_CMU_8.style.color = 'white';
		}
	}

	_C_MODULE_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_QR.focus();
		if(_C_MODULE_1_QR.value != '' && _C_MODULE_1_품번.value != '') { 
			_C_MODULE_1.style.backgroundColor = 'salmon';
			_C_MODULE_1.style.color = 'white';
		}
	}

	_C_MODULE_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_3_QR.focus();
		if(_C_MODULE_2_QR.value != '' && _C_MODULE_2_품번.value != '') { 
			_C_MODULE_2.style.backgroundColor = 'salmon';
			_C_MODULE_2.style.color = 'white';
		}
	}

	_C_MODULE_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_4_QR.focus();
		if(_C_MODULE_3_QR.value != '' && _C_MODULE_3_품번.value != '') { 
			_C_MODULE_3.style.backgroundColor = 'salmon';
			_C_MODULE_3.style.color = 'white';
		}
	}

	_C_MODULE_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_5_QR.focus();
		if(_C_MODULE_4_QR.value != '' && _C_MODULE_4_품번.value != '') { 
			_C_MODULE_4.style.backgroundColor = 'salmon';
			_C_MODULE_4.style.color = 'white';
		}
	}

	_C_MODULE_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_6_QR.focus();
		if(_C_MODULE_5_QR.value != '' && _C_MODULE_5_품번.value != '') { 
			_C_MODULE_5.style.backgroundColor = 'salmon';
			_C_MODULE_5.style.color = 'white';
		}
	}

	_C_MODULE_6_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_7_QR.focus();
		if(_C_MODULE_6_QR.value != '' && _C_MODULE_6_품번.value != '') { 
			_C_MODULE_6.style.backgroundColor = 'salmon';
			_C_MODULE_6.style.color = 'white';
		}
	}

	_C_MODULE_7_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_8_QR.focus();
		if(_C_MODULE_7_QR.value != '' && _C_MODULE_7_품번.value != '') { 
			_C_MODULE_7.style.backgroundColor = 'salmon';
			_C_MODULE_7.style.color = 'white';
		}
	}

	_C_MODULE_8_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_9_QR.focus();
		if(_C_MODULE_8_QR.value != '' && _C_MODULE_8_품번.value != '') { 
			_C_MODULE_8.style.backgroundColor = 'salmon';
			_C_MODULE_8.style.color = 'white';
		}
	}

	_C_MODULE_9_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_10_QR.focus();
		if(_C_MODULE_9_QR.value != '' && _C_MODULE_9_품번.value != '') { 
			_C_MODULE_9.style.backgroundColor = 'salmon';
			_C_MODULE_9.style.color = 'white';
		}
	}

	_C_MODULE_10_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_11_QR.focus();
		if(_C_MODULE_10_QR.value != '' && _C_MODULE_10_품번.value != '') { 
			_C_MODULE_10.style.backgroundColor = 'salmon';
			_C_MODULE_10.style.color = 'white';
		}
	}

	_C_MODULE_11_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_12_QR.focus();
		if(_C_MODULE_11_QR.value != '' && _C_MODULE_11_품번.value != '') { 
			_C_MODULE_11.style.backgroundColor = 'salmon';
			_C_MODULE_11.style.color = 'white';
		}
	}

	_C_MODULE_12_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_13_QR.focus();
		if(_C_MODULE_12_QR.value != '' && _C_MODULE_12_품번.value != '') { 
			_C_MODULE_12.style.backgroundColor = 'salmon';
			_C_MODULE_12.style.color = 'white';
		}
	}

	_C_MODULE_13_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_14_QR.focus();
		if(_C_MODULE_13_QR.value != '' && _C_MODULE_13_품번.value != '') { 
			_C_MODULE_13.style.backgroundColor = 'salmon';
			_C_MODULE_13.style.color = 'white';
		}
	}

	_C_MODULE_14_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_15_QR.focus();
		if(_C_MODULE_14_QR.value != '' && _C_MODULE_14_품번.value != '') { 
			_C_MODULE_14.style.backgroundColor = 'salmon';
			_C_MODULE_14.style.color = 'white';
		}
	}

	_C_MODULE_15_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_16_QR.focus();
		if(_C_MODULE_15_QR.value != '' && _C_MODULE_15_품번.value != '') { 
			_C_MODULE_15.style.backgroundColor = 'salmon';
			_C_MODULE_15.style.color = 'white';
		}
	}

	_C_MODULE_16_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_1_QR.focus();
		if(_C_MODULE_16_QR.value != '' && _C_MODULE_16_품번.value != '') { 
			_C_MODULE_16.style.backgroundColor = 'salmon';
			_C_MODULE_16.style.color = 'white';
		}
	}

	_C_MODULE_2_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_2_QR.focus();
		if(_C_MODULE_2_1_QR.value != '' && _C_MODULE_2_1_품번.value != '') { 
			_C_MODULE_2_1.style.backgroundColor = 'salmon';
			_C_MODULE_2_1.style.color = 'white';
		}
	}

	_C_MODULE_2_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_3_QR.focus();
		if(_C_MODULE_2_2_QR.value != '' && _C_MODULE_2_2_품번.value != '') { 
			_C_MODULE_2_2.style.backgroundColor = 'salmon';
			_C_MODULE_2_2.style.color = 'white';
		}
	}

	_C_MODULE_2_3_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_4_QR.focus();
		if(_C_MODULE_2_3_QR.value != '' && _C_MODULE_2_3_품번.value != '') { 
			_C_MODULE_2_3.style.backgroundColor = 'salmon';
			_C_MODULE_2_3.style.color = 'white';
		}
	}

	_C_MODULE_2_4_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_5_QR.focus();
		if(_C_MODULE_2_4_QR.value != '' && _C_MODULE_2_4_품번.value != '') { 
			_C_MODULE_2_4.style.backgroundColor = 'salmon';
			_C_MODULE_2_4.style.color = 'white';
		}
	}

	_C_MODULE_2_5_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_6_QR.focus();
		if(_C_MODULE_2_5_QR.value != '' && _C_MODULE_2_5_품번.value != '') { 
			_C_MODULE_2_5.style.backgroundColor = 'salmon';
			_C_MODULE_2_5.style.color = 'white';
		}
	}

	_C_MODULE_2_6_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_7_QR.focus();
		if(_C_MODULE_2_6_QR.value != '' && _C_MODULE_2_6_품번.value != '') { 
			_C_MODULE_2_6.style.backgroundColor = 'salmon';
			_C_MODULE_2_6.style.color = 'white';
		}
	}

	_C_MODULE_2_7_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_8_QR.focus();
		if(_C_MODULE_2_7_QR.value != '' && _C_MODULE_2_7_품번.value != '') { 
			_C_MODULE_2_7.style.backgroundColor = 'salmon';
			_C_MODULE_2_7.style.color = 'white';
		}
	}

	_C_MODULE_2_8_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_9_QR.focus();
		if(_C_MODULE_2_8_QR.value != '' && _C_MODULE_2_8_품번.value != '') { 
			_C_MODULE_2_8.style.backgroundColor = 'salmon';
			_C_MODULE_2_8.style.color = 'white';
		}
	}

	_C_MODULE_2_9_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_10_QR.focus();
		if(_C_MODULE_2_9_QR.value != '' && _C_MODULE_2_9_품번.value != '') { 
			_C_MODULE_2_9.style.backgroundColor = 'salmon';
			_C_MODULE_2_9.style.color = 'white';
		}
	}

	_C_MODULE_2_10_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_11_QR.focus();
		if(_C_MODULE_2_10_QR.value != '' && _C_MODULE_2_10_품번.value != '') { 
			_C_MODULE_2_10.style.backgroundColor = 'salmon';
			_C_MODULE_2_10.style.color = 'white';
		}
	}

	_C_MODULE_2_11_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_12_QR.focus();
		if(_C_MODULE_2_11_QR.value != '' && _C_MODULE_2_11_품번.value != '') { 
			_C_MODULE_2_11.style.backgroundColor = 'salmon';
			_C_MODULE_2_11.style.color = 'white';
		}
	}

	_C_MODULE_2_12_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_13_QR.focus();
		if(_C_MODULE_2_12_QR.value != '' && _C_MODULE_2_12_품번.value != '') { 
			_C_MODULE_2_12.style.backgroundColor = 'salmon';
			_C_MODULE_2_12.style.color = 'white';
		}
	}

	_C_MODULE_2_13_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_14_QR.focus();
		if(_C_MODULE_2_13_QR.value != '' && _C_MODULE_2_13_품번.value != '') { 
			_C_MODULE_2_13.style.backgroundColor = 'salmon';
			_C_MODULE_2_13.style.color = 'white';
		}
	}

	_C_MODULE_2_14_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_15_QR.focus();
		if(_C_MODULE_2_14_QR.value != '' && _C_MODULE_2_14_품번.value != '') { 
			_C_MODULE_2_14.style.backgroundColor = 'salmon';
			_C_MODULE_2_14.style.color = 'white';
		}
	}

	_C_MODULE_2_15_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _C_MODULE_2_16_QR.focus();
		if(_C_MODULE_2_15_QR.value != '' && _C_MODULE_2_15_품번.value != '') { 
			_C_MODULE_2_15.style.backgroundColor = 'salmon';
			_C_MODULE_2_15.style.color = 'white';
		}
	}

	_C_MODULE_2_16_품번.onkeydown = function (event) {
		if(_C_MODULE_2_16_QR.value != '' && _C_MODULE_2_16_품번.value != '') { 
			_C_MODULE_2_16.style.backgroundColor = 'salmon';
			_C_MODULE_2_16.style.color = 'white';
		}
		//_C_MODULE_2_16_품번.focus();
	}

	_D_UPR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_LWR_CASE_QR.focus();
		if(_D_UPR_CASE_QR.value != '' && _D_UPR_CASE_품번.value != '') { 
			_D_UPR_CASE.style.backgroundColor = 'salmon';
			_D_UPR_CASE.style.color = 'white';
		}
	}

	_D_LWR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_1_QR.focus();
		if(_D_LWR_CASE_QR.value != '' && _D_LWR_CASE_품번.value != '') { 
			_D_LWR_CASE.style.backgroundColor = 'salmon';
			_D_LWR_CASE.style.color = 'white';
		}
	}

	_D_HV_CNTR_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_2_QR.focus();
		if(_D_HV_CNTR_1_QR.value != '' && _D_HV_CNTR_1_품번.value != '') { 
			_D_HV_CNTR_1.style.backgroundColor = 'salmon';
			_D_HV_CNTR_1.style.color = 'white';
		}
	}

	_D_HV_CNTR_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_RELAY_QR.focus();
		if(_D_HV_CNTR_2_QR.value != '' && _D_HV_CNTR_2_품번.value != '') { 
			_D_HV_CNTR_2.style.backgroundColor = 'salmon';
			_D_HV_CNTR_2.style.color = 'white';
		}
	}

	_D_RELAY_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_LV_W_H_QR.focus();
		if(_D_RELAY_QR.value != '' && _D_RELAY_품번.value != '') { 
			_D_RELAY.style.backgroundColor = 'salmon';
			_D_RELAY.style.color = 'white';
		}
	}

	_D_LV_W_H_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_1_QR.focus();
		if(_D_LV_W_H_QR.value != '' && _C_LV_W_H_품번.value != '') { 
			_D_LV_W_H.style.backgroundColor = 'salmon';
			_D_LV_W_H.style.color = 'white';
		}
	}

	_D_HV_W_H_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_2_QR.focus();
		if(_D_HV_W_H_1_QR.value != '' && _D_HV_W_H_1_품번.value != '') { 
			_D_HV_W_H_1.style.backgroundColor = 'salmon';
			_D_HV_W_H_1.style.color = 'white';
		}
	}

	_D_HV_W_H_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_BMU_QR.focus();
		if(_D_HV_W_H_2_QR.value != '' && _D_HV_W_H_2_품번.value != '') { 
			_D_HV_W_H_2.style.backgroundColor = 'salmon';
			_D_HV_W_H_2.style.color = 'white';
		}
	}

	_D_BMU_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_CMU_1_QR.focus();
		if(_D_BMU_QR.value != '' && _D_BMU_품번.value != '') { 
			_D_BMU.style.backgroundColor = 'salmon';
			_D_BMU.style.color = 'white';
		}
	}

	_D_CMU_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_MODULE_1_QR.focus();
		if(_D_CMU_1_QR.value != '' && _D_CMU_1_품번.value != '') { 
			_D_CMU_1.style.backgroundColor = 'salmon';
			_D_CMU_1.style.color = 'white';
		}
	}

	_D_MODULE_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_MODULE_2_QR.focus();
		if(_D_MODULE_1_QR.value != '' && _D_MODULE_1_품번.value != '') { 
			_D_MODULE_1.style.backgroundColor = 'salmon';
			_D_MODULE_1.style.color = 'white';
		}
	}

	_D_MODULE_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_HV_W_H_1_QR.focus();
		if(_D_MODULE_2_QR.value != '' && _D_MODULE_2_품번.value != '') { 
			_D_MODULE_2.style.backgroundColor = 'salmon';
			_D_MODULE_2.style.color = 'white';
		}
	}

	_D2_HV_W_H_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_CMU_1_QR.focus();
		if(_D2_HV_W_H_1_QR.value != '' && _D2_HV_W_H_1_품번.value != '') { 
			_D2_HV_W_H_1.style.backgroundColor = 'salmon';
			_D2_HV_W_H_1.style.color = 'white';
		}
	}

	_D2_CMU_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_RELAY_QR.focus();
		if(_D2_CMU_1_QR.value != '' && _D2_CMU_1_품번.value != '') { 
			_D2_CMU_1.style.backgroundColor = 'salmon';
			_D2_CMU_1.style.color = 'white';
		}
	}

	_D2_RELAY_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_BMU_QR.focus();
		if(_D2_RELAY_QR.value != '' && _D2_RELAY_품번.value != '') { 
			_D2_RELAY.style.backgroundColor = 'salmon';
			_D2_RELAY.style.color = 'white';
		}
	}

	_D2_BMU_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_HV_CNTR_1_QR.focus();
		if(_D2_BMU_QR.value != '' && _D2_BMU_품번.value != '') { 
			_D2_BMU.style.backgroundColor = 'salmon';
			_D2_BMU.style.color = 'white';
		}
	}

	_D2_HV_CNTR_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_HV_CNTR_2_QR.focus();
		if(_D2_HV_CNTR_1_QR.value != '' && _D2_HV_CNTR_1_품번.value != '') { 
			_D2_HV_CNTR_1.style.backgroundColor = 'salmon';
			_D2_HV_CNTR_1.style.color = 'white';
		}
	}

	_D2_HV_CNTR_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_LWR_CASE_QR.focus();
		if(_D2_HV_CNTR_2_QR.value != '' && _D2_HV_CNTR_2_품번.value != '') { 
			_D2_HV_CNTR_2.style.backgroundColor = 'salmon';
			_D2_HV_CNTR_2.style.color = 'white';
		}
	}

	_D2_LWR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_UPR_CASE_QR.focus();
		if(_D2_LWR_CASE_QR.value != '' && _D2_LWR_CASE_품번.value != '') { 
			_D2_LWR_CASE.style.backgroundColor = 'salmon';
			_D2_LWR_CASE.style.color = 'white';
		}
	}

	_D2_UPR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_LV_W_H_QR.focus();
		if(_D2_UPR_CASE_QR.value != '' && _D2_UPR_CASE_품번.value != '') { 
			_D2_UPR_CASE.style.backgroundColor = 'salmon';
			_D2_UPR_CASE.style.color = 'white';
		}
	}

	_D2_LV_W_H_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_MODULE_1_QR.focus();
		if(_D2_LV_W_H_QR.value != '' && _D2_LV_W_H_품번.value != '') { 
			_D2_LV_W_H.style.backgroundColor = 'salmon';
			_D2_LV_W_H.style.color = 'white';
		}
	}

	_D2_MODULE_1_품번.onkeydown = function(event) {
		if(_D2_MODULE_1_QR.value != '' && _D2_MODULE_1_품번.value != '') { 
			_D2_MODULE_1.style.backgroundColor = 'salmon';
			_D2_MODULE_1.style.color = 'white';
		}
	}
	//_D2_LV_W_H_품번.onkeydown = function(event) {  
	//}
}
