

function calc() {
  const n1 = document.getElementById('n1');
  const n2 = document.getElementById('n2');
  const n3 = document.getElementById('result');

  num1 = parseInt(n1.value);
  num2 = parseInt(n2.value);
  num3 = num1 + num2;
  n3.innerText = num3;
}