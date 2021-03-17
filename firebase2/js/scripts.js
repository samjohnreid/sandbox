var movies = firebase.database().ref('movies');

function addMovie() {
  movies.push({
    "director" : "Ivan Reitman",
    "title" : "Ghostbusters",
    "year" : "1984"
  });
}

movies.on('value', (snapshot) => {
  console.log(snapshot.val());
});

// addMovie();