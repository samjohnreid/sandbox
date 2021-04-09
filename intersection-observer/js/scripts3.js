let lastScrollTop = 0, msg;

window.addEventListener('scroll', () => {
  msg = (window.pageYOffset > lastScrollTop) ? 'scroll down' : 'scroll up';
  lastScrollTop = (window.pageYOffset <= 0) ? 0 : window.pageYOffset;
  console.log(msg);
});