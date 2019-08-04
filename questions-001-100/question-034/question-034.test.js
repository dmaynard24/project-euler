// Digit factorials

// Problem 34
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

function getDigitFactorialSum() {
  let factorials = [],
    sum = 0;

  factorials.push(1);
  for (let i = 1; i <= 9; i++) {
    factorials.push(i * factorials[i - 1]);
  }

  for (let i = 3; i <= 41000; i++) {
    let digits = getDigits(i),
      digitsFactorialSum = digits.reduce((a, c) => a + factorials[c], 0);

    if (i == digitsFactorialSum) {
      sum += i;
    }
  }

  return sum;
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

test('gets the sum of all numbers which are equal to the sum of the factorial of their digits to be 40730', () => {
  expect(getDigitFactorialSum()).toBe(40730);
});
