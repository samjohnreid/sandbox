// Get a reference to the database service
const database = firebase.database();

// Get movies
const movies = database.ref('movies');

movies.once('value', function(snapshot) {
  //console.log(snapshot.val());
  snapshot.forEach(function(childSnapshot) {
    console.log('Key: ', childSnapshot.key, ' | ', 'Title: ', childSnapshot.val().title, ', ', childSnapshot.val().director);
  });
}, function(error) {
  console.log('Error: ', error.code);
});

// Get directors
const directors = database.ref('directors');

directors.once('value', function(snapshot) {
  //console.log(snapshot.val());
  snapshot.forEach(function(childSnapshot) {
    //console.log(childSnapshot.val().name);
  });
}, function(error) {
  console.log('Error: ', error.code);
});

function addMovieBtnClicked() {
  
  event.preventDefault();

  const title = document.querySelector('.add-movie__title').value;
  const year = document.querySelector('.add-movie__year').value;
  const director = document.querySelector('.add-movie__director').value;

  const newMovie = {
    "title": title,
    "year": year,
    "director": director
  };
  
  movies.push(newMovie, function() {
    console.log('new movie has been added!');
  });

}

const addMovieBtn = document.querySelector('.add-movie__btn');
addMovieBtn.addEventListener('click', addMovieBtnClicked);

// **********************************


const moviesList = document.querySelector('.movies');