function getTriangles(limit) {
  let triangles = new Map(),
    n = 1,
    term = 1;

  while (term < limit) {
    triangles.set(term, true);
    term = getNthTriangle(n);

    n++;
  }

  return triangles;
}

function getNthTriangle(n) {
  return (n / 2) * (n + 1);
}

function getSquares(limit) {
  let squares = new Map(),
    n = 1,
    term = 1;

  while (term < limit) {
    squares.set(term, true);
    term = getNthSquare(n);

    n++;
  }

  return squares;
}

function getNthSquare(n) {
  return n * n;
}

function getPentagons(limit) {
  let pentagons = new Map(),
    n = 1,
    term = 1;

  while (term < limit) {
    pentagons.set(term, true);
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
  let hexagons = new Map(),
    n = 1,
    term = 1;

  while (term < limit) {
    hexagons.set(term, true);
    term = getNthHexagon(n);

    n++;
  }

  return hexagons;
}

function getNthHexagon(n) {
  return n * (2 * n - 1);
}

function getHeptagons(limit) {
  let heptagons = new Map(),
    n = 1,
    term = 1;

  while (term < limit) {
    heptagons.set(term, true);
    term = getNthHeptagon(n);

    n++;
  }

  return heptagons;
}

function getNthHeptagon(n) {
  return (n * (5 * n - 3)) / 2;
}

function getOctagons(limit) {
  let octagons = new Map(),
    n = 1,
    term = 1;

  while (term < limit) {
    octagons.set(term, true);
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
