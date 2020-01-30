import unittest, ascii_sum


class TestGetAsciiSum(unittest.TestCase):
  def test_get_ascii_sum(self):
    self.assertEqual(ascii_sum.get_ascii_sum(), 129_448)


if __name__ == '__main__':
  unittest.main()
