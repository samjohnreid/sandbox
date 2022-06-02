// this is what will end up being the callback function
// because it will get passed into another function as an argument
// function fn() {
//     console.log('Just a regular ol\' function');
// }

// // this is the higher-order function
// // because it recieves a function as an argument
// function higherOrderFunction(callback) {
//     callback();
// }

// higherOrderFunction(fn);

// **********

// function ghibliFetch(cb) {
//     setTimeout(() => {
//         fetch('https://ghibliapi.herokuapp.com/films')
//             .then(res => res.json())
//             .then(json => console.log(json))
//             .then(cb);
//     }, 0);
// }

// **********


// function first() {
//     console.log('1');
// }

// function second() {
//     console.log('2');
// }

// function third(callback1, callback2) {
//     setTimeout(() => {
//         console.log('3');
//         callback1();
//         callback2();
//         console.log('// **********');
//     }, 0);
// }

// function fourth() {
//     console.log('4');
// }

// function fifth() {
//     console.log('5');
// }

// first();
// second();
// third(fourth, fifth);

// **********

// function makePizza(toppings) {
//     return new Promise(function(resolve, reject) {
        
//         setTimeout(() => {
//             resolve(`Here is your pizza 🍕 with the toppings: ${toppings.join(' ')}`);
//         }, 1000);

//     });
// }

// makePizza(['ham'])
//     .then(function(pizza) {
//         console.log(pizza);
//         return makePizza(['mushroom']);
//     })
//     .then(function(pizza) {
//         console.log(pizza);
//         return makePizza(['squid']);
//     })
//     .then(function(pizza) {
//         console.log(pizza);
//     });

// function makePizza(toppings = []) {
//     const pizzaPromise = new Promise(function(resolve, reject) {
//         const amountOfTimeToBake = 500 + (toppings.length * 200);

//         setTimeout(() => {
//             resolve(`Here is your pizza 🍕 with the toppings: ${toppings.join(' ')}`);
//         }, amountOfTimeToBake);
//     });

//     return pizzaPromise;
// }

// const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
// const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
// const pizzaPromise3 = makePizza(['ham', 'cheese']);

// const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(function(pizzas) {
//     [hottie, garbagePail, hamAndCheese] = pizzas;

//     console.log(hottie);
// });

// const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// firstPizzaPromise.then((pizzaWinner) => {
//     console.log('and the first pizza ready is...............');
//     console.log(pizzaWinner);
// });

// **********

// function getUsers(onSuccess) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (onSuccess) {
//                 resolve([
//                     {id: 1, name: 'Jerry'},
//                     {id: 2, name: 'Elaine'},
//                     {id: 3, name: 'George'}
//                 ]);
//             } else {
//                 reject('Failed to fetch data!');
//             }
//         }, 1000);
//     })
// }

// getUsers(true)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// fetch('https://ghibliapi.herokuapp.com/films')
//     .then((response) => {
//         return response.json()
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// ;

// **********

async function getUser() {
    return 'hi sam';
}

getUser().then((response) => {
    console.log(response);
});

async function getGhibli() {
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getGhibli();