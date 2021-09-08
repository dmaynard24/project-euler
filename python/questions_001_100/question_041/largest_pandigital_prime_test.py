import unittest
from . import largest_pandigital_prime


class TestGetLargestPandigitalPrime(unittest.TestCase):
  def test_get_largest_pandigital_prime(self):
    self.assertEqual(largest_pandigital_prime.get_largest_pandigital_prime(),
                     7_652_413)


if __name__ == '__main__':
  unittest.main()
