# Lychrel numbers

# Problem 55
# If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

# Not all numbers produce palindromes so quickly. For example,

# 349 + 943 = 1292,
# 1292 + 2921 = 4213
# 4213 + 3124 = 7337

# That is, 349 took three iterations to arrive at a palindrome.

# Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

# Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

# How many Lychrel numbers are there below ten-thousand?

from ...util import digits, palindrome


def get_lychrel_count(limit):
  count = 0
  reverse_sums_arrs = {}
  palindrome_sums = {}

  for i in range(1, limit):
    original_sum = i
    is_lychrel = True

    for j in range(50):
      sum_str = str(original_sum)

      # cache reverse sums
      if sum_str not in reverse_sums_arrs:
        reverse_sums_arrs[sum_str] = digits.get_digits_reversed(original_sum)

      # calculate reverse sum with cached value
      original_sum += digits.get_int_from_digits(
          reverse_sums_arrs.get(sum_str))

      # cache palindrome sums
      if sum_str not in palindrome_sums:
        palindrome_sums[sum_str] = palindrome.is_array_palindrome(
            digits.get_digits_reversed(original_sum))

      # check if palindrome with cached value
      if palindrome_sums.get(sum_str) == True:
        is_lychrel = False
        break

    if is_lychrel:
      count += 1

  return count