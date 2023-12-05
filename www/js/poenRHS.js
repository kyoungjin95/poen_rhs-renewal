const DELAY = 1; 
const DELAY_SYS = 5000; 
const 계정 = '계정';
const BSA재제조 = 'BSA재제조';
const 입고 = '입고';
const 세척 = '세척';
const 기초검사 = '기초검사';
const 성능검사 = '성능검사';
const EOL = 'EOL';
const 출하정보 = '출하정보';
const 분해조립 = '분해조립';
const 신품정보 = '신품정보';
const 고품정보 = '고품정보';
const 특이사항 = '특이사항';
const 교체부품상세1 = '교체부품상세1';
const 교체부품상세2 = '교체부품상세2';
const 교체부품상세3 = '교체부품상세3';
const 교체부품상세4 = '교체부품상세4';
const 교체부품상세5 = '교체부품상세5';
const 교체부품상세6 = '교체부품상세6';
const 교체부품상세7 = '교체부품상세7';
const 교체부품상세8 = '교체부품상세8';
const 교체부품상세9 = '교체부품상세9';
const 교체부품상세10 = '교체부품상세10';
const 자재입출고 = '자재입출고';
const 구장재고 = '구장재고';
const 입고_pic = '입고_pic';
const 세척_pic = '세척_pic';
const 기초검사_pic = '기초검사_pic';
const 분해조립_pic = '분해조립_pic';
const 성능검사_pic = '성능검사_pic';
const EOL_pic = 'EOL_pic';
const 특이사항_pic = '특이사항_pic';
const 출하_pic = '출하_pic';
const 반품입고_pic = '반품입고_pic';
const 재출하_pic = '재출하_pic';
const 완전분해_pic = '완전분해_pic';
const 폐기_pic = '폐기_pic';
const 기초보고서 = '기초보고서';
const 완료보고서 = '완료보고서';
const 부품정보_list = '부품정보_list';

var BSA재제조_v = [];
var 입고_v = [];
var 세척_v = [];
var 기초검사_v = [];
var 성능검사_v = [];
var EOL_v = [];
var 출하정보_v = [];
var 분해조립_v = [];
var 신품정보_v = [];
var 고품정보_v = [];
var 특이사항_v = [];
var 교체부품상세1_v = [];
var 교체부품상세2_v = [];
var 교체부품상세3_v = [];
var 교체부품상세4_v = [];
var 교체부품상세5_v = [];
var 교체부품상세6_v = [];
var 교체부품상세7_v = [];
var 교체부품상세8_v = [];
var 교체부품상세9_v = [];
var 교체부품상세10_v = [];
var 자재입출고_v = [];
var 구장재고_v = [];
var 입고_pic_v = [];
var 세척_pic_v = [];
var 기초검사_pic_v = [];
var 분해조립_pic_v = [];
var 성능검사_pic_v = [];
var EOL_pic_v = [];
var 특이사항_pic_v = [];
var 출하_pic_v = [];
var 반품입고_pic_v = [];
var 재출하_pic_v = [];
var 완전분해_pic_v = [];
var 폐기_pic_v = [];
var 기초보고서_v = [];
var 완료보고서_v = [];
var 계정_v = [];
var 부품정보_list_v = [];

var BSA재제조_cnt = 0;
var 입고_cnt = 0;
var 세척_cnt = 0;
var 기초검사_cnt = 0;
var 성능검사_cnt = 0;
var EOL_cnt = 0;
var 출하정보_cnt = 0;
var 분해조립_cnt = 0;
var 신품정보_cnt = 0;
var 고품정보_cnt = 0;
var 특이사항_cnt = 0;
var 교체부품상세1_cnt = 0;
var 교체부품상세2_cnt = 0;
var 교체부품상세3_cnt = 0;
var 교체부품상세4_cnt = 0;
var 교체부품상세5_cnt = 0;
var 교체부품상세6_cnt = 0;
var 교체부품상세7_cnt = 0;
var 교체부품상세8_cnt = 0;
var 교체부품상세9_cnt = 0;
var 교체부품상세10_cnt = 0;
var 자재입출고_cnt = 0;
var 구장재고_cnt = 0;
var 입고_pic_cnt = 0;
var 세척_pic_cnt = 0;
var 기초검사_pic_cnt = 0;
var 분해조립_pic_cnt = 0;
var 성능검사_pic_cnt = 0;
var EOL_pic_cnt = 0;
var 특이사항_pic_cnt = 0;
var 출하_pic_cnt = 0;
var 반품입고_pic_cnt = 0;
var 재출하_pic_cnt = 0;
var 완전분해_pic_cnt = 0;
var 폐기_pic_cnt = 0;
var 기초보고서_cnt = 0;
var 완료보고서_cnt = 0;
var 계정_cnt = 0;
var 부품정보_list_cnt = 0;

var option_입고_cnt = 0;
var option_세척_cnt = 0;
var option_기초검사_cnt = 0;
var option_성능검사_cnt = 0;
var option_EOL_cnt = 0;
var option_출하정보_cnt = 0;
var option_출하_cnt = 0;
var option_입고당일_cnt = 0;
var option_세척당일_cnt = 0;
var option_기초검사당일_cnt = 0;
var option_성능검사당일_cnt = 0;
var option_EOL당일_cnt = 0;
var option_출하정보당일_cnt = 0;
var option_출하당일_cnt = 0;

var 관리번호 = '';
var 차종 = '';
var 교체부품상세No = '교체부품상세1';
var worker = '';
var level = '';
var flag_loaded = false;

const 계정_doc = {
	id: '', 
	passwd: '', 
	level: ''
};

const BSA재제조_doc = {
	관리번호: '', 
	재제조번호: '',
	구분: '',
	차종: '', 
	품번: '', 
	RO_no: '', 
	공정단계: '', 
	적재No: '', 
	입고: '', 
	제조투입: '', 
	세척투입일: '',
	세척: '', 
	기초검사투입일: '',
	기초검사: '', 
	분해조립투입일: '',
	분해조립: '', 
	성능검사투입일: '',
	성능검사: '', 
	EOL투입일: '',
	EOL: '',
	QR_Label: '',
	출하검사: '', 
	납품처: '',
	출하: '',
	소재지: '',
	마지막충전일: '',
	반품입고: '',
	재출하: '',
	완전분해: '',
	완전분해사유: '',
	폐기: '',
	폐기사유: '',
	출하예약: '',
	렉번호: ''
};

const 입고_doc = {
	관리번호: '', 
	입고일 : '',
	입고처 : '',
	구분 : '',
	차종: '', 
	품번: '', 
	RO_no : ''
};

const 세척_doc = {
	관리번호: '', 
	공정입고일: '',
	공정완료일: '',
	어퍼케이스재사용가능: '',
	기밀검사_케이스: '',
	기밀검사_케이스_특이사항: '',
	특이사항: ''
};

const 기초검사_doc = {
	관리번호: '',
	공정입고일: '',
	RO_no: '', 
	VIN: '',
	랙번호: '',
	QRCode: '',
	주행거리: '',
	차량번호: '',
	육안검사_외부: '',
	육안검사_외부_특이사항: '',
	육안검사_내부: '',
	육안검사_내부_특이사항: '',
	기밀검사_냉각유로: '',
	기밀검사_냉각유로_특이사항: '',
	절연검사_Plus: '',
	절연검사_Minus: '',
	통신검사_DTC코드1: '',
	통신검사_DTC코드2: '',
	통신검사_DTC코드3: '',
	통신검사_DTC코드4: '',
	통신검사_DTC코드5: '',
	통신검사_DTC코드6: '',
	통신검사_DTC코드7: '',
	통신검사_DTC코드8: '',
	통신검사_DTC코드9: '',
	통신검사_DTC코드10: '',
	통신검사_팩전압: '',
	통신검사_셀전압편차: '',
	통신검사_릴레이구동: '',
	BSA생산일자: '',
	BMA_ROM_ID: '',
	고장현상코드: '',
	고장현상명: '',
	문제Cell_No: '',
	문제BMA_No: '',
	문제BMA_cnt: '',
	공정완료일: '',
	요청사항: '',
	비고: '',
	센터진단내용: '',
	검사자: ''
};

