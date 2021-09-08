import unittest
from . import pandigital_sum


class TestGetPandigitalSum(unittest.TestCase):
  def test_get_pandigital_sum(self):
    self.assertEqual(pandigital_sum.get_pandigital_sum(), 45_228)


if __name__ == '__main__':
  unittest.main()
