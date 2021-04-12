/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  const mid = Math.floor(start + (end - start) / 2);

  while (!(start >= end)) {
    if (array[start] === value) return start;
    if (array[mid] === value) return mid;
    if (array[end] === value) return end;
    if (array[mid] > value) end = mid;
    else start = mid;
  }
  return -1;
}

module.exports = findIndex;