const 분해조립_doc = {
	관리번호: '',
	공정입고일: '',
	BMU1: '',
	BMU2: '',
	BMU3: '',
	BMU4: '',
	BMU5: '',
	BMU6: '',
	BMU7: '',
	BMU8: '',
	BMU9: '',
	BMU10: '',
	CMU1 : '',
	CMU2 : '',
	CMU3 : '',
	CMU4 : '',
	CMU5 : '',
	CMU6 : '',
	CMU7 : '',
	CMU8 : '',
	CMU9 : '',
	CMU10 : '',
	PRA1 : '',
	PRA2 : '',
	PRA3 : '',
	PRA4 : '',
	PRA5 : '',
	PRA6 : '',
	PRA7 : '',
	PRA8 : '',
	PRA9 : '',
	PRA10:  '',
	SPA1 : '',
	SPA2 : '',
	SPA3 : '',
	SPA4 : '',
	SPA5 : '',
	SPA6 : '',
	SPA7 : '',
	SPA8 : '',
	SPA9 : '',
	SPA10 : '',
	LWR_C1 : '',
	LWR_C2 : '',
	LWR_C3 : '',
	LWR_C4 : '',
	LWR_C5 : '',
	LWR_C6 : '',
	LWR_C7 : '',
	LWR_C8 : '',
	LWR_C9 : '',
	LWR_C10 : '',
	UPR_C1 : '',
	UPR_C2 : '',
	UPR_C3 : '',
	UPR_C4 : '',
	UPR_C5 : '',
	UPR_C6 : '',
	UPR_C7 : '',
	UPR_C8 : '',
	UPR_C9 : '',
	UPR_C10 : '',
	PBE : '',
	Gasket : '',
	Relay1 : '',
	Relay2 : '',
	Relay3 : '',
	Relay4 : '',
	Relay5 : '',
	Relay6 : '',
	Relay7 : '',
	Relay8 : '',
	Relay9 : '',
	Relay10 : '',
	HV_CNTR1 : '',
	HV_CNTR2 : '',
	HV_CNTR3 : '',
	HV_CNTR4 : '',
	HV_CNTR5 : '',
	HV_CNTR6 : '',
	HV_CNTR7 : '',
	HV_CNTR8 : '',
	HV_CNTR9 : '',
	HV_CNTR10 : '',
	Heating_CNTR1 : '',
	Heating_CNTR2 : '',
	Heating_CNTR3 : '',
	Heating_CNTR4 : '',
	Heating_CNTR5 : '',
	Heating_CNTR6 : '',
	Heating_CNTR7 : '',
	Heating_CNTR8 : '',
	Heating_CNTR9 : '',
	Heating_CNTR10 : '',
	FuseBox1 : '',
	FuseBox2 : '',
	FuseBox3 : '',
	FuseBox4 : '',
	FuseBox5 : '',
	FuseBox6 : '',
	FuseBox7 : '',
	FuseBox8 : '',
	FuseBox9 : '',
	FuseBox10 : '',
	LV_W_H1 : '',
	LV_W_H2 : '',
	LV_W_H3 : '',
	LV_W_H4 : '',
	LV_W_H5 : '',
	LV_W_H6 : '',
	LV_W_H7 : '',
	LV_W_H8 : '',
	LV_W_H9 : '',
	LV_W_H10 : '',
	HV_W_H1 : '',
	HV_W_H2 : '',
	HV_W_H3 : '',
	HV_W_H4 : '',
	HV_W_H5 : '',
	HV_W_H6 : '',
	HV_W_H7 : '',
	HV_W_H8 : '',
	HV_W_H9 : '',
	HV_W_H10 : '',
	온도센서1 : '',
	온도센서2 : '',
	온도센서3 : '',
	온도센서4 : '',
	온도센서5 : '',
	온도센서6 : '',
	온도센서7 : '',
	온도센서8 : '',
	온도센서9 : '',
	온도센서10 : '',
	Busbars : '',
	BMA1  : '',
	BMA2 : '',
	BMA3 : '',
	BMA4 : '',
	BMA5 : '',
	BMA6 : '',
	BMA7 : '',
	BMA8 : '',
	BMA9 : '',
	BMA10 : '',
	BMU1_2: '',
	BMU2_2: '',
	BMU3_2: '',
	BMU4_2: '',
	BMU5_2: '',
	BMU6_2: '',
	BMU7_2: '',
	BMU8_2: '',
	BMU9_2: '',
	BMU10_2: '',
	CMU1_2: '',
	CMU2_2: '',
	CMU3_2: '',
	CMU4_2: '',
	CMU5_2: '',
	CMU6_2: '',
	CMU7_2: '',
	CMU8_2: '',
	CMU9_2: '',
	CMU10_2: '',
	PRA1_2: '',
	PRA2_2: '',
	PRA3_2: '',
	PRA4_2: '',
	PRA5_2: '',
	PRA6_2: '',
	PRA7_2: '',
	PRA8_2: '',
	PRA9_2: '',
	PRA10_2: '',
	SPA1_2: '',
	SPA2_2: '',
	SPA3_2: '',
	SPA4_2: '',
	SPA5_2: '',
	SPA6_2: '',
	SPA7_2: '',
	SPA8_2: '',
	SPA9_2: '',
	SPA10_2: '',
	LWR_C1_2: '',
	LWR_C2_2: '',
	LWR_C3_2: '',
	LWR_C4_2: '',
	LWR_C5_2: '',
	LWR_C6_2: '',
	LWR_C7_2: '',
	LWR_C8_2: '',
	LWR_C9_2: '',
	LWR_C10_2: '',
	UPR_C1_2: '',
	UPR_C2_2: '',
	UPR_C3_2: '',
	UPR_C4_2: '',
	UPR_C5_2: '',
	UPR_C6_2: '',
	UPR_C7_2: '',
	UPR_C8_2: '',
	UPR_C9_2: '',
	UPR_C10_2: '',
	PBE_2: '',
	Gasket_2: '',
	Relay1_2: '',
	Relay2_2: '',
	Relay3_2: '',
	Relay4_2: '',
	Relay5_2: '',
	Relay6_2: '',
	Relay7_2: '',
	Relay8_2: '',
	Relay9_2: '',
	Relay10_2: '',
	HV_CNTR1_2: '',
	HV_CNTR2_2: '',
	HV_CNTR3_2: '',
	HV_CNTR4_2: '',
	HV_CNTR5_2: '',
	HV_CNTR6_2: '',
	HV_CNTR7_2: '',
	HV_CNTR8_2: '',
	HV_CNTR9_2: '',
	HV_CNTR10_2: '',
	Heating_CNTR1_2: '',
	Heating_CNTR2_2: '',
	Heating_CNTR3_2: '',
	Heating_CNTR4_2: '',
	Heating_CNTR5_2: '',
	Heating_CNTR6_2: '',
	Heating_CNTR7_2: '',
	Heating_CNTR8_2: '',
	Heating_CNTR9_2: '',
	Heating_CNTR10_2: '',
	FuseBox1_2: '',
	FuseBox2_2: '',
	FuseBox3_2: '',
	FuseBox4_2: '',
	FuseBox5_2: '',
	FuseBox6_2: '',
	FuseBox7_2: '',
	FuseBox8_2: '',
	FuseBox9_2: '',
	FuseBox10_2: '',
	LV_W_H1_2: '',
	LV_W_H2_2: '',
	LV_W_H3_2: '',
	LV_W_H4_2: '',
	LV_W_H5_2: '',
	LV_W_H6_2: '',
	LV_W_H7_2: '',
	LV_W_H8_2: '',
	LV_W_H9_2: '',
	LV_W_H10_2: '',
	HV_W_H1_2: '',
	HV_W_H2_2: '',
	HV_W_H3_2: '',
	HV_W_H4_2: '',
	HV_W_H5_2: '',
	HV_W_H6_2: '',
	HV_W_H7_2: '',
	HV_W_H8_2: '',
	HV_W_H9_2: '',
	HV_W_H10_2: '',
	온도센서1_2: '',
	온도센서2_2: '',
	온도센서3_2: '',
	온도센서4_2: '',
	온도센서5_2: '',
	온도센서6_2: '',
	온도센서7_2: '',
	온도센서8_2: '',
	온도센서9_2: '',
	온도센서10_2: '',
	Busbars_2: '',
	BMA1_2: '',
	BMA2_2: '',
	BMA3_2: '',
	BMA4_2: '',
	BMA5_2: '',
	BMA6_2: '',
	BMA7_2: '',
	BMA8_2: '',
	BMA9_2: '',
	BMA10_2: '',
	ETC: '',
	공정완료일: '',
	작업자: ''
};

const 성능검사_doc = {
	관리번호: '',
	공정입고일: '',
	용량평가: '',
	SOC60Percent: '',
	DCIR: '',
	DCIR_Charge: '',
	DCIR_Discharge: '',
	공정완료일: '',
	비고: '',
	검사자: ''
};

const EOL_doc = {
	관리번호: '',
	공정입고일: '',
	UPR_C조립: '',
	기밀검사_케이스: '',
	기밀검사_냉각유로: '',
	절연검사_Plus: '',
	절연검사_Minus: '',
	절연저항_HVP: '',
	절연저항_HVN: '',
	통신검사_DTC코드1: '',
	통신검사_DTC코드2: '',
	통신검사_DTC코드3: '',
	통신검사_DTC코드4: '',
	통신검사_DTC코드5: '',
	통신검사_DTC코드6: '',
	통신검사_DTC코드7: '',
	통신검사_DTC코드8: '',
	통신검사_DTC코드9: '',
	통신검사_DTC코드10: '',
	통신검사_팩전압: '',
	통신검사_셀전압편차: '',
	통신검사_릴레이구동: '',
	공정완료일: '',
	비고: '',
	QR: '',
	검사자: ''
};

