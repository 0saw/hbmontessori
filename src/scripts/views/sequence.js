(function() {
  var sequences = [];
  var sequenceElement = document.getElementById("sequence1");
  if (sequenceElement == null) {
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

  var mySequence = sequence(sequenceElement, options);
  sequences.push(mySequence);
  return sequences;
})();
