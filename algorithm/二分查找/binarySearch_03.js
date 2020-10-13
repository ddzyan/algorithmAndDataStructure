// 在有序数组中查找最后一个等于指定值的数值下标

let count = 0;

/**
 *
 * @param {Array} arr
 * @param {number} low
 * @param {number} height
 * @param {number} value
 */
const binarySearch = function (arr, low, height, value) {
  count++;
  if (low > height) return -1;

  const mind = (low + height) >> 1;
  if (arr[mind] == value) {
    return arr[mind + 1] === value ? binarySearch(arr, mind + 1, height, value) : mind;
  } else if (arr[mind] < value) {
    return binarySearch(arr, mind + 1, height, value);
  } else {
    return binarySearch(arr, low, mind - 1, value);
  }
};

/**
 *
 * @param {Array} arr
 * @param {number} value
 */
const search = function (arr, value) {
  const len = arr.length;

  const index = binarySearch(arr, 0, len - 1, value);
  return { index, count };
};

module.exports = search;
