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
	_B_FUSE_QR.value = 부품정보_list_v.B_FUSE_QR;
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
	_B_FUSE_품번.value = 부품정보_list_v.B_FUSE_품번;
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
		if(_C_UPR_CASE_QR.value != '' && _C_UPR_CASE_품번.value != '') { 
			_C_UPR_CASE.style.backgroundColor = 'salmon';
			_C_UPR_CASE.style.color = 'white';
		}
	}

	_D_LWR_CASE_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_LWR_CASE_품번.focus();
		if(_C_LWR_CASE_QR.value != '' && _C_LWR_CASE_품번.value != '') { 
			_C_LWR_CASE.style.backgroundColor = 'salmon';
			_C_LWR_CASE.style.color = 'white';
		}
	}

	_D_HV_CNTR_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_1_품번.focus();
		if(_C_HV_CNTR_1_QR.value != '' && _C_HV_CNTR_1_품번.value != '') { 
			_C_HV_CNTR_1.style.backgroundColor = 'salmon';
			_C_HV_CNTR_1.style.color = 'white';
		}
	}

	_D_HV_CNTR_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_2_품번.focus();
		if(_C_HV_CNTR_2_QR.value != '' && _C_HV_CNTR_2_품번.value != '') { 
			_C_HV_CNTR_2.style.backgroundColor = 'salmon';
			_C_HV_CNTR_2.style.color = 'white';
		}
	}

	_D_RELAY_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_RELAY_품번.focus();
		if(_C_RELAY_QR.value != '' && _C_RELAY_품번.value != '') { 
			_C_RELAY.style.backgroundColor = 'salmon';
			_C_RELAY.style.color = 'white';
		}
	}

	_D_LV_W_H_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_LV_W_H_품번.focus();
		if(_C_LV_W_H_QR.value != '' && _C_LV_W_H_품번.value != '') { 
			_C_LV_W_H.style.backgroundColor = 'salmon';
			_C_LV_W_H.style.color = 'white';
		}
	}

	_D_HV_W_H_1_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_1_품번.focus();
		if(_D_HV_W_H_1_QR.value != '' && _D_HV_W_H_1_품번.value != '') { 
			_C_HV_W_H_1.style.backgroundColor = 'salmon';
			_C_HV_W_H_1.style.color = 'white';
		}
	}

	_D_HV_W_H_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_2_품번.focus();
		if(_D_HV_W_H_2_QR.value != '' && _D_HV_W_H_2_품번.value != '') { 
			_C_HV_W_H_2.style.backgroundColor = 'salmon';
			_C_HV_W_H_2.style.color = 'white';
		}
	}

	_D_BMU_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D_BMU_품번.focus();
		if(_D_BMU_QR.value != '' && _D_BMU_품번.value != '') { 
			_C_BMU.style.backgroundColor = 'salmon';
			_C_BMU.style.color = 'white';
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
		if(_D2_HV_W_H_1_QR.value != '' && _D2_HV_W_H_2_품번.value != '') { 
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
		if(_C_UPR_CASE_QR.value != '' && _C_UPR_CASE_품번.value != '') { 
			_C_UPR_CASE.style.backgroundColor = 'salmon';
			_C_UPR_CASE.style.color = 'white';
		}
	}

	_D_LWR_CASE_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_1_QR.focus();
		if(_C_LWR_CASE_QR.value != '' && _C_LWR_CASE_품번.value != '') { 
			_C_LWR_CASE.style.backgroundColor = 'salmon';
			_C_LWR_CASE.style.color = 'white';
		}
	}

	_D_HV_CNTR_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_CNTR_2_QR.focus();
		if(_C_HV_CNTR_1_QR.value != '' && _C_HV_CNTR_1_품번.value != '') { 
			_C_HV_CNTR_1.style.backgroundColor = 'salmon';
			_C_HV_CNTR_1.style.color = 'white';
		}
	}

	_D_HV_CNTR_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_RELAY_QR.focus();
		if(_C_HV_CNTR_2_QR.value != '' && _C_HV_CNTR_2_품번.value != '') { 
			_C_HV_CNTR_2.style.backgroundColor = 'salmon';
			_C_HV_CNTR_2.style.color = 'white';
		}
	}

	_D_RELAY_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_LV_W_H_QR.focus();
		if(_C_RELAY_QR.value != '' && _C_RELAY_품번.value != '') { 
			_C_RELAY.style.backgroundColor = 'salmon';
			_C_RELAY.style.color = 'white';
		}
	}

	_D_LV_W_H_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_1_QR.focus();
		if(_C_LV_W_H_QR.value != '' && _C_LV_W_H_품번.value != '') { 
			_C_LV_W_H.style.backgroundColor = 'salmon';
			_C_LV_W_H.style.color = 'white';
		}
	}

	_D_HV_W_H_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_HV_W_H_2_QR.focus();
		if(_D_HV_W_H_1_QR.value != '' && _D_HV_W_H_1_품번.value != '') { 
			_C_HV_W_H_1.style.backgroundColor = 'salmon';
			_C_HV_W_H_1.style.color = 'white';
		}
	}

	_D_HV_W_H_2_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_BMU_QR.focus();
		if(_D_HV_W_H_2_QR.value != '' && _D_HV_W_H_2_품번.value != '') { 
			_C_HV_W_H_2.style.backgroundColor = 'salmon';
			_C_HV_W_H_2.style.color = 'white';
		}
	}

	_D_BMU_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D_CMU_1_QR.focus();
		if(_D_BMU_QR.value != '' && _D_BMU_품번.value != '') { 
			_C_BMU.style.backgroundColor = 'salmon';
			_C_BMU.style.color = 'white';
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

	_D_MODULE_2_QR.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_HV_W_H_1_QR.focus();
		if(_D_MODULE_2_QR.value != '' && _D_MODULE_2_품번.value != '') { 
			_D_MODULE_2.style.backgroundColor = 'salmon';
			_D_MODULE_2.style.color = 'white';
		}
	}

	_D2_HV_W_H_1_품번.onkeydown = function (event) {
		if(event.keyCode == 13) _D2_CMU_1_QR.focus();
		if(_D2_HV_W_H_1_QR.value != '' && _D2_HV_W_H_2_품번.value != '') { 
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
		if(event.keyCode == 13) _D2_MODULE_1_QR.focus();
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
