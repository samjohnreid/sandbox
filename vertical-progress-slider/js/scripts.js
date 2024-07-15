const scrollArea = document.querySelector('.vps__content-scroll-area');
const scrollbar = document.querySelector('.vps__scrollbar');

const progressIndicator = () => {
	const scrollPos = scrollArea.scrollTop;
	const scrollAreaHeight = scrollArea.scrollHeight - scrollArea.offsetHeight;
	const scrolled = (scrollPos / scrollAreaHeight) * 100;
	scrollbar.style.height = `${scrolled}%`;
}

scrollArea.addEventListener('scroll', () => {
	progressIndicator();
});