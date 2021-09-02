/**
 * Позиции.
 */
let catalog = {
    basket: [
        {
            product_id: 1,
            product_name: 'Milk', 
            count: 1, 
            price: 100
        },
        {
            product_id: 2,
            product_name: 'Croissant', 
            count: 1, 
            price: 70
        }, 
        {
            product_id: 3,
            product_name: 'Lemonade', 
            count: 1, 
            price: 80
        },
        {
            product_id: 4,
            product_name: 'Bubble gum', 
            count: 1, 
            price: 40
        }
    ],
    addProduct: function(index, product) {
        if (this.basket[index]) {
            this.basket[index].count += 1;
        } else {
            this.basket.push(product);
        }
    },
    getBasketPrice: function() {

      let basketPrice = 0;
    
      for (let i = 0; i < this.basket.length; i++) {
          if (this.basket[i]) {
                basketPrice += this.basket[i].count * this.basket[i].price;    
          }
      }
      return basketPrice;
    },
    getNumberOfGoods: function() {
        
        let numberGoods = 0;
    
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i]) {
                numberGoods += this.basket[i].count;    
            }
        }
      return numberGoods;
    }
};

/**
 * Покупки.
 */
let shoppingBasket = Object.assign({}, catalog);

/**
 * Поиск элемента в массиве.
 * @param {catalog} arr 
 * @param {product} val 
 * @returns 
 */
const getIndexFromArrObjects = (arr, val) => {
    let indexes = -1;
    for(i = 0; i < arr.length; i++) {
        if (arr[i].product_id === val.product_id) return i;
    }
    return indexes;
}

/**
 * Отрисовка.
 * @param {catalog} cat 
 * @param {boolean} isEnabledBuyButton 
 */
const render = (cat, isEnabledBuyButton) => {

    let catalogDiv = document.getElementById('catalog');

    if (catalogDiv) {

        const main_el = document.createElement('div');

        if (cat.basket.length > 0) {
             
            const b = document.createElement('b');

            if (isEnabledBuyButton) {
                b.innerText = 'Товарные позиции:';
            } else {
                b.innerText = 'Корзина товаров:';
            }
            
            main_el.appendChild(b);

            main_el.appendChild(document.createElement('br'));
            main_el.appendChild(document.createElement('br'));
            
            const tableHeader = ['№', 'Продукт', 'Кол-во', 'Цена за шт', 'Стоимость', 'Действие'];

            const table = document.createElement('table');

            const tr = document.createElement('tr');

            for(let i = 0; i < tableHeader.length; i++) {

                const th = document.createElement('th');
                th.innerText = tableHeader[i];

                if ((i === 2) || (i === 4)) {
                    th.style.display = isEnabledBuyButton ? 'none' : 'table-cell';
                }

                tr.appendChild(th);
            }   

            table.appendChild(tr);

            cat.basket.forEach((x, i) => {
                const tr = document.createElement('tr');
                let td = document.createElement('td');

                td.innerText = i + 1;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = x.product_name;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = x.count;
                td.style.display = isEnabledBuyButton ? 'none' : 'table-cell';
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = x.price;
                tr.appendChild(td);
                
                td = document.createElement('td');
                td.innerText = x.count * x.price;
                td.style.display = isEnabledBuyButton ? 'none' : 'table-cell';
                tr.appendChild(td);

                td = document.createElement('td');
                
                if (isEnabledBuyButton) {

                    const btn = document.createElement('button');
                    btn.className = 'slide';

                    btn.onclick = function(){

                        let sbIndex = getIndexFromArrObjects(shoppingBasket.basket, cat.basket[i]);

                        shoppingBasket.addProduct(sbIndex, Object.assign({}, cat.basket[i]));

                        catalogDiv.innerText = '';

                        render(cat, true);
                        render(shoppingBasket, false);

                        return false;
                    };

                    const div = document.createElement('div');
                    div.innerText = 'Купить';

                    btn.appendChild(div);

                    td.appendChild(btn);  

                } else {
                    const div = document.createElement('div');
                    div.innerText = 'Добавлено в корзину';
                    td.appendChild(div); 
                }

                tr.appendChild(td);
                table.appendChild(tr);
            });

            const tr1 = document.createElement('tr');
            th = document.createElement('th');
            th.colSpan = 2;
            th.innerText = 'ИТОГО';
            tr1.appendChild(th);

            let td = document.createElement('td');
            td.innerText = cat.getNumberOfGoods();
            tr1.appendChild(td);

            td = document.createElement('td');
            tr1.appendChild(td);

            td = document.createElement('td');
            td.innerText = cat.getBasketPrice();
            tr1.appendChild(td);

            td = document.createElement('td');
            tr1.appendChild(td);

            if (!isEnabledBuyButton) {

                table.appendChild(tr1);
            }

            main_el.appendChild(table);

        } else {
            
            const b = document.createElement('b');
            b.innerText = 'Корзина товаров пуста!';
            main_el.appendChild(b);
        }
        
        main_el.appendChild(document.createElement('br'));
        main_el.appendChild(document.createElement('br'));

        catalogDiv.appendChild(main_el);
    }
}

/**
 * Инициализация.
 */
const init = () => {
    shoppingBasket.basket = [];
    render(catalog, true);
}

init();

