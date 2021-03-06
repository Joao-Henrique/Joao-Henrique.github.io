$(document).ready(function() {
  
// DECLARED VARIABLES
  var colorIndex = ['green-btn', 'red-btn', 'yellow-btn', 'blue-btn'];
  var currentSequence = [1];
  var inputSequence = [];
  var strictMode = false;
  var awaitingUserInput = false;
  var speed = 500;

// SEQUENCE GENERATOR
  function addToSequence() {
    inputSequence = [];
    $('#txt-user-input').text('');
    currentSequence.push(Math.floor(Math.random() * 4) + 1);
    window.setTimeout(function() {
      showSequence();
    }, 2000);
  };

// BUTTON INTERACTION
  function squareLight(SGbtn) {
    $('#' + SGbtn).fadeTo(250, 1, function() {
      var btnValue = $('#' + SGbtn).data('value');
      var thisSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + btnValue + '.mp3');
      thisSound.play();
      $('#' + SGbtn).fadeTo(250, .8);
    });
    $('#counter').css('background-color', '#2C3E50')
  }

// ALERT IF IT'S CORRECT OR WRONG
  function flashIcon(correct) {
    var color = (correct === true) ? $('#txt-count').html('<span>Correct!!</span>') && $('#counter').css('background-color', 'yellowgreen') : $('#txt-count').html("<span>Wrong!!</span>") && $('#counter').css('background-color', 'red');
  }

// GAME LOGIC
  function checkUserInput() {
    var lastInput = inputSequence[inputSequence.length - 1];
    var sequenceIndex = currentSequence[inputSequence.length - 1];
    if (lastInput !== sequenceIndex) {
      flashIcon(false);
      inputSequence = [];
      if (strictMode) {
        currentSequence = [];
        addToSequence();
      } else {
        window.setTimeout(function() {
          showSequence();
        }, 4000);
      }
    } else if (lastInput == sequenceIndex && inputSequence.length == currentSequence.length) {
      flashIcon(true);
      if (currentSequence.length >= 20) {
        window.setTimeout(function() {
          alert('YOU WIN!!');
          currentSequence = [];
          inputSequence = [];
          addToSequence();
        }, 4000);
      } else {
        addToSequence();
      }
    }
  }

// USER INPUT SEQUENCE
  $(".SGcolor-btn").click(function() {
    if (awaitingUserInput == true) {
      inputSequence.push($(this).data('value'));
      $('#txt-user-input').text(inputSequence);
      squareLight($(this).attr('id'));
      checkUserInput();
    }
  });

// PLAY SEQUENCE
  function showSequence() {
    $('#txt-count').text(currentSequence.length);
    console.log(currentSequence);
    awaitingUserInput = false;
    for (var color in currentSequence) {
      (function(color) {
        window.setTimeout(function() {
          var valNum = currentSequence[color];
          var btnIndex = colorIndex[valNum - 1];
          squareLight(btnIndex);
          if (color == currentSequence.length - 1) {
            awaitingUserInput = true;
            $('#awaiting-input').text('true');
          }
        }, color * speed);
      }(color));
    }
  };
  
// STRICT MODE ON/OFF
  $('#strict-mode-checkbox').change(function() {
    strictMode = $(this).is(":checked");
  });

// START A NEW SEQUENCE
  $('#SGbtn-start').click(function() {
    $('#txt-count').html("<span>Get Ready!!</span>") && $('#counter').css('background-color', 'green')
    currentSequence = [];
    inputSequence = [];
    addToSequence();
    
  });

// REPLAY LAST SEQUENCE
  $('#SGbtn-replay').click(function() {
    showSequence();
  });
  
// TOGLE THE SEQUENCE DISPLAY SPEED
  $('#SGbtn-speed').click(function() {
    if (speed==500) {
        $('#txt-count').html('<span>Slow!!</span>') && $('#counter').css('background-color', 'orange')
        speed = 750;
    } else if (speed==750) {
        speed=1000;
        $('#txt-count').html('<span>Slower!!</span>') && $('#counter').css('background-color', 'red')
    } else if (speed==1000) {
        speed=500;
        $('#txt-count').html('<span>Normal!!</span>') && $('#counter').css('background-color', 'green')
    }
  });
});