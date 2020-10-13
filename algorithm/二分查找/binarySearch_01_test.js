// 二分查找的测试代码

let count = 0;

/**
 * @description 在有序不重复数组中查找指定元素，不存在则返回-1
 * @param {Array} array
 * @param {number} low
 * @param {number} hight
 * @param {number} targetValue
 * @returns {number} res
 */
const binarySearch = function (arr, low, hight, targetValue) {
  count++;
  if (low > hight) return -1;

  const mind = Math.floor((low + hight) / 2);
  if (arr[mind] === targetValue) {
    return mind;
  } else if (arr[mind] < targetValue) {
    return binarySearch(arr, mind + 1, hight, targetValue);
  } else {
    return binarySearch(arr, low, mind - 1, targetValue);
  }
};

/**
 *
 * @param {Array} arr
 * @param {number} targetValue
 */
const search = function (arr, targetValue) {
  const len = arr.length;

  const index = binarySearch(arr, 0, len - 1, targetValue);
  return { index, count };
};

module.exports = search;
