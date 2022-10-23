function calc() {
  const in1 = document.getElementById('n1');
  const in2 = document.getElementById('n2');
  const result = document.getElementById('result');

  num1 = parseInt(in1.value);
  num2 = parseInt(in2.value);

  r1 = num1 + num2;
  r2 = num1 - num2;
  r3 = num1 * num2;
  r4 = num1 / num2;

  result.innerText = num1 + '+' + num2 + '=' + r1


}

