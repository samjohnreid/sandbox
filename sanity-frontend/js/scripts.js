let PROJECT_ID = "4kcpbvqm";
let DATASET = "production";

let QUERY = encodeURIComponent('*[_type == "animal"]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(URL)
.then((res) => res.json())
.then(({ result }) => {
  console.log('result: ', result);
})
.catch((err) => console.error(err));