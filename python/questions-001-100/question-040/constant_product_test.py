import unittest, constant_product


class TestGetConstantProduct(unittest.TestCase):
  def test_get_constant_product(self):
    self.assertEqual(constant_product.get_constant_product(), 210)


if __name__ == '__main__':
  unittest.main()
