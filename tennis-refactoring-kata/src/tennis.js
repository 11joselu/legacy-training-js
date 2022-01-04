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

  var scores = {
    0: 'Love',
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty',
  };
  var score = scores[m_score1];

  score += '-';
  score += scores[m_score2];

  return score;
}

function playersHasSamePoints(player1Score, player2Score) {
  return player1Score === player2Score;
}

function playerWonsAllPoints(score) {
  return score >= 4;
}

module.exports = getScore;
