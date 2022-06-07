import { openBurger } from "./js/burger.js";
import { closeBurger } from "./js/burger.js";

openBurger();
closeBurger();

// slider
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


// pop-up

const card = document.querySelector('.card');
const popUp = document.querySelector('.pop-up');
const popUpBtnClose = document.querySelector('.pop-up__btn-close');


card.addEventListener('click', () => {
  popUp.classList.toggle('pop-up_active');
  // document.getElementsByTagName('body').classList.add()
})

popUpBtnClose.addEventListener('click', () => {
  popUp.classList.toggle('pop-up_active');
})

