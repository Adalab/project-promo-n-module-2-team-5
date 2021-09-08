'use strict';

const createBtn = document.querySelector('.js_create_btn');
const textURL = document.querySelector('.js-url');
const form = document.querySelector('.js-form');
//const twitterShare = document.querySelector('.js-shareTwitter');

const dataUser = {
  palette: '',
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

function handlerFormData(ev) {
  const inputId = ev.target.id;
  const inputValue = ev.target.value;
  console.log(inputId, inputValue);
  dataUser[inputId] = inputValue;
  console.log(dataUser);
}
form.addEventListener('change', handlerFormData);

function handleCreateBtn(ev) {
  ev.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(dataUser),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        //twitterShare.classList.remove('hidden');
        textURL.innerHTML = data.cardURL;
      } else {
        textURL.innerHTML =
          'Error al crear la tarjeta, por favor revise los datos introducidos';
      }
    });
}
createBtn.addEventListener('click', handleCreateBtn);
