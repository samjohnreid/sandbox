function* samsList() {
    yield console.log('Batman');
    yield console.log('Superman');
    yield console.log('Spider-Man');
    yield console.log('Thor');
    yield console.log('Hulk');
}

const heroes = samsList();

heroes.next();

// generator functions will keep the values of the varibales on exach next until it's finished!

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
];

function* loop(arr) {
    for (const item of arr) {
        yield item;
    }
}

const inventorGen = loop(inventors);

console.log('inventorGen.next().value:', inventorGen.next().value);
console.log('inventorGen.next().value:', inventorGen.next().value);
console.log('inventorGen.next().value:', inventorGen.next().value);
console.log('inventorGen.next().value:', inventorGen.next().value);
console.log('inventorGen.next().value:', inventorGen.next().value);
console.log('inventorGen.next().value:', inventorGen.next().value);
console.log('inventorGen.next().value:', inventorGen.next().value);