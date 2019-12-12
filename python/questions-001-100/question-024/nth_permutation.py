# Lexicographic permutations

# Problem 24
# A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

# 012   021   102   120   201   210

# What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

import math


def get_nth_permutation(n):
  digits = list(range(10))
  target = n - 1
  perm = []

  for i in range(9, -1, -1):
    perms = factorialize(i)
    index = math.floor(target / perms)
    digit = digits[index]

    digits_index = digits.index(digit)

    perm.extend(digits[digits_index:digits_index + 1])
    del digits[digits_index:digits_index + 1]

    target %= perms

  return ''.join(map(str, perm))


def factorialize(num):
  val = 1
  while (num > 1):
    val *= num
    num -= 1

  return val


print(get_nth_permutation(1000000))
