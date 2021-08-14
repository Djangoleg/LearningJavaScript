/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

function getRange(a) {
    
    let arr = [];

    switch(a) {
        case 0: {
            arr.push(0);
        } 
        case 1: {
            arr.push(1);
        }
        case 2: {
            arr.push(2);
        }
        case 3: {
            arr.push(3);
        }
        case 4: {
            arr.push(4);
        } 
        case 5: {
            arr.push(5);
        } 
        case 6: {
            arr.push(6);
        }
        case 7: {
            arr.push(7);
        } 
        case 8: {
            arr.push(8);
        } 
        case 9: {
            arr.push(9);
        } 
        case 10: {
            arr.push(10);
        }
        case 11: {
            arr.push(11);
        }
        case 12: {
            arr.push(12);
        }
        case 13: {
            arr.push(13);
        }
        case 14: {
            arr.push(14);
        }
        case 15: {
            arr.push(15);
        }
    }

    return arr.join(' ');
}

console.log(getRange(10));

/*
Результат:

10 11 12 13 14 15
*/