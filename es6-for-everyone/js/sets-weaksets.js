const people = new Set();

people.add('Sab');
people.add('Banksy');
people.add('Dommers');
people.add('Kokie');

const peopleGenerator = people.values();

console.log('peopleGenerator:', peopleGenerator);

// Sets are apparently Generator Functions! we can use the Generator API on it:

console.log('peopleGenerator.next():', peopleGenerator.next());
console.log('peopleGenerator.next():', peopleGenerator.next());
console.log('peopleGenerator.next():', peopleGenerator.next());
console.log('peopleGenerator.next():', peopleGenerator.next());

// or...

for (const person of people) {
    console.log(person);
}

// **********

const students = new Set(['Sam', 'Dom', 'Bianca']);
console.log('students:', students);

const dogs = ['Archer', 'Raymond'];
const dogSet = new Set(dogs);
console.log('dogSet:', dogSet);

// **************************************************

const brunch = new Set(); // actual set
// as people start coming in...
brunch.add('Sam');
brunch.add('Dom');
brunch.add('Bianca');
// ready to open!
const line = brunch.values(); // a copy of the set that can be iterated upon
console.log('line:', line);
console.log(line.next().value);
console.log(line.next().value);
console.log('line:', line);
brunch.add('Dave');
brunch.add('Archer');
console.log('line:', line);
console.log(line.next().value);
console.log(line.next().value);
console.log('line:', line);

// **************************************************

// a WeakSet can only ever contain objects; not numbers, string, or anything else
// and you can't enumerate over them
// and there is no clear() method - because they clean themselves up, due to garbage collection and memory

let dog1 = { name: 'Archer', age: 9 };
let dog2 = { name: 'Raymond', age: 7 };

const weakSauce = new WeakSet([dog1, dog2]);

console.log('weakSauce:', weakSauce);