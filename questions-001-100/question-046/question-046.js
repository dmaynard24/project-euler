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

  for (let composite = 35; composite < limit; composite += 2) {
    if (!primal.isPrime(composite, primes)) {
      let proof = false;

      for (let prime = 2; prime < composite; prime++) {
        if (proof) {
          break;
        }

        if (primal.isPrime(prime, primes)) {
          for (let k = 1; prime + 2 * (k * k) <= composite; k++) {
            if (prime + 2 * (k * k) == composite) {
              proof = true;
              break;
            }
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

module.exports = getSmallestOddComposite;
