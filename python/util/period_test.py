import unittest, period


class TestGetPeriod(unittest.TestCase):
  def test_get_period(self):
    self.assertEqual(period.get_period(2), [2])
    self.assertEqual(period.get_period(13), [1, 1, 1, 1, 6])
    self.assertEqual(period.get_period(23), [1, 3, 1, 8])
    self.assertEqual(period.get_period(919), [3, 5, 1, 2, 1, 2, 1, 1, 1, 2, 3, 1, 19, 2, 3, 1, 1, 4, 9, 1, 7, 1, 3, 6, 2, 11, 1, 1, 1, 29, 1, 1, 1, 11, 2, 6, 3, 1, 7, 1, 9, 4, 1, 1, 3, 2, 19, 1, 3, 2, 1, 1, 1, 2, 1, 2, 1, 5, 3, 60])


if __name__ == '__main__':
  unittest.main()
