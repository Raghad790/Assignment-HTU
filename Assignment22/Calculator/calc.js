let firstNumber = 2;
let operation = "+";
let secondNumber = 3;
let result;
switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    console.log(result);
    break;
  case "-":
    result = firstNumber - secondNumber;
    console.log(result);
    break;
  case "/":
    result = firstNumber / secondNumber;
    console.log(result);
    break;
  case "*":
    result = firstNumber * secondNumber;
    console.log(result);
    break;
}
firstNumber = 20;
operation = "*";
secondNumber = 60;
if (operation === "*") {
  result = firstNumber * secondNumber;
  console.log(result);
} else if (operation === "+") {
  result = firstNumber + secondNumber;
  console.log(result);
} else if (operation === "/") {
  result = firstNumber / secondNumber;
  console.log(result);
} else if (operation === "-") {
  result = firstNumber - secondNumber;
  console.log(result);
} else {
  console.log("something went wrong");
}
function calc(f, s, o) {
  if (o === "*") {
    result = f * s;
    console.log(result);
  } else if (o === "+") {
    result = f + s;
    console.log(result);
  } else if (o === "/") {
    result = f / s;
    console.log(result);
  } else if (operation === "-") {
    result = f - s;
    console.log(result);
  } else {
    console.log("something went wrong");
  }
}
