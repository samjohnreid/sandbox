const pokemonsPromise = fetch('https://pokeapi.co/api/v2/pokemon/');

pokemonsPromise
    .then(data => data.json())
    .then(data => console.log('second data:', data))
    .catch(err => console.error('Error!', err))
;