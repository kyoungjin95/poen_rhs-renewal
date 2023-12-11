
async function 부품정보_list_시작() {
	while(typeof _D == 'undefined') {
		console.log(관리번호, typeof _D);
		await sleep(100);
	}
	flag_부품정보_list = false;

	_management_id.value = 관리번호;
	_차종.value = 차종;

	_A.style.display = "none";
	_B.style.display = "none";
	_C.style.display = "none";
	_D.style.display = "none";

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

			_img_1.style.display = "block";
			_img_2.style.display = "none";
			_img_3.style.display = "none";
			_img_4.style.display = "none";
			_img_5.style.display = "none";

			_A_UPR_CASE_QR.focus();
			auto_focus_AA();
			auto_focus_A();
			break;

		case "PU":
		case "PU_EV":
		case "HR":
		case "HR_EV":
			_A.style.display = "none";
			_B.style.display = "block";
			_C.style.display = "none";
			_D.style.display = "none";

			_img_1.style.display = "none";
			_img_2.style.display = "block";
			_img_3.style.display = "none";
			_img_4.style.display = "none";
			_img_5.style.display = "none";

			_B_UPR_CASE_QR.focus();
			auto_focus_BB();
			auto_focus_B();
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

			_img_1.style.display = "none";
			_img_2.style.display = "none";
			_img_3.style.display = "block";
			_img_4.style.display = "none";
			_img_5.style.display = "none";

			_C_UPR_CASE_QR.focus();
			auto_focus_CC();
			auto_focus_C();
			break;

		case "CS":
		case "CS_EV":
			_A.style.display = "none";
			_B.style.display = "none";
			_C.style.display = "none";
			_D.style.display = "block";

			_img_1.style.display = "none";
			_img_2.style.display = "none";
			_img_3.style.display = "none";
			_img_4.style.display = "block";
			_img_5.style.display = "block";

			_D_UPR_CASE_QR.focus();
			auto_focus_DD();
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

	_A_UPR_CASE_QR.value = 부품정보_list_v.A_UPR_CASE_QR;
	_A_LWR_CASE_QR.value = 부품정보_list_v.A_LWR_CASE_QR;
	_A_S_PLUG_QR.value = 부품정보_list_v.A_S_PLUG_QR;
	_A_SPA_QR.value = 부품정보_list_v.A_SPA_QR;
	_A_HT_CNTR_QR.value = 부품정보_list_v.A_HT_CNTR_QR;
	_A_HV_CNTR_QR.value = 부품정보_list_v.A_HV_CNTR_QR;
	_A_Heating_CNTR_QR.value = 부품정보_list_v.A_Heating_CNTR_QR;
	_A_PRA_QR.value = 부품정보_list_v.A_PRA_QR;
	_A_LV_W_H_QR.value = 부품정보_list_v.A_LV_W_H_QR;
	_A_HV_W_H_1_QR.value = 부품정보_list_v.A_HV_W_H_1_QR;
	_A_HV_W_H_2_QR.value = 부품정보_list_v.A_HV_W_H_2_QR;
	_A_HV_W_H_3_QR.value = 부품정보_list_v.A_HV_W_H_3_QR;
	_A_HV_W_H_4_QR.value = 부품정보_list_v.A_HV_W_H_4_QR;
	_A_HV_W_H_5_QR.value = 부품정보_list_v.A_HV_W_H_5_QR;
	_A_BUSBAR_QR.value = 부품정보_list_v.A_BUSBAR_QR;
	_A_BMU_QR.value = 부품정보_list_v.A_BMU_QR;
	_A_CMU_1_QR.value = 부품정보_list_v.A_CMU_1_QR;
	_A_CMU_2_QR.value = 부품정보_list_v.A_CMU_2_QR;
	_A_CMU_3_QR.value = 부품정보_list_v.A_CMU_3_QR;
	_A_CMU_4_QR.value = 부품정보_list_v.A_CMU_4_QR;
	_A_CMU_5_QR.value = 부품정보_list_v.A_CMU_5_QR;
	_A_BMA_1_QR.value = 부품정보_list_v.A_BMA_1_QR;
	_A_BMA_2_QR.value = 부품정보_list_v.A_BMA_2_QR;
	_A_BMA_3_QR.value = 부품정보_list_v.A_BMA_3_QR;
	_A_BMA_4_QR.value = 부품정보_list_v.A_BMA_4_QR;
	_A_BMA_5_QR.value = 부품정보_list_v.A_BMA_5_QR;
	_B_UPR_CASE_QR.value = 부품정보_list_v.B_UPR_CASE_QR;
	_B_LWR_CASE_QR.value = 부품정보_list_v.B_LWR_CASE_QR;
	_B_HV_CNTR_QR.value = 부품정보_list_v.B_HV_CNTR_QR;
	_B_Heating_CNTR_QR.value = 부품정보_list_v.B_Heating_CNTR_QR;
	_B_PRA_QR.value = 부품정보_list_v.B_PRA_QR;
	_B_FUSE_BOX_QR.value = 부품정보_list_v.B_FUSE_BOX_QR;
	_B_LV_W_H_QR.value = 부품정보_list_v.B_LV_W_H_QR;
	_B_HV_W_H_1_QR.value = 부품정보_list_v.B_HV_W_H_1_QR;
	_B_HV_W_H_2_QR.value = 부품정보_list_v.B_HV_W_H_2_QR;
	_B_HV_W_H_3_QR.value = 부품정보_list_v.B_HV_W_H_3_QR;
	_B_HV_W_H_4_QR.value = 부품정보_list_v.B_HV_W_H_4_QR;
	_B_HV_W_H_5_QR.value = 부품정보_list_v.B_HV_W_H_5_QR;
	_B_HV_W_H_6_QR.value = 부품정보_list_v.B_HV_W_H_6_QR;
	_B_HV_W_H_7_QR.value = 부품정보_list_v.B_HV_W_H_7_QR;
	_B_HV_W_H_8_QR.value = 부품정보_list_v.B_HV_W_H_8_QR;
	_B_HV_W_H_9_QR.value = 부품정보_list_v.B_HV_W_H_9_QR;
	_B_HV_W_H_10_QR.value = 부품정보_list_v.B_HV_W_H_10_QR;
	_B_BUSBAR_QR.value = 부품정보_list_v.B_BUSBAR_QR;
	_B_BMU_QR.value = 부품정보_list_v.B_BMU_QR;
	_B_CMU_1_QR.value = 부품정보_list_v.B_CMU_1_QR;
	_B_CMU_2_QR.value = 부품정보_list_v.B_CMU_2_QR;
	_B_CMU_3_QR.value = 부품정보_list_v.B_CMU_3_QR;
	_B_CMU_4_QR.value = 부품정보_list_v.B_CMU_4_QR;
	_B_CMU_5_QR.value = 부품정보_list_v.B_CMU_5_QR;
	_B_BMA_1_QR.value = 부품정보_list_v.B_BMA_1_QR;
	_B_BMA_2_QR.value = 부품정보_list_v.B_BMA_2_QR;
	_B_BMA_3_QR.value = 부품정보_list_v.B_BMA_3_QR;
	_B_BMA_4_QR.value = 부품정보_list_v.B_BMA_4_QR;
	_B_BMA_5_QR.value = 부품정보_list_v.B_BMA_5_QR;
	_B_BMA_6_QR.value = 부품정보_list_v.B_BMA_6_QR;
	_B_BMA_7_QR.value = 부품정보_list_v.B_BMA_7_QR;
	_B_BMA_8_QR.value = 부품정보_list_v.B_BMA_8_QR;
	_B_BMA_9_QR.value = 부품정보_list_v.B_BMA_9_QR;
	_B_BMA_10_QR.value = 부품정보_list_v.B_BMA_10_QR;
	_C_UPR_CASE_QR.value = 부품정보_list_v.C_UPR_CASE_QR;
	_C_LWR_CASE_QR.value = 부품정보_list_v.C_LWR_CASE_QR;
	_C_HV_CNTR_1_QR.value = 부품정보_list_v.C_HV_CNTR_1_QR;
	_C_HV_CNTR_2_QR.value = 부품정보_list_v.C_HV_CNTR_2_QR;
	_C_Heating_CNTR_QR.value = 부품정보_list_v.C_Heating_CNTR_QR;
	_C_PRA_QR.value = 부품정보_list_v.C_PRA_QR;
	_C_FUSE_BOX_QR.value = 부품정보_list_v.C_FUSE_BOX_QR;
	_C_LV_W_H_QR.value = 부품정보_list_v.C_LV_W_H_QR;
	_C_HV_W_H_1_QR.value = 부품정보_list_v.C_HV_W_H_1_QR;
	_C_HV_W_H_2_QR.value = 부품정보_list_v.C_HV_W_H_2_QR;
	_C_HV_W_H_3_QR.value = 부품정보_list_v.C_HV_W_H_3_QR;
	_C_HV_W_H_4_QR.value = 부품정보_list_v.C_HV_W_H_4_QR;
	_C_HV_W_H_5_QR.value = 부품정보_list_v.C_HV_W_H_5_QR;
	_C_HV_W_H_6_QR.value = 부품정보_list_v.C_HV_W_H_6_QR;
	_C_HV_W_H_7_QR.value = 부품정보_list_v.C_HV_W_H_7_QR;
	_C_HV_W_H_8_QR.value = 부품정보_list_v.C_HV_W_H_8_QR;
	_C_BUSBAR_QR.value = 부품정보_list_v.C_BUSBAR_QR;
	_C_BMU_QR.value = 부품정보_list_v.C_BMU_QR;
	_C_CMU_1_QR.value = 부품정보_list_v.C_CMU_1_QR;
	_C_CMU_2_QR.value = 부품정보_list_v.C_CMU_2_QR;
	_C_CMU_3_QR.value = 부품정보_list_v.C_CMU_3_QR;
	_C_CMU_4_QR.value = 부품정보_list_v.C_CMU_4_QR;
	_C_CMU_5_QR.value = 부품정보_list_v.C_CMU_5_QR;
	_C_CMU_6_QR.value = 부품정보_list_v.C_CMU_6_QR;
	_C_CMU_7_QR.value = 부품정보_list_v.C_CMU_7_QR;
	_C_CMU_8_QR.value = 부품정보_list_v.C_CMU_8_QR;
	_C_BMA_1_QR.value = 부품정보_list_v.C_BMA_1_QR;
	_C_BMA_2_QR.value = 부품정보_list_v.C_BMA_2_QR;
	_C_BMA_3_QR.value = 부품정보_list_v.C_BMA_3_QR;
	_C_BMA_4_QR.value = 부품정보_list_v.C_BMA_4_QR;
	_C_BMA_5_QR.value = 부품정보_list_v.C_BMA_5_QR;
	_C_BMA_6_QR.value = 부품정보_list_v.C_BMA_6_QR;
	_C_BMA_7_QR.value = 부품정보_list_v.C_BMA_7_QR;
	_C_BMA_8_QR.value = 부품정보_list_v.C_BMA_8_QR;
	_C_BMA_9_QR.value = 부품정보_list_v.C_BMA_9_QR;
	_C_BMA_10_QR.value = 부품정보_list_v.C_BMA_10_QR;
	_C_BMA_11_QR.value = 부품정보_list_v.C_BMA_11_QR;
	_C_BMA_12_QR.value = 부품정보_list_v.C_BMA_12_QR;
	_D_UPR_CASE_QR.value = 부품정보_list_v.D_UPR_CASE_QR;
	_D_LWR_CASE_QR.value = 부품정보_list_v.D_LWR_CASE_QR;
	_D_HV_CNTR_RH_QR.value = 부품정보_list_v.D_HV_CNTR_RH_QR;
	_D_HV_CNTR_LH_QR.value = 부품정보_list_v.D_HV_CNTR_LH_QR;
	_D_RELAY_QR.value = 부품정보_list_v.D_RELAY_QR;
	_D_LV_W_H_QR.value = 부품정보_list_v.D_LV_W_H_QR;
	_D_HV_W_H_1_QR.value = 부품정보_list_v.D_HV_W_H_1_QR;
	_D_HV_W_H_2_QR.value = 부품정보_list_v.D_HV_W_H_2_QR;
	_D_BUSBAR_QR.value = 부품정보_list_v.D_BUSBAR_QR;
	_D_BMU_QR.value = 부품정보_list_v.D_BMU_QR;
	_D_CMU_1_QR.value = 부품정보_list_v.D_CMU_1_QR;
	_D_CMU_2_QR.value = 부품정보_list_v.D_CMU_2_QR;
	_D_BMA_1_QR.value = 부품정보_list_v.D_BMA_1_QR;
	_D_BMA_2_QR.value = 부품정보_list_v.D_BMA_2_QR;

	_A_UPR_CASE_품번.value = 부품정보_list_v.A_UPR_CASE_품번;
	_A_LWR_CASE_품번.value = 부품정보_list_v.A_LWR_CASE_품번;
	_A_S_PLUG_품번.value = 부품정보_list_v.A_S_PLUG_품번;
	_A_SPA_품번.value = 부품정보_list_v.A_SPA_품번;
	_A_HT_CNTR_품번.value = 부품정보_list_v.A_HT_CNTR_품번;
	_A_HV_CNTR_품번.value = 부품정보_list_v.A_HV_CNTR_품번;
	_A_Heating_CNTR_품번.value = 부품정보_list_v.A_Heating_CNTR_품번;
	_A_PRA_품번.value = 부품정보_list_v.A_PRA_품번;
	_A_LV_W_H_품번.value = 부품정보_list_v.A_LV_W_H_품번;
	_A_HV_W_H_1_품번.value = 부품정보_list_v.A_HV_W_H_1_품번;
	_A_HV_W_H_2_품번.value = 부품정보_list_v.A_HV_W_H_2_품번;
	_A_HV_W_H_3_품번.value = 부품정보_list_v.A_HV_W_H_3_품번;
	_A_HV_W_H_4_품번.value = 부품정보_list_v.A_HV_W_H_4_품번;
	_A_HV_W_H_5_품번.value = 부품정보_list_v.A_HV_W_H_5_품번;
	_A_BUSBAR_품번.value = 부품정보_list_v.A_BUSBAR_품번;
	_A_BMU_품번.value = 부품정보_list_v.A_BMU_품번;
	_A_CMU_1_품번.value = 부품정보_list_v.A_CMU_1_품번;
	_A_CMU_2_품번.value = 부품정보_list_v.A_CMU_2_품번;
	_A_CMU_3_품번.value = 부품정보_list_v.A_CMU_3_품번;
	_A_CMU_4_품번.value = 부품정보_list_v.A_CMU_4_품번;
	_A_CMU_5_품번.value = 부품정보_list_v.A_CMU_5_품번;
	_A_BMA_1_품번.value = 부품정보_list_v.A_BMA_1_품번;
	_A_BMA_2_품번.value = 부품정보_list_v.A_BMA_2_품번;
	_A_BMA_3_품번.value = 부품정보_list_v.A_BMA_3_품번;
	_A_BMA_4_품번.value = 부품정보_list_v.A_BMA_4_품번;
	_A_BMA_5_품번.value = 부품정보_list_v.A_BMA_5_품번;
	_B_UPR_CASE_품번.value = 부품정보_list_v.B_UPR_CASE_품번;
	_B_LWR_CASE_품번.value = 부품정보_list_v.B_LWR_CASE_품번;
	_B_HV_CNTR_품번.value = 부품정보_list_v.B_HV_CNTR_품번;
	_B_Heating_CNTR_품번.value = 부품정보_list_v.B_Heating_CNTR_품번;
	_B_PRA_품번.value = 부품정보_list_v.B_PRA_품번;
	_B_FUSE_BOX_품번.value = 부품정보_list_v.B_FUSE_BOX_품번;
	_B_LV_W_H_품번.value = 부품정보_list_v.B_LV_W_H_품번;
	_B_HV_W_H_1_품번.value = 부품정보_list_v.B_HV_W_H_1_품번;
	_B_HV_W_H_2_품번.value = 부품정보_list_v.B_HV_W_H_2_품번;
	_B_HV_W_H_3_품번.value = 부품정보_list_v.B_HV_W_H_3_품번;
	_B_HV_W_H_4_품번.value = 부품정보_list_v.B_HV_W_H_4_품번;
	_B_HV_W_H_5_품번.value = 부품정보_list_v.B_HV_W_H_5_품번;
	_B_HV_W_H_6_품번.value = 부품정보_list_v.B_HV_W_H_6_품번;
	_B_HV_W_H_7_품번.value = 부품정보_list_v.B_HV_W_H_7_품번;
	_B_HV_W_H_8_품번.value = 부품정보_list_v.B_HV_W_H_8_품번;
	_B_HV_W_H_9_품번.value = 부품정보_list_v.B_HV_W_H_9_품번;
	_B_HV_W_H_10_품번.value = 부품정보_list_v.B_HV_W_H_10_품번;
	_B_BUSBAR_품번.value = 부품정보_list_v.B_BUSBAR_품번;
	_B_BMU_품번.value = 부품정보_list_v.B_BMU_품번;
	_B_CMU_1_품번.value = 부품정보_list_v.B_CMU_1_품번;
	_B_CMU_2_품번.value = 부품정보_list_v.B_CMU_2_품번;
	_B_CMU_3_품번.value = 부품정보_list_v.B_CMU_3_품번;
	_B_CMU_4_품번.value = 부품정보_list_v.B_CMU_4_품번;
	_B_CMU_5_품번.value = 부품정보_list_v.B_CMU_5_품번;
	_B_BMA_1_품번.value = 부품정보_list_v.B_BMA_1_품번;
	_B_BMA_2_품번.value = 부품정보_list_v.B_BMA_2_품번;
	_B_BMA_3_품번.value = 부품정보_list_v.B_BMA_3_품번;
	_B_BMA_4_품번.value = 부품정보_list_v.B_BMA_4_품번;
	_B_BMA_5_품번.value = 부품정보_list_v.B_BMA_5_품번;
	_B_BMA_6_품번.value = 부품정보_list_v.B_BMA_6_품번;
	_B_BMA_7_품번.value = 부품정보_list_v.B_BMA_7_품번;
	_B_BMA_8_품번.value = 부품정보_list_v.B_BMA_8_품번;
	_B_BMA_9_품번.value = 부품정보_list_v.B_BMA_9_품번;
	_B_BMA_10_품번.value = 부품정보_list_v.B_BMA_10_품번;
	_C_UPR_CASE_품번.value = 부품정보_list_v.C_UPR_CASE_품번;
	_C_LWR_CASE_품번.value = 부품정보_list_v.C_LWR_CASE_품번;
	_C_HV_CNTR_1_품번.value = 부품정보_list_v.C_HV_CNTR_1_품번;
	_C_HV_CNTR_2_품번.value = 부품정보_list_v.C_HV_CNTR_2_품번;
	_C_Heating_CNTR_품번.value = 부품정보_list_v.C_Heating_CNTR_품번;
	_C_PRA_품번.value = 부품정보_list_v.C_PRA_품번;
	_C_FUSE_BOX_품번.value = 부품정보_list_v.C_FUSE_BOX_품번;
	_C_LV_W_H_품번.value = 부품정보_list_v.C_LV_W_H_품번;
	_C_HV_W_H_1_품번.value = 부품정보_list_v.C_HV_W_H_1_품번;
	_C_HV_W_H_2_품번.value = 부품정보_list_v.C_HV_W_H_2_품번;
	_C_HV_W_H_3_품번.value = 부품정보_list_v.C_HV_W_H_3_품번;
	_C_HV_W_H_4_품번.value = 부품정보_list_v.C_HV_W_H_4_품번;
	_C_HV_W_H_5_품번.value = 부품정보_list_v.C_HV_W_H_5_품번;
	_C_HV_W_H_6_품번.value = 부품정보_list_v.C_HV_W_H_6_품번;
	_C_HV_W_H_7_품번.value = 부품정보_list_v.C_HV_W_H_7_품번;
	_C_HV_W_H_8_품번.value = 부품정보_list_v.C_HV_W_H_8_품번;
	_C_BUSBAR_품번.value = 부품정보_list_v.C_BUSBAR_품번;
	_C_BMU_품번.value = 부품정보_list_v.C_BMU_품번;
	_C_CMU_1_품번.value = 부품정보_list_v.C_CMU_1_품번;
	_C_CMU_2_품번.value = 부품정보_list_v.C_CMU_2_품번;
	_C_CMU_3_품번.value = 부품정보_list_v.C_CMU_3_품번;
	_C_CMU_4_품번.value = 부품정보_list_v.C_CMU_4_품번;
	_C_CMU_5_품번.value = 부품정보_list_v.C_CMU_5_품번;
	_C_CMU_6_품번.value = 부품정보_list_v.C_CMU_6_품번;
	_C_CMU_7_품번.value = 부품정보_list_v.C_CMU_7_품번;
	_C_CMU_8_품번.value = 부품정보_list_v.C_CMU_8_품번;
	_C_BMA_1_품번.value = 부품정보_list_v.C_BMA_1_품번;
	_C_BMA_2_품번.value = 부품정보_list_v.C_BMA_2_품번;
	_C_BMA_3_품번.value = 부품정보_list_v.C_BMA_3_품번;
	_C_BMA_4_품번.value = 부품정보_list_v.C_BMA_4_품번;
	_C_BMA_5_품번.value = 부품정보_list_v.C_BMA_5_품번;
	_C_BMA_6_품번.value = 부품정보_list_v.C_BMA_6_품번;
	_C_BMA_7_품번.value = 부품정보_list_v.C_BMA_7_품번;
	_C_BMA_8_품번.value = 부품정보_list_v.C_BMA_8_품번;
	_C_BMA_9_품번.value = 부품정보_list_v.C_BMA_9_품번;
	_C_BMA_10_품번.value = 부품정보_list_v.C_BMA_10_품번;
	_C_BMA_11_품번.value = 부품정보_list_v.C_BMA_11_품번;
	_C_BMA_12_품번.value = 부품정보_list_v.C_BMA_12_품번;
	_D_UPR_CASE_품번.value = 부품정보_list_v.D_UPR_CASE_품번;
	_D_LWR_CASE_품번.value = 부품정보_list_v.D_LWR_CASE_품번;
	_D_HV_CNTR_RH_품번.value = 부품정보_list_v.D_HV_CNTR_RH_품번;
	_D_HV_CNTR_LH_품번.value = 부품정보_list_v.D_HV_CNTR_LH_품번;
	_D_RELAY_품번.value = 부품정보_list_v.D_RELAY_품번;
	_D_LV_W_H_품번.value = 부품정보_list_v.D_LV_W_H_품번;
	_D_HV_W_H_1_품번.value = 부품정보_list_v.D_HV_W_H_1_품번;
	_D_HV_W_H_2_품번.value = 부품정보_list_v.D_HV_W_H_2_품번;
	_D_BUSBAR_품번.value = 부품정보_list_v.D_BUSBAR_품번;
	_D_BMU_품번.value = 부품정보_list_v.D_BMU_품번;
	_D_CMU_1_품번.value = 부품정보_list_v.D_CMU_1_품번;
	_D_CMU_2_품번.value = 부품정보_list_v.D_CMU_2_품번;
	_D_BMA_1_품번.value = 부품정보_list_v.D_BMA_1_품번;
	_D_BMA_2_품번.value = 부품정보_list_v.D_BMA_2_품번;
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
	doc.A_Heating_CNTR_QR = _A_Heating_CNTR_QR.value;
	doc.A_PRA_QR = _A_PRA_QR.value;
	doc.A_LV_W_H_QR = _A_LV_W_H_QR.value;
	doc.A_HV_W_H_1_QR = _A_HV_W_H_1_QR.value;
	doc.A_HV_W_H_2_QR = _A_HV_W_H_2_QR.value;
	doc.A_HV_W_H_3_QR = _A_HV_W_H_3_QR.value;
	doc.A_HV_W_H_4_QR = _A_HV_W_H_4_QR.value;
	doc.A_HV_W_H_5_QR = _A_HV_W_H_5_QR.value;
	doc.A_BUSBAR_QR = _A_BUSBAR_QR.value;
	doc.A_BMU_QR = _A_BMU_QR.value;
	doc.A_CMU_1_QR = _A_CMU_1_QR.value;
	doc.A_CMU_2_QR = _A_CMU_2_QR.value;
	doc.A_CMU_3_QR = _A_CMU_3_QR.value;
	doc.A_CMU_4_QR = _A_CMU_4_QR.value;
	doc.A_CMU_5_QR = _A_CMU_5_QR.value;
	doc.A_BMA_1_QR = _A_BMA_1_QR.value;
	doc.A_BMA_2_QR = _A_BMA_2_QR.value;
	doc.A_BMA_3_QR = _A_BMA_3_QR.value;
	doc.A_BMA_4_QR = _A_BMA_4_QR.value;
	doc.A_BMA_5_QR = _A_BMA_5_QR.value;
	doc.B_UPR_CASE_QR = _B_UPR_CASE_QR.value;
	doc.B_LWR_CASE_QR = _B_LWR_CASE_QR.value;
	doc.B_HV_CNTR_QR = _B_HV_CNTR_QR.value;
	doc.B_Heating_CNTR_QR = _B_Heating_CNTR_QR.value;
	doc.B_PRA_QR = _B_PRA_QR.value;
	doc.B_FUSE_BOX_QR = _B_FUSE_BOX_QR.value;
	doc.B_LV_W_H_QR = _B_LV_W_H_QR.value;
	doc.B_HV_W_H_1_QR = _B_HV_W_H_1_QR.value;
	doc.B_HV_W_H_2_QR = _B_HV_W_H_2_QR.value;
	doc.B_HV_W_H_3_QR = _B_HV_W_H_3_QR.value;
	doc.B_HV_W_H_4_QR = _B_HV_W_H_4_QR.value;
	doc.B_HV_W_H_5_QR = _B_HV_W_H_5_QR.value;
	doc.B_HV_W_H_6_QR = _B_HV_W_H_6_QR.value;
	doc.B_HV_W_H_7_QR = _B_HV_W_H_7_QR.value;
	doc.B_HV_W_H_8_QR = _B_HV_W_H_8_QR.value;
	doc.B_HV_W_H_9_QR = _B_HV_W_H_9_QR.value;
	doc.B_HV_W_H_10_QR = _B_HV_W_H_10_QR.value;
	doc.B_BUSBAR_QR = _B_BUSBAR_QR.value;
	doc.B_BMU_QR = _B_BMU_QR.value;
	doc.B_CMU_1_QR = _B_CMU_1_QR.value;
	doc.B_CMU_2_QR = _B_CMU_2_QR.value;
	doc.B_CMU_3_QR = _B_CMU_3_QR.value;
	doc.B_CMU_4_QR = _B_CMU_4_QR.value;
	doc.B_CMU_5_QR = _B_CMU_5_QR.value;
	doc.B_BMA_1_QR = _B_BMA_1_QR.value;
	doc.B_BMA_2_QR = _B_BMA_2_QR.value;
	doc.B_BMA_3_QR = _B_BMA_3_QR.value;
	doc.B_BMA_4_QR = _B_BMA_4_QR.value;
	doc.B_BMA_5_QR = _B_BMA_5_QR.value;
	doc.B_BMA_6_QR = _B_BMA_6_QR.value;
	doc.B_BMA_7_QR = _B_BMA_7_QR.value;
	doc.B_BMA_8_QR = _B_BMA_8_QR.value;
	doc.B_BMA_9_QR = _B_BMA_9_QR.value;
	doc.B_BMA_10_QR = _B_BMA_10_QR.value;
	doc.C_UPR_CASE_QR = _C_UPR_CASE_QR.value;
	doc.C_LWR_CASE_QR = _C_LWR_CASE_QR.value;
	doc.C_HV_CNTR_1_QR = _C_HV_CNTR_1_QR.value;
	doc.C_HV_CNTR_2_QR = _C_HV_CNTR_2_QR.value;
	doc.C_Heating_CNTR_QR = _C_Heating_CNTR_QR.value;
	doc.C_PRA_QR = _C_PRA_QR.value;
	doc.C_FUSE_BOX_QR = _C_FUSE_BOX_QR.value;
	doc.C_LV_W_H_QR = _C_LV_W_H_QR.value;
	doc.C_HV_W_H_1_QR = _C_HV_W_H_1_QR.value;
	doc.C_HV_W_H_2_QR = _C_HV_W_H_2_QR.value;
	doc.C_HV_W_H_3_QR = _C_HV_W_H_3_QR.value;
	doc.C_HV_W_H_4_QR = _C_HV_W_H_4_QR.value;
	doc.C_HV_W_H_5_QR = _C_HV_W_H_5_QR.value;
	doc.C_HV_W_H_6_QR = _C_HV_W_H_6_QR.value;
	doc.C_HV_W_H_7_QR = _C_HV_W_H_7_QR.value;
	doc.C_HV_W_H_8_QR = _C_HV_W_H_8_QR.value;
	doc.C_BUSBAR_QR = _C_BUSBAR_QR.value;
	doc.C_BMU_QR = _C_BMU_QR.value;
	doc.C_CMU_1_QR = _C_CMU_1_QR.value;
	doc.C_CMU_2_QR = _C_CMU_2_QR.value;
	doc.C_CMU_3_QR = _C_CMU_3_QR.value;
	doc.C_CMU_4_QR = _C_CMU_4_QR.value;
	doc.C_CMU_5_QR = _C_CMU_5_QR.value;
	doc.C_CMU_6_QR = _C_CMU_6_QR.value;
	doc.C_CMU_7_QR = _C_CMU_7_QR.value;
	doc.C_CMU_8_QR = _C_CMU_8_QR.value;
	doc.C_BMA_1_QR = _C_BMA_1_QR.value;
	doc.C_BMA_2_QR = _C_BMA_2_QR.value;
	doc.C_BMA_3_QR = _C_BMA_3_QR.value;
	doc.C_BMA_4_QR = _C_BMA_4_QR.value;
	doc.C_BMA_5_QR = _C_BMA_5_QR.value;
	doc.C_BMA_6_QR = _C_BMA_6_QR.value;
	doc.C_BMA_7_QR = _C_BMA_7_QR.value;
	doc.C_BMA_8_QR = _C_BMA_8_QR.value;
	doc.C_BMA_9_QR = _C_BMA_9_QR.value;
	doc.C_BMA_10_QR = _C_BMA_10_QR.value;
	doc.C_BMA_11_QR = _C_BMA_11_QR.value;
	doc.C_BMA_12_QR = _C_BMA_12_QR.value;
	doc.D_UPR_CASE_QR = _D_UPR_CASE_QR.value;
	doc.D_LWR_CASE_QR = _D_LWR_CASE_QR.value;
	doc.D_HV_CNTR_RH_QR = _D_HV_CNTR_RH_QR.value;
	doc.D_HV_CNTR_LH_QR = _D_HV_CNTR_LH_QR.value;
	doc.D_RELAY_QR = _D_RELAY_QR.value;
	doc.D_LV_W_H_QR = _D_LV_W_H_QR.value;
	doc.D_HV_W_H_1_QR = _D_HV_W_H_1_QR.value;
	doc.D_HV_W_H_2_QR = _D_HV_W_H_2_QR.value;
	doc.D_BUSBAR_QR = _D_BUSBAR_QR.value;
	doc.D_BMU_QR = _D_BMU_QR.value;
	doc.D_CMU_1_QR = _D_CMU_1_QR.value;
	doc.D_CMU_2_QR = _D_CMU_2_QR.value;
	doc.D_BMA_1_QR = _D_BMA_1_QR.value;
	doc.D_BMA_2_QR = _D_BMA_2_QR.value;

	doc.A_UPR_CASE_품번 = _A_UPR_CASE_품번.value;
	doc.A_LWR_CASE_품번 = _A_LWR_CASE_품번.value;
	doc.A_S_PLUG_품번 = _A_S_PLUG_품번.value;
	doc.A_SPA_품번 = _A_SPA_품번.value;
	doc.A_HT_CNTR_품번 = _A_HT_CNTR_품번.value;
	doc.A_HV_CNTR_품번 = _A_HV_CNTR_품번.value;
	doc.A_Heating_CNTR_품번 = _A_Heating_CNTR_품번.value;
	doc.A_PRA_품번 = _A_PRA_품번.value;
	doc.A_LV_W_H_품번 = _A_LV_W_H_품번.value;
	doc.A_HV_W_H_1_품번 = _A_HV_W_H_1_품번.value;
	doc.A_HV_W_H_2_품번 = _A_HV_W_H_2_품번.value;
	doc.A_HV_W_H_3_품번 = _A_HV_W_H_3_품번.value;
	doc.A_HV_W_H_4_품번 = _A_HV_W_H_4_품번.value;
	doc.A_HV_W_H_5_품번 = _A_HV_W_H_5_품번.value;
	doc.A_BUSBAR_품번 = _A_BUSBAR_품번.value;
	doc.A_BMU_품번 = _A_BMU_품번.value;
	doc.A_CMU_1_품번 = _A_CMU_1_품번.value;
	doc.A_CMU_2_품번 = _A_CMU_2_품번.value;
	doc.A_CMU_3_품번 = _A_CMU_3_품번.value;
	doc.A_CMU_4_품번 = _A_CMU_4_품번.value;
	doc.A_CMU_5_품번 = _A_CMU_5_품번.value;
	doc.A_BMA_1_품번 = _A_BMA_1_품번.value;
	doc.A_BMA_2_품번 = _A_BMA_2_품번.value;
	doc.A_BMA_3_품번 = _A_BMA_3_품번.value;
	doc.A_BMA_4_품번 = _A_BMA_4_품번.value;
	doc.A_BMA_5_품번 = _A_BMA_5_품번.value;
	doc.B_UPR_CASE_품번 = _B_UPR_CASE_품번.value;
	doc.B_LWR_CASE_품번 = _B_LWR_CASE_품번.value;
	doc.B_HV_CNTR_품번 = _B_HV_CNTR_품번.value;
	doc.B_Heating_CNTR_품번 = _B_Heating_CNTR_품번.value;
	doc.B_PRA_품번 = _B_PRA_품번.value;
	doc.B_FUSE_BOX_품번 = _B_FUSE_BOX_품번.value;
	doc.B_LV_W_H_품번 = _B_LV_W_H_품번.value;
	doc.B_HV_W_H_1_품번 = _B_HV_W_H_1_품번.value;
	doc.B_HV_W_H_2_품번 = _B_HV_W_H_2_품번.value;
	doc.B_HV_W_H_3_품번 = _B_HV_W_H_3_품번.value;
	doc.B_HV_W_H_4_품번 = _B_HV_W_H_4_품번.value;
	doc.B_HV_W_H_5_품번 = _B_HV_W_H_5_품번.value;
	doc.B_HV_W_H_6_품번 = _B_HV_W_H_6_품번.value;
	doc.B_HV_W_H_7_품번 = _B_HV_W_H_7_품번.value;
	doc.B_HV_W_H_8_품번 = _B_HV_W_H_8_품번.value;
	doc.B_HV_W_H_9_품번 = _B_HV_W_H_9_품번.value;
	doc.B_HV_W_H_10_품번 = _B_HV_W_H_10_품번.value;
	doc.B_BUSBAR_품번 = _B_BUSBAR_품번.value;
	doc.B_BMU_품번 = _B_BMU_품번.value;
	doc.B_CMU_1_품번 = _B_CMU_1_품번.value;
	doc.B_CMU_2_품번 = _B_CMU_2_품번.value;
	doc.B_CMU_3_품번 = _B_CMU_3_품번.value;
	doc.B_CMU_4_품번 = _B_CMU_4_품번.value;
	doc.B_CMU_5_품번 = _B_CMU_5_품번.value;
	doc.B_BMA_1_품번 = _B_BMA_1_품번.value;
	doc.B_BMA_2_품번 = _B_BMA_2_품번.value;
	doc.B_BMA_3_품번 = _B_BMA_3_품번.value;
	doc.B_BMA_4_품번 = _B_BMA_4_품번.value;
	doc.B_BMA_5_품번 = _B_BMA_5_품번.value;
	doc.B_BMA_6_품번 = _B_BMA_6_품번.value;
	doc.B_BMA_7_품번 = _B_BMA_7_품번.value;
	doc.B_BMA_8_품번 = _B_BMA_8_품번.value;
	doc.B_BMA_9_품번 = _B_BMA_9_품번.value;
	doc.B_BMA_10_품번 = _B_BMA_10_품번.value;
	doc.C_UPR_CASE_품번 = _C_UPR_CASE_품번.value;
	doc.C_LWR_CASE_품번 = _C_LWR_CASE_품번.value;
	doc.C_HV_CNTR_1_품번 = _C_HV_CNTR_1_품번.value;
	doc.C_HV_CNTR_2_품번 = _C_HV_CNTR_2_품번.value;
	doc.C_Heating_CNTR_품번 = _C_Heating_CNTR_품번.value;
	doc.C_PRA_품번 = _C_PRA_품번.value;
	doc.C_FUSE_BOX_품번 = _C_FUSE_BOX_품번.value;
	doc.C_LV_W_H_품번 = _C_LV_W_H_품번.value;
	doc.C_HV_W_H_1_품번 = _C_HV_W_H_1_품번.value;
	doc.C_HV_W_H_2_품번 = _C_HV_W_H_2_품번.value;
	doc.C_HV_W_H_3_품번 = _C_HV_W_H_3_품번.value;
	doc.C_HV_W_H_4_품번 = _C_HV_W_H_4_품번.value;
	doc.C_HV_W_H_5_품번 = _C_HV_W_H_5_품번.value;
	doc.C_HV_W_H_6_품번 = _C_HV_W_H_6_품번.value;
	doc.C_HV_W_H_7_품번 = _C_HV_W_H_7_품번.value;
	doc.C_HV_W_H_8_품번 = _C_HV_W_H_8_품번.value;
	doc.C_BUSBAR_품번 = _C_BUSBAR_품번.value;
	doc.C_BMU_품번 = _C_BMU_품번.value;
	doc.C_CMU_1_품번 = _C_CMU_1_품번.value;
	doc.C_CMU_2_품번 = _C_CMU_2_품번.value;
	doc.C_CMU_3_품번 = _C_CMU_3_품번.value;
	doc.C_CMU_4_품번 = _C_CMU_4_품번.value;
	doc.C_CMU_5_품번 = _C_CMU_5_품번.value;
	doc.C_CMU_6_품번 = _C_CMU_6_품번.value;
	doc.C_CMU_7_품번 = _C_CMU_7_품번.value;
	doc.C_CMU_8_품번 = _C_CMU_8_품번.value;
	doc.C_BMA_1_품번 = _C_BMA_1_품번.value;
	doc.C_BMA_2_품번 = _C_BMA_2_품번.value;
	doc.C_BMA_3_품번 = _C_BMA_3_품번.value;
	doc.C_BMA_4_품번 = _C_BMA_4_품번.value;
	doc.C_BMA_5_품번 = _C_BMA_5_품번.value;
	doc.C_BMA_6_품번 = _C_BMA_6_품번.value;
	doc.C_BMA_7_품번 = _C_BMA_7_품번.value;
	doc.C_BMA_8_품번 = _C_BMA_8_품번.value;
	doc.C_BMA_9_품번 = _C_BMA_9_품번.value;
	doc.C_BMA_10_품번 = _C_BMA_10_품번.value;
	doc.C_BMA_11_품번 = _C_BMA_11_품번.value;
	doc.C_BMA_12_품번 = _C_BMA_12_품번.value;
	doc.D_UPR_CASE_품번 = _D_UPR_CASE_품번.value;
	doc.D_LWR_CASE_품번 = _D_LWR_CASE_품번.value;
	doc.D_HV_CNTR_RH_품번 = _D_HV_CNTR_RH_품번.value;
	doc.D_HV_CNTR_LH_품번 = _D_HV_CNTR_LH_품번.value;
	doc.D_RELAY_품번 = _D_RELAY_품번.value;
	doc.D_LV_W_H_품번 = _D_LV_W_H_품번.value;
	doc.D_HV_W_H_1_품번 = _D_HV_W_H_1_품번.value;
	doc.D_HV_W_H_2_품번 = _D_HV_W_H_2_품번.value;
	doc.D_BUSBAR_품번 = _D_BUSBAR_품번.value;
	doc.D_BMU_품번 = _D_BMU_품번.value;
	doc.D_CMU_1_품번 = _D_CMU_1_품번.value;
	doc.D_CMU_2_품번 = _D_CMU_2_품번.value;
	doc.D_BMA_1_품번 = _D_BMA_1_품번.value;
	doc.D_BMA_2_품번 = _D_BMA_2_품번.value;

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
	_A_UPR_CASE_품번.onchange = function (event) {
		_A_LWR_CASE_QR.focus();
	};
	_A_LWR_CASE_품번.onchange = function (event) {
		_A_S_PLUG_QR.focus();
	};
	_A_S_PLUG_품번.onchange = function (event) {
		_A_SPA_QR.focus();
	};
	_A_SPA_품번.onchange = function (event) {
		_A_HT_CNTR_QR.focus();
	};
	_A_HT_CNTR_품번.onchange = function (event) {
		_A_HV_CNTR_QR.focus();
	};
	_A_HV_CNTR_품번.onchange = function (event) {
		_A_Heating_CNTR_QR.focus();
	};
	_A_Heating_CNTR_품번.onchange = function (event) {
		_A_PRA_QR.focus();
	};
	_A_PRA_품번.onchange = function (event) {
		_A_LV_W_H_QR.focus();
	};
	_A_LV_W_H_품번.onchange = function (event) {
		_A_HV_W_H_1_QR.focus();
	};
	_A_HV_W_H_1_품번.onchange = function (event) {
		_A_HV_W_H_2_QR.focus();
	};
	_A_HV_W_H_2_품번.onchange = function (event) {
		_A_HV_W_H_3_QR.focus();
	};
	_A_HV_W_H_3_품번.onchange = function (event) {
		_A_HV_W_H_4_QR.focus();
	};
	_A_HV_W_H_4_품번.onchange = function (event) {
		_A_HV_W_H_5_QR.focus();
	};
	_A_HV_W_H_5_품번.onchange = function (event) {
		_A_BUSBAR_QR.focus();
	};
	_A_BUSBAR_품번.onchange = function (event) {
		_A_BMU_QR.focus();
	};
	_A_BMU_품번.onchange = function (event) {
		_A_CMU_1_QR.focus();
	};
	_A_CMU_1_품번.onchange = function (event) {
		_A_CMU_2_QR.focus();
	};
	_A_CMU_2_품번.onchange = function (event) {
		_A_CMU_3_QR.focus();
	};
	_A_CMU_3_품번.onchange = function (event) {
		_A_CMU_4_QR.focus();
	};
	_A_CMU_4_품번.onchange = function (event) {
		_A_CMU_5_QR.focus();
	};
	_A_CMU_5_품번.onchange = function (event) {
		_A_BMA_1_QR.focus();
	};
	_A_BMA_1_품번.onchange = function (event) {
		_A_BMA_2_QR.focus();
	};
	_A_BMA_2_품번.onchange = function (event) {
		_A_BMA_3_QR.focus();
	};
	_A_BMA_3_품번.onchange = function (event) {
		_A_BMA_4_QR.focus();
	};
	_A_BMA_4_품번.onchange = function (event) {
		_A_BMA_5_QR.focus();
	};
	//_A_BMA_5_품번.onchange = function(event) {
}

