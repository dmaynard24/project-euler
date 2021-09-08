import unittest
from . import prime_sum


class TestGetPrimeSum(unittest.TestCase):
  def test_get_prime_sum(self):
    self.assertEqual(prime_sum.get_prime_sum(10), 17)
    self.assertEqual(prime_sum.get_prime_sum(2_000_000), 142_913_828_922)


if __name__ == '__main__':
  unittest.main()
