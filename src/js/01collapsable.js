"use strict";
const collapseDivHTML = document.querySelector(".js-collapse");
const rotateaArrow = document.querySelector(".js-arrow");
const titleToclick = document.querySelector(".collapsible-title");
/* const clickEvent = titleToclick.addEventListener('click', closeSection); */
function closeSection() {
  collapseDivHTML.classList.toggle("hidden");
  rotateaArrow.classList.toggle("rotate");
}

//const afterClick = function openSection() {
//collapseDivHTML.classList.remove('hidden');
//};

titleToclick.addEventListener("click", closeSection);
