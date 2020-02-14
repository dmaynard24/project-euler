const permutation = require(`./permutation`);

test(`expects that 1342523119877 is a permutation of 7978152432311`, () => {
  expect(permutation.isPermutation(1342523119877, 7978152432311)).toBe(true);
});

test(`expects that 134251 is not a permutation of 162431`, () => {
  expect(permutation.isPermutation(134251, 162431)).toBe(false);
});
