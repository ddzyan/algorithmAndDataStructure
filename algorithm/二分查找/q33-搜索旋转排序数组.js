/** 
 * 极客时间思考题
 * 题目
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。
 */

/** 分析 
1. 首选不能直接采用 indexOf,因为题目限制了时间复杂度必须是 O(log n)  ,而 indexOf 是 O(n)
2. 二分查找的时间复杂度为 O(log n) 可以考虑采用此思想解决

1. 找到螺旋数组有序区间，使用二分查找在此区间查找
2. 如果有序区间不存在，则继续在无须区间查找，按照重复1的方法
*/

/**
 *
 * @param {Array} arr
 * @param {value} targetValue
 * @returns {number} index
 */
const search = function (arr, targetValue) {
  if (!arr || arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;

  let mind;
  while (start <= end) {
    mind = (start + end) >> 1;
    if (arr[mind] === targetValue) return mind;
    if (arr[start] === targetValue) return start;
    if (arr[end] === targetValue) return end;

    // 查找有序区间
    if (arr[start] < arr[mind]) {
      // 有序空间在左侧
      // 判断 目标值是否在有序空间内
      if (arr[start] < targetValue && targetValue < arr[mind]) {
        end = mind - 1;
      } else {
        // 在右侧继续寻找
        start = mind + 1;
      }
    } else {
      // 有序空间在右侧
      //  判断 目标值是否在有序空间内
      if (targetValue > arr[mind] && arr[end] > targetValue) {
        start = mind + 1;
      } else {
        // 在左侧继续寻找
        end = mind - 1;
      }
    }
  }

  return -1;
};

module.exports = search;

let nums = [7, 8, 1, 2, 3, 4, 5, 6];
let target = 2;
console.log(search(nums, target));
