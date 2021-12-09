var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 398,
    slideMargin = 35,
    nextBtn = document.querySelector('.next');

    slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

    function moveSlide(num){
      slides.style.left = -num * 433 + 'px';
      currentIdx = num;
    }
    prevBtn.addEventListener('click', function(){
      if(currentIdx > 0){
             moveSlide(currentIdx - 3);
      }else {
        moveSlide(lideCount - 3);
      }
    });
    nextBtn.addEventListener('click', function(){
      if(currentIdx < slideCount - 3){
                moveSlide(currentIdx + 3);
                console.log(currentIdx);
      }else {
        moveSlide(0);
      }
    });
