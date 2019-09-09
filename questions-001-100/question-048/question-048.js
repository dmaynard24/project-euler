// Self powers

// Problem 48
// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

const bigInt = require('big-integer');

function getLastTenDigits() {
  let limit = 999,
    sum = bigInt(0);

  for (let i = 1; i <= limit; i++) {
    let string = bigInt(i)
      .pow(i)
      .toString();
    sum = string.length > 10 ? sum.add(parseInt(string.slice(string.length - 10), 10)) : sum.add(parseInt(string, 10));
  }

  let sumStr = sum.toString();
  return sumStr.length > 10 ? sumStr.slice(sumStr.length - 10) : sumStr;
}

module.exports = getLastTenDigits;
