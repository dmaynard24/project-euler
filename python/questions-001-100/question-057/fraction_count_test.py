import unittest, fraction_count


class TestGetFractionCount(unittest.TestCase):
  def test_get_fraction_count(self):
    self.assertEqual(fraction_count.get_fraction_count(7), 0)
    self.assertEqual(fraction_count.get_fraction_count(8), 1)
    self.assertEqual(fraction_count.get_fraction_count(1_000), 153)


if __name__ == '__main__':
  unittest.main()
