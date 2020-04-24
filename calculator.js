let x = undefined;
let y = undefined;
let operator = undefined;
let monitorValue = "";
function add(x,y){
    return Number(x) + Number(y);
}
function subtract(x,y){
    return Number(x) -Number(y);
}

function multiply(x,y){
    return Number(x)*Number(y);
}
function divide(x,y){
    return Number(x)/Number(y);
}
function operate(x,y,operator){
    switch(operator){
        case '+':
            return add(x,y);
            break;
        case '-':
            return subtract(x,y);
            break;
        case 'x':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
        default:
            return undefined;
	}
}
function responseNumeralClick(){
	monitorValue += this.textContent;
	monitor.value = monitorValue;
}

function responseOperationClick(){
	if(operator === undefined){	
		x = monitorValue;
		operator = this.id;
		monitorValue = "";
	}
}
function clear()
{
	monitorValue = "";
	monitor.value = "";
	x = undefined;
	y = undefined;
	operator = undefined;
}
function performOperation(){
	if(monitorValue != ""&& operator != undefined){
		y = monitorValue;
		monitorValue = operate(x,y,operator);
		operator = undefined;
		y = undefined;
		monitor.value = monitorValue;
	}
}
const numPad = Array.from(document.querySelectorAll(".num"));
const operatorPad =Array.from(document.querySelectorAll(".op"));
const monitor = document.getElementById("monitor");
const negateInput = document.getElementById("negate");
const clearButton =document.getElementById("clear");
const equalButton = document.getElementById("equals");

operatorPad.forEach(key => key.addEventListener("click", responseOperationClick));
numPad.forEach(key => key.addEventListener("click", responseNumeralClick));
negateInput.addEventListener("click", () => monitor.value *= -1);
clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", performOperation);
