// Amicable numbers

// Problem 21
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

function getAmicableSum(limit) {
  let amicables = [];

  for (let i = 2; i < limit; i++) {
    let a = i,
      b = d(a);
    if (a != b && d(b) == a) {
      amicables.push(i);
    }
  }

  return amicables.reduce((a, c) => a + c);
}

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

function d(num) {
  return getProperDivisors(num).reduce((a, c) => a + c);
}

test('gets the sum of all the amicable numbers under 10000 be 31626', () => {
  expect(getAmicableSum(10000)).toBe(31626);
});
