const getTotientMaximum = require('./question-069');

test('expects the value of n ≤ 10 for which n/φ(n) is a maximum to be 6', () => {
  expect(getTotientMaximum(10)).toBe(6);
});

test('expects the value of n ≤ 1,000,000 for which n/φ(n) is a maximum to be 510,510', () => {
  expect(getTotientMaximum(1000000)).toBe(510510);
});
