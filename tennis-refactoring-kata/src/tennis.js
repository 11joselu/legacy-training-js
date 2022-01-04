'use strict';

function getScore(m_score1, m_score2) {
  if (playersHasSamePoints(m_score1, m_score2)) {
    if (m_score1 === 0) {
      return 'Love-All';
    }

    if (m_score1 === 1) {
      return 'Fifteen-All';
    }

    if (m_score1 === 2) {
      return 'Thirty-All';
    }

    return 'Deuce';
  }

  var score = '';

  if (playerWonsAllPoints(m_score1) || playerWonsAllPoints(m_score2)) {
    var minusResult = m_score1 - m_score2;
    if (minusResult === 1) {
      score = 'Advantage player1';
    } else if (minusResult === -1) {
      score = 'Advantage player2';
    } else if (minusResult >= 2) {
      score = 'Win for player1';
    } else {
      score = 'Win for player2';
    }

    return score;
  }

  for (var i = 1; i < 3; i++) {
    var tempScore = 0;

    if (i === 1) {
      tempScore = m_score1;
    } else {
      score += '-';
      tempScore = m_score2;
    }

    switch (tempScore) {
      case 0:
        score += 'Love';
        break;
      case 1:
        score += 'Fifteen';
        break;
      case 2:
        score += 'Thirty';
        break;
      case 3:
        score += 'Forty';
        break;
    }
  }

  return score;
}

function playersHasSamePoints(player1Score, player2Score) {
  return player1Score === player2Score;
}

function playerWonsAllPoints(score) {
  return score >= 4;
}

module.exports = getScore;
