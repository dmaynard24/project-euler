// Number spiral diagonals

// Problem 28
// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

function getDiagonalSum(width) {
  const squareCount = width / 2 - 0.5;
  let sum = 1;

  for (let i = 1; i <= squareCount; i++) {
    const squareWidth = i * 2 + 1;
    // get the average corner value based on the width, multiply by 4 to get the sum of corner values.
    sum += (squareWidth * (squareWidth - 1) - (i - 1)) * 4;
  }

  return sum;
}

module.exports = getDiagonalSum;
