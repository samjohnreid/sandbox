const stickySentinel = document.querySelector('.sticky-sentinel');

observer = new IntersectionObserver((entry) => {
  if (!entry[0].isIntersecting && entry[0].boundingClientRect.top < 0) {
    console.log('add class');
  } else {
    console.log('remove class');
  }
});

observer.observe(stickySentinel);