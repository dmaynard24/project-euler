import unittest
from . import square_digit_chains


class TestGetChainCount(unittest.TestCase):
  def test_get_chain_count(self):
    self.assertEqual(square_digit_chains.get_chain_count(10_000_000),
                     8_581_146)


if __name__ == '__main__':
  unittest.main()
