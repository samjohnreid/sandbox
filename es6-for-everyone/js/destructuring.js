// Destructuring objects

const person = {
    first: 'Samuel',
    last: 'Reid',
    country: 'USA',
    city: 'Charlotte',
    state: 'NC',
    email: 'samjohnreid@gmail.com',
    hobbies: {
        movies: {
            favMovie: 'Lost in Translaton',
            favActor: 'Johnny Depp',
            favDirector: 'Wong Kar-wai'
        },
        books: {
            favBook: 'Midnight\'s Children',
            favAuthor: 'Irvine Welsh',
            favGenre: 'Fantasy'
        },
        videoGames: {
            favGame: 'GTA V',
            favDev: 'FromSoftware',
            favPlatform: 'PlayStation'
        }
    }
};

const { favGame: samsFavGame = 'Lemmings', favDev: samsFavDev } = person.hobbies.videoGames;

console.log('samsFavGame', samsFavGame);
console.log('samsFavDev', samsFavDev);


// Destructuring array

const details = 'Star Wars, 1977, George Lucas, John Williams, 11 million USD, 775.8 million USD';

const [ movie, year, director, ...miscInfo ] = details.split(', ');

console.log('movie:', movie);
console.log('year:', year);
console.log('director:', director);
miscInfo.forEach((item, index) => {
    console.log(`miscInfo ${index}:`, item);
});