function auto_focus_B() {
	_B_UPR_CASE_품번.onchange = function (event) {
		_B_LWR_CASE_QR.focus();
	};

	_B_LWR_CASE_품번.onchange = function (event) {
		_B_HV_CNTR_QR.focus();
	};

	_B_HV_CNTR_품번.onchange = function (event) {
		_B_HT_CNTR_QR.focus();
	};

	_B_HT_CNTR_품번.onchange = function (event) {
		_B_Heating_CNTR_QR.focus();
	};

	_B_Heating_CNTR_품번.onchange = function (event) {
		_B_PRA_QR.focus();
	};

	_B_PRA_품번.onchange = function (event) {
		_B_FUSE_BOX_QR.focus();
	};

	_B_FUSE_BOX_품번.onchange = function (event) {
		_B_LV_W_H_QR.focus();
	};

	_B_LV_W_H_품번.onchange = function (event) {
		_B_HV_W_H_1_QR.focus();
	};

	_B_HV_W_H_1_품번.onchange = function (event) {
		_B_HV_W_H_2_QR.focus();
	};

	_B_HV_W_H_2_품번.onchange = function (event) {
		_B_HV_W_H_3_QR.focus();
	};

	_B_HV_W_H_3_품번.onchange = function (event) {
		_B_HV_W_H_4_QR.focus();
	};

	_B_HV_W_H_4_품번.onchange = function (event) {
		_B_HV_W_H_5_QR.focus();
	};

	_B_HV_W_H_5_품번.onchange = function (event) {
		_B_HV_W_H_6_QR.focus();
	};

	_B_HV_W_H_6_품번.onchange = function (event) {
		_B_HV_W_H_7_QR.focus();
	};

	_B_HV_W_H_7_품번.onchange = function (event) {
		_B_HV_W_H_8_QR.focus();
	};

	_B_HV_W_H_8_품번.onchange = function (event) {
		_B_HV_W_H_9_QR.focus();
	};

	_B_HV_W_H_9_품번.onchange = function (event) {
		_B_HV_W_H_10_QR.focus();
	};

	_B_HV_W_H_10_품번.onchange = function (event) {
		_B_BUSBAR_QR.focus();
	};

	_B_BUSBAR_품번.onchange = function (event) {
		_B_BMU_QR.focus();
	};

	_B_BMU_품번.onchange = function (event) {
		_B_CMU_1_QR.focus();
	};

	_B_CMU_1_품번.onchange = function (event) {
		_B_CMU_2_QR.focus();
	};

	_B_CMU_2_품번.onchange = function (event) {
		_B_CMU_3_QR.focus();
	};

	_B_CMU_3_품번.onchange = function (event) {
		_B_CMU_4_QR.focus();
	};

	_B_CMU_4_품번.onchange = function (event) {
		_B_CMU_5_QR.focus();
	};

	_B_CMU_5_품번.onchange = function (event) {
		_B_BMA_1_QR.focus();
	};

	_B_BMA_1_품번.onchange = function (event) {
		_B_BMA_2_QR.focus();
	};

	_B_BMA_2_품번.onchange = function (event) {
		_B_BMA_3_QR.focus();
	};

	_B_BMA_3_품번.onchange = function (event) {
		_B_BMA_4_QR.focus();
	};

	_B_BMA_4_품번.onchange = function (event) {
		_B_BMA_5_QR.focus();
	};

	_B_BMA_5_품번.onchange = function (event) {
		_B_BMA_6_QR.focus();
	};

	_B_BMA_6_품번.onchange = function (event) {
		_B_BMA_7_QR.focus();
	};

	_B_BMA_7_품번.onchange = function (event) {
		_B_BMA_8_QR.focus();
	};

	_B_BMA_8_품번.onchange = function (event) {
		_B_BMA_9_QR.focus();
	};

	_B_BMA_9_품번.onchange = function (event) {
		_B_BMA_10_QR.focus();
	};

	//_B_BMA_10_품번.onchange = function(event) {
	//	_B_LWR_CASE_QR.focus();
	//}
}

