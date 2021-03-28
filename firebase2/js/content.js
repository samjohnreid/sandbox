const appRoot = document.getElementById('app');
const userName = window.location.pathname.split('/')[1];

const titleEl = document.createElement('h1');
const titleContent = document.createTextNode(`Welcome, ${userName}!`);
titleEl.appendChild(titleContent);

const subtitleEl = document.createElement('h2');
const subtitleContent = document.createTextNode(`To Sam's Famous Annual Oscars Showdown 2021!`);
subtitleEl.appendChild(subtitleContent);

const introEl = document.createElement('p');
const introContent = document.createTextNode(`Please make your selections for the 93rd Academy Awards below.`);
introEl.appendChild(introContent);

const disclaimerEl = document.createElement('small');
const disclaimerContent = document.createTextNode(`You can come back and change them any time before the event starts on Sunday, April 25, 2021 at 8:00 PM Eastern Time`);
disclaimerEl.appendChild(disclaimerContent);

const renderContent = () => (
  appRoot.appendChild(titleEl),
  appRoot.appendChild(subtitleEl),
  appRoot.appendChild(introEl),
  appRoot.appendChild(disclaimerEl)
);

export default renderContent;