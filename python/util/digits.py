import math


def get_digits_reversed(num):
  if num < 10:
    return [num]

  digits = []
  while num > 0:
    digits.append(num % 10)
    num = num // 10

  return digits


def get_digits(num):
  digits = get_digits_reversed(num)
  digits.reverse()
  return digits


def get_digits_rotations(num):
  rotations = []
  num_digits = get_digits(num)
  length = len(num_digits)

  for i in range(1, length):
    rotation = 0
    for j in range(0, length):
      rotation *= 10
      rotation += num_digits[(i + j) % length]
    rotations.append(rotation)

  return rotations


def get_int_from_digits(digits):
  if len(digits) == 1:
    return digits[0]

  integer = 0
  for num in digits:
    integer *= 10
    integer += num

  return integer


def get_digit_count(num):
  return math.floor(math.log10(num) + 1)