function auto_focus_C() {
	_C_UPR_CASE_품번.onchange = function (event) {
		_C__QR.focus();
	};

	_C_LWR_CASE_품번.onchange = function (event) {
		_C_HV_CNTR_1_QR.focus();
	};

	_C_HV_CNTR_1_품번.onchange = function (event) {
		_C_HC_CNTR_2_QR.focus();
	};

	_C_HV_CNTR_2_품번.onchange = function (event) {
		_C_Heating_CNTR_QR.focus();
	};

	_C_Heating_CNTR_품번.onchange = function (event) {
		_C_PRA_QR.focus();
	};

	_C_PRA_품번.onchange = function (event) {
		_C_FUSE_BOX_QR.focus();
	};

	_C_FUSE_BOX_품번.onchange = function (event) {
		_C_LV_W_H_QR.focus();
	};

	_C_LV_W_H_품번.onchange = function (event) {
		_C_HV_W_H_1_QR.focus();
	};

	_C_HV_W_H_1_품번.onchange = function (event) {
		_C_HV_W_H_2_QR.focus();
	};

	_C_HV_W_H_2_품번.onchange = function (event) {
		_C_HV_W_H_3_QR.focus();
	};

	_C_HV_W_H_3_품번.onchange = function (event) {
		_C_HV_W_H_4_QR.focus();
	};

	_C_HV_W_H_4_품번.onchange = function (event) {
		_C_HV_W_H_5_QR.focus();
	};

	_C_HV_W_H_5_품번.onchange = function (event) {
		_C_HV_W_H_6_QR.focus();
	};

	_C_HV_W_H_6_품번.onchange = function (event) {
		_C_HV_W_H_7_QR.focus();
	};

	_C_HV_W_H_7_품번.onchange = function (event) {
		_C_HV_W_H_8_QR.focus();
	};

	_C_HV_W_H_8_품번.onchange = function (event) {
		_C_BUSBAR_QR.focus();
	};

	_C_BUSBAR_품번.onchange = function (event) {
		_C_BMU_QR.focus();
	};

	_C_BMU_품번.onchange = function (event) {
		_C_CMU_1_QR.focus();
	};

	_C_CMU_1_품번.onchange = function (event) {
		_C_CMU_2_QR.focus();
	};

	_C_CMU_2_품번.onchange = function (event) {
		_C_CMU_3_QR.focus();
	};

	_C_CMU_3_품번.onchange = function (event) {
		_C_CMU_4_QR.focus();
	};

	_C_CMU_4_품번.onchange = function (event) {
		_C_CMU_5_QR.focus();
	};

	_C_CMU_5_품번.onchange = function (event) {
		_C_CMU_6_QR.focus();
	};

	_C_CMU_6_품번.onchange = function (event) {
		_C_CMU_7_QR.focus();
	};

	_C_CMU_7_품번.onchange = function (event) {
		_C_CMU_8_QR.focus();
	};

	_C_CMU_8_품번.onchange = function (event) {
		_C_BMA_1_QR.focus();
	};

	_C_BMA_1_품번.onchange = function (event) {
		_C_BMA_2_QR.focus();
	};

	_C_BMA_2_품번.onchange = function (event) {
		_C_BMA_3_QR.focus();
	};

	_C_BMA_3_품번.onchange = function (event) {
		_C_BMA_4_QR.focus();
	};

	_C_BMA_4_품번.onchange = function (event) {
		_C_BMA_5_QR.focus();
	};

	_C_BMA_5_품번.onchange = function (event) {
		_C_BMA_6_QR.focus();
	};

	_C_BMA_6_품번.onchange = function (event) {
		_C_BMA_7_QR.focus();
	};

	_C_BMA_7_품번.onchange = function (event) {
		_C_BMA_8_QR.focus();
	};

	_C_BMA_8_품번.onchange = function (event) {
		_C_BMA_9_QR.focus();
	};

	_C_BMA_9_품번.onchange = function (event) {
		_C_BMA_10_QR.focus();
	};

	_C_BMA_10_품번.onchange = function (event) {
		_C_BMA_11_QR.focus();
	};

	_C_BMA_11_품번.onchange = function (event) {
		_C_BMA_12_QR.focus();
	};

	//_C_BMA_12_품번.onchange = function(event) {
	//	_C_BMA_2_QR.focus();
	//}
}

