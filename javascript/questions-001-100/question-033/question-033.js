// Digit cancelling fractions

// Problem 33
// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

const digits = require(`../../util/digits`);
const getGcd = require(`../../util/gcd`);

function getFractionProductDenominator() {
  let nProduct = 1;
  let dProduct = 1;

  for (let n = 10; n <= 98; n++) {
    for (let d = n + 1; d <= 99; d++) {
      const decimal = n / d;
      const nDigits = digits.getDigits(n);
      const dDigits = digits.getDigits(d);
      const remainingN = nDigits[0];
      const cancelledN = nDigits[1];
      const remainingD = dDigits[1];
      const cancelledD = dDigits[0];

      if (cancelledN === cancelledD && decimal === remainingN / remainingD) {
        nProduct *= n;
        dProduct *= d;
      }
    }
  }

  return dProduct / getGcd(nProduct, dProduct);
}

module.exports = { getFractionProductDenominator, getGcd };
