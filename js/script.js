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

// Disable context menu
window.oncontextmenu = (event) => {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function startTouch(index) {
  return function (event) {
    currentIndex = index;
    startPosition = getPositionX(event);
    dragging = true;

    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
  };
}

function endTouch() {
  dragging = false;
  cancelAnimationFrame(animationID);

  slider.classList.remove('grabbing');
}

function moveTouch(event) {
  if (dragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPosition;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (dragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
