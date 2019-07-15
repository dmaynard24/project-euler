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

function getFirstTriangleWithDivisors(divisors) {
  let i = 1,
    triangle = 1,
    primes = getPrimes(25);

  while (getDivisorCount(triangle) < divisors) {
    i++;
    triangle += i;
  }

  function getDivisorCount(num) {
    let divisorCount = 1;

    for (let i = 2; i < primes.length; i++) {
      if (i > num / 2) {
        break;
      }
      if (primes[i]) {
        if (num % i == 0) {
          let exponent = 0;
          while (num % i == 0) {
            exponent++;
            num /= i;
          }
          divisorCount *= exponent + 1;
        }
      }
    }

    if (num > 1) {
      divisorCount *= 2;
    }

    return divisorCount;
  }

  return triangle;
}

// primes using Sieve of Eratosthenes
function getPrimes(limit) {
  let primes = Array(limit + 1).fill(true);

  primes[0] = false;
  primes[1] = false;

  let step = 2;
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (primes[i]) {
      step = i;
      for (let j = step * step; j <= limit; j += step) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

test('gets the value of the first triangle number to have over five hundred divisors to be 76576500', () => {
  expect(getFirstTriangleWithDivisors(500)).toBe(76576500);
});
