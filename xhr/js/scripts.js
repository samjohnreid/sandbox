// const container = document.getElementById('dynamic-data');

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

// xhr.send();

// xhr.onload = () => {
//   container.innerHTML = xhr.response;
// }

// console.log(xhr);

// this is with XMHHttpRequest...

// function reqListener() {
//   var data = JSON.parse(this.responseText);
//   console.log(data);
// }

// function reqError() {
//   console.log('Fetch Error :-S', err);
// }

// var oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.onerror = reqError;
// oReq.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
// oReq.send();

// ... now with Fetch!

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

