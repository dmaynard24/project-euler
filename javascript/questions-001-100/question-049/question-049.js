// Prime permutations

// Problem 49
// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating the three terms in this sequence?

const primal = require('../../util/primal'),
  permutation = require('../../util/permutation'),
  digits = require('../../util/digits');

function getPrimePermutationTerms() {
  let limit = 9999,
    addend = 3330,
    primes = primal.getPrimes(limit);

  // 1489 is the next prime
  for (let i = 1489; i <= limit - addend * 2; i += 2) {
    if (primal.isPrime(i, primes)) {
      let termsConcat = digits.getDigits(i);
      for (let j = 1; j <= 2; j++) {
        let nextTerm = i + addend * j;
        if (primal.isPrime(nextTerm, primes) && permutation.isPermutation(i, nextTerm)) {
          termsConcat = termsConcat.concat(digits.getDigits(nextTerm));
          if (termsConcat.length == 12) {
            return digits.getIntFromDigits(termsConcat);
          }
        } else {
          break;
        }
      }
    }
  }
}

module.exports = getPrimePermutationTerms;
