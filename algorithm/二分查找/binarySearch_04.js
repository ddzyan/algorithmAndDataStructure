// 查找第一个大于等于给定值的元素

let count = 0;

const binarySearch = function (arr, low, height, value) {
  count++;
  if (low > height) return -1;

  const mind = (low + height) >> 1;
  if (arr[mind] >= value) {
    return arr[mind - 1] >= value ? binarySearch(arr, low, mind - 1, value) : mind;
  } else if (arr[mind] < value) {
    return binarySearch(arr, mind + 1, height, value);
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
