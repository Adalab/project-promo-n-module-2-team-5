'use strict';
//const collapseDivHTML = document.querySelector(".js-collapse");
//const rotateaArrow = document.querySelector(".js-arrow");
//seleccionamos dentro de todo el documento, los elementos HTML con
//los que trabajamos, en este caso todas las secciones con clase collapsible-title
const titleToclickList = document.querySelectorAll('.collapsible-title');
//definimos una funcion para el listener, que se ejecutará al hacer click, event es un objeto del navegador, usamos event.currenttarget para seleccionar clases dentro de la función, sin tener que usar document, que solo selecciona el primer elemento con esa clase. Es decir estamos usando un mismo controlador de eventos para varios elementos
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
