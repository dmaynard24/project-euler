// Largest prime factor

// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const primal = require('../../util/primal');

function getLargestPrimeFactor(num) {
	let primes = primal.getPrimes(10000);
	return primal.getPrimeFactors(num, primes).pop().base;
}

module.exports = getLargestPrimeFactor;
