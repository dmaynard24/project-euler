# Reciprocal cycles

# Problem 26
# A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

# 1/2	= 	0.5
# 1/3	= 	0.(3)
# 1/4	= 	0.25
# 1/5	= 	0.2
# 1/6	= 	0.1(6)
# 1/7	= 	0.(142857)
# 1/8	= 	0.125
# 1/9	= 	0.(1)
# 1/10	= 	0.1
# Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

# Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

from ...util import primal
from decimal import *
import math


def get_denominator_with_longest_cycle(limit):
  denominator = 0
  largest_cycle_length = 0

  primes = primal.get_primes(limit - 1)
  prime_nums = primal.get_prime_numbers(primes)

  getcontext().prec = limit * 2

  for prime_num in prime_nums:
    quotient = str(Decimal(1) / Decimal(prime_num))
    quotient_decimal = quotient[quotient.index('.') + 1:]
    max_cycle_length = math.floor(len(quotient_decimal) / 2)
    cycle_length = get_cycle_length(quotient_decimal, max_cycle_length)

    if cycle_length >= largest_cycle_length:
      denominator = prime_num
      largest_cycle_length = cycle_length

  return denominator


def get_cycle_length(entire_value, max_cycle_length):
  for i in range(max_cycle_length):
    for length in range(1, max_cycle_length + 1):
      curr_set = entire_value[i:length]
      next_index = entire_value.find(curr_set, i + length)
      if next_index == -1:
        continue
      curr_set = entire_value[i:next_index]
      set_count = math.floor((len(entire_value) - i) / len(curr_set)) - 1
      is_cycle = False

      for j in range(set_count):
        next_set_index = next_index + j * len(curr_set)
        next_set = entire_value[next_set_index:next_set_index + len(curr_set)]
        is_cycle = (curr_set == next_set)

      if is_cycle:
        return len(curr_set)

  return 0
