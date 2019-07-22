// Reciprocal cycles

// Problem 26
// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2	= 	0.5
// 1/3	= 	0.(3)
// 1/4	= 	0.25
// 1/5	= 	0.2
// 1/6	= 	0.1(6)
// 1/7	= 	0.(142857)
// 1/8	= 	0.125
// 1/9	= 	0.(1)
// 1/10	= 	0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

const Decimal = require('decimal.js');

function getDenominator() {
  let limit = 999,
    denominator,
    largestCycleLength = 0;

  // set the precision and rounding of the default Decimal constructor
  Decimal.set({ precision: limit * 2, rounding: 1 });

  let primes = getPrimes(limit);

  for (let i = primes.length - 1; i >= 0; i--) {
    if (largestCycleLength > i) {
      break;
    }

    if (primes[i]) {
      let quotient = Decimal(1)
          .div(i)
          .toString(),
        quotientDecimal = quotient.substring(quotient.indexOf('.') + 1),
        maxCycleLength = Math.floor(quotientDecimal.length / 2),
        cycleLength = getCycleLength(quotientDecimal, maxCycleLength);

      if (cycleLength >= largestCycleLength) {
        denominator = i;
        largestCycleLength = cycleLength;
      }
    }
  }

  return denominator;
}

function getCycleLength(entireValue, maxCycleLength) {
  for (let i = 0; i <= maxCycleLength; i++) {
    for (let length = 1; length <= maxCycleLength; length++) {
      let set = entireValue.substring(i, length),
        nextIndex = entireValue.indexOf(set, i + length);
      if (nextIndex > -1) {
        let set = entireValue.substring(i, nextIndex),
          setCount = Math.floor((entireValue.length - i) / set.length) - 1,
          isCycle = false;

        for (let j = 0; j < setCount; j++) {
          let nextSetIndex = nextIndex + j * set.length,
            nextSet = entireValue.substring(
              nextSetIndex,
              nextSetIndex + set.length
            );
          isCycle = set == nextSet;
        }

        if (isCycle) {
          return set.length;
        }
      }
    }
  }

  return 0;
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

test('gets the index of the first term in the Fibonacci sequence to contain 1000 digits to be 983', () => {
  expect(getDenominator()).toBe(983);
});
