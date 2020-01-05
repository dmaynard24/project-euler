const getUniquePerimeters = require('./question-075');

test('given that L is the length of the wire, gets the count of values of L ≤ 1,500,000 where exactly one integer sided right angle triangle is formed to be 161,667', () => {
  expect(getUniquePerimeters(1500000)).toBe(161667);
});
