// Square digit chains

// Problem 92
// A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

// For example,

// 44 → 32 → 13 → 10 → 1 → 1
// 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

// Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

// How many starting numbers below ten million will arrive at 89?

const digits = require(`../../util/digits`);

function getChainCount(limit) {
  const chainLinks = new Map();
  let count = 0;

  let start = 2;
  while (start < limit) {
    const chain = [];
    let i = start;
    while (i !== 1 && i !== 89 && !chainLinks.has(i)) {
      const iDigits = digits.getDigits(i);
      let iDigitsSquaredSum = 0;
      for (let j = 0; j < iDigits.length; j++) {
        iDigitsSquaredSum += iDigits[j] ** 2;
      }
      i = iDigitsSquaredSum;
      chain.push(i);
    }

    if (i === 1 || chainLinks.get(i) === 1) {
      for (let j = 0; j < chain.length; j++) {
        chainLinks.set(chain[j], 1);
      }
    } else {
      // must be 89 or a link in a chain leading to 89
      for (let j = 0; j < chain.length; j++) {
        chainLinks.set(chain[j], 89);
      }
      count++;
    }

    start++;
  }

  return count;
}

module.exports = getChainCount;
