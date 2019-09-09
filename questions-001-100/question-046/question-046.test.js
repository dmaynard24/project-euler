// Goldbach's other conjecture

// Problem 46
// It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

// 9 = 7 + 2×1^2
// 15 = 7 + 2×2^2
// 21 = 3 + 2×3^2
// 25 = 7 + 2×3^2
// 27 = 19 + 2×2^2
// 33 = 31 + 2×1^2

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

const primal = require('../../util/primal');

function getSmallestOddComposite() {
  let limit = 6000,
    primes = primal.getPrimes(limit);

  for (let i = 35; i < limit; i += 2) {
    if (!primal.isPrime(i, primes)) {
      let composite = i,
        proof = false;

      for (let j = 2; j < i; j++) {
        if (primal.isPrime(j, primes)) {
          let prime = j,
            k = 1;
          while (prime + 2 * Math.pow(k, 2) <= composite && !proof) {
            if (prime + 2 * Math.pow(k, 2) == composite) {
              proof = true;
              break;
            }

            k++;
          }
        }
      }

      if (!proof) {
        return composite;
      }
    }
  }

  return `unable to disprove Goldbach's other conjecture under ${limit}`;
}

test('gets the smallest odd composite that cannot be written as the sum of a prime and twice a square to be 5777', () => {
  expect(getSmallestOddComposite()).toBe(5777);
});
