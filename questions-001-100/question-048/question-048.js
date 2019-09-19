// Self powers

// Problem 48
// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

function getLastTenDigits() {
  let mod = Math.pow(10, 10);

  let sum = [...Array(1000).keys()].slice(1).reduce((a, c) => {
    return (
      a +
      [...Array(c - 1).keys()].reduce(acc => {
        acc *= c;
        if (acc >= mod) {
          acc %= mod;
        }
        return acc;
      }, c)
    );
  }, 0);

  if (sum >= mod) {
    return sum % mod;
  }

  return sum;
}

module.exports = getLastTenDigits;
