# Champernowne's constant

# Problem 40
# An irrational decimal fraction is created by concatenating the positive integers:

# 0.123456789101112131415161718192021...

# It can be seen that the 12th digit of the fractional part is 1.

# If d_n represents the nth digit of the fractional part, find the value of the following expression.

# d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits


def get_constant_product():
  targets = [1, 10, 100, 1_000, 10_000, 100_000]
  limit = targets[len(targets) - 1]
  digit_count_objs = []
  length = 0
  digit_length = 1
  product = 1

  while length < limit:
    first_num = targets[digit_length - 1]
    digit_count = targets[digit_length] - first_num

    digit_count_obj = {}
    digit_count_obj['length'] = digit_length
    digit_count_obj['prev_length_sum'] = length
    digit_count_obj['first_num'] = first_num
    digit_count_objs.append(digit_count_obj)

    length += digit_length * digit_count
    digit_length += 1

  prev_i = 0
  for target in targets[2:]:
    dc = digit_count_objs[len(digit_count_objs) - 1]
    for i in range(prev_i, len(digit_count_objs)):
      if digit_count_objs[i]['prev_length_sum'] > target:
        dc = digit_count_objs[i - 1]
        prev_i = i
        break

    length_sum = dc['prev_length_sum']
    num = dc['first_num']
    if num < target:
      while length_sum < target:
        length_sum += dc['length']
        num += 1

    diff = length_sum - target
    product *= digits.get_digits_reversed(
        num)[diff] if diff > 0 else digits.get_digits(num)[0]

  return product
