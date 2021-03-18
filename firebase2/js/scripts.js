var votes = firebase.database().ref('votes/dominic');

const megaForm = document.getElementById('megaForm');

megaForm.addEventListener('change', (event) => {
  const selectMenu = event.target.name;
  
  const postData = {
    [selectMenu]: event.target.value
  };

  votes.update(postData);
});