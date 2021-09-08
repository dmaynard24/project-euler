import unittest
from . import prime_summation_count


class TestGetPrimeSummationCount(unittest.TestCase):
  def test_get_prime_summation_count(self):
    self.assertEqual(prime_summation_count.get_prime_summation_count(5), 10)
    self.assertEqual(prime_summation_count.get_prime_summation_count(5_000),
                     71)


if __name__ == '__main__':
  unittest.main()
