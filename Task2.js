/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
Товары в корзине хранятся в массиве. 
Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

const countBasketPrice = basket => {
    let basketPrice = 0;
    
    for (let i = 0; i < basket.length; i++) {
        basketPrice += basket[i][1] * basket[i][2];
    }
    return basketPrice;
}

let basket = [['Milk', 5, 100], ['Croissant', 4, 70], ['Lemonade', 3, 80], ['Bubble gum', 7, 40]];

console.log('Basket price: ' + countBasketPrice(basket));

/*
Результат:

Basket price: 1300
*/