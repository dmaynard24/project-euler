# Integer right triangles

# Problem 39
# If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

# {20,48,52}, {24,45,51}, {30,40,50}

# For which value of p ≤ 1000, is the number of solutions maximised?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import pythagorean_triples


def get_most_common_perimeter(p_max):
  primitives = pythagorean_triples.get_primitive_triples(p_max)
  perimeter_counts = {}
  most_common = 120
  most_common_count = 3

  for primitive in primitives:
    p = primitive['p']
    while p <= p_max:
      if p in perimeter_counts:
        perimeter_counts[p] = perimeter_counts[p] + 1
      else:
        perimeter_counts[p] = 1

      if perimeter_counts[p] > most_common_count:
        most_common_count = perimeter_counts[p]
        most_common = p

      p += primitive['p']

  return most_common
