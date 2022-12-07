const first = 'Archer';
const last = 'Reid';
const age = 9;
const breed = 'Shih Tzu';

const dog = {
    first,
    last,
    age,
    breed,
    pals: ['Raymond', 'Willie']
};

console.log('dog: ', dog);

const modal = {
    create() {

    },
    open() {

    },
    close() {

    },
};

console.log('modal:', modal);

const key = 'pocketColor';
const value = '#ffc600';

const randomAdj = 'Cool';
const value2 = 'Weeeee!';

const tShirt = {
    [key]: value,
    [`key${randomAdj}`]: value2
};

console.log('tShirt:', tShirt);

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

console.log('keys:', keys);

const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
};

console.log('shirt:', shirt);

console.log('keys:', keys);
console.log('values:', values);