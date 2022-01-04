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

  if (playerWonsAllPoints(m_score1) || playerWonsAllPoints(m_score2)) {
    var minusResult = m_score1 - m_score2;

    if (minusResult === 1) {
      return 'Advantage player1';
    }

    if (minusResult === -1) {
      return 'Advantage player2';
    }

    if (minusResult >= 2) {
      return 'Win for player1';
    }

    return 'Win for player2';
  }

  var score = '';

  for (var i = 0; i <= 1; i++) {
    var tempScore = 0;

    if (i === 0) {
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
