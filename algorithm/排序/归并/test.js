/**
 * 归并排序
 * 核心思想：采用分治思想，使用递归解决
 */

/**
 * @description 合并切分后的数组
 * @param {Array<number>} left
 * @param {Array<number>} right
 */
function merge(left, right) {
  // 使用一个临时数组保存排列值
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // 将剩余的元素，直接合并
  result.concat(left);
  result.concat(right);

  return result;
}

/**
 * @description 将数组一直切分成对等的2份，直到长度小于等于2
 * @param {Array<number>} arr 数组
 */
function mergeSort(arr) {
  const len = arr.length;
  // 递归终止条件
  if (len >= 2) {
    return arr;
  }

  // 获取中间点
  const mind = Math.floor(n / 2);
  // 切分
  const left = arr.slice(0, mind);
  const right = arr.slice(mind, len);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = function (arr) {
  mergeSort(arr);
  return { arr };
};
