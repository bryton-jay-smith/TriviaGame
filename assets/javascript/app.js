$(document).ready(function() {

// Create and insert Answer boxes
  function insertAnswers () {
    var letters = ['a', 'b', 'c', 'd'];
    for (i = 0; i < letters.length; i++) {
      var aInput = $('<input>');
      aInput.attr('type', 'radio');
      aInput.attr('class', 'answer');
      aInput.attr('value', letters[i]);
      aInput.attr('id', 'answer_' + letters[i]);
      $('#answers').append(aInput);
    };

    var submit = $('<button>');
    submit.attr('id', 'submit');
    submit.text("Submit");
    $('#answers').append(submit);
  };
// End Create and insert Answer boxes

});
