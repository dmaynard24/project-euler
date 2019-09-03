// Prime pair sets

// Problem 60
// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

const primal = require('../../util/primal'),
  digits = require('../../util/digits');

function getLowestPrimeSum(count) {
  let nonPrimePerms = [],
    sumLimit = Infinity,
    initialLimit = 10000,
    primes = primal.getPrimes(initialLimit);

  function getSets(set) {
    let sets = [];

    let setSum = set.length ? set.reduce((a, c) => a + c) : 0;
    if (setSum < sumLimit) {
      let termLimit = sumLimit != Infinity ? sumLimit - set[set.length - 1] * (count - set.length) : initialLimit;
      for (let i = set.length ? set[set.length - 1] + 1 : 2; i < termLimit; i++) {
        if (primal.isPrime(i, primes)) {
          // only evaluate new permutations
          let newTermDigits = digits.getDigits(i),
            allPrime = true;
          for (let j = 0; j < set.length; j++) {
            let termDigits = digits.getDigits(set[j]),
              prepended = i;
            termDigits.forEach(digit => {
              prepended *= 10;
              prepended += digit;
            });

            if (nonPrimePerms[prepended] || !primal.isPrime(prepended)) {
              nonPrimePerms[prepended] = true;
              allPrime = false;
              break;
            }

            let appended = set[j];
            newTermDigits.forEach(digit => {
              appended *= 10;
              appended += digit;
            });

            if (nonPrimePerms[appended] || !primal.isPrime(appended)) {
              nonPrimePerms[appended] = true;
              allPrime = false;
              break;
            }
          }

          if (allPrime) {
            let newSet = set.concat(i);

            if (newSet.length < count) {
              sets = sets.concat(getSets(newSet));
            } else {
              sets.push(newSet);

              let setSum = newSet.reduce((a, c) => a + c);
              if (setSum < sumLimit) {
                sumLimit = setSum;
              }
            }
          }
        }
      }
    }

    return sets;
  }

  let sets = getSets([]);

  if (sets.length) {
    let smallest = sets[0].reduce((a, c) => a + c);
    for (let i = 1; i < sets.length; i++) {
      let sum = sets[i].reduce((a, c) => a + c);
      if (sum < smallest) {
        smallest = sum;
      }
    }
    return smallest;
  }

  return 0;
}

module.exports = getLowestPrimeSum;
