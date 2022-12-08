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

// ---------------------------------------------------------------

const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
    // create a new promise
    return new Promise((resolve, reject) => {
        // use setTimeout to mimic the delay of a database connection
        setTimeout(() => {
            // find the post we want
            const post = posts.find((post) => {
                return post.id === id;
            });
            if (post) {
                resolve(post); // send the post back
            } else {
                reject(Error('No Post Was Found!'));
            }
        }, 200);
    });
}

function hydrateAuthor(post) {
    // create a new promise
    return new Promise((resolve, reject) => {
        // find the author
        const authorDetails = authors.find((person) => {
            return person.name === post.author;
        });
        if (authorDetails) {
            // "hydrate" the string in the post object with the author object
            post.author = authorDetails;
            resolve(post);
        } else {
            reject(Error('Can\'t find the author.'));
        }
    });
}

getPostById(2)
    .then((post) => {
        console.log('post:', post);
        return hydrateAuthor(post);
    })
    .then((post) => {
        console.log('post:', post);
    })
;