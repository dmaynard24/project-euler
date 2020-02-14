// Self powers

// Problem 48
// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

const bigInt = require(`big-integer`);

// solution using bigInt (more readable)
function getLastTenDigitsWithBigInt() {
  const sumString = [...Array(1000).keys()]
    .slice(1)
    .reduce((a, c) => {
      a = a.add(bigInt(c).pow(c));
      return a;
    }, bigInt(0))
    .toString();

  return sumString.slice(sumString.length - 10);
}

// solution without the need for bigInt
function getLastTenDigits(max) {
  const mod = 10000000000;
  let sum = 0;

  for (let i = 1; i < max; i++) {
    if (i % 10 === 0) {
      continue;
    }

    let addend = i;
    for (let j = 1; j < i; j++) {
      addend *= i;
      if (addend > mod) {
        addend %= mod;
      }
    }
    sum += addend;
  }

  if (sum >= mod) {
    return sum % mod;
  }

  return sum;
}

module.exports = getLastTenDigits;
