import unittest
from . import substring_pandigital_sum


class TestGetSubstringPandigitalSum(unittest.TestCase):
  def test_get_substring_pandigital_sum(self):
    self.assertEqual(substring_pandigital_sum.get_substring_pandigital_sum(),
                     16_695_334_890)


if __name__ == '__main__':
  unittest.main()
