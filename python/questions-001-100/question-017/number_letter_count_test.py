import unittest, number_letter_count


class TestGetNumberLetterCountOne(unittest.TestCase):
  def test_get_number_letter_count_one(self):
    self.assertEqual(number_letter_count.get_number_letter_count(5), 19)


class TestGetNumberLetterCountTwo(unittest.TestCase):
  def test_get_number_letter_count_two(self):
    self.assertEqual(number_letter_count.get_number_letter_count(1000), 21124)


if __name__ == '__main__':
  unittest.main()