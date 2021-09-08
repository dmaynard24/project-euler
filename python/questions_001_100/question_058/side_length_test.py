import unittest
from . import side_length


class TestGetSideLength(unittest.TestCase):
  def test_get_side_length(self):
    self.assertEqual(side_length.get_side_length(10), 26_241)


if __name__ == '__main__':
  unittest.main()
