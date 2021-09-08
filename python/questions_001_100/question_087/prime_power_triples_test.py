import unittest
from . import prime_power_triples


class TestGetPrimeSumCount(unittest.TestCase):
  def test_get_prime_sum_count(self):
    self.assertEqual(prime_power_triples.get_prime_sum_count(50), 4)
    self.assertEqual(prime_power_triples.get_prime_sum_count(50_000_000),
                     1_097_343)


if __name__ == '__main__':
  unittest.main()
