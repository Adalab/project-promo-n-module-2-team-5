'use strict';
const colorTitle = document.querySelector('.js-colorTitle');
const colorSubtitle = document.querySelector('.js-colorSubtitle');
const colorIcon = document.querySelectorAll('.js-colorIcon');
const paletteOne = document.querySelector('.js-paletteOne');
const paletteTwo = document.querySelector('.js-paletteTwo');
const paletteThree = document.querySelector('.js-paletteThree');
const paletteFour = document.querySelector('.js-paletteFour');
const paletteFive = document.querySelector('.js-paletteFive');
const paletteSix = document.querySelector('.js-paletteSix');

function paletteOneClick() {
  colorTitle.classList.remove('js-paletteTwoTitle');
  colorTitle.classList.remove('js-paletteThreeTitle');
  colorTitle.classList.remove('js-paletteFourTitle');
  colorTitle.classList.remove('js-paletteFiveTitle');
  colorTitle.classList.remove('js-paletteSixTitle');
  colorTitle.classList.add('js-paletteOneTitle');
  colorSubtitle.classList.remove('js-paletteTwoSubtitle');
  colorSubtitle.classList.remove('js-paletteThreeSubtitle');
  colorSubtitle.classList.remove('js-paletteFourSubtitle');
  colorSubtitle.classList.remove('js-paletteFiveSubtitle');
  colorSubtitle.classList.remove('js-paletteSixSubtitle');
  colorSubtitle.classList.add('js-paletteOneSubtitle');

  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteTwoIcon');
    changeColorList.classList.remove('js-paletteThreeIcon');
    changeColorList.classList.remove('js-paletteFourIcon');
    changeColorList.classList.remove('js-paletteFiveIcon');
    changeColorList.classList.remove('js-paletteSixIcon');
    changeColorList.classList.add('js-paletteOneIcon');
  }
}
function paletteTwoClick() {
  colorTitle.classList.remove('js-paletteOneTitle');
  colorTitle.classList.remove('js-paletteThreeTitle');
  colorTitle.classList.remove('js-paletteFourTitle');
  colorTitle.classList.remove('js-paletteFiveTitle');
  colorTitle.classList.remove('js-paletteSixTitle');
  colorTitle.classList.add('js-paletteTwoTitle');
  colorSubtitle.classList.remove('js-paletteOneSubtitle');
  colorSubtitle.classList.remove('js-paletteThreeSubtitle');
  colorSubtitle.classList.remove('js-paletteFourSubtitle');
  colorSubtitle.classList.remove('js-paletteFiveSubtitle');
  colorSubtitle.classList.remove('js-paletteSixSubtitle');
  colorSubtitle.classList.add('js-paletteTwoSubtitle');

  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteOneIcon');
    changeColorList.classList.remove('js-paletteThreeIcon');
    changeColorList.classList.remove('js-paletteFourIcon');
    changeColorList.classList.remove('js-paletteFiveIcon');
    changeColorList.classList.remove('js-paletteSixIcon');
    changeColorList.classList.add('js-paletteTwoIcon');
  }
}

