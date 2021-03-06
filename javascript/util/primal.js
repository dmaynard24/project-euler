// primes using Sieve of Eratosthenes (storing only odds)
function getPrimes(limit) {
  const oddsLimit = Math.floor(limit / 2);
  const primes = Array(oddsLimit).fill(true);

  primes[0] = false;

  for (let i = 1; i <= Math.sqrt(limit); i++) {
    const n = 2 * i + 1;
    if (primes[i]) {
      const step = n;
      for (let j = step === 3 ? i + step : i + step * 2; j <= oddsLimit; j += step) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

// get prime numbers by passing in the sieve
function getPrimeNumbers(primes) {
  return primes.reduce(
    (a, c, i) => {
      if (c) {
        a.push(2 * i + 1);
      }
      return a;
    },
    [2],
  );
}

function isPrime(num, primes) {
  if (primes && primes.length && primes.length >= num) {
    if (num % 2 === 0) {
      return num === 2;
    }

    return primes[(num - 1) / 2];
  }

  // primes (sieve) wasn't passed as an argument, naive check if n is prime
  if (num < 1) {
    return true;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

function getPrimeFactors(num, primes) {
  if (isPrime(num, primes)) {
    return [];
  }

  const primeFactors = [];
  if (num % 2 === 0) {
    const baseExp = {
      base: 2,
      exp: 0,
    };
    while (num % 2 === 0) {
      baseExp.exp++;
      num /= 2;
    }
    primeFactors.push(baseExp);
  }

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num < i) {
      break;
    }
    if (isPrime(i, primes)) {
      if (num % i === 0) {
        const baseExp = {
          base: i,
          exp: 0,
        };
        while (num % i === 0) {
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
      exp: 1,
    });
  }

  return primeFactors;
}

// sieve factor counts
function getPrimeFactorCounts(limit) {
  const primeFactorCounts = Array(limit + 1).fill(0);
  primeFactorCounts[1] = 1;

  for (let i = 2; i < primeFactorCounts.length; i++) {
    if (primeFactorCounts[i] !== 0) {
      continue;
    }

    const step = i;
    for (let j = i; j < primeFactorCounts.length; j += step) {
      primeFactorCounts[j]++;
    }
  }

  return primeFactorCounts;
}

module.exports = {
  getPrimes,
  getPrimeNumbers,
  isPrime,
  getPrimeFactors,
  getPrimeFactorCounts,
};
