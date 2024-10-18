const calculatorScreen = document.querySelector('.calculator-screen');
let currentInput = '0';
let prevInput = '';
let operator = null;
let resultCalculated = false;

/*
Uppdate the screen, but using input value.
*/
const updateScreen = (value) => {
    calculatorScreen.value = value;
};

/*
Handle number input
*/
const inputNumber = (num) => {
    if (currentInput === '0' || resultCalculated) {
        currentInput = num;
        resultCalculated = false;
    } else {
        currentInput += num;
    }
    updateScreen(currentInput); // Update the screen with each number input
};

/*
Handle operator input
*/
const inputOperator = (op) => {
    if (operator && prevInput) {
        calculate();
    }
    prevInput = currentInput;
    operator = op;
    currentInput = '';
    updateScreen(`${prevInput} ${operator}`); // Show the operator on the screen
};

/*
Function to calculate the result
*/
const calculate = () => {
    let result;
    const prev = parseFloat(prevInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case 'sqrt':
            result = Math.sqrt(prev);
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    prevInput = '';
    resultCalculated = true;
    updateScreen(currentInput); // Display the result on the screen
};

// Function to handle equal sign input
const handleEqualSign = () => {
    if (!operator || !prevInput) return;
    calculate();
};

// Function to clear the calculator
const clearAll = () => {
    currentInput = '0';
    prevInput = '';
    operator = null;
    resultCalculated = false;
    updateScreen(currentInput); // Reset the screen
};

// Add event listeners to all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;
        
        if (value === 'all-clear') {
            clearAll();
        } else if (value === '=') {
            handleEqualSign();
        } else if (['+', '-', '*', '/', '%', 'sqrt', '^'].includes(value)) {
            inputOperator(value);
        } else {
            inputNumber(value);
        }
    });
});
