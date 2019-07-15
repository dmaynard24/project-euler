// Longest Collatz sequence

// Problem 14
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const time0 = performance.now();

function getLargestCollatzSequence(limit) {
  let start = 2,
    largestSequenceStart = 2,
    largestCount = 1;
  while (start < limit) {
    let term = start,
      count = 1;
    while (term != 1) {
      if (term % 2 == 0) {
        term /= 2;
      } else {
        term = 3 * term + 1;
      }
      count++;
    }
    if (count > largestCount) {
      largestCount = count;
      largestSequenceStart = start;
    }
    start++;
  }
  return largestSequenceStart;
}

test('gets the starting number under one million that produces the longest Collatz chain to be 837799', () => {
  expect(getLargestCollatzSequence(1000000)).toBe(837799);
});
