const display = document.getElementById("display");
let currentInput = "";

function updateDisplay() {
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function squareRoot() {
  try {
    currentInput = Math.sqrt(eval(currentInput)).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function square() {
  try {
    currentInput = (eval(currentInput) ** 2).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function cube() {
  try {
    currentInput = (eval(currentInput) ** 3).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function percentage() {
  try {
    currentInput = (eval(currentInput) / 100).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function convertToBinary() {
  try {
    currentInput = (eval(currentInput)).toString(2);
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function convertToHexadecimal() {
  try {
    currentInput = (eval(currentInput)).toString(16).toUpperCase();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function onButtonClick(value) {
  if (value === "=") {
    calculate();
  } else if (value === "C") {
    clearDisplay();
  } else if (value === "⌫") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else {
    currentInput += value;
    updateDisplay();
  }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", () => onButtonClick(button.textContent));
});

// Enable keyboard input
document.addEventListener("keydown", event => {
  const key = event.key;
  const isNumber = !isNaN(key);
  const isOperator = ['+', '-', '*', '/', '%'].includes(key);
  const isEnter = key === 'Enter';
  const isEscape = key === 'Escape';
  const isBackspace = key === 'Backspace';

  if (isNumber || isOperator) {
    onButtonClick(key);
  } else if (isEnter) {
    calculate();
  } else if (isEscape) {
    clearDisplay();
  } else if (isBackspace) {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }
});
