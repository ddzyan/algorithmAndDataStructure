/**
 * 问题：假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？
 * 分析，假设 n = 2：
 * 2 = 1 + 1
 * 2 = 2
 * n=3
 * 3 = 1 + 1 + 1
 * 3 = 1 + 2
 * 3 = 2 + 1
 * ...
 * 发现 f(n) = f(n-1) + f(n-2)
 * 因为每次可以跨1个或者2个台阶，则终止条件为：f(1) = 1 和 f(2) = 2;
 */

console.time('fn');
// 时间复杂度：O
function f(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return f(n - 1) + f(n - 2);
}

// 因为f()的算法存在重复计算计算，导致的空间和时间复杂度的提升，所以需要使用hashMap保存结果来避免
console.time('fn1');
let hashMap = new Map();
function f1(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (hashMap.has(n)) {
    return hashMap.get(n);
  }

  const res = f(n - 1) + f(n - 2);
  hashMap.set(n, res);
  return res;
}

// 根据打印输出的时间发现f1<f
