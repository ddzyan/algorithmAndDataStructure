const a = [3, 5, 4, 1, 8, 7];

// 将最小值往前移动
function sort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0; --j) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    /**
     * 往空出来的位置插入
     * 加一是因为在最后一次比对的时候 --j
     */
    arr[j + 1] = value;
  }
  return arr;
}

console.log(sort(a));
