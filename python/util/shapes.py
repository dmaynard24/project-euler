import math


def is_pentagonal(num, pentagons):
  if pentagons is not None and int(pentagons.keys()[-1]) >= num:
    return pentagons[num] == True

  return (math.sqrt(24 * num + 1) + 1) % 6 == 0


def get_shapes(limit, get_nth_shape_fn):
  shapes = {}
  n = 1
  term = 1

  while term < limit:
    shapes[term] = True
    term = get_nth_shape_fn(n)

    n += 1

  return shapes


get_nth_triangle = lambda n: (n / 2) * (n + 1)
get_nth_square = lambda n: n * n
get_nth_pentagon = lambda n: (n * (3 * n - 1)) / 2
get_nth_hexagon = lambda n: n * (2 * n - 1)
get_nth_heptagon = lambda n: (n * (5 * n - 3)) / 2
get_nth_octagon = lambda n: n * (3 * n - 2)

get_triangles = lambda limit: get_shapes(limit, get_nth_triangle)
get_squares = lambda limit: get_shapes(limit, get_nth_square)
get_pentagons = lambda limit: get_shapes(limit, get_nth_pentagon)
get_hexagons = lambda limit: get_shapes(limit, get_nth_hexagon)
get_heptagons = lambda limit: get_shapes(limit, get_nth_heptagon)
get_octagons = lambda limit: get_shapes(limit, get_nth_octagon)