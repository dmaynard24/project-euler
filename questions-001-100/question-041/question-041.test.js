// Pandigital prime

// Problem 41
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?

function getLargestPandigitalPrime() {
  let largest = 2143;

  for (let i = 7654321; i >= largest; i -= 2) {
    if (isPandigital(i) && isPrime(i)) {
      return i;
    }
  }

  return largest;
}

function isPandigital(num) {
  let digits = getDigits(num).sort();

  if (digits[0] == 0) {
    return false;
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] != i + 1) {
      return false;
    }
  }

  return true;
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

// getDigits takes an int value, returns array of ints
function getDigits(val) {
  let digits = [];

  while (val > 0) {
    digits.push(val % 10);
    val = Math.floor(val / 10);
  }

  return digits.reverse();
}

test('gets the largest n-digit pandigital prime that exists to be 7652413', () => {
  expect(getLargestPandigitalPrime()).toBe(7652413);
});
