const _remove = (node, key) => {
  if (!node) return null;
  if (node.data > key) {
    node.left = _remove(node.left, key);
    return node;
  } else if (node.data < key) {
    node.right = _remove(node.right, key);
    return node;
  } else {
    // 当前节点无叶子节点
    if (!node.right && !node.left) {
      node = null;
      return node;
    } else if (node.right && !node.left) {
      // 只有右侧存在叶子节点
      node = node.right;
      return node;
    } else if (node.left && !node.right) {
      // 只有左侧存在叶子节点
      node = node.left;
      return node;
    } else {
      // 存在两个叶子节点
      // 首先将右侧叶子节点复制给子节点
      // 再删除右侧右子节点
      node.data = node.right.data;
      node.right = _remove(node.right, node.right.data);
      return node;
    }
  }
};

const _search = (node, key) => {
  if (node) {
    if (node.data === key) {
      return node;
    } else if (node.data > key) {
      // 左
      return _search(node.left, key);
    } else {
      // 右
      return _search(node.right, key);
    }
  } else {
    return null;
  }
};

const _inOrderTraverse = (node, cb) => {
  if (node) {
    _inOrderTraverse(node.left, cb);
    cb(node.data);
    _inOrderTraverse(node.right, cb);
  }
};

const _preOrderTraverse = (node, cb) => {
  if (node) {
    cb(node.data);
    _preOrderTraverse(node.left, cb);
    _preOrderTraverse(node.right, cb);
  }
};

const _postOrderTraverse = (node, cb) => {
  if (node) {
    _postOrderTraverse(node.left, cb);
    _postOrderTraverse(node.right, cb);
    cb(node.data);
  }
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // 根节点
  }

  // 向树种插入一个节点
  inset(key) {
    const newNode = new Node(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  // 在树种查找指定值
  search(key) {
    const res = _search(this.root, key);
    return res;
  }

  /**
   * @description 通过中序遍历方式遍历树中的所有节点
   * 访问根节点的操作在左右节点之间
   * @param {function} cb
   */
  inOrderTraverse(cb) {
    _inOrderTraverse(this.root, cb);
  }

  /**
   * @description  通过先序遍历方式遍历树中的所有节点
   * 访问根节点的操作，在访问左右节点之前
   * @param {function} cb
   */
  preOrderTraverse(cb) {
    _preOrderTraverse(this.root, cb);
  }

  /**
   * @description 通过后序遍历方式遍历树中的所有节点
   * 访问根节点在左右节点之后
   * @param {function} cb
   */
  postOrderTraverse(cb) {
    _postOrderTraverse(this.root, cb);
  }

  // 从树中移除一个节点
  remove(key) {
    this.root = _remove(this.root, key);
  }

  _insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
      // 左边
    } else {
      // 右边
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.inset(18);
binarySearchTree.inset(10);
binarySearchTree.inset(20);
binarySearchTree.inset(2);
binarySearchTree.inset(11);
binarySearchTree.inset(19);
binarySearchTree.inset(31);

console.log('后序遍历');
binarySearchTree.postOrderTraverse(data => {
  console.log(data);
});
console.log('中序遍历');
binarySearchTree.inOrderTraverse(data => {
  console.log(data);
});

console.log('search', binarySearchTree.search(31));

binarySearchTree.remove(20);
console.log('前序遍历');
binarySearchTree.preOrderTraverse(data => {
  console.log(data);
});
