import unittest
from . import fraction_count


class TestGetPowerfulIntegerCount(unittest.TestCase):
  def test_get_fraction_count(self):
    self.assertEqual(fraction_count.get_fraction_count(10_000), 1_322)


if __name__ == '__main__':
  unittest.main()
