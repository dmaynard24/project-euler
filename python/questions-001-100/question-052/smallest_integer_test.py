import unittest, smallest_integer


class TestGetSmallestInteger(unittest.TestCase):
  def test_get_smallest_integer(self):
    self.assertEqual(smallest_integer.get_smallest_integer(6), 142_857)


if __name__ == '__main__':
  unittest.main()
