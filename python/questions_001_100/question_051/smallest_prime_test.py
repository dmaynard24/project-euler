import unittest
from . import smallest_prime


class TestGetSmallestPrime(unittest.TestCase):
  def test_get_smallest_prime(self):
    self.assertEqual(smallest_prime.get_smallest_prime(8), 121_313)


if __name__ == '__main__':
  unittest.main()
