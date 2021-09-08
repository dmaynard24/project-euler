import unittest
from . import non_abundant_sum


class TestGetNonAbundantSum(unittest.TestCase):
  def test_get_non_abundant_sum(self):
    self.assertEqual(non_abundant_sum.get_non_abundant_sum(), 4_179_871)


if __name__ == '__main__':
  unittest.main()
