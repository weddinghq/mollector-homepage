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
  // effect: 'fade',
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

var slider2 = new Swiper('.slider2', {
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
$('#headerVideoLink').magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 400,
	preloader: false,
	iframe: {
    markup: '<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe>' +
			'</div>',
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: 'https://www.youtube.com/embed/J1MTIsq1diY?autoplay=1'
			}
		}
	},
});






function imageBgPreload(onComplete) {

  // preload all background images
  try {
    runBgPreload(onComplete);
  }
  catch (err) {
    onComplete();
  }

  function runBgPreload(onComplete) {
    var imageHolder = document.createElement("div");
    imageHolder.setAttribute("id", "preBgHolder");
    imageHolder.style.display = "none";
    document.getElementsByTagName("body")[0].appendChild(imageHolder);
    var preloads = document.getElementsByClassName("preload");
    var imageBank = document.getElementById("preBgHolder");
    var preloadUrls = [];
    var images = [];
    var pre = [];
    var preStatus = [];
    var allImagesReady;
    var onCompleteFired = false;
    // grab all background images from CSS and preload in a CSS hidden div called preBgHolder.
    function getAllBackgroundImages() {
      for (i = 0; i < preloads.length; i++) {

        if (window.getComputedStyle(preloads[i]).getPropertyValue("background-image") != "none") {
          preloadUrls[i] = window.getComputedStyle(preloads[i]).getPropertyValue("background-image");
          preloadUrls[i] = preloadUrls[i].replace(/\"/g, ''); // removes url quotes as computed different in safari
          preloadUrls[i] = preloadUrls[i].substring(4, preloadUrls[i].length - 1);
          images[i] = new Image();
          images[i].src = preloadUrls[i];
          images[i].classList.add("preBg");
          imageBank.appendChild(images[i]);
        } else {
          console.error("#" + preloads[i].id + " does not contain a background image");
        }
      }
    }
    // check each img tag in the hidden div has loaded
    function statusListeners() {
      pre = document.getElementsByClassName("preBg");
      for (i = 0; i < pre.length; i++) {
        pre[i].addEventListener("load", checkEachStatus, false);
        preStatus[i] = pre[i].complete;
        //console.log([i] + " load status: " + preStatus[i]);
      }
    }

    function checkEachStatus() {
      //console.log("checkEachStatus()");
      function imageLoadedTrue(loadStatuses) {
        return loadStatuses == true;
      }
      for (i = 0; i < pre.length; i++) {
        preStatus[i] = pre[i].complete;
        //console.log(pre[i].complete + i);
        allImagesReady = preStatus.every(imageLoadedTrue);
        if (allImagesReady == true && onCompleteFired == false) {
          // mainFired used to stop runMain firing more than once if images load from cache
          //console.log("onComplete()");
          onComplete();
          onCompleteFired = true;
        }
      }
    };
    getAllBackgroundImages();
    statusListeners();
    // if there are no preloads to work with run the fallack function anyway
    if (preloads.length == 0) {
      onComplete();
    }
  }
}

$('#headerPopup').on('pumBeforeOpen', function () {
    var $iframe = jQuery('iframe', jQuery(this)),
      src = $iframe.prop('src');
    $iframe.prop('src', '').prop('src', src + '?autoplay=1');
  });



// $(document).ready(function() {
// 	var s = $(".text-start");
//   var z = $(".text-magical-bottom")
// 	var pos = s.position();					   
// 	$(window).scroll(function() {
// 		var windowpos = $(window).scrollTop();
// 		if (windowpos >= (pos.top + 200) & windowpos <=1000) {
// 			s.addClass("sp-container");
// 			z.addClass("sp-circle-link");
// 		}
// 	});
// });
