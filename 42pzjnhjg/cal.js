const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");
let angleMode = 'deg';  

buttonsEl.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (button.classList.contains("clear")) {
            clearResult();
        } else if (button.classList.contains("equals")) {
            calculateResult();
        } else if (button.classList.contains("function")) {
            handleFunction(buttonValue);
        } else {
            appendValue(buttonValue);
        }
    });
});

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    try {
        // Evaluate the expression safely
        inputFieldEl.value = eval(inputFieldEl.value);
    } catch (error) {
        inputFieldEl.value = "Error";
    }
}

function appendValue(value) {
    inputFieldEl.value += value;
}

function handleFunction(func) {
    let currentValue = parseFloat(inputFieldEl.value) || 0;

    switch (func) {
        case "sin":
            currentValue = Math.sin(convertToRadians(currentValue));
            break;
        case "cos":
            currentValue = Math.cos(convertToRadians(currentValue));
            break;
        case "tan":
            currentValue = Math.tan(convertToRadians(currentValue));
            break;
        case "log":
            currentValue = Math.log10(currentValue);
            break;
        case "ln":
            currentValue = Math.log(currentValue);
            break;
        case "inv":
            currentValue = 1 / currentValue;
            break;
        case "!":
            currentValue = factorial(currentValue);
            break;
        case "π":
            currentValue = Math.PI;
            break;
        case "e":
            currentValue = Math.E;
            break;
        case "^":
            inputFieldEl.value += "**"; 
            return;
        case "deg":
        case "rad":
            angleMode = func;
            return;
        default:
            break;
    }

    inputFieldEl.value = currentValue;
}

function convertToRadians(value) {
    return angleMode === 'deg' ? value * (Math.PI / 180) : value;
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
