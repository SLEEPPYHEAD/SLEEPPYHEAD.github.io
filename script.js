const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showItem(index) {
  carouselItems[currentItem].classList.remove('active');
  carouselItems[index].classList.add('active');
  currentItem = index;
}

setInterval(() => {
  let index = currentItem + 1;
  if (index >= carouselItems.length) {
    index = 0;
  }
  showItem(index);
}, 5000);

var viewer = OpenSeadragon({
  id: "viewer",
  prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
  tileSources: {
    type: "image",
    url: "1.jpg"
  }
});
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide);
const carouselImages = [  'images/carousel1.jpg',  'images/carousel2.jpg',  'images/carousel3.jpg',  'images/carousel4.jpg'];

let currentIndex = 0;

const carouselImage = document.getElementById('carousel-image');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

function displayImage(index) {
  carouselImage.src = carouselImages[index];
}

function moveLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
  }
  displayImage(currentIndex);
}

function moveRight() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  displayImage(currentIndex);
}

leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);

setInterval(moveRight, 2000);
