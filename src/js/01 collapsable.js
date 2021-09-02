'use strict';

const titleToclickList = document.querySelectorAll('.js-headerClick');

function closeSection(event) {
  //eventpreventDefault();
  const collapseDivHTML = event.currentTarget.parentNode.querySelector('.js-collapse');
  //parentNode se utiliza para buscar elementos en la madre de donde estamos clicando
  const rotateaArrow = event.currentTarget.querySelector('.js-arrow');
  collapseDivHTML.classList.toggle('hidden');
  rotateaArrow.classList.toggle('rotate');
}


for (const titleToclick of titleToclickList) {
  titleToclick.addEventListener('click', closeSection);
}
