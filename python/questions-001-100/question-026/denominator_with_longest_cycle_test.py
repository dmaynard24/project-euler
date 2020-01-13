import unittest, denominator_with_longest_cycle


class TestGetDenominatorWithLongestCycle(unittest.TestCase):
  def test_get_denominator_with_longest_cycle(self):
    self.assertEqual(
        denominator_with_longest_cycle.get_denominator_with_longest_cycle(10),
        7)
    self.assertEqual(
        denominator_with_longest_cycle.get_denominator_with_longest_cycle(
            1_000), 983)


if __name__ == '__main__':
  unittest.main()
