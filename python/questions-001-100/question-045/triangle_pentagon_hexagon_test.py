import unittest, triangle_pentagon_hexagon


class TestGetTrianglePentagonHexagon(unittest.TestCase):
  def test_get_triangle_pentagon_hexagon(self):
    self.assertEqual(triangle_pentagon_hexagon.get_triangle_pentagon_hexagon(),
                     1533776805)


if __name__ == '__main__':
  unittest.main()
