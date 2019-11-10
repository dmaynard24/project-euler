function getProperDivisors(num) {
  let divisors = [1];

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      if (num / i == i) {
        divisors.push(i);
      } else {
        divisors.push(i);
        divisors.push(num / i);
      }
    }
  }

  return divisors;
}

module.exports = getProperDivisors;
