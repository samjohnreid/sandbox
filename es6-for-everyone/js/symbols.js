/*
Symbols are the seventh primative type in JS
    - number
    - string
    - object
    - boolean
    - null
    - undefined
    and ES6 added... - symbol
*/

// Symbols are unique indentifiers, help to avoid naming collisions
// When you want to create a property in a unique way... reach for a symbol!

const sam = Symbol('Sam');

console.log('sam:', sam);

// ----------

const runners = {
    [Symbol('Sam')]: { pace: 8.0, gender: 'male' },
    [Symbol('Bianca')]: { pace: 9.0, gender: 'female' },
    [Symbol('Bianca')]: { pace: 9.0, gender: 'female' }
};

console.log('runners:', runners);

// ----------

const syms = Object.getOwnPropertySymbols(runners);

console.log('syms:', syms); // doesn't give the data though, only the keys

const data = syms.map((sym) => {
    return runners[sym];
});

console.log('data:', data);