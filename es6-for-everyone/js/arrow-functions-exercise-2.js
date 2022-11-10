// 1. Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`

const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

const numbersGreaterThan70 = numbers.filter(num => num > 70);

console.log('numbersGreaterThan70: ', numbersGreaterThan70);