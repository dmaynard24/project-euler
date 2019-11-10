const getGcd = require('./gcd');

function areCoprime(a, b) {
  return getGcd(a, b) == 1;
}

module.exports = areCoprime;
