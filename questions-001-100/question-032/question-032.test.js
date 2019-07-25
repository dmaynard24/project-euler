// Pandigital products

// Problem 32
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

function getPandigitalSum() {
  let products = [],
    sum = 0;

  for (let i = 2; i <= 100; i++) {
    let limit = Math.ceil(9876 / i);

    if (!isPandigital(i)) {
      continue;
    }

    for (let j = 1; j <= limit; j++) {
      if (!isPandigital(j)) {
        continue;
      }

      let product = i * j;
      if (!isPandigital(product)) {
        continue;
      }

      let concat = i.toString() + j.toString() + product.toString();
      if (concat.length > 9) {
        break;
      }

      if (concat.length == 9 && isPandigital(parseInt(concat, 10))) {
        if (!products[product]) {
          products[product] = true;
          sum += product;
        }
      }
    }
  }

  return sum;
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

test('gets the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital to be 45228', () => {
  expect(getPandigitalSum()).toBe(45228);
});
