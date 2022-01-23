const slider = document.querySelector('.slider-container');
const slides = Array.from(document.querySelectorAll('.slide'));

let dragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img');
  slideImage.addEventListener('dragstart', (event) => event.preventDefault());

  // Touch events
  slide.addEventListener('touchstart', startTouch(index));
  slide.addEventListener('touchend', endTouch);
  slide.addEventListener('touchmove', moveTouch);

  // Mouse events
  slide.addEventListener('mousedown', startTouch(index));
  slide.addEventListener('mouseup', endTouch);
  slide.addEventListener('mouseleave', endTouch);
  slide.addEventListener('mousemove', moveTouch);
});

window.oncontextmenu = (event) => {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function startTouch(index) {
  return function (event) {
    console.log('start');
    dragging = true;
  };
}

function endTouch() {
  console.log('end');
  dragging = false;
}

function moveTouch() {
  if (dragging) {
    console.log('move');
  }
}
