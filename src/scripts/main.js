// import View from './views/view';

// const g = 9.81;

$(function() {
  var imagesSelector = [
    ".slider__content img"
  ].join(', ')

  $(imagesSelector).imagesLoaded({ background: true })
    .done(function(instance) {
    })
    .fail(function() {
      alert("Не все изображения удалось загрузить. Веб-страница может выглядеть искаженной.");
    })
    .always(function() {
      $(document.body).addClass('imagesLoaded');
      $('#preloader').fadeOut({
        duration: 400,
        easing: 'easeInOutSine'
      });
      var sequences = require('./views/sequence');
      $('.readMore').readmore({
        speed: 75,
        moreLink: '<a href="#" class="button button_readmore">Читать полностью >></a>',
        lessLink: '<a href="#" class="button button_readmore">Скрыть</a>'
      });

      var $nav = $('.nav');
      var windowScroll = function (e) {
        if ($(window).scrollTop() > $nav.offset().top) {
          $nav.toggleClass('fixed', true);
        } else {
          $nav.toggleClass('fixed', false);
        }
      };
      $(window).on('scroll resize', windowScroll);
      $(document).ready(windowScroll);

      var scrollToElement = function(element, offset) {
        $(element).click(function(e) {
          var elementClick = $(this).attr("href");
          var destination  = $(elementClick).offset().top;
          if(destination < 0) {destination = 0;}
          $('html, body').animate({scrollTop: destination - offset}, "slow");
          e.preventDefault();
        });
      }

      scrollToElement("a[href='#toddler']", 0);
      scrollToElement("a[href='#primary']", 0);
      scrollToElement("a[href='#ourteam']", 50);
      scrollToElement("a[href='#cabinet']", 0);
      scrollToElement("a[href='#location']", 0);
    });
});
