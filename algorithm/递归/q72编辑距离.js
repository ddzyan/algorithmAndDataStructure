/**
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符

思路：
如果两个单词相等则，word1[i]===word2[j]
否则需要进行插入，删除，替换操作
插入:word1[i]===word2[j-1]
删除:word1[i-1]===word2[j]
替换:word1[i-1]===word2[j-1]

递归存在大量重复操作，优化请查看动态规划相同题目
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  if (m === 0 || n === 0) {
    return Math.max(m, n);
  }

  if (word1.substr(-1) === word2.substr(-1)) {
    return minDistance(word1.substr(0, m - 1), word2.substr(0, n - 1));
  }

  // 不相等则使用插入，删除和替换方法进行处理，并且找出代价最少的操作+1
  return (
    1 +
    Math.min(
      minDistance(word1, word2.substr(0, n - 1)),
      minDistance(word1.substr(0, m - 1), word2),
      minDistance(word1.substr(0, m - 1), word2.substr(0, n - 1))
    )
  );
};

module.exports = minDistance;

console.log(minDistance('horse', 'ros'));