const 고품정보_doc = {
	관리번호: '',
	품명: '',
	구분: '',
	품번: '',
	번호: '',
	QR: '',
	폐기여부: '',
	사용여부: '',
	사용_관리번호: '',
	등록일 : '',
	사용일 : '',
	등록_작업자 : '',
	사용_작업자 : '',
	폐기품출고 : ''
}

const 출하정보_doc = {
	관리번호: '',
	출하코드: '',
	검사일: '',
	검사자: '',
	기초보고서_작성확인: '',
	완료보고서_작성확인: '',
	클린상태: '', 
	팔레트_적정위치: '',
	포장랩상태: '',
	UPR_QR: '',
	LWR_QR: '',
	HKMC_스티커_URP: '',
	냉각유로_커버: '',
	브라켓: '',
	브라켓_비고 : '',
	S_PLUG : '',
	S_PLUG_비고 : '',
	접지 : '',
	접지_비고 : '',
	DTC: '',
	DTC_현재: '',
	DTC_과거: '',
	배터리충전상태: '',
	배터리충전상태_측정값: '',
	BMS고장NO: '',
	BMS융착NO: '',
	배터리팩전압: '',
	배터리팩_측정값: '',
	배터리모듈온도: '',
	배터리모듈온도_최대: '',
	배터리모듈온도_최소:'',
	배터리셀전압: '',
	배터리셀전압_최대: '',
	배터리셀전압_최소: '',
	셀전압편차: '',
	셀전압편차_측정값: '',
	절연저항: '',
	절연저항_측정값: '',
	SOH: '',
	릴레이_강제구동: '',
	커넥터_체결검사: '',
};

const 특이사항_doc = {
	관리번호: '',
	특이사항: ''
};

const 교체부품상세_doc = {
	관리번호: '',
	공정입고일: '',
	ORIGIN_관리번호: '',
	교체전_품명: '',
	교체전_품번: '',
	교체전_QR: '',
	교체후_신품_고품: '',
	교체후_고품식별: '',
	교체후_품번: '',
	교체후_QR: '',
	교체사유: ''
};


const 구장재고_doc = {
	입고일 : '',
	입고처 : '',
	관리번호 : '',
	재제조번호 : '',
	RO번호 : '',
	부품번호 : '',
	생산연도 : '',
	ROM_ID : '',
	보관위치 : '',
	출고일 : '',
	출고처 : '',
	비고 : ''
}

const 입고_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 세척_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 기초검사_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 분해조립_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 성능검사_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const EOL_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 특이사항_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 출하_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 반품입고_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 재출하_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 완전분해_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 폐기_pic_doc = {
	관리번호 : '',
	pic1 : '',
	pic2 : '',
	pic3 : '',
	pic4 : '',
	pic5 : '',
	pic6 : '',
	pic7 : '',
	pic8 : '',
	pic9 : '',
	pic10 : '',
	pic11 : '',
	pic12 : '',
	pic13 : '',
	pic14 : '',
	pic15 : '',
};

const 자재입출고_doc = {
	QR : '',
	날짜 : '',
	구분 : '',
	차종 : '',
	품명 : '',
	품번 : '',
	단가 : '',
	수량 : '',
	LotNo : '',
	비고 : '',
	사용관리번호 : ''
};

const 기초보고서_doc = {
	level : '',
	기초보고서 : '',
	육안검사외부 : '',
	육안검사외부상세 : '',
	육안검사내부 : '',
	육안검사내부상세 : '',
	기밀검사 : ''
};

const 완료보고서_doc = {
	level : '',
	완료보고서 : '',
	육안검사외부 : '',
	육안검사외부상세 : '',
	육안검사내부 : '',
	육안검사내부상세 : '',
	기밀검사 : ''
};

const 부품정보_list_doc = {
	관리번호 : '',
	A_UPR_CASE : '',
	A_LWR_CASE : '',
	A_S_PLUG : '',
	A_SPA : '',
	A_HV_CNTR : '',
	A_Heating_CNTR : '',
	A_PRA : '',
	A_LV_W_H : '',
	A_HV_W_H_1 : '',
	A_HV_W_H_2 : '',
	A_HV_W_H_3 : '',
	A_HV_W_H_4 : '',
	A_HV_W_H_5 : '',
	A_BUSBAR : '',
	A_BMU : '',
	A_CMU_1 : '',
	A_CMU_2 : '',
	A_CMU_3 : '',
	A_CMU_4 : '',
	A_CMU_5 : '',
	A_BMA_1 : '',
	A_BMA_2 : '',
	A_BMA_3 : '',
	A_BMA_4 : '',
	A_BMA_5 : '',
	B_UPR_CASE : '',
	B_LWR_CASE : '',
	B_HV_CNTR : '',
	B_Heating_CNTR : '',
	B_PRA : '',
	B_FUSE_BOX : '',
	B_LV_W_H : '',
	B_HV_W_H_1 : '',
	B_HV_W_H_2 : '',
	B_HV_W_H_3 : '',
	B_HV_W_H_4 : '',        
	B_HV_W_H_5 : '',         
	B_HV_W_H_6 : '',         
	B_HV_W_H_7 : '',         
	B_HV_W_H_8 : '',         
	B_HV_W_H_9 : '',         
	B_HV_W_H_10 : '',  
	B_BUSBAR : '',
	B_BMU : '',
	B_CMU_1 : '',
	B_CMU_2 : '',             
	B_CMU_3 : '',        
	B_CMU_4 : '',             
	B_CMU_5 : '',             
	B_BMA_1 : '',             
	B_BMA_2 : '',             
	B_BMA_3 : '',             
	B_BMA_4 : '',             
	B_BMA_5 : '',             
	B_BMA_6 : '',             
	B_BMA_7 : '',             
	B_BMA_8 : '',             
	B_BMA_9 : '',             
	B_BMA_10 : '',  
	C_UPR_CASE : '',
	C_LWR_CASE : '',
	C_HV_CNTR_1 : '',
	C_HV_CNTR_2 : '',
	C_Heating_CNTR : '',
	C_PRA : '',
	C_FUSE_BOX : '',
	C_LV_W_H : '',
	C_HV_W_H_1 : '',
	C_HV_W_H_2 : '',
	C_HV_W_H_3 : '',
	C_HV_W_H_4 : '',
	C_HV_W_H_5 : '',
	C_HV_W_H_6 : '',
	C_HV_W_H_7 : '',
	C_HV_W_H_8 : '',
	C_BUSBAR : '',
	C_BMU : '',
	C_CMU_1 : '',             
	C_CMU_2 : '',             
	C_CMU_3 : '',             
	C_CMU_4 : '',             
	C_CMU_5 : '',             
	C_CMU_6 : '',             
	C_CMU_7 : '',             
	C_CMU_8 : '',             
	C_BMA_1 : '',             
	C_BMA_2 : '',             
	C_BMA_3 : '',             
	C_BMA_4 : '',             
	C_BMA_5 : '',             
	C_BMA_6 : '',             
	C_BMA_7 : '',             
	C_BMA_8 : '',             
	C_BMA_9 : '',             
	C_BMA_10 : '',
	C_BMA_11 : '',
	C_BMA_12 : '',
	D_UPR_CASE : '',
	D_LWR_CASE : '',
	D_HV_CNTR_RH : '',
	D_HV_CNTR_LH : '',
	D_RELAY : '',
	D_LV_W_H : '',
	D_HV_W_H_1 : '',
	D_HV_W_H_2 : '',
	D_BUSBAR : '',
	D_BMU : '',
	D_CMU_1 : '',
	D_CMU_2 : '',
	D_BMA_1 : '',
	D_BMA_2 : ''
};

const 계정_ = {
	_id : 0,
	id: 1, 
	passwd: 1, 
	level: 1
};

const BSA재제조_ = {
	_id : 1,
	관리번호: 1, 
	재제조번호: 1,
	구분: 1,
	차종: 1, 
	품번: 1, 
	RO_no: 1, 
	공정단계: 1, 
	적재No: 1, 
	입고: 1, 
	제조투입: 1, 
	세척투입일: 1,
	세척: 1, 
	기초검사투입일: 1,
	기초검사: 1, 
	분해조립투입일: 1,
	분해조립: 1, 
	성능검사투입일: 1,
	성능검사: 1, 
	EOL투입일: 1,
	EOL: 1, 
	QR_Label: 1,
	출하검사: 1, 
	납품처: 1, 
	출하: 1, 
	소재지: 1,
	마지막충전일: 1,
	반품입고: 1,
	재출하: 1,
	완전분해: 1,
	완전분해사유: 1,
	폐기: 1,
	폐기사유: 1,
	출하예약: 1,
	렉번호: 1
};

