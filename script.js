// OPERATOR FUNCTIONS
let operators = {
    '+': (a,b) => (a+b),
    '-': (a,b) => (a-b),
    'x': (a,b) => (a*b),
    '/': (a,b) => (a/b)
};
function operate(a,b,c) {    
    let result = operators[c](a, b);
    let arr = ('' + result).split('');
    arr.splice(11, arr.length);
    console.log(num1 + operator + num2);
    return arr.join('');
};

let operator = [];
const ops = document.querySelectorAll('.op');
ops.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (operator.length === 0) {
            operator.push(btn.textContent);
            console.log(num1 + operator + num2);
            display.textContent = `${(num1.concat(operator[0]).join(''))}`;
        } else if (operator.length !==0 && evaluated.length !==0) {
        //----required if we perform more operations after clicking "="----// 
            num1.splice(0, num1.length);
            num2.splice(0, num2.length);
            operator.splice(0, 1);
            num1.push(`${evaluated}`);
            operator.push(btn.textContent);
            console.log(num1 + operator + num2);
            display.textContent = `${(num1.concat(operator[0]).join(''))}`;
        //-----------------------------------------------------------------//
        } else {
            let a = Number(num1.join(''));
            let b = Number(num2.join(''));
            let c = operator[0];
            if (c === '/' && b === 0) {
                display.textContent = 'IQ 60 move! Congrats!';
            } else {
            operate(a,b,c);
            console.log(num1 + operator + num2);
            display.textContent = `${(operate(a,b,c))}`;
            num1.splice(0, num1.length);
            num2.splice(0, num2.length);
            operator.splice(0, 1);
            num1.push(display.textContent);
            operator.push(btn.textContent);
            console.log(num1 + operator + num2);
            display.textContent = `${(num1.concat(operator[0]).join(''))}`;
            };
        };
    });
});

// GET NUMBERS

let num1 = [];
let num2 = [];
const digits = document.querySelectorAll('.num');
digits.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (operator.length === 0 && num1.includes('.') && btn.textContent === '.') {
            num1.push('');
        } else if (operator.length === 0) {
            num1.push(btn.textContent);
            console.log(num1 + operator + num2);
            display.textContent = `${(num1.join(''))}`;
        } else {
            if (operator.length !== 0 && num2.includes('.') && btn.textContent === '.') {
                num2.push('');
            } else if (operator.length !== 0) {
            num2.push(btn.textContent);
            console.log(num1 + operator + num2);
            display.textContent = `${(num1.concat(operator[0], num2).join(''))}`;
            };
        };
    });
});

// DISPLAY

let display = document.querySelector('.display');

// CLEAR FUNCTION

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    num1.splice(0, num1.length);
    num2.splice(0, num2.length);
    operator.splice(0, 1);
    display.textContent = '';
});

// BACKSPACE FUNCTION

let backspace = document.querySelector ('.bs');
backspace.addEventListener('click', () => {
    if (operator.length === 0) {
        num1.splice(num1.length-1, 1);
        console.log(num1 + operator + num2);
        display.textContent = `${(num1.join(''))}`;
    } else if (operator.length !== 0 && num2.length === 0) {
        operator.splice(0, 1);
        console.log(num1 + operator + num2);
        display.textContent = `${(num1.join(''))}`;
    } else if (operator.length !== 0 && num2.length !== 0) {
        num2.splice(num2.length-1, 1);
        console.log(num1 + operator + num2);
        display.textContent = `${(num1.concat(operator[0], num2).join(''))}`;
    };
});

// EVALUATION FUNCTION

let evaluated = [];
let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    let a = Number(num1.join(''));
    let b = Number(num2.join(''));
    let c = operator[0];
    if (c === '/' && b === 0) {
        display.textContent = 'IQ 60 move! Congrats!';
    } else if (num2.length !==0) {
        operate(a,b,c);
        evaluated.splice(0, evaluated.length);
        console.log(num1 + operator + num2);
        display.textContent = `${(operate(a,b,c))}`;
    };
});