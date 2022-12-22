// DOM elements
const displayValue = document.querySelector('#display-value');

// Event listeners
document.querySelectorAll('.number').forEach((number) => {
    number.addEventListener('click', () => handleNumberClick(number));
});

document.querySelector('#delete').addEventListener('click', handleDeleteClick);

document.querySelectorAll('.operator').forEach((operator) => {
    operator.addEventListener('click', () => handleOperatorClick(operator));
});

document.querySelector('#equals').addEventListener('click', handleEqualsClick);

document.querySelector('#clear').addEventListener('click', clearAll);

// Stored data
let currentNumber = '';
let storedNumber = '';
let clickedOperator = '';
let result = '';
let lastOperand = '';
let lastOperator = '';

displayValue.innerText = 0;

// Calculation functions
function operate(a, b, operator) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '÷': (a, b) => (b === 0 ? NaN : a / b),
        '×': (a, b) => a * b,
    };
    return operations[operator](a, b);
};

function updateDisplay(value) {
    displayValue.textContent = value.toString().length > 11 ? value.toExponential(5) : value;
}

function handleNumberClick(number) {
    if (storedNumber.length < 11) {
        storedNumber += number.innerText;
        updateDisplay(storedNumber);
    }
}

function handleDeleteClick() {
    if (storedNumber.length > 1) {
        storedNumber = storedNumber.slice(0, -1);
    } else {
        storedNumber = 0;
    }
    updateDisplay(storedNumber);
}

function handleOperatorClick(operator) {
    if (currentNumber !== 0 && storedNumber !== 0) {
        displayResult();
    }
    currentNumber = storedNumber;
    clickedOperator = operator.innerText;
    updateDisplay(`${currentNumber} ${clickedOperator}`);
    storedNumber = '';
}

function handleEqualsClick() {
    if (currentNumber && storedNumber) {
        displayResult();
        lastOperator = clickedOperator;
        lastOperand = storedNumber;
    } else if (currentNumber && lastOperand) {
        result = operate(Number(currentNumber), Number(lastOperand), lastOperator);
        updateDisplay(result);
        currentNumber = result;
    }
    storedNumber = '';
}

function displayResult() {
    if (currentNumber && storedNumber) {
        result = operate(Number(currentNumber), Number(storedNumber), clickedOperator);
        updateDisplay(result);
        currentNumber = result;
    }// Event listeners
document.querySelectorAll('.number').forEach((number) => {
    number.addEventListener('click', () => handleNumberClick(number));
});

document.querySelector('#delete').addEventListener('click', handleDeleteClick);

document.querySelectorAll('.operator').forEach((operator) => {
    operator.addEventListener('click', () => handleOperatorClick(operator));
});

document.querySelector('#equals').addEventListener('click', handleEqualsClick);

document.querySelector('#clear').addEventListener('click', clearAll);
}

function clearAll() {
    updateDisplay(0);
    currentNumber = '';
    storedNumber = '';
}