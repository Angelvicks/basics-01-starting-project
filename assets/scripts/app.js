 let currentResult = 0;
 let logResult = []


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
function getUserInput () {
    return parseInt(userInput.value)
}

// Displays calculation description
function getDescription(operator){
    return `${currentResult} ${operator} ${getUserInput()}`
}
function add () {
    const calcDescription = getDescription('+')
    currentResult +=  getUserInput();
    let resultObj= {
        result: currentResult,
        description: calcDescription
    }
    logResult.push(resultObj)
    outputResult(currentResult, calcDescription)
}

addBtn.addEventListener('click', add)

function  subtract() {
    const calcDescription = getDescription('-')
    currentResult -=  getUserInput();
    
    let resultObj= {
        result: currentResult,
        description: calcDescription
    }
    logResult.push(resultObj)
    console.log(logResult);
    outputResult(currentResult, calcDescription)
}
subtractBtn.addEventListener('click', subtract)

function multiply () {
    const calcDescription = getDescription('*')
    currentResult *=  getUserInput();
    
    let resultObj= {
        result: currentResult,
        description: calcDescription
    }
    logResult.push(resultObj)
    console.log(logResult);
    outputResult(currentResult, calcDescription)
}
multiplyBtn.addEventListener('click', multiply)

function divide () {
    const calcDescription = getDescription('/')
    currentResult /=  getUserInput();
    
    let resultObj= {
        result: currentResult,
        description: calcDescription
    }
    logResult.push(resultObj)
    console.log(logResult);
    outputResult(currentResult, calcDescription)
}
divideBtn.addEventListener('click', divide)
