import unittest, counting_rectangles


class TestGetClosestArea(unittest.TestCase):
  def test_get_closest_area(self):
    self.assertEqual(counting_rectangles.get_closest_area(18), 6)
    self.assertEqual(counting_rectangles.get_closest_area(60), 12)
    self.assertEqual(counting_rectangles.get_closest_area(2_000_000), 2_772)


if __name__ == '__main__':
  unittest.main()
