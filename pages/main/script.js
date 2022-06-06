import { openBurger } from "./js/burger.js";
import { closeBurger } from "./js/burger.js";

openBurger();
closeBurger();


let offset = 0;
const cardsSlider = document.querySelector('.cards__slider');

document.querySelector('#next').addEventListener('click', function() {
  offset = offset + 270;
  if (offset > 1200) {
    offset = 0;
  }
  cardsSlider.style.left = -offset + 'px';
});

document.querySelector('#prev').addEventListener('click', function() {
  offset = offset - 270;
  if (offset < 0) {
    offset = 1200;
  }
  cardsSlider.style.left = -offset + 'px';
});