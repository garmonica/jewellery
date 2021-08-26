const menu = document.querySelector('.menu');

if (menu) {
  const menuToggle = menu.querySelector('button');
  const body = document.querySelector('body');

  menu.classList.remove('menu--nojs');

  const openMenu = () => {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    body.style.overflow = 'auto';
  };

  menuToggle.addEventListener('click', () => {
    menu.classList.contains('menu--closed') ? openMenu() : closeMenu();
  });
}
