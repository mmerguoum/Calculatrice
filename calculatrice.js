const numberButtons = document.querySelectorAll('.btn-num');
const operateButtons = document.querySelectorAll('.btn-op');
const clearButton = document.querySelector('#btn-clear');
const deleteButton = document.querySelector('#btn-delete');
const equalButton = document.querySelector('#btn-equal');
const dotButton = document.querySelector('#btn-dot');
const screen = document.querySelector('#text');
// const topDisplay = document.querySelector('#screen-top');


overwrite = true;
let operand1 = "";
let operand2 = "";
let operation = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            if (b === 0) {
                alert("Error: dividing with zero");
                return;
            }
            return divide(a, b);
    }
}
function enterValue(e){
if(screen.textCntent === 16 && overwrite === false){
    return;
}

let value= e.target.textContent;
console.log(value);

if (screen.textContent === "0" && value === "0") {
    return;
}
console.log(overwrite)
if (overwrite === true) {
    screen.textContent = value;
    overwrite = false;
} else {
    screen.textContent += value;
}
}
numberButtons.forEach(b => {
    b.addEventListener('click', enterValue);
});



// var student = {
//     fullName : "merguoum mourad",
//     getFullName : function (){
//      console.log(this);
//      console.log(this.fullName);
//     } 
// }

// var getFullName = student.getFullName;
//var fullName = "class4";

// student.getFullName();
