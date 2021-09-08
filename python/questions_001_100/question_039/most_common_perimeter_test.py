import unittest
from . import most_common_perimeter


class TestGetMostCommonPerimeter(unittest.TestCase):
  def test_get_most_common_perimeter(self):
    self.assertEqual(most_common_perimeter.get_most_common_perimeter(1_000),
                     840)


if __name__ == '__main__':
  unittest.main()
