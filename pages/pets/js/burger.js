const BURGER = document.querySelector('.burger');
const burgerItem = document.querySelector('.burger__item');
const burgerMenu = document.querySelector('.burger__menu');
const burgerLinks = document.querySelector('.burger__links');


export const openBurger = () => {
  burgerItem.classList.toggle('burger__item_rotate');
  burgerMenu.classList.toggle('burger__menu_active');
}

export const closeBurger = () => { 
  burgerMenu.classList.remove('burger__menu_active');
  burgerItem.classList.remove('burger__item_rotate');
 }

burgerLinks.addEventListener('click', closeBurger);

BURGER.addEventListener('click', openBurger);
