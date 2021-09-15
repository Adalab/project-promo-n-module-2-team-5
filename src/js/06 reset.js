'use strict';

const resetButton = document.querySelector('.js-resetButton');

function handleResetInput() {
  localStorage.removeItem('dataUser');
  location.reload();
}

resetButton.addEventListener('click', handleResetInput);
