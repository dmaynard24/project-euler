function getPeriod(num) {
  const sqrt = Math.sqrt(num);
  let m = Math.floor(sqrt);

  if (sqrt === m) {
    return [];
  }

  let int = m;
  let n = sqrt + int;
  let d = num - int * int;
  let fraction = n / d;
  const ms = [];

  while (d !== 1) {
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

module.exports = getPeriod;
