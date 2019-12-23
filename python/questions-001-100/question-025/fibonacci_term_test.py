import unittest, fibonacci_term


class TestGetFibonacciTermOne(unittest.TestCase):
	def test_get_fibonacci_term(self):
		self.assertEqual(fibonacci_term.get_fibonacci_term(2), 7)


class TestGetFibonacciTermTwo(unittest.TestCase):
	def test_get_fibonacci_term(self):
		self.assertEqual(fibonacci_term.get_fibonacci_term(3), 12)


class TestGetFibonacciTermThree(unittest.TestCase):
	def test_get_fibonacci_term(self):
		self.assertEqual(fibonacci_term.get_fibonacci_term(4), 17)


class TestGetFibonacciTermFour(unittest.TestCase):
	def test_get_fibonacci_term(self):
		self.assertEqual(fibonacci_term.get_fibonacci_term(1000), 4782)


if __name__ == '__main__':
	unittest.main()
