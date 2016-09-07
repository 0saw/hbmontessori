(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\main.js":[function(require,module,exports){
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

},{"./views/sequence":"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\views\\sequence.js"}],"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\views\\sequence.js":[function(require,module,exports){
(function() {
  var sequences = [];
  var sequenceElement = document.getElementById("sequence1");
  var sequenceElement2 = document.getElementById("sequence2");
  if (sequenceElement == null || sequenceElement2 == null) {
    return;
  }

  var options = {
    animateCanvas: false,
    keyNavigation: true,
    fadeStepWhenSkipped: false,
    // reverseWhenNavigatingBackwards: true,
    // nextButton: '#sequence1 .seq-prev',
    // prevButton: '#sequence1 .seq-next',
    pagination: '#sequence1 .slider__pagination',
    preloader: false,
    // reverseTimingFunctionWhenNavigatingBackwards: true,
  }

  var options2 = {
    animateCanvas: true,
    keyNavigation: false,
    fadeStepWhenSkipped: false,
    reverseWhenNavigatingBackwards: true,
    nextButton: '.wrapper_mac .seq-next',
    prevButton: '.wrapper_mac .seq-prev',
    // pagination: '#sequence1 .slider__pagination',
    preloader: false,
    // reverseTimingFunctionWhenNavigatingBackwards: true,
  }

  var mySequence = sequence(sequenceElement, options);
  sequences.push(mySequence);

  var mySequence2 = sequence(sequenceElement2, options2);
  sequences.push(mySequence2);
  sequences.push(mySequence2);
  return sequences;
})();

},{}]},{},["C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvdmlld3Mvc2VxdWVuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCBWaWV3IGZyb20gJy4vdmlld3Mvdmlldyc7XG5cbi8vIGNvbnN0IGcgPSA5LjgxO1xuXG4kKGZ1bmN0aW9uKCkge1xuICB2YXIgc2VxdWVuY2VzID0gcmVxdWlyZSgnLi92aWV3cy9zZXF1ZW5jZScpO1xuICAkKCcucmVhZE1vcmUnKS5yZWFkbW9yZSh7XG4gICAgc3BlZWQ6IDc1LFxuICAgIG1vcmVMaW5rOiAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ1dHRvbiBidXR0b25fcmVhZG1vcmVcIj7Qp9C40YLQsNGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOID4+PC9hPicsXG4gICAgbGVzc0xpbms6ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbl9yZWFkbW9yZVwiPtCh0LrRgNGL0YLRjDwvYT4nXG4gIH0pO1xufSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBzZXF1ZW5jZXMgPSBbXTtcbiAgdmFyIHNlcXVlbmNlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VxdWVuY2UxXCIpO1xuICB2YXIgc2VxdWVuY2VFbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VxdWVuY2UyXCIpO1xuICBpZiAoc2VxdWVuY2VFbGVtZW50ID09IG51bGwgfHwgc2VxdWVuY2VFbGVtZW50MiA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgYW5pbWF0ZUNhbnZhczogZmFsc2UsXG4gICAga2V5TmF2aWdhdGlvbjogdHJ1ZSxcbiAgICBmYWRlU3RlcFdoZW5Ta2lwcGVkOiBmYWxzZSxcbiAgICAvLyByZXZlcnNlV2hlbk5hdmlnYXRpbmdCYWNrd2FyZHM6IHRydWUsXG4gICAgLy8gbmV4dEJ1dHRvbjogJyNzZXF1ZW5jZTEgLnNlcS1wcmV2JyxcbiAgICAvLyBwcmV2QnV0dG9uOiAnI3NlcXVlbmNlMSAuc2VxLW5leHQnLFxuICAgIHBhZ2luYXRpb246ICcjc2VxdWVuY2UxIC5zbGlkZXJfX3BhZ2luYXRpb24nLFxuICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgLy8gcmV2ZXJzZVRpbWluZ0Z1bmN0aW9uV2hlbk5hdmlnYXRpbmdCYWNrd2FyZHM6IHRydWUsXG4gIH1cblxuICB2YXIgb3B0aW9uczIgPSB7XG4gICAgYW5pbWF0ZUNhbnZhczogdHJ1ZSxcbiAgICBrZXlOYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICBmYWRlU3RlcFdoZW5Ta2lwcGVkOiBmYWxzZSxcbiAgICByZXZlcnNlV2hlbk5hdmlnYXRpbmdCYWNrd2FyZHM6IHRydWUsXG4gICAgbmV4dEJ1dHRvbjogJy53cmFwcGVyX21hYyAuc2VxLW5leHQnLFxuICAgIHByZXZCdXR0b246ICcud3JhcHBlcl9tYWMgLnNlcS1wcmV2JyxcbiAgICAvLyBwYWdpbmF0aW9uOiAnI3NlcXVlbmNlMSAuc2xpZGVyX19wYWdpbmF0aW9uJyxcbiAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgIC8vIHJldmVyc2VUaW1pbmdGdW5jdGlvbldoZW5OYXZpZ2F0aW5nQmFja3dhcmRzOiB0cnVlLFxuICB9XG5cbiAgdmFyIG15U2VxdWVuY2UgPSBzZXF1ZW5jZShzZXF1ZW5jZUVsZW1lbnQsIG9wdGlvbnMpO1xuICBzZXF1ZW5jZXMucHVzaChteVNlcXVlbmNlKTtcblxuICB2YXIgbXlTZXF1ZW5jZTIgPSBzZXF1ZW5jZShzZXF1ZW5jZUVsZW1lbnQyLCBvcHRpb25zMik7XG4gIHNlcXVlbmNlcy5wdXNoKG15U2VxdWVuY2UyKTtcbiAgc2VxdWVuY2VzLnB1c2gobXlTZXF1ZW5jZTIpO1xuICByZXR1cm4gc2VxdWVuY2VzO1xufSkoKTtcbiJdfQ==
