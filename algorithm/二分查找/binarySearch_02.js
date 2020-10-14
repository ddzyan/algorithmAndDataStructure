// 在有序数组中查找第一个等于指定值的数值下标

let count = 0;

/**
 *
 * @param {Array} arr
 * @param {number} low
 * @param {number} hight
 * @param {number} value
 */
const binarySearch = function (arr, low, hight, value) {
  count++;
  if (low > hight) return -1;

  const mind = (low + hight) >> 1;
  if (arr[mind] === value) {
    return arr[mind - 1] === value ? binarySearch(arr, low, mind - 1, value) : mind;
  } else if (arr[mind] < value) {
    return binarySearch(arr, mind + 1, hight, value);
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
