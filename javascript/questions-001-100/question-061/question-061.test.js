const getOrderedSet = require('./question-061');

test('gets the sum of the only ordered set of six cyclic 4-digit numbers for which each polygonal type: triangle, square, pentagonal, hexagonal, heptagonal, and octagonal, is represented by a different number in the set to be 28,684', () => {
  expect(getOrderedSet()).toBe(28684);
});
