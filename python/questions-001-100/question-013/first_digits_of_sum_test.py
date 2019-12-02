import unittest, first_digits_of_sum


class TestGetFirstDigitsOfSum(unittest.TestCase):
  def test_get_first_digits_of_sum(self):
    self.assertEqual(first_digits_of_sum.get_first_digits_of_sum(10),
                     5537376230)


if __name__ == '__main__':
  unittest.main()