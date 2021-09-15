'use strict';

const createBtn = document.querySelector('.js_create_btn');
const textURL = document.querySelector('.js-url');
const form = document.querySelector('.js-form');
const twitterShare = document.querySelector('.js-shareTwitter');
const lineTwitter = document.querySelector('.js-line');
const buttonTwitter = document.querySelector('.js-buttonTwitterOne');
const buttonTwitterLink = document.querySelector('.js-buttonTwitter');
const textTitle = document.querySelector('.js-title');

let dataUser = {
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
      twitterShare.classList.remove('hiddenTwitter');
      lineTwitter.classList.add('hiddenLine');
      if (data.success === true) {
        textURL.innerHTML = data.cardURL;
        textURL.setAttribute('href', data.cardURL);
        buttonTwitterLink.href = `https://twitter.com/intent/tweet?url=${data.cardURL}`;
      } else {
        let textNoURL = `Por favor revise los datos introducidos`;
        textTitle.innerHTML = `Error al crear la tarjeta:`;
        const newItem = document.createElement('a');
        const newContent = document.createTextNode(textNoURL);
        newItem.appendChild(newContent);
        textURL.appendChild(newItem);
        buttonTwitter.remove();
        textURL.removeAttribute('href');
      }
    });
}

createBtn.addEventListener('click', handleCreateBtn);
