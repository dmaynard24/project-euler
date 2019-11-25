import digits


def is_array_palindrome(arr):
  for i in range(0, int(arr.length / 2)):
    # left_index = i
    # right_index = len - 1 - i
    if (arr[i] != arr[arr.length - 1 - i]):
      return False
  return True


def is_palindrome(num):
  digits_reversed = digits.get_digits_reversed(num)
  return is_array_palindrome(digits_reversed)