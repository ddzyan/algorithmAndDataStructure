const a = [3, 5, 4, 1, 8, 7];

function sort(arr) {
  // 总共有 length-1 个位置
  const len = arr.length;
  let index;
  for (let i = 0; i < len - 1; i++) {
    console.log(arr);
    index = i;
    // 找出最小元素,并且记录下标
    for (let j = i; j < len; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }
    }
    // 当前位置和最小元素进行调换
    const value = arr[index];
    arr[index] = arr[i];
    arr[i] = value;
  }
}
sort(a);
