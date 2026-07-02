
const productsSwiper = new Swiper(".productsSwiper", {
  loop: true,
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".productsSwiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});

const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,

  speed: 1200, 

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".heroSwiper .swiper-pagination",
    clickable: true,
  },
});
