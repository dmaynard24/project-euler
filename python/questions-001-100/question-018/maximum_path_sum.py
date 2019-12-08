# Maximum path sum I

# Problem 18
# By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

# 3
# 7 4
# 2 4 6
# 8 5 9 3

# That is, 3 + 7 + 4 + 9 = 23.

# Find the maximum total from top to bottom of the triangle below

# NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

import triangle


def get_maximum_path_sum():
  two_d = list(map(row_map, triangle.triangle.split('\n')))
  sums = []

  sums.append([])
  sums[0].append(two_d[0][0])

  for i in range(1, len(two_d)):
    sums.append([])

    for j in range(len(two_d[i])):
      curr = two_d[i][j]
      left = sums[i - 1][j - 1] if j - 1 >= 0 else 0
      right = sums[i - 1][j] if j < len(two_d[i - 1]) else 0
      max_sum = max(left, right) + curr
      sums[i].append(max_sum)

  last_row = sums.pop()
  last_row.sort()

  return last_row.pop()


def row_map(row):
  return list(map(int, row.split(' ')))
