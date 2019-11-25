import digits


def is_array_palindrome(arr):
  for i in range(0, int(arr.len() / 2)):
    # left_index = i
    # right_index = arr.len() - 1 - i
    if (arr[i] != arr[arr.len() - 1 - i]):
      return False
  return True


def is_palindrome(num):
  print(digits)
  return is_array_palindrome(digits.get_digits_reversed(num))


print(is_palindrome(181))