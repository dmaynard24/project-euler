// Circular primes

// Problem 35
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

const primal = require(`../../util/primal`);
const digits = require(`../../util/digits`);

function getCircularPrimeCount(limit) {
  const primes = primal.getPrimes(limit - 1);
  const primeNums = primal.getPrimeNumbers(primes);
  let count = 0;

  for (let i = 0; i < primeNums.length; i++) {
    const numDigits = digits.getDigits(primeNums[i]);

    if (numDigits.length === 1) {
      count++;
    } else {
      const hasEvenDigit = numDigits.find((digit) => digit % 2 === 0);

      if (!hasEvenDigit) {
        let areAllPrime = true;
        const { length } = numDigits;
        for (let j = 1; j < length; j++) {
          let rotation = 0;
          for (let k = 0; k < length; k++) {
            rotation *= 10;
            rotation += numDigits[(j + k) % length];
          }
          areAllPrime = primal.isPrime(rotation, primes);
          if (!areAllPrime) {
            break;
          }
        }

        if (areAllPrime) {
          count++;
        }
      }
    }
  }

  return count;
}

module.exports = getCircularPrimeCount;
