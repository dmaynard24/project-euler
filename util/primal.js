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
  if (primes && primes.length) {
    if (n % 2 == 0) {
      return n == 2;
    }

    return primes[(n - 1) / 2];
  }

  // primes (sieve) wasn't passed as an argument, naive check if n is prime
  if (n < 1) {
    return true;
  } else if (n == 2 || n == 3) {
    return true;
  } else if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }

  return true;
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

module.exports = { getPrimes, isPrime, getPrimeFactors };
