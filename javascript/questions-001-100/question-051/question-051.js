// Prime digit replacements

// Problem 51
// By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

// By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

// Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

const primal = require(`../../util/primal`);
const digits = require(`../../util/digits`);
const combination = require(`../../util/combination`);

function getAllCombos(length) {
  const range = [...Array(length).keys()];
  return range.slice(1).reduce((a, c) => {
    a = a.concat(combination.getCombos(range, c));
    return a;
  }, []);
}

function getSmallestPrime(count) {
  const limit = 999999;
  const primes = primal.getPrimes(limit);
  const combos = {
    5: getAllCombos(5),
    6: getAllCombos(6),
  };

  for (let i = 56003; i <= limit; i += 2) {
    if (primal.isPrime(i, primes)) {
      const originalDigits = digits.getDigits(i);

      for (let replaceCount = 1; replaceCount < originalDigits.length; replaceCount++) {
        const digitReplaceCombos = combos[originalDigits.length];

        for (let j = 0; j < digitReplaceCombos.length; j++) {
          const combo = digitReplaceCombos[j];
          const otherPrimes = [];
          const isReplacingLastDigit = combo[combo.length - 1] === originalDigits.length - 1;
          const minDigit = combo[0] === 0 || isReplacingLastDigit ? 1 : 0;
          const step = isReplacingLastDigit ? 2 : 1;

          for (let k = minDigit; k < 10; k += step) {
            if (isReplacingLastDigit && k === 5) {
              continue;
            }

            const newDigits = [...originalDigits];
            combo.forEach((digit) => {
              newDigits.splice(digit, 1, k);
            });

            const newDigitsInt = digits.getIntFromDigits(newDigits);
            if (primal.isPrime(newDigitsInt, primes)) {
              otherPrimes.push(newDigits);

              if (otherPrimes.length === count) {
                return digits.getIntFromDigits(otherPrimes[0]);
              }
            }

            if (10 - k < count - otherPrimes.length) {
              break;
            }
          }
        }
      }
    }
  }

  return 0;
}

module.exports = getSmallestPrime;
