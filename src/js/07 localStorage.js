'use strict';

function setLocalStorage() {
  const stringDataUser = JSON.stringify(dataUser);
  localStorage.setItem('dataUser', stringDataUser);
}

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

  }
}
//para que cuando recargue la pagina esté a -1
getLocalStorage();
