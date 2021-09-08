# Prime summations

# Problem 77
# It is possible to write ten as the sum of primes in exactly five different ways:

# 7 + 3
# 5 + 5
# 5 + 3 + 2
# 3 + 3 + 2 + 2
# 2 + 2 + 2 + 2 + 2

# What is the first value which can be written as the sum of primes in over five thousand different ways?

from ...util import primal


def get_prime_summation_count(combo_count):
  primes = primal.get_primes(100)
  prime_nums_reversed = primal.get_prime_numbers(primes)
  prime_nums_reversed.reverse()

  def get_count(remaining, index):
    if remaining == 0:
      return 1

    count = 0
    for i in range(index, len(prime_nums_reversed)):
      next_term = prime_nums_reversed[i]
      new_remaining = remaining - next_term
      next_index = i if new_remaining >= next_term else i + 1
      count += get_count(new_remaining, next_index)

    return count

  prime_sum = 10
  count = 5
  first_index = None
  while count < combo_count:
    prime_sum += 1

    for i in range(len(prime_nums_reversed) - 1, -1, -1):
      if prime_nums_reversed[i] >= prime_sum:
        first_index = i + 1
        break

    count = get_count(prime_sum, first_index)

  return prime_sum