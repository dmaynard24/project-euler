import unittest
import getsum


class TestGetSum(unittest.TestCase):
  def test_getsum(self):
    self.assertEqual(getsum.get_sum(4000000), 4613732)


if __name__ == '__main__':
  unittest.main()
