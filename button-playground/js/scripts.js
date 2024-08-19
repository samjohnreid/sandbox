let root = document.documentElement;

const button = document.querySelector('.button-1');

button.addEventListener('mouseenter', (event) => {
	let btnWidth = (event.target.offsetWidth - 22) * 2;
	root.style.setProperty('--btn-width', `${btnWidth}px`);
	
	event.target.classList.remove('button-test-out');
	event.target.classList.add('button-test-in');
});

button.addEventListener('mouseleave', (event) => {
	event.target.classList.remove('button-test-in');
	event.target.classList.add('button-test-out');
});