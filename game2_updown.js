// 변수 초기화
const result = document.getElementById("result");
const num = document.getElementById("num");

// 1~100 사이의 난수 생성
var com = Math.random() * 100 + 1;
com = Math.floor(com);

cnt = 0;

function check_num() {
  usr = parseInt(num.value);
  var msg;
  console.log(com);

  //시도 수 증가
  cnt +=1;

  if (usr > com) {
    msg = 'DOWN!'
    
  }
  else if (usr < com) {
    msg = 'UP!'
  }
  else if (usr == com) {
    msg = '성공'
    msg += '\n' + '시도 횟수: ' + cnt;
    const b = document.getElementById("btn");
    b.disabled = 'disabled';
    b.innerText = '';

  }
  else {
    msg = '1~100 사이의 숫자를 입력해!'
  }
  
  result.innerText = msg;
  


}