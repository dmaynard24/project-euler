// Counting rectangles

// Problem 85
// By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles.

// Although there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution.

function getRectCount(rectW, rectH) {
  let count = 0;

  for (let w = 1; w <= rectW; w++) {
    for (let h = 1; h <= rectH; h++) {
      count += (rectW - w + 1) * (rectH - h + 1);
    }
  }

  return count;
}

function getClosestArea(targetCount) {
  let closestArea;
  let smallestDiff = targetCount;

  // max our width at 100
  const maxW = Math.min(Math.floor(targetCount / 2), 100);

  for (let w = 3; w < maxW; w++) {
    for (let h = 2; h <= w; h++) {
      const rectCount = getRectCount(w, h);
      const diff = Math.abs(targetCount - rectCount);
      if (diff < smallestDiff) {
        closestArea = w * h;
        smallestDiff = diff;
      }
    }
  }

  return closestArea;
}

module.exports = getClosestArea;
