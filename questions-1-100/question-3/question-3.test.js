// Largest prime factor

// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function getLargestPrimeFactor(num) {
  let factors = [];

  while (num % 2 == 0) {
    factors.push(2);
    num /= 2;
  }

  let sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num < i) {
      break;
    }
    while (num % i == 0) {
      factors.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    factors.push(num);
  }

  return factors.pop();
}

test('gets the largest prime factor of 600851475143 to be 6857', () => {
  expect(getLargestPrimeFactor(600851475143)).toBe(6857);
});
