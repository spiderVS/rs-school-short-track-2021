/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 2) return str;
  let str1 = `${str[0]}`;
  const arr = [];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      str1 += str[i];
    } else {
      arr.push(str1);
      str1 = str[i];
    }
  }
  arr.push(str1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 2) {
      str1 = `${(arr[i])}`;
      arr[i] = str1;
      str1 = '';
    } else {
      str1 = `${arr[i].length}${(arr[i])[0]}`;
      arr[i] = str1;
      str1 = '';
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
