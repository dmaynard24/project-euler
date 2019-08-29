// Coded triangle numbers

// Problem 42
// The nth term of the sequence of triangle numbers is given by, t_n = ½n(n+1); so the first ten triangle numbers are:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t_10. If the word value is a triangle number then we shall call the word a triangle word.

// Using the array of words containing nearly two-thousand common English words, how many are triangle words?

const words = require('./words');

function getTriangleWordCount() {
  let values = [...Array(27).keys()].slice(1),
    letterValues = values.reduce((a, c) => {
      a[String.fromCharCode(c + 64)] = c;
      return a;
    }, []),
    limit = words.sort((a, b) => b.length - a.length)[0].length * 26,
    triangles = getTriangles(limit);

  function getWordValue(word) {
    return [...word].reduce((a, c) => {
      return a + letterValues[c];
    }, 0);
  }

  return words.reduce((a, c) => (a += triangles[getWordValue(c)] ? 1 : 0), 0);
}

function getTriangles(limit) {
  let triangles = [],
    n = 1,
    term = 1;

  while (term < limit) {
    term = (n / 2) * (n + 1);
    triangles[term] = true;

    n++;
  }

  return triangles;
}

module.exports = getTriangleWordCount;
