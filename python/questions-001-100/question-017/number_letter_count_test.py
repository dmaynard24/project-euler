import unittest, number_letter_count


class TestGetNumberLetterCount(unittest.TestCase):
	def test_get_number_letter_count(self):
		self.assertEqual(number_letter_count.get_number_letter_count(5), 19)
		self.assertEqual(number_letter_count.get_number_letter_count(1000), 21124)


if __name__ == '__main__':
	unittest.main()
