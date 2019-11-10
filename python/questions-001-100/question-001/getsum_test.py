import unittest
import getsum


class TestGetSum(unittest.TestCase):
  def test_getsum(self):
    self.assertEqual(getsum.get_sum(1000), 233168)


if __name__ == '__main__':
  unittest.main()
