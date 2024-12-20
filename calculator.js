function additionFunction(num1, num2) {
  return num1 + num2;
}

function subtractionFunction(num1, num2) {
  return num1 - num2;
}

function multiplicationFunction(num1, num2) {
  return num1 * num2;
}

function divisionFunction(num1, num2) {
  return num1 / num2;
}

const display = document.querySelector("#display");

const appendNumber = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteDigit = () => {
  display.value = display.value.slice(0, -1);
};

function calculate() {
  const expression = display.value;
  const numbers = expression.split(/[-+*\/]/);
  const operator = expression.match(/[-+*\/]/);
  const num1 = parseFloat(numbers[0]);
  const num2 = parseFloat(numbers[1]);

  switch (operator[0]) {
    case "+":
      display.value = additionFunction(num1, num2);
      break;
    case "-":
      display.value = subtractionFunction(num1, num2);
      break;
    case "*":
      display.value = multiplicationFunction(num1, num2);
      break;
    case "/":
      display.value = divisionFunction(num1, num2);
      break;
    default:
      display.value = "Error";
  }
}
