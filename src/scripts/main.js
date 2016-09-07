// import View from './views/view';

// const g = 9.81;

$(function() {
  var sequences = require('./views/sequence');
  $('.readMore').readmore({
    speed: 75,
    moreLink: '<a href="#" class="button button_readmore">Читать полностью >></a>',
    lessLink: '<a href="#" class="button button_readmore">Скрыть</a>'
  });
});
