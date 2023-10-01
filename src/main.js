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

const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const opacity = 1 - scrollPosition / homeHeight;    
  home.style.opacity = opacity;
});