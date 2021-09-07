// 2. Не выполняя кода, ответить, что выведет браузер и почему:

if (!("a" in window)) {
    var a = 1;
}
alert(a);
// Выведет undefined, т.к. объявление переменной "a" хостится в windows, а присвоение не происходит, т.к !("a" in window) == false.

var b = function a(x) {
    x && a(--x);
};
alert(a);
// Выведет undefined, т.к. возможно, присвоение ссылки на функцию теперь назначено переменной "b". Но я не уверен, что ответ правильный.

function a(x) {
    return x * 2;
}
var a;
alert(a);

// Выведет: ƒ a(x) {
//    return x * 2;
//}
// т.к. в переменную "a" не было произведено присвоение значения.

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
// Выведет 10, т.к arguments[2] это как раз "a".

function a() {
    alert(this);
}
a.call(null);
// Выведет window, т.к. если метод является функцией в коде нестрогого режима, null и undefined будут заменены глобальным объектом. И выведет 
// undefined при 'use strict'.
