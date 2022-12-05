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

const pokemon = [
    {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
    "name": "venusaur",
    "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
    "name": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
    "name": "wartortle",
    "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
    "name": "blastoise",
    "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
    "name": "caterpie",
    "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
    "name": "metapod",
    "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
    "name": "butterfree",
    "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
    "name": "weedle",
    "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
    "name": "kakuna",
    "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
    "name": "beedrill",
    "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
    "name": "pidgey",
    "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
    "name": "pidgeotto",
    "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
    "name": "pidgeot",
    "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
    "name": "rattata",
    "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
    "name": "raticate",
    "url": "https://pokeapi.co/api/v2/pokemon/20/"
    }
]

const fighter = pokemon.find(item => item.name === 'pidgeotto');

const fighterIndex = pokemon.findIndex(item => item.name === 'pidgeotto');

console.log('fighter: ', fighter);

console.log('fighterIndex: ', fighterIndex);