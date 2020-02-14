// Prime pair sets

// Problem 60
// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

const primal = require(`../../util/primal`);
const digits = require(`../../util/digits`);

function getLowestPrimeSum(count) {
  const nonPrimePerms = new Map();
  let sumLimit = Infinity;
  const initialLimit = 10000;
  const primes = primal.getPrimes(initialLimit);

  function getSets(set) {
    let sets = [];

    const setSum = set.length ? set.reduce((a, c) => a + c) : 0;
    if (setSum < sumLimit) {
      const termLimit = sumLimit !== Infinity ? sumLimit - set[set.length - 1] * (count - set.length) : initialLimit;
      for (let i = set.length ? set[set.length - 1] + 1 : 2; i < termLimit; i++) {
        if (primal.isPrime(i, primes)) {
          // only evaluate new permutations
          const newTermDigits = digits.getDigits(i);
          let areAllPrime = true;
          for (let j = 0; j < set.length; j++) {
            const termDigits = digits.getDigits(set[j]);
            let prepended = i;
            termDigits.forEach((digit) => {
              prepended *= 10;
              prepended += digit;
            });

            if (nonPrimePerms.get(prepended) === true || !primal.isPrime(prepended)) {
              nonPrimePerms.set(prepended, true);
              areAllPrime = false;
              break;
            }

            let appended = set[j];
            newTermDigits.forEach((digit) => {
              appended *= 10;
              appended += digit;
            });

            if (nonPrimePerms.get(appended) === true || !primal.isPrime(appended)) {
              nonPrimePerms.set(appended, true);
              areAllPrime = false;
              break;
            }
          }

          if (areAllPrime) {
            const newSet = set.concat(i);

            if (newSet.length < count) {
              sets = sets.concat(getSets(newSet));
            } else {
              sets.push(newSet);

              const setSum = newSet.reduce((a, c) => a + c);
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

  const sets = getSets([]);

  if (sets.length) {
    let smallest = sets[0].reduce((a, c) => a + c);
    for (let i = 1; i < sets.length; i++) {
      const sum = sets[i].reduce((a, c) => a + c);
      if (sum < smallest) {
        smallest = sum;
      }
    }
    return smallest;
  }

  return `Unable to find a set of ${count} primes for which any two primes concatenate to produce another prime.`;
}

module.exports = getLowestPrimeSum;
