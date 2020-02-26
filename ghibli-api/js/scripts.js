const app = document.getElementById('root');

const logo = document.createElement('img');
logo.setAttribute('src', 'logo.png');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// **********************************************

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
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      p.textContent = movie.description;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
})
.catch(function() {
  const errorMessage = document.createElement('marquee');
  errorMessage.textContent = `Gah, it's not working!`;
  app.appendChild(errorMessage);
});