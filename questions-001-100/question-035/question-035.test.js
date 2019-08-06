// Circular primes

// Problem 35
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

function getCircularPrimeCount(limit) {
  let primes = getPrimes(limit - 1),
    count = 0;

  primes.forEach((prime, i) => {
    if (prime) {
      let digits = getDigits(i);

      if (digits.length == 1) {
        count++;
      } else {
        let evenDigit = digits.find(digit => digit % 2 == 0);

        if (!evenDigit) {
          let allPrime = true;
          for (let i = 0; i < digits.length - 1; i++) {
            digits = [...digits.slice(1), digits[0]];
            let digitRotation = digits.join('');
            allPrime = primes[digitRotation];
            if (!allPrime) {
              break;
            }
          }

          if (allPrime) {
            count++;
          }
        }
      }
    }
  });

  return count;
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

// getDigits takes an int value, returns array of ints
function getDigits(val) {
  let digits = [];

  while (val > 0) {
    digits.push(val % 10);
    val = Math.floor(val / 10);
  }

  return digits.reverse();
}

test('gets the count of circular primes below one hundred to be 13', () => {
  expect(getCircularPrimeCount(100)).toBe(13);
});

test('gets the count of circular primes below one million to be 55', () => {
  expect(getCircularPrimeCount(1000000)).toBe(55);
});
