function isPentagonal(num, pentagons) {
  if (pentagons && pentagons.length && pentagons.length >= num) {
    return pentagons[num];
  }

  return (Math.sqrt(24 * num + 1) + 1) % 6 === 0;
}

function getShapes(limit, getNthShapeFn) {
  const shapes = new Map();
  let n = 1;
  let term = 1;

  while (term < limit) {
    shapes.set(term, true);
    term = getNthShapeFn(n);

    n++;
  }

  return shapes;
}

const getNthTriangle = (n) => (n / 2) * (n + 1);
const getNthSquare = (n) => n * n;
const getNthPentagon = (n) => (n * (3 * n - 1)) / 2;
const getNthHexagon = (n) => n * (2 * n - 1);
const getNthHeptagon = (n) => (n * (5 * n - 3)) / 2;
const getNthOctagon = (n) => n * (3 * n - 2);

const getTriangles = (limit) => getShapes(limit, getNthTriangle);
const getSquares = (limit) => getShapes(limit, getNthSquare);
const getPentagons = (limit) => getShapes(limit, getNthPentagon);
const getHexagons = (limit) => getShapes(limit, getNthHexagon);
const getHeptagons = (limit) => getShapes(limit, getNthHeptagon);
const getOctagons = (limit) => getShapes(limit, getNthOctagon);

module.exports = {
  isPentagonal,
  getNthTriangle,
  getNthSquare,
  getNthPentagon,
  getNthHexagon,
  getNthHeptagon,
  getNthOctagon,
  getTriangles,
  getSquares,
  getPentagons,
  getHexagons,
  getHeptagons,
  getOctagons,
};
