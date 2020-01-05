# gets greatest common divisor of two numbers
def get_gcd(a, b):
  if b == 0:
    return a

  return get_gcd(b, a % b)
