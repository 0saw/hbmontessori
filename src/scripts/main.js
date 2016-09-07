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
    });
});
