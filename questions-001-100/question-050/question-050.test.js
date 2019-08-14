// Consecutive prime sum

// Problem 50
// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.

// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the most consecutive primes?

function getSumOfConsecutivePrimes(limit) {
  let primes = getPrimes(limit),
    largestConsecutiveCount = 0,
    largestSum = 0;

  for (let i = 2; i < limit; i++) {
    let consecutiveCount = 0,
      sum = 0;

    if (isPrime(i, primes)) {
      consecutiveCount++;
      sum += i;

      let j = i + 1;
      while (sum < limit && j < primes.length) {
        if (isPrime(j, primes)) {
          consecutiveCount++;
          sum += j;

          if (isPrime(sum, primes) && consecutiveCount > largestConsecutiveCount) {
            largestConsecutiveCount = consecutiveCount;
            largestSum = sum;
          }
        }

        j++;
      }
    }
  }

  return largestSum;
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

test('gets the prime, below one-million, that can be written as the sum of the most consecutive primes to be 997651', () => {
  expect(getSumOfConsecutivePrimes(1000000)).toBe(997651);
});
