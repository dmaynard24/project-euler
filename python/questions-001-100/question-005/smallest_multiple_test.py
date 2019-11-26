import unittest, smallest_multiple


class TestGetSmallestMultipleOne(unittest.TestCase):
  def test_get_smallest_multiple_one(self):
    self.assertEqual(smallest_multiple.get_smallest_multiple(10), 2520)


class TestGetSmallestMultipleTwo(unittest.TestCase):
  def test_get_smallest_multiple_two(self):
    self.assertEqual(smallest_multiple.get_smallest_multiple(20), 232792560)


if __name__ == '__main__':
  unittest.main()
