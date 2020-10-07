/**
 * 冒泡排序
 * 核心：从头开始比较相邻元素，将大的元素向后移动。越小的元素会慢慢的浮现到数组头部，像碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样
 *
 * @param {Array} arr
 */
function sort(arr) {
  const len = arr.length;
  let count = 0;

  let sort = false;
  // 末尾有序空间大小
  for (let i = 0; i < len; i++) {
    sort = false;
    for (let j = 0; j < len - i - 1; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sort = true;
      }
    }

    if (!sort) break;
  }

  // 原地排序，没有产生新数据
  return { arr, count };
}

module.exports = sort;
