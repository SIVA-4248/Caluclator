let currentInput = '';
let previousInput = '';
let operation = undefined;

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput = currentInput.toString() + number.toString();
  updateDisplay();
}

function chooseOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let computation;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }
  currentInput = computation;
  operation = undefined;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = undefined;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = currentInput || '0';
}


