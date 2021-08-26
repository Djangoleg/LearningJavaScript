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
    },
    numberOfGoods: function() {
        
        let numberGoods = 0;
    
        for (let i = 0; i < this.basket.length; i++) {
            numberGoods += this.basket[i].count;
        }
      return numberGoods;
    }
};

const parseObject = () => {

    let messageDiv = document.getElementById('message');
    let el = document.createElement('div');
    el.className = 'label';

    const nfg = bas.numberOfGoods();

    if ((bas.basket.length > 0) && (nfg > 0)) {
        
        el.innerText = 'В корзине ' + nfg + ' товаров на сумму ' + bas.basketPrice() + ' рублей';
    } else {
        el.innerText = 'Корзина пуста!';
    }

    messageDiv.appendChild(el);
}

parseObject();
