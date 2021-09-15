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

<<<<<<< HEAD
//Buscamos info en el LocalStorage y si la hay
function getLocalStorage() {
  // obtengo lo que hay en el LocalStorage
  let getLocalStorageDataUser = localStorage.getItem('dataUser');
  console.log(getLocalStorageDataUser);
  // miramos si son validos los datos
  if (getLocalStorageDataUser !== null) {
    const arrayUser = JSON.parse(getLocalStorageDataUser);
    dataUser = arrayUser;

    handlerFormData();

=======
function getObjectFromLocalStorage() {
  const localStorageDataUser = localStorage.getItem('dataUser');
  if (localStorageDataUser !== null) {
    const objectArray = JSON.parse(localStorageDataUser);
    console.log(objectArray);
    dataUser = objectArray;
    paintCard();
>>>>>>> 83d84f2845ee3d3240520091f19552f289f29b51
  }
}
getObjectFromLocalStorage();*/
