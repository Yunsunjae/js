function calc() {
  const grade = document.getElementById('grade');
  const result = document.getElementById('result');
  g = parseInt(grade.value);

  var msg;

  if (g >= 90) {
    msg = 'A';
  }
  else if (g >= 80) {
    msg = 'B';
  }
  else if (g >= 70) {
    msg = 'C';
  }
  else if (g >= 60) {
    msg = 'D';
  }
  else {
    msg = 'E';
  }

  result.innerText = '당신의 학점은 ' + msg + '입니다';



}