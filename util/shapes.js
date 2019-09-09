function getTriangles(limit) {
  let triangles = [],
    n = 1,
    term = 1;

  while (term < limit) {
    triangles[term] = true;
    term = getNthTriangle(n);

    n++;
  }

  return triangles;
}

function getNthTriangle(n) {
  return (n / 2) * (n + 1);
}

function getSquares(limit) {
  let squares = [],
    n = 1,
    term = 1;

  while (term < limit) {
    squares[term] = true;
    term = getNthSquare(n);

    n++;
  }

  return squares;
}

function getNthSquare(n) {
  return n * n;
}

function getPentagons(limit) {
  let pentagons = [],
    n = 1,
    term = 1;

  while (term < limit) {
    pentagons[term] = true;
    term = getNthPentagon(n);

    n++;
  }

  return pentagons;
}

function getNthPentagon(n) {
  return (n * (3 * n - 1)) / 2;
}

function isPentagonal(num, pentagons) {
  if (pentagons && pentagons.length && pentagons.length >= num) {
    return pentagons[num];
  }

  return (Math.sqrt(24 * num + 1) + 1) % 6 == 0;
}

function getHexagons(limit) {
  let hexagons = [],
    n = 1,
    term = 1;

  while (term < limit) {
    hexagons[term] = true;
    term = getNthHexagon(n);

    n++;
  }

  return hexagons;
}

function getNthHexagon(n) {
  return n * (2 * n - 1);
}

function getHeptagons(limit) {
  let heptagons = [],
    n = 1,
    term = 1;

  while (term < limit) {
    heptagons[term] = true;
    term = getNthHeptagon(n);

    n++;
  }

  return heptagons;
}

function getNthHeptagon(n) {
  return (n * (5 * n - 3)) / 2;
}

function getOctagons(limit) {
  let octagons = [],
    n = 1,
    term = 1;

  while (term < limit) {
    octagons[term] = true;
    term = getNthOctagon(n);

    n++;
  }

  return octagons;
}

function getNthOctagon(n) {
  return n * (3 * n - 2);
}

module.exports = {
  getTriangles,
  getNthTriangle,
  getSquares,
  getNthSquare,
  getPentagons,
  getNthPentagon,
  isPentagonal,
  getHexagons,
  getNthHexagon,
  getHeptagons,
  getNthHeptagon,
  getOctagons,
  getNthOctagon
};
