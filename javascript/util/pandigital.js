function isPandigital(num, excludeZero) {
  if (typeof num === 'number') {
    let digits = new Map();

    while (num > 0) {
      let mod = num % 10;
      if ((excludeZero && mod == 0) || digits.has(mod)) {
        return false;
      }

      digits.set(mod, 1);
      num = Math.floor(num / 10);
    }

    return true;
  }

  // if a string was passed as the argument
  let digits = num.split('').sort();

  if (excludeZero && digits[0] == '0') {
    return false;
  }

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] == digits[i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPandigital;
