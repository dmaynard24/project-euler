// Circular primes

// Problem 35
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

const primal = require('../../util/primal'),
  digits = require('../../util/digits');

function getCircularPrimeCount(limit) {
  let primes = primal.getPrimes(limit - 1),
    primeNums = primal.getPrimeNumbers(primes),
    count = 0;

  primeNums.forEach(num => {
    let numDigits = digits.getDigits(num);

    if (numDigits.length == 1) {
      count++;
    } else {
      let evenDigit = numDigits.find(digit => digit % 2 == 0);

      if (!evenDigit) {
        let allPrime = true,
          length = numDigits.length;
        for (let j = 1; j < length; j++) {
          let rotation = 0;
          for (let k = 0; k < length; k++) {
            rotation *= 10;
            rotation += numDigits[(j + k) % length];
          }
          allPrime = primal.isPrime(rotation, primes);
          if (!allPrime) {
            break;
          }
        }

        if (allPrime) {
          count++;
        }
      }
    }
  });

  return count;
}

module.exports = getCircularPrimeCount;
