function getProperDivisors(num) {
  const divisors = [1];

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i !== i) {
        divisors.push(num / i);
      }
    }
  }

  return divisors;
}

module.exports = getProperDivisors;
