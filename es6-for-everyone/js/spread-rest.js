const marvel = ['Spider-Man', 'Iron Man', 'Thor']
const dc = ['Batman', 'Aquaman', 'Wonder Woman'];

const heroes = [...marvel, 'Flash', ...dc]

console.log('marvel', marvel);
console.log('dc', dc);

console.log('heroes', heroes);

const marvelCopy = [...marvel];

console.log('marvelCopy: ', marvelCopy);

marvelCopy[0] = 'Superman';

console.log('marvelCopy[0]: ', marvelCopy[0]);

console.log('marvel[0]: ', marvel[0]);

console.log('// ----------------------------------------------');

// Exercise

const wordContainer = document.querySelector('.jump');
const word = document.querySelector('.jump').innerText;

const wordArray = [...word];

const newWordArray = wordArray.map((letter) => {
    return `<span>${letter}</span>`;
}).join('');

wordContainer.innerHTML = newWordArray;

console.log('newWordArray', newWordArray);