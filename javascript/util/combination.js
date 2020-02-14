function getCombos(arr, pick) {
  if (!pick) {
    return [[]];
  }

  if (!arr.length) {
    return [];
  }

  const first = arr[0];
  const rest = arr.slice(1);

  return getCombos(rest, pick - 1)
    .map((combo) => [first].concat(combo))
    .concat(getCombos(rest, pick));
}

module.exports = { getCombos };
