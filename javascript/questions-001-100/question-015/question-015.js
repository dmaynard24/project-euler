// Lattice paths

// Problem 15
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner. Refer to the image here: https://projecteuler.net/problem=15.

// How many such routes are there through a 20×20 grid?

function getRouteCount(width) {
  const nodesPerSide = width + 1;
  const rows = [];

  for (let i = 0; i < nodesPerSide; i++) {
    const row = [];
    for (let j = 0; j < nodesPerSide; j++) {
      if (i === nodesPerSide - 1) {
        row.push(1);
      } else if (j === nodesPerSide - 1) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    rows.push(row);
  }

  for (let y = width - 1; y > -1; y--) {
    for (let x = y; x > -1; x--) {
      const nodeValue = rows[y][x + 1] + rows[y + 1][x];
      rows[y][x] = nodeValue;
      rows[x][y] = nodeValue;
    }
  }

  return rows[0][0];
}

module.exports = getRouteCount;
