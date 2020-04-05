# Cuboid route

# Problem 86
# A spider, S, sits in one corner of a cuboid room, measuring 6 by 5 by 3, and a fly, F, sits in the opposite corner. By travelling on the surfaces of the room the shortest "straight line" distance from S to F is 10.

# However, there are up to three "shortest" path candidates for any given cuboid and the shortest route doesn't always have integer length.

# It can be shown that there are exactly 2060 distinct cuboids, ignoring rotations, with integer dimensions, up to a maximum size of M by M by M, for which the shortest route has integer length when M = 100. This is the least value of M for which the number of solutions first exceeds two thousand; the number of solutions when M = 99 is 1975.

# Find the least value of M such that the number of solutions first exceeds one million.

import math


def get_distinct_cuboid_count(max_m):
  def get_c(a, b):
    return math.sqrt(a * a + b * b)

  count = 0

  for w in range(1, max_m + 1):
    for l in range(w, max_m + 1):
      for h in range(l, max_m + 1):
        first_c = get_c(w, l + h)
        second_c = get_c(w + h, l)
        third_c = get_c(w + l, h)
        shortest_route = min(first_c, second_c, third_c)
        if math.floor(shortest_route) == shortest_route:
          count += 1

  return count


def get_least_m(min_solution_count):
  m = 1
  while get_distinct_cuboid_count(m) < min_solution_count:
    m += 1
  return m


print(get_least_m(2_000))  # 100
# print(get_least_m(1_000_000))  # ?
