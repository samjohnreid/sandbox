var database = firebase.database().ref('movies');

// ----------

let moviesObject = {};
let moviesHTML = '';
const movieList = document.getElementById('movies');

// ----------

const samsCoolMovieFunction = (data) => {
  moviesObject = data;
  console.log(moviesObject);
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
  Object.entries(data).forEach((item) => {
    console.log('item[1]: ', item[1]);
  });
  samsCoolMovieFunction(data);
});

// ----------

const addMovieBtnClicked = () => {

  const newMovie = {
    "title": "Kill Bill: Volume 1",
    "year": 2003,
    "director": "Quentin Tarantino"
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