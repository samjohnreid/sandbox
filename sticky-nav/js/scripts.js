const samsCoolFunction = () => {
  const stickyNav = document.querySelector('.sticky-nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const stickyCondition = currentScroll < lastScroll;
    stickyNav.classList[stickyCondition ? 'add' : 'remove']('sticky-nav--sticky');
    lastScroll = currentScroll;
  });
}

samsCoolFunction();