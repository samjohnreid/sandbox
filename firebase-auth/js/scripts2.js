var database = firebase.database().ref('movies');

// ----------

let moviesObject = {};
let moviesHTML = '';
const movieList = document.getElementById('movies');

// ----------

const samsCoolMovieFunction = (data) => {
  moviesObject = data;
  moviesHTML = `
    <li>
      ${moviesObject['-Mb3yYQop0nootoIsDlA'].title}
      <ul>
        <li>${moviesObject['-Mb3yYQop0nootoIsDlA'].director}</li>
        <li>${moviesObject['-Mb3yYQop0nootoIsDlA'].year}</li>
      </ul>
    </li>
    <li>
      ${moviesObject['-Mb3zf2CULhb7ao4fvIT'].title}
      <ul>
        <li>${moviesObject['-Mb3zf2CULhb7ao4fvIT'].director}</li>
        <li>${moviesObject['-Mb3zf2CULhb7ao4fvIT'].year}</li>
      </ul>
    </li>
    <li>
      ${moviesObject['-Mb4--azx9n4Qt6ybOCl'].title}
      <ul>
        <li>${moviesObject['-Mb4--azx9n4Qt6ybOCl'].director}</li>
        <li>${moviesObject['-Mb4--azx9n4Qt6ybOCl'].year}</li>
      </ul>
    </li>
  `;
  movieList.innerHTML = moviesHTML;
};

database.on('value', (snapshot) => {
  const data = snapshot.val();
  samsCoolMovieFunction(data);
});

// ----------

const addMovieBtnClicked = () => {

  const newMovie = {
    "title": "In the Mood for Love",
    "year": 2000,
    "director": "Wong Kar-wai"
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