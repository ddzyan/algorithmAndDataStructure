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
  const temporaryArray = [];
  /**
   * 1. 创建一个新的数组存放比较结果
   * 2. 左右数组比较，将小的数放到临时数组
   * 3. 将比较后数组剩余的数据直接插入到新数组尾部
   */

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      temporaryArray.push(left.shift());
    } else {
      temporaryArray.push(right.shift());
    }
  }

  while (left.length) {
    temporaryArray.push(left.shift());
  }

  while (right.length) {
    temporaryArray.push(right.shift());
  }
  return temporaryArray;
}

/**
 * @description 将数组一直切分成对等的2份，直到长度小于等于2
 * @param {Array<number>} arr 数组
 */
function mergeSort(arr) {
  /**
   * 1. 递归终止条件
   * 2. 寻找中间点，切分数组
   * 3. 合并递归后的结果
   */

  const len = arr.length;
  if (len < 2) return arr;

  const mind = Math.floor(len / 2);
  const left = arr.slice(0, mind);
  const right = arr.slice(mind, len);
  // 归并排序不是原地排序，返回的是一个新的数组
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = function (arr) {
  return { arr: mergeSort(arr) };
};
