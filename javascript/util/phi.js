const primal = require('./primal');

function phi(val, primes) {
	if (primal.isPrime(val, primes)) {
		return val - 1;
	}

	let primeFactors = primal.getPrimeFactors(val, primes),
		count = val * primeFactors.reduce((a, c) => a * (1 - 1 / c.base), 1);
	return count;
}

module.exports = phi;
