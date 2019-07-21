// Sum square difference

// Problem 6
// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function getSumSquareDifference(n) {
  return Math.pow((n * (n + 1)) / 2, 2) - (n * (n + 1) * (2 * n + 1)) / 6;
}

test('gets the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum to be 25164150', () => {
  expect(getSumSquareDifference(100)).toBe(25164150);
});