function auto_focus_D() {
	_D_UPR_CASE_품번.onchange = function (event) {
		_D_LWR_CASE_QR.focus();
	};

	_D_LWR_CASE_품번.onchange = function (event) {
		_D_HV_CNTR_RH_QR.focus();
	};

	_D_HV_CNTR_RH_품번.onchange = function (event) {
		_D_HV_CNTR_LH_QR.focus();
	};

	_D_HV_CNTR_LH_품번.onchange = function (event) {
		_D_RELAY_QR.focus();
	};

	_D_RELAY_품번.onchange = function (event) {
		_D_LV_W_H_QR.focus();
	};

	_D_LV_W_H_품번.onchange = function (event) {
		_D_HV_W_H_1_QR.focus();
	};

	_D_HV_W_H_1_품번.onchange = function (event) {
		_D_HV_W_H_2_QR.focus();
	};

	_D_HV_W_H_2_품번.onchange = function (event) {
		_D_BUSBAR_QR.focus();
	};

	_D_BUSBAR_품번.onchange = function (event) {
		_D_BMU_QR.focus();
	};

	_D_BMU_품번.onchange = function (event) {
		_D_CMU_1_QR.focus();
	};

	_D_CMU_1_품번.onchange = function (event) {
		_D_CMU_2_QR.focus();
	};

	_D_CMU_2_품번.onchange = function (event) {
		_D_BMA_1_QR.focus();
	};

	_D_BMA_1_품번.onchange = function (event) {
		_D_BMA_2_QR.focus();
	};

	//_D_BMA_2_품번.onchange = function(event) {
	//}
}

