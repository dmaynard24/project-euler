import unittest
from . import triangle_pentagon_hexagon


class TestGetTrianglePentagonHexagon(unittest.TestCase):
  def test_get_triangle_pentagon_hexagon(self):
    self.assertEqual(triangle_pentagon_hexagon.get_triangle_pentagon_hexagon(),
                     1_533_776_805)


if __name__ == '__main__':
  unittest.main()
