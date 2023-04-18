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
