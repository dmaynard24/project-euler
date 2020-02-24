# Largest product in a grid

# Problem 11
# In the 20×20 grid below, four numbers along a diagonal line have been marked in red.

# The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

# What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

import grid
grid = grid.grid


def get_largest_product(digits):
  grid_arr = [[int(num) for num in row.split()] for row in grid.split('\n')]

  def get_up_right(x, y):
    product = grid_arr[x][y]
    for _ in range(digits - 1):
      x -= 1
      y += 1
      product *= grid_arr[x][y]
    return product

  def get_right(x, y):
    product = grid_arr[x][y]
    for _ in range(digits - 1):
      y += 1
      product *= grid_arr[x][y]
    return product

  def get_down_right(x, y):
    product = grid_arr[x][y]
    for _ in range(digits - 1):
      x += 1
      y += 1
      product *= grid_arr[x][y]
    return product

  def get_down(x, y):
    product = grid_arr[x][y]
    for _ in range(digits - 1):
      x += 1
      product *= grid_arr[x][y]
    return product

  largest = 0
  for x in range(20):
    for y in range(20):
      if y + digits <= 19:
        row = grid_arr[x]
        zero_at = -1
        try:
          zero_at = row.index(0, y)
        except:
          zero_at = -1
        if zero_at == -1 or zero_at - y > digits - 1:
          new_largest = get_right(x, y)
          largest = max(new_largest, largest)
        if x - digits >= 0:
          new_largest = get_up_right(x, y)
          largest = max(new_largest, largest)
        if x + digits <= 19:
          new_largest = get_down_right(x, y)
          largest = max(new_largest, largest)
      if x + digits <= 19:
        new_largest = get_down(x, y)
        largest = max(new_largest, largest)

  return largest
