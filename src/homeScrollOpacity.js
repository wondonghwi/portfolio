'use strict';

export const homeScrollOpacity = () => {
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / homeHeight;
    home.style.opacity = opacity;
  });
};
