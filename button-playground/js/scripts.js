const button = document.querySelector('.button-1');

button.addEventListener('mouseenter', (event) => {
	event.target.classList.remove('button-test-out');
	event.target.classList.add('button-test-in');
});

button.addEventListener('mouseleave', (event) => {
	event.target.classList.remove('button-test-in');
	event.target.classList.add('button-test-out');
});