const 입고_ = {
	_id : 0,
	관리번호: 1, 
	입고일 : 1,
	입고처 : 1,
	구분 : 1,
	차종: 1, 
	품번: 1, 
	RO_no : 1
};

const 세척_ = {
	_id : 0,
	관리번호: 1, 
	공정입고일: 1,
	공정완료일: 1,
	어퍼케이스재사용가능: 1,
	기밀검사_케이스: 1,
	기밀검사_케이스_특이사항: 1,
	특이사항: 1
};

const 기초검사_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	RO_no: 1, 
	VIN: 1,
	랙번호: 1,
	QRcode: 1,
	주행거리: 1,
	차량번호: 1,
	육안검사_외부: 1,
	육안검사_외부_특이사항: 1,
	육안검사_내부: 1,
	육안검사_내부_특이사항: 1,
	기밀검사_냉각유로: 1,
	기밀검사_냉각유로_특이사항: 1,
	절연검사_Plus: 1,
	절연검사_Minus: 1,
	통신검사_DTC코드1: 1,
	통신검사_DTC코드2: 1,
	통신검사_DTC코드3: 1,
	통신검사_DTC코드4: 1,
	통신검사_DTC코드5: 1,
	통신검사_DTC코드6: 1,
	통신검사_DTC코드7: 1,
	통신검사_DTC코드8: 1,
	통신검사_DTC코드9: 1,
	통신검사_DTC코드10: 1,
	통신검사_팩전압: 1,
	통신검사_셀전압편차: 1,
	통신검사_릴레이구동: 1,
	BSA생산일자: 1,
	BMA_ROM_ID: 1,
	고장현상코드: 1,
	고장현상명: 1,
	문제Cell_No: 1,
	문제BMA_No: 1,
	문제BMA_cnt: 1,
	공정완료일: 1,
	요청사항: 1,
	비고: 1,
	센터진단내용: 1,
	검사자: 1
};

const 분해조립_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	BMU1: 1,
	BMU2: 1,
	BMU3: 1,
	BMU4: 1,
	BMU5: 1,
	BMU6: 1,
	BMU7: 1,
	BMU8: 1,
	BMU9: 1,
	BMU10: 1,
	CMU1: 1,
	CMU2: 1,
	CMU3: 1,
	CMU4: 1,
	CMU5: 1,
	CMU6: 1,
	CMU7: 1,
	CMU8: 1,
	CMU9: 1,
	CMU10: 1,
	PRA1: 1,
	PRA2: 1,
	PRA3: 1,
	PRA4: 1,
	PRA5: 1,
	PRA6: 1,
	PRA7: 1,
	PRA8: 1,
	PRA9: 1,
	PRA10: 1,
	SPA1: 1,
	SPA2: 1,
	SPA3: 1,
	SPA4: 1,
	SPA5: 1,
	SPA6: 1,
	SPA7: 1,
	SPA8: 1,
	SPA9: 1,
	SPA10: 1,
	LWR_C1: 1,
	LWR_C2: 1,
	LWR_C3: 1,
	LWR_C4: 1,
	LWR_C5: 1,
	LWR_C6: 1,
	LWR_C7: 1,
	LWR_C8: 1,
	LWR_C9: 1,
	LWR_C10: 1,
	UPR_C1: 1,
	UPR_C2: 1,
	UPR_C3: 1,
	UPR_C4: 1,
	UPR_C5: 1,
	UPR_C6: 1,
	UPR_C7: 1,
	UPR_C: 1,
	UPR_C8: 1,
	UPR_C9: 1,
	UPR_C10: 1,
	PBE: 1,
	Gasket: 1,
	Relay1: 1,
	Relay2: 1,
	Relay3: 1,
	Relay4: 1,
	Relay5: 1,
	Relay6: 1,
	Relay7: 1,
	Relay8: 1,
	Relay9: 1,
	Relay10: 1,
	HV_CNTR1: 1,
	HV_CNTR2: 1,
	HV_CNTR3: 1,
	HV_CNTR4: 1,
	HV_CNTR5: 1,
	HV_CNTR6: 1,
	HV_CNTR7: 1,
	HV_CNTR8: 1,
	HV_CNTR9: 1,
	HV_CNTR10: 1,
	Heating_CNTR1: 1,
	Heating_CNTR2: 1,
	Heating_CNTR3: 1,
	Heating_CNTR4: 1,
	Heating_CNTR5: 1,
	Heating_CNTR6: 1,
	Heating_CNTR7: 1,
	Heating_CNTR8: 1,
	Heating_CNTR9: 1,
	Heating_CNTR10: 1,
	FuseBox1: 1,
	FuseBox2: 1,
	FuseBox3: 1,
	FuseBox4: 1,
	FuseBox5: 1,
	FuseBox6: 1,
	FuseBox7: 1,
	FuseBox8: 1,
	FuseBox9: 1,
	FuseBox10: 1,
	LV_W_H1: 1,
	LV_W_H2: 1,
	LV_W_H3: 1,
	LV_W_H4: 1,
	LV_W_H5: 1,
	LV_W_H6: 1,
	LV_W_H7: 1,
	LV_W_H8: 1,
	LV_W_H9: 1,
	LV_W_H10: 1,
	HV_W_H1: 1,
	HV_W_H2: 1,
	HV_W_H3: 1,
	HV_W_H4: 1,
	HV_W_H5: 1,
	HV_W_H6: 1,
	HV_W_H7: 1,
	HV_W_H8: 1,
	HV_W_H9: 1,
	HV_W_H10: 1,
	온도센서1: 1,
	온도센서2: 1,
	온도센서3: 1,
	온도센서4: 1,
	온도센서5: 1,
	온도센서6: 1,
	온도센서7: 1,
	온도센서8: 1,
	온도센서9: 1,
	온도센서10: 1,
	Busbars: 1,
	BMA1: 1,
	BMA2: 1,
	BMA3: 1,
	BMA4: 1,
	BMA5: 1,
	BMA6: 1,
	BMA7: 1,
	BMA8: 1,
	BMA9: 1,
	BMA10: 1,
	BMU1_2: 1,
	BMU2_2: 1,
	BMU3_2: 1,
	BMU4_2: 1,
	BMU5_2: 1,
	BMU6_2: 1,
	BMU7_2: 1,
	BMU8_2: 1,
	BMU9_2: 1,
	BMU10_2: 1,
	CMU1_2: 1,
	CMU2_2: 1,
	CMU3_2: 1,
	CMU4_2: 1,
	CMU5_2: 1,
	CMU6_2: 1,
	CMU7_2: 1,
	CMU8_2: 1,
	CMU9_2: 1,
	CMU10_2: 1,
	PRA1_2: 1,
	PRA2_2: 1,
	PRA3_2: 1,
	PRA4_2: 1,
	PRA5_2: 1,
	PRA6_2: 1,
	PRA7_2: 1,
	PRA8_2: 1,
	PRA9_2: 1,
	PRA10_2: 1,
	SPA1_2: 1,
	SPA2_2: 1,
	SPA3_2: 1,
	SPA4_2: 1,
	SPA5_2: 1,
	SPA6_2: 1,
	SPA7_2: 1,
	SPA8_2: 1,
	SPA9_2: 1,
	SPA10_2: 1,
	LWR_C1_2: 1,
	LWR_C2_2: 1,
	LWR_C3_2: 1,
	LWR_C4_2: 1,
	LWR_C5_2: 1,
	LWR_C6_2: 1,
	LWR_C7_2: 1,
	LWR_C8_2: 1,
	LWR_C9_2: 1,
	LWR_C10_2: 1,
	UPR_C1_2: 1,
	UPR_C2_2: 1,
	UPR_C3_2: 1,
	UPR_C4_2: 1,
	UPR_C5_2: 1,
	UPR_C6_2: 1,
	UPR_C7_2: 1,
	UPR_C8_2: 1,
	UPR_C9_2: 1,
	UPR_C10_2: 1,
	PBE_2: 1,
	Gasket_2: 1,
	Relay1_2: 1,
	Relay2_2: 1,
	Relay3_2: 1,
	Relay4_2: 1,
	Relay5_2: 1,
	Relay6_2: 1,
	Relay7_2: 1,
	Relay8_2: 1,
	Relay9_2: 1,
	Relay10_2: 1,
	HV_CNTR1_2: 1,
	HV_CNTR2_2: 1,
	HV_CNTR3_2: 1,
	HV_CNTR4_2: 1,
	HV_CNTR5_2: 1,
	HV_CNTR6_2: 1,
	HV_CNTR7_2: 1,
	HV_CNTR8_2: 1,
	HV_CNTR9_2: 1,
	HV_CNTR10_2: 1,
	Heating_CNTR1_2: 1,
	Heating_CNTR2_2: 1,
	Heating_CNTR3_2: 1,
	Heating_CNTR4_2: 1,
	Heating_CNTR5_2: 1,
	Heating_CNTR6_2: 1,
	Heating_CNTR7_2: 1,
	Heating_CNTR8_2: 1,
	Heating_CNTR9_2: 1,
	Heating_CNTR10_2: 1,
	FuseBox1_2: 1,
	FuseBox2_2: 1,
	FuseBox3_2: 1,
	FuseBox4_2: 1,
	FuseBox5_2: 1,
	FuseBox6_2: 1,
	FuseBox7_2: 1,
	FuseBox8_2: 1,
	FuseBox9_2: 1,
	FuseBox10_2: 1,
	LV_W_H1_2: 1,
	LV_W_H2_2: 1,
	LV_W_H3_2: 1,
	LV_W_H4_2: 1,
	LV_W_H5_2: 1,
	LV_W_H6_2: 1,
	LV_W_H7_2: 1,
	LV_W_H8_2: 1,
	LV_W_H9_2: 1,
	LV_W_H10_2: 1,
	HV_W_H1_2: 1,
	HV_W_H2_2: 1,
	HV_W_H3_2: 1,
	HV_W_H4_2: 1,
	HV_W_H5_2: 1,
	HV_W_H6_2: 1,
	HV_W_H7_2: 1,
	HV_W_H8_2: 1,
	HV_W_H9_2: 1,
	HV_W_H10_2: 1,
	온도센서1_2: 1,
	온도센서2_2: 1,
	온도센서3_2: 1,
	온도센서4_2: 1,
	온도센서5_2: 1,
	온도센서6_2: 1,
	온도센서7_2: 1,
	온도센서8_2: 1,
	온도센서9_2: 1,
	온도센서10_2: 1,
	Busbars_2: 1,
	BMA1_2: 1,
	BMA2_2: 1,
	BMA3_2: 1,
	BMA4_2: 1,
	BMA5_2: 1,
	BMA6_2: 1,
	BMA7_2: 1,
	BMA8_2: 1,
	BMA9_2: 1,
	BMA10_2: 1,
	ETC: 1,
	공정완료일: 1,
	작업자: 1
};

