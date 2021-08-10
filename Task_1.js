/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.
*/

/**
 * 
 * @param {number} celsus 
 * @returns {number}
 */
function calcFahrenheitTemperature(celsus) {

    return 9 / 5 * celsus + 32
}

let cel = 30;
let message = `${cel} градусов по Цельсию - это ${calcFahrenheitTemperature(cel)} по Фаренгейту!`;
alert(message);


