import unittest
from . import sum_square_difference


class TestGetSumSquareDifference(unittest.TestCase):
  def test_get_sum_square_difference(self):
    self.assertEqual(sum_square_difference.get_sum_square_difference(100),
                     25_164_150)


if __name__ == '__main__':
  unittest.main()
