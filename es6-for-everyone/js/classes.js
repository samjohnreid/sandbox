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