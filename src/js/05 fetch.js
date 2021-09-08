'use strict';

const createBtn = document.querySelector('.js_create_btn');
const textURL = document.querySelector('.js-url');
const form = document.querySelector('.js-form');
const twitterShare = document.querySelector('.js-shareTwitter');
const lineTwitter = document.querySelector('.js-line');

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
  dataUser[inputId] = inputValue;
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
        twitterShare.classList.remove('hiddenTwitter');
        lineTwitter.classList.add('hiddenLine');
        textURL.innerHTML = data.cardURL;
      } else {
        textURL.innerHTML = twitterShare.classList.remove('hiddenTwitter');
        lineTwitter.classList.add('hiddenLine');
        textURL.innetHTML =
          'Error al crear la tarjeta, por favor revise los datos introducidos';
      }
      console.log(data);
    });
}
createBtn.addEventListener('click', handleCreateBtn);
