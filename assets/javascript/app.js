$(document).ready(function() {

  var letters = ['a', 'b', 'c', 'd'];
  var questionCurrent = 0;
  var correctAnswer;
  var score = 0;
  var time = 10;
  var intervalId;


  // Hide all Divs /////////////////////////////////////////////////////////////
  function cleanHouse () {
    $('#startbtn').attr('style','display:none;');
    $('#timeout').attr('style','display:none;');
    $('#wrong').attr('style','display:none;');
    $('#right').attr('style','display:none;');
    $('#answers').attr('style','display:none;');
    $('#question').attr('style','display:none;');
    $('#endCard').attr('style','display:none;');
  };

  // Timer /////////////////////////////////////////////////////////////////////
  function countDown () {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
  };

  function count () {
    time--;
    $("#timer").html(time);
    if (time == 0) {
      timeUp();
    };
  }

  // Time's up! ////////////////////////////////////////////////////////////////
  function timeUp() {
    cleanHouse();
    clearInterval(intervalId);
    console.log('Timeout!');
    $('#timeout').attr('style','display:block;');
    
    if (questionCurrent == 10){
      setTimeout(endCard, 1000 * 2);}
    else {
    setTimeout(insertAnswers, 1000 * 2);}
    questionCurrent++;
  };



  // Score and End Card ////////////////////////////////////////////////////////
  function endCard() {
    cleanHouse ();

    $('#timerBox').attr('style','display:none;');
    $('#question').attr('style','display:block;');
    $('#endCard').attr('style','display:block;');

    // Ending Message
    $('#question').empty();
    if ( score < 5 ) {
      $('#question').html("<h2>"+"You ignorant slut."+"</h2>");
    }
    else if ( score < 10 ) {
      $('#question').html("<h2>"+"Almost! Try again for a perfect score!"+"</h2>");
    }
    else if ( score == 10 ) {
      $('#question').html("<h2>"+"Congradulations! You earn a Dundie!"+"</h2>");
    }

    // Display Score
    var scoreCard = $('<h1>');
    scoreCard.html( "Score: " + score + "/10" );
    $('#endCard').prepend(scoreCard);

  };

  // Create and insert Answer boxes /////////////////////////////////////////////
  function insertAnswers () {
    cleanHouse ();
    time = 10;
    $("#timer").html(time);


    $('#answers').attr('style','display:block;');
    $('#timerBox').attr('style','display:block;');
    $('#question').attr('style','display:block;');

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
    countDown();
  };

  // On Click Start //////////////////////////////////////////////////////////
  $("#startbtn").on('click',function(){ event.preventDefault();
    insertAnswers();       
  });

  // Store selected answer ////////////////////////////////////////////////
  $('.answer').on('click',function(){ event.preventDefault();
    cleanHouse ();
    clearInterval(intervalId);
    var value = $(this).val();
    
    if (value == correctAnswer) { youRight(); }
    else { youWrong();
  };
  
  });
  /////////////////////////////////////////////////////////////////////////////
  function youRight() {
    console.log('Right');
    score++;
    $('#right').attr('style','display:block;');
    console.log(questionCurrent);
    console.log(score);
    if (questionCurrent == 10){
      console.log(questionCurrent);
      setTimeout(endCard, 1000 * 2);
    }
    else {
    setTimeout(insertAnswers, 1000 * 2);};
    questionCurrent++;
  };
  /////////////////////////////////////////////////////////////////////////////
  function youWrong() {
    console.log('Wrong');
    $('#wrong').attr('style','display:block;');
    if (questionCurrent == 10){
      setTimeout(endCard, 1000 * 2);}
    else {
    setTimeout(insertAnswers, 1000 * 2);}
  };

    // Refresh Page /////////////////////////////////////////////////////////////
    $("#reset").on('click',function(){
      cleanHouse ();
      location.reload();
    });
    //////////////////////////////////////////////////////////////////////////////



});
