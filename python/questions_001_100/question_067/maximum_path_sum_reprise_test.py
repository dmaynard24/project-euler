import unittest
from ..question_018 import maximum_path_sum
from . import triangle


class TestGetMaximumPathSum(unittest.TestCase):
  def test_get_maximum_path_sum(self):
    self.assertEqual(maximum_path_sum.get_maximum_path_sum(triangle.triangle),
                     7_273)


if __name__ == '__main__':
  unittest.main()
