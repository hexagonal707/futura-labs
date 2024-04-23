let display = document.getElementById("display");
let expression = "";

function getValue(value) {
  display.textContent += value;
  expression += value;
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1);
  expression = expression.slice(0, -1);
}

function clearDisplay() {
  display.textContent = "";
  expression = "";
}

function calculate() {
  const result = eval(expression);
  display.textContent = result;
  expression = result.toString();
}

function add() {
  display.textContent += "+";
  expression += "+";
}

function subtract() {
  display.textContent += "-";
  expression += "-";
}

function multiply() {
  display.textContent += "*";
  expression += "*";
}

function divide() {
  display.textContent += "/";
  expression += "/";
}
