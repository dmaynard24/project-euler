import unittest, pentagonal_difference


class TestGetPentagonalDifference(unittest.TestCase):
  def test_get_pentagonal_difference(self):
    self.assertEqual(pentagonal_difference.get_pentagonal_difference(),
                     5482660)


if __name__ == '__main__':
  unittest.main()
