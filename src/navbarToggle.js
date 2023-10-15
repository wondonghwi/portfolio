'use strict';

export const navbarToggle = () => {
  const navbarMenu = document.querySelector('.header__menu');
  const navbarToggleBtn = document.querySelector('.header__toggle');

  navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
  });

  navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
  });
};
