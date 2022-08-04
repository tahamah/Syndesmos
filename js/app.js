var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

var swiper = new Swiper('.mySwiper2', {
    slidesPerView: 7,
    spaceBetween: 20,
    slidesPerGroup: 7,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
})
