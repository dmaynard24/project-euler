import unittest, first_triangle_with_divisors


class TestGetFirstTriangleWithDivisorsOne(unittest.TestCase):
	def test_get_first_triangle_with_divisors(self):
		self.assertEqual(
			first_triangle_with_divisors.get_first_triangle_with_divisors(5), 28)
		self.assertEqual(
			first_triangle_with_divisors.get_first_triangle_with_divisors(500),
			76576500)


if __name__ == '__main__':
	unittest.main()
