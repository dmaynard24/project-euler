import unittest, route_count


class TestGetRouteCount(unittest.TestCase):
  def test_get_route_count(self):
    self.assertEqual(route_count.get_route_count(2), 6)
    self.assertEqual(route_count.get_route_count(20), 137_846_528_820)


if __name__ == '__main__':
  unittest.main()
