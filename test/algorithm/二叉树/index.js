const assert = require('assert');
const maxDepth = require('../../../dataStructure/非线性表/树/q104-二叉树的最大深度');

describe('二叉树', () => {
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
