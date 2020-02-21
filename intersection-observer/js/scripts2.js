const stickySentinel = document.querySelector('.sticky-sentinel');

const options = {
  threshold: 0
};

observer = new IntersectionObserver((entry) => {
  if (!entry[0].isIntersecting && entry[0].boundingClientRect.top < 0) {
  console.log(entry[0]);
    console.log('add class');
  } else {
    console.log('remove class');
  }
}, options);

observer.observe(stickySentinel);