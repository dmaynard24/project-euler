import unittest, smallest_multiple


class TestGetSmallestMultipleTen(unittest.TestCase):
  def test_get_smallest_multiple_ten(self):
    self.assertEqual(smallest_multiple.get_smallest_multiple(10), 2520)


class TestGetSmallestMultipleTwenty(unittest.TestCase):
  def test_get_smallest_multiple_twenty(self):
    self.assertEqual(smallest_multiple.get_smallest_multiple(20), 232792560)


if __name__ == '__main__':
  unittest.main()
