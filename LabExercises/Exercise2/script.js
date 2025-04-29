let currentOperation = null;

function setOperation(op) {
  currentOperation = op;
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Please enter both numbers.";
    return;
  }

  let result;
  switch (currentOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultDiv.textContent = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDiv.textContent = "Select an operation.";
      return;
  }

  resultDiv.textContent = `Result: ${result}`;
}

function resetCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "";
  currentOperation = null;
}
