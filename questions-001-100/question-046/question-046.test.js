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

function getSmallestOddComposite() {
  let limit = 6000,
    primes = getPrimes(limit);

  for (let i = 35; i < limit; i += 2) {
    if (!isPrime(i, primes)) {
      let composite = i,
        proof = false;

      for (let j = 2; j < i; j++) {
        if (isPrime(j, primes)) {
          let prime = j,
            k = 1;
          while (prime + getDoubleSquare(k) <= composite && !proof) {
            if (prime + getDoubleSquare(k) == composite) {
              proof = true;
            }

            k++;
          }

          if (proof) {
            break;
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

function getDoubleSquare(num) {
  return 2 * Math.pow(num, 2);
}

// primes using Sieve of Eratosthenes (storing only odds)
function getPrimes(limit) {
  let oddsOnlyLimit = Math.floor(limit / 2) + 1,
    primes = Array(oddsOnlyLimit).fill(true);

  primes[0] = false;

  for (let i = 1; i <= Math.sqrt(limit); i++) {
    let n = 2 * i + 1;
    if (primes[i]) {
      let step = n;
      for (let j = step == 3 ? i + step : i + step * 2; j <= oddsOnlyLimit; j += step) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

function isPrime(n, primes) {
  if (n % 2 == 0) {
    return n == 2;
  }

  return primes[(n - 1) / 2];
}

test('gets the smallest odd composite that cannot be written as the sum of a prime and twice a square to be 5777', () => {
  expect(getSmallestOddComposite()).toBe(5777);
});
