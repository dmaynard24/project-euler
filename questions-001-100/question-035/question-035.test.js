// Circular primes

// Problem 35
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

const primal = require('../../util/primal');

function getCircularPrimeCount(limit) {
  let primes = primal.getPrimes(limit - 1),
    count = 1;

  for (let i = 3; i < limit; i += 2) {
    if (primal.isPrime(i, primes)) {
      let digits = getDigits(i);

      if (digits.length == 1) {
        count++;
      } else {
        let evenDigit = digits.find(digit => digit % 2 == 0);

        if (!evenDigit) {
          let allPrime = true,
            length = digits.length;
          for (let j = 1; j < length; j++) {
            let rotation = 0;
            for (let k = 0; k < length; k++) {
              rotation *= 10;
              rotation += digits[(j + k) % length];
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
    }
  }

  return count;
}

// getDigits takes an int value, returns array of ints
function getDigits(val) {
  if (val < 10) {
    return [val];
  }

  let digits = [];

  while (val > 0) {
    digits.push(val % 10);
    val = Math.floor(val / 10);
  }

  return digits.reverse();
}

// getRotations takes an int value, requires getDigits
function getRotations(num) {
  let rotations = [],
    digits = getDigits(num);

  let length = digits.length;
  for (let j = 1; j < length; j++) {
    let rotation = 0;
    for (let k = 0; k < length; k++) {
      rotation *= 10;
      rotation += digits[(j + k) % length];
    }
    rotations.push(rotation);
  }

  return rotations;
}

test('gets the count of circular primes below one hundred to be 13', () => {
  expect(getCircularPrimeCount(100)).toBe(13);
});

test('gets the count of circular primes below one million to be 55', () => {
  expect(getCircularPrimeCount(1000000)).toBe(55);
});
