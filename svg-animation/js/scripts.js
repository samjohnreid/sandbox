const dot01 = document.querySelector('.dot-waapi--01');
const dot02 = document.querySelector('.dot-waapi--02');
const dot03 = document.querySelector('.dot-waapi--03');

const dotSlide = [
  {
    offset: 0,
    opacity: 0,
    transform: 'scale(0.8)'
  },
  {
    offset: 0.2,
    opacity: 1,
    transform: 'translateX(21px) scale(1)'
  },
  {
    offset: 0.8,
    opacity: 1,
    transform: 'translateX(83px)'
  },
  {
    offset: 1,
    opacity: 0,
    transform: 'translateX(104px) scale(0.8)'
  }
];

const dotSlideOptions01 = {
  iterations: Infinity,
  delay: 0,
  duration: 1200
};

const dotSlideOptions02 = {
  iterations: Infinity,
  delay: -400,
  duration: 1200
};

const dotSlideOptions03 = {
  iterations: Infinity,
  delay: -800,
  duration: 1200
};

dot01.animate(dotSlide, dotSlideOptions01);
dot02.animate(dotSlide, dotSlideOptions02);
dot03.animate(dotSlide, dotSlideOptions03);