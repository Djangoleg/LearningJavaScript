/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function getSum(a, b) {
    return a + b;
}

function getSub(a, b) {
    return a - b;
}

function getMul(a, b) {
    return a * b;
}

function getDiv(a, b) {
    return a / b;
}

function mathOperation(a, b, operation) {

    switch(operation) {
        case 'sum': {
            return 'a + b = ' + getSum(a, b);
        }
        case 'sub': {
            return 'a - b = ' + getSub(a, b); 
        }
        case 'mul': {
            return 'a * b = ' + getMul(a, b);
        }
        case 'div': {
            return 'a / b = ' + getDiv(a, b);
        }
    }
}

let a = 8;
let b = 4;

console.log('a = ' + a + ', b = ' + b);
console.log(mathOperation(a, b, 'sum'));
console.log(mathOperation(a, b, 'sub'));
console.log(mathOperation(a, b, 'mul'));
console.log(mathOperation(a, b, 'div'));

/*
Результат:

a = 8, b = 4
a + b = 12
a - b = 4
a * b = 32
a / b = 2
*/
