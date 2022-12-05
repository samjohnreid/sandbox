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

// ----------------------------------------------

const people = Array.from(document.querySelectorAll('.people p'));

console.log('people: ', people);

const names = people.map(person => person.innerText);

console.log('names: ', names);

const comments = [
    { id: 209384, text: 'I love your dog!' },
    { id: 523423, text: 'Cuuute! 🐐' },
    { id: 632429, text: 'You are so dumb' },
    { id: 192834, text: 'Nice work on this wes!' },
];
const id = 632429;

const commentIndex = comments.findIndex((comment) => {
    return comment.id === id;
});

console.log('commentIndex: ', commentIndex);

const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];

console.log('newComments: ', newComments);

console.log('// ----------------------------------------------');

const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

inventors.push(...newInventors);

console.log('inventors: ', inventors);

const namex = ['Sam', 'Reid'];

function sayHi(first, last) {
    alert(`Hey there, ${first} ${last}!`);
}

sayHi(...namex);