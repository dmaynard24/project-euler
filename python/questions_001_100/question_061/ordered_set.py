# Cyclical figurate numbers

# Problem 61
# Triangle, square, pentagonal, hexagonal, heptagonal, and octagonal numbers are all figurate (polygonal) numbers and are generated by the following formulae:

# Triangle	 	  P3n=n(n+1)/2	 	1, 3, 6, 10, 15, ...
# Square	 	    P4n=n2	 	1, 4, 9, 16, 25, ...
# Pentagonal	 	P5n=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
# Hexagonal	 	P6n=n(2n−1)	 	1, 6, 15, 28, 45, ...
# Heptagonal	 	P7n=n(5n−3)/2	 	1, 7, 18, 34, 55, ...
# Octagonal	 	P8n=n(3n−2)	 	1, 8, 21, 40, 65, ...
# The ordered set of three 4-digit numbers: 8128, 2882, 8281, has three interesting properties.

# The set is cyclic, in that the last two digits of each number is the first two digits of the next number (including the last number with the first).
# Each polygonal type: triangle (P3,127=8128), square (P4,91=8281), and pentagonal (P5,44=2882), is represented by a different number in the set.
# This is the only set of 4-digit numbers with this property.
# Find the sum of the only ordered set of six cyclic 4-digit numbers for which each polygonal type: triangle, square, pentagonal, hexagonal, heptagonal, and octagonal, is represented by a different number in the set.

from ...util import shapes
import math


def are_cyclical(a, b):
  return a % 100 == math.floor(b / 100)


def get_ordered_set():
  limit = 10_000
  term_sets = {
      '3': shapes.get_triangles(limit),
      '4': shapes.get_squares(limit),
      '5': shapes.get_pentagons(limit),
      '6': shapes.get_hexagons(limit),
      '7': shapes.get_heptagons(limit),
      '8': shapes.get_octagons(limit)
  }
  set_count = len(term_sets)

  def get_next_term(curr_set, start_value, matched_sets):
    return_set = []
    unmatched_keys = [
        key for key in matched_sets if matched_sets[key] == False
    ]

    for i in range(start_value, limit):
      for j in range(len(unmatched_keys)):
        if i in term_sets[unmatched_keys[j]]:
          # for every term except the last
          if len(curr_set) < set_count - 1:
            if i % 100 < 10:
              break

          # for every set except the first
          if len(curr_set) != 0:
            if are_cyclical(curr_set[-1], i) == False:
              break

          # for just the last set
          if len(curr_set) == set_count - 1:
            if are_cyclical(i, curr_set[0]) == False:
              break

          # store matches
          matched_sets[unmatched_keys[j]] = True
          curr_set.append(i)

          # immediately after pushing a new term, check base case
          if len(curr_set) == set_count:
            return curr_set

          # continue
          if len(return_set) == 0:
            new_start_value = (i % 100) * 100
            new_set = curr_set[:]
            return_set.extend(
                get_next_term(new_set, new_start_value, matched_sets))

          # pop off the value and update the matches
          matched_sets[unmatched_keys[j]] = False
          curr_set.pop()

    return return_set

  # 1010 is the initial start value because it's the first 4-digit number that can possibly be cyclical with another 4-digit number
  only_set = get_next_term([], 1_010, {
      '3': False,
      '4': False,
      '5': False,
      '6': False,
      '7': False,
      '8': False
  })

  return sum(only_set)
