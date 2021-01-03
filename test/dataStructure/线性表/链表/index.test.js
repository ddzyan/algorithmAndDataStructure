const assert = require('assert');
const { partition, ListNode } = require('../../../../dataStructure/线性表/链表/q86分隔链表');

describe('链表', function () {
  it('q86分隔链表 test', function () {
    let headList = new ListNode(1);
    const head = headList;
    for (const data of [4, 3, 2, 5, 2]) {
      headList.next = new ListNode(data);
      headList = headList.next;
    }
    let res = partition(head, 3);

    for (const data of [1, 2, 2, 4, 3, 5]) {
      assert.strictEqual(res.val, data, '结果错误');
      res = res.next;
    }
  });
});
