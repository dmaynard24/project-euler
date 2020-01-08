import math


def is_pandigital(num, exclude_zero):
  if type(num) == int:
    # if a number was passed as the argument
    digits = {}

    while num > 0:
      mod = num % 10
      if (exclude_zero == True and mod == 0) or digits.get(mod) is not None:
        return False

      digits[mod] = 1
      num = math.floor(num / 10)

    return True
  elif type(num) == str:
    # if a string was passed as the argument
    digits = list(num)
    digits.sort()

    if exclude_zero == True and digits[0] == '0':
      return False
  elif type(num) == list:
    # if a list was passed as the argument
    digits = num[:]
    digits.sort()

    if exclude_zero == True and digits[0] == 0:
      return False

  for i in range(1, len(digits)):
    if digits[i] == digits[i - 1]:
      return False

  return True
