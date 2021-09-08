import unittest
from . import two_pound_combination_count


class TestGetTwoPoundCombinationCount(unittest.TestCase):
  def test_get_two_pound_combination_count(self):
    self.assertEqual(
        two_pound_combination_count.get_two_pound_combination_count(), 73_682)


if __name__ == '__main__':
  unittest.main()
