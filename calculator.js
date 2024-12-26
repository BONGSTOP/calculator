class Calculator {
  constructor(displayElement) {
    this.display = displayElement;
  }

  additionFunction(num1, num2) {
    return num1 + num2;
  }

  subtractionFunction(num1, num2) {
    return num1 - num2;
  }

  multiplicationFunction(num1, num2) {
    return num1 * num2;
  }

  divisionFunction(num1, num2) {
    return num1 / num2;
  }

  complexOperation(num1, num2, num3) {
    return num1 + num2 * num3;
  }

  appendNumber(input) {
    this.display.value += input;
  }

  clearDisplay() {
    this.display.value = "";
  }

  deleteDigit() {
    this.display.value = this.display.value.slice(0, -1);
  }

  calculate() {
    const expression = this.display.value;
    const numbers = expression.split(/[-+*\/]/);
    const operator = expression.match(/[-+*\/]/);
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    switch (operator[0]) {
      case "+":
        this.display.value = this.additionFunction(num1, num2);
        break;
      case "-":
        this.display.value = this.subtractionFunction(num1, num2);
        break;
      case "*":
        this.display.value = this.multiplicationFunction(num1, num2);
        break;
      case "/":
        this.display.value = this.divisionFunction(num1, num2);
        break;
      default:
        this.display.value = "Error";
    }
  }
}

const display = document.querySelector("#display");
const calculator = new Calculator(display);
