let menu = document.querySelector('#menu__btn');
let navigation = document.querySelector('.nav__items');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('active');
}
document.querySelectorAll('.slider__item').forEach(images => {
 images.onclick = () => {
  var src = images.getAttribute('src');
  document.querySelector('.main__img').src = src;
 };
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
   0: {
    slidesPerView: 1,
      },
    768: {
      slidesPerView: 2,

    },
  },
  loop: true,
  grabCursor: true,
});

