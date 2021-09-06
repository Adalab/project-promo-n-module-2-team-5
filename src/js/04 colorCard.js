'use strict';
const colorTitle = document.querySelector('.js-colorTitle');
const colorSubtitle = document.querySelector('.js-colorSubtitle');
const colorIcon = document.querySelectorAll('.js-colorIcon');
const paletteOne = document.querySelector('.js-paletteOne');
const paletteTwo = document.querySelector('.js-paletteTwo');
const paletteThree = document.querySelector('.js-paletteThree');

function paletteOneClick() {
  colorTitle.classList.remove('js-paletteTwoTitle');
  colorTitle.classList.remove('js-paletteThreeTitle');
  colorTitle.classList.add('js-paletteOneTitle');
  colorSubtitle.classList.remove('js-paletteTwoSubtitle');
  colorSubtitle.classList.remove('js-paletteThreeSubtitle');
  colorSubtitle.classList.add('js-paletteOneSubtitle');

  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteTwoIcon');
    changeColorList.classList.remove('js-paletteThreeIcon');
    changeColorList.classList.add('js-paletteOneIcon');
  }
}
function paletteTwoClick() {
  colorTitle.classList.remove('js-paletteOneTitle');
  colorTitle.classList.remove('js-paletteThreeTitle');
  colorTitle.classList.add('js-paletteTwoTitle');
  colorSubtitle.classList.remove('js-paletteOneSubtitle');
  colorSubtitle.classList.remove('js-paletteThreeSubtitle');
  colorSubtitle.classList.add('js-paletteTwoSubtitle');

  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteOneIcon');
    changeColorList.classList.remove('js-paletteThreeIcon');
    changeColorList.classList.add('js-paletteTwoIcon');
  }
}

function paletteThreeClick() {
  colorTitle.classList.remove('js-paletteTwoTitle');
  colorTitle.classList.remove('js-paletteOneTitle');
  colorTitle.classList.add('js-paletteThreeTitle');
  colorSubtitle.classList.remove('js-paletteTwoSubtitle');
  colorSubtitle.classList.remove('js-paletteOneSubtitle');
  colorSubtitle.classList.add('js-paletteThreeSubtitle');
  for (const changeColorList of colorIcon) {
    changeColorList.classList.remove('js-paletteTwoIcon');
    changeColorList.classList.remove('js-paletteOneIcon');
    changeColorList.classList.add('js-paletteThreeIcon');
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
