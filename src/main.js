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

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const opacity = 1 - scrollPosition / homeHeight;
  home.style.opacity = opacity;
});

const arrowUp = document.querySelector('.arrow-up');
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

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
