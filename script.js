const button = document.querySelector("data-carousel-button")
buttons.foreach(button => {
  button.addEventlistener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-caraousel]")
      .querySelector("[data-slides]")

    const activeSlide = slide.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.actve = true
    delete activeSlide.dataset.active
  })
})
// const slide = document.querySelector('.carousel-slide');
// const prevButton = document.querySelector('.carousel-button-prev');
// const nextButton = document.querySelector('.carousel-button-next');
// let slidePosition = 0;

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

// function moveToPrevSlide() {
//   if (slidePosition === 0) {
//     slidePosition = -10;
//   } else {
//     slidePosition += 10;
//   }
//   slide.style.transform = `translateX(${slidePosition}%)`;
// }

// function startCarousel() {
//   setInterval(moveToNextSlide, 5000);
// }

// startCarousel();

// prevButton.addEventListener('click', moveToPrevSlide);
// nextButton.addEventListener('click', moveToNextSlide);
