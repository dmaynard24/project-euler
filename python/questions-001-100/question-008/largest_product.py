# Largest product in a series

# Problem 8
# The four adjacent digits in the 1000-digit number below that have the greatest product are 9 × 9 × 8 × 9 = 5832.

# Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

import series


def get_largest_product(digits):
  start = 0
  end = digits
  nums = list(map(int, series.series.replace('\n', '')))
  largest = 0
  product = None

  while end < len(nums) + 1:
    zero_at = nums.index(0, start)
    while zero_at + 1 < len(nums) - digits and zero_at - start < digits:
      start = zero_at + 1
      end = start + digits
      zero_at = nums.index(0, start)
      product = None

    if product is None:
      product = 1
      for i in range(start, end):
        product *= nums[i]
    else:
      product = (product / nums[start - 1]) * nums[end - 1]
    largest = max(product, largest)

    start += 1
    end += 1

  return largest