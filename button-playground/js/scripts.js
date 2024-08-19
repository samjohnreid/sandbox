let root = document.documentElement;

// **************************************************

const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');

// **************************************************

button1.addEventListener('mouseenter', (event) => {
	const btnWidth = (event.target.offsetWidth - 21) * 2;
	root.style.setProperty('--btn-width', `${btnWidth}px`);
	
	event.target.classList.remove('button-test-out');
	event.target.classList.add('button-test-in');
});

button1.addEventListener('mouseleave', (event) => {
	event.target.classList.remove('button-test-in');
	event.target.classList.add('button-test-out');
});

button2.addEventListener('mouseenter', (event) => {
	const btnWidth = event.target.offsetWidth - 38;
	root.style.setProperty('--btn-width', `${btnWidth}px`);
	
	event.target.classList.remove('button-test-out');
	event.target.classList.add('button-test-in');
});

button2.addEventListener('mouseleave', (event) => {
	event.target.classList.remove('button-test-in');
	event.target.classList.add('button-test-out');
});