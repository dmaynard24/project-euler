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


def get_maximum_path_sum(triangle):
  sums = [[int(num) for num in row.strip().split(' ')]
          for row in triangle.split('\n')]

  for i in range(len(sums) - 2, -1, -1):
    for j in range(len(sums[i])):
      sums[i][j] = max(sums[i + 1][j], sums[i + 1][j + 1]) + sums[i][j]

  return sums[0][0]
