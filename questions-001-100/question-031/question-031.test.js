// Coin sums

// Problem 31
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

function getTwoPoundCombinationCount() {
  var count = 0,
    coinValueCounts = {
      '1': 0,
      '2': 0,
      '5': 0,
      '10': 0,
      '20': 0,
      '50': 0,
      '100': 0,
      '200': 0
    },
    coinValues = Object.keys(coinValueCounts)
      .map(key => parseInt(key, 10))
      .reverse(),
    target = coinValues[0];

  function setCoinValueAtIndex(i) {
    target = getTargetAtIndex(i);

    let coinVal = coinValues[i];
    if (coinVal == 1) {
      coinValueCounts[coinVal.toString()] = target;
      count++;
      // console.log(coinValueCounts);
      // coinValueCounts = {
      //   '1': 0,
      //   '2': 0,
      //   '5': 0
      // };
    } else {
      let maxCoinCount = Math.floor(target / coinVal);
      for (let coinCount = maxCoinCount; coinCount >= 0; coinCount--) {
        coinValueCounts[coinVal.toString()] = coinCount;

        target = getTargetAtIndex(i);
        if (target == 0) {
          count++;
          // console.log(coinValueCounts);
          // coinValueCounts = {
          //   '1': 0,
          //   '2': 0,
          //   '5': 0
          // };
        } else {
          if (i + 1 < coinValues.length) {
            setCoinValueAtIndex(i + 1, target);
          }
        }
      }
    }
  }

  // recursively set coin values
  setCoinValueAtIndex(0);

  function getTargetAtIndex(i) {
    let target = coinValues[0];
    Object.keys(coinValueCounts)
      .reverse()
      .slice(0, i)
      .forEach(key => {
        target -= parseInt(key) * coinValueCounts[key];
      });

    return target;
  }

  return count;
}

test('gets the count of different ways can £2 be made using any number of coins to be 73682', () => {
  expect(getTwoPoundCombinationCount()).toBe(73682);
});
