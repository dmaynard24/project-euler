function getDigitsReversed(num) {
  if (num < 10) {
    return [num];
  }

  const digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits;
}

function getDigits(num) {
  return getDigitsReversed(num).reverse();
}

function getDigitsRotations(num) {
  const rotations = [];
  const numDigits = getDigits(num);

  const { length } = numDigits;
  for (let i = 1; i < length; i++) {
    let rotation = 0;
    for (let j = 0; j < length; j++) {
      rotation *= 10;
      rotation += numDigits[(i + j) % length];
    }
    rotations.push(rotation);
  }

  return rotations;
}

function getIntFromDigits(digits) {
  if (digits.length === 1) {
    return digits[0];
  }

  digits = digits.reduce((a, c) => {
    a = a.concat(c >= 10 ? getDigits(c) : c);
    return a;
  }, []);

  return digits.reduce((a, c) => {
    a *= 10;
    return a + c;
  }, 0);
}

function getDigitCount(num) {
  return Math.floor(Math.log10(num)) + 1;
}

module.exports = {
  getDigitsReversed,
  getDigits,
  getDigitsRotations,
  getIntFromDigits,
  getDigitCount,
};
