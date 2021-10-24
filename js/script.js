$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 4, // Вот тут изменять кол-во показанных слайдов
        slidesToScroll: 4,
        speed: 1000, // Скорость скрола
        easing: 'ease', // Настроить анимацию слайдов
        infinite: true,
        initialSlide: 0,
        autoplay: true, // auto playing
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true, // swipe for pc
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        responsive: [{ // adaptive
            breakpoint: 425,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                waitForAnimate: true
            }
        }],
    });
});