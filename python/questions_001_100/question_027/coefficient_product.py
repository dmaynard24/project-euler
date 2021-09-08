# Quadratic primes

# Problem 27
# Euler discovered the remarkable quadratic formula:

# n^2 + n + 41
# It turns out that the formula will produce 40 primes for the consecutive integer values 0 ≤ n ≤ 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly divisible by 41.

# The incredible formula n^2 − 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 ≤ n ≤ 79. The product of the coefficients, −79 and 1601, is −126479.

# Considering quadratics of the form:

# n^2 + an + b, where |a| < 1000 and |b| ≤ 1000

# where |n| is the modulus/absolute value of n
# e.g. |11| = 11 and |−4| = 4
# Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

from ...util import primal


def get_coefficient_product():
  def get_consecutive_prime_count(a, b):
    all_prime = True
    n = 0

    while all_prime:
      value = n * n + a * n + b
      all_prime = value > -1 and primal.is_prime(value, primes)
      n += 1

    return n

  primes = primal.get_primes(1_000)
  prime_nums = primal.get_prime_numbers(primes)
  largest_count = 0
  largest_product = 0

  negatives = [prime_num * -1 for prime_num in prime_nums]
  primes_range = negatives + prime_nums

  for a in primes_range:
    for b in primes_range:
      prime_count = get_consecutive_prime_count(a, b)
      if prime_count > largest_count:
        largest_count = prime_count
        largest_product = a * b

  return largest_product
