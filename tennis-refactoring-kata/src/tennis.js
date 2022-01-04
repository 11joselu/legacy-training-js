'use strict';

var scores = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty',
};

function getScore(m_score1, m_score2) {
  if (isDeuce(m_score1, m_score2)) {
    return 'Deuce';
  }

  if (playersHasSamePoints(m_score1, m_score2)) {
    const score = scores[m_score1];

    return score + '-All';
  }

  if (playerScoreAllPoints(m_score1) || playerScoreAllPoints(m_score2)) {
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

  var score = scores[m_score1];

  score += '-';
  score += scores[m_score2];

  return score;
}

function isDeuce(m_score1, m_score2) {
  return playersHasSamePoints(m_score1, m_score2) && m_score1 >= 3;
}

function playersHasSamePoints(player1Score, player2Score) {
  return player1Score === player2Score;
}

function playerScoreAllPoints(score) {
  return score >= 4;
}

module.exports = getScore;
