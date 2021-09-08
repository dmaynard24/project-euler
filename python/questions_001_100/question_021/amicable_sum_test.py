import unittest
from . import amicable_sum


class TestGetAmicableSum(unittest.TestCase):
  def test_get_amicable_sum(self):
    self.assertEqual(amicable_sum.get_amicable_sum(10_000), 31_626)


if __name__ == '__main__':
  unittest.main()
