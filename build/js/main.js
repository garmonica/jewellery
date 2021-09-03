/* global Swiper:readonly */
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

const mySwiper = document.querySelector('.swiper');

if (mySwiper) {
  const slider = document.querySelector('.slider');
  slider.classList.remove('slider--nojs');

  new Swiper(mySwiper, {
    mousewheel: true,
    spaceBetween: 30,
    navigation: {
      prevEl: '.swiper-button-custom-prev',
      nextEl: '.swiper-button-custom-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return `${current} of ${total}`;
          },
        },
      },
    },
  });
}

const accordion = document.querySelector('.questions__list');

if (accordion) {
  accordion.classList.remove('questions__list--nojs');
  const accordionItems = accordion.querySelectorAll('.questions__item');
  accordionItems.forEach((elem) => elem.classList.add('questions__item--closed'));

  accordion.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'BUTTON') {
      return;
    }
    evt.target.parentNode.classList.toggle('questions__item--closed');
  });
}

const filter = document.querySelector('.filter');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

if (filter) {
  filter.classList.remove('filter--nojs');

  const filterFields = filter.querySelectorAll('.filter__field');
  filterFields.forEach((elem) => elem.classList.add('filter__field--closed'));

  filter.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('filter__field-button')) {
      return;
    }
    evt.target.closest('.filter__field').classList.toggle('filter__field--closed');
  });

  const filterOpen = filter.querySelector('.filter__button');
  const filterBlock = filter.querySelector('.filter__form-wrapper');
  const filterClose = filter.querySelector('.filter__close');
  const form = filter.querySelector('form');

  const openFilter = () => {
    filterBlock.classList.add('filter__form-wrapper--opened');
    document.body.append(overlay);
    document.body.style.overflow = 'hidden';
  };

  const closeFilter = () => {
    filterBlock.classList.remove('filter__form-wrapper--opened');
    overlay.remove();
    document.body.style.overflow = 'auto';
  };

  filterOpen.addEventListener('click', () => openFilter());
  filterClose.addEventListener('click', () => closeFilter());
  overlay.addEventListener('click', () => closeFilter());

  window.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      closeFilter();
    }
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    closeFilter();
  });
}
