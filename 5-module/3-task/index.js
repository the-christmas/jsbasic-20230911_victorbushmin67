function initCarousel() {
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let slide = document.querySelector('.carousel__inner');
  let showWindow = document.querySelector('.carousel');
  let counter = 1;

  carouselArrowLeft.style.display = 'none';

  function moveToRight(slide) {
    carouselArrowLeft.style.display = 'flex';

    slide.style.transform = `translateX(-${showWindow.offsetWidth * counter}px)`;

    counter++;

    if (counter >= 4) {
      carouselArrowRight.style.display = 'none';

      return;
    }
  };

  function moveToLeft(slide) {
    carouselArrowRight.style.display = 'flex';

    counter--;

    slide.style.transform = `translateX(-${showWindow.offsetWidth * (counter - 1)}px)`;

    if (counter == 1) {
      carouselArrowLeft.style.display = 'none';
      
      return;
    }
  };

  carouselArrowRight.addEventListener('click', () => {
    moveToRight(slide);
  });

  carouselArrowLeft.addEventListener('click', () => {
    moveToLeft(slide);
  });
}
