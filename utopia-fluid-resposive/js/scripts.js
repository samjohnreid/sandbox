const viewportWidthContainer = document.getElementById('viewportWidth');

const getViewportWidth = () => viewportWidthContainer.innerText = window.innerWidth;

window.addEventListener('resize', () => getViewportWidth());

getViewportWidth();