function auto_focus_AA() {
	_A_UPR_CASE_QR.onchange = function (event) {
		_A_UPR_CASE_품번.focus();
	};
	_A_LWR_CASE_QR.onchange = function (event) {
		_A_LWR_CASE_품번.focus();
	};
	_A_S_PLUG_QR.onchange = function (event) {
		_A_S_PLUG_품번.focus();
	};
	_A_SPA_QR.onchange = function (event) {
		_A_SPA_품번.focus();
	};
	_A_HT_CNTR_QR.onchange = function (event) {
		_A_HT_CNTR_품번.focus();
	};
	_A_HV_CNTR_QR.onchange = function (event) {
		_A_HV_CNTR_품번.focus();
	};
	_A_Heating_CNTR_QR.onchange = function (event) {
		_A_Heating_CNTR_품번.focus();
	};
	_A_PRA_QR.onchange = function (event) {
		_A_PRA_품번.focus();
	};
	_A_LV_W_H_QR.onchange = function (event) {
		_A_LV_W_H_품번.focus();
	};
	_A_HV_W_H_1_QR.onchange = function (event) {
		_A_HV_W_H_1_품번.focus();
	};
	_A_HV_W_H_2_QR.onchange = function (event) {
		_A_HV_W_H_2_품번.focus();
	};
	_A_HV_W_H_3_QR.onchange = function (event) {
		_A_HV_W_H_3_품번.focus();
	};
	_A_HV_W_H_4_QR.onchange = function (event) {
		_A_HV_W_H_4_품번.focus();
	};
	_A_HV_W_H_5_QR.onchange = function (event) {
		_A_HV_W_H_5_품번.focus();
	};
	_A_BUSBAR_QR.onchange = function (event) {
		_A_BUSBAR_품번.focus();
	};
	_A_BMU_QR.onchange = function (event) {
		_A_BMU_품번.focus();
	};
	_A_CMU_1_QR.onchange = function (event) {
		_A_CMU_1_품번.focus();
	};
	_A_CMU_2_QR.onchange = function (event) {
		_A_CMU_2_품번.focus();
	};
	_A_CMU_3_QR.onchange = function (event) {
		_A_CMU_3_품번.focus();
	};
	_A_CMU_4_QR.onchange = function (event) {
		_A_CMU_4_품번.focus();
	};
	_A_CMU_5_QR.onchange = function (event) {
		_A_CMU_5_품번.focus();
	};
	_A_BMA_1_QR.onchange = function (event) {
		_A_BMA_1_품번.focus();
	};
	_A_BMA_2_QR.onchange = function (event) {
		_A_BMA_2_품번.focus();
	};
	_A_BMA_3_QR.onchange = function (event) {
		_A_BMA_3_품번.focus();
	};
	_A_BMA_4_QR.onchange = function (event) {
		_A_BMA_4_품번.focus();
	};
	_A_BMA_5_QR.onchange = function (event) {
		_A_BMA_5_품번.focus();
	};
}

