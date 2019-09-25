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
    xParts = [],
    yParts = [],
    largestD;

  for (let d = 50; d <= max; d++) {
    let sqrt = Math.sqrt(d);
    // check if it's not square
    if (Math.floor(sqrt) != sqrt) {
      let x = Math.floor(Math.sqrt(d + 1));
      // find xPart of equation
      let xPart = getXPart(x, d);

      let found = false;
      while (!found) {
        let y = 1;
        // find yPart of equation
        let yPart = getYPart(y, d);

        while (xPart.greater(yPart)) {
          if (xPart.minus(yPart).equals(1)) {
            console.log(`x: ${x}, d: ${d}, y: ${y}`);
            if (x > largestX) {
              largestX = x;
              largestD = d;
            }
            found = true;
            break;
          }

          y++;
          // update yPart of equation
          yPart = getYPart(y, d);
        }

        x++;
        // update xPart of equation
        xPart = getXPart(x, d);
      }
    }
  }

  function getXPart(x, d) {
    // check caches
    if (xParts[x] == undefined) {
      xParts[x] = [];
    }
    if (xParts[x][d] == undefined) {
      xParts[x][d] = bigInt(x).pow(2);
    }
    return xParts[x][d];
  }

  function getYPart(y, d) {
    // check caches
    if (yParts[y] == undefined) {
      yParts[y] = [];
    }
    if (yParts[y][d] == undefined) {
      yParts[y][d] = bigInt(y)
        .pow(2)
        .multiply(d);
    }
    return yParts[y][d];
  }

  return largestD;
}

const time0 = now();
console.log(getDiophantineD(100));
const time1 = now();

console.log(`call took ${time1 - time0} milliseconds`);
