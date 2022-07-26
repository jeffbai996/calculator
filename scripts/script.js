// get number key elements and display element
let numberButtons = document.getElementsByClassName('number');
let operatorButtons = document.getElementsByClassName('operator');
let equalsButton = document.getElementById('equals');
let clearButton = document.getElementById('clear');
let lastOperandElement = document.getElementById('last-operand');
let currentOperandElement = document.getElementById('current-operand');
let currentOperand; // stores value of current operand
let lastOperand; // stores value of last operand

// add listeners to number keys
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function() {
        let buttonValue = this.textContent;
        if (currentOperandElement.innerText === "0") {
            currentOperandElement.innerText = buttonValue;
        } else {
            currentOperandElement.innerText = (currentOperandElement.innerText + buttonValue).substring(0, 10);
        }
    });
}

function clearAll() {
    currentOperandElement.innerText = "0";
};

function add() {

};

function operate() {

};