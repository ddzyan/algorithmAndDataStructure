/* 给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例：

输入：head = 1->4->3->2->5->2, x = 3
输出：1->2->2->4->3->5 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smallListNode = new ListNode(0);
  const smallHead = smallListNode;
  let greaterListNode = new ListNode(0);
  const greaterHead = greaterListNode;

  while (head !== null) {
    if (head.val >= x) {
      greaterListNode.next = head;
      greaterListNode = greaterListNode.next;
    } else {
      smallListNode.next = head;
      smallListNode = smallListNode.next;
    }
    head = head.next;
  }

  greaterListNode.next = null;

  smallListNode.next = greaterHead.next;

  return smallHead.next;
};

module.exports = {
  partition,
  ListNode,
};
