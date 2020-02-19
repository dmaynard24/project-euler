function isPandigital(num, excludeZero) {
  let digits;

  if (typeof num === `number`) {
    // if a number was passed as the argument
    digits = new Map();

    while (num > 0) {
      const mod = num % 10;
      if ((excludeZero && mod === 0) || digits.has(mod)) {
        return false;
      }

      digits.set(mod, 1);
      num = Math.floor(num / 10);
    }

    return true;
  }
  if (typeof num === `string`) {
    // if a string was passed as the argument
    digits = num.split(``);
  } else if (Array.isArray(num)) {
    // if an array was passed as the argument
    digits = num;
  }

  // sort ("clone" the array in case an array was passed by reference)
  const digitsSorted = [...digits].sort();

  if (excludeZero && digitsSorted[0] === `0`) {
    return false;
  }

  for (let i = 1; i < digitsSorted.length; i++) {
    if (digitsSorted[i] === digitsSorted[i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPandigital;
