/**
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 
 * 
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};

module.exports = maxDepth;

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

console.log(maxDepth(rootNode));
