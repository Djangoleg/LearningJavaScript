/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
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


let a = 8;
let b = 4;

console.log('a = ' + a + ', b = ' + b);
console.log('a + b = ' + getSum(a, b));
console.log('a - b = ' + getSub(a, b));
console.log('a * b = ' + getMul(a, b));
console.log('a / b = ' + getDiv(a, b));

/*
Результат:

a = 8, b = 4
a + b = 12
a - b = 4
a * b = 32
a / b = 2
*/
