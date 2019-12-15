const getTotientPermutation = require('./question-070');

test('gets the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum to be 8319823', () => {
  expect(getTotientPermutation()).toBe(8319823);
});
