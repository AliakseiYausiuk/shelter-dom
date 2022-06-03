const BURGER = document.querySelector('.burger');
const burgerItem = document.querySelector('.burger__item');
const burgerMenu = document.querySelector('.burger__menu');

// burger.classList.toggle('burger_active')

const openBurger = () => {
  burgerItem.classList.add('burger__item_rotate');
  burgerMenu.classList.add('burger__menu_active');
}

BURGER.addEventListener('click', openBurger);
