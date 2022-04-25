// Slider



const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    speed: 700,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.arrow__btn-next',
        prevEl: '.arrow__btn-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,

        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,


        },

    }

});
