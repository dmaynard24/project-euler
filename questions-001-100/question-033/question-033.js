// Digit cancelling fractions

// Problem 33
// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

const getGcd = require('../../util/gcd');

function getFractionProductDenominator() {
  let nProduct = 1,
    dProduct = 1;

  for (let n = 10; n <= 98; n++) {
    for (let d = n + 1; d <= 99; d++) {
      let decimal = n / d,
        nDigits = getDigits(n),
        dDigits = getDigits(d),
        remainingN = nDigits[0],
        cancelledN = nDigits[1],
        remainingD = dDigits[1],
        cancelledD = dDigits[0];

      if (cancelledN == cancelledD && decimal == remainingN / remainingD) {
        nProduct *= n;
        dProduct *= d;
      }
    }
  }

  return dProduct / getGcd(nProduct, dProduct);
}

// getDigits takes an int value, returns array of ints
function getDigits(val) {
  if (val < 10) {
    return [val];
  }

  let digits = [];

  while (val > 0) {
    digits.push(val % 10);
    val = Math.floor(val / 10);
  }

  return digits.reverse();
}

module.exports = { getFractionProductDenominator, getGcd };
