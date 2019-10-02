// Prime digit replacements

// Problem 51
// By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

// By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

// Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

const primal = require('../../util/primal'),
  digits = require('../../util/digits');

function getSmallestPrime(count) {
  let limit = 999999,
    primes = primal.getPrimes(limit),
    combos = {
      5: getAllCombos(5),
      6: getAllCombos(6)
    };

  for (let i = 56003; i <= limit; i += 2) {
    if (primal.isPrime(i, primes)) {
      let originalDigits = digits.getDigits(i);
      for (let replaceCount = 1; replaceCount < originalDigits.length; replaceCount++) {
        let digitReplaceCombos = combos[originalDigits.length];
        for (let j = 0; j < digitReplaceCombos.length; j++) {
          let combo = digitReplaceCombos[j],
            otherPrimes = [];

          let minDigit = combo.indexOf(0) > -1 ? 1 : 0;
          for (let k = minDigit; k < 10; k++) {
            let newDigits = [...originalDigits];
            combo.forEach(digit => {
              newDigits.splice(digit, 1, k);
            });

            let newDigitsInt = digits.getIntFromDigits(newDigits);
            if (primal.isPrime(newDigitsInt, primes)) {
              otherPrimes.push(newDigits);

              if (otherPrimes.length == count) {
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
}

function getCombos(arr, pick) {
  if (!pick) {
    return [[]];
  }
  if (!arr.length) {
    return [];
  }

  let first = arr[0],
    rest = arr.slice(1);

  return getCombos(rest, pick - 1)
    .map(combo => {
      return [first].concat(combo);
    })
    .concat(getCombos(rest, pick));
}

function getAllCombos(length) {
  let range = [...Array(length).keys()];
  return range.slice(1).reduce((a, c) => {
    a = a.concat(getCombos(range, c));
    return a;
  }, []);
}

module.exports = getSmallestPrime;
