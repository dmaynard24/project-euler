import unittest, fraction_count


class TestGetFractionCount(unittest.TestCase):
  def test_get_fraction_count(self):
    self.assertEqual(fraction_count.get_fraction_count(8), 3)
    self.assertEqual(fraction_count.get_fraction_count(12_000), 7_295_372)


if __name__ == '__main__':
  unittest.main()
