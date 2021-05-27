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
      ${moviesObject.one.title}
      <ul>
        <li>${moviesObject.one.director}</li>
        <li>${moviesObject.one.year}</li>
      </ul>
    </li>
    <li>
      ${moviesObject.two.title}
      <ul>
        <li>${moviesObject.two.director}</li>
        <li>${moviesObject.two.year}</li>
      </ul>
    </li>
    <li>
      ${moviesObject.three.title}
      <ul>
        <li>${moviesObject.three.director}</li>
        <li>${moviesObject.three.year}</li>
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

  // const title = document.querySelector('.add-movie__title').value;
  // const year = document.querySelector('.add-movie__year').value;
  // const director = document.querySelector('.add-movie__director').value;

  const title = 'New Movie';
  const year = 2021;
  const director = 'Sab';

  const newMovie = {
    "four": {
      "title": title,
      "year": year,
      "director": director
    }
  };
  
  database.push(newMovie, function() {
    console.log('new movie has been added!', newMovie);
  });

}

const addMovieBtn = document.getElementById('addMovieButton');
addMovieBtn.addEventListener('click', addMovieBtnClicked);

// ----------

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);

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