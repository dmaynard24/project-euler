// Smallest multiple

// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function getSmallestMultiple(upper) {
  let nums = [...Array(upper + 1).keys()].splice(1),
    primeFactorCounts = [],
    primes = getPrimes(16000);

  nums.forEach(num => {
    if (isPrime(num, primes)) {
      primeFactorCounts[num] = 1;
    } else {
      let pfs = getPrimeFactors(num, primes);
      pfs.forEach(pf => {
        primeFactorCounts[pf.base] = primeFactorCounts[pf.base] ? Math.max(primeFactorCounts[pf.base], pf.exp) : pf.exp;
      });
    }
  });

  let lcm = Object.keys(primeFactorCounts).reduce((acc, curr) => {
    acc *= Math.pow(curr, primeFactorCounts[curr]);
    return acc;
  }, 1);

  return lcm;
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

function getPrimeFactors(num, primes) {
  let primeFactors = [];

  if (isPrime(num, primes)) {
    return primeFactors;
  }

  if (num % 2 == 0) {
    let baseExp = {
      base: 2,
      exp: 0
    };
    while (num % 2 == 0) {
      baseExp.exp++;
      num /= 2;
    }
    primeFactors.push(baseExp);
  }

  let sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num < i) {
      break;
    }
    if (isPrime(i, primes)) {
      if (num % i == 0) {
        let baseExp = {
          base: i,
          exp: 0
        };
        while (num % i == 0) {
          baseExp.exp++;
          num /= i;
        }
        primeFactors.push(baseExp);
      }
    }
  }

  if (num > 2) {
    primeFactors.push({
      base: num,
      exp: 1
    });
  }

  return primeFactors;
}

test('gets the smallest positive number that is evenly divisible by 1 through 10 to be 2520', () => {
  expect(getSmallestMultiple(10)).toBe(2520);
});

test('gets the smallest positive number that is evenly divisible by 1 through 20 to be 232792560', () => {
  expect(getSmallestMultiple(20)).toBe(232792560);
});