function auto_focus_BB() {
	_B_UPR_CASE_QR.onchange = function (event) {
		_B_UPR_CASE_품번.focus();
	};
	_B_LWR_CASE_QR.onchange = function (event) {
		_B_LWR_CASE_품번.focus();
	};
	_B_HV_CNTR_QR.onchange = function (event) {
		_B_HV_CNTR_품번.focus();
	};
	_B_HT_CNTR_QR.onchange = function (event) {
		_B_HT_CNTR_품번.focus();
	};
	_B_Heating_CNTR_QR.onchange = function (event) {
		_B_Heating_CNTR_품번.focus();
	};
	_B_PRA_QR.onchange = function (event) {
		_B_PRA_품번.focus();
	};
	_B_FUSE_BOX_QR.onchange = function (event) {
		_B_FUSE_BOX_품번.focus();
	};
	_B_LV_W_H_QR.onchange = function (event) {
		_B_LV_W_H_품번.focus();
	};
	_B_HV_W_H_1_QR.onchange = function (event) {
		_B_HV_W_H_1_품번.focus();
	};
	_B_HV_W_H_2_QR.onchange = function (event) {
		_B_HV_W_H_2_품번.focus();
	};
	_B_HV_W_H_3_QR.onchange = function (event) {
		_B_HV_W_H_3_품번.focus();
	};
	_B_HV_W_H_4_QR.onchange = function (event) {        
		_B_HV_W_H_4_품번.focus();       
	};
	_B_HV_W_H_5_QR.onchange = function (event) {          
		_B_HV_W_H_5_품번.focus();          
	};
	_B_HV_W_H_6_QR.onchange = function (event) {         
		_B_HV_W_H_6_품번.focus();         
	};
	_B_HV_W_H_7_QR.onchange = function (event) {         
		_B_HV_W_H_7_품번.focus();         
	};
	_B_HV_W_H_8_QR.onchange = function (event) {         
		_B_HV_W_H_8_품번.focus();         
	};
	_B_HV_W_H_9_QR.onchange = function (event) {         
		_B_HV_W_H_9_품번.focus();         
	};
	_B_HV_W_H_10_QR.onchange = function (event) {  
		_B_HV_W_H_10_품번.focus();  
	};
	_B_BUSBAR_QR.onchange = function (event) {
		_B_BUSBAR_품번.focus();
	};
	_B_BMU_QR.onchange = function (event) {
		_B_BMU_품번.focus();
	};
	_B_CMU_1_QR.onchange = function (event) {
		_B_CMU_1_품번.focus();
	};
	_B_CMU_2_QR.onchange = function (event) {             
		_B_CMU_2_품번.focus();             
	};
	_B_CMU_3_QR.onchange = function (event) {        
		_B_CMU_3_품번.focus();        
	};
	_B_CMU_4_QR.onchange = function (event) {             
		_B_CMU_4_품번.focus();             
	};
	_B_CMU_5_QR.onchange = function (event) {             
		_B_CMU_5_품번.focus();             
	};
	_B_BMA_1_QR.onchange = function (event) {             
		_B_BMA_1_품번.focus();             
	};
	_B_BMA_2_QR.onchange = function (event) {             
		_B_BMA_2_품번.focus();             
	};
	_B_BMA_3_QR.onchange = function (event) {             
		_B_BMA_3_품번.focus();             
	};
	_B_BMA_4_QR.onchange = function (event) {             
		_B_BMA_4_품번.focus();             
	};
	_B_BMA_5_QR.onchange = function (event) {             
		_B_BMA_5_품번.focus();             
	};
	_B_BMA_6_QR.onchange = function (event) {             
		_B_BMA_6_품번.focus();             
	};
	_B_BMA_7_QR.onchange = function (event) {             
		_B_BMA_7_품번.focus();             
	};
	_B_BMA_8_QR.onchange = function (event) {             
		_B_BMA_8_품번.focus();             
	};
	_B_BMA_9_QR.onchange = function (event) {            
		_B_BMA_9_품번.focus();             
	};
	_B_BMA_10_QR.onchange = function (event) {  
		_B_BMA_10_품번.focus();  
	};
}

