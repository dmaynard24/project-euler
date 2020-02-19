const primal = require(`./primal`);

function phi(val, primes) {
  if (primal.isPrime(val, primes)) {
    return val - 1;
  }

  const primeFactors = primal.getPrimeFactors(val, primes);
  const count = val * primeFactors.reduce((a, c) => a * (1 - 1 / c.base), 1);
  return count;
}

module.exports = phi;
