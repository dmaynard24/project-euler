import unittest
from . import largest_concat


class TestGetLargestConcat(unittest.TestCase):
  def test_get_largest_concat(self):
    self.assertEqual(largest_concat.get_largest_concat(),
                     6_531_031_914_842_725)


if __name__ == '__main__':
  unittest.main()
