window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          showMenu = document.querySelector('.header__hamburger'),
          closeMenu = document.querySelector('.menu__close'),
          overlay = document.querySelector('.overlay');

    showMenu.addEventListener('click', () => {
        menu.classList.add('active');
        overlay.classList.add('overlayShow');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('overlayShow');
    });
    
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('overlayShow');
    });

    // Slider

    function activeSlider(slidesSelector, prevSelector, nextSelector, slidesWrapperSelector, slidesFieldSelector) {
        const slides = document.querySelectorAll(slidesSelector),
              prev = document.querySelector(prevSelector),
              next = document.querySelector(nextSelector),
              slidesWrapper = document.querySelector(slidesWrapperSelector),
              slidesField = document.querySelector(slidesFieldSelector),
              width = window.getComputedStyle(slidesWrapper).width;

        let offset = 0;

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';

        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = width;
        });

        next.addEventListener('click', function() {
            if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2)
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            console.log('hello');
        });

        prev.addEventListener('click', function() {
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2) * (slides.length - 1)
            } else {
                offset -= +width.slice(0, width.length - 2)
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
        });
    }

    activeSlider('.categories__item', '.categories__prev', '.categories__next', '.categories__wrapper', '.categories__inner');
    // activeSlider('.news__item', '.news__prev', '.news__next', '.news__wrapper', '.news__inner');
});