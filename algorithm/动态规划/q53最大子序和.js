/**
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

/**
 * @description 动态规划解法
 * sum 负数代表对下一轮相加没有益处，所以可以直接进行替换
 * sum 正数代表对下一轮相加有益处，所以可以需要相加
 *
 * 下一个状态只依赖上一个状态
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let ans = nums[0];

  for (const num of nums) {
    if (sum > 0) {
      // 对结果有益则相加
      sum += num;
    } else {
      // 对结果无益则替换
      sum = num;
    }
    ans = Math.max(ans, sum);
  }

  return ans;
};

module.exports = maxSubArray;

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
