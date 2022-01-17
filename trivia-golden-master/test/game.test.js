const { readFileSync } = require('fs');
let Game = require('../src/game');

let content = [];
let numberOfCalls = 0;

describe('Game', () => {
  const oldMathRandom = Math.random;

  beforeEach(() => {
    Game.log = saveGameOutput;
    Math.random = mockRandom;
  });

  afterEach(() => {
    Math.random = oldMathRandom;
  });

  it('Given two players. Should generate the correct game result', () => {
    const expectedResult = readFileSync('./test/expected_output.txt', 'utf8')
      .split('\n')
      .filter(Boolean);

    require('../src/game_runner');

    expect(content).toEqual(expectedResult);
  });
});

function saveGameOutput(output) {
  content.push(output);
}

function mockRandom() {
  const MINIMUM_OF_CALLS_TO_GENERATE_A_WINNER = 7;

  numberOfCalls++;

  if (numberOfCalls === MINIMUM_OF_CALLS_TO_GENERATE_A_WINNER) {
    return 0.7;
  }

  return 0.2;
}
