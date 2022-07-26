// DOM elements
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const displayValue = document.querySelector('#display-value');

// stored data
let currentNumber = '';
let storedNumber = '';
let clickedOperator = '';
let result = '';

displayValue.innerText = "0"

// Calculation functions
function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "÷":
            return a / b;
        case "×":
            return a * b;
    }
};

// DOM manipulation and user input functions
numberButtons.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += Number(number.innerText);
        displayValue.innerText = storedNumber.substring(0, 11);
    })
}); 

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', function() {
        if (currentNumber && storedNumber) {
            displayResult();
        }
        currentNumber = storedNumber;
        clickedOperator = operator.innerText;
        displayValue.textContent = `${storedNumber}  ${clickedOperator}`;
        storedNumber = '';
    });
});

equalsButton.addEventListener('click', function() {
    displayResult();
});

function displayResult() {
    if (currentNumber && storedNumber) {
        result = operate(Number(currentNumber), Number(storedNumber), clickedOperator);
        displayValue.textContent = result;
        storedNumber = result;
    };
};

function clearAll() {
    displayValue.innerText = "0";
    currentNumber = '';
    storedNumber = '';
};