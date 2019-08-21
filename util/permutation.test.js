const isPermutation = require('./permutation');

test('expects that 13425 is a permutation of 15243', () => {
  expect(isPermutation(13425, 15243)).toBe(true);
});

test('expects that 13425 is not a permutation of 16243', () => {
  expect(isPermutation(13425, 16243)).toBe(false);
});
