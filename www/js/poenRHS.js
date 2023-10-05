const DELAY = 100; 
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

var 관리번호 = '';
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
	폐기: '',
	출하예약: '',
};

const 입고_doc = {
	관리번호: '', 
	입고일 : '',
	입고처 : '',
	구분 : '',
	차종: '', 
	품번: '', 
};

const 세척_doc = {
	관리번호: '', 
	공정입고일: '',
	공정완료일: '',
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
	절연검사_HVPlus: '',
	절연검사_HVMinus: '',
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
	고장현상코드: '',
	고장현상명: '',
	문제Cell_No: '',
	제BMA_No: '',
	제BMA_cnt: '',
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
	CMU1: '',
	CMU2: '',
	CMU3: '',
	CMU4: '',
	CMU5: '',
	CMU6: '',
	CMU7: '',
	CMU8: '',
	CMU9: '',
	CMU10: '',
	PRA1: '',
	PRA2: '',
	PRA3: '',
	PRA4: '',
	PRA5: '',
	PRA6: '',
	PRA7: '',
	PRA8: '',
	PRA9: '',
	PRA10: '',
	SPA1: '',
	SPA2: '',
	SPA3: '',
	SPA4: '',
	SPA5: '',
	SPA6: '',
	SPA7: '',
	SPA8: '',
	SPA9: '',
	SPA10: '',
	LWR_C1: '',
	LWR_C2: '',
	LWR_C3: '',
	LWR_C4: '',
	LWR_C5: '',
	LWR_C6: '',
	LWR_C7: '',
	LWR_C8: '',
	LWR_C9: '',
	LWR_C10: '',
	UPR_C1: '',
	UPR_C2: '',
	UPR_C3: '',
	UPR_C4: '',
	UPR_C5: '',
	UPR_C6: '',
	UPR_C7: '',
	UPR_C: '',
	UPR_C8: '',
	UPR_C9: '',
	UPR_C10: '',
	PBE: '',
	Gasket: '',
	Relay1: '',
	Relay2: '',
	Relay3: '',
	Relay4: '',
	Relay5: '',
	Relay6: '',
	Relay7: '',
	Relay8: '',
	Relay9: '',
	Relay10: '',
	HV_CNTR1: '',
	HV_CNTR2: '',
	HV_CNTR3: '',
	HV_CNTR4: '',
	HV_CNTR5: '',
	HV_CNTR6: '',
	HV_CNTR7: '',
	HV_CNTR8: '',
	HV_CNTR9: '',
	HV_CNTR10: '',
	Heating_CNTR1: '',
	Heating_CNTR2: '',
	Heating_CNTR3: '',
	Heating_CNTR4: '',
	Heating_CNTR5: '',
	Heating_CNTR6: '',
	Heating_CNTR7: '',
	Heating_CNTR8: '',
	Heating_CNTR9: '',
	Heating_CNTR10: '',
	FuseBox1: '',
	FuseBox2: '',
	FuseBox3: '',
	FuseBox4: '',
	FuseBox5: '',
	FuseBox6: '',
	FuseBox7: '',
	FuseBox8: '',
	FuseBox9: '',
	FuseBox10: '',
	LV_W_H1: '',
	LV_W_H2: '',
	LV_W_H3: '',
	LV_W_H4: '',
	LV_W_H5: '',
	LV_W_H6: '',
	LV_W_H7: '',
	LV_W_H8: '',
	LV_W_H9: '',
	LV_W_H10: '',
	HV_W_H1: '',
	HV_W_H2: '',
	HV_W_H3: '',
	HV_W_H4: '',
	HV_W_H5: '',
	HV_W_H6: '',
	HV_W_H7: '',
	HV_W_H8: '',
	HV_W_H9: '',
	HV_W_H10: '',
	온도센서1: '',
	온도센서2: '',
	온도센서3: '',
	온도센서4: '',
	온도센서5: '',
	온도센서6: '',
	온도센서7: '',
	온도센서8: '',
	온도센서9: '',
	온도센서10: '',
	Busbars: '',
	BMA1: '',
	BMA2: '',
	BMA3: '',
	BMA4: '',
	BMA5: '',
	BMA6: '',
	BMA7: '',
	BMA8: '',
	BMA9: '',
	BMA10: '',
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
	절연저항_HVP: '',
	절연저항_HVN: '',
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
	수량 : '',
	LotNo : '',
	비고 : '',
	사용관리번호 : ''
};

