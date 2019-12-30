function getCombos(arr, pick) {
	if (!pick) {
		return [[]];
	}
	if (!arr.length) {
		return [];
	}

	let first = arr[0],
		rest = arr.slice(1);

	return getCombos(rest, pick - 1)
		.map(combo => {
			return [first].concat(combo);
		})
		.concat(getCombos(rest, pick));
}

module.exports = { getCombos };
