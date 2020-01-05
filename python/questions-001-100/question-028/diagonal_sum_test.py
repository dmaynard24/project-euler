import unittest, diagonal_sum


class TestGetDiagonalSum(unittest.TestCase):
  def test_get_diagonal_sum(self):
    self.assertEqual(diagonal_sum.get_diagonal_sum(5), 101)
    self.assertEqual(diagonal_sum.get_diagonal_sum(1001), 669171001)


if __name__ == '__main__':
  unittest.main()
