document.getElementById('getTextBtn').addEventListener('click', getText);
document.getElementById('getUsersBtn').addEventListener('click', getUsers);
document.getElementById('getPostsBtn').addEventListener('click', getPosts);
document.getElementById('addPostForm').addEventListener('submit', addPost);

// ************** plain text!!! **********************
function getText() {
  
  // fetch('./sample.txt')
  // .then(function(res){
  //   return res.text();
  // })
  // .then(function(data) {
  //   console.log(data);
  // });

  fetch('./sample.txt')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('dataInjection').innerHTML = data;
  })
  .catch(function() {
    console.log(err);
  });

}

// ************** JSON!!! **********************
function getUsers() {
  
  fetch('./users.json')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>Users</h2>';
    data.forEach(function(user) {
      output += `
        <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
        </ul>
      `;
    });
    document.getElementById('dataInjectionJSON').innerHTML = output;
  });

}

// ************** API DATA!!! **********************
function getPosts() {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then(function(data) {
    let output = '<h2>Posts</h2>';
    data.forEach(function(post) {
      output += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
    document.getElementById('dataInjectionAPI').innerHTML = output;
  });

}

// ************** POST!!! **********************
function addPost(e) {

  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
  .then((res) => res.json())
  .then((data) => console.log(data));

}