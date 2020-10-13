// 二分查找的正确代码

/**
 * 找出数组中值等于指定值的数据
 * 1. 有序数组并且不存在重复元素
 * 2. 使用顺序表存储
 */
let count = 0;
/**
 *
 * @param {Array} arr 待查找待数组
 * @param {number} low 下限
 * @param {number} hight 上限
 * @param {number} value  目标值
 */
const binarySearch = function (arr, low, hight, value) {
  count++;
  if (low > hight) return -1;

  // 相加可能超出数组上限
  const mind = (low + hight) >> 1;
  if (arr[mind] === value) {
    return mind;
  } else if (arr[mind] < value) {
    return binarySearch(arr, mind + 1, hight, value);
  } else {
    return binarySearch(arr, 0, mind - 1, value);
  }
};

/**
 *
 * @param {Array} arr
 * @param {number} value
 */
const search = function (arr, value) {
  const len = arr.length;

  binarySearch(arr, 0, len - 1, value);
};

module.exports = search;
