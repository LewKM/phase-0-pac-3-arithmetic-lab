var a, b;

a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

// Normal Arithmetic operators//

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//Increment and Decrement and Parse-float//

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}