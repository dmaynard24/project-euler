# Path sum: two ways

# Problem 81
# In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.

# 131 673 234 103 18
# 201 96  342 965 150
# 630 803 746 422 111
# 537 699 497 121 956
# 805 732 524 37  331

# Find the minimal path sum in the matrix string containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.

import sys
import matrix
matrix = matrix.matrix


def get_minimal_path_sum():
  grid = list(
      map(lambda row: list(map(int, row.split(','))), matrix.split('\n')))
  node_sums = []

  node_sums.append([])
  node_sums[0].append(grid[0][0])

  # first row only (start at [0, 1])
  for j in range(1, len(grid[0])):
    curr = grid[0][j]
    left = node_sums[0][j - 1]
    node_sum = left + curr
    node_sums[0].append(node_sum)

  # every other row
  for i in range(1, len(grid)):
    node_sums.append([])

    for j in range(len(grid[i])):
      curr = grid[i][j]
      left = node_sums[i][j - 1] if j > 0 else sys.maxsize
      up = node_sums[i - 1][j]
      node_sum = min(left, up) + curr
      node_sums[i].append(node_sum)

  return node_sums[-1][len(node_sums[-1]) - 1]