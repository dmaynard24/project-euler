import unittest, sum


class TestGetSum(unittest.TestCase):
  def test_get_sum(self):
    self.assertEqual(sum.get_sum(1000), 233168)


if __name__ == '__main__':
  unittest.main()
