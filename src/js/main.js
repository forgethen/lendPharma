'use strict';

$(document).ready(function() {

  $("a.slow").click(function() {
    var e = $(this).attr("href"),
      h = $('header .top-container').outerHeight(),
      k = $(e).offset().top - h;
    return $("html,body").animate({
      scrollTop: k
    }, 750), !1
  });

  setTimeout(function() {
    $('.logo, .goods').addClass('this');
  }, 0);

  $("input,textarea,email").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder")), $(this).attr("placeholder", "")
  });

  $("input,textarea,email").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"))
  });

  $('.product-modals .preview-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="icofont-rounded-left slick-prev"></i>',
    nextArrow: '<i class="icofont-rounded-right slick-next"></i>',
    infinite: true,
    speed: 250,
    autoplayspeed: 2500,
    fade: true,
    asNavFor: '.product-modals .vertical-preview',
  });
  $('.product-modals .vertical-preview').slick({
    arrows: false,
    autoplay: true,
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    slidePerRow: 3,
    slidesToShow: 3,
    speed: 250,
    autoplayspeed: 2500,
    asNavFor: '.product-modals .preview-slider',
    cssEase: 'linear',
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,

  });

  $('.product-modals .slick-arrows .slick-prev').click(function() {
    $('.product-modals .preview-slider').slick('slickPrev');
  })

  $('.product-modals .slick-arrows .slick-next').click(function() {
    $('.product-modals .preview-slider').slick('slickNext');
  })

  $('.answer .btn-feedback').click(function() {
    $('.answer .close').click();
    $("footer .btn-feedback").click();
  })

  $(".cart").click(function() {
    $(".cart-box").toggleClass('active');
  })

  $(document).mouseup(function (e) {
    var container = $(".cart");
    if (container.has(e.target).length === 0){
      $(".cart-box").removeClass('active');
    }
});

  $(window).on('load resize orientationchange', function() {
    $('.products__items').each(function() {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).outerWidth() > 960) {
        if ($carousel.hasClass('slick-initialized')) {
          setTimeout(function () {
            $carousel.slick('unslick');
          }, 100);
        }
      } else {
        if (!$carousel.hasClass('slick-initialized')) {
          $carousel.slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<i class="icofont-rounded-left slick-prev"></i>',
            nextArrow: '<i class="icofont-rounded-right slick-next"></i>',
            dots: true,
            responsive: [{
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }, ]
          });
        }
      }
    });
  });
  $('.show-hide-btn').click(function() {
    $('.product-modals .information .title, .product-modals .information .text, .product-modals .show-hide-btn').toggleClass('show');
  })
  $('.buy').click(function() {
    setTimeout(function () {
      $('.product-modals .preview-slider').slick('slickNext');
    }, 100);
  })

});

//# sourceMappingURL=main.js.map
