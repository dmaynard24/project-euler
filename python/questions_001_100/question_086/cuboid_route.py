# Cuboid route

# Problem 86
# A spider, S, sits in one corner of a cuboid room, measuring 6 by 5 by 3, and a fly, F, sits in the opposite corner. By travelling on the surfaces of the room the shortest "straight line" distance from S to F is 10.

# However, there are up to three "shortest" path candidates for any given cuboid and the shortest route doesn't always have integer length.

# It can be shown that there are exactly 2060 distinct cuboids, ignoring rotations, with integer dimensions, up to a maximum size of M by M by M, for which the shortest route has integer length when M = 100. This is the least value of M for which the number of solutions first exceeds two thousand; the number of solutions when M = 99 is 1975.

# Find the least value of M such that the number of solutions first exceeds one million.

import math


def get_distinct_cuboid_count(max_m):
  cuboids = {}
  count = 0

  for w in range(1, max_m + 1):
    for l in range(w, max_m + 1):
      for h in range(l, max_m + 1):
        if (w, l, h) in cuboids:
          continue

        a = w
        b = l + h
        c = math.sqrt(a * a + b * b)

        a = w + h
        b = l
        second_c = math.sqrt(a * a + b * b)

        a = w + l
        b = h
        third_c = math.sqrt(a * a + b * b)

        shortest_route = min(c, second_c, third_c)
        if math.floor(shortest_route) == shortest_route:
          count += 1

        # cache all 6 rotations of the cuboid
        cuboids[(w, l, h)] = 1
        cuboids[(w, h, l)] = 1
        cuboids[(l, w, h)] = 1
        cuboids[(l, h, w)] = 1
        cuboids[(h, w, l)] = 1
        cuboids[(h, l, w)] = 1

  return count


def get_least_m(min_solution_count):
  m = 1
  while get_distinct_cuboid_count(m) < min_solution_count:
    m += 1
  return m


print(get_least_m(2000))  # 100
