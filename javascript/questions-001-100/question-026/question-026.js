// Reciprocal cycles

// Problem 26
// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2  =  0.5
// 1/3  =  0.(3)
// 1/4  =  0.25
// 1/5  =  0.2
// 1/6  =  0.1(6)
// 1/7  =  0.(142857)
// 1/8  =  0.125
// 1/9  =  0.(1)
// 1/10 =  0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

const primal = require(`../../util/primal`);
const Decimal = require(`decimal.js`);

function getCycleLength(entireValue, maxCycleLength) {
  for (let i = 0; i <= maxCycleLength; i++) {
    for (let length = 1; length <= maxCycleLength; length++) {
      let set = entireValue.substring(i, length);
      const nextIndex = entireValue.indexOf(set, i + length);
      if (nextIndex > -1) {
        set = entireValue.substring(i, nextIndex);
        const setCount = Math.floor((entireValue.length - i) / set.length) - 1;
        let isCycle = false;

        for (let j = 0; j < setCount; j++) {
          const nextSetIndex = nextIndex + j * set.length;
          const nextSet = entireValue.substring(nextSetIndex, nextSetIndex + set.length);
          isCycle = set === nextSet;
        }

        if (isCycle) {
          return set.length;
        }
      }
    }
  }

  return 0;
}

function getDenominatorWithLongestCycle(limit) {
  let denominator = 0;
  let largestCycleLength = 0;

  // set the precision and rounding of the default Decimal constructor
  Decimal.set({ precision: limit * 2, rounding: 1 });

  const primes = primal.getPrimes(limit - 1);
  const primeNums = primal.getPrimeNumbers(primes);

  primeNums.forEach((primeNum) => {
    const quotient = Decimal(1)
      .div(primeNum)
      .toString();
    const quotientDecimal = quotient.substring(quotient.indexOf(`.`) + 1);
    const maxCycleLength = Math.floor(quotientDecimal.length / 2);
    const cycleLength = getCycleLength(quotientDecimal, maxCycleLength);

    if (cycleLength >= largestCycleLength) {
      denominator = primeNum;
      largestCycleLength = cycleLength;
    }
  });

  return denominator;
}

module.exports = getDenominatorWithLongestCycle;
