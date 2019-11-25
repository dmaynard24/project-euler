from . import digits


def is_array_palindrome(arr):
  for i in range(0, int(len(arr) / 2)):
    # left_index = i
    # right_index = len(arr) - 1 - i
    if (arr[i] != arr[len(arr) - 1 - i]):
      return False
  return True


def is_palindrome(num):
  return is_array_palindrome(digits.get_digits_reversed(num))