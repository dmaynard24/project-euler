import unittest
from . import maximum_path_sum, triangle


class TestGetMaximumPathSum(unittest.TestCase):
  def test_get_maximum_path_sum(self):
    self.assertEqual(maximum_path_sum.get_maximum_path_sum(triangle.triangle),
                     1_074)


if __name__ == '__main__':
  unittest.main()
