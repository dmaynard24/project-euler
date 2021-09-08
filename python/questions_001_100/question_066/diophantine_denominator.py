# Diophantine equation

# Problem 66
# Consider quadratic Diophantine equations of the form:

# x^2 – Dy^2 = 1

# For example, when D=13, the minimal solution in x is 649^2 – 13×180^2 = 1.

# It can be assumed that there are no solutions in positive integers when D is square.

# By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:

# 3^2 – 2×2^2 = 1
# 2^2 – 3×1^2 = 1
# 9^2 – 5×4^2 = 1
# 5^2 – 6×2^2 = 1
# 8^2 – 7×3^2 = 1

# Hence, by considering minimal solutions in x for D ≤ 7, the largest x is obtained when D=5.

# Find the value of D ≤ 1000 in minimal solutions of x for which the largest value of x is obtained.

from ...util import period
import math


def get_x_using_convergents(num):
  num_period = period.get_period(num)
  ns = [1, math.floor(math.sqrt(num))]
  ds = [0, 1]

  i = 2
  j = 2
  while True:
    # reset j if it ever gets out of the bounds of the period
    if j > len(num_period) + 1:
      j = 2
    m = num_period[j - 2]
    n = m * ns[i - 1] + ns[i - 2]
    d = m * ds[i - 1] + ds[i - 2]

    x_part = n**2
    y_part = d**2 * num

    # if it satisfies the equation, return numerator (equal to x)
    if x_part - y_part == 1:
      return n

    ns.append(n)
    ds.append(d)

    i += 1
    j += 1


def get_diophantine_denominator(max):
  largest_x = 0
  largest_d = None

  for d in range(2, max + 1):
    sqrt = math.sqrt(d)
    # check if d isn't square
    if math.floor(sqrt) != sqrt:
      # find minimal x using convergents
      x = get_x_using_convergents(d)
      if x > largest_x:
        largest_x = x
        largest_d = d

  return largest_d