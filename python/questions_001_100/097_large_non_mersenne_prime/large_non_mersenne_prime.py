# Large non-Mersenne prime

# Problem 97
# The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2^6972593−1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2^p−1, have been found which contain more digits.

# However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433×2^7830457+1.

# Find the last ten digits of this prime number.


def get_last_ten_digits():
  mod = 10_000_000_000
  start = 2
  base = 2
  exp = 7_830_457
  for _ in range(1, exp):
    start *= base
    if start >= mod:
      start %= mod
  start *= 28_433
  start %= mod
  start += 1
  return start


print(get_last_ten_digits())  # 8739992577
