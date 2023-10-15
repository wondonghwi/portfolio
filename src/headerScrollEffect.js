'use strict';

export const headerScrollEffect = () => {
  const header = document.querySelector('.header');
  const headerHeight = header.getBoundingClientRect().height;

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > headerHeight) {
      header.classList.add('header--dark');
    } else {
      header.classList.remove('header--dark');
    }
  });
};
