/**
 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；
并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 */
/**
 * @description 贪心算法
 * 将饼干和胃口从小到大进行排序，然后先将小的饼干优先给予胃口小的学生
 * 时间复杂度：排序 O(nlogm,mlogn),遍历复杂度O(m+n)
 * @param {number[]} g 每个孩子的胃口
 * @param {number[]} s 每个饼干的大小
 * @return {number} 最大能满足的孩子数量
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
    }
    j++;
  }

  return i;
};

module.exports = findContentChildren;

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
