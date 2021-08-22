/*
    1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
    в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить 
    следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее 
    сообщение с помощью console.log и вернуть пустой объект.
*/

function getObjectNum(num) {

    if (!Number.isInteger(num)) {
        console.log('Пердано не число!');
        return {};  
    }
  
    if (num > 999 ) {
      console.log('Число превышает 999');
      return {};  
    }
  
    let hundred = Math.floor(num / 100);
    let dozen = Math.floor((num - (hundred * 100)) / 10);
    let unit = num - ((hundred * 100) + (dozen * 10));
  
    return {
      units: unit, 
      dozens: dozen, 
      hundreds: hundred
    }
}

console.log(getObjectNum(245));
console.log(getObjectNum(1000));
console.log(getObjectNum(15));
console.log(getObjectNum(7));
console.log(getObjectNum('asas'));

/*
    Результат:

    {units: 5, dozens: 4, hundreds: 2}
    Число превышает 999
    {}
    {units: 5, dozens: 1, hundreds: 0}
    {units: 7, dozens: 0, hundreds: 0}
    Пердано не число!
    {}
*/
