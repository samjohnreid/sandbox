var database = firebase.database().ref('movies');

// ----------

let moviesObject = {};
let moviesHTML = '';
const movieList = document.getElementById('movies');

// ----------

const samsCoolMovieFunction = (data) => {
  moviesObject = data;
  moviesHTML = '';
  Object.entries(moviesObject).forEach((movie) => {
    moviesHTML += `
      <li>
        ${movie[1].title}
        <ul>
          <li>${movie[1].director}</li>
          <li>${movie[1].year}</li>
        </ul>
      </li>
    `;
  });
  movieList.innerHTML = moviesHTML;
};

database.on('value', (snapshot) => {
  const data = snapshot.val();
  samsCoolMovieFunction(data);
});

// ----------

const addMovieBtnClicked = () => {

  const movieTitle = document.getElementById('title').value;
  const movieDirector = document.getElementById('director').value;
  const movieYear = document.getElementById('year').value;

  console.log(movieTitle);
  
  const newMovie = {
    "title": movieTitle,
    "year": movieYear,
    "director": movieDirector
  };
  
  database.push(newMovie, function() {
    console.log('new movie has been added!', newMovie);
  });

}

const addMovieBtn = document.getElementById('addMovieButton');
addMovieBtn.addEventListener('click', addMovieBtnClicked);

// ----------

const signOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

const signOutBtn = document.getElementById('signOutButton');
signOutBtn.addEventListener('click', signOut);