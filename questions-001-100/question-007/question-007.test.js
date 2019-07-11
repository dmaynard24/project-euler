// 10001st prime

// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function getNthPrime(n) {
  let i = 2,
    primeCount = 0,
    prime;
  while (primeCount < n) {
    if (isPrime(i)) {
      prime = i;
      primeCount++;
    }
    if (i == 2) {
      i++;
    } else {
      i += 2;
    }
  }

  return prime;
}

function isPrime(num) {
  if (num < 1) {
    return true;
  } else if (num == 2 || num == 3) {
    return true;
  } else if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

test('gets the 10001st prime number to be 104743', () => {
  expect(getNthPrime(10001)).toBe(104743);
});
