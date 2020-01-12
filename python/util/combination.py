def get_combos(arr, pick):
  if pick == 0:
    return [[]]

  if len(arr) < 1:
    return []

  first = arr[0]
  rest = arr[1:]

  next_combos = get_combos(rest, pick - 1)
  # essentially map()
  for combo in next_combos:
    combo.insert(0, first)

  return next_combos + get_combos(rest, pick)