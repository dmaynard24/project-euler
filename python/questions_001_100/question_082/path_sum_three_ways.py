# Path sum: three ways

# Problem 82
# NOTE: This problem is a more challenging version of Problem 81.

# The minimal path sum in the 5 by 5 matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to 994.

# Find the minimal path sum from the left column to the right column in matrix, a string containing an 80 by 80 matrix.

import sys

matrix = '''131,673,234,103,18
201,96,342,965,150
630,803,746,442,111
537,699,497,121,956
805,732,524,37,131'''


def get_minimal_path_sum():
  grid = [[int(num) for num in row.split(',')] for row in matrix.split('\n')]
  extent = len(grid)

  nodes = []
  for row in grid:
    node_row = []
    for num in row:
      node = {'tentative': sys.maxsize, 'visited': False, 'value': num}
      node_row.append(node)
    nodes.append(node_row)

  # mark all tentative distances in the first column to their value
  for y in range(extent):
    nodes[y][0]['tentative'] = nodes[y][0]['value']

  def mark_neighbors(curr_x, curr_y):
    curr_node = nodes[curr_y][curr_x]
    if curr_y > 0:
      above_node = nodes[curr_y - 1][curr_x]
      # set tentative distance of node above
      above_node['tentative'] = min(
          above_node['tentative'],
          above_node['value'] + curr_node['tentative'])
    if curr_y < extent - 1:
      below_node = nodes[curr_y + 1][curr_x]
      # set tentative distance of node below
      below_node['tentative'] = min(
          below_node['tentative'],
          below_node['value'] + curr_node['tentative'])
    if curr_x < extent - 1:
      right_node = nodes[curr_y][curr_x + 1]
      # set tentative distance of node to the right
      right_node['tentative'] = min(
          right_node['tentative'],
          right_node['value'] + curr_node['tentative'])

  # for x in range(0, extent):
  #   for curr_y in range(extent - 1, -1, -1):

  min_sum = sys.maxsize
  # for y in range(extent):
  #   min_sum = min(min_sum, nodes[y][extent - 1]['tentative'])

  return min_sum


print(get_minimal_path_sum())