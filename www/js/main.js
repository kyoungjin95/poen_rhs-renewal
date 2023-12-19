history.pushState(null, null, location.href);
window.onpopstate = function (event) {
	history.go(1);
};
// F12키 금지

//$(document).ready(function(){
//    $(document).on('keydown',function(e){
//        if ( e.keyCode == 123) {  /* F12키 */
//            e.preventDefault();
//            e.returnValue = false;
//        }
//    });
//});

function blockRightClick() {
	return false;
}

admin_btn.style.display = 'none';
부품재고_btn.style.display = 'none';
//var _worker = sessionStorage.getItem('worker');
var _level = sessionStorage.getItem('level');
if (worker == null) {
	worker = '';
	_level = '';
}

var flag_show = false;

const _login_info = document.getElementById('login_info');
const _admin_btn = document.getElementById('admin_btn');
const _부품재고_btn = document.getElementById('부품재고_btn');

console.log('worker:', worker);
if (worker == '' || worker == null) {
	loadPage('base/login.html');

	change_label();


	_login_info.innerHTML = '';
	_admin_btn.style.display = 'none';
	_부품재고_btn.style.display = 'none';
} else {
	const _login_btn = document.getElementById('login_btn');
	const _login_info = document.getElementById('login_info');

	_login_info.innerHTML = worker;
	_login_btn.innerHTML = '로그아웃';

	setTimeout(function () {
		if (_level == '관리자') {
			const _admin_btn = document.getElementById('admin_btn');
			_admin_btn.style.display = 'block';
		}
		if (_level == '부품관리자') {
			const _부품재고_btn = document.getElementById('부품재고_btn');
			_부품재고_btn.style.display = 'block';
		}
		loadPage('base/dashboard.html');
		flag_대시보드 = true;
	}, 1);
}

//alert('#공지사항#\n사원번호로 로그인시 몇몇 계정은 비밀번호가 \'사원번호*\'로 초기화 되었으니 참고 바랍니다.\n\n(계정별 접근권한 부여  TEST를 위하여 초기화된 계정이 있습니다.)');
var flag_재제조현황 = false;
var flag_상세입력 = false;
var flag_년간현황 = false;
var flag_월간현황 = false;
var flag_주간현황 = false;
var flag_생산현황 = false;
var flag_대시보드 = false;
var flag_대기수량_현황 = false;
var flag_부품재고 = false;
var flag_수량집계 = false;
var flag_신품정보 = false;
var flag_재충전정보 = false;
var flag_camera = false;
var flag_관리자 = false;
var flag_repeat_생산현황 = false;
var flag_repeat_대시보드 = false;
var flag_repeat_대기수량_현황 = false;
var flag_BSA_제외분류 = false;
var flag_입고 = false;
var flag_세척 = false;
var flag_기초검사 = false;
var flag_분해조립 = false;
var flag_성능검사 = false;
var flag_EOL = false;
var flag_출하 = false;
var flag_구장재고 = false;
var flag_군포재고 = false;
var flag_제주재고 = false;
var flag_구장재고조회 = false;
var flag_군포재고조회 = false;
var flag_제주재고조회 = false;
var flag_부품정보_list = false;

var interval = setInterval(function () {
	if (flag_재제조현황 == true) { stop_repeat(); 재제조현황_시작(); }
	if (flag_상세입력 == true) { stop_repeat(); 상세입력_시작(); }
	if (flag_년간현황 == true) { stop_repeat(); 년간현황_시작(); }
	if (flag_월간현황 == true) { stop_repeat(); 월간현황_시작(); }
	if (flag_주간현황 == true) { stop_repeat(); 주간현황_시작(); }
	if (flag_재충전정보 == true) { stop_repeat(); 재충전정보_시작(); }
	if (flag_camera == true) { stop_repeat(); }
	if (flag_부품재고 == true) { stop_repeat(); 부품재고_시작(); }
	if (flag_수량집계 == true) { stop_repeat(); 수량집계_시작(); }
	if (flag_신품정보 == true) { 신품정보_시작(); }

	if (flag_구장재고 == true) { stop_repeat(); 구장재고_시작(); }
	if (flag_군포재고 == true) { stop_repeat(); 군포재고_시작(); }
	if (flag_제주재고 == true) { stop_repeat(); 제주재고_시작(); }
	if (flag_구장재고조회 == true) { stop_repeat(); 구장재고조회_시작(); }
	if (flag_군포재고조회 == true) { stop_repeat(); 군포재고조회_시작(); }
	if (flag_제주재고조회 == true) { stop_repeat(); 제주재고조회_시작(); }
	if (flag_생산현황 == true) { stop_repeat(); 생산현황_시작(); }
	if (flag_대시보드 == true) { 날짜지정조회 = false; stop_repeat(); start_repeat_대시보드(); 대시보드_시작(); }
	if (flag_대기수량_현황 == true) { stop_repeat(); start_repeat_대기수량_현황(); 대기수량_현황_시작(); }
	if (flag_BSA_제외분류 == true) { stop_repeat(); stop_repeat(); BSA_제외분류_시작(); }
	if (flag_관리자 == true) { stop_repeat(); 관리자_시작(); }
	if (flag_입고 == true) { stop_repeat(); 입고_시작(); }
	if (flag_세척 == true) { stop_repeat(); 세척_시작(); }
	if (flag_기초검사 == true) { stop_repeat(); 기초검사_시작(); }
	if (flag_분해조립 == true) { stop_repeat(); 분해조립_시작(); }
	if (flag_성능검사 == true) { stop_repeat(); 성능검사_시작(); }
	if (flag_EOL == true) { stop_repeat(); EOL_시작(); }
	if (flag_출하 == true) { stop_repeat(); 출하정보_시작(); }

	if (flag_부품정보_list == true) { stop_repeat(); 부품정보_list_시작(); }
}, 1000);

//var intervalRepeat = setInterval(function() {
//if(flag_repeat_생산현황 == true) 생산현황_시작();
//	if(flag_repeat_대시보드 == true) 대시보드_시작();
//	if(flag_repeat_대기수량_현황 == true) 대기수량_현황_조회();
//}, 1000 * 30);

function stop_repeat() {
	console.log('stop repeat');
	flag_repeat_생산현황 = false;
	flag_repeat_대시보드 = false;
	flag_repeat_대기수량_현황 = false;
}

function start_repeat_생산현황() {
	console.log('start 생산현황 repeat');
	flag_repeat_대시보드 = false;
	flag_repeat_생산현황 = true;
}

function start_repeat_대시보드() {
	console.log('start dashboard repeat');
	flag_repeat_대기수량_현황 = false;
	flag_repeat_대시보드 = true;
}

function start_repeat_대기수량_현황() {
	console.log('start BSA 수량 현황 repeat');
	flag_repeat_생산현황 = false;
	flag_repeat_대시보드 = false;
	flag_repeat_대기수량_현황 = true;
}

function 이전페이지() {
	back();
}
