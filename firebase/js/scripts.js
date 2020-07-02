// Get a reference to the database service
const database = firebase.database();

// Get movies
const movies = database.ref('movies');

movies.once('value', function(snapshot) {
  console.log(snapshot.val());
}, function(error) {
  console.log('Error: ', error.code);
});