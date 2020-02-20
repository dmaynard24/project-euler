# Coin partitions

# Problem 78
# Let p(n) represent the number of different ways in which n coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5)=7.

# OOOOO
# OOOO   O
# OOO   OO
# OOO   O   O
# OO   OO   O
# OO   O   O   O
# O   O   O   O   O
# Find the least value of n for which p(n) is divisible by one million.

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import shapes


def get_least_n(divisor):
  def get_generalized_pentagon(n):
    if n % 2 == 0:
      # when n is even, pass positive argument
      return int(shapes.get_nth_pentagon((n // 2) + 1))
    else:
      # when n is odd, pass negative argument
      return int(shapes.get_nth_pentagon(-(n // 2) - 1))

  def get_sign(i):
    # every two indices, swap signs
    if i % 4 < 2:
      return 1
    else:
      return -1

  partition_counts = [1]
  n = 1
  while True:
    partition_count = 0

    i = 0
    while True:
      generalized_pentagon = get_generalized_pentagon(i)

      if generalized_pentagon > n:
        break

      prev_partition_count = partition_counts[n - generalized_pentagon]
      partition_count += get_sign(i) * prev_partition_count
      i += 1

    partition_count %= divisor
    if partition_count == 0:
      return n
    partition_counts.append(partition_count)

    n += 1
