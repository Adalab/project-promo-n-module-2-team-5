"use strict";

const textForm = document.querySelector(".js-textForm");
const names = document.querySelector(".js-name");
const namesCard = document.querySelector('.js-nameCard');


function handleTextForm(event) {
  event.preventDefault();
  const namesHTML = names.value;
  namesCard.innerHTML = `${namesHTML}`;
}


textForm.addEventListener("keyup", handleTextForm);
