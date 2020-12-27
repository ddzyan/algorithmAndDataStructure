const assert = require('assert');
const maxDepth = require('../../../../dataStructure/非线性表/树/二叉树/q104-二叉树的最大深度');
const BinarySearchTree = require('../../../../dataStructure/非线性表/树/二叉树/BinarySearchTree');

describe('二叉树', () => {
  describe('平衡二叉树 test', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.inset(18);
    binarySearchTree.inset(10);
    binarySearchTree.inset(20);
    binarySearchTree.inset(2);
    binarySearchTree.inset(11);
    binarySearchTree.inset(19);
    binarySearchTree.inset(31);

    it('获得最大值', () => {
      assert.strictEqual(binarySearchTree.getMax().data, 31, '最大值错误');
    });

    it('获得最小值', () => {
      assert.strictEqual(binarySearchTree.getMin().data, 2, '最小值错误');
    });

    it('查找指定节点', () => {
      const node = binarySearchTree.search(2);
      assert.strictEqual(node.data, 2, '值错误');
    });
  });

  describe('leetCode test', () => {
    it('q104-二叉树的最大深度 test', () => {
      class Node {
        constructor(value) {
          this.data = value;
          this.left = null;
          this.right = null;
        }
      }

      const rootNode = new Node(3);

      rootNode.left = new Node(9);

      const twnode = new Node(20);
      rootNode.right = twnode;
      twnode.left = new Node(15);
      twnode.right = new Node(7);

      const depth = maxDepth(rootNode);
      assert.strictEqual(depth, 3);
    });
  });
});
