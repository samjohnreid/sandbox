const numbers = [];

const column1 = document.querySelector('.num-column--1');
const column2 = document.querySelector('.num-column--2');
const column3 = document.querySelector('.num-column--3');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const nums = document.querySelectorAll('input')
    
    numbers[0] = nums[0].value;
    numbers[1] = nums[1].value;
    numbers[2] = nums[2].value;

    column1.style.transform = `translateY(-${numbers[0] * 150}px)`;
    column2.style.transform = `translateY(-${numbers[1] * 150}px)`;
    column3.style.transform = `translateY(-${numbers[2] * 150}px)`;
});