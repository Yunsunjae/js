var start;
var end;
var et;


function check_time() {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');

  // console.log(btn.innerText);
  
  if (btn.innerText == '시작') {
    start = new Date();
    msg.innerText = '20초를 세고 종료 버튼을 누르세요.';
    btn.innerText = '종료';
    btn.style.backgroundColor = '#FF3333';
  }
  else {
    // 종료 버튼 클릭 코드
    end = new Date();
    et = parseInt((end - start) / 1000);  // ms
    msg.innerText = '당신은 ' + et + '초만에 버튼을 눌렀습니다'
    btn.innerText = '시작';
    btn.style.backgroundColor = 'rgb(9, 120, 247)';


  }
  

};