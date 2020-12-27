'use strict';
/*------------------------------------------
#3.7 Image Background
-----------------------------------------------*/

const body = document.querySelector('body');

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/images/${imgNumber + 1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

/*-------------실험코드----------------------------


const body = document.querySelector('body');
const IMG_NUMBER = 4;
const number = Math.floor(Math.random() * IMG_NUMBER);

function paintImage() {
  const image = new Image();
  image.src = `/images/${number + 1}.jpg`;
  body.appendChild(image);
  image.classList.add('bgImage')
}

function init() {
  paintImage();
}

init();

------------------------------------------------*/
