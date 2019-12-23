import unittest, route_count


class TestGetRouteCountOne(unittest.TestCase):
	def test_get_route_count(self):
		self.assertEqual(route_count.get_route_count(2), 6)
		self.assertEqual(route_count.get_route_count(20), 137846528820)


if __name__ == '__main__':
	unittest.main()
