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