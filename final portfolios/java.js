var topDoor = document.querySelector('.fridge');
var bottomDoor = document.querySelector('.freezer');
var contents = document.querySelector('.contents');


bottomDoor.addEventListener('click', toggleFreezer);
topDoor.addEventListener('click', toggleFridge);

function toggleFreezer() {
  if (!bottomDoor.classList.contains('open') && !topDoor.classList.contains('open')) {
    // open fridge
    bottomDoor.classList.add('open');
    contents.style.transform = 'translateY(10%)';
  } else {
    // close fridge
    bottomDoor.classList.remove('open');
    contents.style.transform = 'translateY(0)';
  }
}

function toggleFridge() {
  if (!bottomDoor.classList.contains('open') && !topDoor.classList.contains('open')) {
    // open fridge
    topDoor.classList.add('open');
    contents.style.transform = 'translateY(10%)';
  } else {
    // close fridge
    topDoor.classList.remove('open');
    contents.style.transform = 'translateY(0)';
  }
}

var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
  function () {
    d = new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = d.getHours();
    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";

  }, 1000
);


const lampHandle = document.querySelector('.lamphandle');
const overlay = document.querySelector('.overlay');
const eyes = document.querySelector('.eyes');
const eyes2 = document.querySelector('.eyes2');
const eyes3 = document.querySelector('.eyes3');
const Weltext = document.querySelector('.welcometext');
const audio = document.querySelector('#lamp-audio');
const fridgeHandle = document.querySelector('.freezer');
const fridgeaudio = document.querySelector('#fridge-audio');
const text = document.querySelector('.box');

let isLightOn = false;

lampHandle.addEventListener('click', function () {
  isLightOn = !isLightOn;

  if (isLightOn) {
    overlay.classList.remove('active');
    eyes.classList.remove('active');
    eyes2.classList.remove('active');
    eyes3.classList.remove('active');
    text.classList.remove('active');
  } else {
    overlay.classList.add('active');
    eyes.classList.add('active');
    eyes2.classList.add('active');
    eyes3.classList.add('active');
    text.classList.add('active');

  }
});

const lamphandle = document.querySelector('.lamphandle');
lamphandle.addEventListener('click', () => {
  lamphandle.classList.toggle('clicked');
});

lampHandle.addEventListener('click', function () {
  audio.currentTime = 0;
  audio.play();
});

fridgeHandle.addEventListener('click', function () {
  audio.currentTime = 0;
  fridgeaudio.play();
  fridgeaudio.volume = 2;
});

