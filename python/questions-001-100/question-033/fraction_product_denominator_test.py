import unittest, fraction_product_denominator


class TestGetFractionProductDenominator(unittest.TestCase):
	def test_get_fraction_product_denominator(self):
		self.assertEqual(
			fraction_product_denominator.get_fraction_product_denominator(), 100)


if __name__ == '__main__':
	unittest.main()
