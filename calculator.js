
function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
function operate(x,y,operator){
    switch(operator){
        case '+':
            return add(x,y);
            break;
        case '-':
            return subtract(x,y);
            break;
        case '*':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
        default:
            return undefined;
	}
}
function keyBehavior(e){
	console.log(this.textContent);
	monitor.value += this.textContent;
}

const keyboard = Array.from(document.querySelectorAll(".num"));
const monitor = document.getElementById("monitor");
const negateInput = document.getElementById("negate");

keyboard.forEach(key => key.addEventListener("click", keyBehavior));
negateInput.addEventListener("click", () => monitor.value *= -1);
