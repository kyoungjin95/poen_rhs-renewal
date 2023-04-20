			history.pushState(null, null, location.href); 
			window.onpopstate = function(event) { 
				history.go(1); 
			};

			var _worker = localStorage.getItem('worker');
			var flag_show = false;
			
			times_show();
			if(_worker == '') {
				loadPage('login.html');
				change_label();
			} else {
				const _login_btn = document.getElementById('login_btn');
				_login_btn.innerHTML = '로그아웃';
				setTimeout(function() {
					loadPage('dashboard.html');
					start_repeat_대시보드();
					대시보드_시작();
				}, 1000);
			}
			var flag_재제조현황 = false;
			var flag_상세입력 = false;
			var flag_년간현황 = false;
			var flag_월간현황 = false;
			var flag_일간현황 = false;
			var flag_생산현황 = false;
			var flag_대시보드 = false;
			var flag_목표수량 = false;
			var flag_repeat_생산현황 = false;
			var flag_repeat_대시보드 = false;

			var interval = setInterval(function() {
				if(flag_재제조현황 == true) { stop_repeat(); 재제조현황_시작();}
				if(flag_상세입력 == true) { stop_repeat(); 상세입력_시작(); }
				if(flag_년간현황 == true) { stop_repeat(); 년간현황_시작(); }
				if(flag_월간현황 == true) { stop_repeat(); 월간현황_시작(); }
				if(flag_일간현황 == true) { stop_repeat(); 일간현황_시작(); }
				if(flag_목표수량 == true) { stop_repeat(); 목표수량_시작(); }
				if(flag_생산현황 == true) { start_repeat_생산현황(); 생산현황_시작();}
				if(flag_대시보드 == true) { start_repeat_대시보드(); 대시보드_시작();}
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
