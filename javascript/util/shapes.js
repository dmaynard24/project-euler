function isPentagonal(num, pentagons) {
  if (pentagons && pentagons.length && pentagons.length >= num) {
    return pentagons[num];
  }

  return (Math.sqrt(24 * num + 1) + 1) % 6 == 0;
}

function getShapes(limit, getNthShapeFn) {
  let shapes = new Map(),
    n = 1,
    term = 1;

  while (term < limit) {
    shapes.set(term, true);
    term = getNthShapeFn(n);

    n++;
  }

  return shapes;
}

const getNthTriangle = n => (n / 2) * (n + 1),
  getNthSquare = n => n * n,
  getNthPentagon = n => (n * (3 * n - 1)) / 2,
  getNthHexagon = n => n * (2 * n - 1),
  getNthHeptagon = n => (n * (5 * n - 3)) / 2,
  getNthOctagon = n => n * (3 * n - 2);

const getTriangles = limit => getShapes(limit, getNthTriangle),
  getSquares = limit => getShapes(limit, getNthSquare),
  getPentagons = limit => getShapes(limit, getNthPentagon),
  getHexagons = limit => getShapes(limit, getNthHexagon),
  getHeptagons = limit => getShapes(limit, getNthHeptagon),
  getOctagons = limit => getShapes(limit, getNthOctagon);

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
  getOctagons
};
