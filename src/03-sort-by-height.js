/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const resArr = [];
  const transArr = [];

  function compareNumbers(a, b) {
    return a - b;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      transArr.push(arr[i]);
    } else resArr[i] = arr[i];
  }

  transArr.sort(compareNumbers);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      resArr[i] = transArr.shift();
    }
  }

  return resArr;
}

module.exports = sortByHeight;
