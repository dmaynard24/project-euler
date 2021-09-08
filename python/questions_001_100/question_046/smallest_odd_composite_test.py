import unittest
from . import smallest_odd_composite


class TestGetSmallestOddComposite(unittest.TestCase):
  def test_get_smallest_odd_composite(self):
    self.assertEqual(smallest_odd_composite.get_smallest_odd_composite(),
                     5_777)


if __name__ == '__main__':
  unittest.main()
