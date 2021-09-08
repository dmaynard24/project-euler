# Cubic permutations

# Problem 62
# The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

# Find the smallest cube for which exactly five permutations of its digits are cube.

from ...util import digits


def get_smallest_cube(count):
  start = 10
  limit = 10_000
  sorted_cubes = {}

  for i in range(start, limit):
    cube = i**3
    sorted_digits = digits.get_digits_reversed(cube)
    sorted_digits.sort()
    sorted_value = ''.join(map(str, sorted_digits))

    cached_cube = sorted_cubes.get(sorted_value)
    if cached_cube is not None:
      cached_cube['count'] += 1
      cached_cube['cubes'].append(cube)

      if cached_cube['count'] == count:
        return min(cached_cube['cubes'])
    else:
      sorted_cubes[sorted_value] = {'count': 1, 'cubes': [cube]}

  return f'Unable to find a cube with {count} permutations that are also cubes under {limit}'
