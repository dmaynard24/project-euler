import unittest, square_root_digital_sum


class TestGetSquareRootDigitalSum(unittest.TestCase):
  def test_get_square_root_digital_sum(self):
    self.assertEqual(square_root_digital_sum.get_square_root_digital_sum(100),
                     40_886)


if __name__ == '__main__':
  unittest.main()
