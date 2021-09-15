/*'use strict';
function paintCard() {
  //debugger;
  const nameCard = document.getElementById('name');
  nameCard.value = dataUser.name;
 const jobCard = document.querySelector('#job');
  jobCard.value = dataUser.job;
  const emailCard = document.querySelector('#email');
  emailCard.value = dataUser.email;
  const phoneCard = document.querySelector('#phone');
  phoneCard.value = dataUser.phone;
  const linkedinCard = document.querySelector('#linkedin');
  linkedinCard.value = dataUser.linkedin;
  const githubCard = document.querySelector('#github');
  githubCard.value = dataUser.github;
  profileImage.style.backgroundImage = `url(${dataUser.photo})`;
  profilePreview.style.backgroundImage = `url(${dataUser.photo})`;
  fileField.setAttribute('value', dataUser.photo);
  handleTextForm();
}
function setObjectInLocalStorage() {
  const transformObjectArray = JSON.stringify(dataUser);
  localStorage.setItem('dataUser', transformObjectArray);
}

function getObjectFromLocalStorage() {
  const localStorageDataUser = localStorage.getItem('dataUser');
  if (localStorageDataUser !== null) {
    const objectArray = JSON.parse(localStorageDataUser);
    console.log(objectArray);
    dataUser = objectArray;
    paintCard();
  }
}
getObjectFromLocalStorage();*/
