// Pandigital multiples

// Problem 38
// Take the number 192 and multiply it by each of 1, 2, and 3:

// 192 × 1 = 192
// 192 × 2 = 384
// 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

function getLargestPandigital() {
  let largest = 0;

  for (let num = 1; num <= 9999; num++) {
    let concat = '',
      n = 1;
    while (concat.length < 9) {
      concat += (num * n).toString();
      n++;
    }

    let concatInt = parseInt(concat, 10);
    if (concatInt > largest && isPandigital(concatInt)) {
      largest = concatInt;
    }
  }

  return largest;
}

function isPandigital(val) {
  let digits = [];

  while (val > 0) {
    let mod = val % 10;
    if (mod == 0 || digits[mod] == 1) {
      return false;
    }

    digits[mod] = 1;
    val = Math.floor(val / 10);
  }

  return true;
}

test('gets the sum of the only eleven truncatable primes to be 932718654', () => {
  expect(getLargestPandigital()).toBe(932718654);
});