const EOL_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	UPR_C조립: 1,
	기밀검사_케이스: 1,
	기밀검사_케이스_특이사항: 1,
	기밀검사_냉각유로: 1,
	기밀검사_냉각유로_특이사항: 1,
	절연검사_Plus: 1,
	절연검사_Minus: 1,
	절연저항_HVP: 1,
	절연저항_HVN: 1,
	토크검사_UPR_C: 1,
	토크검사_버스바: 1,
	통신검사_DTC코드1: 1,
	통신검사_DTC코드2: 1,
	통신검사_DTC코드3: 1,
	통신검사_DTC코드4: 1,
	통신검사_DTC코드5: 1,
	통신검사_DTC코드6: 1,
	통신검사_DTC코드7: 1,
	통신검사_DTC코드8: 1,
	통신검사_DTC코드9: 1,
	통신검사_DTC코드10: 1,
	통신검사_팩전압: 1,
	통신검사_셀전압편차: 1,
	통신검사_릴레이구동: 1,
	공정완료일: 1,
	비고: 1,
	QR: 1,
	검사자: 1
};

const 성능검사_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	용량평가: 1,
	SOC60Percent: 1,
	DCIR: 1,
	DCIR_Charge: 1,
	DCIR_Discharge: 1,
	절연저항_HVP: 1,
	절연저항_HVN: 1,
	공정완료일: 1,
	비고: 1,
	검사자: 1
};

const 고품정보_ = {
	_id : 0,
	관리번호: 1,
	품명: 1,
	구분: 1,
	품번: 1,
	번호: 1,
	QR: 1,
	폐기여부: 1,
	사용여부: 1,
	사용_관리번호: 1,
	등록일 : 1,
	사용일 : 1,
	등록_작업자 : 1,
	사용_작업자 : 1,
	폐기품출고 : 1
}

const 출하정보_ = {
	_id : 0,
	관리번호: 1,
	출하코드: 1,
	검사일: 1,
	검사자: 1,
	기초보고서_작성확인: 1,
	완료보고서_작성확인: 1,
	클린상태: 1, 
	팔레트_적정위치: 1,
	포장랩상태: 1,
	UPR_QR: 1,
	LWR_QR: 1,
	HKMC_스티커_URP: 1,
	냉각유로_커버: 1,
	브라켓: 1,
	브라켓_비고 : 1,
	S_PLUG : 1,
	S_PLUG_비고 : 1,
	접지 : 1,
	접지_비고 : 1,
	DTC: 1,
	DTC_현재: 1,
	DTC_과거: 1,
	배터리충전상태: 1,
	배터리충전상태_측정값: 1,
	BMS고장NO: 1,
	BMS융착NO: 1,
	배터리팩전압: 1,
	배터리팩_측정값: 1,
	배터리모듈온도: 1,
	배터리모듈온도_최대: 1,
	배터리모듈온도_최소:1,
	배터리셀전압: 1,
	배터리셀전압_최대: 1,
	배터리셀전압_최소: 1,
	셀전압편차: 1,
	셀전압편차_측정값: 1,
	절연저항: 1,
	절연저항_측정값: 1,
	SOH: 1,
	릴레이_강제구동: 1,
	커넥터_체결검사: 1,
};

const 특이사항_ = {
	_id : 0,
	관리번호: 1,
	특이사항: 1
};

const 교체부품상세_ = {
	_id : 0,
	관리번호: 1,
	공정입고일: 1,
	ORIGIN_관리번호 : 1,
	교체전_품명: 1,
	교체전_품번: 1,
	교체전_QR: 1,
	교체후_신품_고품: 1,
	교체후_고품식별: 1,
	교체후_품번: 1,
	교체후_QR: 1,
	교체사유: 1,
	공정완료일: 1
};

const 구장재고_ = {
	_id : 0,
	입고일 : 1,
	입고처 : 1,
	관리번호 : 1,
	재제조번호 : 1,
	RO번호 : 1,
	부품번호 : 1,
	생산연도 : 1,
	ROM_ID : 1,
	보관위치 : 1,
	출고일 : 1,
	출고처 : 1,
	비고 : 1
}

const 입고_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 세척_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 기초검사_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 분해조립_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 성능검사_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const EOL_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 특이사항_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 출하_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 반품입고_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 재출하_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 완전분해_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 폐기_pic_ = {
	_id : 0,
	관리번호 : 1,
	pic1 : 1,
	pic2 : 1,
	pic3 : 1,
	pic4 : 1,
	pic5 : 1,
	pic6 : 1,
	pic7 : 1,
	pic8 : 1,
	pic9 : 1,
	pic10 : 1,
	pic11 : 1,
	pic12 : 1,
	pic13 : 1,
	pic14 : 1,
	pic15 : 1,
};

const 자재입출고_ = {
	_id : 0,
	QR : 1,
	날짜 : 1,
	구분 : 1,
	차종 : 1,
	품명 : 1,
	품번 : 1,
	단가 : 1,
	수량 : 1,
	LotNo : 1,
	비고 : 1,
	사용관리번호 : 1
};

const 기초보고서_ = {
	_id : 0,
	level : 1,
	기초보고서 : 1,
	육안검사외부 : 1,
	육안검사외부상세 : 1,
	육안검사내부 : 1,
	육안검사내부상세 : 1,
	기밀검사 : 1
};

const 완료보고서_ = {
	_id : 0,
	level : 1,
	완료보고서 : 1,
	육안검사외부 : 1,
	육안검사외부상세 : 1,
	육안검사내부 : 1,
	육안검사내부상세 : 1,
	기밀검사 : 1
};

