def get_combos(arr, pick):
  if len(arr) < 1:
    return []

  first = arr[0]
  rest = arr[1:]

  next_combos = get_combos(rest, pick - 1)
  for c in next_combos:
    c.insert(0, first)

  return next_combos + get_combos(rest, pick)


print(get_combos([1, 2, 3], 2))