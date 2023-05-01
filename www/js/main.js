history.pushState(null, null, location.href); 
window.onpopstate = function(event) { 
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
//

admin_btn.style.display = 'none';
부품재고_btn.style.display = 'none';
var _worker = sessionStorage.getItem('worker');
var _level = sessionStorage.getItem('level');
if(_worker == '' || worker == null) worker = '';
else worker = _worker;
var flag_show = false;

times_show();

console.log('worker:', worker);
console.log('level:', _level);
if(worker == '' || worker == null) {
	loadPage('base/login.html');
	change_label();
	const _login_info = document.getElementById('login_info');
	_login_info.innerHTML = '';
	const _admin_btn = document.getElementById('부품재고_btn');
	_admin_btn.style.display = 'none';
	const _부품재고_btn = document.getElementById('부품재고_btn');
	_부품재고_btn.style.display = 'none';
} else {
	const _login_btn = document.getElementById('login_btn');
	const _login_info = document.getElementById('login_info');
	_login_info.innerHTML = worker + ' / 로그인 中  ';
	_login_btn.innerHTML = '로그아웃';
	setTimeout(function() {
		if(_level == 'admin') {
			const _admin_btn = document.getElementById('부품재고_btn');
			_admin_btn.style.display = 'block';
		}
		if(_level == '부품관리자') {
			const _부품재고_btn = document.getElementById('부품재고_btn');
			_부품재고_btn.style.display = 'block';
		}
		loadPage('base/dashboard.html');
		flag_대시보드 = true;
	}, 1000);
}
var flag_재제조현황 = false;
var flag_상세입력 = false;
var flag_년간현황 = false;
var flag_월간현황 = false;
var flag_일간현황 = false;
var flag_생산현황 = false;
var flag_대시보드 = false;
var flag_부품재고 = false;
var flag_재충전정보 = false;
var flag_관리자 = false;
var flag_repeat_생산현황 = false;
var flag_repeat_대시보드 = false;

var interval = setInterval(function() {
	if(flag_재제조현황 == true) { stop_repeat(); 재제조현황_시작();}
	if(flag_상세입력 == true) { stop_repeat(); 상세입력_시작(); }
	if(flag_년간현황 == true) { stop_repeat(); 년간현황_시작(); }
	if(flag_월간현황 == true) { stop_repeat(); 월간현황_시작(); }
	if(flag_일간현황 == true) { stop_repeat(); 일간현황_시작(); }
	if(flag_재충전정보 == true) { stop_repeat(); 재충전정보_시작(); }
	if(flag_부품재고 == true) { stop_repeat(); 부품재고_시작(); }
	if(flag_생산현황 == true) { start_repeat_생산현황(); 생산현황_시작();}
	if(flag_대시보드 == true) { start_repeat_대시보드(); 대시보드_시작();}
	if(flag_관리자 == true) { start_repeat_대시보드(); 관리자_시작();}
}, 500);

var intervalRepeat = setInterval(function() {
	if(flag_repeat_생산현황 == true) 생산현황_시작();
	if(flag_repeat_대시보드 == true) 대시보드_시작();
}, 1000 * 60);

function stop_repeat() {
	console.log('stop repeat');
	flag_repeat_생산현황 = false;		
	flag_repeat_대시보드 = false;		
}

function start_repeat_생산현황() {
	console.log('start 생산현황 repeat');
	flag_repeat_생산현황 = true;
}

function start_repeat_대시보드() {
	console.log('start dashboard repeat');
	flag_repeat_대시보드 = true;
}

function 이전페이지() {
	var btn = document.getElementById('item_detail_btn').click();
}

function times_show() {
	var btns = document.getElementById('times');
	if(flag_show == false) {
		btns.style.display = "none";
	} else {
		btns.style.display = "block";
	}
	flag_show = !flag_show;
}
