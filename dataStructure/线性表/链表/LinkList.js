function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * 实现单向链表
 */
class LinkList {
  constructor() {
    this._header = new Node('this is header');
    this._size = 0;
  }

  // 如果链表为空则返回true
  empty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }

  // 将链表清空
  clear() {
    let currNode = this.getHeaderNode();
    while (currNode.next !== null) {
      let tmpNode = currNode.next;
      currNode = undefined;
      currNode = tmpNode;
    }
    this.getHeaderNode().next = null;
    this._size = 0;
  }

  // 获得链表头部节点
  getHeaderNode() {
    return this._header;
  }

  // 获得链表末尾节点
  getLastNode() {
    let currNode = this.getHeaderNode();
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 返回链表指定位置的val
  getValOfIndex(index) {
    if (index < 1 || index > this._size) {
      throw new RangeError('超出范围');
    }

    let currNode = this.getHeaderNode().next;

    let i = 1;
    while (currNode && i !== index) {
      currNode = currNode.next;
      i++;
    }

    if (!currNode) {
      return null;
    }

    return currNode.val;
  }

  // 遍历链表
  display() {
    let currNode = this.getHeaderNode().next;
    while (currNode) {
      console.log(currNode.val);
      currNode = currNode.next;
    }
  }

  // 删除指定位置的元素
  delete(i, node) {
    if (i < 1 || i > this._size) {
      throw new RangeError('超出范围');
    }

    let currNode = this.getHeaderNode().next;

    let index = 1;
    while (currNode && index !== i) {
      currNode = currNode.next;
      index++;
    }
    if (!currNode) {
      return;
    }
    currNode.next = currNode.next.next;

    let currNode = this.getHeaderNode();
    while (!currNode.next && currNode.next.val !== item) {
      currNode = currNode.next;
    }

    this._size--;
  }

  /**
   * 链表添加新节点
   * @param {Node} item 已经存在的节点
   * @param {*} data 新节点数据
   */
  insert(i, data) {
    if (i < 1 || i > this._size) {
      throw new RangeError('超出范围');
    }

    let currNode = this.getHeaderNode().next;
    let index = 1;

    while (currNode && index !== i) {
      currNode = currNode.next;
      index++;
    }

    const newNode = new Node(data);
    newNode.next = currNode.next;
    currNode.next = newNode;
    this._size++;
  }

  // 链表末尾添加新的节点
  append(data) {
    const newNode = new Node(data);
    this.getLastNode().next = newNode;
    this._size++;
  }

  // 获得指定值的节点，如果不存在则返回 null
  findNode(data) {
    let currNode = this.getHeaderNode();
    while (currNode && currNode.val !== data) {
      currNode = currNode.next;
    }

    return currNode;
  }
}

module.exports = LinkList;
