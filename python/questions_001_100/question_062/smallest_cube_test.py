import unittest
from . import smallest_cube


class TestGetSmallestCube(unittest.TestCase):
  def test_get_smallest_cube(self):
    self.assertEqual(smallest_cube.get_smallest_cube(3), 41_063_625)
    self.assertEqual(smallest_cube.get_smallest_cube(5), 127_035_954_683)


if __name__ == '__main__':
  unittest.main()