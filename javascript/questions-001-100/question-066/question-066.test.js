const getDiophantineD = require('./question-066');

test('gets the value of D ≤ 1,000 in minimal solutions of x for which the largest value of x is obtained to be 661', () => {
  expect(getDiophantineD(1000)).toBe(661);
});
