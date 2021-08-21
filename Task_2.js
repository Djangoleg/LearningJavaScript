/*
    2.Продолжить работу с интернет-магазином:
    2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    2.2. Реализуйте такие объекты.
    2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

let bas = {
    basket: [
        {
            product: 'Milk', 
            count: 5, 
            price: 100
        },
        {
            product: 'Croissant', 
            count: 4, 
            price: 70
        }, 
        {
            product: 'Lemonade', 
            count: 3, 
            price: 80
        },
        {
            product: 'Bubble gum', 
            count: 7, 
            price: 40
        }
    ],
    basketPrice: function() {

      let basketPrice = 0;
    
      for (let i = 0; i < this.basket.length; i++) {
          basketPrice += this.basket[i].count * this.basket[i].price;
      }
      return basketPrice;
    }
};

console.log(bas);
console.log(bas.basket);
console.log(bas.basketPrice());

/*
    Результат:

    {basket: Array(4), basketPrice: ƒ}basket: (4) [{…}, {…}, {…}, {…}]basketPrice: ƒ ()[[Prototype]]: Object
    
    (4) [{…}, {…}, {…}, {…}]
    0: {product: "Milk", count: 5, price: 100}
    1: {product: "Croissant", count: 4, price: 70}
    2: {product: "Lemonade", count: 3, price: 80}
    3: {product: "Bubble gum", count: 7, price: 40}
    length: 4
    [[Prototype]]: Array(0)
    
    1300
*/
