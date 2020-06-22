$(document).ready(function () {
  const menuIconWrapper = $('.menu-icon-wrapper');

  // burger-menu
  menuIconWrapper.on('click', function () {
    $('.menu-icon').toggleClass('menu-icon-active');
  });
  // slider
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 10000,
    loop: true,
    items: 1,
  });
  // smooth scroll
  function smoothScrollHome() {
    $('#js-arrow').on('click', function (event) {
      event.preventDefault();
      let top = $('#js-top').offset().top;

      $('html, body').animate({
          scrollTop: top,
        },
        500
      );
    });
  }

  smoothScrollHome();

  //mixitup
  let mixer = mixitup('.products__row');
});