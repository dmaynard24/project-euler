// Number letter counts

// Problem 17
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

function getNumberLetterCount(max) {
  const arr = x => Array.from(x),
    num = x => Number(x) || 0,
    str = x => String(x),
    isEmpty = xs => xs.length === 0,
    take = n => xs => xs.slice(0, n),
    drop = n => xs => xs.slice(n),
    reverse = xs => xs.slice(0).reverse(),
    comp = f => g => x => f(g(x)),
    not = x => !x,
    chunk = n => xs =>
      isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

  let numToWords = n => {
    let a = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ];

    let b = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ];

    let g = [
      '',
      'thousand',
      'million',
      'billion',
      'trillion',
      'quadrillion',
      'quintillion',
      'sextillion',
      'septillion',
      'octillion',
      'nonillion'
    ];

    let makeGroup = ([ones, tens, huns]) => {
      return [
        num(huns) === 0 ? '' : a[huns] + ' hundred ',
        num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + '-') || '',
        a[tens + ones] || a[ones]
      ].join('');
    };

    let thousand = (group, i) => (group === '' ? group : `${group} ${g[i]}`);

    let addAnd = words => {
      let wordsArr = words.split(' '),
        lastWord = wordsArr[wordsArr.length - 1];

      if (n > 99 && lastWord != 'hundred' && g.indexOf(lastWord) == -1) {
        wordsArr.splice(wordsArr.length - 1, 0, 'and');
        words = wordsArr.join(' ').trim();
      }

      return words;
    };

    if (typeof n === 'number') {
      return numToWords(String(n));
    } else if (n === '0') {
      return 'zero';
    } else {
      return addAnd(
        comp(chunk(3))(reverse)(arr(n))
          .map(makeGroup)
          .map(thousand)
          .filter(comp(not)(isEmpty))
          .reverse()
          .join(' ')
          .trim()
      );
    }
  };

  return [...Array(max).keys()]
    .map(i => i + 1)
    .reduce((acc, curr) => {
      return acc + numToWords(curr).replace(/( |-)/g, '').length;
    }, 0);
}

test('gets the number of letters used in all numbers from 1 to 1000 to be 21124', () => {
  expect(getNumberLetterCount(1000)).toBe(21124);
});
