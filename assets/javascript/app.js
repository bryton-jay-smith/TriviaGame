$(document).ready(function() {

  var letters = ['a', 'b', 'c', 'd'];
  var questionCurrent = 0;
  var correctAnswer;
  var score = 0;


// Create and insert Answer boxes /////////////////////////////////////////////
  function insertAnswers () { event.preventDefault();

    // Clear containers
    $('#question').empty();

    // Insert Question
    var newQuestion = $('<p>');
    newQuestion.attr('class', 'question');
    newQuestion.text(triviaQuestions.questions[questionCurrent].questionContent);
    $('#question').append(newQuestion);

    // Defines and inserts answers
    for (i = 0; i < 4; i++) {
      var name = "#" + letters[i];
      var aInput = $(name);
      aInput.text(triviaQuestions.questions[questionCurrent].multiChoice[i]);
    };

    // Store Correct answer value
    correctAnswer = triviaQuestions.questions[questionCurrent].correctAnswer;
  };
////////////////////////////////////////////////////////////////////////////////


// On Click Start //////////////////////////////////////////////////////////
  $("#startbtn").on('click',function(){ event.preventDefault();
    insertAnswers();
    $('#answers').attr('style','display:block;');
    $('#startbtn').attr('style','display:none;');
  });
/////////////////////////////////////////////////////////////////////////



// Store selected answer ////////////////////////////////////////////////
$('.answer').on('click',function(){ event.preventDefault();
  var value = $(this).val();
  questionCurrent++;
  if (value == correctAnswer) {
    console.log('Right');
    score++;
    youRight();
  }
  else {
    console.log('Wrong');
    youWrong();
  }
});

function youRight() {
  alert('Correct!');
  insertAnswers();
};

function youWrong() {
  alert('Wrong!');
  insertAnswers();
};



});
