let currentResult = 0;
let logResult = [];

// let userFirstInput = 100;
// userFirstInput = 120;

// let operator = '+';
// let userSecondInput = 220;

// currentResult = userFirstInput + userSecondInput;
// let result_description = `${userFirstInput} ${operator} ${userSecondInput}`
// outputResult(currentResult, result_description)
// Global scope is outside the fxn
//function add (num1, num2) { //function definition
//local scope is inside or within the fxn
//const result = num1 + num2; //function body
//return result
//alert(result);
//}

//currentResult =  add(1, 3); //calling the function defined above, that is invoking the fxn
// outputResult(currentResult, '')

// Executing function indirectly

// function add1 () {
//     const result = 1 + 2;
//     alert(result)
// }
// Here we use an inbuilt fxn of js which addEventListener which takes an inbuilt action
//and invoke the add1 funtion with no parameter for the action click to work.
//addBtn.addEventListener('click', add1)

// Get's user input
function getUserInput() {
  return parseInt(userInput.value);
}

// Displays calculation description
function getDescription(temporal, operator) {
  return `${temporal} ${operator} ${getUserInput()}`;
}

function writeLog(currentResult, calcDescription) {
  let resultObj = {
    result: currentResult,
    description: calcDescription,
  };
  logResult.push(resultObj);
  console.log(logResult);
}

function calculate(type) {
  if (
    type != "ADD" &&
    type != "SUBTRACT" &&
    type != "MULTIPLY" &&
    type != "DIVIDE"
  ) {
    return;
  }

  let temporal = currentResult;

  let operator;
  if (type == "ADD") {
    currentResult += getUserInput();
    operator = "+";
  } else if (type == "SUBTRACT") {
    currentResult += getUserInput();
    operator = "-";
  } else if (type == "MULTIPLY") {
    currentResult *= getUserInput();
    operator = "*";
  } else if (type == "DIVIDE") {
    currentResult /= getUserInput();
    operator = "/";
  } else {
    console.log("Please enter a valid operator dude");
  }
  const calcDescription = getDescription(temporal, operator);
  writeLog(currentResult, calcDescription);
  outputResult(currentResult, calcDescription);
}

function add() {
  calculate("ADD");
}

addBtn.addEventListener("click", add);

function subtract() {
  calculate("SUBTRACT");
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
  calculate("MULTIPLY");
}
multiplyBtn.addEventListener("click", multiply);

function divide() {
  calculate("DIVIDE");
}
divideBtn.addEventListener("click", divide);
