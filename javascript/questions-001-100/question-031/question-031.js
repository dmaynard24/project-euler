// Coin sums

// Problem 31
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

function getTwoPoundCombinationCount() {
  const coinValues = [200, 100, 50, 20, 10, 5, 2, 1];

  function getCoinComboCount(i, target) {
    if (target === 0 || i === coinValues.length - 1) {
      return 1;
    }

    const coinVal = coinValues[i];
    const maxCoinCount = Math.floor(target / coinVal);
    let count = 0;
    for (let coinCount = maxCoinCount; coinCount >= 0; coinCount--) {
      count += getCoinComboCount(i + 1, target - coinVal * coinCount);
    }

    return count;
  }

  return getCoinComboCount(0, coinValues[0]);
}

module.exports = getTwoPoundCombinationCount;
