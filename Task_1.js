/*
    1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

let counter = 0;
primeArr = [];
while(counter <= 100) {
    
    if (isPrime(counter)) primeArr.push(counter);

    counter++;
}

console.log(primeArr.join(' '));

/*
Результат:

2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
*/
