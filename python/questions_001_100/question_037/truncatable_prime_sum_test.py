import unittest
from . import truncatable_prime_sum


class TestGetTruncatablePrimeSum(unittest.TestCase):
  def test_get_truncatable_prime_sum(self):
    self.assertEqual(truncatable_prime_sum.get_truncatable_prime_sum(),
                     748_317)


if __name__ == '__main__':
  unittest.main()
