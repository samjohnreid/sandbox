const pokemonsPromise = fetch('https://pokeapi.co/api/v2/pokemon/');

pokemonsPromise
    .then(data => data.json())
    .then(data => console.log('second data:', data))
    .catch(err => console.error('Error!', err))
;

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sam is cool!');
    }, 1000);
});

p.then((data) => {
    console.log('data:', data);
});