// use uppercase letter for function, then it becomes a constructor function
// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }

// const archer = new Dog('Archer', 'Shih Tzu');

// console.log('archer:', archer);

// class *declaration*
class SamsClassDeclaration {
    // class declaration stuff...
}

// class *expression*
const SamsClassExpression = class {
    // class expression stuff...
}

// create a bunch of methods inside the body of the class...
// but the only one that is absolutely required, is a constructor
// this is what happens when we create a new *version*
class Dog {

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`Bark! Bark! My name is ${this.name}`);
    }

    cuddle() {
        console.log(`I love you, Owner!`);
    }

    // getter
    get description() {
        return `${this.name} is a ${this.breed} type of dog!`;
    }

    // setter
    set nicknames(value) {
        this.nick = value.trim();
    }
    get nicknames() {
        return this.nick.toUpperCase();
    }

}

const archer = new Dog('Archer', 'Shih Tzu');
const binley = new Dog('Binley', 'Dachshund');

console.log('archer:', archer);
console.log('binley.bark():', binley.bark());
console.log('archer.cuddle():', archer.cuddle());

console.log('archer.description:', archer.description);
console.log('binley.description:', binley.description);

archer.nicknames = '         Kokie      ';
console.log('archer.nicknames():', archer.nicknames);

class Animal {

    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }

    drink() {
        this.thirst -= 10;
        return this.thirst;
    }

    eat(food) {
        this.belly.push(food);
        return this.belly;
    }

}

const rhino = new Animal('Rhiney');

console.log('rhino:', rhino);

rhino.eat('Burger');
rhino.eat('Leaves');
rhino.eat('Zebra');

rhino.drink();
rhino.drink();
rhino.drink();

console.log('rhino after messing with the methods:', rhino);

// now to *extend* the class!
class Pup extends Animal {

    constructor(name, breed) {
        // super! call the thing that we're extending first
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`Bark bark I'm a dog!`);
    }

}

const bonesy = new Pup('Bonesy', 'Shih Tzu');

bonesy.eat('poo');

console.log('bonesy:', bonesy);

// ****************************************************************************************************

// Extending Arrays with Classes for Custom Collections

class MovieCollection extends Array {

    constructor(name, ...items) { // first capture the items with a rest...
        super(...items); // then spread them in with a spread
        this.name = name;
        console.log('name:', name);
        console.log('items:', items);
    }

    add(movie) {
        this.push(movie);
    }

    topRated(limit = 3) {
        return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
    }

}

const movies = new MovieCollection(
    `Sam's Favorite Movies`,
    { name: `Blade Runner`, stars: 5 },
    { name: `In the Mood for Love`, stars: 5 },
    { name: `Goodfellas`, stars: 5 },
    { name: `Lost in Translation`, stars: 5 },
    { name: `Miller's Crossing`, stars: 5 }
);

movies.add({name: 'Titanic', stars: 4});

console.log('movies:', movies);

console.table(movies.topRated());