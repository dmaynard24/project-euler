import unittest, first_triangle_with_divisors


class TestGetFirstTriangleWithDivisorsOne(unittest.TestCase):
  def test_get_first_triangle_with_divisors_one(self):
    self.assertEqual(
        first_triangle_with_divisors.get_first_triangle_with_divisors(5), 28)


class TestGetFirstTriangleWithDivisorsTwo(unittest.TestCase):
  def test_get_first_triangle_with_divisors_two(self):
    self.assertEqual(
        first_triangle_with_divisors.get_first_triangle_with_divisors(500),
        76576500)


if __name__ == '__main__':
  unittest.main()
