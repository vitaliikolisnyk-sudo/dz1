
let number = 345; 
let isThreeDigit = (number >= 100) && (number <= 999);
let isOdd = (number % 2 !== 0);
let result = isThreeDigit && isOdd;
console.log("Число является нечетным трехзначным:", result);
