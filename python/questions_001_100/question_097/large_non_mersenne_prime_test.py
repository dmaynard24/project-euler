import unittest
from . import large_non_mersenne_prime


class TestGetLastTenDigits(unittest.TestCase):
  def test_get_last_ten_digits(self):
    self.assertEqual(large_non_mersenne_prime.get_last_ten_digits(),
                     8739992577)


if __name__ == '__main__':
  unittest.main()
