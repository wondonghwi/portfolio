'use strict';

export const arrowScrollDisplay = () => {
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  const arrowUp = document.querySelector('.arrow-up');

  arrowUp.style.opacity = 0;
  arrowUp.style.pointerEvents = 'none';

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > homeHeight / 2) {
      arrowUp.style.opacity = 1;
      arrowUp.style.pointerEvents = 'auto';
    } else {
      arrowUp.style.opacity = 0;
      arrowUp.style.pointerEvents = 'none';
    }
  });
};
