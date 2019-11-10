# Multiples of 3 and 5

# Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.


def fizzbuzz(num):
  if num % 3 == 0 or num % 5 == 0:
    return True
  else:
    return False


def get_sum(max):
  ans = sum(filter(fizzbuzz, range(0, max)))
  return ans