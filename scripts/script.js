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
                display.innerText = (display.innerText + buttonValue).substring(0, 10);
            }
        }
    });
}
