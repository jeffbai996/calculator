// get number key elements and display element
let numbers = document.getElementsByClassName('number');
let display = document.getElementById('display');

// add listeners to number keys
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        let buttonValue = this.textContent;
        if (buttonValue === 'CLEAR') {
            display.innerText = "0";
        } else {
            if (display.innerText === "0") {
                display.innerText = buttonValue;
            } else {
                display.innerText = (display.innerHTML + buttonValue).substring(0, 10);
            }
        }
    });
}


// get answer
// const answer = document.getElementById('answer');
// answer.innerText = 0;

// function getNums() {
//     numOne = parseInt(document.getElementById('num1').value, 10);
//     numTwo = parseInt(document.getElementById('num2').value, 10);
// }

// function add() {
//     getNums();
//     answer.innerText = numOne + numTwo;
// }

// function subtract() {
//     getNums();
//     answer.innerText = numOne - numTwo;
// }

// function multiply() {
//     getNums();
//     answer.innerText = numOne * numTwo;
// }

// function divide() {
//     getNums();
//     answer.innerText = numOne / numTwo;
// }
