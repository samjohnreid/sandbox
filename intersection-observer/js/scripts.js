const stickyPickle = document.querySelector('.pickle-ping');

const options = {
  threshold: 0
};

observer = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    console.log('add class');
  } else {
    console.log('remove class');
  }
}, options);

observer.observe(stickyPickle);