const 부품정보_list_ = {
	_id :0,
	관리번호 : 1,
	A_UPR_CASE : 1,
	A_LWR_CASE : 1,
	A_S_PLUG : 1,
	A_SPA : 1,
	A_HV_CNTR : 1,
	A_Heating_CNTR : 1,
	A_PRA : 1,
	A_LV_W_H : 1,
	A_HV_W_H_1 : 1,
	A_HV_W_H_2 : 1,
	A_HV_W_H_3 : 1,
	A_HV_W_H_4 : 1,
	A_HV_W_H_5 : 1,
	A_BUSBAR : 1,
	A_BMU : 1,
	A_CMU_1 : 1,
	A_CMU_2 : 1,
	A_CMU_3 : 1,
	A_CMU_4 : 1,
	A_CMU_5 : 1,
	A_BMA_1 : 1,
	A_BMA_2 : 1,
	A_BMA_3 : 1,
	A_BMA_4 : 1,
	A_BMA_5 : 1,
	B_UPR_CASE : 1,
	B_LWR_CASE : 1,
	B_HV_CNTR : 1,
	B_Heating_CNTR : 1,
	B_PRA : 1,
	B_FUSE_BOX : 1,
	B_LV_W_H : 1,
	B_HV_W_H_1 : 1,
	B_HV_W_H_2 : 1,
	B_HV_W_H_3 : 1,
	B_HV_W_H_4 : 1,        
	B_HV_W_H_5 : 1,         
	B_HV_W_H_6 : 1,         
	B_HV_W_H_7 : 1,         
	B_HV_W_H_8 : 1,         
	B_HV_W_H_9 : 1,         
	B_HV_W_H_10 : 1,  
	B_BUSBAR : 1,
	B_BMU : 1,
	B_CMU_1 : 1,
	B_CMU_2 : 1,             
	B_CMU_3 : 1,        
	B_CMU_4 : 1,             
	B_CMU_5 : 1,             
	B_BMA_1 : 1,             
	B_BMA_2 : 1,             
	B_BMA_3 : 1,             
	B_BMA_4 : 1,             
	B_BMA_5 : 1,             
	B_BMA_6 : 1,             
	B_BMA_7 : 1,             
	B_BMA_8 : 1,             
	B_BMA_9 : 1,             
	B_BMA_10 : 1,  
	C_UPR_CASE : 1,
	C_LWR_CASE : 1,
	C_HV_CNTR_1 : 1,
	C_HV_CNTR_2 : 1,
	C_Heating_CNTR : 1,
	C_PRA : 1,
	C_FUSE_BOX : 1,
	C_LV_W_H : 1,
	C_HV_W_H_1 : 1,
	C_HV_W_H_2 : 1,
	C_HV_W_H_3 : 1,
	C_HV_W_H_4 : 1,
	C_HV_W_H_5 : 1,
	C_HV_W_H_6 : 1,
	C_HV_W_H_7 : 1,
	C_HV_W_H_8 : 1,
	C_BUSBAR : 1,
	C_BMU : 1,
	C_CMU_1 : 1,             
	C_CMU_2 : 1,             
	C_CMU_3 : 1,             
	C_CMU_4 : 1,             
	C_CMU_5 : 1,             
	C_CMU_6 : 1,             
	C_CMU_7 : 1,             
	C_CMU_8 : 1,             
	C_BMA_1 : 1,             
	C_BMA_2 : 1,             
	C_BMA_3 : 1,             
	C_BMA_4 : 1,             
	C_BMA_5 : 1,             
	C_BMA_6 : 1,             
	C_BMA_7 : 1,             
	C_BMA_8 : 1,             
	C_BMA_9 : 1,             
	C_BMA_10 : 1,
	C_BMA_11 : 1,
	C_BMA_12 : 1,
	D_UPR_CASE : 1,
	D_LWR_CASE : 1,
	D_HV_CNTR_RH : 1,
	D_HV_CNTR_LH : 1,
	D_RELAY : 1,
	D_LV_W_H : 1,
	D_HV_W_H_1 : 1,
	D_HV_W_H_2 : 1,
	D_BUSBAR : 1,
	D_BMU : 1,
	D_CMU_1 : 1,
	D_CMU_2 : 1,
	D_BMA_1 : 1,
	D_BMA_2 : 1
};

var doc_count = 0;
var update_count = 0;
var insert_count = 0;
var delete_count = 0;
var insert_id = '';
var find_array = [];
var arregation_array = [];
var flag_arrivedMSG = false;
var check = 0;
var str = '';

const socket = io();
socket.on('connect', function() {
	console.log('connected');
});

socket.on('auto_backup_db_status', function(running) {
	//console.log('auto backup status:', running);
	if(running == true) str = '백업(O)';
	else str = '백업(X)';
	document.getElementById('auto_backup_db_status').innerHTML = str;
});

socket.on('qr_lebel_result', function(result) {
	//alert(result);
	if(result == 'complete') {
		var a = document.createElement('a');
		a.href = "/qr_label";
		a.download = 'EOL_QR_LABEL';

		a.click();
	}
});

socket.on('insert_result', async function(id) {
	//console.log('insert id: ', id);
	insert_id = id;
	flag_arrivedMSG = true;
});

socket.on('count_result', async function(col, count, rcv_check, option = '') {
	reset_count();

	if(rcv_check != check) return;
	switch(col) {
		case BSA재제조 :
			BSA재제조_cnt = 0;
			BSA재제조_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 입고 : 
			입고_cnt = 0;
			입고_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 세척 :
			세척_cnt = 0;
			세척_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 기초검사 :
			기초검사_cnt = 0;
			기초검사_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 성능검사 :
			성능검사_cnt = 0;
			성능검사_cnt = JSON.parse(JSON.stringify(count));
			break;

		case EOL :
			EOL_cnt = 0;
			EOL_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 출하정보 :
			출하정보_cnt = 0;
			출하정보_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 분해조립 :
			분해조립_cnt = 0;
			분해조립_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 신품정보 :
			신품정보_cnt = 0;
			신품정보_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 고품정보 :
			고품정보_cnt = 0;
			고품정보_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 특이사항 : 
			특이사항_cnt = 0;
			특이사항_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세1 :
			교체부품상세1_cnt = 0;
			교체부품상세1_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세2 :
			교체부품상세2_cnt = 0;
			교체부품상세2_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세3 :
			교체부품상세3_cnt = 0;
			교체부품상세3_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세4 :
			교체부품상세4_cnt = 0;
			교체부품상세4_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세5 :
			교체부품상세5_cnt = 0;
			교체부품상세5_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세6 :
			교체부품상세6_cnt = 0;
			교체부품상세6_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세7 :
			교체부품상세7_cnt = 0;
			교체부품상세7_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세8 :
			교체부품상세8_cnt = 0;
			교체부품상세8_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세9 :
			교체부품상세9_cnt = 0;
			교체부품상세9_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 교체부품상세10 :
			교체부품상세10_cnt = 0;
			교체부품상세10_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 자재입출고 :
			자재입출고_cnt = 0;
			자재입출고_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 구장재고 :
			구장재고_cnt = 0;
			구장재고_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 입고_pic :
			입고_pic_cnt = 0;
			입고_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 세척_pic_cnt :
			세척_pic_cnt = 0;
			세척_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 기초검사_pic:
			기초검사_pic_cnt = 0;
			기초검사_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 분해조립_pic :
			분해조립_pic_cnt = 0;
			분해조립_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 성능검사_pic :
			성능검사_pic_cnt = 0;
			성능검사_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case EOL_pic:
			EOL_pic_cnt = 0;
			EOL_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 특이사항 :
			특이사항_pic_cnt =  0;
			특이사항_pic_cnt =  JSON.parse(JSON.stringify(count));
			break;

		case 출하_pic :
			출하_pic_cnt = 0;
			출하_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 반품입고_pic :
			반품입고_pic_cnt = 0;
			반품입고_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 재출하_pic :
			재출하_pic_cnt = 0;
			재출하_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 완전분해_pic :
			완전분해_pic_cnt = 0;
			완전분해_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 폐기_pic :
			폐기_pic_cnt = 0;
			폐기_pic_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 기초보고서 :
			기초보고서_cnt = 0;
			기초보고서_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 완료보고서 :
			완료보고서_cnt = 0;
			완료보고서_cnt = JSON.parse(JSON.stringify(count));
			break;

		case 계정 :
			계정_cnt = 0;
			계정_cnt = JSON.parse(JSON.stringify(count));

		case 부품정보_list :
			부품정보_list_cnt = 0;
			부품정보_list_cnt = JSON.parse(JSON.stringify(count));

		default : 
			doc_count = 0; 
			doc_count = JSON.parse(JSON.stringify(count)); 
			break;
	}

	switch(option) {
		case '입고' : 
			option_입고_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '세척' : 
			option_세척_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '기초검사' : 
			option_기초검사_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '분해조립' : 
			option_분해조립_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '성능검사' : 
			option_성능검사_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case 'EOL' : 
			option_EOL_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '출하정보' :
			option_출하정보_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '출하' :
			option_출하_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '입고당일' : 
			option_입고당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '세척당일' : 
			option_세척당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '기초검사당일' : 
			option_기초검사당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '분해조립당일' : 
			option_분해조립당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '성능검사당일' : 
			option_성능검사당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case 'EOL당일' : 
			option_EOL당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '출하정보당일' :
			option_출하정보당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		case '출하당일' :
			option_출하당일_cnt = JSON.parse(JSON.stringify(BSA재제조_cnt)); 
			BSA재제조_cnt = 0;
			break;

		default:
			break;
	}

	flag_arrivedMSG = true;
});

