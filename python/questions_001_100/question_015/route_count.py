# Lattice paths

# Problem 15
# Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner. Refer to the image here: https://projecteuler.net/problem=15.

# How many such routes are there through a 20×20 grid?


def get_route_count(width):
  nodes_per_side = width + 1
  rows = []

  for i in range(nodes_per_side):
    row = []
    for j in range(nodes_per_side):
      if i == nodes_per_side - 1:
        row.append(1)
      else:
        if j == nodes_per_side - 1:
          row.append(1)
        else:
          row.append(0)
    rows.append(row)

  for y in range(width - 1, -1, -1):
    for x in range(y, -1, -1):
      node_value = rows[y][x + 1] + rows[y + 1][x]
      rows[y][x] = node_value
      rows[x][y] = node_value

  return rows[0][0]
