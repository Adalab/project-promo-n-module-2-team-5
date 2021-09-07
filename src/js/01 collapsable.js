/* 'use strict';

const titleToclickList = document.querySelectorAll('.js-headerClick');

function closeSection(event) {
  //eventpreventDefault();
  const collapseDivHTML =
    event.currentTarget.parentNode.querySelector('.js-collapse');
  //parentNode se utiliza para buscar elementos en la madre de donde estamos clicando
  const rotateaArrow = event.currentTarget.querySelector('.js-arrow');
  collapseDivHTML.classList.toggle('hidden');
  rotateaArrow.classList.toggle('rotate');
}

for (const titleToclick of titleToclickList) {
  titleToclick.addEventListener('click', closeSection);
}
 */
'use strict';

const titleToclickList = document.querySelectorAll('.js-headerClick');
for (const titleToclick of titleToclickList) {
  titleToclick.addEventListener('click', closeSection);
}

function closeSection(event) {
  //eventpreventDefault();
  const rotateaArrow = event.currentTarget.querySelector('.js-arrow');
  const collapseDivHTML =
    event.currentTarget.parentNode.querySelector('.js-collapse');
  //parentNode se utiliza para buscar elementos en la madre de donde estamos clicando
  console.log(collapseDivHTML);
  const collapsables = document.querySelectorAll('.js-collapse');
  for (const collapsable of collapsables) {
    console.log(collapsable);
    if (collapseDivHTML === collapsable) {
      collapsable.classList.toggle('hidden');
      rotateaArrow.classList.toggle('rotate');
    } else {
      collapsable.classList.add('hidden');
    }
  }
}
