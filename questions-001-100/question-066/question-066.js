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

function getXUsingConvergents(num) {
  let period = getPeriod(num),
    ns = [bigInt(1), bigInt(Math.floor(Math.sqrt(num)))],
    ds = [bigInt(0), bigInt(1)];

  let i = 2,
    j = 2,
    found = false;
  while (!found) {
    // reset j if it ever gets out of the bounds of the period
    if (j > period.length + 1) {
      j = 2;
    }
    let m = bigInt(period[j - 2]),
      n = m.multiply(ns[i - 1]).add(ns[i - 2]),
      d = m.multiply(ds[i - 1]).add(ds[i - 2]);

    let xPart = n.pow(2),
      yPart = d.pow(2).multiply(num);

    // if it satisfies the equation, return numerator (equal to x)
    if (xPart.subtract(yPart).equals(1)) {
      return n;
    }

    ns.push(n);
    ds.push(d);

    i++;
    j++;
  }
}

function getPeriod(num) {
  let sqrt = Math.sqrt(num),
    m = Math.floor(sqrt),
    int = m,
    n = sqrt + int,
    d = num - int * int,
    fraction = n / d,
    ms = [];

  while (d != 1) {
    // get new m
    m = Math.floor(fraction);
    // take reciprocal, then remove sqrt from denominator and simplify
    int -= d * m;
    int *= -1;
    n = sqrt + int;
    d = (num - int * int) / d;
    fraction = n / d;

    // store m
    ms.push(m);
  }

  ms.push(Math.floor(sqrt) * 2);

  return ms;
}

function getDiophantineD(max) {
  let largestX = bigInt(0),
    largestD;

  for (let d = 2; d <= max; d++) {
    let sqrt = Math.sqrt(d);
    // check if d isn't square
    if (Math.floor(sqrt) != sqrt) {
      // find minimal x using convergents
      let x = getXUsingConvergents(d);
      if (x.greater(largestX)) {
        largestX = x;
        largestD = d;
      }
    }
  }

  return largestD;
}

const time0 = now();
console.log(getDiophantineD(1000));
const time1 = now();

console.log(`call took ${time1 - time0} milliseconds`);
