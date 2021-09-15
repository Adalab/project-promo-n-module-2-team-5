'use strict';

const textForm = document.querySelector('.js-textForm');
const jobsCard = document.querySelector('.js-jobCard');
const namesCard = document.querySelector('.js-nameCard');
const phone = document.querySelector('.js-phoneCard');
const email = document.querySelector('.js-emailCard');
const linkedin = document.querySelector('.js-linkedin');
const gitHub = document.querySelector('.js-githubcard');

function handleTextForm(event) {
  event.preventDefault();
  const inputId = event.target.id;
  const inputValue = event.target.value;
  console.log(event.target.id);

  if (inputId === 'job') {
    jobsCard.innerHTML = inputValue;
  } else if (inputId === 'name') {
    namesCard.innerHTML = inputValue;
  } else if (inputId === 'github') {
    gitHub.href = 'https://github.com/' + inputValue;
  } else if (inputId === 'linkedin') {
    linkedin.href = 'https://www.linkedin.com/in/' + inputValue;
  } else if (inputId === 'phone') {
    phone.href = 'tel:' + inputValue;
  } else if (inputId === 'email') {
    email.href = 'mailto:' + inputValue;
  }

  //setObjectInLocalStorage(); No funciona en Chrome el twitter...
}

textForm.addEventListener('change', handleTextForm);