function paletteThreeClick() {
  colorTitle.classList.remove('js-paletteTwoTitle');
  colorTitle.classList.remove('js-paletteOneTitle');
  colorTitle.classList.remove('js-paletteFourTitle');
  colorTitle.classList.remove('js-paletteFiveTitle');
  colorTitle.classList.remove('js-paletteSixTitle');
  colorTitle.classList.add('js-paletteThreeTitle');
  colorSubtitle.classList.remove('js-paletteTwoSubtitle');
  colorSubtitle.classList.remove('js-paletteOneSubtitle');
  colorSubtitle.classList.remove('js-paletteFourSubtitle');
  colorSubtitle.classList.remove('js-paletteFiveSubtitle');
  colorSubtitle.classList.remove('js-paletteSixSubtitle');
  colorSubtitle.classList.add('js-paletteThreeSubtitle');
  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteTwoIcon');
    changeColorList.classList.remove('js-paletteOneIcon');
    changeColorList.classList.remove('js-paletteFourIcon');
    changeColorList.classList.remove('js-paletteFiveIcon');
    changeColorList.classList.remove('js-paletteSixIcon');
    changeColorList.classList.add('js-paletteThreeIcon');
  }
}
function paletteFourClick() {
  colorTitle.classList.remove('js-paletteTwoTitle');
  colorTitle.classList.remove('js-paletteOneTitle');
  colorTitle.classList.remove('js-paletteThreeTitle');
  colorTitle.classList.remove('js-paletteFiveTitle');
  colorTitle.classList.remove('js-paletteSixTitle');
  colorTitle.classList.add('js-paletteFourTitle');
  colorSubtitle.classList.remove('js-paletteTwoSubtitle');
  colorSubtitle.classList.remove('js-paletteOneSubtitle');
  colorSubtitle.classList.remove('js-paletteThreeSubtitle');
  colorSubtitle.classList.remove('js-paletteFiveSubtitle');
  colorSubtitle.classList.remove('js-paletteSixSubtitle');
  colorSubtitle.classList.add('js-paletteFourSubtitle');
  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteTwoIcon');
    changeColorList.classList.remove('js-paletteOneIcon');
    changeColorList.classList.remove('js-paletteThreeIcon');
    changeColorList.classList.remove('js-paletteFiveIcon');
    changeColorList.classList.remove('js-paletteSixIcon');
    changeColorList.classList.add('js-paletteFourIcon');
  }
}

function paletteFiveClick() {
  colorTitle.classList.remove('js-paletteTwoTitle');
  colorTitle.classList.remove('js-paletteOneTitle');
  colorTitle.classList.remove('js-paletteFourTitle');
  colorTitle.classList.remove('js-palettethreeTitle');
  colorTitle.classList.remove('js-paletteSixTitle');
  colorTitle.classList.add('js-paletteFiveTitle');
  colorSubtitle.classList.remove('js-paletteTwoSubtitle');
  colorSubtitle.classList.remove('js-paletteOneSubtitle');
  colorSubtitle.classList.remove('js-paletteFourSubtitle');
  colorSubtitle.classList.remove('js-paletteThreeSubtitle');
  colorSubtitle.classList.remove('js-paletteSixSubtitle');
  colorSubtitle.classList.add('js-paletteFiveSubtitle');
  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteTwoIcon');
    changeColorList.classList.remove('js-paletteOneIcon');
    changeColorList.classList.remove('js-paletteFourIcon');
    changeColorList.classList.remove('js-paletteThreeIcon');
    changeColorList.classList.remove('js-paletteSixIcon');
    changeColorList.classList.add('js-paletteFiveIcon');
  }
}

function paletteSixClick() {
  colorTitle.classList.remove('js-paletteTwoTitle');
  colorTitle.classList.remove('js-paletteOneTitle');
  colorTitle.classList.remove('js-paletteFourTitle');
  colorTitle.classList.remove('js-paletteFiveTitle');
  colorTitle.classList.remove('js-paletteThreeTitle');
  colorTitle.classList.add('js-paletteSixTitle');
  colorSubtitle.classList.remove('js-paletteTwoSubtitle');
  colorSubtitle.classList.remove('js-paletteOneSubtitle');
  colorSubtitle.classList.remove('js-paletteFourSubtitle');
  colorSubtitle.classList.remove('js-paletteFiveSubtitle');
  colorSubtitle.classList.remove('js-paletteThreeSubtitle');
  colorSubtitle.classList.add('js-paletteSixSubtitle');
  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteTwoIcon');
    changeColorList.classList.remove('js-paletteOneIcon');
    changeColorList.classList.remove('js-paletteFourIcon');
    changeColorList.classList.remove('js-paletteFiveIcon');
    changeColorList.classList.remove('js-paletteThreeIcon');
    changeColorList.classList.add('js-paletteSixIcon');
  }
}
//function colorIcon(){
//if (condition) {

//} else if() {

//} else {

// }
//}
/* function colorSelector(ev) {
  paletteOneClick(ev);
  paletteTwoClick(ev);
  paletteThreeClick(ev);
} */

paletteOne.addEventListener('change', paletteOneClick);
paletteTwo.addEventListener('change', paletteTwoClick);
paletteThree.addEventListener('change', paletteThreeClick);
paletteFour.addEventListener('change', paletteFourClick);
paletteFive.addEventListener('change', paletteFiveClick);
paletteSix.addEventListener('change', paletteSixClick);
