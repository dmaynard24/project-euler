// Prime digit replacements

// Problem 51
// By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

// By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

// Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

function getSmallestPrime(count) {
  let limit = 999999,
    primes = getPrimes(limit),
    combos = {
      5: getAllCombos(5),
      6: getAllCombos(6)
    };

  for (let i = 56003; i <= limit; i += 2) {
    if (isPrime(i, primes)) {
      let originalDigits = getDigits(i);
      for (let replaceCount = 1; replaceCount < originalDigits.length; replaceCount++) {
        let digitReplaceCombos = combos[originalDigits.length];
        for (let j = 0; j < digitReplaceCombos.length; j++) {
          let combo = digitReplaceCombos[j],
            otherPrimes = [];

          let minDigit = 0;
          if (combo.indexOf(0) > -1) {
            minDigit = 1;
          }

          for (let k = minDigit; k < 10; k++) {
            let newDigits = [...originalDigits];
            combo.forEach(digit => {
              newDigits.splice(digit, 1, k);
            });

            let newDigitsInt = getIntFromDigits(newDigits);
            if (isPrime(newDigitsInt, primes)) {
              otherPrimes.push(newDigits);

              if (otherPrimes.length == count) {
                let concat = 0;
                for (let l = 0; l < otherPrimes[0].length; l++) {
                  concat *= 10;
                  concat += otherPrimes[0][l];
                }
                return concat;
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

  let x = arr[0],
    xs = arr.slice(1);

  return getCombos(xs, pick - 1)
    .map(function(t) {
      return [x].concat(t);
    })
    .concat(getCombos(xs, pick));
}

function getAllCombos(length) {
  let combos = [];

  let range = [...Array(length).keys()];
  for (let j = 1; j < range.length; j++) {
    combos = combos.concat(getCombos(range, j));
  }

  return combos;
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

// getDigits takes an int value, returns array of ints
function getDigits(val) {
  let digits = [];

  while (val > 0) {
    digits.push(val % 10);
    val = Math.floor(val / 10);
  }

  return digits.reverse();
}

// getIntFromDigits takes an array of ints, returns an int
function getIntFromDigits(digits) {
  return digits.reduce((a, c) => {
    a *= 10;
    return (a += c);
  }, 0);
}

test('gets the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family to be 121313', () => {
  expect(getSmallestPrime(8)).toBe(121313);
});
