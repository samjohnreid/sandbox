import renderContent from './content.js';
import renderVotes from './votes.js';

const appRoot = document.getElementById('app');
const userName = window.location.pathname.split('/')[1];

// **************************************************

appRoot.append(
  renderContent(),
  renderVotes()
);

// **************************************************

var votes = firebase.database().ref(`votes/${userName}`);

const megaForm = document.getElementById('userVotes');

megaForm.addEventListener('change', (event) => {
  const selectMenu = event.target.name;
  
  const postData = {
    [selectMenu]: event.target.value
  };

  votes.update(postData);
});