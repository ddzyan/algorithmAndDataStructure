/**
 在需要搜索的数组末尾设置一个哨兵，来防止数组越界并且减少判断
 */

/**
 * @description
 * 最终目的是为了减少传统搜索在循环中添加的一个判断
 * while (i < n) {
 *  if (a[i] == key)
 *  { return i; }
 * ++i;
 * }
 * @param {Array} list
 * @param {number} key
 */
const findKey = function (list, key) {
  const len = list.length;

  if (len <= 0) {
    return -1;
  }

  if (list[len - 1] === key) {
    return len - 1;
  }

  const temp = list[n - 1];
  list[n - 1] = key;

  let i = 0;
  while (list[i] !== key) {
    i++;
  }

  list[n - 1] = temp;

  if (i === len - 1) {
    return -1;
  } else {
    return i;
  }
};
