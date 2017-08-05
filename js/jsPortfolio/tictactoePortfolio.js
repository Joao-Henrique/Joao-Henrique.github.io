$(document).ready(function() {

  //GAME LOGIC
  function playerTurn(turn, id) {
    var spotTaken = $("#" + id).text();
    if (spotTaken === "#") {
      count++;
      $("#" + id).text(turn);
      turns[id] = turn;
      winCondition(turns, turn);
      if (gameOn === false) {
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }

  //FUNCTION FOR PLAYER TURN
  function winCondition(turnArray, currentTurn) {
    if (turnArray[10] === currentTurn && turnArray[11] === currentTurn && turnArray[12] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 0,1, and 2 spots)");
    } else if (turnArray[12] === currentTurn && turnArray[14] === currentTurn && turnArray[16] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 2,4, and 6 spots)");
    } else if (turnArray[10] === currentTurn && turnArray[13] === currentTurn && turnArray[16] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (1st row down 0,3, and 6 spots)");
    } else if (turnArray[10] === currentTurn && turnArray[14] === currentTurn && turnArray[18] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (1st row diagonally across 0,4, and 8 spots)");
    } else if (turnArray[11] === currentTurn && turnArray[14] === currentTurn && turnArray[17] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (2nd row down 1,4, and 7 spots)");
    } else if (turnArray[12] === currentTurn && turnArray[15] === currentTurn && turnArray[18] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (3rd row down 2,5, and 8 spots)");
    } else if (turnArray[12] === currentTurn && turnArray[15] === currentTurn && turnArray[18] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (3rd row across 2,4, and 6 spots)");
    } else if (turnArray[13] === currentTurn && turnArray[14] === currentTurn && turnArray[15] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Middle row across 3,4, and 5 spots)");
    } else if (turnArray[16] === currentTurn && turnArray[17] === currentTurn && turnArray[18] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Bottom row across 6,7, and 8 spots)");
    } else {
      gameOn = false;
    }
  }

  //FUNCTION FOR COMPUTERS TURN
  function computerTurn() {
    var taken = false;
    while (taken === false && count !== 15) {
      var computersMove = ((Math.random() * 10)+10).toFixed();
      var move = $("#" + computersMove).text();
      if (move === '#') {
        $('#' + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }

  $(".ttttic").click(function() {
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });

  $("#tttturnX").click(function() {
    reset();
    turn = 'X';
    computersTurn = 'O';
    $("#tttturnO").removeClass("btn-primary");
    $("#tttturnX").addClass("btn-primary");

  });
  $("#tttturnO").click(function() {
    reset();
    turn = "O";
    computersTurn = 'X';
    $("#tttturnX").removeClass("btn-primary");
    $("#tttturnO").addClass("btn-primary");
    $(".ttttic").text("#");
  });

  function reset() {
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".ttttic").text("#");
    gameOn = false;
  }
});