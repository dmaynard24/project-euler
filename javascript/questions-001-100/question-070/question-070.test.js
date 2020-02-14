const getTotientPermutation = require(`./question-070`);

test(`gets the value of n, 1 < n < 10^5, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum to be 75,841`, () => {
  expect(getTotientPermutation(100000)).toBe(75841);
});

// test('gets the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum to be 8,319,823', () => {
//   expect(getTotientPermutation(10000000)).toBe(8319823);
// });
