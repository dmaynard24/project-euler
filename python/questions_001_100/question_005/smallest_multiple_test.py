import unittest
from . import smallest_multiple


class TestGetSmallestMultiple(unittest.TestCase):
  def test_get_smallest_multiple(self):
    self.assertEqual(smallest_multiple.get_smallest_multiple(10), 2_520)
    self.assertEqual(smallest_multiple.get_smallest_multiple(20), 232_792_560)


if __name__ == '__main__':
  unittest.main()
