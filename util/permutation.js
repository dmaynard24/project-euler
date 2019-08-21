const digits = require('./digits');

function isPermutation(val, testVal) {
  let valDigits = digits.getDigits(val),
    testValDigits = digits.getDigits(testVal);

  if (valDigits.length == testValDigits.length) {
    valDigits.sort();
    testValDigits.sort();

    let valConcat = 0,
      testValConcat = 0;
    for (let i = 0; i < valDigits.length; i++) {
      valConcat *= 10;
      valConcat += valDigits[i];
      testValConcat *= 10;
      testValConcat += testValDigits[i];
    }

    return valConcat == testValConcat;
  }

  return false;
}

module.exports = isPermutation;
