const arr = [1, 3, 7, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  // 此次循环表示末尾有序区间元素个数，减少第二次循环比较的次数
  for (let i = 0; i < len; i++) {
    let isSort = false;
    count++;
    // 这次循环才是重点，比较相邻元素，将大的项向后移动
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        isSort = true;
      }
    }
    if (!isSort) {
      break;
    }
  }
  console.log('count', count);
  return arr;
}

console.log(sort(arr));
