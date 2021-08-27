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

/**
 * Вариант 1. 
 * Выглядит проще. 
 **/
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

/**
 * Вариант 2. 
 *  
 **/
const renderBasketProducts2 = () => {

    const header = ['№', 'Продукт', 'Кол-во', 'Цена за шт', 'Стоимость'];

    let catalogDiv = document.getElementById('catalog');

    if (catalogDiv) {

        const main_el = document.createElement('div');

        if (bas.basket.length > 0) {
             
            const b = document.createElement('b');
            b.innerText = 'Товары в корзине:';
            main_el.appendChild(b);

            main_el.appendChild(document.createElement('br'));
            main_el.appendChild(document.createElement('br'));
            
            const tr = document.createElement('tr');

            for(let i = 0; i < header.length; i++) {
                const th = document.createElement('th');
                th.innerText = header[i];
                tr.appendChild(th);
            }
            main_el.appendChild(tr);

            bas.basket.forEach((x, i) => {
                const tr = document.createElement('tr');
                let td = document.createElement('td');

                td.innerText = i + 1;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = x.product;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = x.count;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = x.price;
                tr.appendChild(td);
                
                td = document.createElement('td');
                td.innerText = x.count * x.price;
                tr.appendChild(td);

                main_el.appendChild(tr);
            });

            const tr1 = document.createElement('tr');
            const th = document.createElement('th');
            th.colSpan = 2;
            th.innerText = 'ИТОГО';
            tr1.appendChild(th);

            let td = document.createElement('td');
            td.innerText = bas.getNumberOfGoods();
            tr1.appendChild(td);

            td = document.createElement('td');
            tr1.appendChild(td);

            td = document.createElement('td');
            td.innerText = bas.getBasketPrice();
            tr1.appendChild(td);

            main_el.appendChild(tr1);

        } else {
            const b = document.createElement('b');
            b.innerText = 'Корзина пуста!';
            main_el.appendChild(b);
        }
        

        catalogDiv.appendChild(main_el);
    }
}

renderBasketProducts2();
