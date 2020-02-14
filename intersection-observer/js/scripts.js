const observableImg = document.querySelector('.pickle-ping');

observer = new IntersectionObserver((entry, observer) => {
  if (entry[0].intersectionRatio > 0) {
    console.log('I\'m in the viewport!');
  } else {
    console.log('I\'m NOT in the viewport :(');
  }
});

observer.observe(observableImg);