function auto_focus_CC() {
	_C_UPR_CASE_QR.onchange = function (event) {
		_C_UPR_CASE_품번.focus();
	};
	_C_LWR_CASE_QR.onchange = function (event) {
		_C_LWR_CASE_품번.focus();
	};
	_C_HV_CNTR_1_QR.onchange = function (event) {
		_C_HV_CNTR_1_품번.focus();
	};
	_C_HV_CNTR_2_QR.onchange = function (event) {
		_C_HV_CNTR_2_품번.focus();
	};
	_C_Heating_CNTR_QR.onchange = function (event) {
		_C_Heating_CNTR_품번.focus();
	};
	_C_PRA_QR.onchange = function (event) {
		_C_PRA_품번.focus();
	};
	_C_FUSE_BOX_QR.onchange = function (event) {
		_C_FUSE_BOX_품번.focus();
	};
	_C_LV_W_H_QR.onchange = function (event) {
		_C_LV_W_H_품번.focus();
	};
	_C_HV_W_H_1_QR.onchange = function (event) {
		_C_HV_W_H_1_품번.focus();
	};
	_C_HV_W_H_2_QR.onchange = function (event) {
		_C_HV_W_H_2_품번.focus();
	};
	_C_HV_W_H_3_QR.onchange = function (event) {
		_C_HV_W_H_3_품번.focus();
	};
	_C_HV_W_H_4_QR.onchange = function (event) {
		_C_HV_W_H_4_품번.focus();
	};
	_C_HV_W_H_5_QR.onchange = function (event) {
		_C_HV_W_H_5_품번.focus();
	};
	_C_HV_W_H_6_QR.onchange = function (event) {
		_C_HV_W_H_6_품번.focus();
	};
	_C_HV_W_H_7_QR.onchange = function (event) {
		_C_HV_W_H_7_품번.focus();
	};
	_C_HV_W_H_8_QR.onchange = function (event) {
		_C_HV_W_H_8_품번.focus();
	};
	_C_BUSBAR_QR.onchange = function (event) {
		_C_BUSBAR_품번.focus();
	};
	_C_BMU_QR.onchange = function (event) {
		_C_BMU_품번.focus();
	};
	_C_CMU_1_QR.onchange = function (event) {             
		_C_CMU_1_품번.focus();             
	};
	_C_CMU_2_QR.onchange = function (event) {             
		_C_CMU_2_품번.focus();             
	};
	_C_CMU_3_QR.onchange = function (event) {             
		_C_CMU_3_품번.focus();             
	};
	_C_CMU_4_QR.onchange = function (event) {             
		_C_CMU_4_품번.focus();             
	};
	_C_CMU_5_QR.onchange = function (event) {             
		_C_CMU_5_품번.focus();             
	};
	_C_CMU_6_QR.onchange = function (event) {             
		_C_CMU_6_품번.focus();             
	};
	_C_CMU_7_QR.onchange = function (event) {             
		_C_CMU_7_품번.focus();             
	};
	_C_CMU_8_QR.onchange = function (event) {             
		_C_CMU_8_품번.focus();             
	};
	_C_BMA_1_QR.onchange = function (event) {             
		_C_BMA_1_품번.focus();             
	};
	_C_BMA_2_QR.onchange = function (event) {             
		_C_BMA_2_품번.focus();             
	};
	_C_BMA_3_QR.onchange = function (event) {             
		_C_BMA_3_품번.focus();             
	};
	_C_BMA_4_QR.onchange = function (event) {             
		_C_BMA_4_품번.focus();             
	};
	_C_BMA_5_QR.onchange = function (event) {             
		_C_BMA_5_품번.focus();             
	};
	_C_BMA_6_QR.onchange = function (event) {             
		_C_BMA_6_품번.focus();             
	};
	_C_BMA_7_QR.onchange = function (event) {             
		_C_BMA_7_품번.focus();             
	};
	_C_BMA_8_QR.onchange = function (event) {             
		_C_BMA_8_품번.focus();             
	};
	_C_BMA_9_QR.onchange = function (event) {             
		_C_BMA_9_품번.focus();             
	};
	_C_BMA_10_QR.onchange = function (event) {
		_C_BMA_10_품번.focus();
	};
	_C_BMA_11_QR.onchange = function (event) {
		_C_BMA_11_품번.focus();
	};
	_C_BMA_12_QR.onchange = function (event) {
		_C_BMA_12_품번.focus();
	};
}

