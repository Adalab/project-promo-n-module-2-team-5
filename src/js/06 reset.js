'use strict';

const resetButton = document.querySelector('.js-resetButton');

function handleResetInput() {
  location.reload();
}

resetButton.addEventListener('click', handleResetInput);
