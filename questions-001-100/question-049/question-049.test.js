// Prime permutations

// Problem 49
// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating the three terms in this sequence?

function getPrimePermutationTerms(digits) {
  let limit = Math.pow(10, digits) - 1,
    primes = getPrimes(limit),
    terms = [];

  // 1489 is the next prime
  for (let i = 1489; i < limit; i += 2) {
    if (isPrime(i, primes)) {
      let maxAddend = Math.floor((limit - i) / 2);

      for (let addend = 1; addend <= maxAddend; addend++) {
        terms = [i];
        for (let j = 1; j <= 2; j++) {
          let nextTerm = i + addend * j;
          if (isPrime(nextTerm, primes) && isPermutation(i, nextTerm)) {
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

function isPermutation(val, testVal) {
  let valDigits = getDigits(val),
    testValDigits = getDigits(testVal);

  if (valDigits.length == testValDigits.length) {
    valDigits.sort();
    testValDigits.sort();

    let valConcat = 0,
      testValConcat = 0;
    for (let i = 0; i < valDigits.length; i++) {
      valConcat *= 10;
      valConcat += valDigits[i];
      testValConcat *= 10;
      testValConcat += testValDigits[i];
    }

    return valConcat == testValConcat;
  }

  return false;
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

test('gets the 12-digit number formed by concatenating the three terms in this arithmetic sequence to be 296962999629', () => {
  expect(getPrimePermutationTerms(4)).toBe('296962999629');
});
