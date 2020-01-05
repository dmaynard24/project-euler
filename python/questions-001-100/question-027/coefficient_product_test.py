import unittest, coefficient_product


class TestGetCoefficientProduct(unittest.TestCase):
  def test_get_coefficient_product(self):
    self.assertEqual(coefficient_product.get_coefficient_product(), -59231)


if __name__ == '__main__':
  unittest.main()
