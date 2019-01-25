let number1 = 0;
let op = null;
const screen = document.querySelector('.calc__screen');

const typingNum = (num) => {
  let screenValue = screen.value;
  screenValue += num;
  screen.value = screenValue;
};

const binOp = (symbol) => {
  const screen = document.querySelector('.calc__screen');
  number1 = parseInt(screen.value);
  op = symbol;
  screen.focus();
  screen.setSelectionRange(0, screen.value.length);
}

const equals = () => {
  const screen = document.querySelector('.calc__screen');
  let number2 = parseInt(screen.value);
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
  screen.focus();
  screen.setSelectionRange(0, screen.value.length);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn-plus').addEventListener('click', () => {
    binOp('+'); 
  });

  document.querySelector('#btn-minus').addEventListener('click', () => {
    binOp('-'); 
  });

  document.querySelector('#btn-times').addEventListener('click', () => {
    binOp('*'); 
  });

  document.querySelector('#btn-divide').addEventListener('click', () => {
    binOp('/'); 
  });

  document.querySelector('#btn-equals').addEventListener('click', equals);

  document.querySelector('#btn-one').addEventListener('click', () => {
    typingNum('1'); 
  });
  document.querySelector('#btn-two').addEventListener('click', () => {
    typingNum('2'); 
  });
  document.querySelector('#btn-three').addEventListener('click', () => {
    typingNum('3'); 
  });
  document.querySelector('#btn-four').addEventListener('click', () => {
    typingNum('4'); 
  });
  document.querySelector('#btn-five').addEventListener('click', () => {
    typingNum('5'); 
  });
  document.querySelector('#btn-six').addEventListener('click', () => {
    typingNum('6'); 
  });
  document.querySelector('#btn-seven').addEventListener('click', () => {
    typingNum('7'); 
  });
  document.querySelector('#btn-eight').addEventListener('click', () => {
    typingNum('8'); 
  });
  document.querySelector('#btn-nine').addEventListener('click', () => {
    typingNum('9'); 
  });
  document.querySelector('#btn-zero').addEventListener('click', () => {
    typingNum('0'); 
  });
});



