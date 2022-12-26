(function ($) {
  "use strict";
  // sticky-header
  let wind = $(window);
  let sticky = $("#sticky-header");

  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky-menu");
    } else {
      sticky.addClass("sticky-menu");
    }
  });
  //butter.js for smooth scrolling
  // butter.init({
  //   wrapperId: "butter",
  //   wrapperDamper: 0.1,
  //   cancelOnTouch: true,
  // });

  // meanmenu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    onePage: true,
  });

  // // onepage nav
  // $(".scroll").onePgaeNav({
  //   wrapper: "#onepage-nav",
  //   activeClass: "active",
  // });
  // main slider
  $(".slider-active").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 2000,
    fade: true,
    arrows: true,
    prevArrow:
      '<button class="prev-arrow"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="next-arrow"><i class="fa fa-angle-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  // tesimonial
  $(".testimonial-active").slick({
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
  });
  //  video pop up
  $(".popup-video").magnificPopup({
    type: "iframe",
  });
  // owl-carousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 3,
      },
      550: {
        items: 4,
      },
      767: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "Fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: "Scroll To Top", // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF',
  });
})(jQuery);

const josh = new Josh({
  // DOM CSS class to Animate, default is "josh-js"
  initClass: "josh-js",

  // Animation CSS class from Animate.css library
  animClass: "animate__animated",

  // Element distance of viewport to triggering the animation. default is 0.2 means 20% of element view animation will trigger
  offset: 0.2,

  // Animation will trigger on Mobile or not. Default is true
  animateInMobile: true,

  // Animation will trigger on newly added element or not. Default is false
  onDOMChange: true,
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