const 계정_ = {
	_id : 0,
	id: 1, 
	passwd: 1, 
	level: 1
};

const BSA재제조_ = {
	_id : 0,
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
	폐기: 1,
	출하예약: 1,
};

const 입고_ = {
	_id : 0,
	관리번호: 1, 
	입고일 : 1,
	입고처 : 1,
	구분 : 1,
	차종: 1, 
	품번: 1, 
};

const 세척_ = {
	_id : 0,
	관리번호: 1, 
	공정입고일: 1,
	공정완료일: 1,
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
	절연검사_HVPlus: 1,
	절연검사_HVMinus: 1,
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
	수량 : 1,
	LotNo : 1,
	비고 : 1,
	사용관리번호 : 1
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

socket.on('distinct_result', function(result) {
	//console.log('distincted result array: ', result);
	find_array = result;
	flag_arrivedMSG = true;
});

socket.on('insert_result', function(id) {
	//console.log('insert id: ', id);
	insert_id = id;
	flag_arrivedMSG = true;
});

socket.on('count_result', async function(count, rcv_check) {
	//console.log('count: ', count);
	if(rcv_check != check) return;
	doc_count = count;
	await sleep(1);

	flag_arrivedMSG = true;
});

socket.on('find_result', async function(result, rcv_check) {
	//console.log('finded result array: ', result);
	//console.log('recv count:', rcv_check, 'check:', check);
	if(rcv_check != check) return;
	find_array = result;
	await sleep(1);
	flag_arrivedMSG = true;
});

socket.on('update_result', function(result) {
	flag_arrivedMSG = true;
	update_count = 0;
	insert_count = 0;
	if(result == null) return;
	//console.log('update result count: ', result.modifiedCount);
	//console.log('insert result count: ', result.upsertedCount);
	update_count = result.modifiedCount;
	insert_count = result.upsertedCount;
});

socket.on('delete_result', function(count) {
	console.log('delete result count: ', count);
	delete_count = count;
	flag_arrivedMSG = true;
});

socket.on('management_id', function(mid) {
	관리번호 = mid;
	flag_arrivedMSG = true;
});

socket.on('disconnect', function() {
	console.log('disconnect');
});

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

async function distinct(col, query, field_name) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('distinct', worker, col, query, field_name);
		await sleep(DELAY * 20);
	}
}

async function count(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		check++;
		if(check > 10000) check = 0;
		socket.emit('count', level, col, query, check);
		await sleep(DELAY * 20);
	}
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
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { 관리번호: doc.관리번호 }, {$set: doc});
		await sleep(DELAY * 20);
	}
}

async function update_재제조번호(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { 재제조번호: doc.재제조번호 }, {$set: doc});
		await sleep(DELAY * 20);
	}
}

async function update_계정(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { id: doc.id }, {$set: doc});
		await sleep(DELAY * 20);
	}
}

async function update_신품정보(col, doc) {
	if(socket == undefined) return;
	if(doc.QR == '') return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { QR: doc.QR }, {$set: doc});
		await sleep(DELAY * 20);
	}
}

async function update_고품정보(col, doc) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('update', worker, col, { QR: doc.QR }, {$set: doc});
		await sleep(DELAY * 20);
	}
}

async function deleteOne(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { 관리번호: management_id});
		await sleep(DELAY * 20);
	}
}

async function deleteOne재제조번호(col, 재제조번호) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { 재제조번호: 재제조번호 });
		await sleep(DELAY * 20);
	}
}

