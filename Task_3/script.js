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
    getBasketPrice: function() {

      let basketPrice = 0;
    
      for (let i = 0; i < this.basket.length; i++) {
          basketPrice += this.basket[i].count * this.basket[i].price;
      }
      return basketPrice;
    },
    getNumberOfGoods: function() {
        
        let numberGoods = 0;
    
        for (let i = 0; i < this.basket.length; i++) {
            numberGoods += this.basket[i].count;
        }
      return numberGoods;
    }
};

const renderBasketProducts = () => {

    let catalogDiv = document.getElementById('catalog');

    if (catalogDiv) {

        let el = document.createElement('div');

        if (bas.basket.length > 0) {
            
            let catalog = '<b>Товары в корзине: <br><br></b>';
            
            catalog += '<table><tbody>';
            catalog += '<tr><th>№</th><th>Продукт</th><th>Кол-во</th><th>Цена за шт</th><th>Стоимость</th></tr>';

            bas.basket.forEach((x, i) => {
                catalog += '<tr><td>' + (i + 1) + '</td><td>' + x.product + '</td><td>' + x.count + '</td><td>' + x.price + '</td><td>'+ x.count * x.price + '</td></tr>';
            });

            catalog += '<tr><th colspan="2">ИТОГО</th><td>' + bas.getNumberOfGoods() + '</td><td></td><td>' + bas.getBasketPrice() + '</td></tr>';
            catalog += '</tbody></table>'
            el.innerHTML = catalog;

        } else {

            el.innerHTML = '<b>Корзина пуста!</b>';
        }

        catalogDiv.appendChild(el);
    }
}

renderBasketProducts();
