'use strict';

const createBtn = document.querySelector('.js_create_btn');
const cardResultElement = document.querySelector('.js_card_result');

const dataUser = {
  photo: 'data:image/png;base64,2342ba...',
  palette: parseInt(document.querySelector('.js_palette:checked').value),
  name: document.querySelector('.js_input_name').value,
  job: document.querySelector('.js_input_job').value,
  email: document.querySelector('.js_input_email').value,
  phone: document.querySelector('.js_input_phone').value,
  linkedin: document.querySelector('.js_input_linkedin').value,
  github: document.querySelector('.js_input_github').value,
};

function handleCreateBtn(ev) {
  ev.preventDefault();
  fetch('https://awesome-profile-cards.herekuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(dataUser),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //podemos crear un función para que pinte el enlace y botón a twitt
      cardResultElement.innerHTML = data.cardURL;
    });
}

createBtn.addEventListener('click', handleCreateBtn);
