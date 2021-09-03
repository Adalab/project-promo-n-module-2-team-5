'use strict';

const textForm = document.querySelector('.js-textForm');
const jobsCard = document.querySelector('.js-jobCard');
const namesCard = document.querySelector('.js-nameCard');
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
    gitHub.href = inputValue;
  }
}

textForm.addEventListener('keyup', handleTextForm);