socket.on('find_result', async function(col, result, rcv_check) {
	reset_result();
	if(rcv_check != check) return;

	switch(col) {
		case BSA재제조 :
			BSA재제조_v = [];
			BSA재제조_v = JSON.parse(JSON.stringify(result));
			break;

		case 입고 : 
			입고_v = [];
			입고_v = JSON.parse(JSON.stringify(result));
			break;

		case 세척 :
			세척_v = [];
			세척_v = JSON.parse(JSON.stringify(result));
			break;

		case 기초검사 :
			기초검사_v = [];
			기초검사_v = JSON.parse(JSON.stringify(result));
			break;

		case 성능검사 :
			성능검사_v = [];
			성능검사_v = JSON.parse(JSON.stringify(result));
			break;

		case EOL :
			EOL_v = [];
			EOL_v = JSON.parse(JSON.stringify(result));
			break;

		case 출하정보 :
			출하정보_v = [];
			출하정보_v = JSON.parse(JSON.stringify(result));
			break;

		case 분해조립 :
			분해조립_v = [];
			분해조립_v = JSON.parse(JSON.stringify(result));
			break;

		case 신품정보 :
			신품정보_v = [];
			신품정보_v = JSON.parse(JSON.stringify(result));
			break;

		case 고품정보 :
			고품정보_v = [];
			고품정보_v = JSON.parse(JSON.stringify(result));
			break;

		case 특이사항 : 
			특이사항_v = [];
			특이사항_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세1 :
			교체부품상세1_v = [];
			교체부품상세1_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세2 :
			교체부품상세2_v = [];
			교체부품상세2_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세3 :
			교체부품상세3_v = [];
			교체부품상세3_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세4 :
			교체부품상세4_v = [];
			교체부품상세4_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세5 :
			교체부품상세5_v = [];
			교체부품상세5_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세6 :
			교체부품상세6_v = [];
			교체부품상세6_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세7 :
			교체부품상세7_v = [];
			교체부품상세7_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세8 :
			교체부품상세8_v = [];
			교체부품상세8_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세9 :
			교체부품상세9_v = [];
			교체부품상세9_v = JSON.parse(JSON.stringify(result));
			break;

		case 교체부품상세10 :
			교체부품상세10_v = [];
			교체부품상세10_v = JSON.parse(JSON.stringify(result));
			break;

		case 자재입출고 :
			자재입출고_v = [];
			자재입출고_v = JSON.parse(JSON.stringify(result));
			break;

		case 구장재고 :
			구장재고_v = [];
			구장재고_v = JSON.parse(JSON.stringify(result));
			break;

		case 입고_pic :
			입고_pic_v = [];
			입고_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 세척_pic_v :
			세척_pic_v = [];
			세척_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 기초검사_pic:
			기초검사_pic_v = [];
			기초검사_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 분해조립_pic :
			분해조립_pic_v = [];
			분해조립_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 성능검사_pic :
			성능검사_pic_v = [];
			성능검사_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case EOL_pic:
			EOL_pic_v = [];
			EOL_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 특이사항 :
			특이사항_pic_v =  [];
			특이사항_pic_v =  JSON.parse(JSON.stringify(result));
			break;

		case 출하_pic :
			출하_pic_v = [];
			출하_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 반품입고_pic :
			반품입고_pic_v = [];
			반품입고_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 재출하_pic :
			재출하_pic_v = [];
			재출하_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 완전분해_pic :
			완전분해_pic_v = [];
			완전분해_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 폐기_pic :
			폐기_pic_v = [];
			폐기_pic_v = JSON.parse(JSON.stringify(result));
			break;

		case 기초보고서 :
			기초보고서_v = [];
			기초보고서_v = JSON.parse(JSON.stringify(result));
			break;

		case 완료보고서 :
			완료보고서_v = [];
			완료보고서_v = JSON.parse(JSON.stringify(result));
			break;

		case 계정 :
			계정_v = [];
			계정_v = JSON.parse(JSON.stringify(result));
			break;

		case 부품정보_list :
			부품정보_list_v = [];
			부품정보_list_v = JSON.parse(JSON.stringify(result));
			break;

		default : 
			find_array = []; 
			find_array = JSON.parse(JSON.stringify(result)); 
			break;
	}

	flag_arrivedMSG = true;
});

socket.on('update_result', async function(result) {
	update_count = 0;
	insert_count = 0;
	if(result == null) return;
	//console.log('update result count: ', result.modifiedCount);
	//console.log('insert result count: ', result.upsertedCount);
	update_count = result.modifiedCount;
	insert_count = result.upsertedCount;
	flag_arrivedMSG = true;
});

socket.on('delete_result', async function(count) {
	console.log('delete result count: ', count);
	delete_count = count;
	flag_arrivedMSG = true;
});

socket.on('disconnect', function() {
	console.log('disconnect');
});

function reset_result() {
	BSA재제조_v = [];
	입고_v = [];
	세척_v = [];
	기초검사_v = [];
	성능검사_v = [];
	EOL_v = [];
	출하정보_v = [];
	분해조립_v = [];
	신품정보_v = [];
	고품정보_v = [];
	특이사항_v = [];
	교체부품상세1_v = [];
	교체부품상세2_v = [];
	교체부품상세3_v = [];
	교체부품상세4_v = [];
	교체부품상세5_v = [];
	교체부품상세6_v = [];
	교체부품상세7_v = [];
	교체부품상세8_v = [];
	교체부품상세9_v = [];
	교체부품상세10_v = [];
	자재입출고_v = [];
	구장재고_v = [];
	입고_pic_v = [];
	세척_pic_v = [];
	기초검사_pic_v = [];
	분해조립_pic_v = [];
	성능검사_pic_v = [];
	EOL_pic_v = [];
	특이사항_pic_v = [];
	출하_pic_v = [];
	반품입고_pic_v = [];
	재출하_pic_v = [];
	완전분해_pic_v = [];
	폐기_pic_v = [];
	기초보고서_v = [];
	완료보고서_v = [];
	부품정보_list_v = [];
	find_array = []
}

function reset_count() {
	BSA재제조_cnt = 0;
	입고_cnt = 0;
	세척_cnt = 0;
	기초검사_cnt = 0;
	성능검사_cnt = 0;
	EOL_cnt = 0;
	출하정보_cnt = 0;
	분해조립_cnt = 0;
	신품정보_cnt = 0;
	고품정보_cnt = 0;
	특이사항_cnt = 0;
	교체부품상세1_cnt = 0;
	교체부품상세2_cnt = 0;
	교체부품상세3_cnt = 0;
	교체부품상세4_cnt = 0;
	교체부품상세5_cnt = 0;
	교체부품상세6_cnt = 0;
	교체부품상세7_cnt = 0;
	교체부품상세8_cnt = 0;
	교체부품상세9_cnt = 0;
	교체부품상세10_cnt = 0;
	자재입출고_cnt = 0;
	구장재고_cnt = 0;
	입고_pic_cnt = 0;
	세척_pic_cnt = 0;
	기초검사_pic_cnt = 0;
	분해조립_pic_cnt = 0;
	성능검사_pic_cnt = 0;
	EOL_pic_cnt = 0;
	특이사항_pic_cnt = 0;
	출하_pic_cnt = 0;
	반품입고_pic_cnt = 0;
	재출하_pic_cnt = 0;
	완전분해_pic_cnt = 0;
	폐기_pic_cnt = 0;
	기초보고서_cnt = 0;
	완료보고서_cnt = 0;
	부품정보_list_cnt = 0;
	doc_count = 0;
}

async function make_qr_label(html_string) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('qr_label', html_string);
}

async function aggregate() {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('aggregate', level);
}

async function count(col, query, option = '') {
	if(socket == undefined) return
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;
	socket.emit('count', level, col, query, check, option);
}

async function insert(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('insert', worker, col, doc);
}

async function insertMany(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('insertMany', worker, col, doc);
}

async function update(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('update', worker, col, { 관리번호: doc.관리번호 }, {$set: doc});
}

async function update_보고서(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('update', worker, col, { level: doc.level }, {$set: doc});
}

async function update_재제조번호(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('update', worker, col, { 재제조번호: doc.재제조번호 }, {$set: doc});
}

async function update_계정(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('update', worker, col, { id: doc.id }, {$set: doc});
}

async function update_신품정보(col, doc) {
	if(socket == undefined) return;
	if(doc.QR == '') return;
	flag_arrivedMSG = false;
	socket.emit('update', worker, col, { QR: doc.QR }, {$set: doc});
}

async function update_고품정보(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('update', worker, col, { QR: doc.QR }, {$set: doc});
}

async function deleteOne(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('delete', worker, col, { 관리번호: management_id});
}

async function deleteOneBSA(col, id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('delete_by_id', worker, col, id);
}


async function deleteOne재제조번호(col, 재제조번호) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('delete', worker, col, { 재제조번호: 재제조번호 });
}

async function deleteOne_신품정보(col, QR) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('delete', worker, col, { QR: QR});
}

async function deleteOne_고품정보(col, QR) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('delete', worker, col, { QR: QR});
}

async function deleteOne_구장재고(col, 관리번호) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('delete', worker, col, { 관리번호: 관리번호});
}

async function delete_계정(_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	socket.emit('delete', worker, 계정, { id: _id});
}

