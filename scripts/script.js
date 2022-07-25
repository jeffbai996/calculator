// get the two numbers specified
let numOne;
let numTwo;

// get answer
const answer = document.getElementById('answer');
answer.innerText = 0;

function getNums() {
    numOne = parseInt(document.getElementById('num1').value, 10);
    numTwo = parseInt(document.getElementById('num2').value, 10);
}

function add() {
    getNums();
    answer.innerText = numOne + numTwo;
}

function subtract() {
    getNums();
    answer.innerText = numOne - numTwo;
}

function multiply() {
    getNums();
    answer.innerText = numOne * numTwo;
}

function divide() {
    getNums();
    answer.innerText = numOne / numTwo;
}
