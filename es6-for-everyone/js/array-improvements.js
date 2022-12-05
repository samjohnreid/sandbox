const people = Array.from(document.querySelectorAll('.people p'), person => person.innerText);

console.log(people);


function sumAll() {
    return Array.from(arguments).reduce((prev, next) => {
        return prev + next;
    }, 0);
}

console.log(sumAll(2, 34, 23, 234, 234, 324, 435, 12, 345));

const heroes = Array.of('Batman, Superman, Spider-Man, Hulk, Thor, Iron Man');

console.log(heroes);