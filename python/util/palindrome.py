from . import digits


def is_array_palindrome(arr):
  i = 0
  j = len(arr) - 1
  while i < j:
    if arr[i] != arr[j]:
      return False
    i += 1
    j -= 1

  return True


def is_palindrome(num):
  return is_array_palindrome(digits.get_digits_reversed(num))
