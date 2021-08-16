/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

function getRange(a) {
    
    let arr = [];

    switch(a) {
        case 0: {
            arr.push(a++);
        } 
        case 1: {
            arr.push(a++);
        }
        case 2: {
            arr.push(a++);
        }
        case 3: {
            arr.push(a++);
        }
        case 4: {
            arr.push(a++);
        } 
        case 5: {
            arr.push(a++);
        } 
        case 6: {
            arr.push(a++);
        }
        case 7: {
            arr.push(a++);
        } 
        case 8: {
            arr.push(a++);
        } 
        case 9: {
            arr.push(a++);
        } 
        case 10: {
            arr.push(a++);
        }
        case 11: {
            arr.push(a++);
        }
        case 12: {
            arr.push(a++);
        }
        case 13: {
            arr.push(a++);
        }
        case 14: {
            arr.push(a++);
        }
        case 15: {
            arr.push(a++);
        }
    }

    return arr.join(' ');
}

console.log(getRange(10));

/*
Результат:

10 11 12 13 14 15
*/