async function deleteOne_신품정보(col, QR) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { QR: QR});
		await sleep(DELAY * 20);
	}
}

async function deleteOne_고품정보(col, QR) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { QR: QR});
		await sleep(DELAY * 20);
	}
}

async function deleteOne_구장재고(col, 관리번호) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, col, { 관리번호: 관리번호});
		await sleep(DELAY * 20);
	}
}

async function delete_계정(_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	while(flag_arrivedMSG == false) {
		socket.emit('delete', worker, 계정, { id: _id});
		await sleep(DELAY * 20);
	}
}

async function find(col, management_id) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;
	//console.log('send check:', check);

	switch(col) {
		case 'BSA재제조' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: BSA재제조_}, check);
				await sleep(DELAY);
			}
			break;

		case '입고' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 입고_}, check);
				await sleep(DELAY);
			}
			break;

		case '세척' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 세척_}, check);
				await sleep(DELAY);
			}
			break;

		case '기초검사' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 기초검사_}, check);
				await sleep(DELAY);
			}
			break;

		case '성능검사' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 성능검사_}, check);
				await sleep(DELAY);
			}
			break;

		case 'EOL' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: EOL_}, check);
				await sleep(DELAY);
			}
			break;

		case '출하정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 출하정보_}, check);
				await sleep(DELAY);
			}
			break;

		case '분해조립' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_}, check);
				await sleep(DELAY);
			}
			break;

		case '분해조립_부품정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_부품정보_}, check);
				await sleep(DELAY);
			}
			break;

		case '고품정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 고품정보_}, check);
				await sleep(DELAY);
			}
			break;

		case '신품정보' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { QR: management_id}, { sort: { kind: 1}, projection: 신품정보_}, check);
				await sleep(DELAY);
			}
			break;

		case '특이사항' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 특이사항_},  check);
				await sleep(DELAY);
			}
			break;
		
		case '교체부품상세1' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세2' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세3' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세4' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세5' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세6' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세7' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세8' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세9' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '교체부품상세10' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 교체부품상세_}, check);
				await sleep(DELAY);
			}
			break;

		case '입고_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 입고_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '세척_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 세척_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '기초검사_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 기초검사_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '분해조립_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 분해조립_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '성능검사_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 성능검사_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case  'EOL_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: EOL_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '특이사항_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 특이사항_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '출하_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 출하_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '반품입고_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 반품입고_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '재출하_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 재출하_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '완전분해_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 완전분해_pic_}, check);
				await sleep(DELAY);
			}
			break;

		case '폐기_pic' :
			while(flag_arrivedMSG == false) {
				socket.emit('find', worker, col, { 관리번호: management_id}, { sort: { kind: 1}, projection: 폐기_pic_}, check);
				await sleep(DELAY);
			}
			break;
		default: 
			console.log('collection name is not match');
	}

}

function find_계정(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 계정_ }, check);
}

function find_구장재고(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 구장재고_ }, check);
}

function find_신품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 자재입출고_ }, check);
}

function find_고품정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 고품정보_ }, check);
}

function find_BSA재제조(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: BSA재제조_ }, check);
}

function find_입고(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 입고_ }, check);
}

function find_세척(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 세척_ }, check);
}

function find_기초검사(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 기초검사_ }, check);
}

function find_분해조립(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 분해조립_ }, check);
}

function find_성능검사(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 성능검사_ }, check);
}

function find_EOL(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: EOL_ }, check);
}

function find_출하정보(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 출하정보_ }, check);
}

function find_특이사항(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 특이사항_ }, check);
}

function find_교체부품상세(col, query) {
	if(socket == undefined) return;
	flag_arrivedMSG = false;
	check++;
	if(check > 10000) check = 0;

	socket.emit('find', worker, col, query, { sort: { kind: 1}, projection: 교체부품상세_ }, check);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function delay() {
	while(flag_arrivedMSG == false) {
		await sleep(1);
	}
	await sleep(1);
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
