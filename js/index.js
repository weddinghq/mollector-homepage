$('.video').parent().click(function () {
  if ($(this).children(".video").get(0).paused) {
    $(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
  } else {
    $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
  };
});

// Initialize Swiper
let labels = ['pagination-1', 'pagination-2', 'pagination-3', 'pagination-4', 'pagination-5', 'pagination-6'];
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 1920px
    1920: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

$("#swiper-pagination .swiper-pagination-bullet").addClass(function (index) {
  return "swiper-pagination-bullet-" + index;
});

var slider2 = new Swiper ('.slider2', {  
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 3,
        spaceBetween: 0
      },
    }
});


/*
    function open popup video
*/
$( document ).ready(function() {
  $('#headerVideoLink').magnificPopup({
   type:'inline',
   midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
 });
   
});





Splitting()
ScrollOut({
  targets: '.word',
  scrollingElement: '.container',
})
