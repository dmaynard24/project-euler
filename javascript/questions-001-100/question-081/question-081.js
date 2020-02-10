// Path sum: two ways

// Problem 81
// In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.

// 131 673 234 103 18
// 201 96  342 965 150
// 630 803 746 422 111
// 537 699 497 121 956
// 805 732 524 37  331

// Find the minimal path sum in the matrix string containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.

const matrix = require('./matrix');

function getMinimalPathSum() {
  let grid = matrix.split('\n').map(row => row.split(',').map(num => +num)),
    sums = [];

  sums[0] = [];
  sums[0][0] = grid[0][0];

  // first row only (start at [0, 1])
  let i = 0;
  for (let j = 1; j < grid[i].length; j++) {
    let curr = grid[i][j],
      left = sums[i][j - 1],
      sum = left + curr;
    sums[i].push(sum);
  }

  // every other row
  for (let i = 1; i < grid.length; i++) {
    sums[i] = [];

    for (let j = 0; j < grid[i].length; j++) {
      let curr = grid[i][j],
        left = j > 0 ? sums[i][j - 1] : Infinity,
        up = sums[i - 1][j],
        sum = Math.min(left, up) + curr;
      sums[i].push(sum);
    }
  }

  let len = sums.length;
  return sums[len - 1][sums[len - 1].length - 1];
}

module.exports = getMinimalPathSum;
