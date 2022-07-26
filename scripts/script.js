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
                return "lulz";
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
        storedNumber += number.innerText;
        displayValue.innerText = storedNumber.substring(0, 11);
    })
}); 

deleteButton.addEventListener('click', function() {
    if (storedNumber.length > 1) {
        storedNumber = storedNumber.slice(0, -1);
        displayValue.innerText = storedNumber;
    } else {
        storedNumber = '';
        displayValue.innerText = "0";
    }
});

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', function() {
        // handle stringing operations
        if (currentNumber && storedNumber) {
            displayResult();
        }
        // store the number/operator inputted
        currentNumber = storedNumber;
        clickedOperator = operator.innerText;
        // displays current number + selected operator
        displayValue.textContent = `${currentNumber} ${clickedOperator}`;
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
        displayValue.textContent = result;
        // store the result
        storedNumber = result;
        // reset the current number
        currentNumber = '';
    }
};

function clearAll() {
    displayValue.innerText = "0";
    currentNumber = '';
    storedNumber = '';
};