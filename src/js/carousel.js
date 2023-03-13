const slides = document.querySelectorAll(".carousel__item");

const prevButton = document.querySelector(".actions__button--prev");

const nextButton = document.querySelector(".actions__button--next");

const slideOne = document.querySelector(".actions__button--one");

const slideTwo = document.querySelector(".actions__button--two");

const slideThree = document.querySelector(".actions__button--three");

let currentSlideIndex = 0;

nextButton.addEventListener("click", () => {
  currentSlideIndex === 2 ? (currentSlideIndex = 0) : currentSlideIndex++;

  slides.forEach((slide) => {
    slide.classList.remove("carousel__item--visible");
  });

  slides[currentSlideIndex].classList.add("carousel__item--visible");
});

prevButton.addEventListener("click", () => {
  currentSlideIndex === 0 ? (currentSlideIndex = 2) : currentSlideIndex--;

  slides.forEach((slide) => {
    slide.classList.remove("carousel__item--visible");
  });

  slides[currentSlideIndex].classList.add("carousel__item--visible");
});

slideOne.addEventListener("click", () => {
  slides[0].classList.add("carousel__item--visible");
  slides[1].classList.remove("carousel__item--visible");
  slides[2].classList.remove("carousel__item--visible");
});

slideTwo.addEventListener("click", () => {
  slides[0].classList.remove("carousel__item--visible");
  slides[1].classList.add("carousel__item--visible");
  slides[2].classList.remove("carousel__item--visible");
});

slideThree.addEventListener("click", () => {
  slides[0].classList.remove("carousel__item--visible");
  slides[1].classList.remove("carousel__item--visible");
  slides[2].classList.add("carousel__item--visible");
});
