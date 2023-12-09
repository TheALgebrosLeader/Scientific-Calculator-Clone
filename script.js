let memory = 0;
let operator = '';

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    operator = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function toggleSign() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = -eval(currentDisplay);
}

function percent() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = eval(currentDisplay) / 100;
}

function setOperator(op) {
    operator = op;
    appendToDisplay(op);
}

function performOperation(operation) {
    let currentDisplay = document.getElementById('display').value;

    switch (operation) {
        case 'sqrt':
            document.getElementById('display').value = Math.sqrt(eval(currentDisplay));
            break;
        case 'power':
            document.getElementById('display').value = Math.pow(eval(currentDisplay), prompt('Enter the power:'));
            break;
        case 'log':
            document.getElementById('display').value = Math.log10(eval(currentDisplay));
            break;
        case 'sin':
            document.getElementById('display').value = Math.sin(eval(currentDisplay));
            break;
        case 'cos':
            document.getElementById('display').value = Math.cos(eval(currentDisplay));
            break;
        case 'tan':
            document.getElementById('display').value = Math.tan(eval(currentDisplay));
            break;
        case 'asin':
            document.getElementById('display').value = Math.asin(eval(currentDisplay));
            break;
        case 'acos':
            document.getElementById('display').value = Math.acos(eval(currentDisplay));
            break;
        case 'atan':
            document.getElementById('display').value = Math.atan(eval(currentDisplay));
            break;
        case 'exp':
            document.getElementById('display').value = Math.exp(eval(currentDisplay));
            break;
        default:
            break;
    }
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
        operator = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function memoryStore() {
    memory = eval(document.getElementById('display').value);
}

function memoryRecall() {
    document.getElementById('display').value += memory;
}

function memoryClear() {
    memory = 0;
}
