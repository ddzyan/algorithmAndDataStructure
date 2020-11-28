/**
 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

 

示例：

输入: words = ["time", "me", "bell"]
输出: 10
说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
*/

/**
 * @description 不是最优解
 * @param {Array<string>} words
 * @returns {Number}
 */
const minimumLengthEncoding = function (words) {
  // 将所有单词都保存在 set 中，利用 set 的特性去除重复的单词
  const wordSet = new Set(words);

  // 遍历每个单词的组成，判断是否存在 set 中
  for (const word of wordSet.values()) {
    for (let i = 1; i < word.length; i++) {
      const newWord = word.slice(i);
      wordSet.has(newWord) && wordSet.delete(newWord);
    }
  }

  let size = 0;
  // 遍历不重复的所有组成，并且在每个单词末尾添加 #的长度
  wordSet.forEach(word => (size += word.length + 1));
  return size;
};

module.exports = minimumLengthEncoding;

//console.log(minimumLengthEncoding(['time', 'me', 'bell']));
