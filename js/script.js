const slider = document.querySelector('.slider-container');
const slides = Array.from(document.querySelectorAll('.slide'));

let dragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID = 0;
let currentIndex = 0;
