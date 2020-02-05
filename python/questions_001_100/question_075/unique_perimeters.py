# Singular integer right triangles

# Problem 75
# It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.

# 12 cm: (3,4,5)
# 24 cm: (6,8,10)
# 30 cm: (5,12,13)
# 36 cm: (9,12,15)
# 40 cm: (8,15,17)
# 48 cm: (12,16,20)

# In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.

# 120 cm: (30,40,50), (20,48,52), (24,45,51)

# Given that L is the length of the wire, for how many values of L ≤ 1,500,000 can exactly one integer sided right angle triangle be formed?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import pythagorean_triples


def get_unique_perimeters(p_max):
  primitives = pythagorean_triples.get_primitive_triples(p_max)
  perimeter_counts = {}
  unique_counts = 0

  for primitive in primitives:
    p = primitive['p']
    while p <= p_max:
      if perimeter_counts.get(p) is not None:
        perimeter_counts[p] += 1
        if perimeter_counts[p] == 2:
          unique_counts -= 1
      else:
        perimeter_counts[p] = 1
        unique_counts += 1

      p += primitive['p']

  return unique_counts