// Passcode derivation

// Problem 79
// A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

// The keylog string contains fifty successful login attempts.

// Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.

const keylog = require(`./keylog`);
const digits = require(`../../util/digits`);

function getShortestPasscode() {
  const logins = [...new Set(keylog.split(`\n`))];
  const loginsDigits = [];
  const passcodeArr = [
    ...new Set(
      logins.reduce((a, c) => {
        // side effect for getting digits later
        const loginDigits = digits.getDigits(c);
        loginsDigits.push(loginDigits);
        a = a.concat(loginDigits);
        return a;
      }, []),
    ),
  ];

  // twice for good measure
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < logins.length; j++) {
      const loginDigits = loginsDigits[j];
      for (let k = 0; k < loginDigits.length - 1; k++) {
        const currentIndex = passcodeArr.indexOf(loginDigits[k]);
        const nextDigit = loginDigits[k + 1];
        const nextIndex = passcodeArr.indexOf(nextDigit);
        if (nextIndex < currentIndex) {
          passcodeArr.splice(nextIndex, 1);
          passcodeArr.splice(currentIndex, 0, nextDigit);
        }
      }
    }
  }

  return digits.getIntFromDigits(passcodeArr);
}

module.exports = getShortestPasscode;
