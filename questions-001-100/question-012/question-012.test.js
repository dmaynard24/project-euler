// Highly divisible triangular number

// Problem 12
// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?

const primal = require('../../util/primal');

function getFirstTriangleWithDivisors(divisors) {
  let i = 1,
    triangle = 1,
    primes = primal.getPrimes(25);

  while (getDivisorCount(triangle) < divisors) {
    i++;
    triangle += i;
  }

  function getDivisorCount(num) {
    let primeFactors = primal.getPrimeFactors(num, primes),
      divisorCount = primeFactors.reduce((a, c) => (a *= c.exp + 1), 1);

    return divisorCount;
  }

  return triangle;
}

test('gets the value of the first triangle number to have over five hundred divisors to be 76576500', () => {
  expect(getFirstTriangleWithDivisors(500)).toBe(76576500);
});
