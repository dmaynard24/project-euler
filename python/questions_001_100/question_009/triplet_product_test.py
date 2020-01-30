import unittest, triplet_product


class TestGetTripletProduct(unittest.TestCase):
  def test_get_triplet_product(self):
    self.assertEqual(triplet_product.get_triplet_product(1_000), 31_875_000)


if __name__ == '__main__':
  unittest.main()
