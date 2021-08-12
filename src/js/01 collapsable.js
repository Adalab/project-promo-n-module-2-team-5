'use strict';
//const collapseDivHTML = document.querySelector(".js-collapse");
//const rotateaArrow = document.querySelector(".js-arrow");
const titleToclickList = document.querySelectorAll('.collapsible-title');
/* const clickEvent = titleToclick.addEventListener('click', closeSection); */
function closeSection(event) {
  const collapseDivHTML = event.currentTarget.querySelector('.js-collapse');
  const rotateaArrow = event.currentTarget.querySelector('.js-arrow');
  collapseDivHTML.classList.toggle('hidden');
  rotateaArrow.classList.toggle('rotate');
}

//const afterClick = function openSection() {
//collapseDivHTML.classList.remove('hidden');
//};

for (const titleToclick of titleToclickList) {
  titleToclick.addEventListener('click', closeSection);
}
