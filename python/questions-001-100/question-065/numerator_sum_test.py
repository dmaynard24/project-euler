import unittest, numerator_sum


class TestGetNumeratorSum(unittest.TestCase):
  def test_get_numerator_sum(self):
    self.assertEqual(numerator_sum.get_numerator_sum(10), 17)
    self.assertEqual(numerator_sum.get_numerator_sum(100), 272)


if __name__ == '__main__':
  unittest.main()
