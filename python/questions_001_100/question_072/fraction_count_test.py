import unittest
from . import fraction_count


class TestGetFractionCount(unittest.TestCase):
  def test_get_fraction_count(self):
    self.assertEqual(fraction_count.get_fraction_count(8), 21)
    # self.assertEqual(fraction_count.get_fraction_count(1_000_000),
    #                  303_963_552_391)


if __name__ == '__main__':
  unittest.main()
