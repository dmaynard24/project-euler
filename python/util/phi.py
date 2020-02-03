from . import primal


def get_phi(val, primes):
  if primal.is_prime(val, primes):
    return val - 1

  prime_factors = primal.get_prime_factors(val, primes)
  multiplier = 1
  for prime_factor in prime_factors:
    multiplier *= 1 - 1 / prime_factor['base']

  count = val * multiplier

  return count