import math


def get_digits_reversed(num):
  if num < 10:
    return [num]
  digits = []
  while num > 0:
    digits.append(num % 10)
    num = int(num / 10)
  return digits.reverse()


def get_digits(num):
  return get_digits_reversed(num).reverse()


def get_digits_rotations(num):
  rotations = []
  num_digits = get_digits(num)
  length = num_digits.length
  for i in range(1, length):
    rotation = 0
    for j in range(0, length):
      rotation *= 10
      rotation += num_digits[(i + j) % length]
    rotations.append(rotation)
  return rotations


def get_int_from_digits(digits):
  if digits.length == 1:
    return digits[0]
  sum = 0
  for num in digits:
    sum *= 10
    sum += num
  return sum


def get_digit_count(num):
  return int(math.log10(num) + 1)