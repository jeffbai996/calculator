// DOM elements
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const displayValue = document.querySelector('#display-value');

// stored data
let currentNumber = '';
let storedNumber = '';
let clickedOperator = '';
let result = '';

displayValue.innerText = 0;

// Calculation functions
function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "÷":
            if (b === 0) {
                return NaN;
            } else {
                return a / b;
            }
        case "×":
            return a * b;
    }
};

// DOM manipulation and user input functions
numberButtons.forEach((number) => {
    number.addEventListener('click', function() {
        if (storedNumber.length < 11) {
            storedNumber += number.innerText;
            displayValue.innerText = storedNumber;
        }
    })
}); 

deleteButton.addEventListener('click', function() {
    if (storedNumber.length > 1) {
        storedNumber = storedNumber.slice(0, -1);
        displayValue.innerText = storedNumber;
    } else {
        storedNumber = 0;
        displayValue.innerText = "0";
    }
});

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', function() {
        // handle stringing operations
        if (currentNumber !== 0 && storedNumber !== 0) {
            displayResult();
        }
        // store the number/operator inputted
        currentNumber = storedNumber;
        clickedOperator = operator.innerText;
        // displays current number + selected operator
        if (currentNumber.toString().length > 11) {
            displayValue.textContent = `${currentNumber.toExponential(fractionDigits = 5)} ${clickedOperator}`;
        } else {
            displayValue.textContent = `${currentNumber} ${clickedOperator}`;
        }
        // clear stored number for next calculation
        storedNumber = '';
    })
});

equalsButton.addEventListener('click', function() {
    displayResult();
});

function displayResult() {
    // check if there are two values to operate on
    if (currentNumber && storedNumber) {
        result = operate(Number(currentNumber), Number(storedNumber), clickedOperator);
        if (result.toString().length > 11) { 
            displayValue.textContent = result.toExponential(fractionDigits = 5);
        } else {
            displayValue.textContent = result;
        }
        // store the result
        storedNumber = result;
        // reset the current number
        currentNumber = 0;
    }
};

function clearAll() {
    displayValue.innerText = "0";
    currentNumber = '';
    storedNumber = '';
};