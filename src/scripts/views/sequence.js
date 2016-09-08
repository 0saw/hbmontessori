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
  sequences.push({elem: sequenceElement, seq: mySequence});
  sequences.push({elem: sequenceElement2, seq: mySequence2});
  return sequences;
})();
