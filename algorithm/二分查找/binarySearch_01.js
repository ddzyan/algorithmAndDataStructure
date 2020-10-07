/**
 * 找出数组中值等于指定值的数据
 * 1. 有序数组并且不存在重复元素
 * 2. 使用顺序表存储
 */
let count = 0;
const binarySearch = function (arr, low, hight, value) {
  count++;
  if (low > hight) return -1;

  const mind = Math.floor((low + hight) / 2);
  if (arr[mind] === value) {
    return mind;
  } else if (arr[mind] < value) {
    return binarySearch(arr, mind + 1, hight, value);
  } else {
    return binarySearch(arr, low, mind - 1, value);
  }
};

const search = function (arr, value) {
  const len = arr.length;
  const index = binarySearch(arr, 0, len - 1, value);
  return { index, count };
};

module.exports = search;
