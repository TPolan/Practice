let number1 = 0;
let op = null;

const binOp = (symbol) => {
  const screen = document.querySelector('.calc__screen');
  number1 = parseInt(screen.value);
  op = symbol;
  screen.value = '0';
}

const equals = () => {
  let screen = document.querySelector('.calc__screen');
  const number2 = parseInt(screen.value);
  switch(op) {
    case '+':
      screen.value = number1 + number2;
      break;
    case '-':
      screen.value = number1 - number2;
      break;
    case '*':
      screen.value = number1 * number2;
      break;
    case '/':
      screen.value = number1 / number2;
      break;
  }
}


