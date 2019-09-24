// Diophantine equation

// Problem 66
// Consider quadratic Diophantine equations of the form:

// x^2 – Dy^2 = 1

// For example, when D=13, the minimal solution in x is 649^2 – 13×180^2 = 1.

// It can be assumed that there are no solutions in positive integers when D is square.

// By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:

// 3^2 – 2×2^2 = 1
// 2^2 – 3×1^2 = 1
// 9^2 – 5×4^2 = 1
// 5^2 – 6×2^2 = 1
// 8^2 – 7×3^2 = 1

// Hence, by considering minimal solutions in x for D ≤ 7, the largest x is obtained when D=5.

// Find the value of D ≤ 1000 in minimal solutions of x for which the largest value of x is obtained.

const now = require('performance-now'),
  bigInt = require('big-integer');

function getDiophantineD(max) {
  let largestX = 0,
    largestD;

  let maxRoot = 5000,
    rootSquares = [];
  for (let i = 1; i <= maxRoot; i++) {
    let squareStr = bigInt(i)
      .pow(2)
      .toString();
    rootSquares.push({
      root: i,
      square: squareStr
    });
  }

  console.log(rootSquares.pop());

  for (let d = 0; d <= max; d++) {
    let sqrt = Math.sqrt(d);
    // check if it's not square
    if (Math.floor(sqrt) != sqrt) {
      let y = 1;
      while (true) {
        let sum = 1 + d * y * y,
          x = Math.sqrt(sum);

        // check if it's square
        if (Math.floor(x) == x) {
          if (x > largestX) {
            largestX = x;
            largestD = d;
          }
          break;
        }

        y++;
      }
    }
  }

  return largestD;
}

const time0 = now();
console.log(getDiophantineD(7));
const time1 = now();

console.log(`call took ${time1 - time0} milliseconds`);
