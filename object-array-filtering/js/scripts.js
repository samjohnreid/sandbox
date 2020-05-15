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