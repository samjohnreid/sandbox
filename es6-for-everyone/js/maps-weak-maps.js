const superHeroes = new Map();

superHeroes.set('Batman', 'DC');
superHeroes.set('Iron Man', 'Marvel');
superHeroes.set('Superman', 'DC');
superHeroes.set('Thor', 'Marvel');

console.log('superHeroes:', superHeroes);

console.log(superHeroes.has('Hulk')); // false
console.log(superHeroes.has('Thor')); // true
console.log(superHeroes.get('Batman')); // 'DC'

superHeroes.forEach((key, val) => {
    console.log(key, val);
});

for (const [key, val] of superHeroes) {
    console.log(key, val);
}

// **************************************************

const clickCounts = new Map();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    clickCounts.set(button, 0);
    button.addEventListener('click', function() {
        const val =  clickCounts.get(this);
        clickCounts.set(this, val + 1);
        console.log(clickCounts);
    });
});

console.log('clickCounts:', clickCounts); // the *key* is a button object!! 🤯

// **************************************************

let dog1 = { name: 'Archer' };
let dog2 = { name: 'Binley' };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, 'Archer is the best!');
weak.set(dog2, 'Binley is the 2nd best!');

console.log('weak.size:', weak.size); // undefined
console.log('strong.size:', strong.size); // 1

dog1 = null;
dog2 = null;

// weak maps will automatically remove references to properties that have been deleted via garbage collection,
// so it's good as you don't have to stay on top of cleaning things up