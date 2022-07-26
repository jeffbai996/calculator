// get number key elements and display element
let numberButtons = document.getElementsByClassName('number');
let operatorButtons = document.getElementsByClassName('operator');
let equalsButton = document.getElementById('equals');
let clearButton = document.getElementById('clear');
let lastOperand = document.getElementById('last-operand');
let currentOperand = document.getElementById('current-operand');

// add listeners to number keys
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function() {
        let buttonValue = this.textContent;
        if (buttonValue) {
            if (currentOperand.innerText === "0") {
                currentOperand.innerText = buttonValue;
            } else {
                currentOperand.innerText = (currentOperand.innerText + buttonValue).substring(0, 10);
            }
        }
    });
}

function clearAll() {
    currentOperand.innerText = "0";
};

function add() {
    let num1 = Number(currentOperand.innerText);
    storeLastOperand(num1);
}

function storeLastOperand(n) {
    console.log(n);
}