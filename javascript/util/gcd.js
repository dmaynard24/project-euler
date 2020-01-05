// gets greatest common divisor of two numbers
function getGcd(a, b) {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
}

module.exports = getGcd;
