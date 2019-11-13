const container = document.getElementById('dynamic-data');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://time.jsontest.com', true);

xhr.send();

xhr.onload = () => {
  container.innerHTML = xhr.response;
}