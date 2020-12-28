/**
 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */
/**
 * @description 使用 hash表解决
 * 时间复杂度：O(nums.length)
 * 空间复杂度：O(nums.length)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const diff = target - num;
    if (numMap.has(diff)) {
      return [numMap.get(diff), i];
    }

    numMap.set(num, i);
  }

  return -1;
};

module.exports = twoSum;

console.log(twoSum([2, 7, 11, 15], 9));
