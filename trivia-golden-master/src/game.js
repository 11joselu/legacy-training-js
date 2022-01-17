exports = typeof window !== 'undefined' && window !== null ? window : global;

function Game() {
  var players = new Array();
  var places = new Array(6);
  var purses = new Array(6);
  var inPenaltyBox = new Array(6);

  var popQuestions = new Array();
  var scienceQuestions = new Array();
  var sportsQuestions = new Array();
  var rockQuestions = new Array();

  var currentPlayer = 0;
  var isGettingOutOfPenaltyBox = false;

  var didPlayerWin = function () {
    return !(purses[currentPlayer] == 6);
  };

  var askQuestion = function () {
    const category = currentCategory();

    if (category == 'Pop') Game.log(popQuestions.shift());
    if (category == 'Science') Game.log(scienceQuestions.shift());
    if (category == 'Sports') Game.log(sportsQuestions.shift());
    if (category == 'Rock') Game.log(rockQuestions.shift());
  };

  var currentCategory = function () {
    const place = places[currentPlayer];

    switch (place) {
      case 0:
      case 4:
      case 8:
        return 'Pop';
      case 1:
      case 5:
      case 9:
        return 'Science';
      case 2:
      case 6:
      case 10:
        return 'Sports';
      default:
        return 'Rock';
    }
  };

  for (var i = 0; i < 50; i++) {
    popQuestions.push(this.createPopQuestion(i));
    scienceQuestions.push(this.createScienceQuestion(i));
    sportsQuestions.push(this.createSportQuestion(i));
    rockQuestions.push(this.createRockQuestion(i));
  }

  this.add = function (playerName) {
    players.push(playerName);

    const playerIndex = this.howManyPlayers() - 1;

    places[playerIndex] = 0;
    purses[playerIndex] = 0;
    inPenaltyBox[playerIndex] = false;

    Game.log(playerName + ' was added');
    Game.log('They are player number ' + players.length);

    return true;
  };

  this.howManyPlayers = function () {
    return players.length;
  };

  this.roll = function (roll) {
    Game.log(players[currentPlayer] + ' is the current player');
    Game.log('They have rolled a ' + roll);

    if (inPenaltyBox[currentPlayer]) {
      if (roll % 2 != 0) {
        isGettingOutOfPenaltyBox = true;

        Game.log(players[currentPlayer] + ' is getting out of the penalty box');
        places[currentPlayer] = places[currentPlayer] + roll;
        if (places[currentPlayer] > 11) {
          places[currentPlayer] = places[currentPlayer] - 12;
        }

        Game.log(
          players[currentPlayer] + "'s new location is " + places[currentPlayer]
        );
        Game.log('The category is ' + currentCategory());
        askQuestion();
      } else {
        Game.log(
          players[currentPlayer] + ' is not getting out of the penalty box'
        );
        isGettingOutOfPenaltyBox = false;
      }
    } else {
      places[currentPlayer] = places[currentPlayer] + roll;
      if (places[currentPlayer] > 11) {
        places[currentPlayer] = places[currentPlayer] - 12;
      }

      Game.log(
        players[currentPlayer] + "'s new location is " + places[currentPlayer]
      );
      Game.log('The category is ' + currentCategory());
      askQuestion();
    }
  };

  this.wasCorrectlyAnswered = function () {
    if (inPenaltyBox[currentPlayer]) {
      if (isGettingOutOfPenaltyBox) {
        Game.log('Answer was correct!!!!');
        purses[currentPlayer] += 1;
        Game.log(
          players[currentPlayer] +
            ' now has ' +
            purses[currentPlayer] +
            ' Gold Coins.'
        );

        var winner = didPlayerWin();
        currentPlayer += 1;
        if (currentPlayer == players.length) currentPlayer = 0;

        return winner;
      } else {
        currentPlayer += 1;
        if (currentPlayer == players.length) currentPlayer = 0;
        return true;
      }
    } else {
      Game.log('Answer was correct!!!!');

      purses[currentPlayer] += 1;
      Game.log(
        players[currentPlayer] +
          ' now has ' +
          purses[currentPlayer] +
          ' Gold Coins.'
      );

      var winner = didPlayerWin();

      currentPlayer += 1;
      if (currentPlayer == players.length) currentPlayer = 0;

      return winner;
    }
  };

  this.wrongAnswer = function () {
    Game.log('Question was incorrectly answered');
    Game.log(players[currentPlayer] + ' was sent to the penalty box');
    inPenaltyBox[currentPlayer] = true;

    currentPlayer += 1;
    if (currentPlayer == players.length) currentPlayer = 0;
    return true;
  };
}

Game.prototype.createPopQuestion = function (index) {
  return 'Pop Question ' + index;
};

Game.prototype.createScienceQuestion = function (index) {
  return 'Science Question ' + index;
};

Game.prototype.createSportQuestion = function (index) {
  return 'Sports Question ' + index;
};

Game.prototype.createRockQuestion = function (index) {
  return 'Rock Question ' + index;
};

Game.prototype.isPlayable = function (howManyPlayers) {
  return howManyPlayers >= 2;
};

Game.log = function (message) {
  console.log(message);
};

module.exports = Game;
