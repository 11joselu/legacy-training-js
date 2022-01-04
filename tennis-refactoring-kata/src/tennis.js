'use strict';

function getScore(m_score1, m_score2) {
  if (isDeuce(m_score1, m_score2)) {
    return 'Deuce';
  }

  if (playersHasSamePoints(m_score1, m_score2)) {
    const score = getScoreByPoints(m_score1);

    return score + '-All';
  }

  if (anyPlayeScoreAllPoint(m_score1, m_score2)) {
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

  return getScoreByPoints(m_score1) + '-' + getScoreByPoints(m_score2);
}

function isDeuce(m_score1, m_score2) {
  return playersHasSamePoints(m_score1, m_score2) && m_score1 >= 3;
}

function getScoreByPoints(score) {
  var scores = {
    0: 'Love',
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty',
  };

  return scores[score];
}

function playersHasSamePoints(player1Score, player2Score) {
  return player1Score === player2Score;
}

function anyPlayeScoreAllPoint(m_score1, m_score2) {
  return playerScoreAllPoints(m_score1) || playerScoreAllPoints(m_score2);
}

function playerScoreAllPoints(score) {
  return score >= 4;
}

module.exports = getScore;
