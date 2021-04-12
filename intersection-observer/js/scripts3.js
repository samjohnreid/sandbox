const outerNavWrapper = document.querySelector('[aria-label="main navigation"]');
const navWrapper = document.querySelector('.nav-wrapper');

let navWrapperInView = true;

observer = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    navWrapperInView = true;
  } else {
    navWrapperInView = false;
  }
});

observer.observe(outerNavWrapper);

let lastScrollTop = 0, scrollUp;

window.addEventListener('scroll', () => {
  scrollUp = (window.pageYOffset > lastScrollTop) ? false : true;
  lastScrollTop = (window.pageYOffset <= 0) ? 0 : window.pageYOffset;
  
  if (scrollUp && !navWrapperInView) {
    console.log('user is scrolling up AND navwrapper is not currently in thew viewport');
    navWrapper.classList.add('sticky');
  } else {
    navWrapper.classList.remove('sticky');
  }
});