function calc() {
  const num1 = document.getElementById('n1');
  const num2 = document.getElementById('n2');
  const result = document.getElementById('result');

  var n1 = parseInt(num1.value);
  var n2 = parseInt(num2.value);

  msg = n1 + ' + ' + n2 + ' = ' + (n1 + n2);
  msg += '\n' + n1 + ' - ' + n2 + ' = ' + (n1 - n2);
  msg += '\n' + n1 + ' * ' + n2 + ' = ' + (n1 * n2);
  msg += '\n' + n1 + ' / ' + n2 + ' = ' + (n1 / n2);

  result.innerText = msg;


}