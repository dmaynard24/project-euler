// Multiples of 3 and 5

// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function getSum(max) {
  return [...Array(max).keys()].filter(n => n % 3 === 0 || n % 5 === 0).reduce((acc, n) => acc + n);
}

test('gets the sum of all multiples of 3 or 5 below 1000 to be 233168', () => {
  expect(getSum(1000)).toBe(233168);
});
