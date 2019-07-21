// Non-abundant sums

// Problem 23
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

function getSum() {
  let lower = 12,
    upper = 28123,
    abundants = [];
  for (let i = lower; i <= upper; i++) {
    let properDivisors = getProperDivisors(i),
      properDivisorsSum = properDivisors.reduce((a, c) => a + c);
    if (properDivisorsSum > i) {
      abundants.push(i);
    }
  }

  let sums = [...Array(upper)],
    j = 0;
  while (j < abundants.length) {
    let k = j;
    while (k < abundants.length && abundants[j] + abundants[k] <= upper) {
      sums[abundants[j] + abundants[k]] = true;
      k++;
    }
    j++;
  }

  return [...Array(upper).keys()]
    .map(key => key + 1)
    .filter(nonSum => sums[nonSum] != true)
    .reduce((a, c) => a + c);
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

test('gets the sum of all the positive integers which cannot be written as the sum of two abundant numbers to be 4179871', () => {
  expect(getSum()).toBe(4179871);
});
