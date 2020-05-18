const someAvengers = [
  'Hulk',
  'Iron Man',
  'Thor',
  'Black Widow',
  'Hawkeye',
  'Captain America',
  'Nick Fury'
];

console.log(someAvengers);

let someJusticeLeague = {
  a: 'Green Lantern',
  b: 'Flash',
  c: 'Superman',
  d: 'Batman',
  e: 'Wonder Woman',
  f: 'Aquaman',
  g: 'Martian Manhunter'
};

console.log(someJusticeLeague);

const arrayFound = someAvengers.find((el) => {
  return el === 'Black Widow';
});

console.log(arrayFound);

console.log(Object.values(someJusticeLeague));

someJusticeLeague = Object.values(someJusticeLeague);

console.log(someJusticeLeague);

const objectFound = someJusticeLeague.find((el) => {
  return el === 'Green Lantern';
});

console.log(objectFound);

console.log('-------------------------------');

const family = {
  dad: 'Sam',
  mom: 'Bianca',
  kid: 'Dommers',
  pet: 'Archer'
};

const { dad: daddy, mom, kid, pet } = family;

console.log(daddy);

const cities = ['London', 'New York', 'Tokyo', 'Shanghai', 'Mumbai'];

const [ england, usa, japan, china, india ] = cities;

console.log(india);

const foods = ['Pizza', 'Tacos', 'Hamburgers'];
const otherFoods = ['Sushi', 'Curry', 'Wings'];

const allTheFoods = [...foods, ...otherFoods];

console.log(allTheFoods);