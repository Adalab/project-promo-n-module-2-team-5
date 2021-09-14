'use strict';

const resetButton = document.querySelector('.js-resetButton');

function handleResetInput(ev) {
  location.reload();
}

resetButton.addEventListener('click', handleResetInput);
