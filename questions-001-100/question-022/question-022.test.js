const getNamesScoresSum = require('./question-022');

test('gets the total of all the name scores in the set to be 871198282', () => {
  expect(getNamesScoresSum()).toBe(871198282);
});
