const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput()
{
    return parseInt(userInput.value); 
}

function writeToLog(mathOperation,enteredNumber,initialResult,newResult)
{
  const logEntry = {
    operation: mathOperation,
    number: enteredNumber,
    prevResult: initialResult,
    result: newResult
  };
 
  logEntries.push(logEntry);
}

function add()
{
   let initialResult = currentResult;
  const calcDescription = `${currentResult} + ${getUserNumberInput()}`;
   currentResult += getUserNumberInput();
 outputResult(currentResult,calcDescription);
  writeToLog("ADD",getUserNumberInput(),initialResult,currentResult);
}

function substract()
{
  let initialResult = currentResult;
  const calcDescription = `${currentResult} - ${getUserNumberInput()}`;
    currentResult -= getUserNumberInput();
  outputResult(currentResult,calcDescription);
  writeToLog("SUBSTRACT",getUserNumberInput(),initialResult,currentResult);
  
}
function multiply()
{
  let initialResult = currentResult;
  const calcDescription = `${currentResult} * ${getUserNumberInput()}`;
    currentResult *= getUserNumberInput();
  outputResult(currentResult,calcDescription);
  writeToLog("MULTIPLICATION",getUserNumberInput(),initialResult,currentResult);
  
}

function divide()
{
    let initialResult = currentResult;
    const calcDescription = `${currentResult} / ${getUserNumberInput()}`;
    currentResult /= getUserNumberInput();
  outputResult(currentResult,calcDescription); 
  writeToLog("DIVISION",getUserNumberInput(),initialResult,currentResult);
   
}

addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",substract);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);