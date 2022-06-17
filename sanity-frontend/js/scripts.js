let PROJECT_ID = "4kcpbvqm";
let DATASET = "production";

let QUERY_MOVIES = encodeURIComponent('*[_type == "movie"]');
let QUERY_DIRECTORS = encodeURIComponent('*[_type == "director"]');

// Compose the URL for your project's endpoint and add the query
let URL_MOVIES = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_MOVIES}`;
let URL_DIRECTORS = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_DIRECTORS}`;

let movies = [];
let directors = [];

// fetch the content
fetch(URL_MOVIES)
.then((res) => res.json())
.then(({ result }) => {
  movies = result;
  console.log('movies', movies);
})
.catch((err) => console.error(err));

fetch(URL_DIRECTORS)
.then((res) => res.json())
.then(({ result }) => {
  directors = result;
  console.log('directors', directors);
})
.catch((err) => console.error(err));