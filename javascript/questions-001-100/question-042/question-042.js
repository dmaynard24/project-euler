// Coded triangle numbers

// Problem 42
// The nth term of the sequence of triangle numbers is given by, t_n = ½n(n+1); so the first ten triangle numbers are:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t_10. If the word value is a triangle number then we shall call the word a triangle word.

// Using the array of words containing nearly two-thousand common English words, how many are triangle words?

const words = require(`./words`);
const shapes = require(`../../util/shapes`);

function getTriangleWordCount() {
  const range = [...Array(27).keys()].slice(1);
  const letterValues = range.reduce((a, c) => {
    a[String.fromCharCode(c + 64)] = c;
    return a;
  }, []);
  const limit = words.sort((a, b) => b.length - a.length)[0].length * 26;
  const triangles = shapes.getTriangles(limit);

  function getWordValue(word) {
    return [...word].reduce((a, c) => a + letterValues[c], 0);
  }

  return words.filter((word) => triangles.has(getWordValue(word))).length;
}

module.exports = getTriangleWordCount;
