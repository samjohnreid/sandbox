/*
Spreads - most likely will be used in arrays of strings
It takes every single item from the iterable (array, in this case)
And apply it to the containing element (containing array, in this case)
*/

const charsFromIvanhoeGood = ['Ivanhoe', 'Cedric', 'Locksley'];
const charsFromIvanhoeBad = ['Brian de Bois-Guilbert', 'Maurice De Bracy', 'Reginald Front-de-Boeuf'];

console.log('charsFromIvanhoeGood:', charsFromIvanhoeGood);
console.log('charsFromIvanhoeBad:', charsFromIvanhoeBad);

// instead of using charsFromIvanhoeGood.concat(charsFromIvanhoeBad), we can use spread to concatenate values, which gives much more flexibility for adding items etc.

const charsFromIvanhoe = [...charsFromIvanhoeGood, ...charsFromIvanhoeBad];

console.log('charsFromIvanhoe:', charsFromIvanhoe);

const newCharsFromIvanhoe = [...charsFromIvanhoe];

// if you copy an array, then using a spread (instead of just const newCharsFromIvanhoe = charsFromIvanhoe) will preserve the original array when you make any changes to the new one,
// because when you copy the old way, it copies using a *reference* to the original, meaning any changes on the new one will update the original too

console.log('newCharsFromIvanhoe:', newCharsFromIvanhoe);

newCharsFromIvanhoe[0] = 'Wilfred';

console.log('newCharsFromIvanhoe:', newCharsFromIvanhoe);

console.log('charsFromIvanhoe:', charsFromIvanhoe);

// ----------------------------------------------------------------------

/*
Rest is opposite of spread
Spread takes a collection of items and unpacks it
Rest takes multiple things and packs it into a single array
*/

// can be used to grab the "rest" of items of an array, for example when destructuring:

const charsFromIvanhoe2 = [
    'Ivanhoe',
    'Cedric',
    'Locksley',
    'Brian de Bois-Guilbert',
    'Maurice De Bracy',
    'Reginald Front-de-Boeuf'
];

const [hero, father, yeoman, ...baddies] = charsFromIvanhoe2;

console.log('hero:', hero);
console.log('father:', father);
console.log('yeoman:', yeoman);
console.log('baddies:', baddies);