// Prime permutations

// Problem 49
// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating the three terms in this sequence?

const primal = require('../../util/primal'),
  isPermutation = require('../../util/permutation');

function getPrimePermutationTerms(digits) {
  let limit = Math.pow(10, digits) - 1,
    primes = primal.getPrimes(limit),
    terms = [];

  // 1489 is the next prime
  for (let i = 1489; i < limit; i += 2) {
    if (primal.isPrime(i, primes)) {
      let maxAddend = Math.floor((limit - i) / 2);

      for (let addend = 1; addend <= maxAddend; addend++) {
        terms = [i];
        for (let j = 1; j <= 2; j++) {
          let nextTerm = i + addend * j;
          if (primal.isPrime(nextTerm, primes) && isPermutation(i, nextTerm)) {
            terms.push(nextTerm);
          } else {
            terms = [i];
            break;
          }
        }

        if (terms.length == 3) {
          return terms.join('');
        }
      }
    }
  }
}

module.exports = getPrimePermutationTerms;
