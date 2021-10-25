$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        responsive: [{
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
