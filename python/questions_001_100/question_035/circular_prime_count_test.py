import unittest
from . import circular_prime_count


class TestGetCircularPrimeCount(unittest.TestCase):
  def test_get_circular_prime_count(self):
    self.assertEqual(circular_prime_count.get_circular_prime_count(100), 13)
    self.assertEqual(circular_prime_count.get_circular_prime_count(1_000_000),
                     55)


if __name__ == '__main__':
  unittest.main()
