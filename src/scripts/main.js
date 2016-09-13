// import View from './views/view';

// const g = 9.81;

$(function() {
  var imagesSelector = [
    ".slider__content img"
  ].join(', ');

  $(imagesSelector).imagesLoaded({ background: true })
    .done(function(instance) {

    })
    .fail(function() {
      alert("Не все изображения удалось загрузить. Веб-страница может выглядеть искаженной.");
    })
    .always(function() {
      frontPage();
    });
});


var pageForms = function () {
  var forms = [
    '.form',
  ];
  var options = {
    delegation: true,
    clearForm: true,
    resetForm: true,
    type: 'post',
    beforeSubmit: function() {
      // $.magnificPopup.close();
    },
    success: function() {
      $.magnificPopup.open({
        items: {
          src: '#popupThanks',
        },
        type: 'inline',
        removalDelay: 500,
        mainClass: 'mfp-zoom-in modal',
        callbacks: {
          beforeOpen: function() {}
        },
        midClick: true
      });
    },
    error: function() {
      $.magnificPopup.open({
        items: {
          src: '#popupError',
        },
        type: 'inline',
        removalDelay: 500,
        mainClass: 'mfp-zoom-in modal',
        callbacks: {
          beforeOpen: function() {}
        },
        midClick: true
      });
    }
  }

  $(forms).each(function (index, elem) {
     $(this).ajaxForm(options)
  });

  $('.button_header').click(function () {
    var popupForm = $('#popupForm');
    $.magnificPopup.open({
      items: {
        src: popupForm,
      },
      type: 'inline',
      removalDelay: 500,
      mainClass: 'mfp-zoom-in modal',
      callbacks: {
        beforeOpen: function() {}
      },
      midClick: true
    });
  });

  $('#maps').on('click', function () {
     $.magnificPopup.open({
      items: {
        src: '#modalzakaz3',
      },
      type: 'inline',
      removalDelay: 500,
      mainClass: 'mfp-zoom-in modal',
      callbacks: {
        beforeOpen: function() {}
      },
      midClick: true
    }); 
  });

     $('.interior__item').magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 500,
      mainClass: 'mfp-zoom-in modal',
      callbacks: {
        beforeOpen: function() {}
      },
      midClick: true
    }); 
};


var frontPage = function(argument) {
  $(document.body).addClass('imagesLoaded');
  $('#preloader').fadeOut({
    duration: 400,
    easing: 'easeInOutSine'
  });
  var sequences = require('./views/sequence');
  var forms = require('./views/forms');

  $('.readMore').readmore({
    speed: 75,
    // moreLink: '<a href="#" class="button button_readmore">Читать полностью >></a>',
    // lessLink: '<a href="#" class="button button_readmore">Скрыть</a>'
    moreLink: '<div class="teachers__readMore" hidden />',
    lessLink: '<div class="teachers__readMore" hidden />',
    maxHeight: 0
  });
  $('.teachers__title').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.teachers__readMore').trigger('click');
  });
  $('.teachers__teacher img').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.teachers__readMore').trigger('click');
  });



  var $nav = $('.nav');
  var navOffset = $nav.offset().top;
  var windowScroll = function (e) {
    if ($(window).scrollTop() > navOffset) {
      $nav.addClass('fixed');
    } else {
      $nav.removeClass('fixed');
    }
  };
  var windowResize = function (e) {
    navOffset = $(sequences[0].elem).offset().top;
  };
  $(window).on('scroll', windowScroll);
  $(window).on('resize', windowResize);
  $(document).ready(windowScroll);

  var scrollToElement = function(element, offset) {
    $(element).click(function(e) {
      var elementClick = $(this).attr("href");
      var destination  = $(elementClick)[0].offsetTop;
      if(destination < 0) {destination = 0;}
      $('html, body').animate({scrollTop: destination - offset}, "slow");
      e.preventDefault();
    });
  }

  scrollToElement(".nav a[href='#toddler']", 0);
  scrollToElement(".nav a[href='#primary']", 0);
  scrollToElement(".nav a[href='#ourteam']", 50);
  scrollToElement(".nav a[href='#cabinet']", 100);
  scrollToElement(".nav a[href='#location']", 100);

  scrollToElement(".sidenav a[href='#toddler']", 0);
  scrollToElement(".sidenav a[href='#primary']", 0);
  scrollToElement(".sidenav a[href='#ourteam']", 50);
  scrollToElement(".sidenav a[href='#cabinet']", 100);
  scrollToElement(".sidenav a[href='#location']", 100);

  var sideNavOpen = document.getElementById('openSidenav');
  var sideNav = document.getElementById('sidenav');
  var closebtn = document.getElementById('closebtn');
  sideNavOpen.addEventListener('click', function (e) {
    e.preventDefault();
    sideNav.style.width = '250px';
  });
  closebtn.addEventListener('click', function (e) {
    e.preventDefault();
    sideNav.style.width = '0';
  });
  $('#sidenav a').on('click', function (e) {
    $(closebtn).trigger('click');
  });

  pageForms();
};
