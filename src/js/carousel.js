class Carousel {
  constructor(slides, prevButton, nextButton, slideOne, slideTwo, slideThree) {
    this.slides = document.querySelectorAll(slides);
    this.prevButton = document.querySelector(prevButton);
    this.nextButton = document.querySelector(nextButton);
    this.slideOne = document.querySelector(slideOne);
    this.slideTwo = document.querySelector(slideTwo);
    this.slideThree = document.querySelector(slideThree);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.currentSlideIndex = 0;
  }

  prevSlide() {
    this.currentSlideIndex === 0
      ? (this.currentSlideIndex = 2)
      : this.currentSlideIndex--;

    this.slides.forEach((slide) => {
      slide.classList.remove("carousel__item--visible");
    });

    this.slides[this.currentSlideIndex].classList.add(
      "carousel__item--visible"
    );
  }

  nextSlide() {
    this.currentSlideIndex === 2
      ? (this.currentSlideIndex = 0)
      : this.currentSlideIndex++;

    this.slides.forEach((slide) => {
      slide.classList.remove("carousel__item--visible");
    });

    this.slides[this.currentSlideIndex].classList.add(
      "carousel__item--visible"
    );
  }

  currentSlide(index) {
    this.slides.forEach((slide) => {
      slide.classList.remove("carousel__item--visible");
    });
    this.slides[index].classList.add("carousel__item--visible");
  }

  addClickEvent() {
    this.prevButton.addEventListener("click", this.prevSlide);
    this.nextButton.addEventListener("click", this.nextSlide);
    this.slideOne.addEventListener("click", () => this.currentSlide(0));
    this.slideTwo.addEventListener("click", () => this.currentSlide(1));
    this.slideThree.addEventListener("click", () => this.currentSlide(2));
  }
}

const carousel = new Carousel(
  ".carousel__item",
  ".actions__button--prev",
  ".actions__button--next",
  ".actions__button--one",
  ".actions__button--two",
  ".actions__button--three"
);

carousel.addClickEvent();
