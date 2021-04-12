// IntersectionObserver stuff

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


// clone the navbar node to avoid layout shift when element pulled out of document flow

const clonedNavWrapper = navWrapper.cloneNode(true);
clonedNavWrapper.classList.add('cloned');
outerNavWrapper.appendChild(clonedNavWrapper);


// scroll direction detection stuff, and add sticky class

let lastScrollTop = 0, scrollUp;

window.addEventListener('scroll', () => {
  scrollUp = (window.pageYOffset > lastScrollTop) ? false : true;
  lastScrollTop = (window.pageYOffset <= 0) ? 0 : window.pageYOffset;
  
  if (scrollUp && !navWrapperInView) {
    clonedNavWrapper.classList.add('sticky');
  } else {
    clonedNavWrapper.classList.remove('sticky');
  }
});