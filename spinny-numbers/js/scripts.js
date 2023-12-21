const params = new URLSearchParams(document.location.search);
const numbers = params.get('numbers');

const column1 = document.querySelector('.num-column--1');
const column2 = document.querySelector('.num-column--2');
const column3 = document.querySelector('.num-column--3');

numbers[0] && (column1.style.transform = `translateY(-${numbers[0] * 50}px)`);
numbers[1] && (column2.style.transform = `translateY(-${numbers[1] * 50}px)`);
numbers[2] && (column3.style.transform = `translateY(-${numbers[2] * 50}px)`);