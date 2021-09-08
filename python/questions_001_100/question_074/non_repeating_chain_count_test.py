import unittest
from . import non_repeating_chain_count


class TestGetNonRepeatingChainCount(unittest.TestCase):
  def test_get_non_repeating_chain_count(self):
    self.assertEqual(
        non_repeating_chain_count.get_non_repeating_chain_count(1_000_000),
        402)


if __name__ == '__main__':
  unittest.main()
