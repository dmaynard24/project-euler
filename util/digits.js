// each of these functions take an int argument, return an array of ints

function getDigits(num) {
  if (num < 10) {
    return [num];
  }

  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits.reverse();
}

function getDigitsReversed(num) {
  if (num < 10) {
    return [num];
  }

  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits;
}

function getDigitsRotations(num) {
  let rotations = [],
    numDigits = getDigits(num);

  let length = numDigits.length;
  for (let j = 1; j < length; j++) {
    let rotation = 0;
    for (let k = 0; k < length; k++) {
      rotation *= 10;
      rotation += numDigits[(j + k) % length];
    }
    rotations.push(rotation);
  }

  return rotations;
}

function getIntFromDigits(digits) {
  if (digits.length == 1) {
    return digits[0];
  }

  return digits.reduce((a, c) => {
    a *= 10;
    return (a += c);
  }, 0);
}

function getDigitCount(num) {
  return Math.floor(Math.log10(num)) + 1;
}

module.exports = { getDigits, getDigitsReversed, getDigitsRotations, getIntFromDigits, getDigitCount };
