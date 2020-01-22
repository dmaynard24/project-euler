import math


def get_period(num):
  sqrt = math.sqrt(num)
  m = math.floor(sqrt)

  if sqrt == m:
    return []

  integer = m
  n = sqrt + integer
  d = num - integer * integer
  fraction = n / d
  ms = []

  while d != 1:
    # get new m
    m = math.floor(fraction)
    # take reciprocal, then remove sqrt from denominator and simplify
    integer -= d * m
    integer *= -1
    n = sqrt + integer
    d = (num - integer * integer) / d
    fraction = n / d

    # store m
    ms.append(m)

  ms.append(math.floor(sqrt) * 2)

  return ms