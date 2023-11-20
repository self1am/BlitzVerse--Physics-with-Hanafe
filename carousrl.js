// Sample JavaScript for a basic course carousel using Swiper.js
// Make sure to include Swiper.js in your project

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.course-carousel', {
        // Add Swiper options here
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
