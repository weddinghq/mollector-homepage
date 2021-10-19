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
    // when window width is >= 480px
    480: {
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
      slidesPerView: 4,
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

/*
    Carousel
*/





var player = null;
var tag = document.createElement("script");
tag.id = "iframe-api";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player("existing-iframe-example");
}

var elPopupClose = $(".popup__close");
var elPopupOverlay = $(".popup__overlay");
var elPopupToggle = $("#popup__toggle");

// @see https://developers.google.com/youtube/iframe_api_reference#Playback_controls
// @see http://stackoverflow.com/questions/8667882/how-to-pause-a-youtube-player-when-hiding-the-iframe
function popupDidClose() {
  if (player !== null) {
    player.pauseVideo();
  }
}

elPopupClose.click(function () {
  elPopupOverlay.css({ display: "none", visibility: "hidden", opacity: 0 });
  popupDidClose();
});

elPopupOverlay.click(function (event) {
  event = event || window.event;
  if (event.target === this) {
    elPopupOverlay.css({ display: "none", visibility: "hidden", opacity: 0 });
    popupDidClose();
  }
});

elPopupToggle.click(function () {
  elPopupOverlay.css({ display: "block", visibility: "visible", opacity: 1 });
});
