/**
 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description
 * 使用递归解决删除链表中的指定解决
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) {
    return head.next;
  }

  head.next = deleteNode(head.next, val);
  return head;
};

module.exports = deleteNode;
