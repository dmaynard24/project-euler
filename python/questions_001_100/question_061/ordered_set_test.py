import unittest
from . import ordered_set


class TestGetOrderedSet(unittest.TestCase):
  def test_get_ordered_set(self):
    self.assertEqual(ordered_set.get_ordered_set(), 28_684)


if __name__ == '__main__':
  unittest.main()