function auto_focus_DD() {
	_D_UPR_CASE_QR.onchange = function (event) {
		_D_UPR_CASE_품번.focus();
	};
	_D_LWR_CASE_QR.onchange = function (event) {
		_D_LWR_CASE_품번.focus();
	};
	_D_HV_CNTR_RH_QR.onchange = function (event) {
		_D_HV_CNTR_RH_품번.focus();
	};
	_D_HV_CNTR_LH_QR.onchange = function (event) {
		_D_HV_CNTR_LH_품번.focus();
	};
	_D_RELAY_QR.onchange = function (event) {
		_D_RELAY_품번.focus();
	};
	_D_LV_W_H_QR.onchange = function (event) {
		_D_LV_W_H_품번.focus();
	};
	_D_HV_W_H_1_QR.onchange = function (event) {
		_D_HV_W_H_1_품번.focus();
	};
	_D_HV_W_H_2_QR.onchange = function (event) {
		_D_HV_W_H_2_품번.focus();
	};
	_D_BUSBAR_QR.onchange = function (event) {
		_D_BUSBAR_품번.focus();
	};
	_D_BMU_QR.onchange = function (event) {
		_D_BMU_품번.focus();
	};
	_D_CMU_1_QR.onchange = function (event) {
		_D_CMU_1_품번.focus();
	};
	_D_CMU_2_QR.onchange = function (event) {
		_D_CMU_2_품번.focus();
	};
	_D_BMA_1_QR.onchange = function (event) {
		_D_BMA_1_품번.focus();
	};
	_D_BMA_2_QR.onchange = function (event) {
		_D_BMA_2_품번.focus();
	};
}

