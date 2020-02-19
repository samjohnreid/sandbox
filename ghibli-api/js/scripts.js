// // Create a variable and assign a new XMLHttpRequest object to it
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
  
//   data.forEach(movie => {
//     console.log(movie.title)
//     console.log(movie.description)
//   });
// }

// // Send request
// request.send();

// **********************************************

// Using Fetch instead of XMLHttpRequest!!
fetch('https://ghibliapi.herokuapp.com/films')
  .then(res => res.json())
  .then(data => {
    data.forEach(movie => {
      console.log(movie.title);
    });
})
.catch(function() {
  console.log('error! :(');
});

// **********************************************

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.setAttribute('src', 'logo.png');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);