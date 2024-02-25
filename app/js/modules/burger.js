// burger menu
let menuOpenButton = document.querySelector('.header__burger');
let menu = document.querySelector('.navigation__menu ');
let menuLinks = document.querySelectorAll('.menu__link'); // Получаем все ссылки внутри меню

// Обработчик клика для открытия меню
menuOpenButton.addEventListener('click', () => {
  menu.classList.add('show');
});

// Обработчик клика на документе для закрытия меню
document.addEventListener('click', (e) => {
  if (e.target === menuOpenButton) {
    // Не делать ничего, если кликнули на кнопку открытия
    return;
  }

  if (e.target.closest('.header__close') || !e.target.closest('.navigation__menu')) {
    // Закрыть меню, если кликнули на кнопку закрытия или вне меню
    menu.classList.remove('show');
  }
});

// Обработчик клика на каждой ссылке для закрытия меню
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show'); // Закрываем меню при клике на ссылку
  });
});
