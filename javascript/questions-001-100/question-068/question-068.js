// Magic 5-gon ring

// Problem 68
// Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.

// Working clockwise, and starting from the group of three with the numerically lowest external node (4,3,2 in this example), each solution can be described uniquely. For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.

// It is possible to complete the ring with four different totals: 9, 10, 11, and 12. There are eight solutions in total.

// Total	Solution Set
// 9	    4,2,3; 5,3,1; 6,1,2
// 9	    4,3,2; 6,2,1; 5,1,3
// 10	    2,3,5; 4,5,1; 6,1,3
// 10	    2,5,3; 6,3,1; 4,1,5
// 11	    1,4,6; 3,6,2; 5,2,4
// 11	    1,6,4; 5,4,2; 3,2,6
// 12	    1,5,6; 2,6,4; 3,4,5
// 12	    1,6,5; 3,5,4; 2,4,6
// By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.

// Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings. What is the maximum 16-digit string for a "magic" 5-gon ring?

const now = require('performance-now');

function getLargestConcat(gonCount) {
  let possibleValues = [...Array(gonCount * 2 + 1).keys()].slice(1),
    possibleSubsets = getAllPerms(possibleValues, 3).reduce((a, c) => {
      let setSum = c.reduce((a, c) => a + c);
      a.push({
        set: c,
        sum: setSum
      });
      return a;
    }, []),
    cachedSubsets = new Map(),
    solutionSet = [];

  function getNextSubset(prevIndex, set) {
    for (let i = 0; i < possibleSubsets.length; i++) {
      let currSubset = possibleSubsets[i].set;

      // always check for cached
      if (cachedSubsets.has(currSubset.join(''))) {
        continue;
      }

      if (prevIndex == -1) {
        // reset the edgeVals and setSum on the first set only
        edgeVals = new Map();
        setSum = possibleSubsets[i].sum;
      } else {
        // check continue cases on all except first
        if (
          possibleSubsets[i].sum != setSum ||
          currSubset[1] != set[prevIndex][2] ||
          edgeVals.has(currSubset[0]) ||
          edgeVals.has(currSubset[2]) ||
          cachedSubsets.has(currSubset.join(''))
        ) {
          continue;
        }
      }

      // check on only the last set
      if (prevIndex == gonCount - 2) {
        if (currSubset[2] != set[0][1]) {
          continue;
        }
      }

      // store on all
      set.push(currSubset);

      // immediately after storing, check exit condition
      if (set.length == gonCount) {
        // look for smallest subset in order to rotate
        let smallestSetIndex = 0,
          smallestSetVal = possibleValues.length + 1;
        for (let i = 0; i < set.length; i++) {
          let subset = set[i];
          if (subset[0] == 1) {
            smallestSetIndex = i;
            break;
          } else if (subset[0] < smallestSetVal) {
            smallestSetIndex = i;
            smallestSetVal = subset[0];
          }
        }

        // rotate based on the index of the smallest subset
        let rotatedSet = [];
        if (smallestSetIndex != 0) {
          rotatedSet = [set[smallestSetIndex]];
          for (let i = 1; i < gonCount; i++) {
            rotatedSet[i] = set[(smallestSetIndex + i) % gonCount];
          }
        } else {
          // set was already in correct order
          rotatedSet = set;
        }

        // cache subsets to avoid duplicates later
        rotatedSet.forEach(subset => {
          cachedSubsets.set(subset.join(''), true);
        });

        // store rotated set
        solutionSet.push([...rotatedSet]);
      }

      // cache edge vals
      edgeVals.set(currSubset[0], true);
      edgeVals.set(currSubset[2], true);

      getNextSubset(prevIndex + 1, set);

      // be sure to pop and remove cached edgeVals
      edgeVals.delete(set[set.length - 1][0]);
      edgeVals.delete(set[set.length - 1][2]);
      set.pop();
    }
  }

  let edgeVals = new Map(),
    setSum = possibleSubsets[0].sum;

  getNextSubset(-1, []);

  // solutionSet.forEach(ss => {
  //   console.log(ss[0].join(''), ss[1].join(''), ss[2].join(''), ss[3].join(''), ss[4].join(''));
  // });
  return solutionSet.length;
}

function getAllPerms(arr, pick) {
  return getCombos(arr, pick).reduce((a, c) => {
    a = a.concat(getPerms(c));
    return a;
  }, []);
}

function getCombos(arr, pick) {
  if (!pick) {
    return [[]];
  }
  if (!arr.length) {
    return [];
  }

  let first = arr[0],
    rest = arr.slice(1);

  return getCombos(rest, pick - 1)
    .map(combo => {
      return [first].concat(combo);
    })
    .concat(getCombos(rest, pick));
}

// always picks a.length
function getPerms(a) {
  if (a.length < 2) {
    return [a];
  }

  var c,
    d,
    b = [];
  for (c = 0; c < a.length; c++) {
    var e = a.splice(c, 1),
      f = getPerms(a);
    for (d = 0; d < f.length; d++) {
      b.push(e.concat(f[d]));
    }
    a.splice(c, 0, e[0]);
  }
  return b;
}

const time0 = now();
console.log(getLargestConcat(5));
const time1 = now();
console.log(`call took ${time1 - time0} milliseconds`);