async function find(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;

	console.log('find:', col, management_id);
	check++;
	if(check > 10) check = 0;

	switch(col) {
		case 'BSA재제조' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: BSA재제조_}, check);
			break;

		case '입고' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 입고_}, check);
			break;

		case '세척' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 세척_}, check);
			break;

		case '기초검사' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 기초검사_}, check);
			break;

		case '성능검사' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 성능검사_}, check);
			break;

		case 'EOL' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: EOL_}, check);
			break;

		case '출하정보' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 출하정보_}, check);
			break;

		case '분해조립' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_}, check);
			break;

		case '분해조립_부품정보' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_부품정보_}, check);
			break;

		case '고품정보' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 고품정보_}, check);
			break;

		case '신품정보' :
			socket.emit('findOne', worker, col, { QR: management_id}, { sort: { kind: 1}, projection: 신품정보_}, check);
			break;

		case '특이사항' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 특이사항_},  check);
			break;

		case '교체부품상세1' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세2' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세3' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세4' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세5' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세6' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세7' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세8' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세9' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '교체부품상세10' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
			break;

		case '입고_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 입고_pic_}, check);
			break;

		case '세척_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 세척_pic_}, check);
			break;

		case '기초검사_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 기초검사_pic_}, check);
			break;

		case '분해조립_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_pic_}, check);
			break;

		case '성능검사_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 성능검사_pic_}, check);
			break;

		case  'EOL_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: EOL_pic_}, check);
			break;

		case '특이사항_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 특이사항_pic_}, check);
			break;

		case '출하_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 출하_pic_}, check);
			break;

		case '반품입고_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 반품입고_pic_}, check);
			break;

		case '재출하_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 재출하_pic_}, check);
			break;

		case '완전분해_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 완전분해_pic_}, check);
			break;

		case '폐기_pic' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 폐기_pic_}, check);
			break;

		case '부품정보_list' :
			socket.emit('findOne', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 부품정보_list_}, check);
			break;

		default: 
			console.log('collection name is not match');
	}


}
async function findOne_기초보고서(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;
	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 기초보고서_ }, check);
}

async function findOne_완료보고서(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 완료보고서_ }, check);
}

async function findOne_계정(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 계정_ }, check);
}

async function findOne_구장재고(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 구장재고_ }, check);
}

async function findOne_신품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 자재입출고_ }, check);
}

async function findOne_고품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 고품정보_ }, check);
}

async function findOne_BSA재제조(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: BSA재제조_ }, check);
}

async function findOne_입고(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 입고_ }, check);
}

async function findOne_세척(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 세척_ }, check);
}

async function findOne_기초검사(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 기초검사_ }, check);
}

async function findOne_분해조립(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 분해조립_ }, check);
}

async function findOne_성능검사(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 성능검사_ }, check);
}

async function findOne_EOL(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: EOL_ }, check);
}

async function findOne_출하정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 출하정보_ }, check);
}

async function findOne_특이사항(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 특이사항_ }, check);
}

async function findOne_교체부품상세(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 교체부품상세_ }, check);
}

async function findOne_자재입출고(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 자재입출고_ }, check);
}

async function findOne_부품정보_list(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('findOne', worker, col, query, { sort: { kind: 1}, projection: 부품정보_list_ }, check);
}


async function find_기초보고서(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;
	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 기초보고서_ }, check);
}

async function find_완료보고서(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 완료보고서_ }, check);
}

async function find_계정(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 계정_ }, check);
}

async function find_구장재고(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 구장재고_ }, check);
}

async function find_신품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 자재입출고_ }, check);
}

async function find_고품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 고품정보_ }, check);
}

async function find_BSA재제조(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: BSA재제조_ }, check);
}

async function find_입고(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 입고_ }, check);
}

async function find_세척(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 세척_ }, check);
}

async function find_기초검사(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 기초검사_ }, check);
}

async function find_분해조립(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 분해조립_ }, check);
}

async function find_성능검사(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 성능검사_ }, check);
}

async function find_EOL(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: EOL_ }, check);
}

async function find_출하정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 출하정보_ }, check);
}

async function find_특이사항(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 특이사항_ }, check);
}

async function find_교체부품상세(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 교체부품상세_ }, check);
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

async function delay() {
	while(flag_arrivedMSG == false) {
		await sleep(1);
	}

	return true;
}

function 업체(code) {
	let result = 'kia';

	switch(code) {
		case 'DE' :
		case 'DEPBV' :
		case 'CV' :
		case 'MV' :
		case 'PU' :
		case 'SG2' :
		case 'TAM' :
		case 'PS' :
		case 'SK3' :
		case 'DE_EV' :
		case 'DEPBV_EV' :
		case 'CV_EV' :
		case 'MV_EV' :
		case 'PU_EV' :
		case 'SG2_EV' :
		case 'TAM_EV' :
		case 'PS_EV' :
		case 'SK3_EV' :
			result = 'kia';
			break;

		case 'OS' :
		case 'NE' :
		case 'HR' :
		case 'LK' :
		case 'LM' :
		case 'LKFC' :
		case 'CS' :
		case 'SX2' :
		case 'AE' :
		case 'CE' :
		case 'ME' :
		case 'FE' :
		case 'RG3' :
		case 'JW' :
		case 'JK' :
		case 'OS_EV' :
		case 'NE_EV' :
		case 'HR_EV' :
		case 'LK_EV' :
		case 'LM_EV' :
		case 'LKFC_EV' :
		case 'CS_EV' :
		case 'SX2_EV' :
		case 'AE_EV' :
		case 'CE_EV' :
		case 'ME_EV' :
		case 'FE_EV' :
		case 'RG3_EV' :
		case 'JW_EV' :
		case 'JX_EV' :
			result = 'hyundai';
			break;

		default :
			result = 'none';
			break;
	}

	return result;
}

async function 공정단계찾기__(_관리번호) {
	var 공정단계 = '입고';

	//count(입고, { 관리번호 : _관리번호 });
	//await delay();

	//if(입고_cnt > 0) {
	//	find(입고, _관리번호);
	//	await delay();

	//	if(입고_cnt.입고일 != '') {
	//		공정단계 = '세척';
	//	}
	//}

	//count(세척, { 관리번호 : _관리번호 });
	//await delay();
	//if(세척_cnt > 0) {
	//	find(세척, _관리번호);
	//	await delay();

	//	if(세척_v.공정완료일 != '') {
	//		공정단계 = '기초검사';
	//	}
	//}

	//count(기초검사, { 관리번호 : _관리번호 });
	//await delay();
	//if(기초검사_cnt > 0) {
	//	find(기초검사, _관리번호);
	//	await delay();

	//	if(기초검사_v.공정완료일 != '') {
	//		공정단계 = '분해조립';
	//	}
	//}

	//count(분해조립, { 관리번호 : _관리번호 });
	//await delay();
	//if(분해조립_cnt > 0) {
	//	find(분해조립, _관리번호);
	//	await delay();

	//	if(분해조립_v.공정완료일 != '') {
	//		공정단계 = '성능검사';
	//	}
	//}

	//count(성능검사, { 관리번호 : _관리번호 });
	//await delay();
	//if(성능검사_cnt > 0) {
	//	find(성능검사, _관리번호);
	//	await delay();

	//	if(성능검사_v.공정완료일 != '') {
	//		공정단계 = 'EOL';
	//	}
	//}

	//count(EOL, { 관리번호 : _관리번호 });
	//await delay();
	//if(EOL_cnt > 0) {
	//	find(EOL, _관리번호);
	//	await delay();

	//	if(EOL_v.공정완료일 != '') {
	//		공정단계 = '제조완료';
	//	}
	//}

	return 공정단계;
}

async function 공정단계자동입력(_관리번호) {
		findOne_BSA재제조(BSA재제조, { 관리번호 :  _관리번호,  공정단계 : { $ne : '출하' } });
		await delay();

		if(BSA재제조_v == null) return;

		var _공정단계 = '입고';
		if(BSA재제조_v.입고 != '') _공정단계 = '세척';
		if(BSA재제조_v.세척 != '') _공정단계 = '기초검사';
		if(BSA재제조_v.기초검사 != '') _공정단계 = '분해조립';
		if(BSA재제조_v.분해조립 != '') _공정단계 = '성능검사';
		if(BSA재제조_v.성능검사 != '') _공정단계 = 'EOL';
		if(BSA재제조_v.EOL != '') _공정단계 = '제조완료';
		if(BSA재제조_v.출하검사 != '') _공정단계 = '제조완료';
		if(BSA재제조_v.출하 != '') _공정단계 = '출하';

		var doc = {
			관리번호 : _관리번호,
			공정단계 : _공정단계
		}

		update(BSA재제조, doc);
		await delay();
}

function back() {
	loadPage("base/item-details.html");
	flag_상세입력 = true;
	first_분해조립 = true;
}
