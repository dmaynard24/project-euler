# Square digit chains

# Problem 92
# A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

# For example,

# 44 → 32 → 13 → 10 → 1 → 1
# 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

# Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

# How many starting numbers below ten million will arrive at 89?

import sys, os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
sys.path.append(root_dir)

from python.util import digits


def get_chain_count(limit):
  chain_links = {}
  count = 0

  start = 2
  while start < limit:
    chain = []
    i = start
    while i != 1 and i != 89 and i not in chain_links:
      i_digits = digits.get_digits(i)
      i_digits_squared_sum = 0
      for digit in i_digits:
        i_digits_squared_sum += digit**2
      i = i_digits_squared_sum
      chain.append(i)

    if i == 1 or (i in chain_links and chain_links[i] == 1):
      for link in chain:
        chain_links[link] = 1
    else:  # must be 89 or a link in a chain leading to 89
      for link in chain:
        chain_links[link] = 89
      count += 1

    start += 1

  return count


print(get_chain_count(10_000_000))  # 8581146
