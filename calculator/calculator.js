// Getting display element
const display = document.getElementById('display');

// Variables to store the current input and previous input (for operations)
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay() {
    display.value = currentInput;
}

// Function to handle number button clicks
function handleNumber(num) {
    currentInput += num;
    updateDisplay();
}

// Function to handle operator button clicks
function handleOperator(op) {
    if (currentInput === '') return; // If no number is entered, ignore operator
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to clear the display and inputs
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Function to calculate the result based on operator
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (operator === '+') {
        result = prev + current;
    } else if (operator === '-') {
        result = prev - current;
    } else if (operator === '*') {
        result = prev * current;
    } else if (operator === '/') {
        result = prev / current;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

// Event listeners for number buttons
document.getElementById('btn-1').addEventListener('click', () => handleNumber('1'));
document.getElementById('btn-2').addEventListener('click', () => handleNumber('2'));
document.getElementById('btn-3').addEventListener('click', () => handleNumber('3'));
document.getElementById('btn-4').addEventListener('click', () => handleNumber('4'));
document.getElementById('btn-5').addEventListener('click', () => handleNumber('5'));
document.getElementById('btn-6').addEventListener('click', () => handleNumber('6'));
document.getElementById('btn-7').addEventListener('click', () => handleNumber('7'));
document.getElementById('btn-8').addEventListener('click', () => handleNumber('8'));
document.getElementById('btn-9').addEventListener('click', () => handleNumber('9'));
document.getElementById('btn-0').addEventListener('click', () => handleNumber('0'));

// Event listeners for operator buttons
document.getElementById('btn-add').addEventListener('click', () => handleOperator('+'));
document.getElementById('btn-subtract').addEventListener('click', () => handleOperator('-'));
document.getElementById('btn-multiply').addEventListener('click', () => handleOperator('*'));
document.getElementById('btn-divide').addEventListener('click', () => handleOperator('/'));

// Event listener for equals button
document.getElementById('btn-equal').addEventListener('click', () => calculate());

// Event listener for clear button
document.getElementById('btn-clear').addEventListener('click', () => clearDisplay());
